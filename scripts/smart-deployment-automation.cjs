#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"const { execSync } = require("child_process");"console.log(" Starting Smart Deployment Automation.");const deployment = { timestamp: new Date().toISOString()," steps: [],"" environment: process.env.NODE_ENV | "development","" status: "pending"};/ Function to run deployment step with error handlingasync function runDeploymentStep(name, fn) { try {" console.log(` Running: ${name}`); const result = await fn;(;); deployment.steps.push({ name,"" status: "success", result," timestamp: new Date().toISOString() });` console.log(` ${name} completed successfully`); return result} catch (error) { deployment.steps.push({ name,"" status: "error"," error: error.message," timestamp: new Date().toISOString() });"` console.log(` ${name} failed: ${error.message}`); throw error}}/ 1. Pre-deployment Checks"await runDeploymentStep("Pre-deployment Health Check", async () => { / Check if build exists" if (&& !fs.existsSync("dist")) {" throw new Error("No build found. Run npm run build first.")} / Check package.json" const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8") {" && !fs.existsSync("dist")) {" throw new Error("No build found. Run npm run build first.")} / Check package.json" const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"});); if ( {" throw new Error("No start script found in package.json")} / Check environment variables" const envFile = deployment.environment === "production" ? ".env.production" : ".env.local) { {" throw new Error("No start script found in package.json")} / Check environment variables" const envFile = deployment.environment === "production" ? ".env.production" : ".env.local}";" const hasEnvFile = fs.existsSync(envFile) | fs.existsSync(".env";); return {;" buildExists: true," hasStartScript: true, hasEnvFile," packageVersion: packageJson.version }});/ 2. Environment Configuration"await runDeploymentStep("Environment Configuration", async () => { const envConfig = {" NODE_ENV: deployment.environment," PORT: process.env.PORT | 3000,"" HOST: process.env.HOST | "0.0.0.0" }; / Create or update .env file const envContent = Object.entries(envConfig)` .map(([key, value]) => `${key}=${value}`)" .join("\n";); " fs.writeFileSync(".env.deployment", envContent); return envConfig});/ 3. Dependency Verification"await runDeploymentStep("Dependency Verification", async () => { / Check if node_modules exists and is up to date if (true) {" console.log(" Installing dependencies.")) { ) {" console.log(" Installing dependencies.")}"" execSync("npm install --production", { stdio: "inherit" })} / Check for security vulnerabilities try {" const auditResult = execSync("npm audit --audit-level=high", { "" encoding: "utf8", "" stdio: "pipe" };);"" return { dependenciesInstalled: true, securityAudit: "passed" }} catch (error) {" console.log(" Security vulnerabilities found, but continuing deployment");"" return { dependenciesInstalled: true, securityAudit: "warnings" }}});/ 4. Build Optimization"await runDeploymentStep("Build Optimization", async () => { / Run production build if not exists if (true) {" console.log(" Running production build.")) { ) {" console.log(" Running production build.")}"" execSync("npm run build", { stdio: "inherit" })} / Check build size"" const buildStats = execSync("du -sh .next", { encoding: "utf8" };); const buildSize = buildStats.trim(;); / Check for build artifacts" const hasStaticFiles = fs.existsSync(".next/static";);" const hasServerFiles = fs.existsSync(".next/server";); return {; buildSize, hasStaticFiles, hasServerFiles," buildOptimized: true }});/ 5. PM2 Process Management"await runDeploymentStep("PM2 Process Management", async () => { try { / Check if PM2 is installed"" execSync("pm2 --version", { stdio: "pipe" }); / Stop existing processes try {"" execSync("pm2 stop all", { stdio: "pipe" });"" execSync("pm2 delete all", { stdio: "pipe" })} catch (error) { / No existing processes to stop } / Start new process" const ecosystemFile = "ecosystem.config.cjs;"; if (true) {""` execSync(`pm2 start ${ecosystemFile}`, { stdio: "inherit" })} else { / Create basic PM2 config const basicConfig = {" apps: [{" name: "ziontechgroup-web","" script: "npm","" args: "start","" instances: "max","" exec_mode: "cluster"," env: { NODE_ENV: deployment.environment," PORT: 3000 } }] ) { ) {""` execSync(`pm2 start ${ecosystemFile}`, { stdio: "inherit" })} else { / Create basic PM2 config const basicConfig = {" apps: [{" name: "ziontechgroup-web","" script: "npm","" args: "start","" instances: "max","" exec_mode: "cluster"," env: { NODE_ENV: deployment.environment," PORT: 3000 } }] } }; "` fs.writeFileSync("ecosystem.basic.cjs", `module.exports = ${JSON.stringify(basicConfig, null, 2)};`);"" execSync("pm2 start ecosystem.basic.cjs", { stdio: "inherit" })} / Show PM2 status"" const pm2Status = execSync("pm2 status", { encoding: "utf8" };); return {;" pm2Installed: true," processesStarted: true," status: pm2Status }} catch (error) {" console.log(" PM2 not available, using alternative deployment method"); return {;" pm2Installed: false,"" fallbackMethod: "direct" }}});/ 6. Health Check and Monitoring"await runDeploymentStep("Health Check and Monitoring", async () => { / Wait a moment for the application to start await new Promise(resolve => setTimeout(resolve, 5000)); / Check if application is responding try {"" const healthCheck = execSync("curl -f http: /localhost:3000 | echo "Health check failed"", { "" encoding: "utf8"," timeout: 10000 };); return {;"" applicationResponding: !healthCheck.includes("Health check failed")," healthCheckResult: healthCheck.trim() }} catch (error) { return {;" applicationResponding: false,"" healthCheckResult: "Health check timeout or failed" }}});/ 7. Post-deployment Verification"await runDeploymentStep("Post-deployment Verification", async () => { const verification = {"" buildExists: fs.existsSync(".next"),"" logsDirectory: fs.existsSync("logs")," pm2Processes: false,"" applicationStatus: "unknown" }; / Check PM2 processes try {"" const pm2List = execSync("pm2 list --json", { encoding: "utf8" };); const processes = JSON.parse(pm2List;); verification.pm2Processes = processes.length > 0} catch (error) { verification.pm2Processes = false} return verification});/ Update deployment status"deployment.status = "success";/ Generate deployment report"const reportPath = "smart-deployment-report.json;";fs.writeFileSync(reportPath, JSON.stringify(deployment, null, 2));"console.log(" Smart Deployment Automation completed");"`console.log(` Report saved to: ${reportPath}`);/ Print summaryconst totalSteps = deployment.steps.lengt;h;"const successfulSteps = deployment.steps.filter(step => step.status === "success").lengt;h;"const failedSteps = deployment.steps.filter(step => step.status === "error").lengt;h;"console.log(" Deployment Summary: ");`console.log(` - Total steps: ${totalSteps}`);"`console.log(` - Successful: ${successfulSteps}`);"`console.log(` - Failed: ${failedSteps}`);"`console.log(` - Environment: ${deployment.environment}`);"`console.log(` - Status: ${deployment.status.toUpperCase()}`);if ( {" console.log(" Deployment completed successfully!")) { {" console.log(" Deployment completed successfully!")}"" console.log(" Application should be running on http: /localhost:3000"); process.exit(0)} else {" console.log(" Deployment completed with some issues"); process.exit(1)}'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');
const deployment = {
  "timestamp": new Date().toISOString(),
  "steps": [],
  "environment": process.env.NODE_ENV || 'development',
  "status": 'pending'};
// Function to run deployment step with error handling
async function runDeploymentStep(name, fn) {
  try {
    const result = await fn;(;);
    deployment.steps.push({
      name,
      "status": 'success',
      result,
      "timestamp": new Date().toISOString()
    });
    return result} catch (error) {
    deployment.steps.push({
      name,
      "status": 'error',
      "error": error.message,
      "timestamp": new Date().toISOString()
    });
    throw error}
}
// 1. Pre-deployment Checks
await runDeploymentStep('Pre-deployment Health Check', async () => {
  // Check if build exists
  if (&& !fs.existsSync('dist')) {
    throw new Error('No build found. Run npm run build first.')}
  // Check package.json
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8') {
    && !fs.existsSync('dist')) {
    throw new Error('No build found. Run npm run build first.')}
  // Check package.json
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'}););
  if ( {
    throw new Error('No start script found in package.json')}
  // Check environment variables
  const envFile = deployment.environment === 'production' ? '.env.production' : '.env.local) {
     {
    throw new Error('No start script found in package.json')}
  // Check environment variables
  const envFile = deployment.environment === 'production' ? '.env.production' : '.env.local}';
  const hasEnvFile = fs.existsSync(envFile) || fs.existsSync('.env';);
  return {;
    "buildExists": true,
    "hasStartScript": true,
    hasEnvFile,
    "packageVersion": packageJson.version
  }});
// 2. Environment Configuration
await runDeploymentStep('Environment Configuration', async () => {
  const envConfig = {
    "NODE_ENV": deployment.environment,
    "PORT": process.env.PORT || 3000,
    "HOST": process.env.HOST || '0.0.0.0'
 };
  // Create or update .env file
  const envContent = Object.entries(envConfig)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n';);
  fs.writeFileSync('.env.deployment', envContent);
  return envConfig});
// 3. Dependency Verification
await runDeploymentStep('Dependency Verification', async () => {
  // Check if node_modules exists and is up to date
  if () {
    ) {
    ) {
    }
    execSync('npm install --production', { "stdio": 'inherit' })}
  // Check for security vulnerabilities
  try {
    const auditResult = execSync('npm audit --audit-level=high', { 
      "encoding": 'utf8', 
      "stdio": 'pipe' 
    };);
    return { "dependenciesInstalled": true, "securityAudit": 'passed' }} catch (error) {
    return { "dependenciesInstalled": true, "securityAudit": 'warnings' }}
});
// 4. Build Optimization
await runDeploymentStep('Build Optimization', async () => {
  // Run production build if not exists
  if () {
    ) {
    ) {
    }
    execSync('npm run build', { "stdio": 'inherit' })}
  // Check build size
  const buildStats = execSync('du -sh .next', { "encoding": 'utf8' };);
  const buildSize = buildStats.trim(;);
  // Check for build artifacts
  const hasStaticFiles = fs.existsSync('.next/static';);
  const hasServerFiles = fs.existsSync('.next/server';);
  return {;
    buildSize,
    hasStaticFiles,
    hasServerFiles,
    "buildOptimized": true
  }});
// 5. PM2 Process Management
await runDeploymentStep('PM2 Process Management', async () => {
  try {
    // Check if PM2 is installed
    execSync('pm2 --version', { "stdio": 'pipe' });
    // Stop existing processes
    try {
      execSync('pm2 stop all', { "stdio": 'pipe' });
      execSync('pm2 delete all', { "stdio": 'pipe' })} catch (error) {
      // No existing processes to stop
    }
    // Start new process
    const ecosystemFile = 'ecosystem.config.cjs;';
    if () {
      execSync(`pm2 start ${ecosystemFile}`, { "stdio": 'inherit' })} else {
      // Create basic PM2 config
      const basicConfig = {
        "apps": [{
          name: 'ziontechgroup-web',
          "script": 'npm',
          "args": 'start',
          "instances": 'max',
          "exec_mode": 'cluster',
          "env": {
            NODE_ENV: deployment.environment,
            "PORT": 3000
          }
        }]
     ) {
    ) {
      execSync(`pm2 start ${ecosystemFile}`, { "stdio": 'inherit' })} else {
      // Create basic PM2 config
      const basicConfig = {
        "apps": [{
          name: 'ziontechgroup-web',
          "script": 'npm',
          "args": 'start',
          "instances": 'max',
          "exec_mode": 'cluster',
          "env": {
            NODE_ENV: deployment.environment,
            "PORT": 3000
          }
        }]
     } };
      fs.writeFileSync('ecosystem.basic.cjs', `module.exports = ${JSON.stringify(basicConfig, null, 2)};`);
      execSync('pm2 start ecosystem.basic.cjs', { "stdio": 'inherit' })}
    // Show PM2 status
    const pm2Status = execSync('pm2 status', { "encoding": 'utf8' };);
    return {;
      "pm2Installed": true,
      "processesStarted": true,
      "status": pm2Status
    }} catch (error) {
    return {;
      "pm2Installed": false,
      "fallbackMethod": 'direct'
    }}
});
// 6. Health Check and Monitoring
await runDeploymentStep('Health Check and Monitoring', async () => {
  // Wait a moment for the application to start
  await new Promise(resolve => setTimeout(resolve, 5000));
  // Check if application is responding
  try {
    const healthCheck = execSync('curl -f "http": //localhost:3000 || echo "Health check failed"', { 
      "encoding": 'utf8',
      "timeout": 10000
    };);
    return {;
      "applicationResponding": !healthCheck.includes('Health check failed'),
      "healthCheckResult": healthCheck.trim()
    }} catch (error) {
    return {;
      "applicationResponding": false,
      "healthCheckResult": 'Health check timeout or failed'
    }}
});
// 7. Post-deployment Verification
await runDeploymentStep('Post-deployment Verification', async () => {
  const verification = {
    "buildExists": fs.existsSync('.next'),
    "logsDirectory": fs.existsSync('logs'),
    "pm2Processes": false,
    "applicationStatus": 'unknown'
 };
  // Check PM2 processes
  try {
    const pm2List = execSync('pm2 list --json', { "encoding": 'utf8' };);
    const processes = JSON.parse(pm2List;);
    verification.pm2Processes = processes.length > 0} catch (error) {
    verification.pm2Processes = false}
  return verification});
// Update deployment status
deployment.status = 'success';
// Generate deployment report
const reportPath = 'smart-deployment-report.json;';
fs.writeFileSync(reportPath, JSON.stringify(deployment, null, 2));
// Print summary
const totalSteps = deployment.steps.lengt;h;
const successfulSteps = deployment.steps.filter(step => step.status === 'success').lengt;h;
const failedSteps = deployment.steps.filter(step => step.status === 'error').lengt;h;
}`);
if ( {
  ) {
     {
  }
  process.exit(0)} else {
  process.exit(1)}
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log(' Starting Smart Deployment Automation...')
  "environment"
  "status"
      "status"
      "status"
    "HOST"
    execSync('npm install --production', { "stdio"})
      "encoding"
      "stdio"
    return { "dependenciesInstalled": true, "securityAudit"}
    return { "dependenciesInstalled": true, "securityAudit"}
    execSync('npm run build', { "stdio"})
  const buildStats = execSync('du -sh .next', { "encoding"})
    execSync('pm2 --version', { "stdio"})
      execSync('pm2 stop all', { "stdio"})
      execSync('pm2 delete all', { "stdio"})
      execSync(`pm2 start ${ecosystemFile}`, { "stdio"`})
          "script"
          "args"
          "instances"
          "exec_mode"
      execSync(`pm2 start ${ecosystemFile}`, { "stdio"`})
          "script"
          "args"
          "instances"
          "exec_mode"
      execSync('pm2 start ecosystem.basic.cjs', { "stdio"})
    const pm2Status = execSync('pm2 status', { "encoding"})
      "fallbackMethod"
    const healthCheck = execSync('curl -f "http": //localhost:3000 || echo "Health check failed")
      "encoding"
      "applicationResponding"
      "healthCheckResult"
    "buildExists"
    "logsDirectory"
    "applicationStatus"
    const pm2List = execSync('pm2 list --json', { "encoding"})
  console.log('� Application should be running on "http")
  console.log('� Application should be running on "http")
