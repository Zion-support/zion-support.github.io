#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

class SyntaxErrorFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixSyntaxErrors(content) {
    // Fix common syntax errors
    content = content.replace(/colu, m, n/g, 'column');
    content = content.replace(/AccessibilityMetri, c, s/g, 'AccessibilityMetrics');
    content = content.replace(/sco, r, e/g, 'score');
    content = content.replace(/totalIssu, e, s/g, 'totalIssues');
    content = content.replace(/criticalIssu, e, s/g, 'criticalIssues');
    content = content.replace(/E, y, e,/g, 'Eye,');
    content = content.replace(/MousePoint, e, r,/g, 'MousePointer,');
    content = content.replace(/Clock,/g, 'Clock,');
    content = content.replace(/BarChar, t, 3,/g, 'BarChart3,');
    content = content.replace(/PieCha, r, t,/g, 'PieChart,');
    content = content.replace(/Activi, t, y,/g, 'Activity,');
    content = content.replace(/Targ, e, t,/g, 'Target,');
    content = content.replace(/renderT, i, m, e/g, 'renderTime');
    content = content.replace(/PerformanceMonitorPro, p, s/g, 'PerformanceMonitorProps');
    content = content.replace(/onMetricsUpda, t, e/g, 'onMetricsUpdate');
    content = content.replace(/PerformanceMetri, c, s/g, 'PerformanceMetrics');
    content = content.replace(/vo, i, d/g, 'void');
    content = content.replace(/showDashboa, r, d/g, 'showDashboard');
    content = content.replace(/classNa, m, e/g, 'className');
    content = content.replace(/Shie, l, d,/g, 'Shield,');
    content = content.replace(/Lo, c, k,/g, 'Lock,');
    content = content.replace(/E, y, e,/g, 'Eye,');
    content = content.replace(/AlertTriangle/g, 'AlertTriangle');
    content = content.replace(/CheckCircle/g, 'CheckCircle');
    content = content.replace(/XCircle/g, 'XCircle');
    content = content.replace(/SecurityMetri, c, s/g, 'SecurityMetrics');
    content = content.replace(/threatLev, e, l/g, 'threatLevel');
    content = content.replace(/critic, a, l/g, 'critical');
    content = content.replace(/activeThrea, t, s/g, 'activeThreats');
    content = content.replace(/blockedReques, t, s/g, 'blockedRequests');
    content = content.replace(/useStateuseEffectuseCallback/g, 'useState, useEffect, useCallback');
    content = content.replace(/motionAnimatePresence/g, 'motion, AnimatePresence');
    content = content.replace(/SecurityEve, n, t/g, 'SecurityEvent');
    content = content.replace(/thre, a, t/g, 'threat');
    content = content.replace(/succe, s, s/g, 'success');
    content = content.replace(/warning/g, 'warning');
    content = content.replace(/info/g, 'info');
    
    return content;
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      content = this.fixSyntaxErrors(content);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed syntax errors in: ${filePath}`);
      }
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      this.errors.push(`${filePath}: ${error.message}`);
    }
  }

  async fixAllFiles() {
    this.log('🔧 Starting comprehensive syntax error fixes...');
    
    try {
      const files = await glob('src/components/*.tsx');
      
      for (const file of files) {
        this.fixFile(file);
      }
      
      this.log(`✅ Fixed ${this.fixedFiles.length} files`);
      
      if (this.errors.length > 0) {
        this.log(`❌ ${this.errors.length} errors encountered`);
        this.errors.forEach(error => this.log(`  - ${error}`));
      }
      
    } catch (error) {
      this.log(`❌ Error processing files: ${error.message}`);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      summary: {
        totalFixed: this.fixedFiles.length,
        totalErrors: this.errors.length
      }
    };
    
    fs.writeFileSync('syntax-fix-report.json', JSON.stringify(report, null, 2));
    this.log('📊 Syntax fix report generated');
  }

  async run() {
    this.log('🚀 Starting comprehensive syntax error fixes...');
    
    await this.fixAllFiles();
    await this.generateReport();
    
    this.log('✅ Comprehensive syntax error fixes completed!');
  }
}

const fixer = new SyntaxErrorFixer();
fixer.run().catch(console.error);