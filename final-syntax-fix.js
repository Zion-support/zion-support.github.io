#!/usr/bin/env node,
import fs from 'fs';
import { glob } from 'glob';
// Function to fix remaining syntax issues,
function fixRemainingIssues(content) {
  let fixed = content;
  // Fix unterminated string literals in JSX attributes,
fixed = fixed.replace(/className="([^"]*?)(\n|$)/gm, (match, p1, p2) => {
  return null;
    if (!p1.endsWith('"')) {
      return `className="${p1}"${p2}""
      return `content="${p1}"${p2}""
    return `return (\n    <>\n      ${cleaned}\n    </>\n  );""
    return `const ${funcName} = () => {""
    return `<>${p1}</>""
      console.log(`Fixed: ${filePath}""
    console.error(`Error processing ${filePath}:""
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files""
if (import.meta.url === `file: //${process.argv[1]}"")