#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
console.log('🧪 Starting Test Build...')
const problematicFiles = ['components/ContactForm.tsx']
  'components/PerformanceMonitor.tsx'
  console.log('� Attempting build without problematic files...')
    execSync('npm run build', { "stdio"})
<<<<<<< HEAD
    console.log(' Build "failed")
=======
    console.log(' Build "failed")
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
