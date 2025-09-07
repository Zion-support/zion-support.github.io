<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/automation/performance-monitor.js
=======
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/automation/performance-monitor.js
#!/usr/bin/env node,"}),"}) import { execSync } from,"}),"}) 'child_process',"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) const __dirname = path.dirname(__filename),"}),"}) '📊 Starting continuous performance monitoring automation...'),"}),"}) ,"}),"}) '📊 Starting continuous performance monitoring automation...'),"}),"}) const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; async function runPerformanceMonitor() {,"}),"}) try {,"}),"}) 🏗️ Building project for performance analysis...'),"}),"}) execSync(,"}),"}) 'npm run build',{ stdio: 'inherit }),"}),"}) 📦 Analyzing bundle size...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'node scripts/analyze-bundle.js',{ stdio: 'inherit }),"}),"}) ✅ Bundle analysis completed'),"}),"}) } catch (error) {,"}),"}) '⚠️ Bundle analysis failed but continuing...'),"}),"}) '🔍 Running Lighthouse performance tests...'),"}),"}) try {,"}),"}) if (fs.existsSync(,"}),"}) 'lighthouserc.json')) {,"}),"}) execSync(,"}),"}) 'npx lighthouse --config=lighthouserc.json',{ stdio: 'inherit }),"}),"}) ✅ Lighthouse tests completed'),"}),"}) } else {,"}),"}) 'ℹ️ No Lighthouse configuration found'),"}),"}) '🏗️ Building project for performance analysis...'),"}),"}) execSync(,"}),"}) 'npm run build',{ stdio: 'inherit }),"}),"}) 📦 Analyzing bundle size...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'node scripts/analyze-bundle.js',{ stdio: 'inherit }),"}),"}) ✅ Bundle analysis completed'),"}),"}) } catch (error) {,"}),"}) '⚠️ Bundle analysis failed but continuing...'),"}),"}) }"}),"}) '🔍 Running Lighthouse performance tests...'),"}),"}) try {,"}),"}) if (fs.existsSync(,"}),"}) 'lighthouserc.json')) {,"}),"}) execSync(,"}),"}) 'npx lighthouse --config=lighthouserc.json',{ stdio: 'inherit }),"}),"}) '✅ Lighthouse tests completed'),"}),"}) } else {,"}),"}) 'ℹ️ No Lighthouse configuration found'),"}),"}) }"}),"}) } catch (error) {,"}),"}) '⚠️ Lighthouse tests failed but continuing...'),"}),"}) }"}),"}) '📁 Checking build output for large files...'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) '⚠️ Lighthouse tests failed but continuing...'),"}),"}) '📁 Checking build output for large files...'),"}),"}) const distPath = path.join(process.cwd(),,"}),"}) 'dist'),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const largeFiles = findLargeFiles(distPath),"}),"}) if (largeFiles.length > 0) {,"}),"}) '⚠️ Large files found in build output:'),"}),"}) largeFiles.forEach(file => {,"}),"}) }),"}),"}) } else {,"}),"}) ✅ No excessively large files found'),"}),"}) '🔍 Checking for unused dependencies...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'npx depcheck',{ stdio: 'inherit }),"}),"}) } catch (error) {,"}),"}) 'ℹ️ Dependency check not available'),"}),"}) '⚠️ Large files found in build output:'),"}),"}) largeFiles.forEach(file => {,"}),"}) }),"}),"}) } else {,"}),"}) ✅ No excessively large files found'),"}),"}) }"}),"}) }"}),"}) '🔍 Checking for unused dependencies...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'npx depcheck',{ stdio: 'inherit }),"}),"}) } catch (error) {,"}),"}) ℹ️ Dependency check not available'),"}),"}) }"}),"}) '📊 Generating performance report...'),"}),"}) ,"}),"}) summary: 'Performance monitoring completed,"}),"}) },"}),"}) ,"}),"}) ,"}) '📊 Generating performance report...'),"}),"}) const reportPath = path.join(process.cwd(),,"}),"}) 'performance-report.json'),"}),"}) fs.writeFileSync(reportPath,JSON.stringify(report,null,2)),"}),"}) '✅ Continuous performance monitoring completed successfully'),"}),"}) } catch (error) {,"}),"}) '❌ Continuous performance monitoring failed:',error.message),"}),"}) '✅ Continuous performance monitoring completed successfully'),"}),"}) } catch (error) {,"}),"}) '❌ Continuous performance monitoring failed:',error.message),"}),"}) ,"}),"}) 't exit,just log the error and continue,"}),"}) function findLargeFiles(dir,maxSize = 1024 * 1024) { const largeFiles = [],"}),"}) function scanDirectory(currentDir) {,"}),"}) try {,"}),"}) const items = fs.readdirSync(currentDir),"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(currentDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) if (stat.isDirectory()) {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && stat.size > maxSize) {,"}),"}) largeFiles.push({,"}),"}) path: path.relative(process.cwd(),fullPath),,"}),"}) size: stat.size,"}),"}) }),"}),"}) } catch (error) {,"}),"}) t be accessed,"}),"}) scanDirectory(dir),"}),"}) return largeFiles.sort((a,b) => b.size - a.size),"}),"}) function getDirectorySize(dir) {,"}),"}) const totalSize = 0,"}),"}) function calculateSize(currentDir) {,"}),"}) try {,"}),"}) const items = fs.readdirSync(currentDir),"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(currentDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) if (stat.isDirectory()) {,"}),"}) calculateSize(fullPath),"}),"}) } else if (stat.isFile()) {,"}),"}) totalSize += stat.size,"}),"}) } catch (error) {,"}),"}) 't be accessed,"}),"}) calculateSize(dir),"}),"}) return totalSize,"}),"}) async function runContinuous() {,"}),"}) ,"}),"}) await runPerformanceMonitor(),"}),"}) setInterval(async () => {,"}),"}) await runPerformanceMonitor(),"}),"}) },AUTOMATION_INTERVAL),"}),"}) }"}),"}) process.on('SIGINT,"}),"}) ',() => {,"}),"}) '),"}),"}) ,"}),"}) process.on('SIGINT,"}),"}) ',() => {,"}),"}) '),"}),"}) process.exit(0),"}),"}) }),"}),"}) process.on('SIGTERM,"}),"}) ',() => {,"}),"}) '),"}),"}) ,"}),"}) '),"}),"}) process.exit(0),"}),"}) }),"}),"}) runContinuous().catch(error => {,"}),"}) ,"}),"}) process.exit(1),"}),"}) }),"}),"}) }}}}}}}}}}}}}}}}}}}"}),"}) const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000 async function runPerformanceMonitor() { try {',🏗️ Building project for performance analysis...`); execSync( `npm run build`,{ stdio: `inherit }) 'npm run build',{ stdio: 'inherit }); 📦 Analyzing bundle size...'); try { execSync(','node scripts/analyze-bundle.js',{ stdio: 'inherit });

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
#!/usr/bin/env node,"}),"}) import { execSync } from,"}),"}) 'child_process',"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) const __dirname = path.dirname(__filename),"}),"}) '📊 Starting continuous performance monitoring automation...'),"}),"}) ,"}),"}) '📊 Starting continuous performance monitoring automation...'),"}),"}) const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; async function runPerformanceMonitor() {,"}),"}) try {,"}),"}) 🏗️ Building project for performance analysis...'),"}),"}) execSync(,"}),"}) 'npm run build',{ stdio: 'inherit }),"}),"}) 📦 Analyzing bundle size...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'node scripts/analyze-bundle.js',{ stdio: 'inherit }),"}),"}) ✅ Bundle analysis completed'),"}),"}) } catch (error) {,"}),"}) '⚠️ Bundle analysis failed but continuing...'),"}),"}) '🔍 Running Lighthouse performance tests...'),"}),"}) try {,"}),"}) if (fs.existsSync(,"}),"}) 'lighthouserc.json')) {,"}),"}) execSync(,"}),"}) 'npx lighthouse --config=lighthouserc.json',{ stdio: 'inherit }),"}),"}) ✅ Lighthouse tests completed'),"}),"}) } else {,"}),"}) 'ℹ️ No Lighthouse configuration found'),"}),"}) '🏗️ Building project for performance analysis...'),"}),"}) execSync(,"}),"}) 'npm run build',{ stdio: 'inherit }),"}),"}) 📦 Analyzing bundle size...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'node scripts/analyze-bundle.js',{ stdio: 'inherit }),"}),"}) ✅ Bundle analysis completed'),"}),"}) } catch (error) {,"}),"}) '⚠️ Bundle analysis failed but continuing...'),"}),"}) }"}),"}) '🔍 Running Lighthouse performance tests...'),"}),"}) try {,"}),"}) if (fs.existsSync(,"}),"}) 'lighthouserc.json')) {,"}),"}) execSync(,"}),"}) 'npx lighthouse --config=lighthouserc.json',{ stdio: 'inherit }),"}),"}) '✅ Lighthouse tests completed'),"}),"}) } else {,"}),"}) 'ℹ️ No Lighthouse configuration found'),"}),"}) }"}),"}) } catch (error) {,"}),"}) '⚠️ Lighthouse tests failed but continuing...'),"}),"}) }"}),"}) '📁 Checking build output for large files...'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) '⚠️ Lighthouse tests failed but continuing...'),"}),"}) '📁 Checking build output for large files...'),"}),"}) const distPath = path.join(process.cwd(),,"}),"}) 'dist'),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const largeFiles = findLargeFiles(distPath),"}),"}) if (largeFiles.length > 0) {,"}),"}) '⚠️ Large files found in build output:'),"}),"}) largeFiles.forEach(file => {,"}),"}) }),"}),"}) } else {,"}),"}) ✅ No excessively large files found'),"}),"}) '🔍 Checking for unused dependencies...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'npx depcheck',{ stdio: 'inherit }),"}),"}) } catch (error) {,"}),"}) 'ℹ️ Dependency check not available'),"}),"}) '⚠️ Large files found in build output:'),"}),"}) largeFiles.forEach(file => {,"}),"}) }),"}),"}) } else {,"}),"}) ✅ No excessively large files found'),"}),"}) }"}),"}) }"}),"}) '🔍 Checking for unused dependencies...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'npx depcheck',{ stdio: 'inherit }),"}),"}) } catch (error) {,"}),"}) ℹ️ Dependency check not available'),"}),"}) }"}),"}) '📊 Generating performance report...'),"}),"}) ,"}),"}) summary: 'Performance monitoring completed,"}),"}) },"}),"}) ,"}),"}) ,"}) '📊 Generating performance report...'),"}),"}) const reportPath = path.join(process.cwd(),,"}),"}) 'performance-report.json'),"}),"}) fs.writeFileSync(reportPath,JSON.stringify(report,null,2)),"}),"}) '✅ Continuous performance monitoring completed successfully'),"}),"}) } catch (error) {,"}),"}) '❌ Continuous performance monitoring failed:',error.message),"}),"}) '✅ Continuous performance monitoring completed successfully'),"}),"}) } catch (error) {,"}),"}) '❌ Continuous performance monitoring failed:',error.message),"}),"}) ,"}),"}) 't exit,just log the error and continue,"}),"}) function findLargeFiles(dir,maxSize = 1024 * 1024) { const largeFiles = [],"}),"}) function scanDirectory(currentDir) {,"}),"}) try {,"}),"}) const items = fs.readdirSync(currentDir),"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(currentDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) if (stat.isDirectory()) {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && stat.size > maxSize) {,"}),"}) largeFiles.push({,"}),"}) path: path.relative(process.cwd(),fullPath),,"}),"}) size: stat.size,"}),"}) }),"}),"}) } catch (error) {,"}),"}) t be accessed,"}),"}) scanDirectory(dir),"}),"}) return largeFiles.sort((a,b) => b.size - a.size),"}),"}) function getDirectorySize(dir) {,"}),"}) const totalSize = 0,"}),"}) function calculateSize(currentDir) {,"}),"}) try {,"}),"}) const items = fs.readdirSync(currentDir),"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(currentDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) if (stat.isDirectory()) {,"}),"}) calculateSize(fullPath),"}),"}) } else if (stat.isFile()) {,"}),"}) totalSize += stat.size,"}),"}) } catch (error) {,"}),"}) 't be accessed,"}),"}) calculateSize(dir),"}),"}) return totalSize,"}),"}) async function runContinuous() {,"}),"}) ,"}),"}) await runPerformanceMonitor(),"}),"}) setInterval(async () => {,"}),"}) await runPerformanceMonitor(),"}),"}) },AUTOMATION_INTERVAL),"}),"}) }"}),"}) process.on('SIGINT,"}),"}) ',() => {,"}),"}) '),"}),"}) ,"}),"}) process.on('SIGINT,"}),"}) ',() => {,"}),"}) '),"}),"}) process.exit(0),"}),"}) }),"}),"}) process.on('SIGTERM,"}),"}) ',() => {,"}),"}) '),"}),"}) ,"}),"}) '),"}),"}) process.exit(0),"}),"}) }),"}),"}) runContinuous().catch(error => {,"}),"}) ,"}),"}) process.exit(1),"}),"}) }),"}),"}) }}}}}}}}}}}}}}}}}}}"}),"}) const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000 async function runPerformanceMonitor() { try {',🏗️ Building project for performance analysis...`); execSync( `npm run build`,{ stdio: `inherit }) 'npm run build',{ stdio: 'inherit }); 📦 Analyzing bundle size...'); try { execSync(','node scripts/analyze-bundle.js',{ stdio: 'inherit });
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
#!/usr/bin/env node,"}),"})
import { execSync } from,"}),"})
  'child_process',"}),"})
import fs from,"}),"})
  'fs',"}),"})
import path from,"}),"})
  'path',"}),"})
import { fileURLToPath } from,"}),"})
  'url',"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
const __dirname = path && path.dirname(__filename),"}),"})
// // // // // // // console && console.log(,"}),"})
  '📊 Starting continuous performance monitoring automation...'),"}),"})
,"}),"})
// // // console && console.log(,"}),"})
  '📊 Starting continuous performance monitoring automation...'),"}),"})

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
const __dirname = path.dirname(__filename),"}),"})
// // // // // // // console.log(,"}),"})
  '📊 Starting continuous performance monitoring automation...'),"}),"})
,"}),"})
// // // console.log(,"}),"})
  '📊 Starting continuous performance monitoring automation...'),"}),"})
// Get automation interval from environment variable ("default": 2 hours),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours,"}),"})
async function runPerformanceMonitor() {,"}),"})
  try {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
    // // // console && console.log(`📊 Running performance monitoring at ${new Date().toISOString()}`),"}),"})
    // Build the project first,"}),"})
    // // // console && console.log(,,"}),"})
=======
    // // // console.log(`📊 Running performance monitoring at ${new Date().toISOString()}`),"}),"})
    // Build the project first,"}),"})
    // // // console.log(,,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  🏗️ Building project for performance analysis...'),"}),"})
    execSync(,"}),"})
  'npm run build', { "stdio": 'inherit }),"}),"})
    // Check bundle size,"}),"})
<<<<<<< HEAD
    // // // console && console.log(,,"}),"})
  📦 Analyzing bundle size...'),"}),"})
    try {,"}),"})
      execSync(,"}),"})
  'node scripts/analyze-bundle && bundle.js', { "stdio": 'inherit }),"}),"})
      // // // console && console.log(,,"}),"})
  ✅ Bundle analysis completed'),"}),"})
    } catch (error) {,"}),"})
      // // // console && console.log(,"}),"})
  '⚠️  Bundle analysis failed but continuing...'),"}),"})
    // Run Lighthouse performance tests if available,"}),"})
    // // // console && console.log(,"}),"})
  '🔍 Running Lighthouse performance tests...'),"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    try {,"}),"})
      if (fs && fs.existsSync(,"}),"})
  'lighthouserc && lighthouserc.json')) {,"}),"})
        execSync(,"}),"})
<<<<<<< HEAD
  'npx lighthouse --config=lighthouserc && lighthouserc.json', { "stdio": 'inherit }),"}),"})
        // // // console && console.log(,,"}),"})
  ✅ Lighthouse tests completed'),"}),"})
      } else {,"}),"})
        // // // console && console.log(,"}),"})
  'ℹ️  No Lighthouse configuration found'),"}),"})
    // // // // // // // console && console.log(`📊 Running performance monitoring at ${new Date().toISOString()}`),"}),"})
    // Build the project first,"}),"})
    // // // // // // // console && console.log(,"}),"})
  '🏗️ Building project for performance analysis...'),"}),"})
    execSync(,"}),"})
  'npm run build', { "stdio": 'inherit }),"}),"})
    // Check bundle size,"}),"})
    // // // // // // // console && console.log(,,"}),"})
  📦 Analyzing bundle size...'),"}),"})
    try {,"}),"})
      execSync(,"}),"})
  'node scripts/analyze-bundle && bundle.js', { "stdio": 'inherit }),"}),"})
      // // // // // // // console && console.log(,,"}),"})
  ✅ Bundle analysis completed'),"}),"})
    } catch (error) {,"}),"})
      // // // // // // // console && console.log(,"}),"})
  '⚠️  Bundle analysis failed but continuing...'),"}),"})
    }"}),"})
    // Run Lighthouse performance tests if available,"}),"})
    // // // // // // // console && console.log(,"}),"})
  '🔍 Running Lighthouse performance tests...'),"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    // // // console.log(,,"}),"})
  📦 Analyzing bundle size...'),"}),"})
    try {,"}),"})
      execSync(,"}),"})
  'node scripts/analyze-bundle.js', { "stdio": 'inherit }),"}),"})
      // // // console.log(,,"}),"})
  ✅ Bundle analysis completed'),"}),"})
    } catch (error) {,"}),"})
      // // // console.log(,"}),"})
  '⚠️  Bundle analysis failed but continuing...'),"}),"})
    // Run Lighthouse performance tests if available,"}),"})
    // // // console.log(,"}),"})
  '🔍 Running Lighthouse performance tests...'),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {,"}),"})
      if (fs.existsSync(,"}),"})
  'lighthouserc.json')) {,"}),"})
        execSync(,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
  'npx lighthouse --config=lighthouserc && lighthouserc.json', { "stdio": 'inherit }),"}),"})
        // // // // // // // console && console.log(,"}),"})
  '✅ Lighthouse tests completed'),"}),"})
      } else {,"}),"})
        // // // // // // // console && console.log(,"}),"})
  'ℹ️  No Lighthouse configuration found'),"}),"})
      }"}),"})
    } catch (error) {,"}),"})
      // // // // // // // console && console.log(,"}),"})
  '⚠️  Lighthouse tests failed but continuing...'),"}),"})
    }"}),"})
    // Check for large files in build output,"}),"})
    // // // // // // // console && console.log(,"}),"})
  '📁 Checking build output for large files...'),"}),"})
,"}),"})
    } catch (error) {,"}),"})
      // // // console && console.log(,"}),"})
  '⚠️  Lighthouse tests failed but continuing...'),"}),"})
    // Check for large files in build output,"}),"})
    // // // console && console.log(,"}),"})
  '📁 Checking build output for large files...'),"}),"})
    const distPath = path && path.join(process && process.cwd(),,"}),"})
=======
  'npx lighthouse --config=lighthouserc.json', { "stdio": 'inherit }),"}),"})
        // // // console.log(,,"}),"})
  ✅ Lighthouse tests completed'),"}),"})
      } else {,"}),"})
        // // // console.log(,"}),"})
  'ℹ️  No Lighthouse configuration found'),"}),"})
    // // // // // // // console.log(`📊 Running performance monitoring at ${new Date().toISOString()}`),"}),"})
    // Build the project first,"}),"})
    // // // // // // // console.log(,"}),"})
  '🏗️ Building project for performance analysis...'),"}),"})
    execSync(,"}),"})
  'npm run build', { "stdio": 'inherit }),"}),"})
    // Check bundle size,"}),"})
    // // // // // // // console.log(,,"}),"})
  📦 Analyzing bundle size...'),"}),"})
    try {,"}),"})
      execSync(,"}),"})
  'node scripts/analyze-bundle.js', { "stdio": 'inherit }),"}),"})
      // // // // // // // console.log(,,"}),"})
  ✅ Bundle analysis completed'),"}),"})
    } catch (error) {,"}),"})
      // // // // // // // console.log(,"}),"})
  '⚠️  Bundle analysis failed but continuing...'),"}),"})
    }"}),"})
    // Run Lighthouse performance tests if available,"}),"})
    // // // // // // // console.log(,"}),"})
  '🔍 Running Lighthouse performance tests...'),"}),"})
    try {,"}),"})
      if (fs.existsSync(,"}),"})
  'lighthouserc.json')) {,"}),"})
        execSync(,"}),"})
  'npx lighthouse --config=lighthouserc.json', { "stdio": 'inherit }),"}),"})
        // // // // // // // console.log(,"}),"})
  '✅ Lighthouse tests completed'),"}),"})
      } else {,"}),"})
        // // // // // // // console.log(,"}),"})
  'ℹ️  No Lighthouse configuration found'),"}),"})
      }"}),"})
    } catch (error) {,"}),"})
      // // // // // // // console.log(,"}),"})
  '⚠️  Lighthouse tests failed but continuing...'),"}),"})
    }"}),"})
    // Check for large files in build output,"}),"})
    // // // // // // // console.log(,"}),"})
  '📁 Checking build output for large files...'),"}),"})
,"}),"})
    } catch (error) {,"}),"})
      // // // console.log(,"}),"})
  '⚠️  Lighthouse tests failed but continuing...'),"}),"})
    // Check for large files in build output,"}),"})
    // // // console.log(,"}),"})
  '📁 Checking build output for large files...'),"}),"})
    const distPath = path.join(process.cwd(),,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  'dist'),"}),"})
    if (fs.existsSync(distPath)) {,"}),"})
      const largeFiles = findLargeFiles(distPath),"}),"})
<<<<<<< HEAD
      if (largeFiles && largeFiles.length > 0) {,"}),"})
        // // // console && console.log(,"}),"})
  '⚠️  Large files found in build "output": '),"}),"})
        largeFiles && largeFiles.forEach(file => {,"}),"})
          // // // console && console.log(`  - ${file && file.path}: ${(file && file.size / 1024 / 1024).toFixed(2)} MB`),"}),"})
        }),"}),"})
      } else {,"}),"})
        // // // console && console.log(,,"}),"})
  ✅ No excessively large files found'),"}),"})
    // Check for unused dependencies,"}),"})
    // // // console && console.log(,"}),"})
  '🔍 Checking for unused dependencies...'),"}),"})
=======
  'dist'),"}),"})
    if (fs && fs.existsSync(distPath)) {,"}),"})
      const largeFiles = findLargeFiles(distPath),"}),"})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      if (largeFiles.length > 0) {,"}),"})
        // // // console.log(,"}),"})
  '⚠️  Large files found in build "output": '),"}),"})
        largeFiles.forEach(file => {,"}),"})
          // // // console.log(`  - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB`),"}),"})
        }),"}),"})
      } else {,"}),"})
        // // // console.log(,,"}),"})
  ✅ No excessively large files found'),"}),"})
    // Check for unused dependencies,"}),"})
    // // // console.log(,"}),"})
  '🔍 Checking for unused dependencies...'),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {,"}),"})
      execSync(,"}),"})
  'npx depcheck', { "stdio": 'inherit }),"}),"})
    } catch (error) {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
      // // // console && console.log(,"}),"})
  'ℹ️  Dependency check not available'),"}),"})
    // Generate performance report,"}),"})
        // // // // // // // console && console.log(,"}),"})
  '⚠️  Large files found in build "output": '),"}),"})
        largeFiles && largeFiles.forEach(file => {,"}),"})
          // // // // // // // console && console.log(`  - ${file && file.path}: ${(file && file.size / 1024 / 1024).toFixed(2)} MB`),"}),"})
        }),"}),"})
      } else {,"}),"})
        // // // // // // // console && console.log(,,"}),"})
=======
      // // // console.log(,"}),"})
  'ℹ️  Dependency check not available'),"}),"})
    // Generate performance report,"}),"})
        // // // // // // // console.log(,"}),"})
  '⚠️  Large files found in build "output": '),"}),"})
        largeFiles.forEach(file => {,"}),"})
          // // // // // // // console.log(`  - ${file.path}: ${(file.size / 1024 / 1024).toFixed(2)} MB`),"}),"})
        }),"}),"})
      } else {,"}),"})
        // // // // // // // console.log(,,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ✅ No excessively large files found'),"}),"})
      }"}),"})
    }"}),"})
    // Check for unused dependencies,"}),"})
<<<<<<< HEAD
    // // // // // // // console && console.log(,"}),"})
  '🔍 Checking for unused dependencies...'),"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    // // // // // // // console.log(,"}),"})
  '🔍 Checking for unused dependencies...'),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    try {,"}),"})
      execSync(,"}),"})
  'npx depcheck', { "stdio": 'inherit }),"}),"})
    } catch (error) {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
      // // // // // // // console && console.log(,,"}),"})
  ℹ️  Dependency check not available'),"}),"})
    }"}),"})
    // Generate performance report,"}),"})
    // // // // // // // console && console.log(,"}),"})
  '📊 Generating performance report...'),"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      // // // // // // // console.log(,,"}),"})
  ℹ️  Dependency check not available'),"}),"})
    }"}),"})
    // Generate performance report,"}),"})
    // // // // // // // console.log(,"}),"})
  '📊 Generating performance report...'),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
,"}),"})
  "summary": 'Performance monitoring completed,"}),"})
},"}),"})
,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
    console && console.log(,"}),"})
  '📊 Generating performance report...'),"}),"})
    const reportPath = path && path.join(process && process.cwd(),,"}),"})
  'performance-report && report.json'),"}),"})
    fs && fs.writeFileSync(reportPath, JSON && JSON.stringify(report, null, 2)),"}),"})
    // // // console && console.log(`✅ Performance report saved to ${reportPath}`),"}),"})
    // // // console && console.log(,"}),"})
  '✅ Continuous performance monitoring completed successfully'),"}),"})
  } catch (error) {,"}),"})
    // // // console && console.error(,"}),"})
  '❌ Continuous performance monitoring "failed": ', error && error.message),"}),"})
    // // // // // // // console && console.log(`✅ Performance report saved to ${reportPath}`),"}),"})
    // // // // // // // console && console.log(,"}),"})
  '✅ Continuous performance monitoring completed successfully'),"}),"})
  } catch (error) {,"}),"})
    // // // // // // // console && console.error(,"}),"})
  '❌ Continuous performance monitoring "failed": ', error && error.message),"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    console.log(,"}),"})
  '📊 Generating performance report...'),"}),"})
    const reportPath = path.join(process.cwd(),,"}),"})
  'performance-report.json'),"}),"})
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2)),"}),"})
    // // // console.log(`✅ Performance report saved to ${reportPath}`),"}),"})
    // // // console.log(,"}),"})
  '✅ Continuous performance monitoring completed successfully'),"}),"})
  } catch (error) {,"}),"})
    // // // console.error(,"}),"})
  '❌ Continuous performance monitoring "failed": ', error.message),"}),"})
    // // // // // // // console.log(`✅ Performance report saved to ${reportPath}`),"}),"})
    // // // // // // // console.log(,"}),"})
  '✅ Continuous performance monitoring completed successfully'),"}),"})
  } catch (error) {,"}),"})
    // // // // // // // console.error(,"}),"})
  '❌ Continuous performance monitoring "failed": ', error.message),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
,"}),"})
    // Don,"}),"})
  't exit, just log the error and continue,"}),"})
function findLargeFiles(dir, maxSize = 1024 * 1024) { // 1MB default,"}),"})
  const largeFiles = [],"}),"})
  function scanDirectory(currentDir) {,"}),"})
    try {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      const items = fs.readdirSync(currentDir),"}),"})
      for (const item of items) {,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        const fullPath = path.join(currentDir, item),"}),"})
        const stat = fs.statSync(fullPath),"}),"})
        if (stat.isDirectory()) {,"}),"})
          scanDirectory(fullPath),"}),"})
        } else if (stat.isFile() && stat.size > maxSize) {,"}),"})
          largeFiles.push({,"}),"})
            "path": path.relative(process.cwd(), fullPath),,"}),"})
            "size": stat.size,"}),"})
          }),"}),"})
    } catch (error) {,"}),"})
      // Skip directories that can,,"}),"})
  t be accessed,"}),"})
  scanDirectory(dir),"}),"})
  return largeFiles.sort((a, b) => b.size - a.size),"}),"})
function getDirectorySize(dir) {,"}),"})
  const totalSize = 0,"}),"})
  function calculateSize(currentDir) {,"}),"})
    try {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      const items = fs.readdirSync(currentDir),"}),"})
      for (const item of items) {,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        const fullPath = path.join(currentDir, item),"}),"})
        const stat = fs.statSync(fullPath),"}),"})
        if (stat.isDirectory()) {,"}),"})
          calculateSize(fullPath),"}),"})
        } else if (stat.isFile()) {,"}),"})
          totalSize += stat.size,"}),"})
    } catch (error) {,"}),"})
      // Skip directories that can,"}),"})
  't be accessed,"}),"})
  calculateSize(dir),"}),"})
  return totalSize,"}),"})
// Main continuous loop,"}),"})
async function runContinuous() {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
  // // // // // // // console && console.log(`🚀 Starting continuous performance monitoring with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`),"}),"})
,"}),"})
  // // // console && console.log(`🚀 Starting continuous performance monitoring with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`),"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  // // // // // // // console.log(`🚀 Starting continuous performance monitoring with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`),"}),"})
,"}),"})
  // // // console.log(`🚀 Starting continuous performance monitoring with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  // Run initial performance monitoring,"}),"})
  await runPerformanceMonitor(),"}),"})
  // Set up continuous execution,"}),"})
  setInterval(async () => {,"}),"})
    await runPerformanceMonitor(),"}),"})
  }, AUTOMATION_INTERVAL),"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
  // // // // // // // console && console.log(`✅ Continuous performance monitoring running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`),"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  // // // // // // // console.log(`✅ Continuous performance monitoring running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}"}),"})
// Handle graceful shutdown,"}),"})
process.on('SIGINT,"}),"})
  ', () => {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
  // // // // // // // console && console.log('🛑 Received SIGINT, shutting down gracefully...,"}),"})
  '),"}),"})
,"}),"})
  // // // console && console.log(`✅ Continuous performance monitoring running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`),"}),"})
=======
  // // // // // // // console.log('🛑 Received SIGINT, shutting down gracefully...,"}),"})
  '),"}),"})
,"}),"})
  // // // console.log(`✅ Continuous performance monitoring running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Handle graceful shutdown,"}),"})
process.on('SIGINT,"}),"})
  ', () => {,"}),"})
<<<<<<< HEAD
  // // // console && console.log('🛑 Received SIGINT, shutting down gracefully...,"}),"})
=======
// Handle graceful shutdown,"}),"})
process && process.on('SIGINT,"}),"})
  ', () => {,"}),"})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  // // // console.log('🛑 Received SIGINT, shutting down gracefully...,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  '),"}),"})
  process.exit(0),"}),"})
}),"}),"})
process.on('SIGTERM,"}),"})
  ', () => {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
  // // // // // // // console && console.log('🛑 Received SIGTERM, shutting down gracefully...,"}),"})
  '),"}),"})
,"}),"})
  // // // console && console.log('🛑 Received SIGTERM, shutting down gracefully...,"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  // // // // // // // console.log('🛑 Received SIGTERM, shutting down gracefully...,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  '),"}),"})
,"}),"})
  // // // console.log('🛑 Received SIGTERM, shutting down gracefully...,"}),"})
  '),"}),"})
  process.exit(0),"}),"})
}),"}),"})
// Start the continuous performance monitor,"}),"})
runContinuous().catch(error => {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
  // // // // // // // console && console.error('❌ Failed to start continuous performance "monitoring": error),"}),"})
,"}),"})
  // // // console && console.error('❌ Failed to start continuous performance "monitoring": ', error),"}),"})
  process && process.exit(1),"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  // // // // // // // console.error('❌ Failed to start continuous performance "monitoring": error),"}),"})
,"}),"})
  // // // console.error('❌ Failed to start continuous performance "monitoring": ', error),"}),"})
  process.exit(1),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}),"}),"})
}}}}}}}}}}}}}}}}}}}"}),"})
// Get automation interval from environment variable ("default": 2 hours);
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000 // 2 hours;
async function runPerformanceMonitor() {
  try {',
<<<<<<< HEAD
<<<<<<< HEAD
    // // // console && console.log(`📊 Running performance monitoring at ${new Date().toISOString()}`);
    // Build the project first;
    // // // console && console.log(
  🏗️ Building project for performance analysis...");
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    // // // console.log(`📊 Running performance monitoring at ${new Date().toISOString()}`);
    // Build the project first;
    // // // console.log(
  🏗️ Building project for performance analysis...");
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    execSync(
  "npm run build", { "stdio": "inherit })
  'npm run build', { "stdio": 'inherit });
    // Check bundle size;
<<<<<<< HEAD
<<<<<<< HEAD
    // // // console && console.log(,
=======
    // // // console.log(,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  📦 Analyzing bundle size...');
    try {
      execSync(',
      'node scripts/analyze-bundle.js', { "stdio": 'inherit });
      // // // console.log(
#!/usr/bin/env node,"}),"}) import { execSync } from,"}),"}) 'child_process',"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) const __dirname = path.dirname(__filename),"}),"}) '📊 Starting continuous performance monitoring automation...'),"}),"}) ,"}),"}) '📊 Starting continuous performance monitoring automation...'),"}),"}) const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; async function runPerformanceMonitor() {,"}),"}) try {,"}),"}) 🏗️ Building project for performance analysis...'),"}),"}) execSync(,"}),"}) 'npm run build',{ stdio: 'inherit }),"}),"}) 📦 Analyzing bundle size...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'node scripts/analyze-bundle.js',{ stdio: 'inherit }),"}),"}) ✅ Bundle analysis completed'),"}),"}) } catch (error) {,"}),"}) '⚠️ Bundle analysis failed but continuing...'),"}),"}) '🔍 Running Lighthouse performance tests...'),"}),"}) try {,"}),"}) if (fs.existsSync(,"}),"}) 'lighthouserc.json')) {,"}),"}) execSync(,"}),"}) 'npx lighthouse --config=lighthouserc.json',{ stdio: 'inherit }),"}),"}) ✅ Lighthouse tests completed'),"}),"}) } else {,"}),"}) 'ℹ️ No Lighthouse configuration found'),"}),"}) '🏗️ Building project for performance analysis...'),"}),"}) execSync(,"}),"}) 'npm run build',{ stdio: 'inherit }),"}),"}) 📦 Analyzing bundle size...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'node scripts/analyze-bundle.js',{ stdio: 'inherit }),"}),"}) ✅ Bundle analysis completed'),"}),"}) } catch (error) {,"}),"}) '⚠️ Bundle analysis failed but continuing...'),"}),"}) }"}),"}) '🔍 Running Lighthouse performance tests...'),"}),"}) try {,"}),"}) if (fs.existsSync(,"}),"}) 'lighthouserc.json')) {,"}),"}) execSync(,"}),"}) 'npx lighthouse --config=lighthouserc.json',{ stdio: 'inherit }),"}),"}) '✅ Lighthouse tests completed'),"}),"}) } else {,"}),"}) 'ℹ️ No Lighthouse configuration found'),"}),"}) }"}),"}) } catch (error) {,"}),"}) '⚠️ Lighthouse tests failed but continuing...'),"}),"}) }"}),"}) '📁 Checking build output for large files...'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) '⚠️ Lighthouse tests failed but continuing...'),"}),"}) '📁 Checking build output for large files...'),"}),"}) const distPath = path.join(process.cwd(),,"}),"}) 'dist'),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const largeFiles = findLargeFiles(distPath),"}),"}) if (largeFiles.length > 0) {,"}),"}) '⚠️ Large files found in build output:'),"}),"}) largeFiles.forEach(file => {,"}),"}) }),"}),"}) } else {,"}),"}) ✅ No excessively large files found'),"}),"}) '🔍 Checking for unused dependencies...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'npx depcheck',{ stdio: 'inherit }),"}),"}) } catch (error) {,"}),"}) 'ℹ️ Dependency check not available'),"}),"}) '⚠️ Large files found in build output:'),"}),"}) largeFiles.forEach(file => {,"}),"}) }),"}),"}) } else {,"}),"}) ✅ No excessively large files found'),"}),"}) }"}),"}) }"}),"}) '🔍 Checking for unused dependencies...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'npx depcheck',{ stdio: 'inherit }),"}),"}) } catch (error) {,"}),"}) ℹ️ Dependency check not available'),"}),"}) }"}),"}) '📊 Generating performance report...'),"}),"}) ,"}),"}) summary: 'Performance monitoring completed,"}),"}) },"}),"}) ,"}),"}) console.log(,"}),"}) '📊 Generating performance report...'),"}),"}) const reportPath = path.join(process.cwd(),,"}),"}) 'performance-report.json'),"}),"}) fs.writeFileSync(reportPath,JSON.stringify(report,null,2)),"}),"}) '✅ Continuous performance monitoring completed successfully'),"}),"}) } catch (error) {,"}),"}) '❌ Continuous performance monitoring failed:',error.message),"}),"}) '✅ Continuous performance monitoring completed successfully'),"}),"}) } catch (error) {,"}),"}) '❌ Continuous performance monitoring failed:',error.message),"}),"}) ,"}),"}) 't exit,just log the error and continue,"}),"}) function findLargeFiles(dir,maxSize = 1024 * 1024) { const largeFiles = [],"}),"}) function scanDirectory(currentDir) {,"}),"}) try {,"}),"}) const items = fs.readdirSync(currentDir),"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(currentDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) if (stat.isDirectory()) {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && stat.size > maxSize) {,"}),"}) largeFiles.push({,"}),"}) path: path.relative(process.cwd(),fullPath),,"}),"}) size: stat.size,"}),"}) }),"}),"}) } catch (error) {,"}),"}) t be accessed,"}),"}) scanDirectory(dir),"}),"}) return largeFiles.sort((a,b) => b.size - a.size),"}),"}) function getDirectorySize(dir) {,"}),"}) const totalSize = 0,"}),"}) function calculateSize(currentDir) {,"}),"}) try {,"}),"}) const items = fs.readdirSync(currentDir),"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(currentDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) if (stat.isDirectory()) {,"}),"}) calculateSize(fullPath),"}),"}) } else if (stat.isFile()) {,"}),"}) totalSize += stat.size,"}),"}) } catch (error) {,"}),"}) 't be accessed,"}),"}) calculateSize(dir),"}),"}) return totalSize,"}),"}) async function runContinuous() {,"}),"}) ,"}),"}) await runPerformanceMonitor(),"}),"}) setInterval(async () => {,"}),"}) await runPerformanceMonitor(),"}),"}) },AUTOMATION_INTERVAL),"}),"}) }"}),"}) process.on('SIGINT,"}),"}) ',() => {,"}),"}) '),"}),"}) ,"}),"}) process.on('SIGINT,"}),"}) ',() => {,"}),"}) '),"}),"}) process.exit(0),"}),"}) }),"}),"}) process.on('SIGTERM,"}),"}) ',() => {,"}),"}) '),"}),"}) ,"}),"}) '),"}),"}) process.exit(0),"}),"}) }),"}),"}) runContinuous().catch(error => {,"}),"}) ,"}),"}) process.exit(1),"}),"}) }),"}),"}) }}}}}}}}}}}}}}}}}}}"}),"}) const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000 async function runPerformanceMonitor() { try {',🏗️ Building project for performance analysis...`); execSync( `npm run build`,{ stdio: `inherit }) 'npm run build',{ stdio: 'inherit }); 📦 Analyzing bundle size...'); try { execSync(','node scripts/analyze-bundle.js',{ stdio: 'inherit });
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/automation/performance-monitor.js
#!/usr/bin/env node,"}),"}) import { execSync } from,"}),"}) 'child_process',"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) const __dirname = path.dirname(__filename),"}),"}) '📊 Starting continuous performance monitoring automation...'),"}),"}) ,"}),"}) '📊 Starting continuous performance monitoring automation...'),"}),"}) const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; async function runPerformanceMonitor() {,"}),"}) try {,"}),"}) 🏗️ Building project for performance analysis...'),"}),"}) execSync(,"}),"}) 'npm run build',{ stdio: 'inherit }),"}),"}) 📦 Analyzing bundle size...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'node scripts/analyze-bundle.js',{ stdio: 'inherit }),"}),"}) ✅ Bundle analysis completed'),"}),"}) } catch (error) {,"}),"}) '⚠️ Bundle analysis failed but continuing...'),"}),"}) '🔍 Running Lighthouse performance tests...'),"}),"}) try {,"}),"}) if (fs.existsSync(,"}),"}) 'lighthouserc.json')) {,"}),"}) execSync(,"}),"}) 'npx lighthouse --config=lighthouserc.json',{ stdio: 'inherit }),"}),"}) ✅ Lighthouse tests completed'),"}),"}) } else {,"}),"}) 'ℹ️ No Lighthouse configuration found'),"}),"}) '🏗️ Building project for performance analysis...'),"}),"}) execSync(,"}),"}) 'npm run build',{ stdio: 'inherit }),"}),"}) 📦 Analyzing bundle size...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'node scripts/analyze-bundle.js',{ stdio: 'inherit }),"}),"}) ✅ Bundle analysis completed'),"}),"}) } catch (error) {,"}),"}) '⚠️ Bundle analysis failed but continuing...'),"}),"}) }"}),"}) '🔍 Running Lighthouse performance tests...'),"}),"}) try {,"}),"}) if (fs.existsSync(,"}),"}) 'lighthouserc.json')) {,"}),"}) execSync(,"}),"}) 'npx lighthouse --config=lighthouserc.json',{ stdio: 'inherit }),"}),"}) '✅ Lighthouse tests completed'),"}),"}) } else {,"}),"}) 'ℹ️ No Lighthouse configuration found'),"}),"}) }"}),"}) } catch (error) {,"}),"}) '⚠️ Lighthouse tests failed but continuing...'),"}),"}) }"}),"}) '📁 Checking build output for large files...'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) '⚠️ Lighthouse tests failed but continuing...'),"}),"}) '📁 Checking build output for large files...'),"}),"}) const distPath = path.join(process.cwd(),,"}),"}) 'dist'),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const largeFiles = findLargeFiles(distPath),"}),"}) if (largeFiles.length > 0) {,"}),"}) '⚠️ Large files found in build output:'),"}),"}) largeFiles.forEach(file => {,"}),"}) }),"}),"}) } else {,"}),"}) ✅ No excessively large files found'),"}),"}) '🔍 Checking for unused dependencies...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'npx depcheck',{ stdio: 'inherit }),"}),"}) } catch (error) {,"}),"}) 'ℹ️ Dependency check not available'),"}),"}) '⚠️ Large files found in build output:'),"}),"}) largeFiles.forEach(file => {,"}),"}) }),"}),"}) } else {,"}),"}) ✅ No excessively large files found'),"}),"}) }"}),"}) }"}),"}) '🔍 Checking for unused dependencies...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'npx depcheck',{ stdio: 'inherit }),"}),"}) } catch (error) {,"}),"}) ℹ️ Dependency check not available'),"}),"}) }"}),"}) '📊 Generating performance report...'),"}),"}) ,"}),"}) summary: 'Performance monitoring completed,"}),"}) },"}),"}) ,"}),"}) console.log(,"}),"}) '📊 Generating performance report...'),"}),"}) const reportPath = path.join(process.cwd(),,"}),"}) 'performance-report.json'),"}),"}) fs.writeFileSync(reportPath,JSON.stringify(report,null,2)),"}),"}) '✅ Continuous performance monitoring completed successfully'),"}),"}) } catch (error) {,"}),"}) '❌ Continuous performance monitoring failed:',error.message),"}),"}) '✅ Continuous performance monitoring completed successfully'),"}),"}) } catch (error) {,"}),"}) '❌ Continuous performance monitoring failed:',error.message),"}),"}) ,"}),"}) 't exit,just log the error and continue,"}),"}) function findLargeFiles(dir,maxSize = 1024 * 1024) { const largeFiles = [],"}),"}) function scanDirectory(currentDir) {,"}),"}) try {,"}),"}) const items = fs.readdirSync(currentDir),"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(currentDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) if (stat.isDirectory()) {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && stat.size > maxSize) {,"}),"}) largeFiles.push({,"}),"}) path: path.relative(process.cwd(),fullPath),,"}),"}) size: stat.size,"}),"}) }),"}),"}) } catch (error) {,"}),"}) t be accessed,"}),"}) scanDirectory(dir),"}),"}) return largeFiles.sort((a,b) => b.size - a.size),"}),"}) function getDirectorySize(dir) {,"}),"}) const totalSize = 0,"}),"}) function calculateSize(currentDir) {,"}),"}) try {,"}),"}) const items = fs.readdirSync(currentDir),"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(currentDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) if (stat.isDirectory()) {,"}),"}) calculateSize(fullPath),"}),"}) } else if (stat.isFile()) {,"}),"}) totalSize += stat.size,"}),"}) } catch (error) {,"}),"}) 't be accessed,"}),"}) calculateSize(dir),"}),"}) return totalSize,"}),"}) async function runContinuous() {,"}),"}) ,"}),"}) await runPerformanceMonitor(),"}),"}) setInterval(async () => {,"}),"}) await runPerformanceMonitor(),"}),"}) },AUTOMATION_INTERVAL),"}),"}) }"}),"}) process.on('SIGINT,"}),"}) ',() => {,"}),"}) '),"}),"}) ,"}),"}) process.on('SIGINT,"}),"}) ',() => {,"}),"}) '),"}),"}) process.exit(0),"}),"}) }),"}),"}) process.on('SIGTERM,"}),"}) ',() => {,"}),"}) '),"}),"}) ,"}),"}) '),"}),"}) process.exit(0),"}),"}) }),"}),"}) runContinuous().catch(error => {,"}),"}) ,"}),"}) process.exit(1),"}),"}) }),"}),"}) }}}}}}}}}}}}}}}}}}}"}),"}) const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000 async function runPerformanceMonitor() { try {',🏗️ Building project for performance analysis...`); execSync( `npm run build`,{ stdio: `inherit }) 'npm run build',{ stdio: 'inherit }); 📦 Analyzing bundle size...'); try { execSync(','node scripts/analyze-bundle.js',{ stdio: 'inherit });
=======
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/automation/performance-monitor.js
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
#!/usr/bin/env node,"}),"}) import { execSync } from,"}),"}) 'child_process',"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) const __dirname = path.dirname(__filename),"}),"}) '📊 Starting continuous performance monitoring automation...'),"}),"}) ,"}),"}) '📊 Starting continuous performance monitoring automation...'),"}),"}) const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; async function runPerformanceMonitor() {,"}),"}) try {,"}),"}) 🏗️ Building project for performance analysis...'),"}),"}) execSync(,"}),"}) 'npm run build',{ stdio: 'inherit }),"}),"}) 📦 Analyzing bundle size...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'node scripts/analyze-bundle.js',{ stdio: 'inherit }),"}),"}) ✅ Bundle analysis completed'),"}),"}) } catch (error) {,"}),"}) '⚠️ Bundle analysis failed but continuing...'),"}),"}) '🔍 Running Lighthouse performance tests...'),"}),"}) try {,"}),"}) if (fs.existsSync(,"}),"}) 'lighthouserc.json')) {,"}),"}) execSync(,"}),"}) 'npx lighthouse --config=lighthouserc.json',{ stdio: 'inherit }),"}),"}) ✅ Lighthouse tests completed'),"}),"}) } else {,"}),"}) 'ℹ️ No Lighthouse configuration found'),"}),"}) '🏗️ Building project for performance analysis...'),"}),"}) execSync(,"}),"}) 'npm run build',{ stdio: 'inherit }),"}),"}) 📦 Analyzing bundle size...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'node scripts/analyze-bundle.js',{ stdio: 'inherit }),"}),"}) ✅ Bundle analysis completed'),"}),"}) } catch (error) {,"}),"}) '⚠️ Bundle analysis failed but continuing...'),"}),"}) }"}),"}) '🔍 Running Lighthouse performance tests...'),"}),"}) try {,"}),"}) if (fs.existsSync(,"}),"}) 'lighthouserc.json')) {,"}),"}) execSync(,"}),"}) 'npx lighthouse --config=lighthouserc.json',{ stdio: 'inherit }),"}),"}) '✅ Lighthouse tests completed'),"}),"}) } else {,"}),"}) 'ℹ️ No Lighthouse configuration found'),"}),"}) }"}),"}) } catch (error) {,"}),"}) '⚠️ Lighthouse tests failed but continuing...'),"}),"}) }"}),"}) '📁 Checking build output for large files...'),"}),"}) ,"}),"}) } catch (error) {,"}),"}) '⚠️ Lighthouse tests failed but continuing...'),"}),"}) '📁 Checking build output for large files...'),"}),"}) const distPath = path.join(process.cwd(),,"}),"}) 'dist'),"}),"}) if (fs.existsSync(distPath)) {,"}),"}) const largeFiles = findLargeFiles(distPath),"}),"}) if (largeFiles.length > 0) {,"}),"}) '⚠️ Large files found in build output:'),"}),"}) largeFiles.forEach(file => {,"}),"}) }),"}),"}) } else {,"}),"}) ✅ No excessively large files found'),"}),"}) '🔍 Checking for unused dependencies...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'npx depcheck',{ stdio: 'inherit }),"}),"}) } catch (error) {,"}),"}) 'ℹ️ Dependency check not available'),"}),"}) '⚠️ Large files found in build output:'),"}),"}) largeFiles.forEach(file => {,"}),"}) }),"}),"}) } else {,"}),"}) ✅ No excessively large files found'),"}),"}) }"}),"}) }"}),"}) '🔍 Checking for unused dependencies...'),"}),"}) try {,"}),"}) execSync(,"}),"}) 'npx depcheck',{ stdio: 'inherit }),"}),"}) } catch (error) {,"}),"}) ℹ️ Dependency check not available'),"}),"}) }"}),"}) '📊 Generating performance report...'),"}),"}) ,"}),"}) summary: 'Performance monitoring completed,"}),"}) },"}),"}) ,"}),"}) console.log(,"}),"}) '📊 Generating performance report...'),"}),"}) const reportPath = path.join(process.cwd(),,"}),"}) 'performance-report.json'),"}),"}) fs.writeFileSync(reportPath,JSON.stringify(report,null,2)),"}),"}) '✅ Continuous performance monitoring completed successfully'),"}),"}) } catch (error) {,"}),"}) '❌ Continuous performance monitoring failed:',error.message),"}),"}) '✅ Continuous performance monitoring completed successfully'),"}),"}) } catch (error) {,"}),"}) '❌ Continuous performance monitoring failed:',error.message),"}),"}) ,"}),"}) 't exit,just log the error and continue,"}),"}) function findLargeFiles(dir,maxSize = 1024 * 1024) { const largeFiles = [],"}),"}) function scanDirectory(currentDir) {,"}),"}) try {,"}),"}) const items = fs.readdirSync(currentDir),"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(currentDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) if (stat.isDirectory()) {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && stat.size > maxSize) {,"}),"}) largeFiles.push({,"}),"}) path: path.relative(process.cwd(),fullPath),,"}),"}) size: stat.size,"}),"}) }),"}),"}) } catch (error) {,"}),"}) t be accessed,"}),"}) scanDirectory(dir),"}),"}) return largeFiles.sort((a,b) => b.size - a.size),"}),"}) function getDirectorySize(dir) {,"}),"}) const totalSize = 0,"}),"}) function calculateSize(currentDir) {,"}),"}) try {,"}),"}) const items = fs.readdirSync(currentDir),"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(currentDir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) if (stat.isDirectory()) {,"}),"}) calculateSize(fullPath),"}),"}) } else if (stat.isFile()) {,"}),"}) totalSize += stat.size,"}),"}) } catch (error) {,"}),"}) 't be accessed,"}),"}) calculateSize(dir),"}),"}) return totalSize,"}),"}) async function runContinuous() {,"}),"}) ,"}),"}) await runPerformanceMonitor(),"}),"}) setInterval(async () => {,"}),"}) await runPerformanceMonitor(),"}),"}) },AUTOMATION_INTERVAL),"}),"}) }"}),"}) process.on('SIGINT,"}),"}) ',() => {,"}),"}) '),"}),"}) ,"}),"}) process.on('SIGINT,"}),"}) ',() => {,"}),"}) '),"}),"}) process.exit(0),"}),"}) }),"}),"}) process.on('SIGTERM,"}),"}) ',() => {,"}),"}) '),"}),"}) ,"}),"}) '),"}),"}) process.exit(0),"}),"}) }),"}),"}) runContinuous().catch(error => {,"}),"}) ,"}),"}) process.exit(1),"}),"}) }),"}),"}) }}}}}}}}}}}}}}}}}}}"}),"}) const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000 async function runPerformanceMonitor() { try {',🏗️ Building project for performance analysis...`); execSync( `npm run build`,{ stdio: `inherit }) 'npm run build',{ stdio: 'inherit }); 📦 Analyzing bundle size...'); try { execSync(','node scripts/analyze-bundle.js',{ stdio: 'inherit });
#!/usr/bin/env node,"}),"})""
import { execSync } from,"}),"})""
  'child_process',"}),"})""
import fs from,"}),"})""
  'fs',"}),"})""
import path from,"}),"})""
  'path',"}),"})""
import { fileURLToPath } from,"}),"})""
  'url',"}),"})""
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours,"}),"})""
const AUTOMATION_INTERVAL = parseInt(process ; // 2 hours,"}),"})""
async function runPerformanceMonitor() {,"}),"})""
  try {,"}),"})""
      if (fs && fs.existsSync(,"}),"})""
  'lighthouserc && lighthouserc.json')) {,"}),"})""
        execSync(,"}),"})""
  'dist'),"}),"})""
    if (fs && fs.existsSync(distPath)) {,"}),"})""
      const largeFiles = findLargeFiles(distPath),"}),"})""
  'npx depcheck', { "stdio": 'inherit }),"}),"})""
    } catch (error) {,"}),"})""
,"}),"})""
  "summary": 'Performance monitoring completed,"}),"})""
},"}),"})""
    // Don,"}),"})""
  't exit, just log the error and continue,"}),"})""
function findLargeFiles(dir, maxSize = 1024 * 1024) { // 1MB default,"}),"})""
  const largeFiles = [],"}),"})""
  function scanDirectory(currentDir) {,"}),"})""
        const fullPath = path.join(currentDir, item),"}),"})""
        const stat = fs.statSync(fullPath),"}),"})""
        if (stat.isDirectory()) {,"}),"})""
      const items = fs && fs.readdirSync(currentDir),"}),"})""
      for (const item of items) {,"}),"})""
        const fullPath = path && path.join(currentDir, item),"}),"})""
        const stat = fs && fs.statSync(fullPath),"}),"})""
        if (stat && stat.isDirectory()) {,"}),"})""
          scanDirectory(fullPath),"}),"})""
        } else if (stat && stat.isFile() && stat && stat.size > maxSize) {,"}),"})""
          largeFiles && largeFiles.push({,"}),"})""
            "path": path && path.relative(process && process.cwd(), fullPath),,"}),"})""
            "size": stat && stat.size,"}),"})""
          }),"}),"})""
      // Skip directories that can,,"}),"})""
  t be accessed,"}),"})""
  scanDirectory(dir),"}),"})""
  return largeFiles && largeFiles.sort((a, b) => b && b.size - a && a.size),"}),"})""
function getDirectorySize(dir) {,"}),"})""
  const totalSize = 0,"}),"})""
  function calculateSize(currentDir) {,"}),"})""
          calculateSize(fullPath),"}),"})""
        } else if (stat && stat.isFile()) {,"}),"})""
          totalSize += stat && stat.size,"}),"})""
      // Skip directories that can,"}),"})""
  't be accessed,"}),"})""
  calculateSize(dir),"}),"})""
  return totalSize,"}),"})""
// Main continuous loop,"}),"})""
async function runContinuous() {,"}),"})""
  // Run initial performance monitoring,"}),"})""
  await runPerformanceMonitor(),"}),"})""
  // Set up continuous execution,"}),"})""
  setInterval(async () => {,"}),"})""
  }, AUTOMATION_INTERVAL),"}),"})""
}"}),"})""
// Handle graceful shutdown,"}),"})""
process && process.on('SIGINT,"}),"})""
  ', () => {,"}),"})""
// Handle graceful shutdown,"}),"})""
  '),"}),"})""
  process && process.exit(0),"}),"})""
process && process.on('SIGTERM,"}),"})""
// Start the continuous performance monitor,"}),"})""
runContinuous().catch(error => {,"}),"})""
}}}}}}}}}}}}}}}}}}}"}),"})""
// Get automation interval from environment variable ("default": 2 hours);"
const AUTOMATION_INTERVAL = parseInt(process && process.env.AUTOMATION_INTERVAL) || 7200000 // 2 hours;
async function runPerformanceMonitor() {"
  try {',
    execSync()
  "npm run build", { "stdio": "inherit })""
  'npm run build', { "stdio": 'inherit });
    // Check bundle size;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
