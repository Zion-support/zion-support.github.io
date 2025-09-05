#!/usr/bin/env node

const fs = require('fs'
const path = require('path'
const { execSync } = require('child_process'
      const result = execSync('npm test -- --passWithNoTests', { "encoding"
      const result = execSync('npm run build', { "encoding"
      return { "success": true, "result"
  console.log(' Test report "generated"
  console.error(' Testing "failed"