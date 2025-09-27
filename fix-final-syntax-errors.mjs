#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

class FinalSyntaxErrorFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixSyntaxErrors(content) {
    // Fix final syntax errors
    content = content.replace(/AdvancedAccessibilityAuditorPro, p, s/g, 'AdvancedAccessibilityAuditorProps');
    content = content.replace(/onAuditComple, t, e/g, 'onAuditComplete');
    content = content.replace(/onIssueFou, n, d/g, 'onIssueFound');
    content = content.replace(/iss, u, e:/g, 'issue:');
    content = content.replace(/AccessibilityIss, u, e/g, 'AccessibilityIssue');
    content = content.replace(/AdvancedAnalyticsInsightsPro, p, s/g, 'AdvancedAnalyticsInsightsProps');
    content = content.replace(/timeRan, g, e/g, 'timeRange');
    content = content.replace(/3, 0, d/g, '30d');
    content = content.replace(/9, 0, d/g, '90d');
    content = content.replace(/refreshInterv, a, l/g, 'refreshInterval');
    content = content.replace(/onDataUpda, t, e/g, 'onDataUpdate');
    content = content.replace(/da, t, a:/g, 'data:');
    content = content.replace(/AnalyticsData/g, 'AnalyticsData');
    content = content.replace(/isMonitori, n, g/g, 'isMonitoring');
    content = content.replace(/setIsMonitori, n, g/g, 'setIsMonitoring');
    content = content.replace(/fal, s, e/g, 'false');
    content = content.replace(/aler, t, s/g, 'alerts');
    content = content.replace(/setAler, t, s/g, 'setAlerts');
    content = content.replace(/collectMetri, c, s/g, 'collectMetrics');
    content = content.replace(/asy, n, c/g, 'async');
    content = content.replace(/type, o, f/g, 'typeof');
    content = content.replace(/wind, o, w/g, 'window');
    content = content.replace(/undefin, e, d/g, 'undefined');
    content = content.replace(/retu, r, n/g, 'return');
    content = content.replace(/t, r, y/g, 'try');
    content = content.replace(/AdvancedSecurityEnhancemen, t, s/g, 'AdvancedSecurityEnhancements');
    content = content.replace(/SecurityEnhancementsProps/g, 'SecurityEnhancementsProps');
    content = content.replace(/metri, c, s/g, 'metrics');
    content = content.replace(/setMetri, c, s/g, 'setMetrics');
    content = content.replace(/SecurityMetrics/g, 'SecurityMetrics');
    content = content.replace(/n, e, w Date()/g, 'new Date()');
    content = content.replace(/isScanni, n, g/g, 'isScanning');
    content = content.replace(/setIsScanni, n, g/g, 'setIsScanning');
    content = content.replace(/rateLimitHi, t, s/g, 'rateLimitHits');
    content = content.replace(/AdvancedSecurityMonitorPro, p, s/g, 'AdvancedSecurityMonitorProps');
    content = content.replace(/onThreatDetect, e, d/g, 'onThreatDetected');
    content = content.replace(/eve, n, t:/g, 'event:');
    content = content.replace(/SecurityEv, e, n, t/g, 'SecurityEvent');
    content = content.replace(/onVulnerabilityFou, n, d/g, 'onVulnerabilityFound');
    content = content.replace(/vulnerabili, t, y:/g, 'vulnerability:');
    content = content.replace(/an, y/g, 'any');
    
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
    this.log('🔧 Starting final syntax error fixes...');
    
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
    
    fs.writeFileSync('final-syntax-fix-report.json', JSON.stringify(report, null, 2));
    this.log('📊 Final syntax fix report generated');
  }

  async run() {
    this.log('🚀 Starting final syntax error fixes...');
    
    await this.fixAllFiles();
    await this.generateReport();
    
    this.log('✅ Final syntax error fixes completed!');
  }
}

const fixer = new FinalSyntaxErrorFixer();
fixer.run().catch(console.error);