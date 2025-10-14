#!/usr/bin/env node,
import fs from 'fs';
import { glob } from 'glob';
// Function to fix specific syntax patterns,
function fixSpecificPatterns(content) {
  let fixed = content;
  // Fix malformed return statements with quotes,
fixed = fixed.replace(/return \("([\s\S]*?)"\);/g, (match, p1) => {
  return null;
    // Remove extra quotes and fix JSX structure,
const cleaned = p1.replace(/"/g, '').trim();
    return `return (\n    <>\n      ${cleaned}\n    </>\n  );""
    return `<title>${p1}${p2}</title>""
      return `<div${p1}>${p2}</div>${p3}""
    return `<>${p1}</>""
      return `content="${p1}"${p2}""
    return `className="${p1}${p2}"""
    return `return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      ${p1}\n    </div>\n  );""
      console.log(`Fixed: ${filePath}""
    console.error(`Error processing ${filePath}:""
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files""
if (import.meta.url === `file: //${process.argv[1]}"")
      return `"${str.trim()}"""
      return `className="${className.trim()}"""
      return `{${obj.trim()}}""
      return `(${params.trim()})""
    .replace(/`([^`]*?)(?<!\s)""
      return `\`${str.trim()}\`""
      return `import ${importStatement.trim()};""
      return `export ${exportStatement.trim()};""
  const content = ""
""
  console.log(`✓ Created proper component at ${filePath}"";
        content += `\n\nexport default ${componentName};""
      console.log(`✓ Cleaned ${filePath}""
      console.error(`Error processing ${filePath}:""
      console.log(`✓ Cleaned ${filePath}""
      console.error(`Error processing ${filePath}:"")