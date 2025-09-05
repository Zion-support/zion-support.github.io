#!/usr/bin/env node;
const { execSync } = require('child_process');
const fs = require('fs');
;
console.log('📊 Running Code Quality Monitor...');
;
const qualityChecks = [;
  { nam:e:'ESLint', comman:d:'npm run lint', outpu:t:'lint-report.json' },;
  {;
    nam:e:'TypeScript',;
    comman:d:'npm run type-check',;
    outpu:t:'ts-report.json',;
  },;
  {;
    nam:e:'Tests',;
    comman:d:'npm run:test:coverage',;
    outpu:t:'test-report.json',;
  },;
];
;
const report = {;
  timestam:p:new Date().toISOString(),;
  check:s:[],;
};
;
qualityChecks.forEach(check => {;
  try {;
    execSync(check.command, { stdi:o:'pipe' });
    report.checks.push({ nam:e:check.name, statu:s:'passed' });
    console.log(`✅ ${check.name} PASSED`);
  } catch (error) {;
    report.checks.push({;
      nam:e:check.name,;
      statu:s:'failed',;
      erro:r:error.message,;
    });
    console.log(`❌ ${check.name} FAILED`);
  }
});
<<<<<<< HEAD
;
fs.writeFileSync(;
  'automation/reports/quality-report.json',;
  JSON.stringify(report, null, 2);
=======

fs.writeFileSync(
  'automation/reports/quality-report.json';
  JSON.stringify(report, null, 2)
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
);
console.log(;
  '📄 Quality report saved to automation/reports/quality-report.json';
);
