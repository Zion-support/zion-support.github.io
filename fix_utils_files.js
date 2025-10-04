#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix the specific corrupted utils files
function fixUtilsFiles() {
  const filesToFix = [
    'utils/errorHandling.ts',
    'utils/performanceOptimizer.ts'
  ];
  
  filesToFix.forEach(filePath => {
    try {
      if (fs.existsSync(filePath)) {
        console.log(`Deleting corrupted file: ${filePath}`);
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      console.error(`Error deleting ${filePath}:`, error.message);
    }
  });
  
  // Create a simple replacement for errorHandling.ts
  const errorHandlingContent = `/**
 * Error Handling Utilities
 * Simple error handling functions for the application
 */

export interface ErrorLog {
  timestamp: number;
  level: 'error' | 'warn' | 'info' | 'debug';
  message: string;
  stack?: string;
  context?: Record<string, any>;
}

export const logError = (error: Error | string, context?: Record<string, any>) => {
  const errorLog: ErrorLog = {
    timestamp: Date.now(),
    level: 'error',
    message: typeof error === 'string' ? error : error.message,
    stack: typeof error === 'object' && error.stack ? error.stack : undefined,
    context
  };
  
  console.error('Error logged:', errorLog);
};

export const logInfo = (message: string, context?: Record<string, any>) => {
  const errorLog: ErrorLog = {
    timestamp: Date.now(),
    level: 'info',
    message,
    context
  };
  
  console.log('Info logged:', errorLog);
};

export const setupGlobalErrorHandling = () => {
  if (typeof window === 'undefined') return;
  
  window.addEventListener('error', (event) => {
    logError(event.error || event.message, {
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno
    });
  });
  
  window.addEventListener('unhandledrejection', (event) => {
    logError(event.reason || 'Unhandled Promise Rejection', {
      promise: event.promise
    });
  });
  
  console.log('Global error handling initialized');
};

export const monitorPerformance = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return;
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData) {
        const loadTime = perfData.loadEventEnd - perfData.fetchStart;
        if (loadTime > 3000) {
          logError('Slow page load detected', {
            loadTime,
            type: 'performance'
          });
        }
      }
    }, 0);
  });
};

export const handleNetworkError = (error: Error, endpoint: string) => {
  logError(error, {
    endpoint,
    type: 'network'
  });
  
  return { offline: false };
};

export const withErrorHandling = <T extends (...args: any[]) => any>(
  fn: T,
  context?: string
): T => {
  return ((...args: Parameters<T>) => {
    try {
      const result = fn(...args);
      if (result instanceof Promise) {
        return result.catch((error) => {
          logError(error, { context, args });
          throw error;
        });
      }
      return result;
    } catch (error) {
      logError(error as Error, { context, args });
      throw error;
    }
  }) as T;
};

export default {
  logError,
  logInfo,
  setupGlobalErrorHandling,
  monitorPerformance,
  handleNetworkError,
  withErrorHandling
};
`;

  // Create a simple replacement for performanceOptimizer.ts
  const performanceOptimizerContent = `/**
 * Performance Optimizer
 * Simple performance monitoring utilities
 */

export interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  timestamp: Date;
}

export class PerformanceOptimizer {
  private metrics: Map<string, PerformanceMetrics[]> = new Map();
  private renderStartTimes: Map<string, number> = new Map();

  startRender(componentName: string): void {
    this.renderStartTimes.set(componentName, performance.now());
  }

  endRender(componentName: string): void {
    const startTime = this.renderStartTimes.get(componentName);
    if (!startTime) return;

    const renderTime = performance.now() - startTime;
    const metrics: PerformanceMetrics = {
      componentName,
      renderTime,
      timestamp: new Date()
    };

    if (!this.metrics.has(componentName)) {
      this.metrics.set(componentName, []);
    }
    
    const componentMetrics = this.metrics.get(componentName)!;
    componentMetrics.push(metrics);
    
    if (componentMetrics.length > 100) {
      componentMetrics.shift();
    }
    
    this.renderStartTimes.delete(componentName);
  }

  getAverageRenderTime(componentName: string): number {
    const metrics = this.metrics.get(componentName);
    if (!metrics || metrics.length === 0) return 0;
    
    const sum = metrics.reduce((acc, m) => acc + m.renderTime, 0);
    return sum / metrics.length;
  }

  getSlowComponents(thresholdMs: number = 16): Array<{ name: string; avgTime: number }> {
    const slow: Array<{ name: string; avgTime: number }> = [];
    
    this.metrics.forEach((metrics, componentName) => {
      const avgTime = this.getAverageRenderTime(componentName);
      if (avgTime > thresholdMs) {
        slow.push({ name: componentName, avgTime });
      }
    });
    
    return slow.sort((a, b) => b.avgTime - a.avgTime);
  }

  clearMetrics(): void {
    this.metrics.clear();
    this.renderStartTimes.clear();
  }
}

export const performanceOptimizer = new PerformanceOptimizer();

export default performanceOptimizer;
`;

  // Write the new files
  try {
    fs.writeFileSync('utils/errorHandling.ts', errorHandlingContent);
    console.log('Created new utils/errorHandling.ts');
  } catch (error) {
    console.error('Error creating errorHandling.ts:', error.message);
  }

  try {
    fs.writeFileSync('utils/performanceOptimizer.ts', performanceOptimizerContent);
    console.log('Created new utils/performanceOptimizer.ts');
  } catch (error) {
    console.error('Error creating performanceOptimizer.ts:', error.message);
  }
}

// Main execution
console.log('Fixing corrupted utils files...');
fixUtilsFiles();
console.log('Utils files fixed.');