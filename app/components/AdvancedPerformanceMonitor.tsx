'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Activity, Zap, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory?: {
    used: number;
    total: number;
    limit: number;
  };
}

interface PerformanceRecommendation {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  category: 'rendering' | 'loading' | 'interactivity' | 'stability' | 'server';
}

const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  const measurePerformance = () => {
    try {
      // Measure Core Web Vitals
      if ('web-vitals' in window) {
        // This would be implemented with the web-vitals library
        console.log('Web Vitals measurement would be implemented here');
      }
    } catch (error) {
      console.warn('Performance monitoring error:', error);
    }
  }

  // Measure memory usage
  const measureMemoryUsage = () => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memory: {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        }
      }));
    }
  };

  useEffect(() => {
    measurePerformance();
    measureMemoryUsage();

    // Periodic memory monitoring
    const memoryInterval = setInterval(measureMemoryUsage, 30000);

    // Cleanup
    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  // Performance score calculation
  const calculatePerformanceScore = () => {
    const scores = []
    
    if (metrics.fcp !== null) {
      scores.push(metrics.fcp < 1800 ? 100 : Math.max(0, 100 - (metrics.fcp - 1800) / 100))
    }
    
    if (metrics.lcp !== null) {
      scores.push(metrics.lcp < 2500 ? 100 : Math.max(0, 100 - (metrics.lcp - 2500) / 100))
    }
    
    if (metrics.fid !== null) {
      scores.push(metrics.fid < 100 ? 100 : Math.max(0, 100 - (metrics.fid - 100) / 10))
    }
    
    if (metrics.cls !== null) {
      scores.push(metrics.cls < 0.1 ? 100 : Math.max(0, 100 - (metrics.cls - 0.1) / 0.1))
    }
    
    if (metrics.ttfb !== null) {
      scores.push(metrics.ttfb < 800 ? 100 : Math.max(0, 100 - (metrics.ttfb - 800) / 100))
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0
  }

  const getPerformanceGrade = (score: number) => {
    if (score >= 90) return { grade: 'A', color: 'text-green-500' }
    if (score >= 80) return { grade: 'B', color: 'text-yellow-500' }
    if (score >= 70) return { grade: 'C', color: 'text-orange-500' }
    return { grade: 'D', color: 'text-red-500' }
  }

  const performanceScore = calculatePerformanceScore()
  const { grade, color } = getPerformanceGrade(performanceScore)

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900 flex items-center">
          <Activity className="w-4 h-4 mr-2" />
          Performance Monitor
        </h3>
        <button className="text-gray-400 hover:text-gray-600">
          <Zap className="w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Overall Score:</span>
          <span className={`font-mono text-lg font-bold ${color}`}>
            {performanceScore}/100 ({grade})
          </span>
        </div>
        
        {metrics.fcp !== null && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">FCP:</span>
            <span className="font-mono">{metrics.fcp.toFixed(0)}ms</span>
          </div>
        )}
        
        {metrics.lcp !== null && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">LCP:</span>
            <span className="font-mono">{metrics.lcp.toFixed(0)}ms</span>
          </div>
        )}
        
        {metrics.fid !== null && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">FID:</span>
            <span className="font-mono">{metrics.fid.toFixed(0)}ms</span>
          </div>
        )}
        
        {metrics.cls !== null && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">CLS:</span>
            <span className="font-mono">{metrics.cls.toFixed(3)}</span>
          </div>
        )}
        
        {metrics.ttfb !== null && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">TTFB:</span>
            <span className="font-mono">{metrics.ttfb.toFixed(0)}ms</span>
          </div>
        )}
        
        {metrics.memory && (
          <div className="space-y-1 text-xs text-gray-500">
            <div>Memory: {Math.round(metrics.memory.used / 1024 / 1024)}MB / {Math.round(metrics.memory.total / 1024 / 1024)}MB</div>
            <div>Limit: {Math.round(metrics.memory.limit / 1024 / 1024)}MB</div>
          </div>
        )}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          <div className="flex items-center mb-1">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Good
          </div>
          <div className="flex items-center mb-1">
            <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
            Needs Improvement
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Poor
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;