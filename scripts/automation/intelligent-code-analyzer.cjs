#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧠 Starting intelligent code analyzer automation...');

// Get automation interval from environment variable (default: 1 hour)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 3600000; // 1 hour

async function runIntelligentCodeAnalysis() {
  try {
    console.log(`🧠 Running intelligent code analysis at ${new Date().toISOString()}`);
    
    const analysisResults = {
      timestamp: new Date().toISOString(),
      codeQuality: {},
      performance: {},
      security: {},
      maintainability: {},
      recommendations: [],
      priority: 'medium'
    };

    // 1. Advanced Code Quality Analysis
    console.log('🔍 Analyzing code quality patterns...');
    analysisResults.codeQuality = await analyzeCodeQuality();
    
    // 2. Performance Pattern Detection
    console.log('⚡ Detecting performance patterns...');
    analysisResults.performance = await analyzePerformancePatterns();
    
    // 3. Security Vulnerability Detection
    console.log('🔒 Scanning for security vulnerabilities...');
    analysisResults.security = await analyzeSecurityPatterns();
    
    // 4. Maintainability Assessment
    console.log('🏗️ Assessing code maintainability...');
    analysisResults.maintainability = await analyzeMaintainability();
    
    // 5. Generate Intelligent Recommendations
    console.log('💡 Generating intelligent recommendations...');
    analysisResults.recommendations = generateRecommendations(analysisResults);
    
    // 6. Prioritize Issues
    analysisResults.priority = prioritizeIssues(analysisResults);
    
    // 7. Generate Comprehensive Report
    console.log('📊 Generating comprehensive analysis report...');
    const reportPath = path.join(process.cwd(), 'intelligent-code-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(analysisResults, null, 2));
    
    // 8. Create Action Items
    await createActionItems(analysisResults);
    
    console.log(`✅ Intelligent code analysis completed. Report saved to ${reportPath}`);
    console.log(`🎯 Priority: ${analysisResults.priority.toUpperCase()}`);
    console.log(`📋 Recommendations: ${analysisResults.recommendations.length}`);
    
  } catch (error) {
    console.error('❌ Intelligent code analysis failed:', error.message);
  }
}

async function analyzeCodeQuality() {
  const quality = {
    complexity: {},
    duplication: {},
    standards: {},
    patterns: {},
    score: 0
  };

  try {
    // Analyze cyclomatic complexity
    quality.complexity = await analyzeComplexity();
    
    // Detect code duplication
    quality.duplication = await detectDuplication();
    
    // Check coding standards compliance
    quality.standards = await checkCodingStandards();
    
    // Identify anti-patterns
    quality.patterns = await identifyAntiPatterns();
    
    // Calculate quality score
    quality.score = calculateQualityScore(quality);
    
  } catch (error) {
    console.log('⚠️  Code quality analysis partially failed:', error.message);
  }

  return quality;
}

async function analyzeComplexity() {
  const complexity = {
    highComplexityFiles: [],
    averageComplexity: 0,
    totalComplexity: 0
  };

  try {
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const files = getAllFiles(srcPath, ['.js', '.jsx', '.ts', '.tsx']);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const fileComplexity = calculateFileComplexity(content);
        
        if (fileComplexity > 10) {
          complexity.highComplexityFiles.push({
            file: path.relative(process.cwd(), file),
            complexity: fileComplexity
          });
        }
        
        complexity.totalComplexity += fileComplexity;
      });
      
      complexity.averageComplexity = complexity.totalComplexity / files.length;
    }
  } catch (error) {
    console.log('⚠️  Complexity analysis failed:', error.message);
  }

  return complexity;
}

function calculateFileComplexity(content) {
  let complexity = 1; // Base complexity
  
  // Count conditional statements
  const conditionals = (content.match(/if\s*\(|else\s*if|switch\s*\(|case\s+|while\s*\(|for\s*\(|catch\s*\(/g) || []).length;
  
  // Count logical operators
  const logicals = (content.match(/&&|\|\||!/g) || []).length;
  
  // Count ternary operators
  const ternaries = (content.match(/\?|:/g) || []).length / 2;
  
  complexity += conditionals + logicals + ternaries;
  
  return complexity;
}

async function detectDuplication() {
  const duplication = {
    duplicatedBlocks: [],
    totalDuplication: 0
  };

  try {
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const files = getAllFiles(srcPath, ['.js', '.jsx', '.ts', '.tsx']);
      
      // Simple duplication detection (can be enhanced with more sophisticated algorithms)
      const codeBlocks = new Map();
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        // Look for repeated code blocks (5+ lines)
        for (let i = 0; i < lines.length - 4; i++) {
          const block = lines.slice(i, i + 5).join('\n');
          const hash = require('crypto').createHash('md5').update(block).digest('hex');
          
          if (codeBlocks.has(hash)) {
            duplication.duplicatedBlocks.push({
              original: codeBlocks.get(hash),
              duplicate: {
                file: path.relative(process.cwd(), file),
                lines: [i + 1, i + 5]
              },
              block: block.substring(0, 100) + '...'
            });
            duplication.totalDuplication++;
          } else {
            codeBlocks.set(hash, {
              file: path.relative(process.cwd(), file),
              lines: [i + 1, i + 5]
            });
          }
        }
      });
    }
  } catch (error) {
    console.log('⚠️  Duplication detection failed:', error.message);
  }

  return duplication;
}

async function checkCodingStandards() {
  const standards = {
    violations: [],
    score: 100
  };

  try {
    // Run ESLint
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('✅ ESLint passed - no violations found');
    } catch (error) {
      const lintOutput = error.message;
      const violations = parseLintOutput(lintOutput);
      standards.violations = violations;
      standards.score = Math.max(0, 100 - (violations.length * 5));
    }
    
    // Check TypeScript compliance
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ TypeScript type checking passed');
    } catch (error) {
      standards.violations.push({
        type: 'typescript',
        message: 'Type checking failed',
        severity: 'error'
      });
      standards.score -= 20;
    }
    
  } catch (error) {
    console.log('⚠️  Standards check failed:', error.message);
  }

  return standards;
}

function parseLintOutput(output) {
  const violations = [];
  const lines = output.split('\n');
  
  lines.forEach(line => {
    if (line.includes('error') || line.includes('warning')) {
      const match = line.match(/(.+):(\d+):(\d+):\s*(.+)/);
      if (match) {
        violations.push({
          file: match[1],
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4],
          severity: line.includes('error') ? 'error' : 'warning'
        });
      }
    }
  });
  
  return violations;
}

async function identifyAntiPatterns() {
  const antiPatterns = {
    patterns: [],
    count: 0
  };

  try {
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const files = getAllFiles(srcPath, ['.js', '.jsx', '.ts', '.tsx']);
      
      const patterns = [
        { name: 'Magic Numbers', regex: /\b\d{3,}\b/g, severity: 'medium' },
        { name: 'Long Functions', regex: /function\s+\w+\s*\([^)]*\)\s*\{[\s\S]{500,}/g, severity: 'high' },
        { name: 'Deep Nesting', regex: /\{\s*\{\s*\{\s*\{/g, severity: 'high' },
        { name: 'Hardcoded Strings', regex: /"[^"]{20,}"/g, severity: 'low' },
        { name: 'Console Statements', regex: /console\.(log|error|warn|info)/g, severity: 'medium' },
        { name: 'TODO Comments', regex: /\/\/\s*TODO|\/\*\s*TODO/g, severity: 'low' },
        { name: 'Commented Code', regex: /\/\/\s*[a-zA-Z]|\/\*\s*[a-zA-Z]/g, severity: 'low' }
      ];
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        patterns.forEach(pattern => {
          const matches = content.match(pattern.regex);
          if (matches) {
            antiPatterns.patterns.push({
              file: path.relative(process.cwd(), file),
              pattern: pattern.name,
              count: matches.length,
              severity: pattern.severity
            });
            antiPatterns.count += matches.length;
          }
        });
      });
    }
  } catch (error) {
    console.log('⚠️  Anti-pattern detection failed:', error.message);
  }

  return antiPatterns;
}

async function analyzePerformancePatterns() {
  const performance = {
    bottlenecks: [],
    optimizations: [],
    score: 0
  };

  try {
    // Check for performance anti-patterns
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const files = getAllFiles(srcPath, ['.js', '.jsx', '.ts', '.tsx']);
      
      const performancePatterns = [
        { name: 'Unnecessary Re-renders', regex: /useEffect\s*\(\s*\(\)\s*=>\s*\{/g, severity: 'high' },
        { name: 'Large Bundle Imports', regex: /import\s+\*\s+as\s+\w+\s+from/g, severity: 'medium' },
        { name: 'Inline Functions', regex: /onClick\s*=\s*\{\(\)\s*=>/g, severity: 'medium' },
        { name: 'Missing Memoization', regex: /useMemo|useCallback/g, severity: 'low' },
        { name: 'Expensive Operations', regex: /\.map\s*\(\s*\(\)\s*=>\s*\{/g, severity: 'medium' }
      ];
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        performancePatterns.forEach(pattern => {
          const matches = content.match(pattern.regex);
          if (matches) {
            performance.bottlenecks.push({
              file: path.relative(process.cwd(), file),
              pattern: pattern.name,
              count: matches.length,
              severity: pattern.severity
            });
          }
        });
      });
    }
    
    // Calculate performance score
    performance.score = calculatePerformanceScore(performance);
    
  } catch (error) {
    console.log('⚠️  Performance analysis failed:', error.message);
  }

  return performance;
}

async function analyzeSecurityPatterns() {
  const security = {
    vulnerabilities: [],
    risks: [],
    score: 100
  };

  try {
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const files = getAllFiles(srcPath, ['.js', '.jsx', '.ts', '.tsx']);
      
      const securityPatterns = [
        { name: 'XSS Risk', regex: /dangerouslySetInnerHTML|innerHTML/g, severity: 'high' },
        { name: 'SQL Injection Risk', regex: /query\s*\(\s*`.*\$\{/g, severity: 'high' },
        { name: 'Hardcoded Secrets', regex: /password|secret|key|token.*=.*['"`][^'"`]{10,}/g, severity: 'critical' },
        { name: 'Unsafe Eval', regex: /eval\s*\(/g, severity: 'critical' },
        { name: 'Insecure HTTP', regex: /http:\/\//g, severity: 'medium' },
        { name: 'Missing Input Validation', regex: /\.value\s*\)/g, severity: 'medium' }
      ];
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        securityPatterns.forEach(pattern => {
          const matches = content.match(pattern.regex);
          if (matches) {
            security.vulnerabilities.push({
              file: path.relative(process.cwd(), file),
              pattern: pattern.name,
              count: matches.length,
              severity: pattern.severity
            });
            
            // Reduce security score based on severity
            if (pattern.severity === 'critical') security.score -= 20;
            else if (pattern.severity === 'high') security.score -= 15;
            else if (pattern.severity === 'medium') security.score -= 10;
            else security.score -= 5;
          }
        });
      });
    }
    
    security.score = Math.max(0, security.score);
    
  } catch (error) {
    console.log('⚠️  Security analysis failed:', error.message);
  }

  return security;
}

async function analyzeMaintainability() {
  const maintainability = {
    metrics: {},
    issues: [],
    score: 0
  };

  try {
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const files = getAllFiles(srcPath, ['.js', '.jsx', '.ts', '.tsx']);
      
      // Calculate maintainability metrics
      maintainability.metrics = {
        totalFiles: files.length,
        totalLines: 0,
        averageFileSize: 0,
        documentationCoverage: 0
      };
      
      let totalLines = 0;
      let documentedFiles = 0;
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        totalLines += lines.length;
        
        // Check for documentation
        if (content.includes('/**') || content.includes('// @') || content.includes('/*')) {
          documentedFiles++;
        }
      });
      
      maintainability.metrics.totalLines = totalLines;
      maintainability.metrics.averageFileSize = totalLines / files.length;
      maintainability.metrics.documentationCoverage = (documentedFiles / files.length) * 100;
      
      // Identify maintainability issues
      if (maintainability.metrics.averageFileSize > 200) {
        maintainability.issues.push({
          type: 'Large Files',
          description: 'Average file size is too large',
          severity: 'medium'
        });
      }
      
      if (maintainability.metrics.documentationCoverage < 50) {
        maintainability.issues.push({
          type: 'Low Documentation',
          description: 'Documentation coverage is below 50%',
          severity: 'medium'
        });
      }
      
      // Calculate maintainability score
      maintainability.score = calculateMaintainabilityScore(maintainability);
    }
    
  } catch (error) {
    console.log('⚠️  Maintainability analysis failed:', error.message);
  }

  return maintainability;
}

function generateRecommendations(analysis) {
  const recommendations = [];
  
  // Code Quality Recommendations
  if (analysis.codeQuality.complexity.highComplexityFiles.length > 0) {
    recommendations.push({
      priority: 'high',
      category: 'Code Quality',
      title: 'Reduce Function Complexity',
      description: `Found ${analysis.codeQuality.complexity.highComplexityFiles.length} files with high cyclomatic complexity`,
      action: 'Refactor complex functions into smaller, more manageable pieces',
      impact: 'High'
    });
  }
  
  if (analysis.codeQuality.duplication.duplicatedBlocks.length > 0) {
    recommendations.push({
      priority: 'medium',
      category: 'Code Quality',
      title: 'Eliminate Code Duplication',
      description: `Found ${analysis.codeQuality.duplication.duplicatedBlocks.length} duplicated code blocks`,
      action: 'Extract common functionality into reusable functions or components',
      impact: 'Medium'
    });
  }
  
  // Performance Recommendations
  if (analysis.performance.bottlenecks.length > 0) {
    recommendations.push({
      priority: 'medium',
      category: 'Performance',
      title: 'Optimize Performance Bottlenecks',
      description: `Found ${analysis.performance.bottlenecks.length} performance issues`,
      action: 'Implement memoization, optimize re-renders, and reduce bundle size',
      impact: 'High'
    });
  }
  
  // Security Recommendations
  if (analysis.security.vulnerabilities.length > 0) {
    recommendations.push({
      priority: 'critical',
      category: 'Security',
      title: 'Fix Security Vulnerabilities',
      description: `Found ${analysis.security.vulnerabilities.length} security issues`,
      action: 'Address all security vulnerabilities immediately',
      impact: 'Critical'
    });
  }
  
  // Maintainability Recommendations
  if (analysis.maintainability.issues.length > 0) {
    recommendations.push({
      priority: 'medium',
      category: 'Maintainability',
      title: 'Improve Code Maintainability',
      description: `Found ${analysis.maintainability.issues.length} maintainability issues`,
      action: 'Improve documentation, reduce file sizes, and follow best practices',
      impact: 'Medium'
    });
  }
  
  return recommendations;
}

function prioritizeIssues(analysis) {
  let priority = 'low';
  
  if (analysis.security.vulnerabilities.length > 0) {
    priority = 'critical';
  } else if (analysis.codeQuality.complexity.highComplexityFiles.length > 5) {
    priority = 'high';
  } else if (analysis.performance.bottlenecks.length > 3) {
    priority = 'medium';
  }
  
  return priority;
}

async function createActionItems(analysis) {
  try {
    const actionItemsPath = path.join(process.cwd(), 'action-items.md');
    let content = `# Code Analysis Action Items\n\n`;
    content += `Generated: ${analysis.timestamp}\n`;
    content += `Priority: ${analysis.priority.toUpperCase()}\n\n`;
    
    if (analysis.recommendations.length > 0) {
      content += `## Recommendations\n\n`;
      analysis.recommendations.forEach((rec, index) => {
        content += `### ${index + 1}. ${rec.title}\n`;
        content += `- **Priority**: ${rec.priority.toUpperCase()}\n`;
        content += `- **Category**: ${rec.category}\n`;
        content += `- **Impact**: ${rec.impact}\n`;
        content += `- **Description**: ${rec.description}\n`;
        content += `- **Action**: ${rec.action}\n\n`;
      });
    }
    
    fs.writeFileSync(actionItemsPath, content);
    console.log(`📋 Action items created: ${actionItemsPath}`);
    
  } catch (error) {
    console.log('⚠️  Failed to create action items:', error.message);
  }
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

function calculateQualityScore(quality) {
  let score = 100;
  
  // Reduce score based on issues
  if (quality.complexity.highComplexityFiles.length > 0) {
    score -= Math.min(30, quality.complexity.highComplexityFiles.length * 5);
  }
  
  if (quality.duplication.duplicatedBlocks.length > 0) {
    score -= Math.min(25, quality.duplication.duplicatedBlocks.length * 3);
  }
  
  if (quality.standards.violations.length > 0) {
    score -= Math.min(20, quality.standards.violations.length * 2);
  }
  
  if (quality.patterns.count > 0) {
    score -= Math.min(15, quality.patterns.count);
  }
  
  return Math.max(0, score);
}

function calculatePerformanceScore(performance) {
  let score = 100;
  
  performance.bottlenecks.forEach(bottleneck => {
    if (bottleneck.severity === 'high') score -= 15;
    else if (bottleneck.severity === 'medium') score -= 10;
    else score -= 5;
  });
  
  return Math.max(0, score);
}

function calculateMaintainabilityScore(maintainability) {
  let score = 100;
  
  // Reduce score based on metrics
  if (maintainability.metrics.averageFileSize > 200) {
    score -= 20;
  }
  
  if (maintainability.metrics.documentationCoverage < 50) {
    score -= 25;
  }
  
  // Reduce score based on issues
  maintainability.issues.forEach(issue => {
    if (issue.severity === 'high') score -= 15;
    else if (issue.severity === 'medium') score -= 10;
    else score -= 5;
  });
  
  return Math.max(0, score);
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting intelligent code analyzer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  // Run initial analysis
  await runIntelligentCodeAnalysis();
  
  // Set up continuous execution
  setInterval(async () => {
    await runIntelligentCodeAnalysis();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Intelligent code analyzer running. Next analysis in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
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

// Start the intelligent code analyzer
runContinuous().catch(error => {
  console.error('❌ Failed to start intelligent code analyzer:', error);
  process.exit(1);
});