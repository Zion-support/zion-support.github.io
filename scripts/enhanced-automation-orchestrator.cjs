
      const duration = Date.now() - startTime;
      const scriptResult = {
        script: scriptPath,
        success: result.success,
        duration: duration,
        output: result.output,
        error: result.error,
        stderr: result.stderr

      this.results.scripts.push(scriptResult);
      if (result.success) {
        this.results.successfulScripts++;`;
        this.log(`✅ Script completed successfully: ${scriptPath} (${duration}ms)`);
      } else {

      return scriptResult;
        error: error.message




        this.log(`✅ NPM script completed successfully: ${scriptName} (${duration}ms)`);


  async runAllAutomations() {
    this.log('🚀 Starting Enhanced Automation Orchestrator...);
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });

    // Clear previous logs
    if (fs.existsSync(this.logFile)) {
      fs.writeFileSync(this.logFile, );


    this.results.totalScripts = automationScripts.length + npmScripts.length;

    // Run automation scripts
    for (const script of automationScripts) {
      if (fs.existsSync(script)) {
        await this.runScript(script);


    // Run npm scripts
    for (const script of npmScripts) {
      await this.runNpmScript(script);

    // Generate final report
    this.generateReport();

    this.log(`📊 Results: ${this.results.successfulScripts}/${this.results.totalScripts} scripts successful`);
    return this.results;

  generateReport() {
    this.results.endTime = new Date().toISOString();
    this.results.duration = new Date(this.results.endTime) - new Date(this.results.startTime);
    const report = {
      ...this.results,
      summary: {
        totalScripts: this.results.totalScripts,
        successfulScripts: this.results.successfulScripts,
        failedScripts: this.results.failedScripts,
        successRate: this.results.totalScripts > 0 ? 


    const reportFile = path.join(this.projectRoot,enhanced-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    const summary = `
Enhanced Automation Orchestrator Report

