#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = './src/components/ChatAssistant.tsx';

try {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix missing types
  content = content.replace(/\(event: \)/g, '(event: any)');
  content = content.replace(/\(event: \)/g, '(event: any)');
  
  // Fix missing return type
  content = content.replace(/:\s*{\s*content:\s*string\s*metadata:\s*}/g, ': { content: string; metadata: any }');
  
  // Fix missing type in Date.now()
  content = content.replace(/Date\.now\(\)\s*}/g, 'Date.now() }');
  
  // Fix missing type in smooth behavior
  content = content.replace(/behavior:\s*'smooth'\s*}/g, "behavior: 'smooth' }");
  
  fs.writeFileSync(filePath, content);
  console.log('Fixed ChatAssistant.tsx');
} catch (error) {
  console.error('Error fixing ChatAssistant.tsx:', error.message);
}