import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Running comprehensive test suite...');

const tests = [
  {
    name: 'TypeScript Check',
    command: 'npm run type-check',
    critical: true
  },
  {
    name: 'ESLint Check',
    command: 'npm run lint',
    critical: true
  },
  {
    name: 'Build Test',
    command: 'npm run build',
    critical: true
  },
  {
    name: 'Bundle Analysis',
    command: 'npm run analyze:bundle',
    critical: false
  }
];

const results = {
  passed: 0,
  failed: 0,
  total: tests.length,
  details: []
};

tests.forEach(test => {
  try {
    console.log(`\nRunning ${test.name}...`);
    execSync(test.command, { stdio: 'pipe' });
    console.log(`✅ ${test.name} passed`);
    results.passed++;
    results.details.push({
      name: test.name,
      status: 'passed',
      critical: test.critical
    });
  } catch (error) {
    console.log(`❌ ${test.name} failed`);
    results.failed++;
    results.details.push({
      name: test.name,
      status: 'failed',
      critical: test.critical,
      error: error.message
    });
    
    if (test.critical) {
      console.log('Critical test failed. Stopping execution.');
      process.exit(1);
    }
  }
});

console.log('\n=== Test Results ===');
console.log(`Total: ${results.total}`);
console.log(`Passed: ${results.passed}`);
console.log(`Failed: ${results.failed}`);

// Write results to file
fs.writeFileSync(
  path.join(__dirname, '../test-results.json'),
  JSON.stringify(results, null, 2)
);

if (results.failed > 0) {
  console.log('\nSome tests failed. Check test-results.json for details.');
  process.exit(1);
} else {
  console.log('\nAll tests passed! 🎉');
}