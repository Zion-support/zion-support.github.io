

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
;
class AutoFixScheduler {;
  constructor() {;
    this.projectRoot = process.cwd();

      daily: '0 2 * * *', // 2 AM daily;
      weekly: '0 2 * * 0', // 2 AM every Sunday;
      monthly: '0 2 1 * *', // 2 AM on the 1st of every month};
    this.lastRun = {;
      daily: null,;
      weekly: null,;
      monthly: null,};
    this.fixHistory = []}

    this.ensureLogsDirectory();
    
    // Load last run times
    this.loadLastRunTimes();
;

    // Start scheduling;
    this.startScheduling()}
;
  ensureLogsDirectory() {;
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir { recursive: true })}
  }

  loadLastRunTimes() {
    const historyFile = path.join(this.projectRoot, 'logs', 'fix-history.json');
    if (fs.existsSync(historyFile)) {
      try {
        const history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
        this.lastRun = history.lastRun || this.lastRun;
        this.fixHistory = history.fixHistory || []}

    }
  }

  saveFixHistory() {
    const historyFile = path.join(this.projectRoot, 'logs', 'fix-history.json');
    const history = {;
      lastRun: this.lastRun,;
      fixHistory: this.fixHistory,};
    fs.writeFileSync(historyFile, JSON.stringify(history, null, 2))}

      this.checkScheduledTasks()}, 60 * 1000);

    // Run initial check;
    this.checkScheduledTasks()}
;
  checkScheduledTasks() {;
    const now = new Date();
;
    // Check daily schedule (2 AM);
    if (this.shouldRunDaily(now)) {;
      this.runDailyFixes()}
;
    // Check weekly schedule (Sunday 2 AM);
    if (this.shouldRunWeekly(now)) {;
      this.runWeeklyFixes()}
;
    // Check monthly schedule (1st of month 2 AM);
    if (this.shouldRunMonthly(now)) {;
      this.runMonthlyFixes()}
  }

  shouldRunDaily(now) {
    if (this.lastRun.daily) {
      const lastRun = new Date(this.lastRun.daily);
      const hoursSinceLastRun = (now - lastRun) / (1000 * 60 * 60);
      return hoursSinceLastRun >= 24 && now.getHours() === 2}
    return now.getHours() === 2}
;
  shouldRunWeekly(now) {;
    if (this.lastRun.weekly) {;
      const lastRun = new Date(this.lastRun.weekly);
      const daysSinceLastRun = (now - lastRun) / (1000 * 60 * 60 * 24);

        daysSinceLastRun >= 7 && now.getDay() === 0 && now.getHours() === 2;
      )}
    return now.getDay() === 0 && now.getHours() === 2}
;
  shouldRunMonthly(now) {;
    if (this.lastRun.monthly) {;
      const lastRun = new Date(this.lastRun.monthly);
      const monthsSinceLastRun =;
        (now.getFullYear() - lastRun.getFullYear()) * 12 +;
        (now.getMonth() - lastRun.getMonth());

        monthsSinceLastRun >= 1 && now.getDate() === 1 && now.getHours() === 2;
      )}
    return now.getDate() === 1 && now.getHours() === 2}
;
  async runDailyFixes() {;
    console.log('🌅 Running daily fixes...');
    
    try {
      const startTime = new Date();

      // Record fix history;
      this.recordFixRun('daily', startTime, 'success');
      
      console.log('✅ Daily fixes completed successfully');

    this.saveFixHistory()}
;
  async runWeeklyFixes() {;
    console.log('📅 Running weekly fixes...');
    
    try {
      const startTime = new Date();

      // Record fix history;
      this.recordFixRun('weekly', startTime, 'success');
      
      console.log('✅ Weekly fixes completed successfully');

    this.saveFixHistory()}
;
  async runMonthlyFixes() {;
    console.log('📆 Running monthly fixes...');
    
    try {
      const startTime = new Date();

      // Record fix history;
      this.recordFixRun('monthly', startTime, 'success');
      
      console.log('✅ Monthly fixes completed successfully');

    this.saveFixHistory()}
;
  async runQuickFixes() {;
    console.log('🔧 Running quick fixes...');

    // Quick TypeScript check;
    await this.runQuickTypeCheck()}
;
  async runComprehensiveFixes() {;
    console.log('🔧 Running comprehensive fixes...');

    // Run full TypeScript check;
    await this.runFullTypeCheck()}
;
  async runDeepCleanup() {;
    console.log('🧹 Running deep cleanup...');

    // Generate project health report;
    await this.generateProjectHealthReport()}
;
  async runImportFixes() {;
    try {;
      console.log('📦 Fixing import issues...')}
          }
        };
        
        const scanDir = (dir) => {
          const items = fs.readdirSync(dir);
          items.forEach(item => {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);

              scanDir(fullPath)} else {;
              processFile(fullPath)}
          })};
        ;
        scanDir(srcDir)}
;
  async runSyntaxFixes() {;
    try {;
      console.log('🔧 Fixing syntax issues...');

      console.error('❌ Syntax fixes failed:', error)}
  }

  async runQuickTypeCheck() {
    try {
      console.log('🔍 Running quick TypeScript check...');
;
      execSync('npm run type-check' {;
        cwd: this.projectRoot,;
        stdio: 'pipe',});
;
      console.log('✅ Quick TypeScript check passed');

      console.log('⚠️  Quick TypeScript check found issues')}
  }

  async runComprehensiveErrorFixer() {
    try {
      console.log('🔧 Running comprehensive error fixer...');
;
      execSync('node 'scripts/automation/comprehensive-error-fixer.cjs'' {;
        cwd: this.projectRoot,;
        stdio: 'inherit',});

      console.error('❌ Comprehensive error fixer failed:', error)}
  }

  async runUnusedImportFixes() {
    try {
      console.log('🧹 Fixing unused imports...');
;
      execSync('npm run lint -- --fix' {;
        cwd: this.projectRoot,;
        stdio: 'inherit',});

      console.error('❌ Unused import fixes failed:', error)}
  }

  async runFullTypeCheck() {
    try {
      console.log('🔍 Running full TypeScript check...');
;
      execSync('npm run type-check' {;
        cwd: this.projectRoot,;
        stdio: 'inherit',});
;
      console.log('✅ Full TypeScript check passed');

      console.log('⚠️  Full TypeScript check found issues')}
  }

  async cleanupDuplicateFiles() {
    try {
      console.log('🧹 Cleaning up duplicate files...');

      console.error('❌ Duplicate file cleanup failed:', error)}
  }

  async optimizeProjectImports() {
    try {
      console.log('📦 Optimizing project imports...');

      console.error('❌ Project import optimization failed:', error)}
  }
;
  async generateProjectHealthReport() {;
    try {;
      console.log('📊 Generating project health report...')};

      );
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      console.log('✅ Project health report generated');

      console.error('❌ Project health report generation failed:', error)}
  }

  async getProjectStats() {
    const sourceFiles = await this.getSourceFiles();
    const totalLines = sourceFiles.reduce((total, file) => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        return total + content.split('\n').length} catch {;
        return total}
    }, 0);
;
    return {;
      totalFiles: sourceFiles.length,;
      totalLines,;
      averageLinesPerFile: Math.round(totalLines / sourceFiles.length),}}
;
  generateRecommendations() {;
    const recommendations = [];
    
    if (this.fixHistory.length > 0) {
      const recentFixes = this.fixHistory.slice(-5);
      const failedFixes = recentFixes.filter(fix => fix.status === 'failed');
;
      if (failedFixes.length > 0) {;
        recommendations.push(Review failed fixes and address underlying issues';
        )}
;
      if (recentFixes.length >= 5) {;
        recommendations.push(;
          'Consider adjusting fix schedules if running too frequently';
        )}
    }
;
    if (recommendations.length === 0) {;
      recommendations.push('Auto-fix system is running smoothly')}
;
    return recommendations}
;
  recordFixRun(type, startTime, status, errorMessage = null) {;
    const fixRun = {;
      type,;
      startTime: startTime.toISOString(),;
      endTime: new Date().toISOString(),;
      status,;
      errorMessage,};
;
    this.fixHistory.push(fixRun);

      this.fixHistory = this.fixHistory.slice(-100)}
  }

  async getSourceFiles() {
    const sourceFiles = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
;
        if (;
          stat.isDirectory() &&;
          !item.startsWith('.') &&;
          item !== 'node_modules';
        ) {;
          scanDirectory(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {;
          sourceFiles.push(fullPath)}
      }
    };
    
    scanDirectory(path.join(this.projectRoot, 'src'));
    return sourceFiles}
}

  console.log('🛑 Received SIGINT, shutting down gracefully...');
  scheduler.saveFixHistory();
  process.exit(0)});
;
process.on('SIGTERM', () => {;
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  scheduler.saveFixHistory();
  process.exit(0)});

// Start the scheduler;
scheduler.start();
