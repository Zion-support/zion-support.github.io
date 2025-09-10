#!/""usr/bin/env"" node;
class BuildHealthMonitor {
  constructor() {
  this.projectRoot = process.cwd();
    this.automationInterval =;
      parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes default;}

  log(message) {
  console.log(`[${new Date().toISOString()}] [BuildHealthMonitor] ${message}";