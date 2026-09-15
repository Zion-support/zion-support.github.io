#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const wrangler = fs.readFileSync(path.join(__dirname, "..", "..", "wrangler.toml"), "utf8");
const worker = path.join(__dirname, "..", "..", "src", "index.js");
const required = [
  'name = "ziontechgroup"',
  'main = "src/index.js"',
  "directory = \"./public\"",
  'binding = "ASSETS"',
  "cf-static-build.sh",
  "no_bundle = true",
  "SKIP_DEPENDENCY_INSTALL",
];
const missing = required.filter((t) => !wrangler.includes(t));
if (missing.length) {
  console.error("wrangler-static-check: missing", missing.join(", "));
  process.exit(1);
}
if (wrangler.includes("pages_build_output_dir")) {
  console.error("wrangler-static-check: pages_build_output_dir must stay off (Workers vs Pages)");
  process.exit(1);
}
const pkg = fs.readFileSync(path.join(__dirname, "..", "..", "package.json"), "utf8");
if (!pkg.includes('"installCommand": "true"') || !pkg.includes("cf-static-build.sh")) {
  console.error("wrangler-static-check: package.json cloudflare.installCommand must skip npm ci");
  process.exit(1);
}
if (!fs.existsSync(worker)) {
  console.error("wrangler-static-check: missing src/index.js");
  process.exit(1);
}
const nvmrc = fs.readFileSync(path.join(__dirname, "..", "..", ".nvmrc"), "utf8").trim();
if (nvmrc !== "20") {
  console.error("wrangler-static-check: .nvmrc must pin Node 20 for Workers Builds");
  process.exit(1);
}
if (!fs.existsSync(path.join(__dirname, "..", "..", "public", "404.html"))) {
  console.error("wrangler-static-check: missing public/404.html for assets not_found_handling");
  process.exit(1);
}
if (!pkg.includes('"build": "bash scripts/cf-static-build.sh"')) {
  console.error("wrangler-static-check: package.json build must be cf-static-build.sh (not next)");
  process.exit(1);
}
console.log("wrangler-static-check: ok");
