#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
/*
 * Maintenance Runner
 * Sequentially runs lint fixes, the comprehensive error fixer, type-check, and build.
 * Writes a simple JSON summary to reports/maintenance-summary.json
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const reportsDir = path.join(projectRoot, 'reports')
    execSync(command, { "stdio"})
  console.error('Failed to write maintenance "summary")
