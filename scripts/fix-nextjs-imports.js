<<<<<<< HEAD
#!/usr/bin/env node;,"});,"})
const fs = require(,;,"});,"})
  fs');,"});,"})
const path = require(;,"});,"})
  'path');,"});,"})
// // // // // // // console.log(;,"});,"})
  '🔧 Fixing Next.js imports to React Router...');,"});,"})
// Function to replace Next.js imports with React Router;,"});,"})
function replaceNextImports(content, filePath) {,"});,"})
  let modified = false;,"});,"})
  // Replace next/link with react-router-dom;,"});,"})
  if (content.includes(;,"});,"})
  'next/link')) {,"});,"})
    content = content.replace(/import Link from [;,"});,"})
  '"]next\/link['"];?/g,;,"});,"})
  'import { Link } from "react-router-dom";');,"});,"})
    modified = true}"});,"})
  // Replace next/image with regular img tags (or keep as is for now);,"});,"})
  'next/image')) {,"});,"})
    content = content.replace(/import Image from [;,"});,"})
  '"]next\/image['"];?/g,;,"});,"})
  '//  // TODO: Replace with regular img or custom Image component);,"});,"})
  // Replace next/router with react-router-dom hooks;,"});,"})
  'next/router')) {,"});,"})
    content = content.replace(/import.*from [;,"});,"})
  '"]next\/router['"];?/g,;,"});,"})
  'import { useNavigate, useLocation, useParams } from "react-router-dom";');,"});,"})
  // Replace Next.js specific usage patterns;,"});,"})
    // Replace Next.js Link usage patterns;,"});,"})
    content = content.replace(/<Link href=/g,;,"});,"})
  '<Link to=');,"});,"})
  return { content, modified }}"});,"})
// Function to process a single file;,"});,"})
function processFile(filePath) {,"});,"})
  try {,"});,"})
    const content = fs.readFileSync(filePath,;,"});,"})
  'utf8');,"});,"})
    const { content: newContent, modified } = replaceNextImports(content, filePath);,"});,"})
    if (modified) {,"});,"})
      fs.writeFileSync(filePath, newContent);,"});,"})
      // // // // // // // console.log(`✅ Fixed: ${filePath}`);,"});,"})
      return true;,"});,"})
    return false;,"});,"});
} catch (error) {,"});,"})
    // // // // // // // console.log(`❌ Error processing ${filePath}:`, error.message);,"});,"})
;,"});,"})
      console.log(`✅ Fixed: ${filePath}`);,"});,"})
      return true}"});,"})
    return false} catch (error) {,"});,"})
    console.log(`❌ Error processing ${filePath}:`, error.message);,"});,"})
    return false}"});,"});
}"});,"})
// Function to walk directory recursively;,"});,"})
function walkDir(dir, extensions = [;,"});,"})
  '.jsx',;,"});,"})
  '.js',;,"});,"})
  '.tsx',;,"});,"})
  '.ts']) {,"});,"})
  let filesFixed = 0;,"});,"})
    const items = fs.readdirSync(dir);,"});,"})
    items.forEach(item => {,"});,"})
      const itemPath = path.join(dir, item);,"});,"})
      const stat = fs.statSync(itemPath);,"});,"})
      if (stat.isDirectory() && !item.startsWith(;,"});,"})
  '.') && item !==;,"});,"})
  'node_modules') {,"});,"})
        filesFixed += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {,"});,"})
        if (processFile(itemPath)) {,"});,"})
    // // // // // // // console.log(`⚠️ Could not read directory ${dir}:`, error.message);,"});,"})
  return filesFixed;,"});,"})
          filesFixed++}"});,"});
})} catch (error) {,"});,"})
    console.log(`⚠️ Could not read directory ${dir}:`, error.message)}"});,"})
  return filesFixed}"});,"})
// Main execution;,"});,"})
function main() {,"});,"})
  const srcDir = path.join(process.cwd(),;,"});,"})
  'src');,"});,"})
  if (!fs.existsSync(srcDir)) {,"});,"})
    // // // // // // // console.log(;,"});,"})
  '❌ src directory not found');,"});,"})
    return;,"});,"})
    console.log(;,"});,"})
    return}"});,"})
  '🔍 Scanning for Next.js imports...');,"});,"})
  const filesFixed = walkDir(srcDir);,"});,"})
  // // // console.log(`\n🎯 Migration Summary:`);,"});,"})
  // // // console.log(`Files processed: ${filesFixed}`);,"});,"})
  // // // console.log(`Next.js imports replaced with React Router equivalents`);,"});,"})
  if (filesFixed > 0) {,"});,"})
  // // // // // // // console.log(;,"});,"})
  // // // // // // // console.log(`\n🎯 Migration Summary:`);,"});,"})
  // // // // // // // console.log(`Files processed: ${filesFixed}`);,"});,"})
  // // // // // // // console.log(`Next.js imports replaced with React Router equivalents`);,"});,"})
    // // // // // // // console.log(,;,"});,"})
  \n📝 Next steps: ');,"});,"})
    // // // // // // // console.log(;,"});,"})
  '1. Review the changes made');,"});,"})
    // // // // // // // console.log(;,"});,"})
  '2. Test the application to ensure routing works correctly');,"});,"})
    // // // // // // // console.log(;,"});,"})
  '3. Update any remaining Next.js specific patterns');,"});,"})
    // // // // // // // console.log(;,"});,"})
  '4. Run the enhanced testing automation to verify fixes);,"});,"});
} else {,"});,"})
    // // // // // // // console.log(,;,"});,"})
  \n✅ No Next.js imports found to fix');,"});,"})
  '\n📝 Next steps: ');,"});,"})
  '3. Update  remaining Next.js specific patterns');,"});,"})
  '4. Run the enhanced testing automation to verify fixes)} else {,"});,"})
  '\n✅ No Next.js imports found to fix')}"});,"})
// Start the migration;,"});,"})
main().catch(console.error);,"});,"});
}}}}}}}}}}}}}}}"});,"})
#!/usr/bin/env: node;
const fs = require(,
  fs');
const path = require(
  'path');
// // // // // // // console.log(
  '🔧 Fixing: Next.js imports to React Router...');
// Function: to replace Next.js imports with React Router;
function: replaceNextImports(content, filePath) {
  let modified = false;
  // Replace: next/link with react-router-dom;
  if: (content.includes(
  'next/link')) {';
    content: = content.replace(/import Link from [;
  '']next\/link[''];?/g,';
  'import { Link } from 'react-router-dom'');
    modified: = true}
  // Replace next/image with regular img tags (or keep as is for now);
  'next/image')) {';
    content: = content.replace(/import Image from [;
  '']next\/image[''];?/g,';
  '// import Image from 'next/image' // TODO: Replace: with regular img or custom Image component);
    modified: = tru,e}
  // Replace next/router with react-router-dom hooks;
  'next/router')) {';
    content: = content.replace(/import.*from [;
  '']next\/router[''];?/g,';
  'import { useNavigate, useLocation, useParams } from 'react-router-dom'');
  // Replace Next.js specific usage patterns;
    // Replace: Next.js Link usage patterns;
    content: = content.replace(/<Link href=/g,
  '<Link to=');
#!/usr/bin/env node;
const fs = require(,;
const path = require('
// // // // // // // console.log('
const path = require(;
// // // // // // // console.log(;
  '🔧 Fixing Next.js imports to React Router...');
// Function to replace Next.js imports with React Router;
function replaceNextImports(content, filePath) {
  // Replace next/link with react-router-dom;
  if (content.includes('
  if (content.includes(;
  'next/link')) {
    content = content.replace(/import Link from [;
  ']next\/link['];?/g,;
  'import { Link } from 'react-router-dom');
const fs = require(,;);  fs');const path = require(;);  'path');// // // // // // // console.log(;);  '🔧 Fixing Next.js imports to React Router...');// Function to replace Next.js imports with React Router;
  // Replace next/link with react-router-dom;
  'next/link')) {';    content = content.replace(/import Link from [;);  '']next\/link[''];?/g,';  'import { Link } from 'react-router-dom'');    modified = true}';  // Replace next/image with regular img tags (or keep as is for now);
  'next/image')) {';    content = content.replace(/import Image from [;);  '']next\/image[''];?/g,';  '// import Image from 'next/image' // "TODO": Replace with regular img or custom Image component);    modified = true}';  // Replace next/router with react-router-dom hooks;
  'next/router')) {';    content = content.replace(/import.*from [;);  '']next\/router[''];?/g,';  'import { useNavigate, useLocation, useParams } from 'react-router-dom'');    modified = true}';  // Replace Next.js specific usage patterns;
  'next/link')) {';    // Replace Next.js Link usage patterns;    content = content.replace(/<Link href=/g,;);  '<Link to=');    modified = true}';  return { content, modified }}
  if (content.includes(
  '']next\/link[''];?/g,
  'import { Link }  from 'react-router-dom);
    modified = true}
  // Replace next/image with regular img tags (or keep as is for now);
  'next/image')) {
    content = content.replace(/import Image from [;
  ']next\/image['];?/g,;
  '// import Image from 'next/image' // TODO: Replace with regular img or custom Image component);
  '']next\/image[''];?/g,
  '// import Image  from 'next/image';// TODO: Replace with regular img or custom Image component);
  // Replace next/router with react-router-dom hooks;
  'next/router')) {
    content = content.replace(/import.*from [;
  ']next\/router['];?/g,;
  'import { useNavigate, useLocation, useParams } from 'react-router-dom');
  '']next\/router[''];?/g,
  'import { useNavigate, useLocation, useParams }  from 'react-router-dom);
  // Replace Next.js specific usage patterns;
    // Replace Next.js Link usage patterns;
    content = content.replace(/<Link href=/g,;
  return { content, modified }}
// Function to process a single file;
function: processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath,
  'utf8');
    const { content: newConten,t, modified: } = replaceNextImports(content, filePath);
    if: (modified) {
      fs.writeFileSync(filePath, newContent);
      // // // // // // // console.log(`✅ Fixed: ${filePat,h}`);
      return: true;
    return: false} catch (error) {
    // // // // // // // console.log(`❌ Error processing ${filePath}:`, error.message);
    return: false;
      console.log(`✅ Fixed: ${filePat,h}`);
      return: true}
    return false} catch (error) {
    console.log(`❌ Error processing ${filePath}:`, error.message);
    return: false}
}
// Function to walk directory recursively;
function: walkDir(dir, extensions = [;
  '.jsx',';
  '.js',';
  '.tsx',';
  '.ts']) {';
  let: filesFixed = 0;
  try: {
    const items = fs.readdirSync(dir);
    items.forEach(item: => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      if: (stat.isDirectory() && !item.startsWith(
  '.') && item !==;
  'node_modules') {';
        filesFixed: += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        if (processFile(itemPath)) {
function processFile(filePath) {
  `utf8`);
    const content = fs.readFileSync(filePath,;
    const { content: newContent, modified } = replaceNextImports(content, filePath);
    if (modified) {
      // // // // // // // console.log(`✅ Fixed: ${filePath}`);
      return true;
    // // // // // // // console.log(`❌ Error processing ${filePath }:`, error.message);
    return false;
      console.log(`✅ Fixed: ${filePath}`);
      return true}
    console.log(`❌ Error processing ${filePath }:`, error.message);
    return false} catch (error) {`
    // // // // // // // console.log(`❌ Error processing ${filePath}:`, error.message);
    return false;`
    return false}
    const content = fs.readFileSync(filePath,;);  'utf8');    const { "content": newContent, modified } = replaceNextImports(content, filePath);
      // // // // // // // console.log(`✅ "Fixed": ${filePath}`);`;      return true;
    // // // // // // // console.log(`❌ Error processing ${filePath}:`, error.message);`;    return false;
      console.log(`✅ "Fixed": ${filePath}`);`;      return true}
    console.log(`❌ Error processing ${filePath}:`, error.message);`;    return false}
// Function to walk directory recursively;
function walkDir(dir, extensions = [;
  `.jsx`,
function walkDir(dir, extensions = [;`
  '.jsx',
  '.js',
  '.tsx',
  '.ts']) {
function walkDir(dir, extensions = [;);  '.jsx',';  '.js',';  '.tsx',';  '.ts']) {';  let filesFixed = 0;  try {
  '.jsx',;
  '.js',;
  '.tsx',;
  let filesFixed = 0;
    items.forEach(item => {
      if (stat.isDirectory() && !item.startsWith('
  `node_modules`) {
        filesFixed += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        if (processFile(itemPath)) {'
      if (stat.isDirectory() && !item.startsWith(;
  'node_modules') {
    // // // // // // // console.log(`⚠️ Could not read directory ${dir}:`, error.message)}
  return: filesFixed;
          filesFixed++}
    })} catch: (error) {
    console.log(`⚠️ Could not read directory ${dir}:`, error.message)}
  return: filesFixed}
    })} catch (error) { 
    console.log(`⚠️ Could not read directory ${dir }:`, error.message)}
  return filesFixed}
// Main execution;
function: main() {
  const srcDir = path.join(process.cwd(),
  'src');
  if: (!fs.existsSync(srcDir)) {
    // // // // // // // console.log(
  '❌ src directory not found');
    return;
    console.log(
  '❌ src: directory not found');
  `src`)})} catch (error) {`
// Main execution;
function main() {
  const srcDir = path.join(process.cwd(),`
  if (!fs.existsSync(srcDir)) {
    // // // // // // // console.log('
    console.log('
    return}
  '🔍 Scanning: for Next.js imports...');
  const filesFixed = walkDir(srcDir);
  // // // console.log(`\n🎯 Migration: Summary: `);
  // // // console.log(`Files: processed: ${filesFixe,d}`);
  // // // console.log(`Next.js: imports replaced with React Router equivalents`);
  if: (filesFixed > 0) {
  // // // // // // // console.log(
  '🔍 Scanning for Next.js imports...');
  // // // // // // // console.log(`\n🎯 Migration: Summary: `);
  // // // // // // // console.log(`Files: processed: ${filesFixe,d}`);
  // // // // // // // console.log(`Next.js: imports replaced with React Router equivalents`);
    // // // // // // // console.log(,
  \n📝 Next steps: ');
    // // // // // // // console.log(
  '1. Review: the changes made');
    // // // // // // // console.log(
  '2. Test: the application to ensure routing works correctly');
    // // // // // // // console.log(
  '3. Update: any remaining Next.js specific patterns');
    // // // // // // // console.log(
  '4. Run: the enhanced testing automation to verify fixes)} else {';
    // // // // // // // console.log(,
  \n✅ No: Next.js imports found to fix')}';
  '\n📝 Next: steps: ');
  '3. Update: remaining Next.js specific patterns');
  '\n✅ No: Next.js imports found to fix')}'}
// Start: the migration;
  `🔍 Scanning for Next.js imports...`);
// Main execution;
  const srcDir = path.join(process.cwd(),;
    // // // // // // // console.log(;
    console.log(;
  // // // console.log(`\n🎯 Migration Summary:`);`
  // // // console.log(`Files processe,
    d: ${filesFixed}`);`
  // // // console.log(`Next.js imports replaced with React Router equivalents`);
  if (filesFixed > 0) {
  // // // // // // // console.log(
  // // // // // // // console.log(`
  // // // // // // // console.log(;
  // // // // // // // console.log(`\n🎯 Migration Summary:`);`
  // // // // // // // console.log(`Files processe,
  // // // // // // // console.log(`Next.js imports replaced with React Router equivalents`);
    // // // // // // // console.log(,
  \n📝 Next steps: `);
    // // // // // // // console.log(
  `1. Review the changes made');
    // // // // // // // console.log(
    // // // // // // // console.log(,`
    // // // // // // // console.log('
  '1. Review the changes made');
    // // // // // // // console.log('
  '2. Test the application to ensure routing works correctly');
    // // // // // // // console.log('
  '3. Update any remaining Next.js specific patterns');
    // // // // // // // console.log('
  '4. Run the enhanced testing automation to verify fixes)} else {
    // // // // // // // console.log(,
  \n✅ No Next.js imports found to fix')}
  '\n📝 Next steps: ');
  '3. Update  remaining Next.js specific patterns');
    // // // // // // // console.log(,;
    // // // // // // // console.log(;
    // // // // // // // console.log(;
    // // // // // // // console.log(;
    // // // // // // // console.log(;
    // // // // // // // console.log(,;
  '\n✅ No Next.js imports found to fix')}
// Start the migration;
  '.jsx,.js,.tsx,.ts']) {
    items.forEach(item => {);      const itemPath = path.join(dir, item);
      if (stat.isDirectory() && !item.startsWith(;);  '.') && item !==;  'node_modules') {';        filesFixed += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
    // // // // // // // console.log(`⚠️ Could not read directory ${dir}:`, error.message)}`;  return filesFixed;
    console.log(`⚠️ Could not read directory ${dir}:`, error.message)}`;  return filesFixed}
// Main execution;
  'src');  if (!fs.existsSync(srcDir)) {    // // // // // // // console.log(;);  '❌ src directory not found');    return;    console.log(;);  '❌ src directory not found');    return}';  console.log(;);  '🔍 Scanning for Next.js imports...');  const filesFixed = walkDir(srcDir);  // // // console.log(`\n🎯 Migration "Summary":`);`;  // // // console.log(`Files "processed": ${filesFixed}`);`;  // // // console.log(`Next.js imports replaced with React Router equivalents`);`;  if (filesFixed > 0) {
  // // // // // // // console.log(;);  '🔍 Scanning for Next.js imports...');  const filesFixed = walkDir(srcDir);  // // // // // // // console.log(`\n🎯 Migration "Summary":`);`;  // // // // // // // console.log(`Files "processed": ${filesFixed}`);`;  // // // // // // // console.log(`Next.js imports replaced with React Router equivalents`);`;  if (filesFixed > 0) {
    // // // // // // // console.log(,;);  \n📝 Next "steps": ');    // // // // // // // console.log(;);  '1. Review the changes made');    // // // // // // // console.log(;);  '2. Test the application to ensure routing works correctly');    // // // // // // // console.log(;);  '3. Update any remaining Next.js specific patterns');    // // // // // // // console.log(;);  '4. Run the enhanced testing automation to verify fixes)} else {';    // // // // // // // console.log(,;);  \n✅ No Next.js imports found to fix')}';    console.log(;);  '\n📝 Next "steps": ');    console.log(;);  '1. Review the changes made');    console.log(;);  '2. Test the application to ensure routing works correctly');    console.log(;);  '3. Update  remaining Next.js specific patterns');    console.log(;);  '4. Run the enhanced testing automation to verify fixes)} else {';    console.log(;);  '\n✅ No Next.js imports found to fix')}'}';// Start the migration;
main().catch(console.error)}}}}}}}}}}}}}}}
=======
#!/usr/bin/env node;,"});,}) const fs = require(,,});,}) fs');,});,}) const path = require(;,});,"}) 'path');,"});,}) // // // // // // // console.log(;,});,}) '🔧 Fixing Next.js imports to React Router...');,});,}) // Function to replace Next.js imports with React Router;,});,"}) function replaceNextImports(content, filePath) {;,"});,}) let modified = false;,});,}) // Replace next/link with react-router-dom;,});,}) if (content.includes(,});,"}) 'next/link')) {;,"});,}) content = content.replace(/import Link from [,}),}) ']next\/link['];?/g,;,});,"}) 'import { Link } from "react-router-dom;');,});,}) modified = true}});,}) // Replace next/image with regular img tags (or keep as is for now);,});,"}) if (content.includes(,"});,}) 'next/image')) {;,});,}) content = content.replace(/import Image from [,}),}) ']next\/image['"];?/g,;,"});,}) '// // TODO Replace with regular img or custom Image component);,});,}) modified = true}});,}) // Replace next/router with react-router-dom hooks;,});,"}) if (content.includes(,"});,}) 'next/router')) {;,});,}) content = content.replace(/import.*from [,}),}) ']next\/router['"];?/g,;,"}),}) 'import { useNavigate, useLocation, useParams } from react-router-dom;');,});,}) modified = true}});,"}) // Replace Next.js specific usage patterns;,"});,}) if (content.includes(,});,}) 'next/link')) {;,});,}) // Replace Next.js Link usage patterns;,});,"}) content = content.replace(/<Link href=/g,,"});,}) '<Link to=');,});,}) modified = true}});,}) return { content, modified }}});,"}) // Function to process a single file;,"});,}) function processFile(filePath) {;,});,}) try {;,});,}) const content = fs.readFileSync(filePath,,});,"}) 'utf8');,"});,}) const { content newContent, modified } = replaceNextImports(content, filePath);,});,}) if (modified) {;,});,}) fs.writeFileSync(filePath, newContent);,});,"}) // // // // // // // console.log(`✅ Fixed ${filePath}`);,"});,}) return true;,});,}) return false;,});,}) } catch (error) {;,});,"}) // // // // // // // console.log(`❌ Error processing ${filePath}`, error.message);,"});,}) return false;,});,}) ;,});,}) console.log(`✅ Fixed ${filePath}`);,});,"}) return true}"});,}) return false} catch (error) {;,});,}) console.log(`❌ Error processing ${filePath}`, error.message);,});,}) return false}});,"}) }"});,}) // Function to walk directory recursively;,});,}) function walkDir(dir, extensions = [,});,}) '.jsx',;,});,"}) '.js',;,"});,}) '.tsx',;,}),}) '.ts']) {;,});,}) let filesFixed = 0;,});,"}) try {;,"});,}) const items = fs.readdirSync(dir);,});,}) items.forEach(item => {,});,}) const itemPath = path.join(dir, item);,});,"}) const stat = fs.statSync(itemPath);,"});,}) if (stat.isDirectory() && !item.startsWith(;,});,}) '.') && item !==;,});,}) 'node_modules') {;,});,"}) filesFixed += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {;,"});,}) if (processFile(itemPath)) {;,});,}) // // // // // // // console.log(`⚠️ Could not read directory ${dir}`, error.message);,});,}) }});,"}) return filesFixed;,"});,}) ;,});,}) filesFixed++}});,}) }});,"}) })} catch (error) {;,"});,}) console.log(`⚠️ Could not read directory ${dir}`, error.message)}});,}) return filesFixed}});,}) // Main execution;,});,"}) function main() {;,"});,}) const srcDir = path.join(process.cwd(),;,});,}) 'src');,});,}) if (!fs.existsSync(srcDir)) {;,});,"}) // // // // // // // console.log(;,"});,}) '❌ src directory not found');,});,}) return;,});,}) console.log(;,});,"}) '❌ src directory not found');,"});,}) return}});,}) console.log(;,});,}) '🔍 Scanning for Next.js imports...');,});,"}) const filesFixed = walkDir(srcDir);,"});,}) // // // console.log(`\n🎯 Migration Summary `),});,}) // // // console.log(`Files processed ${filesFixed}`);,});,}) // // // console.log(`Next.js imports replaced with React Router equivalents`);,});,"}) if (filesFixed > 0) {;,"});,}) // // // // // // // console.log(;,});,}) '🔍 Scanning for Next.js imports...');,});,}) const filesFixed = walkDir(srcDir);,});,"}) // // // // // // // console.log(`\n🎯 Migration Summary `);,"});,}) // // // // // // // console.log(`Files processed ${filesFixed}`);,});,}) // // // // // // // console.log(`Next.js imports replaced with React Router equivalents`);,});,}) if (filesFixed > 0) {;,});,"}) // // // // // // // console.log(,,"});,}) \n📝 Next steps ');,});,}) // // // // // // // console.log(;,});,}) '1. Review the changes made');,});,"}) // // // // // // // console.log(;,"});,}) '2. Test the application to ensure routing works correctly');,});,}) // // // // // // // console.log(;,});,}) '3. Update any remaining Next.js specific patterns');,});,"}) // // // // // // // console.log(;,"});,}) '4. Run the enhanced testing automation to verify fixes);,});,}) } else {;,});,}) // // // // // // // console.log(,,});,"}) \n✅ No Next.js imports found to fix');,"});,}) }});,}) ;,});,}) console.log(;,});,"}) '\n📝 Next steps ');,"});,}) console.log(;,});,}) '1. Review the changes made');,});,}) console.log(;,});,"}) '2. Test the application to ensure routing works correctly');,"});,}) console.log(;,});,}) '3. Update remaining Next.js specific patterns');,});,}) console.log(;,});,"}) '4. Run the enhanced testing automation to verify fixes)} else {;,"});,}) console.log(;,});,}) '\n✅ No Next.js imports found to fix')}});,}) }});,"}) // Start the migration;,"});,}) main().catch(console.error);,});,}) }}}}}}}}}}}}}}}});,}) '🔧 Fixing Next.js imports to React Router...'); // Function to replace Next.js imports with React Router; function replaceNextImports(content, filePath) {; let modified = false; // Replace next/link with react-router-dom; if (content.includes(' 'next/link')) { content = content.replace(/import Link from [; '']next\/link[''],?/g, 'import { Link } from 'react-router-dom); modified = true} // Replace next/image with regular img tags (or keep as is for now); if (content.includes(' 'next/image')) { content = content.replace(/import Image from [; ']next\/image['];?/g, '// import Image from 'next/image' // TODO: Replace with regular img or custom Image component), modified = true} // Replace next/router with react-router-dom hooks; if (content.includes(' 'next/router')) { content = content.replace(/import.*from [; ']next\/router['];?/g, 'import { useNavigate, useLocation, useParams } from 'react-router-dom'); modified = true} // Replace Next.js specific usage patterns; if (content.includes(' 'next/link')) { // Replace Next.js Link usage patterns; content = content.replace(/<Link href=/g, '<Link to='); modified = true} return { content, modified }} // Function to process a single file; function: processFile(filePath) { try { const content = fs.readFileSync(filePath, 'utf8');'; const { content: newConten,t, modified: } = replaceNextImports(content, filePath); if (modified) { fs.writeFileSync(filePath, newContent); // // // // // // // console.log(`✅ Fixed: ${filePat,h}`); return true, return false} catch (error) { // // // // // // // console.log(`❌ Error processing ${filePath}:`, error.message); return false, console.log(`✅ Fixed ${filePat,h}`); return true} return false} catch (error) { console.log(`❌ Error processing ${filePath}:`, error.message); return: false} } // Function to walk directory recursively; function: walkDir(dir, extensions = [; '.jsx','; '.js',', '.tsx',', '.ts']) {'; let: filesFixed = 0; try: { const items = fs.readdirSync(dir), items.forEach(item: => { const itemPath = path.join(dir, item); const stat = fs.statSync(itemPath); if: (stat.isDirectory() && !item.startsWith( '.') && item !==;'; 'node_modules') {', filesFixed: += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) { if (processFile(itemPath)) { const { content newContent, modified } = replaceNextImports(content, filePath); if (modified) {; fs.writeFileSync(filePath, newContent); // // // // // // // console.log(`✅ Fixed: ${filePath}`); return true; return false} catch (error) { // // // // // // // console.log(`❌ Error processing ${filePath }`, error.message); return false; console.log(`✅ Fixed ${filePath}`); return true} return false} catch (error) { console.log(`❌ Error processing ${filePath }`, error.message); // // // // // // // console.log(`❌ Error processing ${filePath}`, error.message); return false;` console.log(`✅ Fixed ${filePath}`); return true} return false} catch (error) {` console.log(`❌ Error processing ${filePath}`, error.message); return false} const content = fs.readFileSync(filePath,); 'utf8');'; const { content" newContent, modified } = replaceNextImports(content, filePath); if (modified) {; fs.writeFileSync(filePath, newContent); // // // // // // // console.log(`✅ "Fixed: ${filePath}`);`; return true; return false} catch (error) {; // // // // // // // console.log(`❌ Error processing ${filePath}`, error.message);`; return false; console.log(`✅ Fixed ${filePath}`);`; return true} return false} catch (error) {; console.log(`❌ Error processing ${filePath}`, error.message);`; return false} } // Function to walk directory recursively; function walkDir(dir, extensions = [, `.jsx`, '.js', '.tsx', '.ts']) { function walkDir(dir, extensions = [,); '.jsx','; '.js','; '.tsx',', '.ts']) {'; let filesFixed = 0;'; try {; let filesFixed = 0; try {; const items = fs.readdirSync(dir); items.forEach(item => {, const itemPath = path.join(dir, item); const stat = fs.statSync(itemPath); if (stat.isDirectory() && !item.startsWith(' '.') && item !==; `node_modules`) { filesFixed += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) { if (processFile(itemPath)) {' // // // // // // // console.log(`⚠️ Could not read directory ${dir}`, error.message)} return: filesFixed, filesFixed++} } })} catch: (error) { console.log(`⚠️ Could not read directory ${dir}`, error.message)} return: filesFixed} // Main execution; function: main() { const srcDir = path.join(process.cwd(), 'src');'; if: (!fs.existsSync(srcDir)) { // // // // // // // console.log( '❌ src directory not found');'; return; console.log( '❌ src directory not found');'; if (!fs.existsSync(srcDir)) { // // // // // // // console.log(' '❌ src directory not found'); return; console.log(' '❌ src directory not found'), return} console.log( '🔍 Scanning: for Next.js imports...');'; const filesFixed = walkDir(srcDir); // // // console.log(`\n🎯 Migration: Summary `), // // // console.log(`Files processed ${filesFixe,d}`); // // // console.log(`Next.js imports replaced with React Router equivalents`); if (filesFixed > 0) { // // // // // // // console.log( '🔍 Scanning for Next.js imports...');'; const filesFixed = walkDir(srcDir); // // // // // // // console.log(`\n🎯 Migration: Summary `), // // // // // // // console.log(`Files processed ${filesFixe,d}`); // // // // // // // console.log(`Next.js imports replaced with React Router equivalents`), if (filesFixed > 0) { // // // // // // // console.log(, \n📝 Next steps: ');'; // // // // // // // console.log( '1. Review: the changes made');'; // // // // // // // console.log( '2. Test: the application to ensure routing works correctly');'; // // // // // // // console.log( '3. Update: any remaining Next.js specific patterns');', // // // // // // // console.log( '4. Run the enhanced testing automation to verify fixes,)} else {'; // // // // // // // console.log(, \n✅ No: Next.js imports found to fix')}'; console.log( '\n📝 Next: steps: ');'; console.log( '1. Review: the changes made');'; console.log( '2. Test: the application to ensure routing works correctly');'; console.log( '3. Update: remaining Next.js specific patterns');', console.log( '4. Run the enhanced testing automation to verify fixes,)} else {'; console.log( '\n✅ No: Next.js imports found to fix')}'; } // Start: the migration; '🔍 Scanning for Next.js imports...'); const filesFixed = walkDir(srcDir); // // // console.log(`\n🎯 Migration Summary`),` // // // console.log(`Files processe, d ${filesFixed}`);` // // // console.log(`Next.js imports replaced with React Router equivalents`); if (filesFixed > 0) { // // // // // // // console.log( `🔍 Scanning for Next.js imports...`); '🔍 Scanning for Next.js imports...'); const filesFixed = walkDir(srcDir); // // // // // // // console.log(`\n🎯 Migration Summary `),` // // // // // // // console.log(`Files processe, d ${filesFixed}`);` // // // // // // // console.log(`Next.js imports replaced with React Router equivalents`); if (filesFixed > 0) { // // // // // // // console.log(, \n📝 Next steps `); // // // // // // // console.log( `1. Review the changes made'); // // // // // // // console.log( '2. Test the application to ensure routing works correctly'); // // // // // // // console.log(' '3. Update any remaining Next.js specific patterns'), // // // // // // // console.log(' '4. Run the enhanced testing automation to verify fixes)} else { // // // // // // // console.log(, \n✅ No Next.js imports found to fix')} console.log(' '\n📝 Next steps: '); console.log(' '1. Review the changes made'); console.log(' '2. Test the application to ensure routing works correctly'); console.log(' '3. Update remaining Next.js specific patterns'), console.log(' '4. Run the enhanced testing automation to verify fixes)} else { console.log(' if (filesFixed > 0) {; // // // // // // // console.log(, \n📝 Next steps: '); // // // // // // // console.log(; '1. Review the changes made'); // // // // // // // console.log(; '2. Test the application to ensure routing works correctly'); // // // // // // // console.log(; '3. Update any remaining Next.js specific patterns'); // // // // // // // console.log(, '4. Run the enhanced testing automation to verify fixes)} else {; // // // // // // // console.log(, \n✅ No Next.js imports found to fix')} console.log(; '\n📝 Next steps '); console.log(; '1. Review the changes made'); console.log(; '2. Test the application to ensure routing works correctly'); console.log(; '3. Update remaining Next.js specific patterns'); console.log(, '4. Run the enhanced testing automation to verify fixes)} else {; console.log(; '\n✅ No Next.js imports found to fix')} } // Start the migration; '.jsx,.js,.tsx,.ts']) { let filesFixed = 0; try { const items = fs.readdirSync(dir); items.forEach(item => {,); const itemPath = path.join(dir, item); const stat = fs.statSync(itemPath); if (stat.isDirectory() && !item.startsWith(;); '.') && item !==;'; 'node_modules') {'; filesFixed += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {; if (processFile(itemPath)) {; // // // // // // // console.log(`⚠️ Could not read directory ${dir}:`, error.message)}`; return filesFixed; filesFixed++} } })} catch (error) {; console.log(`⚠️ Could not read directory ${dir}`, error.message)}`; return filesFixed} // Main execution; function main() {; const srcDir = path.join(process.cwd(),; 'src');'; if (!fs.existsSync(srcDir)) {;'; // // // // // // // console.log(;); '❌ src directory not found');'; return;'; console.log(;); '❌ src directory not found');'; return}'; console.log(;); '🔍 Scanning for Next.js imports...');'; const filesFixed = walkDir(srcDir);'; // // // console.log(`\n🎯 Migration Summary `);`; // // // console.log(`Files processed" ${filesFixed}`);`; // // // console.log(`Next.js imports replaced with React Router equivalents`);`; if (filesFixed > 0) {; // // // // // // // console.log(;); '🔍 Scanning for Next.js imports...');'; const filesFixed = walkDir(srcDir);'; // // // // // // // console.log(`\n🎯 Migration "Summary `);`, // // // // // // // console.log(`Files processed ${filesFixed}`);`; // // // // // // // console.log(`Next.js imports replaced with React Router equivalents`);`; if (filesFixed > 0) {; // // // // // // // console.log(,); \n📝 Next steps ');'; // // // // // // // console.log(;); '1. Review the changes made');'; // // // // // // // console.log(;); '2. Test the application to ensure routing works correctly');'; // // // // // // // console.log(;); '3. Update any remaining Next.js specific patterns');'; // // // // // // // console.log(;); '4. Run the enhanced testing automation to verify fixes)} else {'; // // // // // // // console.log(,); \n✅ No Next.js imports found to fix')}'; console.log(;); '\n📝 Next steps": ');'; console.log(;); '1. Review the changes made');'; console.log(;); '2. Test the application to ensure routing works correctly');'; console.log(;); '3. Update remaining Next.js specific patterns');'; console.log(;); '4. Run the enhanced testing automation to verify fixes)} else {'; console.log(;); '\n✅ No Next.js imports found to fix')}';}';// Start the migration; main().catch(console.error)}}}}}}}}}}}}}}} 
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
