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
<<<<<<< HEAD
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    console.log(' Build "failed")
