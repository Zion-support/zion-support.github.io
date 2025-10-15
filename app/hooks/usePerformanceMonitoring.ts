import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  totalBlockingTime: number;
}

interface PerformanceState {
  metrics: PerformanceMetrics | null;
  isMonitoring: boolean;
  score: number;
  recommendations: string[];
}

export function usePerformanceMonitoring() {
  const [state, setState] = useState<PerformanceState>({
    metrics: null,
    isMonitoring: false,
    score: 0,
    recommendations: []
  });

  const calculateScore = useCallback((metrics: PerformanceMetrics): number => {
    let score = 100;
    
    // LCP scoring (0-25 points)
    if (metrics.largestContentfulPaint > 4000) score -= 25;
    else if (metrics.largestContentfulPaint > 2500) score -= 15;
    else if (metrics.largestContentfulPaint > 2000) score -= 5;
    
    // FID scoring (0-25 points)
    if (metrics.firstInputDelay > 300) score -= 25;
    else if (metrics.firstInputDelay > 100) score -= 15;
    else if (metrics.firstInputDelay > 50) score -= 5;
    
    // CLS scoring (0-25 points)
    if (metrics.cumulativeLayoutShift > 0.25) score -= 25;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 15;
    else if (metrics.cumulativeLayoutShift > 0.05) score -= 5;
    
    // Load time scoring (0-25 points)
    if (metrics.loadTime > 5000) score -= 25;
    else if (metrics.loadTime > 3000) score -= 15;
    else if (metrics.loadTime > 2000) score -= 5;
    
    return Math.max(0, score);
  }, []);

  const generateRecommendations = useCallback((metrics: PerformanceMetrics): string[] => {
    const recommendations: string[] = [];
    
    if (metrics.largestContentfulPaint > 2500) {
      recommendations.push('Optimize images and use next-gen formats (WebP, AVIF)');
    }
    
    if (metrics.firstInputDelay > 100) {
      recommendations.push('Reduce JavaScript execution time and use code splitting');
    }
    
    if (metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('Add size attributes to images and avoid dynamic content insertion');
    }
    
    if (metrics.loadTime > 3000) {
      recommendations.push('Enable compression and optimize server response times');
    }
    
    if (metrics.totalBlockingTime > 300) {
      recommendations.push('Defer non-critical JavaScript and optimize third-party scripts');
    }
    
    return recommendations;
  }, []);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !window.performance) {
      return;
    }

    try {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType('paint');
      const lcpEntries = window.performance.getEntriesByType('largest-contentful-paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = lcpEntries[0] as PerformanceEntry;
      
      // Calculate Total Blocking Time
      const longTasks = window.performance.getEntriesByType('longtask');
      const totalBlockingTime = longTasks.reduce((total, task) => {
        return total + (task.duration - 50); // Tasks over 50ms contribute to TBT
      }, 0);
      
      const metrics: PerformanceMetrics = {
        loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: 0, // Will be updated by Web Vitals
        firstInputDelay: 0, // Will be updated by Web Vitals
        timeToInteractive: navigation ? navigation.domInteractive - navigation.fetchStart : 0,
        totalBlockingTime
      };

      const score = calculateScore(metrics);
      const recommendations = generateRecommendations(metrics);

      setState({
        metrics,
        isMonitoring: true,
        score,
        recommendations
      });

      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('[Performance Monitoring]', {
          metrics,
          score,
          recommendations
        });
      }
    } catch (error) {
      console.error('Performance monitoring error:', error);
    }
  }, [calculateScore, generateRecommendations]);

  const startMonitoring = useCallback(() => {
    setState(prev => ({ ...prev, isMonitoring: true }));
  }, []);

  const stopMonitoring = useCallback(() => {
    setState(prev => ({ ...prev, isMonitoring: false }));
  }, []);

  useEffect(() => {
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [measurePerformance]);

  return {
    state,
    measurePerformance,
    startMonitoring,
    stopMonitoring
  };
}