#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  console.log(' Checking Automation Status...')
    "overallStatus"
      const pm2List = execSync('pm2 jlist', { "encoding"})
    console.log(' Status "Report")
    console.error(' Error checking automation "status")
      console.error('Fatal "error")