#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
const filePath = "./src/components/ChatAssistant.tsx"
try {
  let content = fs.readFileSync(filePath, "utf8");
  // Fix missing types;
  content = content.replace(/\(event: \)/g, '(event: any)');
  content = content.replace(/\(event: \)/g, '(event: any)');

  // Fix missing return type;
  content = content.replace(;
    /:\s*{\s*content:\s*string\s*metadata:\s*}/g,