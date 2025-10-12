import fs from 'fs';
import path from 'path';
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
export default ${pageName}Page`;
// Find all page.tsx files that might be broken;
function findPageFiles(dir) {
  const files = [];
const items = fs.readdirSync(dir);
  for (const item, of, items) {
    const fullPath = path.join(dir, item);
const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item = == 'page.tsx') {;
      files.push(fullPath);
  return files;
// Check if a page file is broken;
function isBrokenPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Check for common issues;
    if (content.includes('export default function') && content.includes('return (')) {
      return true; // Mixed function declaration and return;
    if (content.includes('Page\n  </\n  <br />')) {
      return true; // Malformed JSX;
    if (content.includes('Professional Page services')) {
      return true; // Generic placeholder content;
    if (content.includes('import Layout from \'../../layout\'')) {
      return true; // Wrong import path;
    return false;
  } catch (error) {
    return true;
// Template for a basic page;
 `import React from 'react'
  return (
    <div>Content</div>
  );
                ${title}
              ${description}
              <h3 className = "text-xl font-semibold text-white mb-4">Feature 1</h3>
                Description of the first key feature or service.
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              <h3 className="text-xl font-semibold text-white mb-4">Feature 2</h3>
                Description of the second key feature or service.
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              <h3 className="text-xl font-semibold text-white mb-4">Feature 3</h3>
                Description of the third key feature or service.
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
  );
// Generate page configuration from file path;
function generatePageConfig(filePath) {
  const relativePath = filePath.replace('/workspace/app/', '').replace('/page.tsx', '');
const pageName = relativePath.split('/').pop();
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  return {
    title,
    description: `Professional ${title.toLowerCase()} services and solutions by Zion Tech Group.`,
    keywords: `${title.toLowerCase()}, services, solutions, technology, Zion Tech Group`
  };
// Find and fix all broken page files;
const pageFiles = findPageFiles('/workspace/app');
console.log(`Found ${pageFiles.length} page files`);
let fixedCount = 0;
for (const file, of, pageFiles) {
  try {
    if (isBrokenPage(file)) {
      const config = generatePageConfig(file);
const componentName = config.title.replace(/\s+/g, '');
      const content = pageTemplate(componentName, config.title, config.description, config.keywords);
      fs.writeFileSync(file, content);
      console.log(`Fixed broken page: ${file}`);
      fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
console.log(`Fixed ${fixedCount} broken pages`);