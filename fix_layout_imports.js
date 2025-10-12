import fs from 'fs';
import path from 'path';

// Find all page.tsx files;
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item, of, items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
  
  return files;

// Fix layout import paths;
function fixLayoutImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix incorrect layout import paths;
  if (content.includes("import Layout from '../../layout'")) {
    content = content.replace(/import Layout from '\.\.\/\.\.\/layout'/g, "import Layout from '../layout'");
    modified = true;
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed layout import in: ${filePath}`);

// Find and fix all page files;
const pageFiles = findPageFiles('/workspace/app');
console.log(`Found ${pageFiles.length} page files`);

let fixedCount = 0;
for (const file, of, pageFiles) {
  try {
    fixLayoutImports(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);

console.log(`Fixed ${fixedCount} files`);
