#!/usr/bin/env node

/**
 * Comprehensive Improvements Script
 * Applies production-ready optimizations to the codebase
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  appDir: path.join(__dirname, 'app'),
  improvements: [],
  errors: [],
};

// Helper function to read files recursively
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Skip node_modules and .git directories
      if (!file.startsWith('.') && file !== 'node_modules') {
        getAllFiles(filePath, fileList);
      }
    } else if (
      file.endsWith('.ts') ||
      file.endsWith('.tsx') ||
      file.endsWith('.js') ||
      file.endsWith('.jsx')
    ) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Improvement 1: Replace unwrapped console statements with logger
function improveLogging(content, filePath) {
  let improved = false;
  let newContent = content;
  
  // Only replace console statements not in logger/test files and not wrapped in dev checks
  if (
    !filePath.includes('logger') &&
    !filePath.includes('test') &&
    !filePath.includes('setupTests')
  ) {
    // Find console statements not wrapped in development checks
    const unwrappedConsoleRegex =
      /(?<!if\s*\(.*?NODE_ENV.*?\)\s*{?\s*)(?<!if\s*\(.*?DEV.*?\)\s*{?\s*)console\.(log|warn|info|debug)\(/g;
    
    if (unwrappedConsoleRegex.test(content)) {
      // Add import for logger if not exists
      if (
        !content.includes("from '../utils/logger'") &&
        !content.includes('from "./utils/logger"')
      ) {
        // Determine correct path to logger
        const depth = (filePath.match(/app\//g) || []).length - 1;
        const loggerPath = '../'.repeat(depth) + 'utils/logger';
        
        if (content.includes('import')) {
          newContent = content.replace(
            /(import.*?from.*?;)/,
            `$1\nimport { logger } from '${loggerPath}';`
          );
        } else {
          newContent = `import { logger } from '${loggerPath}';\n\n${content}`;
        }
      }
      
      // Replace console statements
      newContent = newContent.replace(
        /console\.log\(/g,
        'logger.info('
      );
      newContent = newContent.replace(/console\.warn\(/g, 'logger.warn(');
      newContent = newContent.replace(/console\.info\(/g, 'logger.info(');
      newContent = newContent.replace(/console\.debug\(/g, 'logger.debug(');
      
      improved = true;
    }
  }
  
  return { improved, content: newContent };
}

// Improvement 2: Add error boundaries to components that don't have them
function addErrorHandling(content, filePath) {
  let improved = false;
  let newContent = content;
  
  // Check if it's a page component without error boundary
  if (
    filePath.includes('/page.tsx') &&
    !content.includes('ErrorBoundary') &&
    content.includes('export default')
  ) {
    // This is a basic check - in production you'd want more sophisticated parsing
    improved = true;
    config.improvements.push(
      `Consider adding ErrorBoundary to: ${path.relative(process.cwd(), filePath)}`
    );
  }
  
  return { improved, content: newContent };
}

// Improvement 3: Check for security best practices
function checkSecurity(content, filePath) {
  const issues = [];
  
  // Check for dangerous patterns
  if (content.includes('dangerouslySetInnerHTML') && !content.includes('DOMPurify')) {
    issues.push(
      `Potential XSS risk in ${path.relative(process.cwd(), filePath)}: dangerouslySetInnerHTML without sanitization`
    );
  }
  
  // Check for eval
  if (content.match(/\beval\s*\(/)) {
    issues.push(
      `Security risk in ${path.relative(process.cwd(), filePath)}: eval() usage`
    );
  }
  
  // Check for localStorage without encryption
  if (content.includes('localStorage.setItem') && content.includes('password')) {
    issues.push(
      `Security risk in ${path.relative(process.cwd(), filePath)}: Storing sensitive data in localStorage`
    );
  }
  
  return issues;
}

// Improvement 4: Optimize imports
function optimizeImports(content) {
  let improved = false;
  let newContent = content;
  
  // Remove duplicate imports (basic check)
  const importLines = content.match(/^import.*$/gm) || [];
  const uniqueImports = [...new Set(importLines)];
  
  if (importLines.length !== uniqueImports.length) {
    improved = true;
    // Replace duplicate imports
    const contentWithoutImports = content.replace(/^import.*$/gm, '');
    newContent = uniqueImports.join('\n') + '\n' + contentWithoutImports;
  }
  
  return { improved, content: newContent };
}

// Main processing function
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    let fileImproved = false;
    
    // Apply improvements
    const loggingResult = improveLogging(newContent, filePath);
    if (loggingResult.improved) {
      newContent = loggingResult.content;
      fileImproved = true;
      config.improvements.push(
        `Improved logging in: ${path.relative(process.cwd(), filePath)}`
      );
    }
    
    const errorHandlingResult = addErrorHandling(newContent, filePath);
    if (errorHandlingResult.improved) {
      newContent = errorHandlingResult.content;
      fileImproved = true;
    }
    
    const securityIssues = checkSecurity(newContent, filePath);
    if (securityIssues.length > 0) {
      config.improvements.push(...securityIssues);
    }
    
    const importsResult = optimizeImports(newContent);
    if (importsResult.improved) {
      newContent = importsResult.content;
      fileImproved = true;
      config.improvements.push(
        `Optimized imports in: ${path.relative(process.cwd(), filePath)}`
      );
    }
    
    // Write file if improved
    if (fileImproved && newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    config.errors.push(`Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

// Run improvements
// console.log('🚀 Starting comprehensive improvements...\n');

const files = getAllFiles(config.appDir);
let filesImproved = 0;

files.forEach((file) => {
  if (processFile(file)) {
    filesImproved++;
  }
});

// Generate report
// console.log('\n✅ Improvements Complete!\n');
// console.log(`📊 Summary:`);
// console.log(`  - Files processed: ${files.length}`);
// console.log(`  - Files improved: ${filesImproved}`);
// console.log(`  - Total improvements: ${config.improvements.length}`);
// console.log(`  - Errors: ${config.errors.length}\n`);

if (config.improvements.length > 0) {
  // console.log('📝 Improvements applied:');
  config.improvements.slice(0, 20).forEach((improvement, i) => {
    // console.log(`  ${i + 1}. ${improvement}`);
  });
  if (config.improvements.length > 20) {
    // console.log(`  ... and ${config.improvements.length - 20} more`);
  }
  // console.log('');
}

if (config.errors.length > 0) {
  // console.log('⚠️  Errors encountered:');
  config.errors.forEach((error, i) => {
    // console.log(`  ${i + 1}. ${error}`);
  });
  // console.log('');
}

// Save detailed report
const reportPath = path.join(__dirname, 'improvements-report.json');
fs.writeFileSync(
  reportPath,
  JSON.stringify(
    {
      timestamp: new Date().toISOString(),
      summary: {
        filesProcessed: files.length,
        filesImproved,
        totalImprovements: config.improvements.length,
        errors: config.errors.length,
      },
      improvements: config.improvements,
      errors: config.errors,
    },
    null,
    2
  )
);

// console.log(`📄 Detailed report saved to: improvements-report.json\n`);
// console.log('✨ All done!\n');

process.exit(config.errors.length > 0 ? 1 : 0);
