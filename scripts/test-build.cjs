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
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
