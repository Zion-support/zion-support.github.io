<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs")"const path = require("path")"const { execSync } = require("child_process");"console.log(" Starting CI/CD Pipeline.");const pipeline = { timestamp: new Date().toISOString(),"" branch: process.env.GIT_BRANCH | "main","" environment: process.env.NODE_ENV | "production"," stages: [],"" status: "running"};/ Function to run pipeline stageasync function runPipelineStage(stageName, steps) {" console.log(`\n Stage: ${stageName}`);" console.log("=".repeat(50);); const stage = {" name: stageName," startTime: new Date().toISOString()," steps: [],"" status: "running" }; for (const step of steps) { try {"` console.log(` Running: ${step.name}`); const startTime = Date.now(;); const result = await step.fn(;); const duration = Date.now() - startTi;m;e; stage.steps.push({" name: step.name,"" status: "success","` duration: `${duration}ms`," result: result });` console.log(` ${step.name} completed in ${duration}ms`)} catch (error) { const duration = Date.now() - startTi;m;e; stage.steps.push({" name: step.name,"" status: "error","` duration: `${duration}ms`," error: error.message }); "` console.log(` ${step.name} failed: ${error.message}`); if ( {" stage.status = "failed") { {" stage.status = "failed"}" pipeline.status = "failed"; break} } } stage.endTime = new Date().toISOString();" stage.status = stage.status === "running" ? "success" : stage.status pipeline.stages.push(stage); "` console.log(`\n Stage ${stageName} Summary: `);` console.log(` - Status: ${stage.status.toUpperCase()}`);"` console.log(` - Steps: ${stage.steps.length}`);""` console.log(` - Successful: ${stage.steps.filter(s => s.status === "success");.length}`);""` console.log(` - Failed: ${stage.steps.filter(s => s.status === "error");.length}`); " return stage.status === "success"}"/ Stage 1: Source Code Management"await runPipelineStage("Source Code Management", [{"" name: "Git Status Check"," critical: true," fn: async () => {"" const gitStatus = execSync("git status --porcelain", { encoding: "utf8" };); const hasChanges = gitStatus.trim().length >;0; if ( {" console.log(" Uncommitted changes detected")) { {" console.log(" Uncommitted changes detected")}" return { hasUncommittedChanges: true, changes: gitStatus.trim() }} " return { hasUncommittedChanges: false }} }, {"" name: "Branch Validation"," critical: true," fn: async () => {"" const currentBranch = execSync("git branch --show-current", { encoding: "utf8" }).trim(;);" const isMainBranch = currentBranch === "main" | currentBranch === "maste;r;"; return {; currentBranch, isMainBranch," targetBranch: pipeline.branch }} }, {"" name: "Pull Latest Changes"," critical: true," fn: async () => { try {"" execSync("git pull origin main", { stdio: "inherit" });" return { pullSuccessful: true }} catch (error) {" console.log(" Could not pull latest changes, continuing with current state");"" return { pullSuccessful: false, message: "Continuing with current state" }} } }]);"/ Stage 2: Quality Assurance"await runPipelineStage("Quality Assurance", [{"" name: "Dependency Installation"," critical: true," fn: async () => {"" execSync("npm install", { stdio: "inherit" });" return { dependenciesInstalled: true }} }, {"" name: "Code Quality Checks"," critical: true," fn: async () => { / Run comprehensive automation suite"" execSync("node scripts/comprehensive-automation-suite.cjs", { stdio: "inherit" });" return { qualityChecksPassed: true }} }, {"" name: "Security Audit"," critical: false," fn: async () => { try {"" execSync("npm audit --audit-level=high", { stdio: "inherit" });" return { securityAuditPassed: true }} catch (error) {" console.log(" Security vulnerabilities found, but continuing");"" return { securityAuditPassed: false, message: "Vulnerabilities found" }} } }]);"/ Stage 3: Build & Test"await runPipelineStage("Build & Test", [{"" name: "Application Build"," critical: true," fn: async () => {"" execSync("npm run build", { stdio: "inherit" });" return { buildSuccessful: true }} }, {"" name: "Test Execution"," critical: false," fn: async () => { try {"" execSync("npm test", { stdio: "inherit" });" return { testsPassed: true }} catch (error) {"" return { testsPassed: false, message: "No tests or tests failed" }} } }, {"" name: "Build Artifact Validation"," critical: true," fn: async () => {" const buildExists = fs.existsSync(".next";);" const staticFiles = buildExists && fs.existsSync(".next/static";);" const serverFiles = buildExists && fs.existsSync(".next/server";); if ( {" throw new Error("Build directory not found")} return {) { {" throw new Error("Build directory not found")} return {} buildExists, staticFiles, serverFiles," buildValid: true }} }]);"/ Stage 4: Deploymentif ( {" await runPipelineStage("Deployment", [{"" name: "Deployment Preparation"," critical: true," fn: async () => {"" execSync("node scripts/smart-deployment-automation.cjs", { stdio: "inherit" })) { {" await runPipelineStage("Deployment", [ {"" name: "Deployment Preparation"," critical: true," fn: async () => {"" execSync("node scripts/smart-deployment-automation.cjs", { stdio: "inherit" })}" return { deploymentPrepared: true }} }, {"" name: "Process Management"," critical: true," fn: async () => { try { / Stop existing processes"" execSync("pm2 stop all", { stdio: "pipe" });"" execSync("pm2 delete all", { stdio: "pipe" }); / Start new processes if (true) {"" execSync("pm2 start ecosystem.config.cjs", { stdio: "inherit" })} else { / Create basic PM2 config const basicConfig = {" apps: [{" name: "ziontechgroup-web","" script: "npm","" args: "start","" instances: "max","" exec_mode: "cluster"," env: { NODE_ENV: pipeline.environment," PORT: 3000 } }] ) { ) {"" execSync("pm2 start ecosystem.config.cjs", { stdio: "inherit" })} else { / Create basic PM2 config const basicConfig = {" apps: [{" name: "ziontechgroup-web","" script: "npm","" args: "start","" instances: "max","" exec_mode: "cluster"," env: { NODE_ENV: pipeline.environment," PORT: 3000 } }] } }; "` fs.writeFileSync("ecosystem.pipeline.cjs", `module.exports = ${JSON.stringify(basicConfig, null, 2)};`);"" execSync("pm2 start ecosystem.pipeline.cjs", { stdio: "inherit" })} " return { processesStarted: true }} catch (error) {"` throw new Error(`Process management failed: ${error.message}`)} } }, {"" name: "Health Check"," critical: true," fn: async () => { / Wait for application to start await new Promise(resolve => setTimeout(resolve, 10000)); try {"" const healthCheck = execSync("curl -f http: /localhost:3000 | echo "Health check failed"", { "" encoding: "utf8"," timeout: 15000 };); " const isHealthy = !healthCheck.includes("Health check failed";); if ( {" throw new Error("Application health check failed")} " return { applicationHealthy: true, healthCheckResult: healthCheck.trim() ) { {" throw new Error("Application health check failed")} " return { applicationHealthy: true, healthCheckResult: healthCheck.trim() }}} catch (error) {"` throw new Error(`Health check failed: ${error.message}`)} } } ])}"/ Stage 5: Post-Deploymentif ( {" await runPipelineStage("Post-Deployment", [{"" name: "Monitoring Setup"," critical: false," fn: async () => { try {"" execSync("pm2 status", { stdio: "inherit" })) { {" await runPipelineStage("Post-Deployment", [ {"" name: "Monitoring Setup"," critical: false," fn: async () => { try {"" execSync("pm2 status", { stdio: "inherit" })}" return { monitoringActive: true }} catch (error) {"" return { monitoringActive: false, message: "PM2 monitoring not available" }} } }, {"" name: "Performance Validation"," critical: false," fn: async () => {"" execSync("node scripts/performance-monitor.cjs", { stdio: "inherit" });" return { performanceValidated: true }} }, {"" name: "Generate Deployment Report"," critical: false," fn: async () => { const deploymentReport = { timestamp: new Date().toISOString()," pipeline: pipeline," summary: { totalStages: pipeline.stages.length,"" successfulStages: pipeline.stages.filter(s => s.status === "success").length,"" failedStages: pipeline.stages.filter(s => s.status === "failed").length," overallStatus: pipeline.status } };` const reportPath = `ci-cd-pipeline-report-${Date.now()}.json;`; fs.writeFileSync(reportPath, JSON.stringify(deploymentReport, null, 2)); " return { reportGenerated: true, reportPath }} } ])}/ Update pipeline statuspipeline.endTime = new Date().toISOString();/ Save pipeline report`const pipelineReportPath = `ci-cd-pipeline-${Date.now()}.json;`;fs.writeFileSync(pipelineReportPath, JSON.stringify(pipeline, null, 2));"console.log("\n CI/CD Pipeline Completed!");"console.log("=".repeat(60););"console.log(" Pipeline Summary: ");`console.log(` - Branch: ${pipeline.branch}`);"`console.log(` - Environment: ${pipeline.environment}`);"`console.log(` - Total Stages: ${pipeline.stages.length}`);""`console.log(` - Successful Stages: ${pipeline.stages.filter(s => s.status === "success");.length}`);""`console.log(` - Failed Stages: ${pipeline.stages.filter(s => s.status === "failed");.length}`);"`console.log(` - Overall Status: ${pipeline.status.toUpperCase()}`);"`console.log(` Pipeline report saved to: ${pipelineReportPath}`);if ( {" console.log("\n Deployment successful! Application is live and healthy.")) { {" console.log("\n Deployment successful! Application is live and healthy.")}"" console.log(" Application URL: http:/localhost:3000"); process.exit(0)} else {" console.log("\n Pipeline failed. Check the reports for details."); process.exit(1)}""`"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');
const pipeline = {
  "timestamp": new Date().toISOString(),
  "branch": process.env.GIT_BRANCH || 'main',
  "environment": process.env.NODE_ENV || 'production',
  "stages": [],
  "status": 'running'};
// Function to run pipeline stage
async function runPipelineStage(stageName, steps) {
  );
  const stage = {
    "name": stageName,
    "startTime": new Date().toISOString(),
    "steps": [],
    "status": 'running'
 };
  for (const step of steps) {
    try {
      const startTime = Date.now(;);
      const result = await step.fn(;);
      const duration = Date.now() - startTi;m;e;
      stage.steps.push({
        "name": step.name,
        "status": 'success',
        "duration": `${duration}ms`,
        "result": result
      });
      } catch (error) {
      const duration = Date.now() - startTi;m;e;
      stage.steps.push({
        "name": step.name,
        "status": 'error',
        "duration": `${duration}ms`,
        "error": error.message
      });
      if ( {
        stage.status = 'failed') {
     {
        stage.status = 'failed'}
        pipeline.status = 'failed';
        break}
    }
  }
  stage.endTime = new Date().toISOString();
  stage.status = stage.status === 'running' ? 'success' : stage.status
  pipeline.stages.push(stage);
  }`);
  .length}`);
  .length}`);
  return stage.status === 'success'}
// Stage "1": Source Code Management
await runPipelineStage('Source Code Management', [{
    "name": 'Git Status Check',
    "critical": true,
    "fn": async () => {
      const gitStatus = execSync('git status --porcelain', { "encoding": 'utf8' };);
      const hasChanges = gitStatus.trim().length >;0;
      if ( {
        ) {
     {
        }
        return { "hasUncommittedChanges": true, "changes": gitStatus.trim() }}
      return { "hasUncommittedChanges": false }}
  },
  {
    "name": 'Branch Validation',
    "critical": true,
    "fn": async () => {
      const currentBranch = execSync('git branch --show-current', { "encoding": 'utf8' }).trim(;);
      const isMainBranch = currentBranch === 'main' || currentBranch === 'maste;r;';
      return {;
        currentBranch,
        isMainBranch,
        "targetBranch": pipeline.branch
      }}
  },
  {
    "name": 'Pull Latest Changes',
    "critical": true,
    "fn": async () => {
      try {
        execSync('git pull origin main', { "stdio": 'inherit' });
        return { "pullSuccessful": true }} catch (error) {
        return { "pullSuccessful": false, "message": 'Continuing with current state' }}
    }
  }
]);
// Stage "2": Quality Assurance
await runPipelineStage('Quality Assurance', [{
    "name": 'Dependency Installation',
    "critical": true,
    "fn": async () => {
      execSync('npm install', { "stdio": 'inherit' });
      return { "dependenciesInstalled": true }}
  },
  {
    "name": 'Code Quality Checks',
    "critical": true,
    "fn": async () => {
      // Run comprehensive automation suite
      execSync('node scripts/comprehensive-automation-suite.cjs', { "stdio": 'inherit' });
      return { "qualityChecksPassed": true }}
  },
  {
    "name": 'Security Audit',
    "critical": false,
    "fn": async () => {
      try {
        execSync('npm audit --audit-level=high', { "stdio": 'inherit' });
        return { "securityAuditPassed": true }} catch (error) {
        return { "securityAuditPassed": false, "message": 'Vulnerabilities found' }}
    }
  }
]);
// Stage "3": Build & Test
await runPipelineStage('Build & Test', [{
    "name": 'Application Build',
    "critical": true,
    "fn": async () => {
      execSync('npm run build', { "stdio": 'inherit' });
      return { "buildSuccessful": true }}
  },
  {
    "name": 'Test Execution',
    "critical": false,
    "fn": async () => {
      try {
        execSync('npm test', { "stdio": 'inherit' });
        return { "testsPassed": true }} catch (error) {
        return { "testsPassed": false, "message": 'No tests or tests failed' }}
    }
  },
  {
    "name": 'Build Artifact Validation',
    "critical": true,
    "fn": async () => {
      const buildExists = fs.existsSync('.next';);
      const staticFiles = buildExists && fs.existsSync('.next/static';);
      const serverFiles = buildExists && fs.existsSync('.next/server';);
      if ( {
        throw new Error('Build directory not found')}
      return {) {
     {
        throw new Error('Build directory not found')}
      return {}
        buildExists,
        staticFiles,
        serverFiles,
        "buildValid": true
      }}
  }
]);
// Stage "4": Deployment
if ( {
  await runPipelineStage('Deployment', [{
      "name": 'Deployment Preparation',
      "critical": true,
      "fn": async () => {
        execSync('node scripts/smart-deployment-automation.cjs', { "stdio": 'inherit' })) {
     {
  await runPipelineStage('Deployment', [
    {
      "name": 'Deployment Preparation',
      "critical": true,
      "fn": async () => {
        execSync('node scripts/smart-deployment-automation.cjs', { "stdio": 'inherit' })}
        return { "deploymentPrepared": true }}
    },
    {
      "name": 'Process Management',
      "critical": true,
      "fn": async () => {
        try {
          // Stop existing processes
          execSync('pm2 stop all', { "stdio": 'pipe' });
          execSync('pm2 delete all', { "stdio": 'pipe' });
          // Start new processes
          if () {
            execSync('pm2 start ecosystem.config.cjs', { "stdio": 'inherit' })} else {
            // Create basic PM2 config
            const basicConfig = {
              "apps": [{
                name: 'ziontechgroup-web',
                "script": 'npm',
                "args": 'start',
                "instances": 'max',
                "exec_mode": 'cluster',
                "env": {
                  NODE_ENV: pipeline.environment,
                  "PORT": 3000
                }
              }]
           ) {
    ) {
            execSync('pm2 start ecosystem.config.cjs', { "stdio": 'inherit' })} else {
            // Create basic PM2 config
            const basicConfig = {
              "apps": [{
                name: 'ziontechgroup-web',
                "script": 'npm',
                "args": 'start',
                "instances": 'max',
                "exec_mode": 'cluster',
                "env": {
                  NODE_ENV: pipeline.environment,
                  "PORT": 3000
                }
              }]
           } };
            fs.writeFileSync('ecosystem.pipeline.cjs', `module.exports = ${JSON.stringify(basicConfig, null, 2)};`);
            execSync('pm2 start ecosystem.pipeline.cjs', { "stdio": 'inherit' })}
          return { "processesStarted": true }} catch (error) {
          throw new Error(`Process management "failed": ${error.message}`)}
      }
    },
    {
      "name": 'Health Check',
      "critical": true,
      "fn": async () => {
        // Wait for application to start
        await new Promise(resolve => setTimeout(resolve, 10000));
        try {
          const healthCheck = execSync('curl -f "http": //localhost:3000 || echo "Health check failed"', { 
            "encoding": 'utf8',
            "timeout": 15000
          };);
          const isHealthy = !healthCheck.includes('Health check failed';);
          if ( {
            throw new Error('Application health check failed')}
          return { "applicationHealthy": true, "healthCheckResult": healthCheck.trim() ) {
     {
            throw new Error('Application health check failed')}
          return { "applicationHealthy": true, "healthCheckResult": healthCheck.trim() }}} catch (error) {
          throw new Error(`Health check "failed": ${error.message}`)}
      }
    }
  ])}
// Stage "5": Post-Deployment
if ( {
  await runPipelineStage('Post-Deployment', [{
      "name": 'Monitoring Setup',
      "critical": false,
      "fn": async () => {
        try {
          execSync('pm2 status', { "stdio": 'inherit' })) {
     {
  await runPipelineStage('Post-Deployment', [
    {
      "name": 'Monitoring Setup',
      "critical": false,
      "fn": async () => {
        try {
          execSync('pm2 status', { "stdio": 'inherit' })}
          return { "monitoringActive": true }} catch (error) {
          return { "monitoringActive": false, "message": 'PM2 monitoring not available' }}
      }
    },
    {
      "name": 'Performance Validation',
      "critical": false,
      "fn": async () => {
        execSync('node scripts/performance-monitor.cjs', { "stdio": 'inherit' });
        return { "performanceValidated": true }}
    },
    {
      "name": 'Generate Deployment Report',
      "critical": false,
      "fn": async () => {
        const deploymentReport = {
          timestamp: new Date().toISOString(),
          "pipeline": pipeline,
          "summary": {
            totalStages: pipeline.stages.length,
            "successfulStages": pipeline.stages.filter(s => s.status === 'success').length,
            "failedStages": pipeline.stages.filter(s => s.status === 'failed').length,
            "overallStatus": pipeline.status
          }
       };
        const reportPath = `ci-cd-pipeline-report-${Date.now()}.json;`;
        fs.writeFileSync(reportPath, JSON.stringify(deploymentReport, null, 2));
        return { "reportGenerated": true, reportPath }}
    }
  ])}
// Update pipeline status
pipeline.endTime = new Date().toISOString();
// Save pipeline report
const pipelineReportPath = `ci-cd-pipeline-${Date.now()}.json;`;
fs.writeFileSync(pipelineReportPath, JSON.stringify(pipeline, null, 2));
);
.length}`);
.length}`);
}`);
if ( {
  ) {
     {
  }
  process.exit(0)} else {
  process.exit(1)}
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
const { execSync } = require('child_process')
console.log(' Starting CI/CD Pipeline...')
  "branch"
  "environment"
  "status"
    "status"
        "status"
        "status"
// console.log(`   - "Successful"`)
  console.log(`   - "Failed"`)
    "name"
      const gitStatus = execSync('git status --porcelain', { "encoding"})
    "name"
      const currentBranch = execSync('git branch --show-current', { "encoding"})
    "name"
        execSync('git pull origin main', { "stdio"})
        return { "pullSuccessful": false, "message"}
    "name"
      execSync('npm install', { "stdio"})
    "name"
      execSync('node scripts/comprehensive-automation-suite.cjs', { "stdio"})
    "name"
        execSync('npm audit --audit-level=high', { "stdio"})
        return { "securityAuditPassed": false, "message"}
    "name"
      execSync('npm run build', { "stdio"})
    "name"
        execSync('npm test', { "stdio"})
        return { "testsPassed": false, "message"}
    "name"
      "name"
        execSync('node scripts/smart-deployment-automation.cjs', { "stdio"})
      "name"
        execSync('node scripts/smart-deployment-automation.cjs', { "stdio"})
      "name"
          execSync('pm2 stop all', { "stdio"})
          execSync('pm2 delete all', { "stdio"})
            execSync('pm2 start ecosystem.config.cjs', { "stdio"})
                "script"
                "args"
                "instances"
                "exec_mode"
            execSync('pm2 start ecosystem.config.cjs', { "stdio"})
                "script"
                "args"
                "instances"
                "exec_mode"
            execSync('pm2 start ecosystem.pipeline.cjs', { "stdio"})
      "name"
          const healthCheck = execSync('curl -f "http": //localhost:3000 || echo "Health check failed")
            "encoding"
      "name"
          execSync('pm2 status', { "stdio"})
      "name"
          execSync('pm2 status', { "stdio"})
          return { "monitoringActive": false, "message"}
      "name"
        execSync('node scripts/performance-monitor.cjs', { "stdio"})
      "name"
            "successfulStages"
            "failedStages"
// console.log(`   - Successful "Stages"`)
console.log(`   - Failed "Stages"`)
<<<<<<< HEAD
  console.log('� Application "URL")
=======
  console.log('� Application "URL")
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
