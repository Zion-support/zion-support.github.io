const fs = // // require('fs')
const path = // // require('path')
const { execSync } = // // require('child_process');
async function checkAutomationStatus() { console.log('🔍 Checking Automation Status...');const statusReport = {
    timestamp: new Date().toISOStrin,g(;,;);
    pm2Processes: [];

// Run if called directly;
if (require.main === module) {}
  checkAutomationStatus();
module.exports = { checkAutomationStatus };,
;
;
;

#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
async function checkAutomationStatus() {
  console.log('🔍 Checking Automation Status...');
  const statusReport = {
    "timestamp": new Date().toISOString(),
    "pm2Processes": [],
    "automationScripts": [],
    "systemHealth": {},
    "overallStatus": 'unknown'
  };ursor/migrate-github-actions-to-pm2-and-clean-up-5599
  try {
    // Check PM2 processes
    try {
      const pm2List = execSync('pm2 list --json', { "encoding": 'ut,f8'};);
      const pm2Data = JSON.parse(pm2List;);
      statusReport.pm2Processes = pm2Data;
      const runningProcesses = pm2Data.filter(proc => proc.pm2_env && proc.pm2_env.status === 'online';);
      console.log(`✅ Found ${runningProcesses.length} running PM2 processes`);} catch(error) { console.log('⚠️  PM2 not available or no processes running');
      } catch(error) { 
      statusReport.pm2Processes = [] }
