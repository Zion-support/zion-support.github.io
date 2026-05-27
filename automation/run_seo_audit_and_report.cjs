#!/usr/bin/env node
const AISEOMetaAuditor = require('./ai-seo-meta-auditor.cjs');

async function run() {
  const auditor = new AISEOMetaAuditor();
  const report = await auditor.runAudit();
  const { summary, pages } = report;
  const { totalPages, averageScore, pagesWithErrors, pagesWithWarnings, perfectPages } = summary;
  
  let message = `🔍 *SEO Audit Report*\n`;
  message += `📊 Score: ${averageScore}/100\n`;
  message += `📄 Pages: ${totalPages}\n`;
  message += `✅ Perfect: ${perfectPages}\n`;
  message += `⚠️ Warnings: ${pagesWithWarnings}\n`;
  message += `❌ Errors: ${pagesWithErrors}\n`;
  
  if (pagesWithErrors > 0) {
    message += `\n*Top 5 issues:*\n`;
    // Collect all error messages
    const errorCounts = {};
    pages.forEach(page => {
      page.issues.forEach(issue => {
        if (issue.severity === 'error') {
          errorCounts[issue.message] = (errorCounts[issue.message] || 0) + 1;
        }
      });
    });
    // Sort by count descending
    const sortedErrors = Object.entries(errorCounts).sort((a, b) => b[1] - a[1]);
    sortedErrors.slice(0, 5).forEach(([msg, count]) => {
      message += `• ${msg} (${count} pages)\n`;
    });
  }
  
  // Send via Hermes terminal tool? Actually we are in a cron job, we can use the send_message tool if we load the skill.
  // But we are in a terminal command, we can just output and the cron job can capture it and send via its own mechanism.
  // Instead, we will output the message and rely on the cron job's delivery mechanism.
  console.log(message);
  
  // Also write to a file for debugging
  const fs = require('fs');
  const path = require('path');
  const logPath = path.join(__dirname, 'logs', 'seo-audit-report.txt');
  fs.mkdirSync(path.dirname(logPath), { recursive: true });
  fs.appendFileSync(logPath, new Date().toISOString() + '\\n' + message + '\\n---\\n');
}

run().catch(console.error);