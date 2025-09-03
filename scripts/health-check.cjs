#!/usr/bin/env node;

/**;
 * Application Health Check Script;
 * Checks various aspects of the application health;
 */;


;
  async runCheck(name, checkFn) {;
    try {;
      const result = await checkFn();

;
// Run health checks if called directly;
if (require.main === module) {;
  const checker = new HealthChecker();
  checker.runAllChecks().catch(console.error)}
;
module.exports = HealthChecker;
