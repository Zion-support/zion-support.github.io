#!/usr/bin/env node;
const fs = require('fs');

// Function to fix JSX syntax errors;
function fixJSXSyntaxErrors() {

  try {
  let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Fix JSX attribute semicolons;
    const fixes = [;
  // Fix title attribute semicolons;
      { pattern: /title="([^"]*);"/g, replacement: "title="$1"" },
      { pattern: /title="([^"]*);"/g, replacement: "title="$1"" },
      // Fix description attribute semicolons;
      { pattern: /description="([^"]*);"/g, replacement: "description="$1"" },
      { pattern: /description="([^"]*);"/g, replacement: "description="$1"" },
      // Fix keywords attribute semicolons;
      { pattern: /keywords="([^"]*);"/g, replacement: "keywords="$1"" },
      { pattern: /keywords="([^"]*);"/g, replacement: "keywords="$1"" },
      // Fix className attribute semicolons;
      { pattern: /className="([^"]*);"/g, replacement: "className="$1"" },
      { pattern: /className="([^"]*);"/g, replacement: "className="$1"" },
      // Fix JSX closing tag semicolons;
      { pattern: /(\/>);/g, replacement: "$1" },
      { pattern: /(<\/[^>]+>);/g, replacement: "$1" },
      // Fix JSX opening tag semicolons;
      { pattern: /(>);/g, replacement: "$1" },
      // Fix array element semicolons in JSX;
      { pattern: /"([^"]*);",/g, replacement: ""$1"," },
      { pattern: /"([^"]*);",/g, replacement: ""$1"," },
    ];
    fixes.forEach(fix => {;
  const newContent = content.replace(fix.pattern, fix.replacement);