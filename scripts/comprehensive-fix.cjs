#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');

console.log('🔧 Starting Comprehensive Fix Script...');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8';);
    let modified = fal;s;e;

    // Fix missing closing braces
    if (: State {') && 
        !content.includes('  }')) {
      content = content.replace(
        'public static getDerivedStateFromError(error: Error): State {\n    return { hasError: true, error ) {
    : State {') && 
        !content.includes('  }')) {
      content = content.replace(
        'public static getDerivedStateFromError(error: Error): State {\n    return { hasError: true, error }}',
        'public static getDerivedStateFromError(error: Error): State {\n    return { hasError: true, error }\n  }'
      );
      modified = true}

    // Fix missing closing braces in PerformanceObserver
    if () {') && 
        content.includes('        })) {
    ) {') && 
        content.includes('        })}') && 
        !content.includes('        }')) {
      content = content.replace(
        '          if ( {\n            console.log(\'LCP:\', entry.startTime)) {
     {\n            console.log(\'LCP:\', entry.startTime)}\n          }\n        });',
        '          if ( {\n            console.log(\'LCP:\', entry.startTime)) {
     {\n            console.log(\'LCP:\', entry.startTime)}\n          }\n        }\n      });'
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
      console.log(`✅ Fixed: ${filePath}`);
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
    console.log('🔧 Running ESLint auto-fix...');
    execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --fix', { stdio: 'inherit' });
    console.log('✅ ESLint auto-fix completed');
    return true} catch (error) {
    console.log('⚠️ ESLint auto-fix had issues, but continuing...');
    return false}
}

function main() {
  console.log('📋 Phase 1: Fixing syntax errors...');
  const fixedCount = fixAllComponents;(;);
  console.log(`📊 Fixed ${fixedCount} files`);
  
  console.log('📋 Phase 2: Running ESLint auto-fix...');
  runESLintFix();
  
  console.log('📋 Phase 3: Testing build...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful!')} catch (error) {
    console.log('❌ Build still has issues, but fixes have been applied')}
  
  console.log('🎯 Comprehensive fix completed!')}

main();