#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting Intelligent Code Refactorer...');

// Get automation interval from environment variable (default: 12 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 43200000; // 12 hours

class IntelligentCodeRefactorer {
  constructor() {
    this.refactoringMetrics = {
      refactoringSuggestions: [],
      appliedRefactorings: [],
      codeQualityScore: 0,
      complexityReduction: 0,
      refactoringPatterns: new Map()
    };
    this.reportDir = path.join(process.cwd(), 'refactoring-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async refactorCodebase() {
    try {
      console.log(`🔧 Running intelligent code refactoring at ${new Date().toISOString()}`);
      
      // Analyze code patterns
      await this.analyzeCodePatterns();
      
      // Identify refactoring opportunities
      await this.identifyRefactoringOpportunities();
      
      // Apply automatic refactorings
      await this.applyAutomaticRefactorings();
      
      // Generate refactoring suggestions
      await this.generateRefactoringSuggestions();
      
      // Calculate quality improvements
      await this.calculateQualityImprovements();
      
      // Generate report
      await this.generateReport();
      
      console.log('✅ Intelligent code refactoring completed successfully');
      
    } catch (error) {
      console.error('❌ Intelligent code refactoring failed:', error.message);
    }
  }

  async analyzeCodePatterns() {
    console.log('🔍 Analyzing code patterns...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) {
      console.log('⚠️ Source directory not found');
      return;
    }
    
    const patterns = {
      longFunctions: [],
      duplicateCode: [],
      complexConditionals: [],
      magicNumbers: [],
      inconsistentNaming: [],
      unusedVariables: [],
      largeComponents: []
    };
    
    const allFiles = this.findFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    
    for (const file of allFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const relativePath = path.relative(srcPath, file);
      
      // Analyze function length
      const functionAnalysis = this.analyzeFunctionLength(content);
      if (functionAnalysis.longFunctions.length > 0) {
        patterns.longFunctions.push({
          file: relativePath,
          functions: functionAnalysis.longFunctions
        });
      }
      
      // Analyze duplicate code
      const duplicateAnalysis = this.analyzeDuplicateCode(content);
      if (duplicateAnalysis.duplicates.length > 0) {
        patterns.duplicateCode.push({
          file: relativePath,
          duplicates: duplicateAnalysis.duplicates
        });
      }
      
      // Analyze complex conditionals
      const conditionalAnalysis = this.analyzeComplexConditionals(content);
      if (conditionalAnalysis.complexConditionals.length > 0) {
        patterns.complexConditionals.push({
          file: relativePath,
          conditionals: conditionalAnalysis.complexConditionals
        });
      }
      
      // Analyze magic numbers
      const magicNumberAnalysis = this.analyzeMagicNumbers(content);
      if (magicNumberAnalysis.magicNumbers.length > 0) {
        patterns.magicNumbers.push({
          file: relativePath,
          numbers: magicNumberAnalysis.magicNumbers
        });
      }
      
      // Analyze naming consistency
      const namingAnalysis = this.analyzeNamingConsistency(content);
      if (namingAnalysis.inconsistencies.length > 0) {
        patterns.inconsistentNaming.push({
          file: relativePath,
          inconsistencies: namingAnalysis.inconsistencies
        });
      }
    }
    
    this.refactoringMetrics.refactoringPatterns.set('patterns', patterns);
    console.log('📊 Code pattern analysis completed');
  }

  async identifyRefactoringOpportunities() {
    console.log('💡 Identifying refactoring opportunities...');
    
    const patterns = this.refactoringMetrics.refactoringPatterns.get('patterns');
    if (!patterns) return;
    
    // Generate refactoring suggestions based on patterns
    if (patterns.longFunctions.length > 0) {
      this.refactoringMetrics.refactoringSuggestions.push({
        type: 'extract_method',
        priority: 'high',
        description: 'Long functions detected - consider extracting methods',
        files: patterns.longFunctions.map(f => f.file),
        action: 'Break down long functions into smaller, focused methods'
      });
    }
    
    if (patterns.duplicateCode.length > 0) {
      this.refactoringMetrics.refactoringSuggestions.push({
        type: 'extract_common',
        priority: 'high',
        description: 'Duplicate code detected - consider extracting common functionality',
        files: patterns.duplicateCode.map(f => f.file),
        action: 'Create utility functions or custom hooks for common patterns'
      });
    }
    
    if (patterns.complexConditionals.length > 0) {
      this.refactoringMetrics.refactoringSuggestions.push({
        type: 'simplify_conditionals',
        priority: 'medium',
        description: 'Complex conditionals detected - consider simplifying',
        files: patterns.complexConditionals.map(f => f.file),
        action: 'Use early returns, guard clauses, or extract boolean methods'
      });
    }
    
    if (patterns.magicNumbers.length > 0) {
      this.refactoringMetrics.refactoringSuggestions.push({
        type: 'extract_constants',
        priority: 'low',
        description: 'Magic numbers detected - consider extracting constants',
        files: patterns.magicNumbers.map(f => f.file),
        action: 'Define named constants for better code readability'
      });
    }
    
    if (patterns.inconsistentNaming.length > 0) {
      this.refactoringMetrics.refactoringSuggestions.push({
        type: 'standardize_naming',
        priority: 'medium',
        description: 'Inconsistent naming detected - consider standardizing',
        files: patterns.inconsistentNaming.map(f => f.file),
        action: 'Follow consistent naming conventions throughout the codebase'
      });
    }
  }

  async applyAutomaticRefactorings() {
    console.log('🔧 Applying automatic refactorings...');
    
    const patterns = this.refactoringMetrics.refactoringPatterns.get('patterns');
    if (!patterns) return;
    
    // Apply magic number extraction
    await this.extractMagicNumbers(patterns.magicNumbers);
    
    // Apply naming standardization
    await this.standardizeNaming(patterns.inconsistentNaming);
    
    // Apply simple code simplifications
    await this.simplifyCode(patterns.complexConditionals);
  }

  async extractMagicNumbers(magicNumberPatterns) {
    console.log('🔢 Extracting magic numbers...');
    
    for (const pattern of magicNumberPatterns.slice(0, 3)) { // Limit to 3 files per run
      try {
        const filePath = path.join(process.cwd(), 'src', pattern.file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Extract magic numbers and replace with constants
        const magicNumbers = pattern.numbers.slice(0, 5); // Limit to 5 numbers per file
        
        for (const number of magicNumbers) {
          const constantName = this.generateConstantName(number.value, number.context);
          const constantDeclaration = `const ${constantName} = ${number.value};`;
          
          // Add constant declaration at the top of the file
          if (!content.includes(constantDeclaration)) {
            content = constantDeclaration + '\n' + content;
            
            // Replace magic number with constant
            const regex = new RegExp(`\\b${number.value}\\b`, 'g');
            content = content.replace(regex, constantName);
          }
        }
        
        // Write back to file
        fs.writeFileSync(filePath, content);
        
        this.refactoringMetrics.appliedRefactorings.push({
          type: 'extract_constants',
          file: pattern.file,
          timestamp: new Date().toISOString(),
          description: `Extracted ${magicNumbers.length} magic numbers`
        });
        
        console.log(`✅ Extracted magic numbers from ${pattern.file}`);
        
      } catch (error) {
        console.log(`⚠️ Failed to extract magic numbers from ${pattern.file}:`, error.message);
      }
    }
  }

  async standardizeNaming(namingPatterns) {
    console.log('📝 Standardizing naming conventions...');
    
    for (const pattern of namingPatterns.slice(0, 2)) { // Limit to 2 files per run
      try {
        const filePath = path.join(process.cwd(), 'src', pattern.file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Apply naming standardizations
        const inconsistencies = pattern.inconsistencies.slice(0, 3); // Limit to 3 per file
        
        for (const inconsistency of inconsistencies) {
          if (inconsistency.type === 'camelCase') {
            // Convert to camelCase
            const regex = new RegExp(inconsistency.original, 'g');
            content = content.replace(regex, inconsistency.suggested);
          }
        }
        
        // Write back to file
        fs.writeFileSync(filePath, content);
        
        this.refactoringMetrics.appliedRefactorings.push({
          type: 'standardize_naming',
          file: pattern.file,
          timestamp: new Date().toISOString(),
          description: `Standardized ${inconsistencies.length} naming inconsistencies`
        });
        
        console.log(`✅ Standardized naming in ${pattern.file}`);
        
      } catch (error) {
        console.log(`⚠️ Failed to standardize naming in ${pattern.file}:`, error.message);
      }
    }
  }

  async simplifyCode(conditionalPatterns) {
    console.log('🔧 Simplifying complex code...');
    
    for (const pattern of conditionalPatterns.slice(0, 2)) { // Limit to 2 files per run
      try {
        const filePath = path.join(process.cwd(), 'src', pattern.file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Apply simple simplifications
        const conditionals = pattern.conditionals.slice(0, 2); // Limit to 2 per file
        
        for (const conditional of conditionals) {
          if (conditional.type === 'nested_if') {
            // Convert nested ifs to early returns
            const simplified = this.simplifyNestedIfs(conditional.code);
            content = content.replace(conditional.code, simplified);
          }
        }
        
        // Write back to file
        fs.writeFileSync(filePath, content);
        
        this.refactoringMetrics.appliedRefactorings.push({
          type: 'simplify_conditionals',
          file: pattern.file,
          timestamp: new Date().toISOString(),
          description: `Simplified ${conditionals.length} complex conditionals`
        });
        
        console.log(`✅ Simplified code in ${pattern.file}`);
        
      } catch (error) {
        console.log(`⚠️ Failed to simplify code in ${pattern.file}:`, error.message);
      }
    }
  }

  async generateRefactoringSuggestions() {
    console.log('💡 Generating refactoring suggestions...');
    
    const patterns = this.refactoringMetrics.refactoringPatterns.get('patterns');
    if (!patterns) return;
    
    // Generate additional suggestions based on analysis
    const totalIssues = patterns.longFunctions.length + 
                       patterns.duplicateCode.length + 
                       patterns.complexConditionals.length;
    
    if (totalIssues > 10) {
      this.refactoringMetrics.refactoringSuggestions.push({
        type: 'code_review',
        priority: 'high',
        description: 'High number of refactoring opportunities detected',
        action: 'Schedule a comprehensive code review session'
      });
    }
    
    // Suggest architectural improvements
    if (patterns.largeComponents.length > 0) {
      this.refactoringMetrics.refactoringSuggestions.push({
        type: 'component_decomposition',
        priority: 'medium',
        description: 'Large components detected - consider decomposition',
        action: 'Break down large components into smaller, focused components'
      });
    }
  }

  async calculateQualityImprovements() {
    console.log('📊 Calculating quality improvements...');
    
    const patterns = this.refactoringMetrics.refactoringPatterns.get('patterns');
    if (!patterns) return;
    
    // Calculate initial quality score
    const totalIssues = patterns.longFunctions.length + 
                       patterns.duplicateCode.length + 
                       patterns.complexConditionals.length + 
                       patterns.magicNumbers.length + 
                       patterns.inconsistentNaming.length;
    
    this.refactoringMetrics.codeQualityScore = Math.max(0, 100 - (totalIssues * 5));
    
    // Calculate complexity reduction
    const appliedRefactorings = this.refactoringMetrics.appliedRefactorings.length;
    this.refactoringMetrics.complexityReduction = appliedRefactorings * 10;
    
    console.log(`📊 Code quality score: ${this.refactoringMetrics.codeQualityScore}`);
    console.log(`📊 Complexity reduction: ${this.refactoringMetrics.complexityReduction}%`);
  }

  async generateReport() {
    console.log('📊 Generating refactoring report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFilesAnalyzed: this.findFiles(path.join(process.cwd(), 'src'), ['.ts', '.tsx', '.js', '.jsx']).length,
        refactoringSuggestions: this.refactoringMetrics.refactoringSuggestions.length,
        appliedRefactorings: this.refactoringMetrics.appliedRefactorings.length,
        codeQualityScore: this.refactoringMetrics.codeQualityScore,
        complexityReduction: this.refactoringMetrics.complexityReduction
      },
      metrics: this.refactoringMetrics,
      suggestions: this.refactoringMetrics.refactoringSuggestions,
      applied: this.refactoringMetrics.appliedRefactorings
    };
    
    const reportPath = path.join(this.reportDir, `refactoring-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(process.cwd(), 'refactoring-report.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Refactoring report saved to ${reportPath}`);
  }

  findFiles(dir, extensions) {
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

  analyzeFunctionLength(content) {
    const longFunctions = [];
    const lines = content.split('\n');
    
    let inFunction = false;
    let functionStart = 0;
    let functionName = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('function ') || line.includes('const ') && line.includes('=') && line.includes('(')) {
        inFunction = true;
        functionStart = i;
        const match = line.match(/(?:function|const)\s+(\w+)/);
        functionName = match ? match[1] : 'anonymous';
      } else if (inFunction && line.includes('}') && !line.includes('{')) {
        const functionLength = i - functionStart + 1;
        if (functionLength > 20) { // Functions longer than 20 lines
          longFunctions.push({
            name: functionName,
            length: functionLength,
            startLine: functionStart + 1,
            endLine: i + 1
          });
        }
        inFunction = false;
      }
    }
    
    return { longFunctions };
  }

  analyzeDuplicateCode(content) {
    const duplicates = [];
    const lines = content.split('\n');
    
    // Simple duplicate detection (can be enhanced)
    const codeBlocks = [];
    for (let i = 0; i < lines.length - 2; i++) {
      const block = lines.slice(i, i + 3).join('\n');
      codeBlocks.push({ block, startLine: i + 1 });
    }
    
    // Find duplicates
    for (let i = 0; i < codeBlocks.length; i++) {
      for (let j = i + 1; j < codeBlocks.length; j++) {
        if (codeBlocks[i].block === codeBlocks[j].block && 
            codeBlocks[i].block.trim().length > 10) {
          duplicates.push({
            code: codeBlocks[i].block,
            startLine: codeBlocks[i].startLine,
            duplicateLine: codeBlocks[j].startLine
          });
        }
      }
    }
    
    return { duplicates };
  }

  analyzeComplexConditionals(content) {
    const complexConditionals = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for complex conditionals
      if (line.includes('if (') && (line.includes('&&') || line.includes('||'))) {
        const conditionCount = (line.match(/&&|\|\|/g) || []).length;
        if (conditionCount > 2) {
          complexConditionals.push({
            type: 'complex_conditional',
            line: i + 1,
            code: line.trim(),
            complexity: conditionCount
          });
        }
      }
      
      // Check for nested ifs
      if (line.includes('if (') && i + 1 < lines.length) {
        const nextLine = lines[i + 1];
        if (nextLine.includes('if (') && !nextLine.includes('else')) {
          complexConditionals.push({
            type: 'nested_if',
            line: i + 1,
            code: line.trim() + '\n' + nextLine.trim(),
            complexity: 2
          });
        }
      }
    }
    
    return { complexConditionals };
  }

  analyzeMagicNumbers(content) {
    const magicNumbers = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Find magic numbers (numbers that appear without context)
      const numberMatches = line.match(/\b\d+\b/g);
      if (numberMatches) {
        numberMatches.forEach(number => {
          const num = parseInt(number);
          if (num > 1 && num < 1000) { // Reasonable range for magic numbers
            magicNumbers.push({
              value: number,
              line: i + 1,
              context: line.trim()
            });
          }
        });
      }
    }
    
    return { magicNumbers };
  }

  analyzeNamingConsistency(content) {
    const inconsistencies = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for inconsistent naming patterns
      const variableMatches = line.match(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g);
      if (variableMatches) {
        variableMatches.forEach(variable => {
          if (variable.length > 3 && !this.isConsistentNaming(variable)) {
            inconsistencies.push({
              type: 'camelCase',
              original: variable,
              suggested: this.toCamelCase(variable),
              line: i + 1
            });
          }
        });
      }
    }
    
    return { inconsistencies };
  }

  generateConstantName(value, context) {
    const num = parseInt(value);
    const contextWords = context.split(/\s+/).slice(0, 3);
    const prefix = contextWords[0] ? contextWords[0].toUpperCase() : 'VALUE';
    return `${prefix}_${num}`;
  }

  isConsistentNaming(name) {
    // Check if name follows camelCase convention
    return /^[a-z][a-zA-Z0-9]*$/.test(name) || /^[A-Z][a-zA-Z0-9]*$/.test(name);
  }

  toCamelCase(name) {
    return name.charAt(0).toLowerCase() + name.slice(1);
  }

  simplifyNestedIfs(code) {
    // Simple nested if simplification
    return code.replace(/if\s*\(([^)]+)\)\s*{\s*if\s*\(([^)]+)\)/g, 
      'if ($1 && $2)');
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(`🔧 Starting intelligent code refactorer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  const refactorer = new IntelligentCodeRefactorer();
  
  // Run initial refactoring
  await refactorer.refactorCodebase();
  
  // Set up continuous execution
  setInterval(async () => {
    await refactorer.refactorCodebase();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Intelligent code refactorer running. Next refactoring in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
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

// Start the intelligent code refactorer
runContinuous().catch(error => {
  console.error('❌ Failed to start intelligent code refactorer:', error);
  process.exit(1);
});