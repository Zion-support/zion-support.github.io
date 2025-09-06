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
=======
    console.log(' Build "failed")

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
