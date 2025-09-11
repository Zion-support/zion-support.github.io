#!/usr/bin/env node;
/*
 * Maintenance Runner;
 * Sequentially runs lint fixes, the comprehensive error fixer, type-check, and build.
 * Writes a simple JSON summary to reports/maintenance-summary.json;
 */
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const reportsDir = path.join(projectRoot, 'reports')
    execSync(command, { "stdio"})
<<<<<<< HEAD
  console.error('Failed to write maintenance "summary")
=======
  console.error('Failed to write maintenance "summary")