#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
<<<<<<< HEAD
function fileExists(p) {
  try {
  return fs.existsSync(p);} catch {
  return false;}
}

const required = [;
  path.join(process.cwd(), "public", "index.html"),;
  path.join(process.cwd(), "vite.config.ts"),;
  path.join(process.cwd(), "package.json"),;"
=======

function fileExists(p) {
  try {
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

const required = [
  path.join(process.cwd(), "public", "index.html"),
  path.join(process.cwd(), "vite.config.ts"),
  path.join(process.cwd(), "package.json"),
>>>>>>> pr-12866
];

const missing = required.filter(p => !fileExists(p));
<<<<<<< HEAD
if (missing.length > 0) {
  console.warn(;
    "[pre-build-health-check] Missing files:",;
    missing.map(p => path.relative(process.cwd(), p)).join(", ");
  );
  process.exit(0); // do not block build;}

console.log("[pre-build-health-check] OK");
process.exit(0)
=======

if (missing.length > 0) {
  console.warn(
    "[pre-build-health-check] Missing files: ",
    missing.map(p => path.relative(process.cwd(), p)).join(", ")
  );
  process.exit(0); // do not block build
}

console.log("[pre-build-health-check] OK");
process.exit(0);
>>>>>>> pr-12866
