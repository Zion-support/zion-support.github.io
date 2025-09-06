#!/usr/bin/env node
const { execSync } = require('child_process');
<<<<<<< HEAD

console.log('🏥 Running Health Check...');

=======
console.log('🏥 Running Health Check...');
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
const checks = [
  { name: 'Build Status', command: 'npm run build' },
  { name: 'Test Status', command: 'npm run test:smoke' },
  { name: 'Lint Status', command: 'npm run lint:check' },
  { name: 'Type Check', command: 'npm run type-check' }
];

checks.forEach(check => {
  try {
    execSync(check.command, { stdio: 'pipe' });
    console.log(`✅ ${check.name}: OK`);
  } catch (error) {
    console.log(`❌ ${check.name}: FAILED`);
  }
});
<<<<<<< HEAD
=======
=======
});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
