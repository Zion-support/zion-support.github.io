/**
 * Application Health Check Utility
 * Monitors application health and provides diagnostic information
 */

import React from 'react';
import { logger } from './logger';
import { performanceMonitor } from './performanceMonitor';

export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: number;
  uptime: number;
  checks: HealthCheck[];
}

export interface HealthCheck {
  name: string;
  status: 'pass' | 'warn' | 'fail';
  message?: string;
  details?: Record<string, unknown>;
  duration?: number;
}

export type HealthCheckFunction = () => Promise<HealthCheck> | HealthCheck;

class HealthCheckService {
  private checks: Map<string, HealthCheckFunction> = new Map();
  private startTime: number = Date.now();
  private lastCheckTime: number = 0;
  private cachedStatus?: HealthStatus;
  private cacheTimeout: number = 5000; // 5 seconds

  constructor() {
    this.registerDefaultChecks();
  }

  /**
   * Register default health checks
   */
  private registerDefaultChecks(): void {
    // Memory usage check
    this.register('memory', this.checkMemory.bind(this));

    // Performance check
    this.register('performance', this.checkPerformance.bind(this));

    // Browser API availability check
    if (typeof window !== 'undefined') {
      this.register('browser-apis', this.checkBrowserAPIs.bind(this));
    }
  }

  /**
   * Register a health check function
   */
  register(name: string, checkFunction: HealthCheckFunction): void {
    this.checks.set(name, checkFunction);
  }

  /**
   * Unregister a health check
   */
  unregister(name: string): void {
    this.checks.delete(name);
  }

  /**
   * Run all health checks
   */
  async runChecks(): Promise<HealthStatus> {
    const now = Date.now();
    
    // Return cached result if still valid
    if (this.cachedStatus && (now - this.lastCheckTime) < this.cacheTimeout) {
      return this.cachedStatus;
    }

    const checks: HealthCheck[] = [];
    const checkPromises = Array.from(this.checks.entries()).map(async ([name, checkFunction]) => {
      const startTime = performance.now();
      
      try {
        const result = await checkFunction();
        const duration = performance.now() - startTime;
        
        return {
          ...result,
          name,
          duration: Math.round(duration * 100) / 100,
        };
      } catch (error) {
        logger.error(`Health check "${name}" failed`, error as Error);
        return {
          name,
          status: 'fail',
          message: error instanceof Error ? error.message : 'Unknown error',
          duration: performance.now() - startTime,
        };
      }
    });

    const results = await Promise.all(checkPromises);
    checks.push(...results);

    // Determine overall status
    const status = this.determineOverallStatus(checks);
    
    const healthStatus: HealthStatus = {
      status,
      timestamp: now,
      uptime: now - this.startTime,
      checks,
    };

    // Cache the result
    this.cachedStatus = healthStatus;
    this.lastCheckTime = now;

    return healthStatus;
  }

  /**
   * Determine overall health status
   */
  private determineOverallStatus(checks: HealthCheck[]): 'healthy' | 'degraded' | 'unhealthy' {
    const failCount = checks.filter(check => check.status === 'fail').length;
    const warnCount = checks.filter(check => check.status === 'warn').length;

    if (failCount > 0) {
      return 'unhealthy';
    } else if (warnCount > 0) {
      return 'degraded';
    } else {
      return 'healthy';
    }
  }

  /**
   * Check memory usage
   */
  private async checkMemory(): Promise<HealthCheck> {
    if (typeof window === 'undefined' || !('memory' in performance)) {
      return {
        status: 'warn',
        message: 'Memory API not available',
      };
    }

    const memory = (performance as any).memory;
    const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
    const totalMB = Math.round(memory.totalJSHeapSize / 1024 / 1024);
    const limitMB = Math.round(memory.jsHeapSizeLimit / 1024 / 1024);
    const usagePercent = (usedMB / limitMB) * 100;

    if (usagePercent > 90) {
      return {
        status: 'fail',
        message: `Memory usage critical: ${usagePercent.toFixed(1)}%`,
        details: {
          usedMB,
          totalMB,
          limitMB,
          usagePercent: Math.round(usagePercent * 100) / 100,
        },
      };
    } else if (usagePercent > 75) {
      return {
        status: 'warn',
        message: `Memory usage high: ${usagePercent.toFixed(1)}%`,
        details: {
          usedMB,
          totalMB,
          limitMB,
          usagePercent: Math.round(usagePercent * 100) / 100,
        },
      };
    } else {
      return {
        status: 'pass',
        message: `Memory usage normal: ${usagePercent.toFixed(1)}%`,
        details: {
          usedMB,
          totalMB,
          limitMB,
          usagePercent: Math.round(usagePercent * 100) / 100,
        },
      };
    }
  }

  /**
   * Check performance metrics
   */
  private async checkPerformance(): Promise<HealthCheck> {
    try {
      const metrics = performanceMonitor.getMetrics();
      const issues: string[] = [];

      // Check Core Web Vitals
      if (metrics.lcp && metrics.lcp > 4000) {
        issues.push(`LCP too high: ${metrics.lcp}ms`);
      }
      if (metrics.fid && metrics.fid > 300) {
        issues.push(`FID too high: ${metrics.fid}ms`);
      }
      if (metrics.cls && metrics.cls > 0.25) {
        issues.push(`CLS too high: ${metrics.cls}`);
      }

      if (issues.length > 0) {
        return {
          status: 'warn',
          message: `Performance issues detected: ${issues.join(', ')}`,
          details: metrics,
        };
      } else {
        return {
          status: 'pass',
          message: 'Performance metrics within acceptable ranges',
          details: metrics,
        };
      }
    } catch (error) {
      return {
        status: 'fail',
        message: 'Failed to check performance metrics',
        details: { error: error instanceof Error ? error.message : 'Unknown error' },
      };
    }
  }

  /**
   * Check browser API availability
   */
  private async checkBrowserAPIs(): Promise<HealthCheck> {
    const requiredAPIs = [
      'fetch',
      'Promise',
      'localStorage',
      'sessionStorage',
      'addEventListener',
    ];

    const missingAPIs: string[] = [];
    
    requiredAPIs.forEach(api => {
      if (typeof (window as any)[api] === 'undefined') {
        missingAPIs.push(api);
      }
    });

    if (missingAPIs.length > 0) {
      return {
        status: 'fail',
        message: `Missing required browser APIs: ${missingAPIs.join(', ')}`,
        details: { missingAPIs },
      };
    } else {
      return {
        status: 'pass',
        message: 'All required browser APIs available',
        details: { availableAPIs: requiredAPIs },
      };
    }
  }

  /**
   * Get health status summary
   */
  getSummary(): { status: string; totalChecks: number; passed: number; warnings: number; failures: number } {
    if (!this.cachedStatus) {
      return {
        status: 'unknown',
        totalChecks: 0,
        passed: 0,
        warnings: 0,
        failures: 0,
      };
    }

    const { status, checks } = this.cachedStatus;
    const passed = checks.filter(check => check.status === 'pass').length;
    const warnings = checks.filter(check => check.status === 'warn').length;
    const failures = checks.filter(check => check.status === 'fail').length;

    return {
      status,
      totalChecks: checks.length,
      passed,
      warnings,
      failures,
    };
  }

  /**
   * Clear cache and force refresh
   */
  clearCache(): void {
    this.cachedStatus = undefined;
    this.lastCheckTime = 0;
  }
}

// Create singleton instance
export const healthCheckService = new HealthCheckService();

// Export convenience functions
export const runHealthCheck = () => healthCheckService.runChecks();
export const getHealthSummary = () => healthCheckService.getSummary();
export const registerHealthCheck = (name: string, checkFunction: HealthCheckFunction) => 
  healthCheckService.register(name, checkFunction);
export const unregisterHealthCheck = (name: string) => healthCheckService.unregister(name);

export default healthCheckService;