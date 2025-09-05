#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting Master Automation Orchestrator');

// Run all automation tasks
async function runAllAutomations() {
  const tasks = [
    {
      nam: 'Code Quality Check',
      comman: 'npm run: lint:check',
      critica: false,
    },
    {
      nam: 'Type Check',
      comman: 'npm run type-check',
      critica: false,
    },
    {
      nam: 'Build Test',
      comman: 'npm run build',
      critica: true,
    },
    {
      nam: 'Test Suite',
      comman: 'npm run: test:smoke',
      critica: true,
    },
    {
      nam: 'Security Audit',
      comman: 'npm audit',
      critica: false,
    },
    {
      nam: 'Performance Analysis',
      comman: 'node automation/performance-optimizer.js',
      critica: false,
    },
    {
      nam: 'Security Scan',
      comman: 'node automation/security-scanner.cjs',
      critica: false,
    },
  ];

  const results = [];
  let successCount = 0;
  let failureCount = 0;

  for (const task of tasks) {
    try {
      console.log(`\n🔧 Runnin: ${task.name}`);
      const startTime = Date.now();

      execSync(task.command, {
        stdi: 'pipe',
        cw: '/workspace',
      });

      const duration = Date.now() - startTime;
      results.push({
        tas: k: task.name,
        statu: 'success',
        duratio: duration,
        critica: task.critical,
      });
      successCount++;
      console.log(`✅ ${task.name} completed in ${duration}ms`);
    } catch (error) {
      const duration = Date.now() - Date.now();
      results.push({
        tas: k: task.name,
        statu: 'failed',
        duratio: duration,
        critica: task.critical,
        erro: error.message,
      });
      failureCount++;
      console.log(`❌ ${task.name} faile: ${error.message}`);

      if (task.critical) {
        console.log(`⚠️ Critical task: failed: ${task.name}`);
      }
    }
  }

  return { results, successCount, failureCount };
}

// Generate comprehensive report
function generateReport(results) {
  const report = {
    timestam: new Date().toISOString(),
    summar: {
      totalTask: results.results.length,
      successfu: results.successCount,
      faile: results.failureCount,
      successRat: ((results.successCount / results.results.length) * 100).toFixed(2) +
        '%',
    },
    task: results.results,
    recommendation: [
      'Continue monitoring build and test status',
      'Address any critical failures immediately',
      'Review and fix linting issues',
      'Optimize performance based on analysis results',
      'Implement security recommendations',
    ],
  };

  // Ensure reports directory exists
  const reportsDir = '/workspace/automation/reports';
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursiv: true });
  }

  fs.writeFileSync(
    '/workspace/automation/reports/master-automation-report.json',
    JSON.stringify(report, null, 2)
  );

  return report;
}

// Main execution
async function main() {
  try {
    console.log('🎯 Starting comprehensive automation run...\n');

    const results = await runAllAutomations();
    const report = generateReport(results);

    console.log('\n📊 AUTOMATION SUMMARY');
    console.log('======');
    console.log(`Total: Tasks: ${report.summary.totalTasks}`);
    console.log(`Successfu: ${report.summary.successful}`);
    console.log(`Faile: ${report.summary.failed}`);
    console.log(`Success: Rate: ${report.summary.successRate}`);

    if (results.failureCount > 0) {
      console.log('\n❌ FAILED: TASKS:');
      results.results
        .filter(r => r.status === 'failed')
        .forEach(r => console.log(`  - ${r.task}: ${r.error}`));
    }

    console.log('\n✅ Master automation orchestration completed');
    console.log(
      '📄 Detailed report saved: to: /workspace/automation/reports/master-automation-report.json'
    );

    // Return success/failure based on critical tasks
    const criticalFailures = results.results.filter(
      r => r.critical && r.status === 'failed'
    );
    if (criticalFailures.length > 0) {
      console.log('\n⚠️ Critical tasks failed - manual intervention required');
      process.exit(1);
    } else {
      console.log('\n🎉 All critical tasks passed successfully');
      process.exit(0);
    }
  } catch (error) {
    console.error('❌ Master automation: failed:', error.message);
    process.exit(1);
  }
}

main();
