import { useState, useEffect, useCallback } from 'react';
import { PerformanceUtils, PerformanceMetrics } from '../utils/performanceUtils';

interface PerformanceState {
  metrics: PerformanceMetrics | null;
  isGood: boolean | null;
  isLoading: boolean;
  error: string | null;
}

interface PerformanceConfig {
  enableMonitoring: boolean;
  sampleRate: number;
  reportUrl?: string;
  autoReport: boolean;
}

const defaultConfig: PerformanceConfig = {
  enableMonitoring: true,
  sampleRate: 1.0,
  autoReport: true,
};

export function usePerformanceMonitoring(config: PerformanceConfig = defaultConfig) {
  const [state, setState] = useState<PerformanceState>({
    metrics: null,
    isGood: null,
    isLoading: true,
    error: null,
  });

  const measurePerformance = useCallback(async () => {
    if (!config.enableMonitoring) {
      setState(prev => ({ ...prev, isLoading: false }));
      return;
    }

    try {
      setState(prev => ({ ...prev, isLoading: true, error: null }));

      const perfUtils = PerformanceUtils.getInstance({
        enableMonitoring: config.enableMonitoring,
        sampleRate: config.sampleRate,
        reportUrl: config.reportUrl,
      });

      // Get Core Web Vitals
      const metrics = await perfUtils.getCoreWebVitals();
      
      if (metrics) {
        const isGood = perfUtils.isPerformanceGood(metrics);
        
        setState(prev => ({
          ...prev,
          metrics,
          isGood,
          isLoading: false,
        }));

        // Auto-report if enabled
        if (config.autoReport) {
          perfUtils.reportMetrics(metrics);
        }
      } else {
        setState(prev => ({
          ...prev,
          isLoading: false,
          error: 'Failed to measure performance metrics',
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      }));
    }
  }, [config]);

  const refreshMetrics = useCallback(() => {
    measurePerformance();
  }, [measurePerformance]);

  const reportMetrics = useCallback(() => {
    if (state.metrics) {
      const perfUtils = PerformanceUtils.getInstance();
      perfUtils.reportMetrics(state.metrics);
    }
  }, [state.metrics]);

  useEffect(() => {
    // Only measure if page is loaded
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      const handleLoad = () => {
        measurePerformance();
        window.removeEventListener('load', handleLoad);
      };
      window.addEventListener('load', handleLoad);
    }
  }, [measurePerformance]);

  return {
    ...state,
    refreshMetrics,
    reportMetrics,
  };
}