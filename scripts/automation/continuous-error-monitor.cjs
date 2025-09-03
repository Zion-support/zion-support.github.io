
      parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes default;
    this.isRunning = false;
    this.lastRun = null;
    this.runCount = 0;
    this.errorCount = 0}

    )}

  async start() {

    `);
;
    // Run initial check;
    await this.runErrorFixer();
;
    // Set up continuous monitoring;
    setInterval(async () => {;
      await this.runErrorFixer()}, this.automationInterval);
;
    this.log('Continuous error monitoring is now active')}
;
  async runErrorFixer() {;
    if (this.isRunning) {;
      this.log('Error fixer already running, skipping this cycle');

      return}
;
    this.isRunning = true;
    this.runCount++;

        );
        this.lastRun = new Date()} else {;
        this.errorCount++;
        this.log(`Error fixer failed: ${result.error}`)}

      );
;
      const child = spawn('node', [errorFixerPath] {;
        cwd: this.projectRoot,;
        stdio: ['pipe', 'pipe', 'pipe'],;
        env: { ...process.env, NODE_ENV: 'production' },});
;
      let stdout = ';
      let stderr = ';
      let fixesApplied = 0;
;
      child.stdout.on('data', data => {;
        stdout += data.toString();
        // Parse fixes applied from output;
        const fixMatch = data.toString().match(/Applied (\d+) fixes/);
        if (fixMatch) {;
          fixesApplied = parseInt(fixMatch[1])}
      })})} else {;
          resolve({;
            success: false,;
            error: stderr || `Process exited with code ${code}`,;
            stdout,;
            stderr,})}
      })})})})}

    // Ensure directory exists;
    const dir = path.dirname(reportPath);
    if (!fs.existsSync(dir)) {;
      fs.mkdirSync(dir { recursive: true })}
;
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));this.log(`Status report saved to: ${reportPath}`)}

      await this.generateStatusReport()}, 3600000); // 1 hour}
}

  process.exit(0)});
;
process.on('SIGTERM', () => {;
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0)});

// Start the continuous error monitor;
const monitor = new ContinuousErrorMonitor();
monitor.start();
monitor.startStatusReporting();
