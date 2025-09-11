class ComprehensiveAutomationRunner {
  constructor() {
    this.logDir = path.join(__dirname, 'automation', 'logs');
    this.ensureLogDir();
    this.startTime = Date.now();
    this.results = {
      syntaxFixes: 0,
      buildSuccess: false,
      testsPassed: 0,
      optimizations: 0,
      errors: []
    };