#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Sitemap Runner Automation Started');

async function generateSitemap() {
  try {
    console.log('🗺️ Generating sitemap...');
    
    const sitemapResults = [];
    
    // Check if sitemap generation script exists
    console.log('🔍 Checking for sitemap generation...');
    const sitemapScripts = [
      './scripts/generate-sitemap.js',
      './scripts/generate-sitemap.mjs',
      './scripts/generate-sitemap.cjs'
    ];
    
    let sitemapGenerated = false;
    for (const script of sitemapScripts) {
      if (fs.existsSync(script)) {
        try {
          execSync(`node ${script}`, { encoding: 'utf8' });
          sitemapResults.push({
            type: 'sitemap-generation',
            result: `Sitemap generated using ${script}`
          });
          sitemapGenerated = true;
          break;
        } catch (error) {
          console.log(`⚠️ Failed to run ${script}`);
        }
      }
    }
    
    if (!sitemapGenerated) {
      sitemapResults.push({
        type: 'sitemap-generation',
        result: 'No sitemap generation script found'
      });
    }
    
    // Check if sitemap.xml exists
    if (fs.existsSync('sitemap.xml')) {
      sitemapResults.push({
        type: 'sitemap-verification',
        result: 'Sitemap.xml file exists'
      });
    } else {
      sitemapResults.push({
        type: 'sitemap-verification',
        result: 'Sitemap.xml file not found'
      });
    }
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: sitemapResults.length,
      results: sitemapResults
    };
    
    fs.writeFileSync('sitemap-runner-report.json', JSON.stringify(report, null, 2));
    console.log('📊 Report generated: sitemap-runner-report.json');
    
  } catch (error) {
    console.error('❌ Error in sitemap runner:', error);
  }
}

// Run the automation
generateSitemap().then(() => {
  console.log('✅ Sitemap Runner Automation Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Sitemap Runner Automation Failed:', error);
  process.exit(1);
});