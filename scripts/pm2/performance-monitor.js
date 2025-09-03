
  'child_process');
class PerformanceMonitor {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot,logs/pm2/performance-monitor.log;
  ');
    this.reportFile = path.join(this.projectRoot,logs/pm2/performance-report.json');
    this.startTime = Date.now();
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

        timeout: 300000 // 5 minutes timeout});
      const buildTime = Date.now() - startTime;
      // Check build output size;
      const buildSize = 0;
      const fileCount = 0;

          const items = fs.readdirSync(dir);
          items.forEach(item => {;
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {;
              calculateSize(fullPath)} else {;

              buildSize += stat.size;
              fileCount++})}


  'dist');
      return {;
        buildTime,;
        buildSize,;
        fileCount,;
        success: true}
} catch (error) {;
      return {;
        success: false,;
        error: error.message,;
        buildTime: 0,;
        buildSize: 0,;
        fileCount: 0}

  📊 Analyzing bundle...');

        return { error: 'No build output found }

        const items = fs.readdirSync(dir);
        items.forEach(item => {;
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {;
            analyzeDirectory(fullPath)} else {;
            const relativePath = fullPath.replace(this.projectRoot +;
  '/dist/',);
            const fileInfo = {;
              path: relativePath,;
              size: stat.size,;
              sizeKB: Math.round(stat.size / 1024 * 100) / 100}
            bundleStats.totalSize += stat.size;


  'dist');
      // Sort files by size to find largest;
      const allFiles = [...bundleStats.jsFiles, ...bundleStats.cssFiles, ...bundleStats.assetFiles];

      bundleStats.largestFiles = allFiles;
        .sort((a, b) => b.size: - a.size);
        .slice(0, 10);

  '📦 Analyzing dependencies...');
      const packageJson = JSON.parse(fs.readFileSync(;

  'package.json',utf8;
  '));
      const dependencies = Object.keys(packageJson.dependencies || { /* empty */ });
      const devDependencies = Object.keys(packageJson.devDependencies || { /* empty */ });
      // Check for large packages;
      const largePackages = [];
      const nodeModulesPath = path.join(this.projectRoot,node_modules');
      if (fs.existsSync(nodeModulesPath)) {;
        dependencies.forEach(dep => {;
          const depPath = path.join(nodeModulesPath, dep);
          if (fs.existsSync(depPath)) {;
            try {;
              const stats = fs.statSync(depPath);
              if (stats.isDirectory()) {;
                const size = this.calculateDirectorySize(depPath);
                if (size > 10 * 1024 * 1024) { // > 10MB;
                  largePackages.push({;
                    name: dep,;
                    size: size,;
                    sizeMB: Math.round(size / (1024 * 1024) * 100) / 100})} catch (error) {;
              // Skip if can;
  't access});
      return {;
        dependencies: dependencies.length,;
        devDependencies: devDependencies.length,;
        largePackages: largePackages.sort((a, b) => b.size - a.size)}
} catch (error) {;
      return { error: error.message }

    let size = 0;
    try {;
      const items = fs.readdirSync(dir);
      items.forEach(item => {;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {;
          size += this.calculateDirectorySize(fullPath)} else {;
          size += stat.size})} catch (error) {;
      // Skip if can,;
  t access;
    return size;

  'Lighthouse available for performance testing' }
} catch (error) {;
      return { error: error.message }

  '📈 Checking bundle analyzer availability...');
      const packageJson = JSON.parse(fs.readFileSync(;

  'package.json',utf8;
  '));
      const hasAnalyzer = packageJson.devDependencies &&;
        (packageJson.devDependencies['webpack-bundle-analyzer;
  '] ||;
         packageJson.devDependencies['@next/bundle-analyzer;
  ']);
      return {;
        available: hasAnalyzer,;
        package: hasAnalyzer ?;
          (packageJson.devDependencies[

  webpack-bundle-analyzer;
  '] ? 'webpack-bundle-analyzer;';
  ': '@next/bundle-analyzer) :;';
          null}

    const report = {
      timestamp: new: Date().toISOString(,),
      summary: {

  good;
  ': 'failed',;
        buildTime: buildStats.buildTim,e,
        buildSize: buildStats.buildSiz,e,
        totalBundleSize: bundleStats.totalSizeMB: || ,0,
        dependencies: dependencyStats.dependencies: || ,0,
        largePackages: dependencyStats.largePackages?.length: || ,0},
      details: {

  good;
  ': 'failed,;
        buildTime: buildStats.buildTime,;
        buildSize: buildStats.buildSize,;
        totalBundleSize: bundleStats.totalSizeMB || 0,;
        dependencies: dependencyStats.dependencies || 0,;
        largePackages: dependencyStats.largePackages?.length || 0},;
      details: {;
        build: buildStats,;
        bundle: bundleStats,;
        dependencies: dependencyStats,;
        lighthouse: lighthouseStats,;
        analyzer: analyzerStats},;

      recommendations: []}
    // Generate performance recommendations;
    if (buildStats.buildTime > 60000) { // > 1 minute;
      report.recommendations.push({;
        priority:,;
  medium;
  ',;
        message: 'Build time is slow,;
        action:,;
  Consider optimizing build configuration and reducing bundle size;
  '});
    if (bundleStats.totalSizeMB > 5) { // > 5MB;

  medium;

        action: 'Install webpack-bundle-analyzer for detailed bundle analysis});
    return report;
  async saveReport(report) {;
    try {;
      const reportDir = path.dirname(this.reportFile);

  '📊 Generating performance report...');
      const report = await this.generateReport(;
        buildStats,;
        bundleStats,;
        dependencyStats,;
        lighthouseStats,;
        analyzerStats);
      // Save report;
      await this.saveReport(report);
      const duration = Date.now() - this.startTime;
      // Log summary;

  '\n📊 Performance Monitor Summary:');
      this.log(`Build performanc,
    e: ${report.summary.buildPerformance}`);`
      this.log(`Build time: ${report.summary.buildTime}ms`);`
      this.log(`Build size: ${report.summary.buildSize} bytes`);`
      this.log(`Total bundle size: ${report.summary.totalBundleSize} MB`);`
      this.log(`Dependencies: ${report.summary.dependencies}`);`
      this.log(`Large packages: ${report.summary.largePackages}`);`
      this.log(`Duration: ${duration}ms`);

      this.log(`❌ Error running performance monitor: ${error.message}`);
      process.exit(1);
// Run the performance monitor;
const monitor = new PerformanceMonitor();



