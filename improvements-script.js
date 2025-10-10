#!/usr/bin/env node

/**
 * Comprehensive Improvements Script
 * Applies production-ready optimizations to the codebase
 */


// Configuration
const config = {
  appDir: path.join(__dirname, 'app'),
  improvements: [],
  errors: [],
};

// Helper function to read files recursively
function getAllFiles(_dir, fileList = []) {

  files.forEach(file => {
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
        //         const depth = (filePath.match(/app\//g) || []).length - 1;
        //         const loggerPath = '../'.repeat(depth) + 'utils/logger';

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
      newContent = newContent.replace(/console\.log\(/g, 'logger.info(');
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

  // Check for dangerous patterns
  if (content.includes('dangerouslySetInnerHTML') && !content.includes('DOMPurify')) {
    issues.push(
      `Potential XSS risk in ${path.relative(process.cwd(), filePath)}: dangerouslySetInnerHTML without sanitization`
    );
  }

  // Check for eval
  if (content.match(/\beval\s*\(/)) {
    issues.push(`Security risk in ${path.relative(process.cwd(), filePath)}: eval() usage`);
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

  // Remove duplicate imports (basic check)

  if (importLines.length !== uniqueImports.length) {
    improved = true;
    // Replace duplicate imports
    //     const contentWithoutImports = content.replace(/^import.*$/gm, '');
    newContent = uniqueImports.join('\n') + '\n' + contentWithoutImports;
  }

  return { improved, content: newContent };
}

// Main processing function
function processFile(filePath) {
  try {

    // Apply improvements
    if (loggingResult.improved) {
      newContent = loggingResult.content;
      fileImproved = true;
      config.improvements.push(`Improved logging in: ${path.relative(process.cwd(), filePath)}`);
    }

    if (errorHandlingResult.improved) {
      newContent = errorHandlingResult.content;
      fileImproved = true;
    }

    if (securityIssues.length > 0) {
      config.improvements.push(...securityIssues);
    }

    if (importsResult.improved) {
      newContent = importsResult.content;
      fileImproved = true;
      config.improvements.push(`Optimized imports in: ${path.relative(process.cwd(), filePath)}`);
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
// const files = getAllFiles(config.appDir);

files.forEach(file => {
  if (processFile(file)) {
    filesImproved++;
  }
});

// Generate report
// // // // // // if (config.improvements.length > 0) {
  //   config.improvements.slice(0, 20).forEach((improvement, i) => {
    //     });
  if (config.improvements.length > 20) {
    //     }
  //   }

if (config.errors.length > 0) {
  //   config.errors.forEach((error, i) => {
    //     });
  //   }

// Save detailed report
// const reportPath = path.join(__dirname, 'improvements-report.json');
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

// // process.exit(config.errors.length > 0 ? 1 : 0);

}}