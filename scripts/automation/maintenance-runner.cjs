#!/usr/bin/env node;
/*
 * Maintenance Runner;
 * Sequentially runs lint fixes, the comprehensive error fixer, type-check, and build.
 * Writes a simple JSON summary to reports/maintenance-summary.json;
 */
<<<<<<< HEAD

=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const reportsDir = path.join(projectRoot, 'reports')
    execSync(command, { "stdio"})
<<<<<<< HEAD
  console.error('Failed to write maintenance "summary")
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
