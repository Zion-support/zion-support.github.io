#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
// Function to fix syntax errors in a file,
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    // Fix unterminated string literals,
content = content.replace(/import React from "react";"/g, 'import React from "react";');
    content = content.replace(/import { Helmet } from 'react-helmet-async';"/g, 'import { Helmet } from 'react-helmet-async';');
    content = content.replace(/import { Link } from 'react-router-dom';"/g, 'import { Link } from 'react-router-dom';');
    content = content.replace(/import { [^}]+ } from "lucide-react";"/g, (match) => match.replace(/"/g, ''));
    // Fix malformed JSX,
content = content.replace(/return \("/g, 'return (');
    content = content.replace(/<Helmet><\/Helmet>/g, '<Helmet>');
    content = content.replace(/<\/Helmet>"/g, '</Helmet>');
    content = content.replace(/<div className="[^"]*"><\/div>"/g, (match) => {
  return null;
      const className = match.match(/className="([^"]*)"/)?.[1] || '';
      return `<div className="${className}">""
      return `<div className="${className}">""
      content = ""
export default ${componentName};""
      console.log(`Fixed syntax errors in: ${filePath}""
    console.error(`Error fixing ${filePath}:""
    console.error(`Failed to process ${file}:""
console.log(`\nFixed ${fixedCount} files, ${errorCount} errors encountered."")