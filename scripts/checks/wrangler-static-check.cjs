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
if (!fs.existsSync(worker)) {
  console.error("wrangler-static-check: missing src/index.js");
  process.exit(1);
}
console.log("wrangler-static-check: ok");
