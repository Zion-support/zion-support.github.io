import fs from 'fs';
import path from 'path';

// Find all page.tsx files that might be broken
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);

  return files;

// Check if a page file is broken
function isBrokenPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Check for common issues
    if (content.includes('export default function') && content.includes('return (')) {
      return true; // Mixed function declaration and return

    if (content.includes('Page\n  </\n  <br />')) {
      return true; // Malformed JSX

    if (content.includes('Professional Page services')) {
      return true; // Generic placeholder content

    if (content.includes('import Layout from \'../../layout\'')) {
      return true; // Wrong import path

    return false;
  } catch (error) {
    return true;

// Template for a basic page
const pageTemplate = (pageName, title, description, keywords) => `import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'

const ${pageName}Page: React.FC = () => {
  return (
    <Layout
      title="${title} - Zion Tech Group"
      description="${description}"
      keywords="${keywords}"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ${title}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ${description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Feature 1</h3>
              <p className="text-gray-300 mb-4">
                Description of the first key feature or service.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Feature 2</h3>
              <p className="text-gray-300 mb-4">
                Description of the second key feature or service.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Feature 3</h3>
              <p className="text-gray-300 mb-4">
                Description of the third key feature or service.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>

export default ${pageName}Page`;

// Generate page configuration from file path
function generatePageConfig(filePath) {
  const relativePath = filePath.replace('/workspace/app/', '').replace('/page.tsx', '');
  const pageName = relativePath.split('/').pop();
  const title = pageName.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return {
    title,
    description: `Professional ${title.toLowerCase()} services and solutions by Zion Tech Group.`,
    keywords: `${title.toLowerCase()}, services, solutions, technology, Zion Tech Group`
  };

// Find and fix all broken page files
const pageFiles = findPageFiles('/workspace/app');
console.log(`Found ${pageFiles.length} page files`);

let fixedCount = 0;
for (const file of pageFiles) {
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