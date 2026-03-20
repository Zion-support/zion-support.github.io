#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PROMPT_SCORE = path.join(ROOT, 'automation', 'reports', 'openclaw-prompt-quality-score-latest.json');
const AUTONOMOUS_REPORT = path.join(ROOT, 'automation', 'reports', 'openclaw-autonomous-app-improver-latest.json');
const OUTPUT = path.join(ROOT, 'automation', 'reports', 'openclaw-deploy-confidence-gate-latest.json');

const MIN_SUCCESS_RATE = Number.parseFloat(process.env.OPENCLAW_GATE_MIN_SUCCESS_RATE || '0.6');
const MIN_QUALITY = Number.parseInt(process.env.OPENCLAW_GATE_MIN_QUALITY || '60', 10);

function readJson(file) {
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return null;
  }
}

function main() {
  const score = readJson(PROMPT_SCORE);
  const report = readJson(AUTONOMOUS_REPORT);

  const successRate = score?.successRate ?? 0;
  const quality = score?.averageQualityScore ?? 0;
  const failures = report?.failures ?? 0;
  const successes = report?.successes ?? 0;
  const total = report?.promptsSent ?? 0;

  const reasons = [];
  if (successRate < MIN_SUCCESS_RATE) reasons.push(`success_rate_below_threshold(${successRate} < ${MIN_SUCCESS_RATE})`);
  if (quality < MIN_QUALITY) reasons.push(`quality_below_threshold(${quality} < ${MIN_QUALITY})`);
  if (failures > successes + 2) reasons.push('failure_burst_detected');
  if (total === 0) reasons.push('no_prompt_activity');

  const decision = reasons.length === 0 ? 'allow_deploy' : 'hold_deploy';
  const payload = {
    generatedAt: new Date().toISOString(),
    thresholds: { minSuccessRate: MIN_SUCCESS_RATE, minQuality: MIN_QUALITY },
    inputs: { successRate, quality, failures, successes, total },
    decision,
    reasons,
  };

  fs.writeFileSync(OUTPUT, JSON.stringify(payload, null, 2));
  console.log(`OpenClaw deploy confidence decision: ${decision}`);
  console.log(`Report: ${OUTPUT}`);
}

main();
