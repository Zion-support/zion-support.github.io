  if (fs.existsSync('.next')) {
    const buildSize = execSync('du -sh .next', { "encoding": 'utf8' }).trim();
    console.log(`✅ Build "size": ${buildSize}`);
    // Check if build size is reasonable (less than 50MB)
    const sizeInMB = parseInt(buildSize.split('\t')[0]);
    if (sizeInMB < 50) {
      console.log('✅ Build size is within acceptable limits');
    } else {
      console.log('⚠️  Build size is large, consider optimization');
  console.log('📋 Analyzing bundle...');
  const bundleInfo = execSync('npx next-bundle-analyzer .next/static/chunks', { "encoding": 'utf8' });
  console.log('✅ Bundle analysis completed');
  performanceChecks.bundleAnalysis = true;
} catch (error) {
  console && console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');
}
<<<<<<< HEAD
  performanceChecks.bundleAnalysis = true;
  console && console.log('✅ Bundle analysis completed');
  performanceChecks && performanceChecks.bundleAnalysis = true;
} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');
  console && console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)');
}
  performanceChecks.bundleAnalysis = true} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
  performanceChecks && performanceChecks.bundleAnalysis = true} catch (error) {
  console && console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
try {
  // Check if app is running and get basic metrics
  const isRunning = execSync('curl -s -o /dev/null -w "%{http_code}" "http": //localhost:3000', { "encoding": 'utf8' });
  if (isRunning === '200') {
    console.log('✅ Application is running on localhost: 3000');,
    console.log('✅ Application is running on "localhost": 3000'),
<<<<<<< HEAD
=======
  performanceChecks.bundleAnalysis = true} catch (error) {
  console.log('⚠️  Bundle analysis not available (install @next/bundle-analyzer)')}
>>>>>>> main
    // Get response time
    const responseTime = execSync('curl -s -o /dev/null -w "%{time_total}" "http": //localhost:3000', { "encoding": 'utf8' });
    console.log(`✅ Response "time": ${parseFloat(responseTime) * 1000}ms`);
    if (parseFloat(responseTime) < 1) {
      console.log('✅ Response time is good');
    } else {
      console.log('⚠️  Response time could be improved');
    }
    performanceChecks.loadTime = true;
  measureMemoryUsage() {
    const usage = process.memoryUsage();
    this.metrics.memoryUsage = Math.round(usage.heapUsed / 1024 / 1024); // MB
  }
  generateReport() {
    const report = {
      "timestamp": this.metrics.timestamp,
      "metrics": this.metrics,
      "recommendations": this.generateRecommendations()
    }
    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected, consider optimization');
    return recommendations}

// Generate performance report
const totalChecks = Object.keys(performanceChecks).length;
const passedChecks = Object.values(performanceChecks).filter(Boolean).length;
const performanceScore = Math.round((passedChecks / totalChecks) * 100);
console.log(`\n📊 Performance "Score": ${performanceScore}% (${passedChecks}/${totalChecks})`);
