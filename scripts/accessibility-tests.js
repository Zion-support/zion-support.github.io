const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

async function runAccessibilityTests() {
  console.log('🧪 Running accessibility tests...');
  
  try {
    // Run axe-core CLI tests
    const result = execSync('npx @axe-core/cli http://localhost:3000 --config axe.config.js --reporter json', {
      encoding: 'utf8',
      stdio: 'pipe'
    });
    
    console.log('✅ Accessibility tests completed');
    
    // Parse results
    const results = JSON.parse(result);
    const violations = results.violations || [];
    
    console.log(`Found ${violations.length} accessibility violations`);
    
    if (violations.length > 0) {
      violations.forEach((violation, index) => {
        console.log(`${index + 1}. ${violation.description}`);
        console.log(`   Impact: ${violation.impact}`);
        console.log(`   Help: ${violation.helpUrl}`);
        console.log('');
      });
    }
    
    // Save test results
    fs.writeFileSync(
      path.join(process.cwd(), 'accessibility-test-results.json'),
      JSON.stringify(results, null, 2)
    );
    
  } catch (error) {
    console.error('❌ Accessibility tests failed:', error.message);
  }
}

runAccessibilityTests();