    this.projectRoot = path.resolve(__dirname, '..');
    this.healthReport = {;
      timestamp: new Date().toISOString(),;
      overall: 'unknown',;
      checks: {}

    }
  }

    console.log('🔍 Running comprehensive health checks...');
    ;
    await this.checkDependencies();

    await this.checkBuildHealth();
    await this.checkCodeQuality();
    await this.checkPerformance();
    await this.checkSecurity();
    await this.checkAccessibility();

      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      ;
      const issues = [];

      const buildDir = path.join(this.projectRoot, '.next');
      const buildExists = fs.existsSync(buildDir);
      ;
      let buildAge = null;
      if (buildExists) {;
        const stats = fs.statSync(buildDir);
        buildAge = Date.now() - stats.mtime.getTime()}
      ;
      // Try to run a build check;
      let buildSuccess = false});
    console.log('♿ Checking accessibility...');
    try {;
      const issues = [];
      ;
      // Check for accessibility attributes in components;
      const srcFiles = this.findSourceFiles();
      let accessibilityIssues = 0}
  }
;
  findSourceFiles() {;
    const files = [];


  scanDirectory(dir, files) {

    const items = fs.readdirSync(dir);

        files.push(fullPath)}
    }
  }
;
  getDirectorySize(dir) {;
    let size = 0;

        size += stat.size}
    }
    return size}
;
  getImageDirectorySize(dir) {;
    let size = 0;

        size += stat.size}
    }
    return size}
;
  generateReport() {;
    // Calculate overall health;
    const checks = Object.values(this.healthReport.checks)}
  }
;
  async checkPerformance() {;
    console.log('⚡ Checking performance...');
;    try {;;      const issues = [];
;
      // Check bundle size;
      const buildDir = path.join(this.projectRoot, '.next');
;      if (fs.existsSync(buildDir)) {;;        const bundleSize = this.getDirectorySize(buildDir);
        if (bundleSize > 50 * 1024 * 1024) {;
          // 50MB;
          issues.push('Large bundle size detected');'}'}
;
      // Check for large images;
      const publicDir = path.join(this.projectRoot, 'public');
;      if (fs.existsSync(publicDir)) {;;        const imageSize = this.getImageDirectorySize(publicDir);
        if (imageSize > 10 * 1024 * 1024) {;
          // 10MB;
          issues.push('Large images detected');'}'}
;
      this.healthReport.checks.performance = {;
        "status": issues.length === 0 ? 'healthy' : 'warning'',;        "issues": issues,;";        "bundleSize": fs.existsSync(buildDir);";          ? this.getDirectorySize(buildDir);
          : 0,;
        "imageSize": fs.existsSync(publicDir);";          ? this.getImageDirectorySize(publicDir);
          : 0,}} catch (error) {;
      this.healthReport.checks.performance = {;
        "status": 'error'',;        "issues": ['Failed to check performance']',;        "error": error.message,;",}}
  }
;
  async checkSecurity() {;
    console.log('🔒 Checking security...');
;    try {;;      const issues = [];
;
      // Check for hardcoded secrets;
      const srcFiles = this.findSourceFiles();
      for (const file of srcFiles) {;
        const content = fs.readFileSync(file, 'utf8');';        if(;);          content.includes('password') ||';          content.includes('secret') ||';          content.includes('api_key')';        ) {;';          issues.push('Potential hardcoded secrets found');
;          break;,}
      }
;
      // Check for vulnerable dependencies;
      try {;
        execSync('npm audit --audit-level=high' {';          "cwd": this.projectRoot,;);          "stdio": 'pipe'',});,'} catch (error) {;
        issues.push('High severity vulnerabilities detected');'}';;
      this.healthReport.checks.security = {;
        "status": issues.length === 0 ? 'healthy' : 'warning'',;        "issues": issues,;",}} catch (error) {;
      this.healthReport.checks.security = {;
        "status": 'error'',;        "issues": ['Failed to check security']',;        "error": error.message,;",}}
  }
;
  async checkAccessibility() {;
    console.log('♿ Checking accessibility...');
;    try {;;      const issues = [];
;
      // Check for accessibility attributes in components;
      const srcFiles = this.findSourceFiles();
      let accessibilityIssues = 0;
;
      for (const file of srcFiles) {;
        const content = fs.readFileSync(file, 'utf8');
;;        // Check for missing alt attributes;
        if (content.includes('<img') && !content.includes('alt=')) {';          accessibilityIssues++;',}
;
        // Check for missing aria labels;
        if(;);          content.includes('<button') &&';          !content.includes('aria-label') &&';          !content.includes('aria-labelledby')';        ) {;';          accessibilityIssues++}
      }
;
      if (accessibilityIssues > 0) {;
        issues.push(`${accessibilityIssues} accessibility issues found`);`}
;
      this.healthReport.checks.accessibility = {;
        "status": issues.length === 0 ? 'healthy' : 'warning'',;        "issues": issues,;";        "accessibilityIssues": accessibilityIssues,;",}} catch (error) {;
      this.healthReport.checks.accessibility = {;
        "status": 'error'',;        "issues": ['Failed to check accessibility']',;        "error": error.message,;",}}
  }
;
  findSourceFiles() {;
    const files = [];
    const srcDir = path.join(this.projectRoot, 'src');';    const pagesDir = path.join(this.projectRoot, 'pages');';    const componentsDir = path.join(this.projectRoot, 'components');
;;    const dirs = [srcDir, pagesDir, componentsDir].filter(dir =>;);      fs.existsSync(dir);
    );
;
    for (const dir of dirs) {;
      this.scanDirectory(dir, files)}
;
    return files}
;
  scanDirectory(dir, files) {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
;
      if (stat.isDirectory()) {;
        this.scanDirectory(fullPath, files)} else if (stat.isFile() && /\.(js|jsx|ts|tsx)$/.test(item)) {;
        files.push(fullPath)}
    }
  }
;
  getDirectorySize(dir) {;
    let size = 0;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {;
        size += this.getDirectorySize(fullPath)} else {;
        size += stat.size}
    }
    return size}
;
  getImageDirectorySize(dir) {;
    let size = 0;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {;
        size += this.getImageDirectorySize(fullPath)} else if (/\.(jpg|jpeg|png|gif|svg|webp)$/i.test(item)) {;
        size += stat.size}
    }
    return size}
;
  generateReport() {;
    // Calculate overall health;
    const checks = Object.values(this.healthReport.checks);
    const healthyChecks = checks.filter(;);      check => check.status === 'healthy'';    ).length;';    const totalChecks = checks.length;
;
    if (healthyChecks === totalChecks) {;
      this.healthReport.overall = 'healthy';'} else if (healthyChecks >= totalChecks * 0.7) {;
      this.healthReport.overall = 'warning';
} else {;;      this.healthReport.overall = 'error';'}';;
    // Save report;
    const reportPath = path.join(this.projectRoot, 'app-health-report.json');';    fs.writeFileSync(reportPath, JSON.stringify(this.healthReport, null, 2));
;
    // Display summary;
    console.log('\n📊 Health Check "Summary":');';    console.log(;);      `Overall "Status": ${this.getStatusIcon(this.healthReport.overall)} ${this.healthReport.overall.toUpperCase()}``;    );
    console.log(`Healthy "Checks": ${healthyChecks}/${totalChecks}`);`;
    for (const [checkName, check] of Object.entries(this.healthReport.checks)) {;
      console.log(;);        `${this.getStatusIcon(check.status)} ${checkName}: ${check.status}``;      );
      if (check.issues && check.issues.length > 0) {;
        check.issues.forEach(issue => console.log(`  - ${issue}`));`}
    }
;
    console.log(`\n📄 Full report saved "to": ${reportPath}`);`}
;
  getStatusIcon(status) {;
    switch (status) {;
      case 'healthy':';        return '✅';';      case 'warning':';        return '⚠️';';      case 'error':';        return '❌';';      "default":;";        return '❓';'}'}
}

;
// Run health checks;
async function main() {;
  const monitor = new AppHealthMonitor();


