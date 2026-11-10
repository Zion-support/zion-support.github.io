#!/usr/bin/env node
"use strict";
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const get = (name) => {
  const idx = args.indexOf(`--${name}`);
  if (idx >= 0 && idx + 1 < args.length) return args[idx + 1];
  const eq = args.find((a) => a.startsWith(`--${name}=`));
  if (eq) return eq.split("=").slice(1).join("=");
  return undefined;
};
const url = get("url");
const liveUrl = get("live-url");
const baselineFile = get("baseline-file");
const outputDir = get("output-dir") || ".hermes/memory/performance-budget";

if (!url && !liveUrl) {
  console.error("Missing required --url or --live-url");
  process.exit(1);
}

const HARD_LIMITS = {
  LCP: 4.0,
  FID: 0.3,
  CLS: 0.25,
  FCP: 3.0,
  TTFB: 2.0,
};
const REGRESSION_THRESHOLD = 0.10;

function log(msg) { console.log(`[${new Date().toISOString()}] ${msg}`); }
function jsonStatus(key, value) {
  try { console.error(`__STATUS__ ${key}=${JSON.stringify(value)}`); } catch {}
}

function runLighthouse(targetUrl, outDir) {
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "lighthouse-report.json");
  try {
    execFileSync("npx", [
      "--no-install", "lighthouse", targetUrl, "--output=json",
      `--output-path=${outPath}`,
      "--chrome-flags=--headless --no-sandbox --disable-gpu", "--quiet",
    ], { stdio: "pipe", timeout: 600000, env: { ...process.env, CI: "true" } });
    return outPath;
  } catch (e) {
    throw new Error(`Lighthouse execution failed for ${targetUrl}: ${e.message}`);
  }
}

function parseReport(reportPath) {
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  if (report.runtimeError) throw new Error(`Lighthouse runtime error: ${report.runtimeError.message || report.runtimeError.code}`);
  const audits = report.audits || {};
  const getMetric = (id, divisor = 1000) => {
    const audit = audits[id];
    if (!audit || audit.scoreDisplayMode === "error" ||
        !Number.isFinite(audit.numericValue) || audit.numericValue < 0) {
      throw new Error(`Required audit ${id} is missing or invalid; performance coverage is incomplete. FID requires a compatible measurement source; do not silently omit or substitute it.`);
    }
    return audit.numericValue / divisor;
  };
  const score = report.categories?.performance?.score;
  if (!Number.isFinite(score) || score < 0 || score > 1) throw new Error("Missing or invalid performance score");
  return {
    lcp: getMetric("largest-contentful-paint"),
    fid: getMetric("first-input-delay"),
    cls: getMetric("cumulative-layout-shift", 1),
    fcp: getMetric("first-contentful-paint"),
    ttfb: getMetric("time-to-first-byte"),
    performance: score * 100,
  };
}

function validateMetrics(metrics, label) {
  for (const key of ["lcp", "fid", "cls", "fcp", "ttfb", "performance"]) {
    const value = metrics?.[key];
    if (!Number.isFinite(value) || value < 0 || (key === "performance" && value > 100)) {
      throw new Error(`Invalid ${label} metric: ${key}`);
    }
  }
}

function normalizeBaseline(baseline) {
  const metrics = { ...baseline?.metrics };
  // Legacy baselines named the performance score "overall". Accept that alias
  // only when the canonical field is absent; never hide an invalid current field.
  if (!Object.prototype.hasOwnProperty.call(metrics, "performance") &&
      Object.prototype.hasOwnProperty.call(metrics, "overall")) {
    metrics.performance = metrics.overall;
  }
  validateMetrics(metrics, "baseline");
  if (Object.prototype.hasOwnProperty.call(metrics, "overall") &&
      metrics.overall !== metrics.performance) {
    throw new Error("Conflicting baseline performance and overall scores");
  }
  return { ...baseline, metrics };
}

function loadBaseline() {
  if (!baselineFile) return null;
  // An explicitly requested baseline must never silently become a hard-limits-only run.
  return normalizeBaseline(JSON.parse(fs.readFileSync(baselineFile, "utf8")));
}

function saveBaseline(dir, metrics) {
  fs.mkdirSync(dir, { recursive: true });
  const entry = { date: new Date().toISOString().split("T")[0], metrics, updatedAt: Date.now() };
  fs.writeFileSync(path.join(dir, "baseline.json"), JSON.stringify(entry, null, 2));
  const histPath = path.join(dir, "history.json");
  let history = [];
  if (fs.existsSync(histPath)) {
    try { history = JSON.parse(fs.readFileSync(histPath, "utf8")); } catch {}
  }
  history.push(entry);
  const cutoff = Date.now() - 90 * 24 * 60 * 60 * 1000;
  while (history.length && history[0].updatedAt < cutoff) history.shift();
  fs.writeFileSync(histPath, JSON.stringify(history, null, 2));
}

function compare(metrics, baseline) {
  validateMetrics(metrics, "current");
  if (!baseline) return { ok: true, reason: "No baseline available; using hard limits only" };
  baseline = normalizeBaseline(baseline);
  const drops = {};
  for (const key of ["lcp", "fid", "cls", "fcp", "ttfb", "performance"]) {
    const cur = metrics[key];
    const base = baseline.metrics[key];
    // Lower timing/CLS is better; a lower performance score is worse.
    const worsening = key === "performance" ? base - cur : cur - base;
    const relativeDrop = base === 0 ? (worsening > 0 ? Infinity : 0) : worsening / base;
    if (relativeDrop > REGRESSION_THRESHOLD) {
      drops[key] = { base, cur, dropPct: relativeDrop * 100 };
    }
  }
  return { ok: Object.keys(drops).length === 0, drops };
}

function checkHardLimits(metrics) {
  validateMetrics(metrics, "current");
  const violations = [];
  if (metrics.lcp != null && metrics.lcp > HARD_LIMITS.LCP) violations.push(`LCP ${metrics.lcp.toFixed(2)}s > ${HARD_LIMITS.LCP}s`);
  if (metrics.fid != null && metrics.fid > HARD_LIMITS.FID) violations.push(`FID ${metrics.fid.toFixed(2)}s > ${HARD_LIMITS.FID}s`);
  if (metrics.cls != null && metrics.cls > HARD_LIMITS.CLS) violations.push(`CLS ${metrics.cls.toFixed(2)} > ${HARD_LIMITS.CLS}`);
  if (metrics.fcp != null && metrics.fcp > HARD_LIMITS.FCP) violations.push(`FCP ${metrics.fcp.toFixed(2)}s > ${HARD_LIMITS.FCP}s`);
  if (metrics.ttfb != null && metrics.ttfb > HARD_LIMITS.TTFB) violations.push(`TTFB ${metrics.ttfb.toFixed(2)}s > ${HARD_LIMITS.TTFB}s`);
  return violations;
}

async function main() {
  log(`🔍 Performance Budget Check — local=${url}${liveUrl ? ` live=${liveUrl}` : ""}`);
  const baseline = loadBaseline();
  let primaryOk = false;
  let primaryMetrics = null;
  let primaryOutPath = null;
  let primaryError = null;

  if (url) {
    try {
      primaryOutPath = runLighthouse(url, path.join(outputDir, `run-${Date.now()}-local`));
      primaryMetrics = parseReport(primaryOutPath);
      log(`Local metrics: LCP=${primaryMetrics.lcp?.toFixed(2)||"N/A"}s, FID=${primaryMetrics.fid?.toFixed(2)||"N/A"}s, CLS=${primaryMetrics.cls?.toFixed(2)||"N/A"}, FCP=${primaryMetrics.fcp?.toFixed(2)||"N/A"}s, TTFB=${primaryMetrics.ttfb?.toFixed(2)||"N/A"}s, Score=${primaryMetrics.performance?.toFixed(0)||"N/A"}`);
      primaryOk = true;
    } catch (e) {
      primaryError = e.message;
      log(`Local run failed: ${primaryError}`);
    }
  }

  let liveOk = false;
  let liveMetrics = null;
  let liveOutPath = null;
  let liveError = null;

  if (liveUrl) {
    try {
      liveOutPath = runLighthouse(liveUrl, path.join(outputDir, `run-${Date.now()}-live`));
      liveMetrics = parseReport(liveOutPath);
      log(`Live metrics: LCP=${liveMetrics.lcp?.toFixed(2)||"N/A"}s, FID=${liveMetrics.fid?.toFixed(2)||"N/A"}s, CLS=${liveMetrics.cls?.toFixed(2)||"N/A"}, FCP=${liveMetrics.fcp?.toFixed(2)||"N/A"}s, TTFB=${liveMetrics.ttfb?.toFixed(2)||"N/A"}s, Score=${liveMetrics.performance?.toFixed(0)||"N/A"}`);
      liveOk = true;
    } catch (e) {
      liveError = e.message;
      log(`Live run failed: ${liveError}`);
    }
  }

  // Every requested target must be measured and pass. Live success cannot mask a
  // broken or regressed PR build.
  if ((url && !primaryOk) || (liveUrl && !liveOk)) {
    console.error("❌ Performance budget check failed: a requested target has no valid metrics");
    process.exit(1);
  }

  const results = [
    ...(url ? [{ target: "local", metrics: primaryMetrics }] : []),
    ...(liveUrl ? [{ target: "live", metrics: liveMetrics }] : []),
  ];
  for (const result of results) {
    result.hardViolations = checkHardLimits(result.metrics);
    result.regression = compare(result.metrics, baseline);
    if (result.hardViolations.length || !result.regression.ok) {
      console.error(`❌ ${result.target} performance budget failed: ${JSON.stringify(result)}`);
      process.exit(1);
    }
  }
  const reportMetrics = primaryMetrics || liveMetrics;
  const { hardViolations, regression } = results[0];
  console.log("✅ All requested targets passed hard limits and baseline checks");
  if (!baseline) log("No baseline configured; only hard limits were evaluated.");

  const targetOutPath = primaryOutPath || liveOutPath;
  if (targetOutPath && fs.existsSync(targetOutPath)) {
    try {
      fs.copyFileSync(targetOutPath, path.join(outputDir, "latest-report.json"));
      const dest = baselineFile ? path.dirname(baselineFile) : outputDir;
      saveBaseline(dest, reportMetrics);
      log(`   Baseline updated`);
    } catch (e) {
      log(`   Baseline update skipped: ${e.message}`);
    }
  }

  const summary = {
    url: url || null,
    liveUrl: liveUrl || null,
    metrics: reportMetrics,
    hardViolations,
    regression,
    localOk: primaryOk,
    liveOk,
    localError: primaryError,
    liveError,
  };
  jsonStatus("perf_summary", summary);
  log("✅ Performance budget check PASSED");
  process.exit(0);
}

main().catch((err) => {
  console.error("❌ Unexpected error:", err);
  process.exit(1);
});
