#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting enhanced console error fixer automation...');

// Get automation interval from environment variable (default: 10 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 600000; // 10 minutes

async function runEnhancedConsoleErrorFixer() {
  try {
    console.log(`🔧 Running enhanced console error fixer at ${new Date().toISOString()}`);
    
    const errorAnalysis = {
      timestamp: new Date().toISOString(),
      consoleErrors: [],
      buildErrors: [],
      lintErrors: [],
      typeErrors: [],
      warnings: [],
      fixes: [],
      recommendations: [],
      priority: 'medium'
    };

    // 1. Advanced Console Statement Detection
    console.log('🔍 Detecting console statements and errors...');
    errorAnalysis.consoleErrors = await detectConsoleStatements();
    
    // 2. Build Error Analysis
    console.log('🏗️ Analyzing build errors...');
    errorAnalysis.buildErrors = await analyzeBuildErrors();
    
    // 3. Linting Error Analysis
    console.log('🔍 Analyzing linting errors...');
    errorAnalysis.lintErrors = await analyzeLintingErrors();
    
    // 4. TypeScript Error Analysis
    console.log('📝 Analyzing TypeScript errors...');
    errorAnalysis.typeErrors = await analyzeTypeScriptErrors();
    
    // 5. Warning Detection
    console.log('⚠️ Detecting warnings...');
    errorAnalysis.warnings = await detectWarnings();
    
    // 6. Generate Intelligent Fixes
    console.log('💡 Generating intelligent fixes...');
    errorAnalysis.fixes = await generateIntelligentFixes(errorAnalysis);
    
    // 7. Generate Recommendations
    console.log('📋 Generating recommendations...');
    errorAnalysis.recommendations = generateErrorRecommendations(errorAnalysis);
    
    // 8. Prioritize Issues
    errorAnalysis.priority = prioritizeErrorIssues(errorAnalysis);
    
    // 9. Generate Comprehensive Report
    console.log('📊 Generating comprehensive error report...');
    const reportPath = path.join(process.cwd(), 'enhanced-console-error-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorAnalysis, null, 2));
    
    // 10. Create Action Items
    await createErrorActionItems(errorAnalysis);
    
    // 11. Execute Automatic Fixes if configured
    if (process.env.AUTO_FIX_ERRORS === 'true') {
      await executeAutomaticFixes(errorAnalysis);
    }
    
    console.log(`✅ Enhanced console error fixer completed. Report saved to ${reportPath}`);
    console.log(`🎯 Priority: ${errorAnalysis.priority.toUpperCase()}`);
    console.log(`🔧 Fixes: ${errorAnalysis.fixes.length}`);
    
  } catch (error) {
    console.error('❌ Enhanced console error fixer failed:', error.message);
  }
}

async function detectConsoleStatements() {
  const consoleErrors = [];
  
  try {
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const files = getAllFiles(srcPath, ['.js', '.jsx', '.ts', '.tsx']);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          if (line.includes('console.')) {
            const match = line.match(/console\.(\w+)/);
            if (match) {
              const method = match[1];
              const severity = getConsoleMethodSeverity(method);
              const context = extractContext(content, index);
              
              consoleErrors.push({
                file: path.relative(process.cwd(), file),
                line: index + 1,
                method: method,
                severity: severity,
                context: context,
                fullLine: line.trim(),
                category: categorizeConsoleUsage(method, line),
                suggestion: getConsoleReplacementSuggestion(method, context)
              });
            }
          }
        });
      });
    }
    
    // Also check build output
    const distPath = path.join(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      const buildConsoleErrors = await detectBuildConsoleStatements(distPath);
      consoleErrors.push(...buildConsoleErrors);
    }
    
  } catch (error) {
    console.log('⚠️  Console statement detection failed:', error.message);
  }
  
  return consoleErrors;
}

async function analyzeBuildErrors() {
  const buildErrors = [];
  
  try {
    console.log('🏗️ Building project to detect errors...');
    
    try {
      execSync('npm run build', { stdio: 'pipe' });
      console.log('✅ Build completed successfully - no errors found');
    } catch (buildError) {
      console.log('⚠️  Build failed, analyzing errors...');
      
      const errorOutput = buildError.message || buildError.stdout?.toString() || '';
      const lines = errorOutput.split('\n');
      
      lines.forEach(line => {
        if (line.includes('error') || line.includes('Error')) {
          const errorMatch = line.match(/(.+):(\d+):(\d+):\s*(.+)/);
          if (errorMatch) {
            buildErrors.push({
              file: errorMatch[1],
              line: parseInt(errorMatch[2]),
              column: parseInt(errorMatch[3]),
              message: errorMatch[4],
              type: 'build',
              severity: 'high'
            });
          } else {
            // Handle other error formats
            buildErrors.push({
              file: 'unknown',
              line: 0,
              column: 0,
              message: line.trim(),
              type: 'build',
              severity: 'medium'
            });
          }
        }
      });
    }
    
  } catch (error) {
    console.log('⚠️  Build error analysis failed:', error.message);
  }
  
  return buildErrors;
}

async function analyzeLintingErrors() {
  const lintErrors = [];
  
  try {
    console.log('🔍 Running ESLint for error detection...');
    
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('✅ ESLint passed - no linting errors found');
    } catch (lintError) {
      console.log('⚠️  ESLint found issues...');
      
      const lintOutput = lintError.message || lintError.stdout?.toString() || '';
      const lines = lintOutput.split('\n');
      
      lines.forEach(line => {
        if (line.includes('error') || line.includes('warning')) {
          const lintMatch = line.match(/(.+):(\d+):(\d+):\s*(.+)/);
          if (lintMatch) {
            lintErrors.push({
              file: lintMatch[1],
              line: parseInt(lintMatch[2]),
              column: parseInt(lintMatch[3]),
              message: lintMatch[4],
              type: 'lint',
              severity: line.includes('error') ? 'high' : 'medium'
            });
          }
        }
      });
    }
    
  } catch (error) {
    console.log('⚠️  Linting error analysis failed:', error.message);
  }
  
  return lintErrors;
}

async function analyzeTypeScriptErrors() {
  const typeErrors = [];
  
  try {
    console.log('📝 Running TypeScript type checking...');
    
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ TypeScript type checking passed');
    } catch (typeError) {
      console.log('⚠️  TypeScript type checking found issues...');
      
      const typeOutput = typeError.message || typeError.stdout?.toString() || '';
      const lines = typeOutput.split('\n');
      
      lines.forEach(line => {
        if (line.includes('error') || line.includes('Error')) {
          const typeMatch = line.match(/(.+):(\d+):(\d+):\s*(.+)/);
          if (typeMatch) {
            typeErrors.push({
              file: typeMatch[1],
              line: parseInt(typeMatch[2]),
              column: parseInt(typeMatch[3]),
              message: typeMatch[4],
              type: 'typescript',
              severity: 'high'
            });
          }
        }
      });
    }
    
  } catch (error) {
    console.log('⚠️  TypeScript error analysis failed:', error.message);
  }
  
  return typeErrors;
}

async function detectWarnings() {
  const warnings = [];
  
  try {
    // Check for common warning patterns in source code
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const files = getAllFiles(srcPath, ['.js', '.jsx', '.ts', '.tsx']);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Check for common warning patterns
          const warningPatterns = [
            { pattern: /TODO|FIXME|HACK|XXX/, severity: 'low', category: 'code-quality' },
            { pattern: /console\.warn/, severity: 'medium', category: 'console' },
            { pattern: /debugger/, severity: 'medium', category: 'debugging' },
            { pattern: /alert\(|confirm\(|prompt\(/, severity: 'medium', category: 'user-interaction' },
            { pattern: /eval\(/, severity: 'high', category: 'security' },
            { pattern: /innerHTML/, severity: 'medium', category: 'security' }
          ];
          
          warningPatterns.forEach(warning => {
            if (warning.pattern.test(line)) {
              warnings.push({
                file: path.relative(process.cwd(), file),
                line: index + 1,
                pattern: warning.pattern.source,
                severity: warning.severity,
                category: warning.category,
                fullLine: line.trim(),
                suggestion: getWarningSuggestion(warning.category, line)
              });
            }
          });
        });
      });
    }
    
  } catch (error) {
    console.log('⚠️  Warning detection failed:', error.message);
  }
  
  return warnings;
}

async function generateIntelligentFixes(errorAnalysis) {
  const fixes = [];
  
  try {
    // Generate fixes for console statements
    errorAnalysis.consoleErrors.forEach(error => {
      if (error.severity === 'high' || error.severity === 'medium') {
        fixes.push({
          type: 'console-replacement',
          file: error.file,
          line: error.line,
          description: `Replace console.${error.method} with proper logging`,
          suggestion: error.suggestion,
          priority: error.severity === 'high' ? 'high' : 'medium',
          automated: true
        });
      }
    });
    
    // Generate fixes for build errors
    errorAnalysis.buildErrors.forEach(error => {
      fixes.push({
        type: 'build-fix',
        file: error.file,
        line: error.line,
        description: `Fix build error: ${error.message}`,
        suggestion: 'Review and fix the build error',
        priority: 'high',
        automated: false
      });
    });
    
    // Generate fixes for linting errors
    errorAnalysis.lintErrors.forEach(error => {
      fixes.push({
        type: 'lint-fix',
        file: error.file,
        line: error.line,
        description: `Fix linting error: ${error.message}`,
        suggestion: 'Run ESLint with --fix or manually fix the issue',
        priority: error.severity === 'high' ? 'high' : 'medium',
        automated: error.severity === 'medium' // Medium severity issues can often be auto-fixed
      });
    });
    
    // Generate fixes for TypeScript errors
    errorAnalysis.typeErrors.forEach(error => {
      fixes.push({
        type: 'typescript-fix',
        file: error.file,
        line: error.line,
        description: `Fix TypeScript error: ${error.message}`,
        suggestion: 'Add proper type annotations or fix type mismatches',
        priority: 'high',
        automated: false
      });
    });
    
    // Generate fixes for warnings
    errorAnalysis.warnings.forEach(warning => {
      if (warning.severity === 'high') {
        fixes.push({
          type: 'warning-fix',
          file: warning.file,
          line: warning.line,
          description: `Fix high priority warning: ${warning.pattern}`,
          suggestion: warning.suggestion,
          priority: 'high',
          automated: false
        });
      }
    });
    
  } catch (error) {
    console.log('⚠️  Fix generation failed:', error.message);
  }
  
  return fixes;
}

function generateErrorRecommendations(errorAnalysis) {
  const recommendations = [];
  
  // Console statement recommendations
  if (errorAnalysis.consoleErrors.length > 0) {
    const highSeverityConsole = errorAnalysis.consoleErrors.filter(e => e.severity === 'high');
    const mediumSeverityConsole = errorAnalysis.consoleErrors.filter(e => e.severity === 'medium');
    
    if (highSeverityConsole.length > 0) {
      recommendations.push({
        priority: 'high',
        category: 'Console Usage',
        title: 'Remove High Priority Console Statements',
        description: `Found ${highSeverityConsole.length} high priority console statements`,
        action: 'Replace console.error and console.warn with proper error handling',
        impact: 'High'
      });
    }
    
    if (mediumSeverityConsole.length > 0) {
      recommendations.push({
        priority: 'medium',
        category: 'Console Usage',
        title: 'Clean Up Console Statements',
        description: `Found ${mediumSeverityConsole.length} medium priority console statements`,
        action: 'Replace console.log with proper logging or remove if not needed',
        impact: 'Medium'
      });
    }
  }
  
  // Build error recommendations
  if (errorAnalysis.buildErrors.length > 0) {
    recommendations.push({
      priority: 'critical',
      category: 'Build',
      title: 'Fix Build Errors',
      description: `Found ${errorAnalysis.buildErrors.length} build errors`,
      action: 'Address all build errors to ensure successful deployment',
      impact: 'Critical'
    });
  }
  
  // Linting error recommendations
  if (errorAnalysis.lintErrors.length > 0) {
    const highSeverityLint = errorAnalysis.lintErrors.filter(e => e.severity === 'high');
    
    if (highSeverityLint.length > 0) {
      recommendations.push({
        priority: 'high',
        category: 'Code Quality',
        title: 'Fix High Priority Linting Errors',
        description: `Found ${highSeverityLint.length} high priority linting errors`,
        action: 'Fix all high priority linting errors immediately',
        impact: 'High'
      });
    }
  }
  
  // TypeScript error recommendations
  if (errorAnalysis.typeErrors.length > 0) {
    recommendations.push({
      priority: 'high',
      category: 'Type Safety',
      title: 'Fix TypeScript Errors',
      description: `Found ${errorAnalysis.typeErrors.length} TypeScript errors`,
      action: 'Add proper type annotations and fix type mismatches',
      impact: 'High'
    });
  }
  
  return recommendations;
}

function prioritizeErrorIssues(errorAnalysis) {
  if (errorAnalysis.buildErrors.length > 0) {
    return 'critical';
  } else if (errorAnalysis.typeErrors.length > 0) {
    return 'high';
  } else if (errorAnalysis.consoleErrors.some(e => e.severity === 'high')) {
    return 'high';
  } else if (errorAnalysis.lintErrors.some(e => e.severity === 'high')) {
    return 'medium';
  } else {
    return 'low';
  }
}

async function createErrorActionItems(errorAnalysis) {
  try {
    const actionItemsPath = path.join(process.cwd(), 'error-action-items.md');
    let content = `# Enhanced Console Error Fixer Action Items\n\n`;
    content += `Generated: ${errorAnalysis.timestamp}\n`;
    content += `Priority: ${errorAnalysis.priority.toUpperCase()}\n\n`;
    
    if (errorAnalysis.fixes.length > 0) {
      content += `## Recommended Fixes\n\n`;
      errorAnalysis.fixes.forEach((fix, index) => {
        content += `### ${index + 1}. ${fix.description}\n`;
        content += `- **File**: ${fix.file}:${fix.line}\n`;
        content += `- **Type**: ${fix.type}\n`;
        content += `- **Priority**: ${fix.priority.toUpperCase()}\n`;
        content += `- **Automated**: ${fix.automated ? 'Yes' : 'No'}\n`;
        content += `- **Suggestion**: ${fix.suggestion}\n\n`;
      });
    }
    
    if (errorAnalysis.recommendations.length > 0) {
      content += `## Recommendations\n\n`;
      errorAnalysis.recommendations.forEach((rec, index) => {
        content += `### ${index + 1}. ${rec.title}\n`;
        content += `- **Priority**: ${rec.priority.toUpperCase()}\n`;
        content += `- **Category**: ${rec.category}\n`;
        content += `- **Impact**: ${rec.impact}\n`;
        content += `- **Description**: ${rec.description}\n`;
        content += `- **Action**: ${rec.action}\n\n`;
      });
    }
    
    fs.writeFileSync(actionItemsPath, content);
    console.log(`📋 Error action items created: ${actionItemsPath}`);
    
  } catch (error) {
    console.log('⚠️  Failed to create error action items:', error.message);
  }
}

async function executeAutomaticFixes(errorAnalysis) {
  try {
    console.log('🔧 Executing automatic fixes...');
    
    const automatedFixes = errorAnalysis.fixes.filter(fix => fix.automated);
    
    for (const fix of automatedFixes) {
      try {
        console.log(`🔧 Executing: ${fix.description}`);
        
        if (fix.type === 'console-replacement') {
          await fixConsoleStatement(fix);
        } else if (fix.type === 'lint-fix') {
          await fixLintingError(fix);
        }
        
        console.log(`✅ Successfully executed: ${fix.description}`);
      } catch (error) {
        console.log(`⚠️  Failed to execute: ${fix.description}`, error.message);
      }
    }
    
  } catch (error) {
    console.log('⚠️  Automatic fixes execution failed:', error.message);
  }
}

async function fixConsoleStatement(fix) {
  try {
    const filePath = path.join(process.cwd(), fix.file);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Replace console statement with proper logging
    const lineIndex = fix.line - 1;
    const oldLine = lines[lineIndex];
    
    if (fix.suggestion) {
      lines[lineIndex] = fix.suggestion;
      fs.writeFileSync(filePath, lines.join('\n'));
      console.log(`🔧 Fixed console statement in ${fix.file}:${fix.line}`);
    }
    
  } catch (error) {
    console.log(`⚠️  Failed to fix console statement: ${error.message}`);
  }
}

async function fixLintingError(fix) {
  try {
    // Try to auto-fix linting errors
    execSync(`npx eslint ${fix.file} --fix`, { stdio: 'pipe' });
    console.log(`🔧 Applied ESLint auto-fix to ${fix.file}`);
    
  } catch (error) {
    console.log(`⚠️  Failed to auto-fix linting error: ${error.message}`);
  }
}

// Helper functions
function getConsoleMethodSeverity(method) {
  const severityMap = {
    'error': 'high',
    'warn': 'high',
    'log': 'medium',
    'info': 'medium',
    'debug': 'low',
    'trace': 'low'
  };
  
  return severityMap[method] || 'medium';
}

function categorizeConsoleUsage(method, line) {
  if (line.includes('TODO') || line.includes('FIXME')) {
    return 'development';
  } else if (method === 'error' || method === 'warn') {
    return 'error-handling';
  } else if (method === 'log' || method === 'info') {
    return 'logging';
  } else {
    return 'debugging';
  }
}

function getConsoleReplacementSuggestion(method, context) {
  if (method === 'error' || method === 'warn') {
    return '// TODO: Replace with proper error handling or logging service';
  } else if (method === 'log' || method === 'info') {
    return '// TODO: Replace with proper logging service or remove if not needed';
  } else {
    return '// TODO: Remove debug statement';
  }
}

function getWarningSuggestion(category, line) {
  const suggestions = {
    'code-quality': 'Address the TODO/FIXME comment or remove if resolved',
    'console': 'Replace console.warn with proper error handling',
    'debugging': 'Remove debugger statement before production',
    'user-interaction': 'Replace with proper UI components',
    'security': 'Review and fix security vulnerability',
    'default': 'Review and address the warning'
  };
  
  return suggestions[category] || suggestions.default;
}

function extractContext(content, lineIndex) {
  const lines = content.split('\n');
  const start = Math.max(0, lineIndex - 2);
  const end = Math.min(lines.length, lineIndex + 3);
  
  return lines.slice(start, end).map((line, index) => ({
    line: start + index + 1,
    content: line,
    isCurrent: start + index === lineIndex
  }));
}

async function detectBuildConsoleStatements(distPath) {
  const buildConsoleErrors = [];
  
  try {
    const files = getAllFiles(distPath, ['.js', '.jsx', '.ts', '.tsx']);
    
    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      lines.forEach((line, index) => {
        if (line.includes('console.')) {
          const match = line.match(/console\.(\w+)/);
          if (match) {
            buildConsoleErrors.push({
              file: path.relative(process.cwd(), file),
              line: index + 1,
              method: match[1],
              severity: 'high',
              context: 'Build output',
              fullLine: line.trim(),
              category: 'build',
              suggestion: 'Remove console statements from build output'
            });
          }
        }
      });
    });
    
  } catch (error) {
    console.log('⚠️  Build console statement detection failed:', error.message);
  }
  
  return buildConsoleErrors;
}

function getAllFiles(dir, extensions) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting enhanced console error fixer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial error fixer
  await runEnhancedConsoleErrorFixer();
  
  // Set up continuous execution
  setInterval(async () => {
    await runEnhancedConsoleErrorFixer();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Enhanced console error fixer running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the enhanced console error fixer
runContinuous().catch(error => {
  console.error('❌ Failed to start enhanced console error fixer:', error);
  process.exit(1);
});