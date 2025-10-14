#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
// Function to create a clean, working page component,
function createCleanPage(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, '') + 'Page';
  const pageTitle = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return ""
export default ${componentName};""
  return ""
);""
  return ""
export default App;""
  return ""
export default HomePage;""
    console.log(`Fixed ${pagePath}"")