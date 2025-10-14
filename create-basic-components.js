#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
// Function to create directory if it doesn't exist,
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}
// Function to create a component,
function createComponent(filePath, content) {
  const dir = path.dirname(filePath);
  ensureDir(dir);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Created: ${filePath}""
const navigationComponent = ""
""
const footerComponent = ""
""
const headerComponent = ""
""
const sidebarComponent = ""
""
const errorBoundaryComponent = "";
export default dir;)