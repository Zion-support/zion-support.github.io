import React, { useEffect, useState } from 'react';
import { usePerformanceMonitor } from '../utils/performance-monitor';
import ErrorBoundary from './ErrorBoundary';

interface PerformanceWrapperProps {
  children: React.ReactNode;
  componentName: string;
  fallback?: React.ComponentType;
}

export const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({
  children,
  componentName,
  fallback: FallbackComponent
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { measureFunction, recordMetric } = usePerformanceMonitor();

  useEffect(() => {
    const startTime = performance.now();
    
    const loadComponent = async () => {
      try {
        // Simulate component loading time
        await new Promise(resolve => setTimeout(resolve, 0));
        
        const endTime = performance.now();
        recordMetric(`${componentName}_load_time`, endTime - startTime);
        
        setIsLoading(false);
      } catch (err) {
        setError(err as Error);
        recordMetric(`${componentName}_load_error`, 1);
      }
    };

    measureFunction(`${componentName}_mount`, loadComponent);
  }, [componentName, measureFunction, recordMetric]);

  if (error) {
    if (FallbackComponent) {
      return <FallbackComponent />;
    }
    return (
      <div className="error-state">
        <p>Failed to load {componentName}</p>
        <button onClick={() => setError(null)}>Retry</button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-state" data-testid={`${componentName}-loading`}>
        <div className="spinner" />
        <p>Loading {componentName}...</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
};

// Lazy loading wrapper
export const LazyPerformanceWrapper = React.lazy(() => 
  Promise.resolve({ default: PerformanceWrapper })
);

// Performance monitoring hook
export const useComponentPerformance = (componentName: string) => {
  const { measureFunction, recordMetric } = usePerformanceMonitor();
  const [metrics, setMetrics] = useState<Record<string, number>>({});

  const trackMetric = (metricName: string, value: number) => {
    const fullMetricName = `${componentName}_${metricName}`;
    recordMetric(fullMetricName, value);
    setMetrics(prev => ({ ...prev, [metricName]: value }));
  };

  const trackFunction = <T extends unknown[], R>(
    functionName: string,
    fn: (...args: T) => R
  ) => {
    return measureFunction(`${componentName}_${functionName}`, fn);
  };

  const trackAsyncFunction = <T extends unknown[], R>(
    functionName: string,
    fn: (...args: T) => Promise<R>
  ) => {
    return measureFunction(`${componentName}_${functionName}`, fn);
  };

  return {
    trackMetric,
    trackFunction,
    trackAsyncFunction,
    metrics,
  };
};