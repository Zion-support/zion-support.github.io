#!/usr/bin/env node;
<<<<<<< HEAD
const fs = require(,;
  fs');
<<<<<<< HEAD
const path = require('
  'path');
// // // // // // // console.log('
=======
const path = require(;
  'path');
// // // // // // // console.log(;
>>>>>>> main
  '🔧 Fixing Next.js imports to React Router...');
// Function to replace Next.js imports with React Router;
function replaceNextImports(content, filePath) {;
  let modified = false;
  // Replace next/link with react-router-dom;
<<<<<<< HEAD
  if (content.includes('
=======
  if (content.includes(;
  'next/link')) {;
    content = content.replace(/import Link from [;
  ']next\/link['];?/g,;
  'import { Link } from 'react-router-dom');
=======
const fs = require(,;);  fs');';const path = require(;);  'path');';// // // // // // // console.log(;);  '🔧 Fixing Next.js imports to React Router...');';// Function to replace Next.js imports with React Router;
function replaceNextImports(content, filePath) {;
  let modified = false;
  // Replace next/link with react-router-dom;
<<<<<<< HEAD
  if (content.includes(;
  'next/link')) {';    content = content.replace(/import Link from [;);  '']next\/link[''];?/g,';  'import { Link } from 'react-router-dom'');';    modified = true}';  // Replace next/image with regular img tags (or keep as is for now);
  if (content.includes(;
  'next/image')) {';    content = content.replace(/import Image from [;);  '']next\/image[''];?/g,';  '// import Image from 'next/image' // "TODO": Replace with regular img or custom Image component);';    modified = true}';  // Replace next/router with react-router-dom hooks;
  if (content.includes(;
  'next/router')) {';    content = content.replace(/import.*from [;);  '']next\/router[''];?/g,';  'import { useNavigate, useLocation, useParams } from 'react-router-dom'');';    modified = true}';  // Replace Next.js specific usage patterns;
  if (content.includes(;
  'next/link')) {';    // Replace Next.js Link usage patterns;';    content = content.replace(/<Link href=/g,;);  '<Link to=');';    modified = true}';  return { content, modified }}
=======
  if (content.includes(
>>>>>>> main
  'next/link')) {
    content = content.replace(/import Link from [;
  '']next\/link[''];?/g,
  'import { Link }  from 'react-router-dom);
>>>>>>> main
    modified = true}
  // Replace next/image with regular img tags (or keep as is for now);
<<<<<<< HEAD
  if (content.includes('
  'next/image')) {
=======
  if (content.includes(;
  'next/image')) {;
>>>>>>> main
    content = content.replace(/import Image from [;
<<<<<<< HEAD
  ']next\/image['];?/g,;
  '// import Image from 'next/image' // TODO: Replace with regular img or custom Image component);
=======
  '']next\/image[''];?/g,
  '// import Image  from 'next/image';// TODO: Replace with regular img or custom Image component);
>>>>>>> main
    modified = true}
  // Replace next/router with react-router-dom hooks;
<<<<<<< HEAD
  if (content.includes('
  'next/router')) {
=======
  if (content.includes(;
  'next/router')) {;
>>>>>>> main
    content = content.replace(/import.*from [;
<<<<<<< HEAD
  ']next\/router['];?/g,;
  'import { useNavigate, useLocation, useParams } from 'react-router-dom');
=======
  '']next\/router[''];?/g,
  'import { useNavigate, useLocation, useParams }  from 'react-router-dom);
>>>>>>> main
    modified = true}
  // Replace Next.js specific usage patterns;
<<<<<<< HEAD
  if (content.includes('
  'next/link')) {
=======
  if (content.includes(;
  'next/link')) {;
>>>>>>> main
    // Replace Next.js Link usage patterns;
    content = content.replace(/<Link href=/g,;
  '<Link to=');
    modified = true}
  return { content, modified }}
>>>>>>> main
// Function to process a single file;
<<<<<<< HEAD
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath,
  `utf8`);
=======
function processFile(filePath) {;
  try {;
<<<<<<< HEAD
    const content = fs.readFileSync(filePath,;
  'utf8');
>>>>>>> main
    const { content: newContent, modified } = replaceNextImports(content, filePath);
    if (modified) {;
      fs.writeFileSync(filePath, newContent);
      // // // // // // // console.log(`✅ Fixed: ${filePath}`);
      return true;
<<<<<<< HEAD
    return false} catch (error) { 
    // // // // // // // console.log(`❌ Error processing ${filePath }:`, error.message);
    return false;
      console.log(`✅ Fixed: ${filePath}`);
      return true}
    return false} catch (error) { 
    console.log(`❌ Error processing ${filePath }:`, error.message);
=======
<<<<<<< HEAD
    return false} catch (error) {`
=======
    return false} catch (error) {;
>>>>>>> main
    // // // // // // // console.log(`❌ Error processing ${filePath}:`, error.message);
    return false;`
      console.log(`✅ Fixed: ${filePath}`);
      return true}
<<<<<<< HEAD
    return false} catch (error) {`
=======
    return false} catch (error) {;
>>>>>>> main
    console.log(`❌ Error processing ${filePath}:`, error.message);
>>>>>>> main
    return false}
=======
    const content = fs.readFileSync(filePath,;);  'utf8');';    const { "content": newContent, modified } = replaceNextImports(content, filePath);
    if (modified) {;
      fs.writeFileSync(filePath, newContent);
      // // // // // // // console.log(`✅ "Fixed": ${filePath}`);`;      return true;
    return false} catch (error) {;
    // // // // // // // console.log(`❌ Error processing ${filePath}:`, error.message);`;    return false;
      console.log(`✅ "Fixed": ${filePath}`);`;      return true}
    return false} catch (error) {;
    console.log(`❌ Error processing ${filePath}:`, error.message);`;    return false}
>>>>>>> main
}
// Function to walk directory recursively;
<<<<<<< HEAD
function walkDir(dir, extensions = [;
  `.jsx`,
=======
<<<<<<< HEAD
function walkDir(dir, extensions = [;`
  '.jsx',
>>>>>>> main
  '.js',
  '.tsx',
  '.ts']) {
=======
<<<<<<< HEAD
function walkDir(dir, extensions = [;);  '.jsx',';  '.js',';  '.tsx',';  '.ts']) {';  let filesFixed = 0;';  try {;
=======
function walkDir(dir, extensions = [;
<<<<<<< HEAD
  '.jsx',;
  '.js',;
  '.tsx',;
  '.ts']) {;
>>>>>>> main
  let filesFixed = 0;
  try {;
    const items = fs.readdirSync(dir);
    items.forEach(item => {;
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
<<<<<<< HEAD
      if (stat.isDirectory() && !item.startsWith('
  '.') && item !==;
  `node_modules`) {
        filesFixed += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        if (processFile(itemPath)) {'
=======
      if (stat.isDirectory() && !item.startsWith(;
  '.') && item !==;
  'node_modules') {;
        filesFixed += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {;
        if (processFile(itemPath)) {;
>>>>>>> main
    // // // // // // // console.log(`⚠️ Could not read directory ${dir}:`, error.message)}
  return filesFixed;
          filesFixed++}
      }
<<<<<<< HEAD
    })} catch (error) { 
    console.log(`⚠️ Could not read directory ${dir }:`, error.message)}
  return filesFixed}
// Main execution;
function main() {
  const srcDir = path.join(process.cwd(),
  `src`);
=======
<<<<<<< HEAD
    })} catch (error) {`
    console.log(`⚠️ Could not read directory ${dir}:`, error.message)}
  return filesFixed}
// Main execution;
function main() {
  const srcDir = path.join(process.cwd(),`
  'src');
>>>>>>> main
  if (!fs.existsSync(srcDir)) {
    // // // // // // // console.log('
  '❌ src directory not found');
    return;
    console.log('
  '❌ src directory not found');
    return}
<<<<<<< HEAD
  console.log(
  `🔍 Scanning for Next.js imports...`);
=======
  console.log('
=======
    })} catch (error) {;
    console.log(`⚠️ Could not read directory ${dir}:`, error.message)}
  return filesFixed}
// Main execution;
function main() {;
  const srcDir = path.join(process.cwd(),;
  'src');
  if (!fs.existsSync(srcDir)) {;
    // // // // // // // console.log(;
  '❌ src directory not found');
    return;
    console.log(;
  '❌ src directory not found');
    return}
  console.log(;
>>>>>>> main
  '🔍 Scanning for Next.js imports...');
>>>>>>> main
  const filesFixed = walkDir(srcDir);
  // // // console.log(`\n🎯 Migration Summary:`);`
  // // // console.log(`Files processe,
    d: ${filesFixed}`);`
  // // // console.log(`Next.js imports replaced with React Router equivalents`);
<<<<<<< HEAD
  if (filesFixed > 0) {
<<<<<<< HEAD
  // // // // // // // console.log(
  `🔍 Scanning for Next.js imports...`);
=======
  // // // // // // // console.log(`
=======
  if (filesFixed > 0) {;
  // // // // // // // console.log(;
>>>>>>> main
  '🔍 Scanning for Next.js imports...');
>>>>>>> main
  const filesFixed = walkDir(srcDir);
  // // // // // // // console.log(`\n🎯 Migration Summary:`);`
  // // // // // // // console.log(`Files processe,
    d: ${filesFixed}`);`
  // // // // // // // console.log(`Next.js imports replaced with React Router equivalents`);
<<<<<<< HEAD
  if (filesFixed > 0) {
<<<<<<< HEAD
    // // // // // // // console.log(,
  \n📝 Next steps: `);
    // // // // // // // console.log(
  `1. Review the changes made');
    // // // // // // // console.log(
=======
    // // // // // // // console.log(,`
  \n📝 Next steps: ');
    // // // // // // // console.log('
  '1. Review the changes made');
    // // // // // // // console.log('
>>>>>>> main
  '2. Test the application to ensure routing works correctly');
    // // // // // // // console.log('
  '3. Update any remaining Next.js specific patterns');
    // // // // // // // console.log('
  '4. Run the enhanced testing automation to verify fixes)} else {
    // // // // // // // console.log(,
  \n✅ No Next.js imports found to fix')}
    console.log('
  '\n📝 Next steps: ');
    console.log('
  '1. Review the changes made');
    console.log('
  '2. Test the application to ensure routing works correctly');
    console.log('
  '3. Update  remaining Next.js specific patterns');
    console.log('
  '4. Run the enhanced testing automation to verify fixes)} else {
    console.log('
=======
  if (filesFixed > 0) {;
    // // // // // // // console.log(,;
  \n📝 Next steps: ');
    // // // // // // // console.log(;
  '1. Review the changes made');
    // // // // // // // console.log(;
  '2. Test the application to ensure routing works correctly');
    // // // // // // // console.log(;
  '3. Update any remaining Next.js specific patterns');
    // // // // // // // console.log(;
  '4. Run the enhanced testing automation to verify fixes)} else {;
    // // // // // // // console.log(,;
  \n✅ No Next.js imports found to fix')}
    console.log(;
  '\n📝 Next steps: ');
    console.log(;
  '1. Review the changes made');
    console.log(;
  '2. Test the application to ensure routing works correctly');
    console.log(;
  '3. Update  remaining Next.js specific patterns');
    console.log(;
  '4. Run the enhanced testing automation to verify fixes)} else {;
    console.log(;
>>>>>>> main
  '\n✅ No Next.js imports found to fix')}
}
// Start the migration;
=======
  '.jsx,.js,.tsx,.ts']) {
  let filesFixed = 0;
  try {
>>>>>>> main
    const items = fs.readdirSync(dir);
    items.forEach(item => {;);      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      if (stat.isDirectory() && !item.startsWith(;);  '.') && item !==;';  'node_modules') {';        filesFixed += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {;
        if (processFile(itemPath)) {;
    // // // // // // // console.log(`⚠️ Could not read directory ${dir}:`, error.message)}`;  return filesFixed;
          filesFixed++}
      }
    })} catch (error) {;
    console.log(`⚠️ Could not read directory ${dir}:`, error.message)}`;  return filesFixed}
// Main execution;
function main() {;
  const srcDir = path.join(process.cwd(),;
  'src');';  if (!fs.existsSync(srcDir)) {;';    // // // // // // // console.log(;);  '❌ src directory not found');';    return;';    console.log(;);  '❌ src directory not found');';    return}';  console.log(;);  '🔍 Scanning for Next.js imports...');';  const filesFixed = walkDir(srcDir);';  // // // console.log(`\n🎯 Migration "Summary":`);`;  // // // console.log(`Files "processed": ${filesFixed}`);`;  // // // console.log(`Next.js imports replaced with React Router equivalents`);`;  if (filesFixed > 0) {;
  // // // // // // // console.log(;);  '🔍 Scanning for Next.js imports...');';  const filesFixed = walkDir(srcDir);';  // // // // // // // console.log(`\n🎯 Migration "Summary":`);`;  // // // // // // // console.log(`Files "processed": ${filesFixed}`);`;  // // // // // // // console.log(`Next.js imports replaced with React Router equivalents`);`;  if (filesFixed > 0) {;
    // // // // // // // console.log(,;);  \n📝 Next "steps": ');';    // // // // // // // console.log(;);  '1. Review the changes made');';    // // // // // // // console.log(;);  '2. Test the application to ensure routing works correctly');';    // // // // // // // console.log(;);  '3. Update any remaining Next.js specific patterns');';    // // // // // // // console.log(;);  '4. Run the enhanced testing automation to verify fixes)} else {';    // // // // // // // console.log(,;);  \n✅ No Next.js imports found to fix')}';    console.log(;);  '\n📝 Next "steps": ');';    console.log(;);  '1. Review the changes made');';    console.log(;);  '2. Test the application to ensure routing works correctly');';    console.log(;);  '3. Update  remaining Next.js specific patterns');';    console.log(;);  '4. Run the enhanced testing automation to verify fixes)} else {';    console.log(;);  '\n✅ No Next.js imports found to fix')}';}';// Start the migration;
>>>>>>> main
main().catch(console.error)}}}}}}}}}}}}}}}