#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// Function to fix merge conflicts in a file,
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove merge conflict markers,
content = content.replace(/[\s\S]*?    content = content.replace(/[\s\S]*?[\s\S]*?    content = content.replace(/[\s\S]*?[\s\S]*?    content = content.replace(/[\s\S]*?    content = content.replace(/[\s\S]*?/g, '');
    // Fix common syntax errors,
content = content.replace(/import React from "react";";/g, 'import React from "react";');
    content = content.replace(/import { Helmet } from 'react-helmet-async';";/g, 'import { Helmet } from 'react-helmet-async';');
    content = content.replace(/return \("/g, 'return (');
    content = content.replace(/<Helmet><\/Helmet>/g, '<Helmet>');
    content = content.replace(/<\/Helmet>"/g, '</Helmet>');
    content = content.replace(/<div className="[^"]*"><\/div>"/g, (match) => match.replace(/"/g, ''));
    content = content.replace(/<h1[^>]*>[^<]*<\/h1>"/g, (match) => match.replace(/"/g, ''));
    content = content.replace(/<p[^>]*>[^<]*<\/p>"/g, (match) => match.replace(/"/g, ''));
    content = content.replace(/\);"/g, ');');
    content = content.replace(/};"/g, '};');
    content = content.replace(/export default [^;]+;"/g, (match) => match.replace(/"/g, ''));
    // Fix unterminated strings,
content = content.replace(/"([^"]*?)\n/g, '"$1"\n');
    // Fix extra semicolons,
content = content.replace(/;;+/g, ';');
    content = content.replace(/;\s*;/g, ';');
    // Fix malformed JSX,
content = content.replace(/<div className="[^"]*"><\/div>"/g, (match) => {
  return null;
      const className = match.match(/className="([^"]*)"/)?.[1] || '';
      return `<div className="${className}">""
    console.log(`Fixed merge conflicts in: ${filePath}""
    console.error(`Error fixing ${filePath}:""
      console.log(`✅ Fixed: ${filePath}""
    console.error(`❌ Error processing ${filePath}:""
    console.error(`Failed to process ${file}:""
console.log(`\nFixed ${fixedCount} files, ${errorCount} errors encountered."")