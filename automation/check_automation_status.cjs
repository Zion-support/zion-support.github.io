const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
async function checkAutomationStatus() {
  console.log('🔍 Checking Automation Status...');

  const statusReport = {
    timestamp: new Date().toISOString(),
    pm2Processes: [],
    automationScripts: [],
    systemHealth: {},


  try {
    // Check PM2 processes
    console.log('📋 Checking PM2 processes...');
    try {
      const pm2List = execSync('pm2 jlist', { encoding: 'utf8' });
      );
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
