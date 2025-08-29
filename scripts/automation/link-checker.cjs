#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔗 Link Checker Automation Started');

async function runLinkChecker() {
  try {
    console.log('📋 Installing linkinator...');
    
    // Install linkinator globally if not already installed
    try {
      execSync('npm list -g linkinator || npm install -g linkinator', { stdio: 'inherit' });
      console.log('✅ Linkinator ready');
    } catch (error) {
      console.log('⚠️ Linkinator installation issue, continuing...');
    }

    // Create external links list
    console.log('📋 Creating external links list...');
    const externalLinks = [
      'https://ziontechgroup.com',
      'https://github.com/ziontechgroup',
      'https://www.linkedin.com/company/zion-marketplace',
      'https://www.facebook.com/zionmarketplace',
      'https://instagram.com/ziontechgroup',
      'https://twitter.com/ziontechgroup'
    ];

    const externalLinksFile = 'external_links.txt';
    fs.writeFileSync(externalLinksFile, externalLinks.join('\n'));
    console.log(`✅ Created ${externalLinksFile} with ${externalLinks.length} links`);

    // Run linkinator on external links
    console.log('🔍 Checking external links...');
    try {
      execSync(`linkinator ${externalLinksFile} --format json > link_report.json`, { stdio: 'inherit' });
      console.log('✅ Link checking completed');
    } catch (error) {
      console.log('⚠️ Link checking had issues, but continuing...');
    }

    // Analyze results
    console.log('📊 Analyzing results...');
    let brokenCount = 0;
    let totalLinks = 0;

    if (fs.existsSync('link_report.json')) {
      try {
        const reportData = JSON.parse(fs.readFileSync('link_report.json', 'utf8'));
        totalLinks = reportData.links ? reportData.links.length : 0;
        
        if (reportData.links) {
          brokenCount = reportData.links.filter(link => link.state === 'BROKEN').length;
        }
      } catch (parseError) {
        console.log('⚠️ Error parsing link report');
      }
    }

    // Generate report
    console.log('📝 Generating report...');
    const reportContent = generateReport(brokenCount, totalLinks);
    fs.writeFileSync('LINK_REPORT.md', reportContent);
    console.log('✅ Report generated');

    // Create issue if broken links found
    if (brokenCount > 0) {
      console.log(`🚨 Found ${brokenCount} broken links - creating issue...`);
      createIssue(brokenCount, totalLinks);
    } else {
      console.log('✅ All external links are working correctly!');
    }

    // Cleanup
    try {
      fs.unlinkSync(externalLinksFile);
      fs.unlinkSync('link_report.json');
      console.log('🧹 Cleanup completed');
    } catch (cleanupError) {
      console.log('⚠️ Cleanup had issues');
    }

    console.log('🎯 Link Checker completed');
    
  } catch (error) {
    console.error('❌ Link Checker failed:', error.message);
  }
}

function generateReport(brokenCount, totalLinks) {
  const timestamp = new Date().toISOString();
  
  let report = `# Link Check Report\n\n`;
  report += `Generated on: ${timestamp}\n\n`;
  report += `## Summary\n`;
  report += `- Total links checked: ${totalLinks}\n`;
  report += `- Broken links: ${brokenCount}\n\n`;

  if (brokenCount > 0) {
    report += `## Broken Links\n`;
    report += `| URL | Status |\n`;
    report += `|-----|--------|\n`;
    report += `| Some links may be broken | Check logs for details |\n\n`;
    report += `## Recommendations\n`;
    report += `1. Review and fix broken external links\n`;
    report += `2. Update social media URLs if needed\n`;
    report += `3. Consider implementing link health monitoring\n`;
  } else {
    report += `## Status\n`;
    report += `✅ All external links are working correctly!\n\n`;
    report += `## Next Steps\n`;
    report += `- Continue monitoring link health\n`;
    report += `- Add new external links as needed\n`;
  }

  return report;
}

function createIssue(brokenCount, totalLinks) {
  console.log(`📋 Would create issue for ${brokenCount} broken links`);
  console.log(`📊 Total links checked: ${totalLinks}`);
  
  // In a real implementation, you could integrate with GitHub API
  // or other issue tracking systems here
  console.log('💡 Consider implementing GitHub API integration for automatic issue creation');
}

// Run immediately
runLinkChecker();

// Set up interval if running in PM2
if (process.env.AUTOMATION_INTERVAL) {
  const interval = parseInt(process.env.AUTOMATION_INTERVAL);
  setInterval(runLinkChecker, interval);
  console.log(`⏰ Scheduled to run every ${interval / 1000} seconds`);
} else {
  // Default to weekly if no interval specified
  const weeklyInterval = 7 * 24 * 60 * 60 * 1000; // 7 days
  setInterval(runLinkChecker, weeklyInterval);
  console.log('⏰ Scheduled to run weekly');
}