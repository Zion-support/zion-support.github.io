 if (this.monitorProcesses) {await this.checkProcessHealth()}; if (this.monitorSystem) {await this.checkSystemStatus()}
 catch (error) {this.log(`Health check error: ${error.message}`)}; async checkResourceUsage() {try {; // Check memory usage; const totalMem = os.totalmem(); const freeMem = os.freemem(); const usedMem = totalMem - freeMem; const memUsagePercent = (usedMem / totalMem) * 100; this.log(`Memory usage: ${memUsagePercent.toFixed(2)}% (${(usedMem / 1024 / 1024 / 1024).toFixed(2)}GB used / ${(totalMem / 1024 / 1024 / 1024).toFixed(2)}GB total)`); if (memUsagePercent > this.alertThreshold) {this.log(`ALERT: Memory usage ${memUsagePercent.toFixed(2)}% exceeds threshold ${this.alertThreshold}%`)}; // Check CPU usage; const cpus = os.cpus(); this.log(`CPU cores: ${cpus.length}`); // Check disk usage; try {const diskUsage = execSync('df -h /
 catch (error) {this.log(`Resource monitoring error: ${error.message}`)}; async checkProcessHealth() {try {; // Check PM2 processes; try {; const pm2List = execSync('pm2 list --json', { encoding: 'utf8' }); const processes = JSON.parse(pm2List); this.log(`PM2 processes: ${processes.length}`); processes.forEach(proc = > {const status = proc.pm2_env?.status; const name = proc.name; const memory = proc.monit?.memory |0; const cpu = proc.monit?.cpu |0; this.log(` ${name}: ${status} (CPU: ${cpu}%, Memory: ${(memory / 1024 /
 catch (error) {this.log(`Process monitoring error: ${error.message}`)}; async checkSystemStatus() {try {; // Check system uptime; const uptime = os.uptime(); const days = Math.floor(uptime / 86400); const hours = Math.floor(uptime % 86400) / 3600); const minutes = Math.floor(uptime % 3600) / 60); this.log(`System uptime: ${days}d ${hours}h ${minutes}m`); //
 catch (error) {this.log(`System status check error: ${error.message}`)}; async checkApplicationHealth() {try {; // Check if the application is responding; const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'); const isNextJS = packageJson.dependencies?.next |packageJson.devDependencies?.next; if (isNextJS) {; // Try to check if Next.js dev server is running; try {; execSync('curl -f http: any
    alerts: []}; //
    cpu: proc.monit?.cpu |0})} catch (error) {this.log(`Failed to get PM2 process info: ${error.message}`)}; // Save report; const reportFile = path.join(process.cwd(), 'logs/pm2/
 // Check disk usage; try {; const diskUsage = execSync('df -h /
 async checkProcessHealth() {; try {; //
 //
 async checkApplicationHealth() {; try {; //
 if (isNextJS) {; // Try to check if Next && Next.js dev server is running; try {; execSync('curl -f http: any
 // Save report; const reportFile = path && path.join(process && process.cwd(), 'logs/pm2/
 // Check disk usage; try { const disk_usage = exec_sync ('df -h /
 async checkProcessHealth () { try { //
 //
 async checkApplicationHealth () { try { //
 // Try to check if Next.js dev server is running; try { exec_sync ('curl -f http: any
 // Save report; const report_file = path.join (process.cwd (), 'logs / pm2 /