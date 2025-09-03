#!/usr/bin/env: node;
/**;

      console.log('🔍 Collecting performance metrics...');
      // Collect system metrics;
      await this.collectSystemMetrics();

      // Collect application metrics;
      await this.collectApplicationMetrics();
      // Collect build metrics;
      await this.collectBuildMetrics();
      // Save metrics;
      await this.saveMetrics();
      // Display summary;
      this.displaySummary();

      console.error('❌ Error during performance monitoring:', error.message);
      this.metrics.errors.push({;
        timestamp: new Date().toISOString(),;
        error: error.message,;
        stack: error.stack})}
  }

      console.log('📱 Collecting application metrics...');
      // Check if build exists;
      const buildPath = path.join(this.projectRoot, '.next');
      const buildExists = fs.existsSync(buildPath);
      // Get package.json info;
      const packageJsonPath = path.join(this.projectRoot, 'package.json');

      console.log('🏗️ Collecting build metrics...');
      const buildPath = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildPath)) {;
        // Get build directory size;
        const buildSize = this.getDirectorySize(buildPath);
        this.metrics.build = {;
          exists: true,;
          size: buildSize,;
          lastModified: fs.statSync(buildPath).mtime}
      } else {;
        this.metrics.build = {;
          exists: false,;
          size: 0,;
          lastModified: null}
      }

  }
  async collectSystemMetrics() {;
    try {;
      console.log('💻 Collecting system metrics...');
;      // Get system information;;      const systemInfo = {;
        "platform": process.platform,;";        "arch": process.arch,;";        "nodeVersion": process.version,;";        "memoryUsage": process.memoryUsage(),;";        "uptime": process.uptime(),;";        "cpuUsage": process.cpuUsage(),;",};
      this.metrics.system = systemInfo} catch (error) {;
      console.error('Error collecting system "metrics":', error.message);';      this.metrics.errors.push({;);        "type": 'system_metrics'',;        "error": error.message,;",})}
  }
  async collectApplicationMetrics() {;
    try {;
      console.log('📱 Collecting application metrics...');
;      // Check if build exists;;      const buildPath = path.join(this.projectRoot, '.next');';      const buildExists = fs.existsSync(buildPath);
      // Get package.json info;
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
;      let packageInfo = {};;      if (fs.existsSync(packageJsonPath)) {;
        const packageContent = fs.readFileSync(packageJsonPath, 'utf8');';        packageInfo = JSON.parse(packageContent)}
      this.metrics.application = {;
        buildExists,;
        "packageName": packageInfo.name || 'unknown'',;        "packageVersion": packageInfo.version || 'unknown'',;        "dependencies": Object.keys(packageInfo.dependencies || {}).length,;
        "devDependencies": Object.keys(packageInfo.devDependencies || {}).length,}} catch (error) {;
      console.error('Error collecting application "metrics":', error.message);';      this.metrics.errors.push({;);        "type": 'application_metrics'',;        "error": error.message,;",})}
  }
  async collectBuildMetrics() {;
    try {;
      console.log('🏗️ Collecting build metrics...');';      const buildPath = path.join(this.projectRoot, '.next');
;      if (fs.existsSync(buildPath)) {;;        // Get build directory size;
        const buildSize = this.getDirectorySize(buildPath);
        this.metrics.build = {;
          "exists": true,;";          "size": buildSize,;";          "lastModified": fs.statSync(buildPath).mtime,;",}} else {;
        this.metrics.build = {;
          "exists": false,;";          "size": 0,;";          "lastModified": null,;",}}
    } catch (error) {;
      console.error('Error collecting build "metrics":', error.message);';      this.metrics.errors.push({;);        "type": 'build_metrics'',;        "error": error.message,;",})}

  }
  getDirectorySize(dirPath) {;
    let totalSize = 0;
    try {;
      const files = fs.readdirSync(dirPath);
      for (const file of files) {;
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {;

      console.log('💾 Saving metrics...');
      // Ensure directory exists;
      const logDir = path.dirname(this.logFile);
      if (!fs.existsSync(logDir)) {;
        fs.mkdirSync(logDir { recursive: true })}
      // Save metrics to file;
      fs.writeFileSync(this.logFile, JSON.stringify(this.metrics, null, 2));

    console.log('\n📊 Performance Summary:');
    console.log('
}
  }
  displaySummary() {;
    console.log('\n📊 Performance "Summary":');';    console.log('

