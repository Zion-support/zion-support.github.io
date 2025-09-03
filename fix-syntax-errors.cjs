#!/usr/bin/env node;

<<<<<<< HEAD
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Fix malformed quotes
      .replace(/''/g, '\n')
      .replace(/';'/g, ';\n')
      .replace(/';/g, ';\n')
      .replace(/`'/g, '`\n')
      .replace(/'`/g, '\n`')
      // Fix missing newlines after imports
      .replace(/';import/g, ';\nimport')
      .replace(/';const/g, ';\nconst')
      .replace(/';interface/g, ';\ninterface')
      .replace(/';export/g, ';\nexport')
      // Fix malformed JSX
      .replace(/className="([^"]*)"([^"]*)"([^"]*)"/g, 'className="$1$2$3"')
      .replace(/className={`([^`]*)`([^`]*)`([^`]*)`}/g, 'className={`$1$2$3`}')
      // Fix malformed template literals
      .replace(/`([^`]*)`([^`]*)`([^`]*)`/g, '`$1$2$3`')
      // Fix malformed function calls
      .replace(/\(([^)]*)\);([^;]*);/g, '($1);\n$2;')
      // Clean up multiple newlines
      .replace(/\n{3,}/g, '\n\n')
      // Fix malformed object properties
      .replace(/(\w+):\s*'([^']*)',\s*'([^']*)'/g, '$1: \'$2\',\n    $1: \'$3\'')
      .replace(/(\w+):\s*'([^']*)',\s*(\w+):/g, '$1: \'$2\',\n    $3:');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TypeScript/JavaScript files
const componentsDir = 'components';
const files = [];

function getAllFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFiles(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      files.push(fullPath);
    }
  }
}

getAllFiles(componentsDir);

// Fix all files
files.forEach(fixSyntaxErrors);

console.log(`Fixed ${files.length} files`);
=======
const fs = require("fs");
const path = require("path");
// Function to fix common syntax errors;
function fixSyntaxErrors(content) {
  // Remove corrupted content patterns;
  let fixed = content;
    // Remove malformed import statements;
    .replace(/import React \{ useState \} from "react";\s*import \{ motion\s*\} from "framer-motion"; import \{ [^}]+ \} from "lucide-react";/g, "import React, { useState } from "react";\nimport { motion  } from "framer-motion";\nimport { Shield, TrendingUp, Brain, CheckCircle, Star, ArrowRight, Users, Target, Clock, DollarSign, Database, Zap, Globe, Activity, AlertTriangle, Eye, Lock, Download, Upload, RefreshCw, Settings, Play, Gauge, BarChart3, Cpu, Factory, Truck, HardHat, Thermometer, GaugeIcon, AlertCircle, CheckSquare, XCircle, ShieldCheck, Fingerprint, Search, Bell, FileText, CreditCard, Building, ShoppingCart  } from "lucide-react";");
    ;
    // Fix malformed JSX attributes;
    .replace(/className="([^"]*)"/g, "className="$1"");
    .replace(/className="([^"]*)"/g, "className="$1"");
    ;
    // Fix malformed object properties;
    .replace(/title: "([^"]*)" description:;/g, "title: "$1",\n    description:");
    .replace(/icon: ([^,}]+) color: "([^"]*)",/g, "icon: $1,\n    color: "$2",");
    ;
    // Fix malformed array syntax;
    .replace(/\[
  \s*\{/g, "[\n  {");
    .replace(/,\s*\};\s*\]/g, "\n  }\n];");
    ;
    // Fix malformed function calls;
    .replace(/return\s*\(\s*;/g, "return (\n    ");
    .replace(/return\s*\(\s*<div/g, "return (\n    <div");
    ;
    // Remove corrupted patterns;
    .replace(/; return\(\); <div[^>]*>/g, "return (\n    <div");
    .replace(/; export default[^]*;.*$/g, ");\n\nexport default ComponentName;");
    ;
    // Fix malformed template literals;
    .replace(/`\s*\{\s*activeTab === "([^"]+)" && \(\s*`/g, "{activeTab === "$1" && (");
    .replace(/`\s*\}\s*\{\s*activeTab === "([^"]+)" && \(/g, "}\n{activeTab === "$1" && (");
    ;
    // Remove duplicate content;
    .replace(/(import React[^]+;[\s\S]*?export default[^]+)\1+/g, "$1");
    ;
    // Clean up extra semicolons and commas;
    .replace(/;+$/gm, ";");
    .replace(/,\s*}/g, "\n  }");
    .replace(/,\s*]/g, "\n]");
    ;
    // Fix malformed JSX closing tags;
    .replace(/<\/div>\s*;\s*\)\s*;\s*}/g, "</div>\n  );\n};");
    ;
    // Remove corrupted patterns at the end;
    .replace(/;,"\}\);,"\}\)\s*$/g, ");\n\nexport default ComponentName;");
    .replace(/>>>>>>> pr-\d+.*$/g, "");
    .replace(/;,"\}\);,"\}\)\s*$/g, ");\n\nexport default ComponentName;");
  return fixed;,
}
;
// Function to process a single file;
function processFile(filePath) {
  try {
  const content = fs.readFileSync(filePath, "utf8");
    // Skip if file is too corrupted;
    if (content.length < 100 || content.includes(">>>>>>> pr-")) {
  console.log(`Skipping corrupted file: ${filePath}`);
      return;,
}
    ;
    const fixed = fixSyntaxErrors(content);
    if (fixed !== content) {
  fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);,
}
  } catch (error) {
  console.error(`Error processing ${filePath}:`, error.message);,
}
}
;
// Function to recursively process directory;
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  for (const item of items) {
  const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
  processDirectory(fullPath);,
} else if (item.endsWith(".tsx") || item.endsWith(".ts") || item.endsWith(".jsx") || item.endsWith(".js")) {
  processFile(fullPath);,
}
  }
}
;
// Main execution;
console.log("Starting syntax error fixes...");
processDirectory("./src");
console.log("Syntax error fixes completed!')
>>>>>>> main
