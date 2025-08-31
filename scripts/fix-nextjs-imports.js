#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// // // console.log('🔧 Fixing Next.js imports to React Router...');
=======
// // // // // // // console.log('🔧 Fixing Next.js imports to React Router...');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

// Function to replace Next.js imports with React Router
function replaceNextImports(content, filePath) {
  let modified = false;

  // Replace next/link with react-router-dom
  if (content.includes('next/link')) {
    content = content.replace(/import Link from ['"]next\/link['"];?/g, 'import { Link } from "react-router-dom";');
<<<<<<< HEAD
    modified = true;

  // Replace next/image with regular img tags (or keep as is for now)
  if (content.includes('next/image')) {
    content = content.replace(/import Image from ['"]next\/image['"];?/g, '// // // // import Image from 'next/image'; // TODO: Replace with regular img or custom Image component // TODO: Replace with regular img or custom Image component // TODO: Replace with regular img or custom Image component // TODO: Replace with regular img or custom Image component');
    modified = true;

  // Replace next/router with react-router-dom hooks
  if (content.includes('next/router')) {
    content = content.replace(/import.*from ['"]next\/router['"];?/g, 'import { useNavigate, useLocation, useParams } from "react-router-dom";');
    modified = true;

=======
    modified = true}
  
  // Replace next/image with regular img tags (or keep as is for now)
  if (content.includes('next/image')) {
    content = content.replace(/import Image from ['"]next\/image['"];?/g, '// import Image from "next/image"; // TODO: Replace with regular img or custom Image component');
    modified = true}
  
  // Replace next/router with react-router-dom hooks
  if (content.includes('next/router')) {
    content = content.replace(/import.*from ['"]next\/router['"];?/g, 'import { useNavigate, useLocation, useParams } from "react-router-dom";');
    modified = true}
  
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  // Replace Next.js specific usage patterns
  if (content.includes('next/link')) {
    // Replace Next.js Link usage patterns
    content = content.replace(/<Link href=/g, '<Link to=');
<<<<<<< HEAD
    modified = true;

  return { content, modified };
=======
    modified = true}
  
  return { content, modified }}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, modified } = replaceNextImports(content, filePath);

    if (modified) {
      fs.writeFileSync(filePath, newContent);
<<<<<<< HEAD
<<<<<<< HEAD
      // // // console.log(`✅ Fixed: ${filePath}`);
=======
      // // // // // // // console.log(`✅ Fixed: ${filePath}`);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
      return true;

    return false;
  } catch (error) {
<<<<<<< HEAD
    // // // console.log(`❌ Error processing ${filePath}:`, error.message);
=======
    // // // // // // // console.log(`❌ Error processing ${filePath}:`, error.message);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    return false;

=======
      console.log(`✅ Fixed: ${filePath}`);
      return true}
    
    return false} catch (error) {
    console.log(`❌ Error processing ${filePath}:`, error.message);
    return false}
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

// Function to walk directory recursively
function walkDir(dir, extensions = ['.jsx', '.js', '.tsx', '.ts']) {
  let filesFixed = 0;

  try {
    const items = fs.readdirSync(dir);

    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        filesFixed += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        if (processFile(itemPath)) {
<<<<<<< HEAD
          filesFixed++;


    });
  } catch (error) {
<<<<<<< HEAD
    // // // console.log(`⚠️ Could not read directory ${dir}:`, error.message);
=======
    // // // // // // // console.log(`⚠️ Could not read directory ${dir}:`, error.message);
  }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

  return filesFixed;
=======
          filesFixed++}
      }
    })} catch (error) {
    console.log(`⚠️ Could not read directory ${dir}:`, error.message)}
  
  return filesFixed}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

// Main execution
function main() {
  const srcDir = path.join(process.cwd(), 'src');

  if (!fs.existsSync(srcDir)) {
<<<<<<< HEAD
<<<<<<< HEAD
    // // // console.log('❌ src directory not found');
=======
    // // // // // // // console.log('❌ src directory not found');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    return;

<<<<<<< HEAD
  // // // console.log('🔍 Scanning for Next.js imports...');
=======
    console.log('❌ src directory not found');
    return}
  
  console.log('🔍 Scanning for Next.js imports...');
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  const filesFixed = walkDir(srcDir);

  // // // console.log(`\n🎯 Migration Summary:`);
  // // // console.log(`Files processed: ${filesFixed}`);
  // // // console.log(`Next.js imports replaced with React Router equivalents`);

  if (filesFixed > 0) {
<<<<<<< HEAD
    // // // console.log('\n📝 Next steps:');
    // // // console.log('1. Review the changes made');
    // // // console.log('2. Test the application to ensure routing works correctly');
    // // // console.log('3. Update any remaining Next.js specific patterns');
    // // // console.log('4. Run the enhanced testing automation to verify fixes');
  } else {
    // // // console.log('\n✅ No Next.js imports found to fix');

=======
  // // // // // // // console.log('🔍 Scanning for Next.js imports...');
  const filesFixed = walkDir(srcDir);

  // // // // // // // console.log(`\n🎯 Migration Summary:`);
  // // // // // // // console.log(`Files processed: ${filesFixed}`);
  // // // // // // // console.log(`Next.js imports replaced with React Router equivalents`);

  if (filesFixed > 0) {
    // // // // // // // console.log('\n📝 Next steps:');
    // // // // // // // console.log('1. Review the changes made');
    // // // // // // // console.log('2. Test the application to ensure routing works correctly');
    // // // // // // // console.log('3. Update any remaining Next.js specific patterns');
    // // // // // // // console.log('4. Run the enhanced testing automation to verify fixes');
  } else {
    // // // // // // // console.log('\n✅ No Next.js imports found to fix');
  }
=======
    console.log('\n📝 Next steps:');
    console.log('1. Review the changes made');
    console.log('2. Test the application to ensure routing works correctly');
    console.log('3. Update  remaining Next.js specific patterns');
    console.log('4. Run the enhanced testing automation to verify fixes')} else {
    console.log('\n✅ No Next.js imports found to fix')}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
}
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

// Start the migration
main().catch(console.error);
}}}}}}}}}}}}}}}