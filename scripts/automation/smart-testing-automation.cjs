#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class SmartTestingAutomation {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      sourcePatterns: [
        'src/**/*.{js,jsx,ts,tsx}',
        'components/**/*.{js,jsx,ts,tsx}',
        'utils/**/*.{js,jsx,ts,tsx}',
        'pages/**/*.{js,jsx,ts,tsx}'
      ],
      testPatterns: [
        '**/*.{test,spec}.{js,jsx,ts,tsx}',
        '**/__tests__/**/*.{js,jsx,ts,tsx}',
        '**/tests/**/*.{js,jsx,ts,tsx}'
      ],
      ignorePatterns: [
        'node_modules/**',
        'dist/**',
        'build/**',
        '*.min.js',
        '*.bundle.js'
      ],
      reportDir: 'testing-strategy-reports',
      logFile: 'logs/smart-testing.log'
    };
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [this.config.reportDir, 'logs'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    console.log(logMessage.trim());
    
    if (fs.existsSync('logs')) {
      fs.appendFileSync(this.config.logFile, logMessage);
    }
  }

  async analyzeTestingStrategy() {
    this.log('🧪 Starting Smart Testing Strategy Analysis...');
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalSourceFiles: 0,
          totalTestFiles: 0,
          estimatedCoverage: 0,
          testQualityScore: 0,
          testingGaps: 0
        },
        details: {
          coverage: {},
          quality: {},
          gaps: [],
          strategy: {}
        },
        suggestions: [],
        recommendations: []
      };

      // Analyze test coverage
      await this.analyzeTestCoverage(report);
      
      // Analyze test quality
      await this.analyzeTestQuality(report);
      
      // Identify testing gaps
      await this.identifyTestingGaps(report);
      
      // Generate testing strategy
      await this.generateTestingStrategy(report);
      
      // Generate intelligent suggestions
      await this.generateIntelligentSuggestions(report);
      
      // Generate final report
      await this.generateReport(report);
      
      this.log('✅ Smart Testing Strategy Analysis completed successfully');
      return report;
      
    } catch (error) {
      this.log(`❌ Error during testing strategy analysis: ${error.message}`);
      throw error;
    }
  }

  async analyzeTestCoverage(report) {
    this.log('📊 Analyzing test coverage...');
    
    try {
      const sourceFiles = this.getSourceFiles();
      const testFiles = this.getTestFiles();
      
      report.summary.totalSourceFiles = sourceFiles.length;
      report.summary.totalTestFiles = testFiles.length;
      
      const coverageData = this.calculateCoverageMetrics(sourceFiles, testFiles);
      report.details.coverage = coverageData;
      report.summary.estimatedCoverage = coverageData.overall;
      
    } catch (error) {
      this.log(`Warning: Could not analyze test coverage: ${error.message}`);
    }
  }

  estimateCoverage(testFiles, sourceFiles) {
    if (sourceFiles.length === 0) return 0;
    
    // Simple heuristic: assume each test file covers 2-3 source files
    const estimatedCoveredFiles = testFiles.length * 2.5;
    const coverage = Math.min(100, (estimatedCoveredFiles / sourceFiles.length) * 100);
    
    return Math.round(coverage);
  }

  calculateCoverageMetrics(sourceFiles, testFiles) {
    const coverage = {
      overall: 0,
      byType: {},
      byDirectory: {},
      details: []
    };
    
    // Calculate overall coverage
    coverage.overall = this.estimateCoverage(testFiles, sourceFiles);
    
    // Analyze coverage by file type
    const fileTypes = {};
    sourceFiles.forEach(file => {
      const ext = path.extname(file);
      fileTypes[ext] = (fileTypes[ext] || 0) + 1;
    });
    
    coverage.byType = fileTypes;
    
    // Analyze coverage by directory
    const directories = {};
    sourceFiles.forEach(file => {
      const dir = path.dirname(file);
      directories[dir] = (directories[dir] || 0) + 1;
    });
    
    coverage.byDirectory = directories;
    
    // Generate coverage details
    coverage.details = sourceFiles.map(file => {
      const testFile = this.findCorrespondingTestFile(file, testFiles);
      return {
        sourceFile: file,
        testFile: testFile,
        hasTest: !!testFile,
        type: path.extname(file),
        directory: path.dirname(file)
      };
    });
    
    return coverage;
  }

  async analyzeTestQuality(report) {
    this.log('🔍 Analyzing test quality...');
    
    const testFiles = this.getTestFiles();
    const qualityMetrics = [];
    
    for (const file of testFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const quality = this.analyzeTestFileQuality(content, file);
        qualityMetrics.push(quality);
      } catch (error) {
        this.log(`Warning: Could not analyze ${file}: ${error.message}`);
      }
    }
    
    const averageQuality = this.calculateAverageQuality(qualityMetrics);
    
    report.details.quality = {
      metrics: qualityMetrics,
      average: averageQuality,
      total: testFiles.length
    };
    
    report.summary.testQualityScore = averageQuality;
  }

  analyzeTestFileQuality(content, filePath) {
    const quality = {
      file: filePath,
      complexity: this.calculateTestComplexity(content),
      maintainability: this.calculateTestMaintainability(content),
      assertions: this.countAssertions(content),
      issues: this.identifyTestIssues(content, filePath)
    };
    
    // Calculate overall quality score (1-10)
    const score = Math.min(10, Math.max(1, 
      (quality.complexity.score * 0.3) + 
      (quality.maintainability.score * 0.3) + 
      (Math.min(quality.assertions / 10, 1) * 4)
    ));
    
    quality.overallScore = Math.round(score * 10) / 10;
    
    return quality;
  }

  calculateTestComplexity(content) {
    const factors = {
      lines: content.split('\n').length,
      functions: (content.match(/function\s+\w+|=>\s*{|const\s+\w+\s*=\s*\(/g) || []).length,
      conditions: (content.match(/if\s*\(|else\s*if|switch\s*\(|case\s+/g) || []).length,
      loops: (content.match(/for\s*\(|while\s*\(|do\s*\{/g) || []).length
    };
    
    // Calculate cyclomatic complexity
    factors.cyclomatic = factors.conditions + factors.loops + 1;
    
    // Calculate complexity score (1-10, lower is better for tests)
    const score = Math.max(1, Math.min(10, 
      10 - (factors.cyclomatic / 5) - (factors.lines / 50)
    ));
    
    return { score: Math.round(score * 10) / 10, factors };
  }

  calculateTestMaintainability(content) {
    const factors = {
      longLines: 0,
      magicNumbers: 0,
      hardcodedStrings: 0,
      comments: 0
    };
    
    const lines = content.split('\n');
    
    for (const line of lines) {
      if (line.length > 120) factors.longLines++;
      if (/\b\d{3,}\b/.test(line)) factors.magicNumbers++;
      if (line.includes('"') && line.includes('test')) factors.hardcodedStrings++;
      if (line.includes('//') || line.includes('/*')) factors.comments++;
    }
    
    // Calculate maintainability score (1-10, higher is better)
    const score = Math.max(1, Math.min(10, 
      10 - (factors.longLines * 0.5) - 
      (factors.magicNumbers * 0.3) - 
      (factors.hardcodedStrings * 0.2) + 
      (factors.comments * 0.1)
    ));
    
    return { score: Math.round(score * 10) / 10, factors };
  }

  countAssertions(content) {
    const assertionPatterns = [
      /expect\(/g,
      /assert\(/g,
      /should\(/g,
      /\.toBe\(/g,
      /\.toEqual\(/g,
      /\.toContain\(/g,
      /\.toHaveLength\(/g,
      /\.toThrow\(/g
    ];
    
    let totalAssertions = 0;
    assertionPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) totalAssertions += matches.length;
    });
    
    return totalAssertions;
  }

  identifyTestIssues(content, filePath) {
    const issues = [];
    
    // Check for common test issues
    if (content.includes('console.log')) {
      issues.push({
        type: 'console-log',
        severity: 'low',
        message: 'Console logs in test files',
        suggestion: 'Remove console.logs from test files'
      });
    }
    
    if (content.includes('it.skip') || content.includes('describe.skip')) {
      issues.push({
        type: 'skipped-tests',
        severity: 'medium',
        message: 'Skipped tests detected',
        suggestion: 'Review and either fix or remove skipped tests'
      });
    }
    
    if (content.includes('it.todo') || content.includes('describe.todo')) {
      issues.push({
        type: 'todo-tests',
        severity: 'low',
        message: 'TODO tests detected',
        suggestion: 'Implement TODO tests or remove them'
      });
    }
    
    if (content.includes('setTimeout') && content.includes('done')) {
      issues.push({
        type: 'async-testing',
        severity: 'medium',
        message: 'Manual timeout handling detected',
        suggestion: 'Use proper async/await or Jest timer mocks'
      });
    }
    
    return issues;
  }

  calculateAverageQuality(qualityMetrics) {
    if (qualityMetrics.length === 0) return 0;
    
    const totalScore = qualityMetrics.reduce((sum, metric) => sum + metric.overallScore, 0);
    return Math.round((totalScore / qualityMetrics.length) * 10) / 10;
  }

  async identifyTestingGaps(report) {
    this.log('🔍 Identifying testing gaps...');
    
    const sourceFiles = this.getSourceFiles();
    const testFiles = this.getTestFiles();
    const gaps = [];
    
    for (const sourceFile of sourceFiles) {
      const testFile = this.findCorrespondingTestFile(sourceFile, testFiles);
      const gap = this.analyzeTestingGap(sourceFile, testFile ? 'covered' : 'uncovered');
      
      if (gap.priority !== 'low') {
        gaps.push(gap);
      }
    }
    
    // Sort gaps by priority
    gaps.sort((a, b) => {
      const priorityOrder = { 'critical': 3, 'high': 2, 'medium': 1, 'low': 0 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
    
    report.details.gaps = gaps;
    report.summary.testingGaps = gaps.length;
  }

  findCorrespondingTestFile(sourceFile, testFiles) {
    const sourceName = path.basename(sourceFile, path.extname(sourceFile));
    const sourceDir = path.dirname(sourceFile);
    
    // Look for test files with matching names
    for (const testFile of testFiles) {
      const testName = path.basename(testFile, path.extname(testFile));
      const testDir = path.dirname(testFile);
      
      // Check if test file corresponds to source file
      if (testName.includes(sourceName) || testName.includes(sourceName.replace(/\./g, '-'))) {
        // Check if they're in related directories
        if (testDir.includes(sourceDir) || sourceDir.includes(testDir) || 
            testDir.includes('__tests__') || testDir.includes('tests')) {
          return testFile;
        }
      }
    }
    
    return null;
  }

  analyzeTestingGap(sourceFile, type, coverage = 0) {
    const gap = {
      sourceFile,
      type,
      priority: 'low',
      reason: '',
      suggestions: []
    };
    
    if (type === 'uncovered') {
      gap.priority = this.calculateTestingPriority(sourceFile);
      gap.reason = 'No corresponding test file found';
      gap.suggestions = [
        'Create unit tests for this component/function',
        'Add integration tests if unit tests are insufficient',
        'Consider test-driven development approach'
      ];
    } else if (type === 'covered' && coverage < 80) {
      gap.priority = 'medium';
      gap.reason = 'Low test coverage detected';
      gap.suggestions = [
        'Increase test coverage for edge cases',
        'Add more comprehensive test scenarios',
        'Review test quality and effectiveness'
      ];
    }
    
    return gap;
  }

  calculateTestingPriority(sourceFile) {
    let priority = 'low';
    
    // Higher priority for critical files
    if (sourceFile.includes('components/') || sourceFile.includes('pages/')) {
      priority = 'high';
    } else if (sourceFile.includes('utils/') || sourceFile.includes('hooks/')) {
      priority = 'medium';
    }
    
    // Check file size and complexity
    try {
      const content = fs.readFileSync(sourceFile, 'utf8');
      const lines = content.split('\n').length;
      const functions = (content.match(/function\s+\w+|=>\s*{|const\s+\w+\s*=\s*\(/g) || []).length;
      
      if (lines > 100 || functions > 5) {
        priority = priority === 'low' ? 'medium' : 'high';
      }
    } catch (error) {
      // Skip files that can't be read
    }
    
    return priority;
  }

  async generateTestingStrategy(report) {
    this.log('📋 Generating testing strategy...');
    
    const strategy = {
      coverage: this.generateCoverageStrategy(report),
      quality: this.generateQualityStrategy(report),
      automation: this.generateAutomationStrategy(report),
      timeline: this.generateTimelineStrategy(report),
      resources: this.generateResourceStrategy(report)
    };
    
    report.details.strategy = strategy;
  }

  generateCoverageStrategy(report) {
    const strategy = {
      current: report.summary.estimatedCoverage,
      target: 80,
      approach: 'incremental',
      priorities: []
    };
    
    // Generate coverage priorities based on gaps
    const criticalGaps = report.details.gaps.filter(gap => gap.priority === 'critical');
    const highGaps = report.details.gaps.filter(gap => gap.priority === 'high');
    
    if (criticalGaps.length > 0) {
      strategy.priorities.push({
        phase: 'immediate',
        target: 'critical',
        files: criticalGaps.map(gap => gap.sourceFile),
        timeline: '1-2 weeks'
      });
    }
    
    if (highGaps.length > 0) {
      strategy.priorities.push({
        phase: 'short-term',
        target: 'high',
        files: highGaps.map(gap => gap.sourceFile),
        timeline: '2-4 weeks'
      });
    }
    
    return strategy;
  }

  generateQualityStrategy(report) {
    const strategy = {
      current: report.summary.testQualityScore,
      target: 8,
      focus: [],
      improvements: []
    };
    
    // Focus on low-quality tests
    const lowQualityTests = report.details.quality.metrics.filter(metric => metric.overallScore < 6);
    
    if (lowQualityTests.length > 0) {
      strategy.focus.push({
        area: 'test-quality',
        files: lowQualityTests.map(metric => metric.file),
        action: 'Refactor low-quality tests'
      });
    }
    
    // Identify common issues
    const allIssues = report.details.quality.metrics.flatMap(metric => metric.issues);
    const issueTypes = {};
    
    allIssues.forEach(issue => {
      issueTypes[issue.type] = (issueTypes[issue.type] || 0) + 1;
    });
    
    Object.entries(issueTypes).forEach(([type, count]) => {
      if (count > 2) {
        strategy.improvements.push({
          type,
          count,
          action: `Address ${type} issues across ${count} test files`
        });
      }
    });
    
    return strategy;
  }

  generateAutomationStrategy(report) {
    const strategy = {
      tools: [],
      ci: [],
      monitoring: []
    };
    
    // Recommend testing tools
    if (report.details.coverage.overall < 50) {
      strategy.tools.push({
        name: 'Coverage Tool',
        purpose: 'Track test coverage',
        recommendation: 'Jest with coverage or Istanbul'
      });
    }
    
    if (report.details.quality.average < 7) {
      strategy.tools.push({
        name: 'Test Quality Tool',
        purpose: 'Improve test quality',
        recommendation: 'ESLint with testing plugins'
      });
    }
    
    // CI/CD integration
    strategy.ci.push({
      phase: 'pre-commit',
      action: 'Run unit tests and coverage checks'
    });
    
    strategy.ci.push({
      phase: 'pull-request',
      action: 'Full test suite with coverage reporting'
    });
    
    // Monitoring
    strategy.monitoring.push({
      metric: 'Coverage Trend',
      frequency: 'weekly',
      action: 'Track coverage changes over time'
    });
    
    return strategy;
  }

  generateTimelineStrategy(report) {
    const timeline = {
      phases: [],
      milestones: []
    };
    
    // Phase 1: Critical gaps (1-2 weeks)
    if (report.details.gaps.filter(gap => gap.priority === 'critical').length > 0) {
      timeline.phases.push({
        name: 'Critical Coverage',
        duration: '1-2 weeks',
        focus: 'Cover critical untested files',
        deliverables: 'Unit tests for critical components'
      });
    }
    
    // Phase 2: High priority gaps (2-4 weeks)
    if (report.details.gaps.filter(gap => gap.priority === 'high').length > 0) {
      timeline.phases.push({
        name: 'High Priority Coverage',
        duration: '2-4 weeks',
        focus: 'Cover high-priority untested files',
        deliverables: 'Comprehensive test coverage for high-priority areas'
      });
    }
    
    // Phase 3: Quality improvement (ongoing)
    if (report.details.quality.average < 8) {
      timeline.phases.push({
        name: 'Quality Improvement',
        duration: 'ongoing',
        focus: 'Improve test quality and maintainability',
        deliverables: 'Refactored tests, improved coverage'
      });
    }
    
    return timeline;
  }

  generateResourceStrategy(report) {
    const resources = {
      team: [],
      tools: [],
      training: []
    };
    
    // Team requirements
    if (report.summary.testingGaps > 20) {
      resources.team.push({
        role: 'Test Engineer',
        responsibility: 'Focus on test coverage and quality',
        timeline: 'immediate'
      });
    }
    
    if (report.details.quality.average < 6) {
      resources.team.push({
        role: 'Senior Developer',
        responsibility: 'Review and improve test quality',
        timeline: 'short-term'
      });
    }
    
    // Tool recommendations
    resources.tools.push({
      name: 'Testing Framework',
      current: 'Unknown',
      recommended: 'Jest + React Testing Library',
      reason: 'Industry standard for React applications'
    });
    
    // Training needs
    if (report.details.quality.average < 7) {
      resources.training.push({
        topic: 'Test-Driven Development',
        audience: 'Development team',
        timeline: '1 month'
      });
    }
    
    return resources;
  }

  async generateIntelligentSuggestions(report) {
    this.log('🧠 Generating intelligent suggestions...');
    
    const suggestions = [];
    
    // Coverage-based suggestions
    if (report.summary.estimatedCoverage < 50) {
      suggestions.push({
        priority: 'CRITICAL',
        category: 'Test Coverage',
        message: 'Extremely low test coverage detected. This poses significant risks.',
        action: 'Implement comprehensive testing strategy with immediate focus on critical components',
        impact: 'Critical'
      });
    }
    
    if (report.summary.testingGaps > 15) {
      suggestions.push({
        priority: 'HIGH',
        category: 'Testing Gaps',
        message: 'Many untested files detected. Prioritize testing for critical functionality.',
        action: 'Create testing roadmap and allocate dedicated resources',
        impact: 'High'
      });
    }
    
    // Quality-based suggestions
    if (report.summary.testQualityScore < 6) {
      suggestions.push({
        priority: 'MEDIUM',
        category: 'Test Quality',
        message: 'Low test quality detected. Poor tests can be worse than no tests.',
        action: 'Refactor existing tests and establish quality standards',
        impact: 'Medium'
      });
    }
    
    report.suggestions = suggestions;
  }

  async generateReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportFile = path.join(this.config.reportDir, `smart-testing-${timestamp}.json`);
    const summaryFile = path.join(this.config.reportDir, `smart-testing-summary-${timestamp}.md`);
    
    // Save detailed JSON report
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    // Generate human-readable summary
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryFile, summary);
    
    this.log(`📄 Detailed report saved to: ${reportFile}`);
    this.log(`📋 Summary report saved to: ${summaryFile}`);
    
    // Log summary to console
    console.log('\n' + '='.repeat(60));
    console.log('🧪 SMART TESTING STRATEGY ANALYSIS SUMMARY');
    console.log('='.repeat(60));
    console.log(`📁 Source Files: ${report.summary.totalSourceFiles}`);
    console.log(`🧪 Test Files: ${report.summary.totalTestFiles}`);
    console.log(`📊 Estimated Coverage: ${report.summary.estimatedCoverage}%`);
    console.log(`⭐ Test Quality Score: ${report.summary.testQualityScore}/10`);
    console.log(`🔍 Testing Gaps: ${report.summary.testingGaps}`);
    console.log('='.repeat(60));
  }

  generateHumanReadableSummary(report) {
    let summary = `# Smart Testing Strategy Analysis Report\n\n`;
    summary += `**Generated:** ${report.timestamp}\n\n`;
    
    summary += `## Summary\n\n`;
    summary += `- **Source Files:** ${report.summary.totalSourceFiles}\n`;
    summary += `- **Test Files:** ${report.summary.totalTestFiles}\n`;
    summary += `- **Estimated Coverage:** ${report.summary.estimatedCoverage}%\n`;
    summary += `- **Test Quality Score:** ${report.summary.testQualityScore}/10\n`;
    summary += `- **Testing Gaps:** ${report.summary.testingGaps}\n\n`;
    
    if (report.suggestions.length > 0) {
      summary += `## Priority Recommendations\n\n`;
      report.suggestions.forEach(suggestion => {
        summary += `### ${suggestion.priority} Priority: ${suggestion.category}\n`;
        summary += `${suggestion.message}\n\n`;
        summary += `**Action:** ${suggestion.action}\n`;
        summary += `**Impact:** ${suggestion.impact}\n\n`;
      });
    }
    
    if (report.details.strategy) {
      summary += `## Testing Strategy\n\n`;
      
      if (report.details.strategy.coverage) {
        summary += `### Coverage Strategy\n`;
        summary += `- **Current:** ${report.details.strategy.coverage.current}%\n`;
        summary += `- **Target:** ${report.details.strategy.coverage.target}%\n`;
        summary += `- **Approach:** ${report.details.strategy.coverage.approach}\n\n`;
      }
      
      if (report.details.strategy.timeline) {
        summary += `### Timeline\n`;
        report.details.strategy.timeline.phases.forEach(phase => {
          summary += `- **${phase.name}:** ${phase.duration} - ${phase.focus}\n`;
        });
        summary += `\n`;
      }
    }
    
    return summary;
  }

  getSourceFiles() {
    const files = [];
    
    this.config.sourcePatterns.forEach(pattern => {
      const matches = glob.sync(pattern, { ignore: this.config.ignorePatterns });
      files.push(...matches);
    });
    
    return files.filter(file => {
      const stats = fs.statSync(file);
      return stats.isFile() && stats.size > 0;
    });
  }

  getTestFiles() {
    const files = [];
    
    this.config.testPatterns.forEach(pattern => {
      const matches = glob.sync(pattern, { ignore: this.config.ignorePatterns });
      files.push(...matches);
    });
    
    return files.filter(file => {
      const stats = fs.statSync(file);
      return stats.isFile() && stats.size > 0;
    });
  }

  async run() {
    try {
      this.log('🚀 Starting Smart Testing Automation...');
      
      const report = await this.analyzeTestingStrategy();
      
      this.log('✅ Smart Testing Automation completed successfully');
      return report;
      
    } catch (error) {
      this.log(`❌ Smart Testing Automation failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new SmartTestingAutomation();
  automation.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = SmartTestingAutomation;