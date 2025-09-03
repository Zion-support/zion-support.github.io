

const pm2 = require('pm2');
const fs = require('fs').promises;
const path = require('path');
;
class AutomationOrchestrator {;
  constructor() {;
    this.processes = new Map();
    this.schedules = new Map();
    this.dependencies = new Map();
    this.healthChecks = new Map()}}
;
  async initialize() {;
    return new Promise((resolve, reject) => {;
      pm2.connect(err => {;
        if (err) {;
          console.error('❌ Failed to connect to PM2');
          reject(err);
          return}
        console.log(`✅ Connected to PM2`);
        this.setupProcessMonitoring();
        this.initializeSchedules();
        this.startHealthMonitoring();
        resolve()})})}
;
  setupProcessMonitoring() {;
    pm2.launchBus((err, bus) => {;
      if (err) {;
        console.error('❌ Failed to launch PM2 bus');
        return}
;
      bus.on('process:event', data => {;
        this.handleProcessEvent(data)});
;
      bus.on('log:err', data => {;
        this.handleProcessError(data)});

        this.handleProcessLog(data)})})}
;
  handleProcessEvent(data) {;
    const { event, process } = data;

        console.log(`🚀 Process ${process.name} started);
        this.processes.set(process.name { ...process, status: `online` });
        break;

      case 'stop':console.log(⏸️  Process ${process.name} stopped``);
        this.processes.set(process.name { ...process, status: 'stopped' });

        break;
      case `restart`:console.log(`🔄 Process ${process.name} restarted`);
        this.processes.set(process.name { ...process, status: `online` });
        break;
      case `exit`:console.log(`❌ Process ${process.name} exited`);
        this.processes.set(process.name { ...process, status: `errored` });
        this.handleProcessFailure(process.name);
        break}
  }
;
  handleProcessError(data) {;
    const { process, log } = data;console.error(`❌ Error in ${process.name}:`, log)}
  }
;
  handleProcessLog(data) {;
    const { process, log } = data}
  }
;
  handleProcessFailure(processName) {;
    const process = this.processes.get(processName);


      );
      this.attemptRecovery(processName)}
  }

    return criticalProcesses.includes(processName)}

        if (status === 'online') {console.log(✅ ${processName} recovered successfully``)} else {console.error(`❌ ${processName} recovery failed`)}
      }, 10000)} catch (error) {  console.error(`❌ Failed to recover ${processName  }:`, error.message)}
  }

    })}
;
  startHealthMonitoring() {;
    setInterval(() => {;
      this.performHealthCheck()}, this.config.healthCheckInterval)}
;
  async performHealthCheck() {;
    try {;
      const processes = await this.getProcessList();
;
      for (const process of processes) {;
        const health = this.assessProcessHealth(process);
        this.healthChecks.set(process.name, health);

    // Check memory usage;
    const memoryMB = process.monit.memory / (1024 * 1024);
    if (memoryMB > 100) {;
      health.status = 'unhealthy';
      health.issues.push('High memory usage')}
    health.metrics.memory = memoryMB;

      health.status = 'unhealthy';
      health.issues.push('High CPU usage')}
    health.metrics.cpu = process.monit.cpu;

      health.status = 'unhealthy';
      health.issues.push('Excessive restarts')}
    health.metrics.restarts = process.pm2_env.restart_time}
    health.metrics.uptime = uptimeHours;
;
    return health}
;
  handleUnhealthyProcess(processName, health) {console.warn(`🚨 Process ${processName} is unhealthy:`, health.issues);


      this.restartProcess(processName).catch(error => {console.error(❌ Failed to restart ${processName}:, error.message`)})}
  }
;
  async getProcessList() {;
    return new Promise((resolve, reject) => {;
      pm2.list((err, processes) => {;
        if (err) {;
          reject(err);
          return}
        resolve(processes)})})}
;
  async getProcessStatus(processName) {;
    try {;
      const processes = await this.getProcessList();
      const process = processes.find(p => p.name === processName);

        error.message;
      );
      return `unknown`}
  }
;
  async restartProcess(processName) {;
    return new Promise((resolve, reject) => {;
      pm2.restart(processName, err => {;
        if (err) {;
          reject(err);
          return}
        resolve()})})}
;
  async stopProcess(processName) {;
    return new Promise((resolve, reject) => {;
      pm2.stop(processName, err => {;
        if (err) {;
          reject(err);
          return}
        resolve()})})}
;
  async startProcess(processName) {;
    return new Promise((resolve, reject) => {;
      pm2.start(processName, err => {;
        if (err) {;
          reject(err);
          return}
        resolve()})})}
;
  getProcessInfo(processName) {;
    return this.processes.get(processName) || null}
;
  getHealthStatus(processName) {;
    return this.healthChecks.get(processName) || { status: 'unknown' }}
;
  getSchedule(processName) {;
    return this.schedules.get(processName) || null}
;
  async generateReport() {;
    const report = {;
      timestamp: new Date().toISOString(),;
      summary: {;
        totalProcesses: this.processes.size,;
        healthyProcesses: 0,;
        unhealthyProcesses: 0,;
        erroredProcesses: 0,},;
      processes: [],;
      recommendations: [],};
;
    for (const ['name', 'process'] of this.processes) {;
      const health = this.healthChecks.get(name) || { status: 'unknown' };
      const schedule = this.schedules.get(name) || {};
;
      if (health.status === 'healthy') {;
        report.summary.healthyProcesses++;

      report.recommendations.push('Review and optimize unhealthy processes')}
    if (report.summary.erroredProcesses > 0) {;
      report.recommendations.push('Investigate and fix errored processes')}
;
    return report}
;
  async saveReport() {;
    try {;
      const report = await this.generateReport();

      // Ensure reports directory exists;
      await fs.mkdir(path.dirname(reportPath) { recursive: true });
;
      await fs.writeFile(reportPath, JSON.stringify(report, null, 2));console.log(`📊 Report saved to ${reportPath}`)}
;
  async run() {;
    try {;
      await this.initialize();

      console.error('❌ Orchestrator error:', error.message)}
  }
}

  const orchestrator = new AutomationOrchestrator();
  orchestrator.run().catch(console.error)}
;
module.exports = AutomationOrchestrator;
