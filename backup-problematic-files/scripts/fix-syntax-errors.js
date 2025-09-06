
#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import {glob} from 'glob';
// Common syntax fixes
const fixes = [// Fix numeric literals in object properties
  {
    "pattern": /(\w+):\s*(\d+)([a-zA-Z]+)/g,
    "replacement": '$1: $2$3'
  },
  // Fix missing quotes around string values
  {
    "pattern": /(\w+):\s*([a-zA-Z][a-zA-Z0-9\s]+)(?=\s*[}])/g,
    "replacement": '$1: "$2"'
  },
  // Fix malformed JSX attributes
  {
    "pattern": /(\w+)=\{"([^"]+)"\}/g,
    "replacement": '$1={"$2"}'
  },
  // Fix missing colons in object properties
  {
    "pattern": /(\w+)\s+(\d+)/g,
    "replacement": '$1: $2'
  },
  // Fix malformed style objects
  {
    "pattern": /style=\{\{\s*([^}]+)\s*\}\}/g,
    "replacement": (match, content) => {
      // Fix common style object issues
      const fixed = content
        .replace(/(\w+):\s*(\d+)([a-zA-Z]+)/g, '$"1": "$2$3"')
        .replace(/(\w+):\s*([^}]+)(?=\s*[}])/g, (m, prop, value) => {
          if (value && value.includes('px') || value && value.includes('rem') || value && value.includes('%') || value && value.includes('vh') || value && value.includes('vw')) {
            return "${prop}: "${value}""}
          return m});
      return "style={{ ${fixed} }}`}
  },
  // Fix unterminated strings
  {
    "pattern": /"([^"]*)\n/g,
    "replacement": '"$1"'
  },
  // Fix malformed template literals
  {
    "pattern": /\$\{([^}]+)\}/g,
    "replacement": '${$1}'
  }
];
function fixFile(filePath) {
  try {
    let content = fs && fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    // Apply fixes
    fixes && fixes.forEach(fix => {
      if (typeof fix && fix.replacement === 'function') {
        content = content && content.replace(fix && fix.pattern, fix && fix.replacement)} else {
        content = content && content.replace(fix && fix.pattern, fix && fix.replacement)}
    });
    // Additional specific fixes for common issues
    content = content
      // Fix numeric literals in style objects
      .replace(/(\w+):\s*(\d+)(px|rem|%|vh|vw|em)/g, '$"1": "$2$3"')
      // Fix missing quotes in object properties
      .replace(/(\w+):\s*([a-zA-Z][a-zA-Z0-9\s\-_]+)(?=\s*[}])/g, (match, prop, value) => {
        if (!value && value.includes('"') && !value && value.includes("'") && !value && value.includes('`')) {
          return `${prop}: "${value}"`}
        return match})
      // Fix malformed JSX
      .replace(/<(\w+)\s+([^>]+)>\s*<\/\1>/g, '<$1 $2 />')
      // Fix unterminated strings in JSX
      .replace(/(\w+)="([^"]*)\n([^"]*)"([^>]*>)/g, '$1="$2$3"$4');
    if (content !== originalContent) {
      fs && fs.writeFileSync(filePath, content, 'utf8');
      console && console.log(`"Fixed": ${filePath}`);
      return true}
    return false} catch (error) {
    console && console.error(`Error fixing ${filePath}:`, error && error.message);
    return false}

async function main() {
  const patterns = ['pages/**/*.tsx',
    'components/**/*.tsx',
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  let totalFixed = 0;

    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++}
    }
  }

