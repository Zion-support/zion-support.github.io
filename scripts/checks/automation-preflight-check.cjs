#!/usr/bin/env node
"use strict";
/**
 * Lightweight workflow preflight used by reusable-workflow-ci.yml.
 * The historical Ruby/grep toolchain is not in this tree; this covers
 * conflict markers, package.json script uniqueness, and YAML presence.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");
const errors = [];

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
}

const markers = ["<" + "<<<<<<", "=" + "======", ">" + ">>>>>>"];
const scanRoots = [
  path.join(root, ".github", "workflows"),
  path.join(root, "scripts"),
  path.join(root, "package.json"),
];
const files = [];
for (const p of scanRoots) {
  if (!fs.existsSync(p)) continue;
  if (fs.statSync(p).isDirectory()) walk(p, files);
  else files.push(p);
}

for (const file of files) {
  if (!/\.(yml|yaml|cjs|js|json|md)$/i.test(file)) continue;
  if (file.includes(`${path.sep}scripts${path.sep}checks${path.sep}`)) continue;
  const text = fs.readFileSync(file, "utf8");
  for (const m of markers) {
    if (text.includes(m)) errors.push(`${path.relative(root, file)}: merge conflict marker ${m}`);
  }
}

const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const scripts = pkg.scripts || {};
const seen = new Map();
for (const key of Object.keys(scripts)) {
  const k = key.toLowerCase();
  if (seen.has(k) && seen.get(k) !== key) {
    errors.push(`duplicate package.json script key (case): ${seen.get(k)} vs ${key}`);
  }
  seen.set(k, key);
}

const wfDir = path.join(root, ".github", "workflows");
const wfs = fs.readdirSync(wfDir).filter((n) => /\.ya?ml$/i.test(n));
if (!wfs.length) errors.push("no workflow YAML files found");
for (const name of wfs) {
  const text = fs.readFileSync(path.join(wfDir, name), "utf8");
  if (!/^name:\s*.+/m.test(text)) errors.push(`${name}: missing name:`);
  if (!/\bon:\s*/m.test(text) && !/^"on":/m.test(text)) errors.push(`${name}: missing on:`);
  if (!/^jobs:\s*/m.test(text)) errors.push(`${name}: missing jobs:`);
}

if (errors.length) {
  console.error("automation preflight FAILED:");
  for (const e of errors) console.error(" -", e);
  process.exit(1);
}
console.log(`automation preflight OK (${wfs.length} workflows, ${files.length} files scanned)`);
