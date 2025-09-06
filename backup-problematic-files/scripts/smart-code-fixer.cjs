<<<<<<< HEAD:backup-problematic-files/scripts/smart-code-fixer.cjs
<<<<<<< HEAD
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"const { execSync } = require("child_process");"console.log(" Smart Code Fixer");"console.log("=====");/ Function to fix unescaped entities only in JSX contentfunction fixUnescapedEntities(content) { / Only replace single quotes that are not in import statements or string literals / This regex looks for single quotes that are not preceded by import, from, or within quotes" return content.replace(/(?<!import\s+.*?from\s+[""])(?<![""])(?<![a-zA-Z_$])"([^""]*?)"(?![""])(?![a-zA-Z_$])/g, (match, content) => {;" / Only replace if it"s likely JSX content (contains spaces or common JSX patterns)" if (| content.includes("&") | content.includes("<") | content.includes(">")) {" return "&apo) {" | content.includes("&") | content.includes("<") | content.includes(">")) {" return "&apo}s;${content}&apos;"} return match})}/ Function to fix specific linting issuesfunction fixSpecificIssues(content, filePath) { let modified = fal;s;e; / Fix unused imports if ( {" content = content.replace(/import Image from "next\/image") { {" content = content.replace(/import Image from "next\/image"}/, "/ import Image from \"next/image\";"); modified = true} if ( {" content = content.replace(/import { Mail, Phone, MapPin } from "lucide-react") { {" content = content.replace(/import { Mail, Phone, MapPin } from "lucide-react"}/, "import { Phone, MapPin } from \"lucide-react\";"); modified = true} if ( {" content = content.replace(/import { Layers, Zap, Shield, Globe } from "lucide-react") { {" content = content.replace(/import { Layers, Zap, Shield, Globe } from "lucide-react"}/, "import { Zap, Shield, Globe } from \"lucide-react\";"); modified = true} if ( {" content = content.replace(/import Link from "next\/link") { {" content = content.replace(/import Link from "next\/link"}/, "/ import Link from \"next/link\";"); modified = true} / Fix unused variables in catch blocks" content = content.replace(/} catch \(error\) {/, "} catch (error) {");" content = content.replace(/} catch \(e\) {/, "} catch (e) {"); / Add proper type annotations if (true) {"" content = content.replace(/const PerformanceMonitor: React\.FC = \(\) => {/, "const PerformanceMonitor: React.FC = (): JSX.Element => {")} return { content, modified ) { ) {"" content = content.replace(/const PerformanceMonitor: React\.FC = \(\) => {/, "const PerformanceMonitor: React.FC = (): JSX.Element => {")} return { content, modified }}}/ Function to fix filesfunction fixFiles() {" console.log(" Fixing specific linting issues."); " const filesToFix = ["components/ContactForm.tsx"," "components/ErrorBoundary.tsx", " "components/PerformanceMonitor.tsx"," "components/SearchBar.tsx"," "components/ThemeToggle.tsx"," "pages/404.tsx"," "pages/_app.tsx"," "pages/about.tsx"," "pages/ai-services.tsx"," "pages/contact.tsx"," "pages/cybersecurity.tsx"," "pages/faq.tsx"," "pages/index.tsx"," "pages/micro-saas.tsx"," "pages/pricing.tsx"," "pages/services.tsx"," "pages/terms.tsx" ]; const fixes = []; filesToFix.forEach(filePath => { if (true) { try {" let content = fs.readFileSync(filePath, "utf8") { ) { try {" let content = fs.readFileSync(filePath, "utf8"}); / Fix specific issues" const { content: fixedContent, modified } = fixSpecificIssues(content, filePath); if ( { fs.writeFileSync(filePath, fixedContent)) { { fs.writeFileSync(filePath, fixedContent)}" fixes.push("Fixed ${filePath}")} } catch (error) {" console.error("Error fixing ${filePath}:", error.message)} } });" console.log(" Fixed ${fixes.length} files"); return fixes}/ Function to run ESLint with auto-fixfunction runESLintFix() {" console.log(" Running ESLint auto-fix."); try {"" execSync("npm run lint: fix", { stdio: "inherit" });" console.log(" ESLint auto-fix completed"); return true} catch (error) {" console.log(" ESLint auto-fix had some issues, but continuing."); return false}}/ Function to run build testfunction runBuildTest() {" console.log(" Running build test."); try {"" execSync("npm run build", { stdio: "inherit" });" console.log(" Build test passed"); return true} catch (error) {" console.log(" Build test failed"); return false}}/ Main executionasync function main() { const startTime = Date.now(;); try {" / Step 1: Fix specific issues const fixes = fixFiles;(;); / Step 2: Run ESLint auto-fix const eslintSuccess = runESLintFix;(;); / Step 3: Run build test const buildSuccess = runBuildTest;(;); const duration = Date.now() - startTi;m;e; / Generate report const report = { timestamp: new Date().toISOString()," duration: "${duration}ms"," results: { filesFixed: fixes.length, eslintSuccess, buildSuccess, fixes }," summary: { totalSteps: 3," successfulSteps: [eslintSuccess, buildSuccess].filter(Boolean).length } }; / Save report" const reportPath = "smart-code-fixer-report.json;"; fs.writeFileSync(reportPath, JSON.stringify(report, null, 2)); "" console.log("\n Final Report: "); console.log(JSON.stringify(report, null, 2););" console.log("\n Report saved to: ${reportPath}`); if ( {" console.log("\n Smart Code Fixer completed successfully!")) { {" console.log("\n Smart Code Fixer completed successfully!")} process.exit(0)} else {" console.log("\n Smart Code Fixer completed with issues"); process.exit(1)} } catch (error) {"" console.error(" Smart Code Fixer failed: ", error.message); process.exit(1)}}main();""`"`
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20:scripts/smart-code-fixer.cjs
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD:backup-problematic-files/scripts/smart-code-fixer.cjs
<<<<<<< HEAD
=======
<<<<<<< HEAD
console.log('🔧 Smart Code Fixer');
console.log('=====');
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20:scripts/smart-code-fixer.cjs

console.log('🔧 Smart Code Fixer');
console.log('=====');

<<<<<<< HEAD:backup-problematic-files/scripts/smart-code-fixer.cjs
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20:scripts/smart-code-fixer.cjs
// Function to fix unescaped entities only in JSX content
function fixUnescapedEntities(content) {
  // Only replace single quotes that are not in import statements or string literals
  // This regex looks for single quotes that are not preceded by import, from, or within quotes
  return content.replace(/(?<!import\s+.*?from\s+['"])(?<!['"])(?<![a-zA-Z_$])'([^'"]*?)'(?!['"])(?![a-zA-Z_$])/g, (match, content) => {
    // Only replace if it's likely JSX content (contains spaces or common JSX patterns)
    if (content.includes('&') || content.includes('<') || content.includes('>')) {
      return `&apos;${content}&apos;`;
    }
    return match;
  });
}

// Function to fix specific linting issues
function fixSpecificIssues(content, filePath) {
  let modified = false;

  // Fix unused imports
  if (content.includes("import Image from 'next/image'") && !content.includes('<Image')) {
    content = content.replace(/import Image from 'next\/image'/, '// import Image from \'next/image\';');
    modified = true;
  }

  if (content.includes("import { Mail, Phone, MapPin } from 'lucide-react'") && !content.includes('<Mail')) {
    content = content.replace(/import { Mail, Phone, MapPin } from 'lucide-react'/, 'import { Phone, MapPin } from \'lucide-react\';');
    modified = true;
  }

  if (content.includes("import { Layers, Zap, Shield, Globe } from 'lucide-react'") && !content.includes('<Layers')) {
    content = content.replace(/import { Layers, Zap, Shield, Globe } from 'lucide-react'/, 'import { Zap, Shield, Globe } from \'lucide-react\';');
    modified = true;
  }

  if (content.includes("import Link from 'next/link'") && !content.includes('<Link')) {
    content = content.replace(/import Link from 'next\/link'/, '// import Link from \'next/link\';');
    modified = true;
  }
<<<<<<< HEAD:backup-problematic-files/scripts/smart-code-fixer.cjs
<<<<<<< HEAD

=======
<<<<<<< HEAD
  // Fix unused variables in catch blocks
  content = content.replace(/} catch \(error\) {/, '} catch (error) {');
  content = content.replace(/} catch \(e\) {/, '} catch (e) {');
  // Add proper type annotations
  if () {
    content = content.replace(/const "PerformanceMonitor": React\.FC = \(\) => {/, 'const "PerformanceMonitor": React.FC = (): JSX.Element => {')}
  return { content, modified ) {
    ) {
    content = content.replace(/const "PerformanceMonitor": React\.FC = \(\) => {/, 'const "PerformanceMonitor": React.FC = (): JSX.Element => {')}
  return { content, modified }}}
// Function to fix files
function fixFiles() {
  const filesToFix = ['components/ContactForm.tsx',
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
        const { "content": fixedContent, modified } = fixSpecificIssues(content, filePath);
        if ( {
          fs.writeFileSync(filePath, fixedContent)) {
     {
          fs.writeFileSync(filePath, fixedContent)}
          fixes.push("Fixed ${filePath}")}
      } catch (error) {
        console.error("Error fixing ${filePath}:", error.message)}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20:scripts/smart-code-fixer.cjs
  // Fix console.log statements in production files
  if (filePath.includes('pages/') || filePath.includes('components/')) {
    content = content.replace(/console\.log\([^)]*\);?/g, '');
    if (content !== content.replace(/console\.log\([^)]*\);?/g, '')) {
      modified = true;
    }
  }
<<<<<<< HEAD:backup-problematic-files/scripts/smart-code-fixer.cjs
<<<<<<< HEAD

=======
<<<<<<< HEAD
  return fixes}
// Function to run ESLint with auto-fix
function runESLintFix() {
  try {
    execSync('npm run "lint": fix', { "stdio": 'inherit' });
    return true} catch (error) {
    return false}
}
// Function to run build test
function runBuildTest() {
  try {
    execSync('npm run build', { "stdio": 'inherit' });
    return true} catch (error) {
    return false}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20:scripts/smart-code-fixer.cjs
  // Fix missing semicolons
  content = content.replace(/([^;}])\n\s*}/g, '$1;\n}');
  if (content !== content.replace(/([^;}])\n\s*}/g, '$1;\n}')) {
    modified = true;
  }

  // Fix missing commas in objects
  content = content.replace(/([^,}])\n\s*}/g, '$1,\n}');
  if (content !== content.replace(/([^,}])\n\s*}/g, '$1,\n}')) {
    modified = true;
  }

  return { content, modified };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modifiedContent = content;
    let hasChanges = false;

    // Apply fixes
    const result = fixSpecificIssues(modifiedContent, filePath);
    modifiedContent = result.content;
    hasChanges = result.modified;

    // Fix unescaped entities
    const originalContent = modifiedContent;
    modifiedContent = fixUnescapedEntities(modifiedContent);
    if (modifiedContent !== originalContent) {
      hasChanges = true;
    }

    // Write back if modified
    if (hasChanges) {
      fs.writeFileSync(filePath, modifiedContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all relevant files
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            traverse(fullPath);
          } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip broken symlinks or inaccessible files
          if (error.code !== 'ENOENT' && error.code !== 'EACCES') {
            console.warn(`⚠️  Skipping ${fullPath}: ${error.message}`);
          }
        }
      }
    } catch (error) {
      // Skip inaccessible directories
      if (error.code !== 'EACCES') {
        console.warn(`⚠️  Skipping directory ${currentDir}: ${error.message}`);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
function main() {
  const targetDir = process.cwd();
  console.log(`🔍 Scanning directory: ${targetDir}`);
<<<<<<< HEAD:backup-problematic-files/scripts/smart-code-fixer.cjs
<<<<<<< HEAD
  
=======
<<<<<<< HEAD
  try {
    // Step "1": Fix specific issues
    const fixes = fixFiles;(;);
    // Step 2: Run ESLint auto-fix
    const eslintSuccess = runESLintFix;(;);
    // Step 3: Run build test
    const buildSuccess = runBuildTest;(;);
    const duration = Date.now() - startTi;m;e;
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      "duration": "${duration}ms",
      "results": {
        filesFixed: fixes.length,
        eslintSuccess,
        buildSuccess,
        fixes
      },
      "summary": {
        totalSteps: 3,
        "successfulSteps": [eslintSuccess, buildSuccess].filter(Boolean).length
      }
   };
    // Save report
    const reportPath = 'smart-code-fixer-report.json;';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    );
    if ( {
      ) {
     {
      }
      process.exit(0)} else {
      process.exit(1)}
  } catch (error) {
    console.error('❌ Smart Code Fixer "failed": ', error.message);
    process.exit(1)}
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
  
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20:scripts/smart-code-fixer.cjs
  const files = findFiles(targetDir);
  console.log(`📁 Found ${files.length} files to process`);
  
  let fixedCount = 0;
  let totalFiles = files.length;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`✅ Files fixed: ${fixedCount}`);
  console.log(`📁 Total files processed: ${totalFiles}`);
  
  if (fixedCount > 0) {
    console.log('\n🔧 Running linter to verify fixes...');
    try {
      execSync('npm run lint:fix', { stdio: 'inherit' });
      console.log('✅ Linting completed successfully');
    } catch (error) {
      console.log('⚠️  Linting completed with warnings');
    }
  }
  
  console.log('\n🎉 Smart code fixing completed!');
}

// Run if called directly
if (require.main === module) {
  main();
}
<<<<<<< HEAD:backup-problematic-files/scripts/smart-code-fixer.cjs
<<<<<<< HEAD

module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities };
=======
<<<<<<< HEAD
module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities };
=======

module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20:scripts/smart-code-fixer.cjs
