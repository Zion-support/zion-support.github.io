#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
=======
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
  console.log('\n Recommendations")
=======
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======

        if (stat.isDirectory()) {
          scanDir(fullPath)} else if (imageExtensions.includes(path.extname(item).toLowerCase())) {
          files.push(fullPath)}
      }
    };

    scanDir(dir);
    return files}

  async analyzeBundleSize() {
    this.log('📦 Analyzing bundle size...');
    
    try {
      const result = await this.runCommand('npm run analyze', 'Bundle Analysis');
      return result} catch (error) {
      this.log('⚠️ Bundle analysis not available');
      return { success: false, error: 'Bundle analysis not configured' }}
  }

  async generateSitemap() {
    this.log('🗺️ Generating sitemap...');
    
    try {
      const result = await this.runCommand('npm run sitemap', 'Sitemap Generation');
      return result} catch (error) {
      this.log('⚠️ Sitemap generation failed');
      return { success: false, error: error.message }}
  }

  async checkPerformance() {
    this.log('⚡ Checking performance...');
    
    const performanceChecks = {
      buildTime: await this.measureBuildTime(),
      bundleSize: await this.analyzeBundleSize(),
      imageOptimization: await this.optimizeImages()
    };

    return performanceChecks}

  async measureBuildTime() {
    this.log('⏱️ Measuring build time...');
    
    const startTime = Date.now();
    const result = await this.runCommand('npm run build', 'Build Time Measurement');
    const endTime = Date.now();
    
    const buildTime = endTime - startTime;
    this.log(`Build completed in ${buildTime}ms`);

    return {
      success: result.success,
      buildTime: buildTime,
      buildTimeSeconds: Math.round(buildTime / 1000)
    }}

  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalChecks: Object.keys(results).length,
        successful: Object.values(results).filter(r => r.success).length,
        failed: Object.values(results).filter(r => !r.success).length
      },
      results: results,
      recommendations: this.generateRecommendations(results)
    };

    const reportFile = path.join(this.reportsDir, 'app-optimization-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Optimization report generated: ${reportFile}`);
    return report}

  generateRecommendations(results) {
    const recommendations = [];

    if (results.buildTime && results.buildTime.buildTimeSeconds > 30) {
      recommendations.push({
        type: 'performance',
        message: 'Build time is slow. Consider optimizing dependencies and code splitting.',
        buildTime: results.buildTime.buildTimeSeconds
      })}

    if (results.imageOptimization && results.imageOptimization.filesFound > 20) {
      recommendations.push({
        type: 'images',
        message: 'Many images found. Consider implementing image optimization.',
        imageCount: results.imageOptimization.filesFound
      })}

    return recommendations}

  async run() {
    this.log('🎯 Starting App Optimization');
    
    const results = await this.checkPerformance();
    const report = await this.generateReport(results);

    this.log('🎉 App Optimization Completed');
    this.log(`📊 Summary: ${report.summary.successful}/${report.summary.totalChecks} checks successful`);
    
    if (report.recommendations.length > 0) {
      this.log('💡 Recommendations:');
      report.recommendations.forEach(rec => {
        this.log(`   - ${rec.message}`)})}

    return report}
}

// Run the optimizer
if (require.main === module) {
  const optimizer = new AppOptimizer();
  optimizer.run().catch(console.error)}

module.exports = AppOptimizer;