#!/usr/bin/env node
/**
 * Database Optimizer Script for PM2
 * Optimizes database queries and performance
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class DatabaseOptimizer {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'database-optimizer';
    this.logFile = path.join(__dirname, '../../logs/pm2/database-optimizer.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async analyzeQueries() {
    this.log('Analyzing database queries...');
    try {
      const queryFiles = this.findQueryFiles();
      const issues = [];

      for (const file of queryFiles) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const fileIssues = this.analyzeQueryFile(content, file);
          issues.push(...fileIssues);
        } catch (err) {
          this.log(`Error reading ${file}: ${err.message}`);
        }
      }

      this.log(`Found ${issues.length} potential database optimization issues`);
      return {
        analyzed: true,
        issues,
        totalIssues: issues.length,
        filesAnalyzed: queryFiles.length
      };
    } catch (error) {
      this.log(`Query analysis failed: ${error.message}`);
      return { error: error.message };
    }
  }

  findQueryFiles() {
    const queryFiles = [];
    const extensions = ['.js', '.ts', '.jsx', '.tsx'];
    
    const scanDir = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDir(filePath);
          } else if (stat.isFile() && extensions.some(ext => file.endsWith(ext))) {
            // Check if file contains database-related code
            try {
              const content = fs.readFileSync(filePath, 'utf8');
              if (this.containsDatabaseCode(content)) {
                queryFiles.push(filePath);
              }
            } catch (err) {
              // Skip files that can't be read
            }
          }
        }
      } catch (err) {
        // Skip directories that can't be read
      }
    };

    scanDir(process.cwd());
    return queryFiles;
  }

  containsDatabaseCode(content) {
    const dbKeywords = [
      'SELECT', 'INSERT', 'UPDATE', 'DELETE',
      'CREATE', 'DROP', 'ALTER',
      'FROM', 'WHERE', 'JOIN', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN',
      'GROUP BY', 'ORDER BY', 'HAVING',
      'supabase', 'prisma', 'mongoose', 'sequelize',
      'database', 'query', 'sql'
    ];

    return dbKeywords.some(keyword => 
      content.toLowerCase().includes(keyword.toLowerCase())
<<<<<<< HEAD
    )
  analyzeQueryFile($2) {
    const lines = content.split('\n')
=======
    );
  }

  analyzeQueryFile(content, filePath) {
    const issues = [];
    const lines = content.split('\n');

>>>>>>> origin/chore/fix-lint-and-merge
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      const trimmedLine = line.trim();

      // Check for N+1 query patterns
      if (trimmedLine.includes('forEach') && trimmedLine.includes('query')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'n_plus_one_query',
          severity: 'high',
          message: 'Potential N+1 query pattern detected'
        });
      }

      // Check for missing indexes
      if (trimmedLine.includes('WHERE') && !trimmedLine.includes('INDEX')) {
        const whereMatch = trimmedLine.match(/WHERE\s+(\w+)\s*=/);
        if (whereMatch) {
          issues.push({
            file: filePath,
            line: lineNumber,
            type: 'missing_index',
            severity: 'medium',
            message: `Consider adding index for column: ${whereMatch[1]}`
          });
        }
      }

      // Check for SELECT *
      if (trimmedLine.includes('SELECT *')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'select_all',
          severity: 'low',
          message: 'Consider selecting specific columns instead of *'
        });
      }

      // Check for missing LIMIT
      if (trimmedLine.includes('SELECT') && !trimmedLine.includes('LIMIT') && !trimmedLine.includes('COUNT')) {
        issues.push({
          file: filePath,
          line: lineNumber,
          type: 'missing_limit',
          severity: 'medium',
          message: 'Consider adding LIMIT clause for large result sets'
        });
      }
    });

    return issues;
  }

  async checkConnectionPooling() {
    this.log('Checking database connection pooling...');
    try {
      const configFiles = ['next.config.js', 'next.config.ts', 'vite.config.js'];
      let poolingConfigured = false;

      for (const file of configFiles) {
        if (fs.existsSync(file)) {
<<<<<<< HEAD
=======
          const content = fs.readFileSync(file, 'utf8');
>>>>>>> origin/chore/fix-lint-and-merge
          if (content.includes('pool') || content.includes('connectionLimit')) {
            poolingConfigured = true;
            break;
          }
        }
      }

      return {
        configured: poolingConfigured,
        recommendation: poolingConfigured 
          ? 'Connection pooling appears to be configured'
          : 'Consider implementing database connection pooling'
      };
    } catch (error) {
      this.log(`Connection pooling check failed: ${error.message}`);
      return { error: error.message };
    }
  }

  async generateOptimizationReport() {
    this.log('Generating database optimization report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      processName: this.processName,
      queries: await this.analyzeQueries(),
      connectionPooling: await this.checkConnectionPooling(),
      recommendations: []
    };

    // Generate recommendations
    if (report.queries.totalIssues > 0) {
      const highIssues = report.queries.issues.filter(i => i.severity === 'high').length;
      if (highIssues > 0) {
        report.recommendations.push(`Address ${highIssues} high-priority database issues`);
      }
    }

    if (!report.connectionPooling.configured) {
      report.recommendations.push('Implement database connection pooling for better performance');
    }

    if (report.queries.issues.some(i => i.type === 'n_plus_one_query')) {
      report.recommendations.push('Optimize N+1 query patterns by using batch queries or joins');
    }

    const reportFile = path.join(__dirname, '../../logs/pm2/database-optimization-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Database optimization report saved to ${reportFile}`);

    return report;
  }

  async start() {
    this.log(`${this.processName} started`);
    try {
      const report = await this.generateOptimizationReport();
      
      if (report.recommendations.length === 0) {
        this.log('Database optimization completed - no issues found');
      } else {
        this.log(`Database optimization completed - ${report.recommendations.length} recommendations generated`);
        report.recommendations.forEach((rec, index) => {
          this.log(`Recommendation ${index + 1}: ${rec}`);
        });
      }
    } catch (error) {
      this.log(`Database optimization error: ${error.message}`);
    }
  }
}

// Start the service
if (require.main === module) {
  const databaseOptimizer = new DatabaseOptimizer();
  databaseOptimizer.start().catch(console.error);
}

module.exports = DatabaseOptimizer;