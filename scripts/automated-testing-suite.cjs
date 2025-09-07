

#!/usr/bin/env node


#!/usr/bin/env node;

const { execSync } = require('child_process');
const fs = require('fs');

  fs.writeFileSync('test-results.json', JSON.stringify(report, null, 2));
  console.log('\n📊 Test Summary:');
  console.log(`Total: ${report.summary.total}`);`;
  console.log(`Passed: ${report.summary.passed}`);`;
  console.log(`Failed: ${report.summary.failed}`);

  return report;
}







