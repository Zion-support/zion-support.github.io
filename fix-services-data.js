import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the file
const filePath = path.join(__dirname, 'app/data/servicesData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix common syntax issues
let fixedContent = content
  // Fix missing closing braces and commas
  .replace(/\s*}\s*{\s*id:/g, '},\n    {')
  // Fix missing commas before closing braces
  .replace(/(\s+})\s*(\s*})/g, '$1,$2')
  // Fix missing commas after contactInfo
  .replace(/(\s+contactInfo:\s*{[^}]+})\s*(\s*})/g, '$1,$2')
  // Fix missing commas after link
  .replace(/(\s+link:\s*'[^']+',?)\s*(\s*contactInfo:)/g, '$1,\n      $2')
  // Fix missing commas after closing braces
  .replace(/(\s+})\s*(\s*id:)/g, '$1,\n    $2')
  // Fix missing commas in arrays
  .replace(/(\s+]\s*)(\s*marketPrice:)/g, '$1,\n      $2')
  .replace(/(\s+]\s*)(\s*contactInfo:)/g, '$1,\n      $2')
  .replace(/(\s+]\s*)(\s*link:)/g, '$1,\n      $2')
  // Fix missing commas after arrays
  .replace(/(\s+]\s*)(\s*benefits:)/g, '$1,\n      $2')
  .replace(/(\s+]\s*)(\s*useCases:)/g, '$1,\n      $2')
  .replace(/(\s+]\s*)(\s*pricing:)/g, '$1,\n      $2')
  .replace(/(\s+]\s*)(\s*features:)/g, '$1,\n      $2')
  // Fix missing commas after objects
  .replace(/(\s+}\s*)(\s*benefits:)/g, '$1,\n      $2')
  .replace(/(\s+}\s*)(\s*useCases:)/g, '$1,\n      $2')
  .replace(/(\s+}\s*)(\s*contactInfo:)/g, '$1,\n      $2')
  .replace(/(\s+}\s*)(\s*link:)/g, '$1,\n      $2')
  .replace(/(\s+}\s*)(\s*marketPrice:)/g, '$1,\n      $2')
  // Fix missing commas after strings
  .replace(/(\s+'[^']+'\s*)(\s*benefits:)/g, '$1,\n      $2')
  .replace(/(\s+'[^']+'\s*)(\s*useCases:)/g, '$1,\n      $2')
  .replace(/(\s+'[^']+'\s*)(\s*contactInfo:)/g, '$1,\n      $2')
  .replace(/(\s+'[^']+'\s*)(\s*link:)/g, '$1,\n      $2')
  .replace(/(\s+'[^']+'\s*)(\s*marketPrice:)/g, '$1,\n      $2')
  .replace(/(\s+'[^']+'\s*)(\s*features:)/g, '$1,\n      $2')
  .replace(/(\s+'[^']+'\s*)(\s*pricing:)/g, '$1,\n      $2')
  // Fix missing commas after numbers
  .replace(/(\s+\d+\s*)(\s*benefits:)/g, '$1,\n      $2')
  .replace(/(\s+\d+\s*)(\s*useCases:)/g, '$1,\n      $2')
  .replace(/(\s+\d+\s*)(\s*contactInfo:)/g, '$1,\n      $2')
  .replace(/(\s+\d+\s*)(\s*link:)/g, '$1,\n      $2')
  .replace(/(\s+\d+\s*)(\s*marketPrice:)/g, '$1,\n      $2')
  .replace(/(\s+\d+\s*)(\s*features:)/g, '$1,\n      $2')
  .replace(/(\s+\d+\s*)(\s*pricing:)/g, '$1,\n      $2');

// Write the fixed content back
fs.writeFileSync(filePath, fixedContent, 'utf8');

console.log('Services data syntax fixed successfully!');