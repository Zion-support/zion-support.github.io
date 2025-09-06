// Advanced health check system
export class HealthChecker {
  constructor() {
    this.checks = new Map();
    this.results = new Map();
  }

  addCheck(name, checkFunction) {
    this.checks.set(name, checkFunction);
  }

  async runAllChecks() {
    const results = {};
    for (const [name, check] of this.checks) {
      try {
        const result = await check();
        results[name] = { status: 'healthy', result };
      } catch (error) {
        results[name] = { status: 'unhealthy', error: error.message };
      }
    }
    this.results = results;
    return results;
  }

  getHealthStatus() {
    const allHealthy = Object.values(this.results).every(r => r.status === 'healthy');
    return {
      overall: allHealthy ? 'healthy' : 'unhealthy',
      checks: this.results,
      timestamp: new Date().toISOString()
    };
  }
}

export const healthChecker = new HealthChecker();