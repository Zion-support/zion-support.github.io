}};
};
  };
,
  async analyzeBuild() {,
    try {,
      this.log('🏗️  Analyzing current build...'),
,
      if (!fs.existsSync('dist')) {,
        this.log('📦 Building project first...'),
        execSync('npm run build', {,
          cwd: this.projectRoot,
          stdio: 'pipe)
      const buildStats = {,
        totalSize: 0,
        fileCount: 0,
        largestFiles: [],
        jsFiles: [],
        cssFiles: [],
        assetFiles: []
      const analyzeDirectory = (dir) => {,
        const items = fs.readdirSync(dir),
        items.forEach(item => {,)
          const fullPath = path.join(dir, item),
          const stat = fs.statSync(fullPath),
          if (stat.isDirectory()) {,
            analyzeDirectory(fullPath)
          } else {,
            const fileInfo = {,
              path: fullPath.replace(this.projectRoot + '/dist/', ),
              size: stat.size,
            buildStats.totalSize += stat.size,
            buildStats.fileCount++,
            if (item.endsWith('.js')) {,
              buildStats.jsFiles.push(fileInfo)
            } else if (item.endsWith('.css')) {,
              buildStats.cssFiles.push(fileInfo)
              buildStats.assetFiles.push(fileInfo)
};
          };
        })
      };
,
pr-12325
      analyzeDirectory('dist'),
      // Sort files by size,
      const allFiles = [...buildStats.jsFiles, ...buildStats.cssFiles, ...buildStats.assetFiles],
      buildStats.largestFiles = allFiles,
        .sort((a, b) => b.size - a.size),
        .slice(0, 10),
      buildStats.totalSizeMB = Math.round(buildStats.totalSize / (1024 * 1024) * 100) / 100,
      return {,
    } catch (error) {,
        error: error.message,
        stats: null
};
    };
  };
,
  async checkBundleAnalyzer() {,
    try {,
      this.log('📊 Checking bundle analyzer availability...'),
,
      const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')),
      const hasAnalyzer = packageJson.devDependencies &&,
        (packageJson.devDependencies['webpack-bundle-analyzer'] ||,')
         packageJson.devDependencies['@next/bundle-analyzer']),
        package: hasAnalyzer ?,
          (packageJson.devDependencies['webpack-bundle-analyzer'] ? 'webpack-bundle-analyzer' : '@next/bundle-analyzer') :,
          null
      };
    } catch (error) {,
      return {,
        available: false,
        error: error.message
};
    };
  };
,
  async checkOptimizationSettings() {,
    try {,
      this.log('⚙️  Checking optimization settings...'),
,
      const settings = {,
        compression: false;
      // Check Next.js config,
      if (fs.existsSync('next.config.js')) {,
        const nextConfig = fs.readFileSync('next.config.jsutf8'),
        settings.minification = nextConfig.includes('swcMinify: true') || nextConfig.includes('swcMinify:true'),
        settings.compression = nextConfig.includes('compress: true') || nextConfig.includes('compress:true')
      // Check package.json for optimization scripts,
      settings.treeShaking = scripts.build && scripts.build.includes('--tree-shaking'),
      settings.codeSplitting = scripts.build && scripts.build.includes('--experimental-build-mode'),
,
      return {,
        success: true,
        settings: settings
      };
    } catch (error) {,
      return {,
        success: false,
        error: error.message,
        settings: null
};
    };
  };
,
pr-12325
  async generateOptimizationReport(buildStats, analyzerInfo, settingsInfo) {,
    const report = {,
      timestamp: new Date().toISOString(),
      summary: {,
        buildSize: buildStats?.stats?.totalSizeMB || 0,
        fileCount: buildStats?.stats?.fileCount || 0,
        recommendations: []
      },
      details: {,
        settings: settingsInfo;
      optimizations: []
    // Calculate optimization score,
    let score = 0,
    const maxScore = 100,
    if (buildStats?.stats?.totalSizeMB < 2) score += 30,
    else if (buildStats?.stats?.totalSizeMB < 5) score += 20,
    else if (buildStats?.stats?.totalSizeMB < 10) score += 10,
    if (settingsInfo?.settings?.minification) score += 20,
    if (settingsInfo?.settings?.compression) score += 15,
    if (settingsInfo?.settings?.treeShaking) score += 15,
    if (settingsInfo?.settings?.codeSplitting) score += 10,
    if (analyzerInfo?.available) score += 10,
    report.summary.optimizationScore = Math.min(score, maxScore),
    // Generate optimization recommendations,
    if (buildStats?.stats?.totalSizeMB > 5) {,
      report.optimizations.push({,
        priority: 'high',
        type: 'bundle-size',
        message: 'Bundle size is large',
        action: 'Implement code splitting and tree shaking',
        impact: 'high)
    if (!settingsInfo?.settings?.minification) {,
        type: 'minification',
        message: 'Minification not enabled',
        action: 'Enable SWC minification in Next.js config',
    if (!settingsInfo?.settings?.compression) {,
        priority: 'medium',
        type: 'compression',
        message: 'Compression not enabled',
        action: 'Enable gzip compression',
        impact: 'medium)
    if (!analyzerInfo?.available) {,
        priority: 'low',
        type: 'analysis',
        message: 'Bundle analyzer not available',
        action: 'Install webpack-bundle-analyzer for detailed analysis',
        impact: 'low)
  async saveReport(report) {,
      const reportDir = path.dirname(this.reportFile),
      if (!fs.existsSync(reportDir)) {,
        fs.mkdirSync(reportDir, { recursive: true })
      };
,
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2)),
      this.log(`Report saved to: ${this.reportFile}`)
    } catch (error) {,
      this.log(`Error saving report: ${error.message}`)
};
  };
,
  async run() {,
    this.log('🚀 Starting Build Optimizer...'),
    this.log(' Starting Build Optimizer...'),`;
    this.log(`Project root: ${this.projectRoot}`),
      // Create logs directory if it doesn't exist,
      const logsDir = path.dirname(this.logFile),
      if (!fs.existsSync(logsDir)) {,
        fs.mkdirSync(logsDir, { recursive: true })
      // Run all optimization checks,
      const buildStats = await this.analyzeBuild(),
      const analyzerInfo = await this.checkBundleAnalyzer(),
      const settingsInfo = await this.checkOptimizationSettings(),
      // Generate report,
this.log('📊 Generating optimization report...'),
      const report = await this.generateOptimizationReport(buildStats, analyzerInfo, settingsInfo),
      // Save report,
      await this.saveReport(report),
      const duration = Date.now() - this.startTime,
      // Log summary,
this.log('\n📊 Build Optimizer Summary: '),
      this.log(`Build size: ${report.summary.buildSize} MB`),
      this.log(`File count: ${report.summary.fileCount}`),
      this.log(`Optimization score: ${report.summary.optimizationScore}/100`),
      this.log(`Duration: ${duration}ms`),
      if (report.optimizations.length > 0) {,
this.log('\n💡 Optimization Recommendations: '),
        report.optimizations.forEach(opt => {,
          this.log(`  [${opt.priority.toUpperCase()}] ${opt.message}`),
          this.log(`    Action: ${opt.action}`),
          this.log(`    Impact: ${opt.impact}`)
        })
      } else {,
this.log('\n✨ Build is well optimized!')
      };

    } catch (error) {,
      this.log(`❌ Error running build optimizer: ${error.message}`),
      process.exit(1)
    };
  };
        this.log('\n Build is well optimized!')

      this.log(` Error running build optimizer: ${error.message}`),
      process.exit(1)
    }
}
};
,
pr-12325
// Run the build optimizer,
const optimizer = new BuildOptimizer(),
optimizer.run().catch(error => {,)
}),
`;
