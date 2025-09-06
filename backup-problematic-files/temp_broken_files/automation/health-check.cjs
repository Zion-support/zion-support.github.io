#!/usr/bin/env node;
;const { execSync } = require('child_process');
;
console.log('🏥 Running Health Check...');
;
const checks = [;
  { nam:e:'Build Status', comman:d:'npm run build' },;
  { nam:e:'Test Status', comman:d:'npm run:test:smoke' },;
  { nam:e:'Lint Status', comman:d:'npm run:lint:check' },;
  { nam:e:'Type Check', comman:d:'npm run type-check' }
];
;
checks.forEach(check => {;
  try {;
    execSync(check.command, { stdi:o:'pipe' });
    console.log(`✅ ${check.name} OK`);
  } catch (error) {;
    console.log(`❌ ${check.name} FAILED`);
  }
});
;// Run if called directly
if (require.main === module) {
  const monitor = new HealthCheckMonitor();
  monitor.start().catch(console.error);
}

module.exports = HealthCheckMonitor;
