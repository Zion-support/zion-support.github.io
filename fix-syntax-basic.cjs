#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
console.log("🔧 Fixing critical syntax errors...");
const files = [ "pages/api.tsx",
  "pages/careers.tsx",
  "pages/case-studies.tsx",
  "pages/help.tsx",
  "pages/press.tsx" ];
let fixedCount = 0;