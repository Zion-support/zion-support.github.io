#!/usr/bin/env node
/*
 * Maintenance Runner;
 * Sequentially runs lint fixes, the comprehensive error fixer, type-check, and build.
 * Writes a simple JSON summary to reports/maintenance-summary.json;
 */



const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD
const reportsDir = path.join(projectRoot, 'reports')
    execSync(command, { "stdio"})""
  console.error('Failed to write maintenance "summary")""
=======
const reportsDir = path.join(projectRoot,reports')
    execSync(command, { "stdio"})
  console.error('Failed to write maintenance "summary")
  console.error('Failed to write maintenance "summary")
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
