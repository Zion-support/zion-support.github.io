
/**
 * Security Audit Script
 * Comprehensive security checks and monitoring
 */

import fs from 'fs';
import path from 'path';

export interface SecurityAuditResult {
  level: 'low' | 'medium' | 'high' | 'critical';
  category: string;
  message: string;
  recommendation: string;
  file?: string;
  line?: number;
}

export class SecurityAuditor {
  private static readonly DANGEROUS_PATTERNS = [
    {
      pattern: /eval\s*\(/g,
      level: 'critical',
      message: 'Use of eval() function detected',
      recommendation: 'Replace eval() with safer alternatives like Function constructor or JSON.parse'
    },
    {
      pattern: /innerHTML\s*=/g,
      level: 'high',
      message: 'Direct innerHTML assignment detected',
      recommendation: 'Use textContent or sanitize HTML before assignment'
    },
    {
      pattern: /document\.write/g,
      level: 'high',
      message: 'Use of document.write detected',
      recommendation: 'Replace with DOM manipulation methods'
    },
    {
      pattern: /\$\{.*\}/g,
      level: 'medium',
      message: 'Template literal with potential injection',
      recommendation: 'Sanitize template literal inputs'
    },
    {
      pattern: /localStorage\.setItem.*\+.*\+/g,
      level: 'medium',
      message: 'String concatenation in localStorage',
      recommendation: 'Use proper serialization methods'
    },
    {
      pattern: /window\[.*\]/g,
      level: 'low',
      message: 'Dynamic property access on window object',
      recommendation: 'Use explicit property access when possible'
    }
  ];

  static async auditFile(filePath: string): Promise<SecurityAuditResult[]> {
    const results: SecurityAuditResult[] = [];
    
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n');
      
      lines.forEach((line, index) => {
        this.DANGEROUS_PATTERNS.forEach(({ pattern, level, message, recommendation }) => {
          if (pattern.test(line)) {
            results.push({
              level,
              category: 'Code Security',
              message,
              recommendation,
              file: filePath,
              line: index + 1
            });
          }
        });
      });
      
    } catch (error) {
      console.error(`Error auditing file ${filePath}:`, error);
    }
    
    return results;
  }

  static async auditDirectory(dirPath: string): Promise<SecurityAuditResult[]> {
    const results: SecurityAuditResult[] = [];
    
    try {
      const files = fs.readdirSync(dirPath, { withFileTypes: true });
      
      for (const file of files) {
        const fullPath = path.join(dirPath, file.name);
        
        if (file.isDirectory()) {
          const subResults = await this.auditDirectory(fullPath);
          results.push(...subResults);
        } else if (file.name.endsWith('.ts') || file.name.endsWith('.tsx') || file.name.endsWith('.js') || file.name.endsWith('.jsx')) {
          const fileResults = await this.auditFile(fullPath);
          results.push(...fileResults);
        }
      }
      
    } catch (error) {
      console.error(`Error auditing directory ${dirPath}:`, error);
    }
    
    return results;
  }

  static generateReport(results: SecurityAuditResult[]): string {
    const critical = results.filter(r => r.level === 'critical');
    const high = results.filter(r => r.level === 'high');
    const medium = results.filter(r => r.level === 'medium');
    const low = results.filter(r => r.level === 'low');

    let report = `# Security Audit Report\n\n`;
    report += `Generated: ${new Date().toISOString()}\n\n`;
    report += `## Summary\n`;
    report += `- Critical: ${critical.length}\n`;
    report += `- High: ${high.length}\n`;
    report += `- Medium: ${medium.length}\n`;
    report += `- Low: ${low.length}\n\n`;

    if (critical.length > 0) {
      report += `## Critical Issues\n`;
      critical.forEach(result => {
        report += `### ${result.message}\n`;
        report += `**File:** ${result.file}:${result.line}\n`;
        report += `**Recommendation:** ${result.recommendation}\n\n`;
      });
    }

    if (high.length > 0) {
      report += `## High Priority Issues\n`;
      high.forEach(result => {
        report += `### ${result.message}\n`;
        report += `**File:** ${result.file}:${result.line}\n`;
        report += `**Recommendation:** ${result.recommendation}\n\n`;
      });
    }

    return report;
  }
}

export default SecurityAuditor;
