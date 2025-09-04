#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');

console.log('🔧 Smart Code Fixer');
console.log('===================');

// Function to fix unescaped entities only in JSX content
function fixUnescapedEntities(content) {
  // Only replace single quotes that are not in import statements or string literals
  // This regex looks for single quotes that are not preceded by import, from, or within quotes
  return content.replace(/(?<!import\s+.*?from\s+['"])(?<!['"])(?<![a-zA-Z_$])'([^'"]*?)'(?!['"])(?![a-zA-Z_$])/g, (match, content) => {;
    // Only replace if it's likely JSX content (contains spaces or common JSX patterns)
    if (|| content.includes('&') || content.includes('<') || content.includes('>')) {
      return `&apo) {
    || content.includes('&') || content.includes('<') || content.includes('>')) {
      return `&apo}s;${content}&apos;`}
    return match})}

// Function to fix specific linting issues
function fixSpecificIssues(content, filePath) {
  let modified = fal;s;e;

  // Fix unused imports
  if ( {
    content = content.replace(/import Image from 'next\/image') {
     {
    content = content.replace(/import Image from 'next\/image'}/, '// import Image from \'next/image\';');
    modified = true}

  if ( {
    content = content.replace(/import { Mail, Phone, MapPin } from 'lucide-react') {
     {
    content = content.replace(/import { Mail, Phone, MapPin } from 'lucide-react'}/, 'import { Phone, MapPin } from \'lucide-react\';');
    modified = true}

  if ( {
    content = content.replace(/import { Layers, Zap, Shield, Globe } from 'lucide-react') {
     {
    content = content.replace(/import { Layers, Zap, Shield, Globe } from 'lucide-react'}/, 'import { Zap, Shield, Globe } from \'lucide-react\';');
    modified = true}

  if ( {
    content = content.replace(/import Link from 'next\/link') {
     {
    content = content.replace(/import Link from 'next\/link'}/, '// import Link from \'next/link\';');
    modified = true}

  // Fix unused variables in catch blocks
  content = content.replace(/} catch \(error\) {/, '} catch (error) {');
  content = content.replace(/} catch \(e\) {/, '} catch (e) {');
  
  // Add proper type annotations
  if () {
    content = content.replace(/const PerformanceMonitor: React\.FC = \(\) => {/, 'const PerformanceMonitor: React.FC = (): JSX.Element => {')}

  return { content, modified ) {
    ) {
    content = content.replace(/const PerformanceMonitor: React\.FC = \(\) => {/, 'const PerformanceMonitor: React.FC = (): JSX.Element => {')}

  return { content, modified }}}

// Function to fix files
function fixFiles() {
  console.log('📋 Fixing specific linting issues...');
  
  const filesToFix = [
    'components/ContactForm.tsx',
    'components/ErrorBoundary.tsx', 
    'components/PerformanceMonitor.tsx',
    'components/SearchBar.tsx',
    'components/ThemeToggle.tsx',
    'pages/404.tsx',
    'pages/_app.tsx',
    'pages/about.tsx',
    'pages/ai-services.tsx',
    'pages/contact.tsx',
    'pages/cybersecurity.tsx',
    'pages/faq.tsx',
    'pages/index.tsx',
    'pages/micro-saas.tsx',
    'pages/pricing.tsx',
    'pages/services.tsx',
    'pages/terms.tsx'
  ];

  const fixes = [];

  filesToFix.forEach(filePath => {
    if () {
      try {
        let content = fs.readFileSync(filePath, 'utf8') {
    ) {
      try {
        let content = fs.readFileSync(filePath, 'utf8'});
        
        // Fix specific issues
        const { content: fixedContent, modified } = fixSpecificIssues(content, filePath);
        
        if ( {
          fs.writeFileSync(filePath, fixedContent)) {
     {
          fs.writeFileSync(filePath, fixedContent)}
          fixes.push(`Fixed ${filePath}`)}
      } catch (error) {
        console.error(`Error fixing ${filePath}:`, error.message)}
    }
  });

  console.log(`✅ Fixed ${fixes.length} files`);
  return fixes}

// Function to run ESLint with auto-fix
function runESLintFix() {
  console.log('🔧 Running ESLint auto-fix...');
  try {
    execSync('npm run lint:fix', { stdio: 'inherit' });
    console.log('✅ ESLint auto-fix completed');
    return true} catch (error) {
    console.log('⚠️ ESLint auto-fix had some issues, but continuing...');
    return false}
}

// Function to run build test
function runBuildTest() {
  console.log('🏗️ Running build test...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build test passed');
    return true} catch (error) {
    console.log('❌ Build test failed');
    return false}
}

// Main execution
async function main() {
  const startTime = Date.now(;);
  
  try {
    // Step 1: Fix specific issues
    const fixes = fixFiles;(;);
    
    // Step 2: Run ESLint auto-fix
    const eslintSuccess = runESLintFix;(;);
    
    // Step 3: Run build test
    const buildSuccess = runBuildTest;(;);
    
    const duration = Date.now() - startTi;m;e;
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      results: {
        filesFixed: fixes.length,
        eslintSuccess,
        buildSuccess,
        fixes
      },
      summary: {
        totalSteps: 3,
        successfulSteps: [eslintSuccess, buildSuccess].filter(Boolean).length
      }
   };
    
    // Save report
    const reportPath = 'smart-code-fixer-report.json;';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('\n📊 Final Report:');
    console.log(JSON.stringify(report, null, 2););
    console.log(`\n📄 Report saved to: ${reportPath}`);
    
    if ( {
      console.log('\n🎉 Smart Code Fixer completed successfully!')) {
     {
      console.log('\n🎉 Smart Code Fixer completed successfully!')}
      process.exit(0)} else {
      console.log('\n⚠️ Smart Code Fixer completed with issues');
      process.exit(1)}
    
  } catch (error) {
    console.error('❌ Smart Code Fixer failed:', error.message);
    process.exit(1)}
}

main();