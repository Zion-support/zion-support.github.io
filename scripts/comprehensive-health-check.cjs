#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[${ts}] ${msg}`);
}

function exists(p) {
  try { return fs.existsSync(p); } catch { return false; }
}

function main() {
  log("🏥 Starting Comprehensive Health Check...");
  const results = {
    timestamp: new Date().toISOString(),
    checks: [],
    summary: { total: 0, passed: 0, failed: 0, warnings: 0 }
  };

  const checks = [
    { name: "package.json present", run: () => exists(path.join(process.cwd(), "package.json")) ? "passed" : "failed" },
    { name: "eslint config present", run: () => (exists("eslint.config.js") || exists(".eslintrc.js")) ? "passed" : "warning" },
    { name: "node_modules installed", run: () => exists("node_modules") ? "passed" : "warning" }
  ];

  for (const c of checks) {
    const status = c.run();
    results.checks.push({ name: c.name, status });
    results.summary.total += 1;
    if (status === "passed") results.summary.passed += 1;
    else if (status === "warning") results.summary.warnings += 1;
    else results.summary.failed += 1;
  }

  const reportPath = path.join(process.cwd(), `health-check-report-${Date.now()}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  log(`📄 Health check report saved: ${reportPath}`);

  if (results.summary.failed > 0) process.exitCode = 1;
}

main();
