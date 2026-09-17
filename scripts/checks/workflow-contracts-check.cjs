#!/usr/bin/env node
"use strict";
/**
 * SHA-pin + cron integrity for war-room helper workflows (this PR).
 * Does not fail the whole repo's historical floating tags.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");
const wfDir = path.join(root, ".github", "workflows");
const SHA = /^[0-9a-f]{40}$/i;
const OWNED = new Set([
  "war-room-pulse.yml",
  "agent-presence-watchdog.yml",
  "static-deploy.yml",
]);

const errors = [];
const names = new Map();
const crons = [];

for (const name of fs.readdirSync(wfDir).filter((n) => /\.ya?ml$/i.test(n))) {
  const text = fs.readFileSync(path.join(wfDir, name), "utf8");
  const nm = (text.match(/^name:\s*(.+)$/m) || [])[1];
  if (nm) {
    const key = nm.trim();
    if (names.has(key)) errors.push(`duplicate workflow name "${key}": ${names.get(key)} and ${name}`);
    else names.set(key, name);
  }
  const cronRe = /cron:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = cronRe.exec(text))) crons.push({ file: name, cron: m[1] });

  if (!OWNED.has(name)) continue;
  const useRe = /^\s+uses:\s+(\S+)/gm;
  while ((m = useRe.exec(text))) {
    const spec = m[1].replace(/['"]/g, "");
    if (spec.startsWith("./") || spec.startsWith(".github/")) continue;
    const at = spec.lastIndexOf("@");
    if (at < 0) {
      errors.push(`${name}: unpinned uses ${spec}`);
      continue;
    }
    const ref = spec.slice(at + 1);
    if (!SHA.test(ref)) errors.push(`${name}: floating tag uses ${spec} (pin to a 40-char SHA)`);
  }
}

const pulseCrons = crons.filter((c) => c.file === "war-room-pulse.yml" || c.file === "agent-presence-watchdog.yml");
const fiveMin = pulseCrons.filter((c) => c.cron === "*/5 * * * *");
if (fiveMin.length > 1) {
  errors.push(`duplicate */5 cron in war-room helpers: ${fiveMin.map((c) => c.file).join(", ")}`);
}

if (errors.length) {
  console.error("workflow contracts FAILED:");
  for (const e of errors) console.error(" -", e);
  process.exit(1);
}
console.log("workflow contracts OK (owned Pulse/watchdog/static-deploy pinned; single 5-min helper cron)");
