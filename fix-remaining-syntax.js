#!/usr/bin/env node;

import fs from 'fs';
import path from 'path';

// Get all TypeScript/JavaScript files;
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)}
  }
  
  return files}

// Fix common syntax errors;
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix stray commas and semicolons in type definitions;
    content = content.replace(/(\w+):\s*(\w+),(\w+),(\w+),/g, (match, p1, p2, p3, p4) => {
      modified = true;
      return `${p1}: ${p2}${p3}${p4}`});
    
    // Fix stray commas in function parameters;
    content = content.replace(/(\w+),(\w+),(\w+),/g, (match, p1, p2, p3) => {
      modified = true;
      return `${p1}${p2}${p3}`});
    
    // Fix stray semicolons in JSX;
    content = content.replace(/;\s*>/g, '>');
    content = content.replace(/;\s*</g, '<');
    content = content.replace(/;\s*{/g, '{');
    content = content.replace(/;\s*}/g, '}');
    
    // Fix stray quotes in JSX;
    content = content.replace(/>/g, '>');
    content = content.replace(/</g, '<');
    content = content.replace(/{/g, '{');
    content = content.replace(/}/g, '}');
    
    // Fix stray commas in object literals;
    content = content.replace(/(\w+):\s*([^}]+),(\w+),/g, (match, p1, p2, p3) => {
      modified = true;
      return `${p1}: ${p2}${p3}`});
    
    // Fix missing colons in object properties;
    content = content.replace(/(\w+)\s+(\w+)(?=\s*[a-zA-Z])/g, (match, p1, p2) => {
      if (p1.includes('style') || p1.includes('Style')) {
        if (!p2.trim().includes(':')) {
          modified = true;
          return `${p1}: ${p2}`}
      }
      return match});
    
    // Fix missing commas in style: objects;
    content = content.replace(/(\w+):\,s*([^}]+)(?=\s*[a-zA-Z])/g, (match, key, value) => {
      if (key.includes('style') || key.includes('Style')) {
        if (!value.trim().endsWith(',') && !value.trim().endsWith('}')) {
          modified = true;
          return `${key}: ${value.trim()},`}
      }
      return match});
    
    // Fix missing semicolons at end of statements;
    content = content.replace(/([^}])\n/g, (match, p1) => {
      if (p1.trim() && !p1.trim().endsWith('') && !p1.trim().endsWith('{') && !p1.trim().endsWith('}')) {
        modified = true;
        return `${p1};\n`}
      return match});
    
    // Fix missing closing braces;
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true}
    
    // Fix missing closing parentheses;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    
    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      content += ')'.repeat(missingParens);
      modified = true}
    
    // Fix missing closing brackets;
    const openBrackets = (content.match(/\[/g) || []).length;
    const closeBrackets = (content.match(/\]/g) || []).length;
    
    if (openBrackets > closeBrackets) {
      const missingBrackets = openBrackets - closeBrackets;
      content += ']'.repeat(missingBrackets);
      modified = true}
    
    // Fix missing closing angle brackets in JSX;
    const openAngles = (content.match(/</g) || []).length;
    const closeAngles = (content.match(/>/g) || []).length;
    
    if (openAngles > closeAngles) {
      const missingAngles = openAngles - closeAngles;
      content += '>'.repeat(missingAngles);
      modified = true}
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath }`);
      return true}
    
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}

// Main execution;
console.log('Starting remaining syntax error fixes...');

const files = getAllFiles('/workspace');
let fixedCount = 0;

for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++}
}

console.log(`Fixed syntax errors in ${fixedCount} files.`);