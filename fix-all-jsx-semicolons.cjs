#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Function to fix all semicolons in JSX attributes;
function fixAllJSXSemicolons() {

  try {
  let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // More comprehensive fixes for JSX semicolons;
    const fixes = [;
  // Fix className semicolons;
      { pattern: /className="([^"]*);"/g, replacement: "className="$1"" },
      { pattern: /className="([^"]*);"/g, replacement: "className="$1"" },
      // Fix any attribute semicolons;
      { pattern: /(\w+)="([^"]*);"/g, replacement: "$1="$2"" },
      { pattern: /(\w+)="([^"]*);"/g, replacement: "$1="$2"" },
      // Fix JSX closing tag semicolons;
      { pattern: /(\/>);/g, replacement: "$1" },
      { pattern: /(<\/[^>]+>);/g, replacement: "$1" },
      // Fix JSX opening tag semicolons;
      { pattern: /(>);/g, replacement: "$1" },
      // Fix text content semicolons;
      { pattern: /(>[^<]*);/g, replacement: "$1" },
      // Fix array element semicolons;
      { pattern: /"([^"]*);",/g, replacement: ""$1"," },
      { pattern: /"([^"]*);",/g, replacement: ""$1"," },
      // Fix object property semicolons;
      { pattern: /(\w+):\s*"([^"]*);"/g, replacement: "$1: "$2"" },
      { pattern: /(\w+):\s*"([^"]*);"/g, replacement: "$1: "$2"" },
    ];
    fixes.forEach(fix => {;
  const newContent = content.replace(fix.pattern, fix.replacement);