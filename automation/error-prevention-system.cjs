#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorPreventionSystem {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs', 'error-prevention.log');
    this.ensureLogDir();
    this.errors = [];
    this.fixes = [];
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runErrorPrevention() {
    this.log('🛡️ Starting Error Prevention System...');
    
    try {
      // 1. Syntax Error Detection
      await this.detectSyntaxErrors();
      
      // 2. Type Error Detection
      await this.detectTypeErrors();
      
      // 3. Runtime Error Prevention
      await this.preventRuntimeErrors();
      
      // 4. Memory Leak Detection
      await this.detectMemoryLeaks();
      
      // 5. Performance Issue Detection
      await this.detectPerformanceIssues();
      
      // 6. Security Vulnerability Detection
      await this.detectSecurityVulnerabilities();
      
      // 7. Generate Prevention Report
      await this.generatePreventionReport();
      
      this.log('✅ Error Prevention System completed!');
      
    } catch (error) {
      this.log(`❌ Error in Error Prevention System: ${error.message}`);
      throw error;
    }
  }

  async detectSyntaxErrors() {
    this.log('🔍 Detecting syntax errors...');
    
    const files = this.findFiles('.ts', '.tsx', '.js', '.jsx');
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for common syntax errors
        const syntaxIssues = [];
        
        // Unclosed brackets
        const openBrackets = (content.match(/\{/g) || []).length;
        const closeBrackets = (content.match(/\}/g) || []).length;
        if (openBrackets !== closeBrackets) {
          syntaxIssues.push('Unclosed brackets');
        }
        
        // Unclosed parentheses
        const openParens = (content.match(/\(/g) || []).length;
        const closeParens = (content.match(/\)/g) || []).length;
        if (openParens !== closeParens) {
          syntaxIssues.push('Unclosed parentheses');
        }
        
        // Missing semicolons
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line && !line.endsWith(';') && !line.endsWith('{') && !line.endsWith('}') && 
              !line.startsWith('//') && !line.startsWith('*') && !line.startsWith('/*')) {
            syntaxIssues.push(`Line ${i + 1}: Missing semicolon`);
          }
        }
        
        if (syntaxIssues.length > 0) {
          this.errors.push({
            file,
            type: 'syntax',
            issues: syntaxIssues,
            severity: 'high'
          });
        }
        
      } catch (error) {
        this.log(`⚠️ Could not analyze ${file}: ${error.message}`);
      }
    }
    
    this.log(`🔍 Found ${this.errors.length} files with syntax issues`);
  }

  async detectTypeErrors() {
    this.log('🔍 Detecting type errors...');
    
    try {
      // Run TypeScript compiler to check for type errors
      const tscOutput = execSync('npx tsc --noEmit --pretty false', { stdio: 'pipe' }).toString();
      
      if (tscOutput) {
        const lines = tscOutput.split('\n');
        for (const line of lines) {
          if (line.includes('error TS')) {
            const match = line.match(/\((\d+),(\d+)\): error TS(\d+): (.+)/);
            if (match) {
              const [, lineNum, colNum, errorCode, message] = match;
              const file = line.split('(')[0].trim();
              
              this.errors.push({
                file,
                type: 'type',
                line: parseInt(lineNum),
                column: parseInt(colNum),
                code: errorCode,
                message,
                severity: 'high'
              });
            }
          }
        }
      }
      
    } catch (error) {
      this.log(`⚠️ Type checking failed: ${error.message}`);
    }
    
    this.log(`🔍 Found ${this.errors.filter(e => e.type === 'type').length} type errors`);
  }

  async preventRuntimeErrors() {
    this.log('🛡️ Preventing runtime errors...');
    
    const files = this.findFiles('.ts', '.tsx', '.js', '.jsx');
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Add null checks for object access
        content = content.replace(
          /(\w+)\.(\w+)/g,
          (match, obj, prop) => {
            if (!content.includes(`${obj} && ${obj}.${prop}`)) {
              modified = true;
              return `${obj} && ${obj}.${prop}`;
            }
            return match;
          }
        );
        
        // Add try-catch blocks for async functions
        content = content.replace(
          /(async\s+function\s+\w+\([^)]*\)\s*{)/g,
          (match) => {
            if (!content.includes('try {')) {
              modified = true;
              return match + '\n  try {';
            }
            return match;
          }
        );
        
        // Add error boundaries for React components
        if (content.includes('export default') && content.includes('React')) {
          const errorBoundary = `
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}`;
          
          if (!content.includes('ErrorBoundary')) {
            content = errorBoundary + '\n' + content;
            modified = true;
          }
        }
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixes.push({
            file,
            type: 'runtime_prevention',
            description: 'Added error prevention measures'
          });
        }
        
      } catch (error) {
        this.log(`⚠️ Could not prevent runtime errors in ${file}: ${error.message}`);
      }
    }
    
    this.log(`🛡️ Applied ${this.fixes.length} runtime error prevention measures`);
  }

  async detectMemoryLeaks() {
    this.log('🔍 Detecting potential memory leaks...');
    
    const files = this.findFiles('.ts', '.tsx', '.js', '.jsx');
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const memoryIssues = [];
        
        // Check for event listeners without cleanup
        if (content.includes('addEventListener') && !content.includes('removeEventListener')) {
          memoryIssues.push('Event listeners without cleanup');
        }
        
        // Check for intervals without cleanup
        if (content.includes('setInterval') && !content.includes('clearInterval')) {
          memoryIssues.push('Intervals without cleanup');
        }
        
        // Check for timeouts without cleanup
        if (content.includes('setTimeout') && !content.includes('clearTimeout')) {
          memoryIssues.push('Timeouts without cleanup');
        }
        
        // Check for React useEffect without cleanup
        if (content.includes('useEffect') && !content.includes('return () =>')) {
          memoryIssues.push('useEffect without cleanup function');
        }
        
        if (memoryIssues.length > 0) {
          this.errors.push({
            file,
            type: 'memory',
            issues: memoryIssues,
            severity: 'medium'
          });
        }
        
      } catch (error) {
        this.log(`⚠️ Could not analyze ${file}: ${error.message}`);
      }
    }
    
    this.log(`🔍 Found ${this.errors.filter(e => e.type === 'memory').length} potential memory leaks`);
  }

  async detectPerformanceIssues() {
    this.log('🔍 Detecting performance issues...');
    
    const files = this.findFiles('.ts', '.tsx', '.js', '.jsx');
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const performanceIssues = [];
        
        // Check for expensive operations in render
        if (content.includes('render') && (content.includes('map(') || content.includes('filter('))) {
          performanceIssues.push('Expensive operations in render method');
        }
        
        // Check for missing React.memo
        if (content.includes('function') && content.includes('props') && !content.includes('React.memo')) {
          performanceIssues.push('Component could benefit from React.memo');
        }
        
        // Check for missing useMemo/useCallback
        if (content.includes('useState') && content.includes('expensive') && !content.includes('useMemo')) {
          performanceIssues.push('Could benefit from useMemo/useCallback');
        }
        
        if (performanceIssues.length > 0) {
          this.errors.push({
            file,
            type: 'performance',
            issues: performanceIssues,
            severity: 'medium'
          });
        }
        
      } catch (error) {
        this.log(`⚠️ Could not analyze ${file}: ${error.message}`);
      }
    }
    
    this.log(`🔍 Found ${this.errors.filter(e => e.type === 'performance').length} performance issues`);
  }

  async detectSecurityVulnerabilities() {
    this.log('🔍 Detecting security vulnerabilities...');
    
    const files = this.findFiles('.ts', '.tsx', '.js', '.jsx');
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const securityIssues = [];
        
        // Check for dangerous functions
        if (content.includes('eval(')) {
          securityIssues.push('Uses eval() - potential code injection');
        }
        
        if (content.includes('innerHTML')) {
          securityIssues.push('Uses innerHTML - potential XSS');
        }
        
        if (content.includes('document.write')) {
          securityIssues.push('Uses document.write - potential XSS');
        }
        
        // Check for hardcoded secrets
        if (content.includes('password') && content.includes('=')) {
          securityIssues.push('Potential hardcoded password');
        }
        
        if (content.includes('api_key') && content.includes('=')) {
          securityIssues.push('Potential hardcoded API key');
        }
        
        if (securityIssues.length > 0) {
          this.errors.push({
            file,
            type: 'security',
            issues: securityIssues,
            severity: 'high'
          });
        }
        
      } catch (error) {
        this.log(`⚠️ Could not analyze ${file}: ${error.message}`);
      }
    }
    
    this.log(`🔍 Found ${this.errors.filter(e => e.type === 'security').length} security vulnerabilities`);
  }

  async generatePreventionReport() {
    this.log('📊 Generating prevention report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      errors: this.errors,
      fixes: this.fixes,
      summary: {
        totalErrors: this.errors.length,
        totalFixes: this.fixes.length,
        errorTypes: {
          syntax: this.errors.filter(e => e.type === 'syntax').length,
          type: this.errors.filter(e => e.type === 'type').length,
          memory: this.errors.filter(e => e.type === 'memory').length,
          performance: this.errors.filter(e => e.type === 'performance').length,
          security: this.errors.filter(e => e.type === 'security').length
        },
        severity: {
          high: this.errors.filter(e => e.severity === 'high').length,
          medium: this.errors.filter(e => e.severity === 'medium').length,
          low: this.errors.filter(e => e.severity === 'low').length
        }
      }
    };
    
    const reportFile = path.join(this.projectRoot, 'automation/logs', 'error-prevention-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Prevention report saved to ${reportFile}`);
  }

  findFiles(...extensions) {
    const files = [];
    
    const walkDir = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(this.projectRoot);
    return files;
  }
}

// Run the error prevention system
if (require.main === module) {
  const system = new ErrorPreventionSystem();
  system.runErrorPrevention().catch(console.error);
}

module.exports = ErrorPreventionSystem;