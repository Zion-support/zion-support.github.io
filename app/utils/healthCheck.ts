/**
 * Health Check Utility
 * Monitors application health and provides status reporting
 */

import { logger } from './logger';

export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  uptime: number;
  checks: {
    api: boolean;
    database: boolean;
    memory: boolean;
    performance: boolean;
  };
  metrics: {
    memoryUsage: number;
    responseTime: number;
    errorRate: number;
  };
}

/**
 * Check API health
 */
async function checkApiHealth(): Promise<boolean> {
  try {
    // Simple health check - can be expanded to actual API endpoint
    return true;
  } catch (error) {
    logger.error('API health check failed:', error instanceof Error ? error : new Error(String(error)));
    return false;
  }
}

/**
 * Check memory usage
 */
function checkMemoryHealth(): boolean {
  if (typeof performance === 'undefined' || !('memory' in performance)) {
    return true; // Assume healthy if we can't check
  }

  const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
  if (!memory) return true;

  const usagePercent = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
  return usagePercent < 90; // Consider unhealthy if using >90% of heap
}

/**
 * Check performance metrics
 */
function checkPerformanceHealth(): boolean {
  if (typeof performance === 'undefined') return true;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return true;

  const loadTime = navigation.loadEventEnd - navigation.fetchStart;
  return loadTime < 5000; // Consider healthy if load time < 5s
}

/**
 * Calculate error rate from recent errors
 */
function calculateErrorRate(): number {
  // This is a simplified implementation
  // In production, this would track actual errors over time
  return 0;
}

/**
 * Get current memory usage in MB
 */
function getMemoryUsage(): number {
  if (typeof performance === 'undefined' || !('memory' in performance)) {
    return 0;
  }

  const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
  return memory ? memory.usedJSHeapSize / 1024 / 1024 : 0;
}

/**
 * Get average response time
 */
function getResponseTime(): number {
  if (typeof performance === 'undefined') return 0;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (!navigation) return 0;

  return navigation.loadEventEnd - navigation.fetchStart;
}

/**
 * Perform comprehensive health check
 */
export async function performHealthCheck(): Promise<HealthStatus> {
  const startTime = performance.now();

  const [apiHealthy, memoryHealthy, performanceHealthy] = await Promise.all([
    checkApiHealth(),
    Promise.resolve(checkMemoryHealth()),
    Promise.resolve(checkPerformanceHealth()),
  ]);

  const allHealthy = apiHealthy && memoryHealthy && performanceHealthy;
  const someUnhealthy = !apiHealthy || !memoryHealthy || !performanceHealthy;

  const status: HealthStatus = {
    status: allHealthy ? 'healthy' : someUnhealthy ? 'degraded' : 'unhealthy',
    timestamp: new Date().toISOString(),
    uptime: performance.now(),
    checks: {
      api: apiHealthy,
      database: true, // Not applicable for frontend
      memory: memoryHealthy,
      performance: performanceHealthy,
    },
    metrics: {
      memoryUsage: getMemoryUsage(),
      responseTime: getResponseTime(),
      errorRate: calculateErrorRate(),
    },
  };

  logger.group('Health Check Results', () => {
    logger.info(`Status: ${status.status}`, 'HealthCheck');
    logger.info(`Checks: ${JSON.stringify(status.checks)}`, 'HealthCheck');
    logger.info(`Metrics: ${JSON.stringify(status.metrics)}`, 'HealthCheck');
    logger.perf('Health check duration', performance.now() - startTime);
    logger.groupEnd();
  });

  return status;
}

/**
 * Start periodic health checks
 */
export function startHealthMonitoring(intervalMs: number = 60000): () => void {
  logger.info('Starting health monitoring...');

  const intervalId = setInterval(async () => {
    const health = await performHealthCheck();
    
    if (health.status !== 'healthy') {
      logger.warn('Application health degraded', 'HealthCheck', { 
        status: health.status,
        timestamp: health.timestamp,
        checks: JSON.stringify(health.checks),
        metrics: JSON.stringify(health.metrics)
      });
    }
  }, intervalMs);

  return () => {
    logger.info('Stopping health monitoring');
    clearInterval(intervalId);
  };
}

export default {
  performHealthCheck,
  startHealthMonitoring,
};