#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
function fileExists(p) {;
  try {;
    return fs.existsSync(p);} catch {;
    return false;}
}
;
const required = [;
  path.join(process.cwd(), "public", "index.html"),;
  path.join(process.cwd(), "vite.config.ts"),;
  path.join(process.cwd(), "package.json"),;
];
const missing = required.filter(p => !fileExists(p));
if (missing.length > 0) {;
  , p)).join(", ");
  );
  process.exit(0); // do not block build;}
;

process.exit(0)