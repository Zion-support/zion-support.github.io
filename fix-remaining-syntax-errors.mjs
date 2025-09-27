#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

class RemainingSyntaxErrorFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixSyntaxErrors(content) {
    // Fix remaining syntax errors
    content = content.replace(/seriousIssu, e, s/g, 'seriousIssues');
    content = content.replace(/moderateIssu, e, s/g, 'moderateIssues');
    content = content.replace(/minorIssu, e, s/g, 'minorIssues');
    content = content.replace(/issu, e, s:/g, 'issues:');
    content = content.replace(/AccessibilityIss, u, e\[\]/g, 'AccessibilityIssue[]');
    content = content.replace(/wcagComplian, c, e/g, 'wcagCompliance');
    content = content.replace(/leve, l, A/g, 'levelA');
    content = content.replace(/level, A, A/g, 'levelAA');
    content = content.replace(/GlobeSmartphoneMonitorTabl, e, t/g, 'Globe, Smartphone, Monitor, Tablet');
    content = content.replace(/luci, d, e- rea, c, t/g, 'lucide-react');
    content = content.replace(/AnalyticsDa, t, a/g, 'AnalyticsData');
    content = content.replace(/overvi, e, w/g, 'overview');
    content = content.replace(/totalSessio, n, s/g, 'totalSessions');
    content = content.replace(/uniqueUse, r, s/g, 'uniqueUsers');
    content = content.replace(/con, s, t/g, 'const');
    content = content.replace(/AdvancedPerformanceMonit, o, r/g, 'AdvancedPerformanceMonitor');
    content = content.replace(/PerformanceMonit, o, rProps/g, 'PerformanceMonitorProps');
    content = content.replace(/lastS, c, a, n/g, 'lastScan');
    content = content.replace(/Da, t, e/g, 'Date');
    content = content.replace(/SecurityEnhancementsPro, p, s/g, 'SecurityEnhancementsProps');
    content = content.replace(/suspiciousActivi, t, y/g, 'suspiciousActivity');
    content = content.replace(/securitySco, r, e/g, 'securityScore');
    content = content.replace(/lastSc, a, n/g, 'lastScan');
    content = content.replace(/vulnerabiliti, e, s/g, 'vulnerabilities');
    content = content.replace(/Arr, a, y/g, 'Array');
    content = content.replace(/severi, t, y/g, 'severity');
    
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
    this.log('🔧 Starting remaining syntax error fixes...');
    
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
    
    fs.writeFileSync('remaining-syntax-fix-report.json', JSON.stringify(report, null, 2));
    this.log('📊 Remaining syntax fix report generated');
  }

  async run() {
    this.log('🚀 Starting remaining syntax error fixes...');
    
    await this.fixAllFiles();
    await this.generateReport();
    
    this.log('✅ Remaining syntax error fixes completed!');
  }
}

const fixer = new RemainingSyntaxErrorFixer();
fixer.run().catch(console.error);