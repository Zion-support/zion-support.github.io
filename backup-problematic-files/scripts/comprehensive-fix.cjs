

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
console.log('🔧 Comprehensive fix for all files...');
// List of problematic files
const filesToFix = [
  'pages/about.tsx',
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/services.tsx',
  'pages/talent.tsx'
];

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

=======
=======
    // Fix missing closing braces
    if (: State {') && 
        !content.includes('  }')) {
      content = content.replace(
        'public static getDerivedStateFromError("error": Error): State {\n    return { hasError: true, error ) {
    : State {') && 
        !content.includes('  }')) {
      content = content.replace(
        'public static getDerivedStateFromError("error": Error): State {\n    return { hasError: true, error }}',
        'public static getDerivedStateFromError("error": Error): State {\n    return { hasError: true, error }\n  }'
      );
      modified = true}
    // Fix missing closing braces in PerformanceObserver
    if () {') && 
        content.includes('        })) {
    ) {') && 
        content.includes('        })}') && 
        !content.includes('        }')) {
      content = content.replace(
        '          if ( {\n            ) {
     {\n            }\n          }\n        });',
        '          if ( {\n            ) {
     {\n            }\n          }\n        }\n      });'
      );
      modified = true}
    // Fix export statements
    if (&& !content.includes('\nexport default')) {
      content = content.replace(/(\n\s*)(export default)/, '\n$2')) {
    && !content.includes('\nexport default')) {
      content = content.replace(/(\n\s*)(export default)/, '\n$2')}
      modified = true}
    if ( {
      fs.writeFileSync(filePath, content)) {
     {
      fs.writeFileSync(filePath, content)}
      return true}
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message)}
  return false}
function fixAllComponents() {
  const componentsDir = path.join(process.cwd(), 'components;';);
  const pagesDir = path.join(process.cwd(), 'pages;';);
  let fixedCount = ;0;
  // Fix components
  if () {
    const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts') {
    ) {
    const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'}););
    files.forEach(file => {
      if ()) {
        fixedCount++}
    })}
  // Fix pages
  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts') {
    )) {
        fixedCount++}
    })}
  // Fix pages
  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'}););
    files.forEach(file => {
      if ()) {
        fixedCount++}
    })}
  return fixedCount) {
    )) {
        fixedCount++}
    })}
  return fixedCount}}
function runESLintFix() {
  try {
    execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --fix', { "stdio": 'inherit' });
    return true} catch (error) {
    return false}
}
function main() {
  const fixedCount = fixAllComponents;(;);
  runESLintFix();
  try {
    execSync('npm run build', { "stdio": 'inherit' });
    } catch (error) {
    }
  }
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    // Fix common syntax issues
    content = content.replace(/md: text-2xl/g, 'md:text-2xl');
    content = content.replace(/import MainLayout from '\.\.\/components\/layout\/MainLayout';[\s\S]*?const blogPosts/g, 'const blogPosts');
    content = content.replace(/,\s*"title":/g, ',');
    content = content.replace(/,\s*"description":/g, ',');
    content = content.replace(/,\s*"icon":/g, ',');
    content = content.replace(/,\s*"href":/g, ',');
    // Clean up extra whitespace and newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    content = content.replace(/\s+$/gm, '');
    // Write the fixed content
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}
// Process all files
let fixedCount = 0;
for (const file of filesToFix) {
  if (fixFile(file)) {
    fixedCount++;
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
