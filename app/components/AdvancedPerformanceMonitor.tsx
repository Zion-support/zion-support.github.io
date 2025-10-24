'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle } from "lucide-react";

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  memory: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
}

const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      if (onMetricsUpdate) {
        onMetricsUpdate(updated);
      }
      return updated;
    });
  }, [onMetricsUpdate]);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    // First Contentful Paint
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      updateMetrics({ fcp: fcpEntry.startTime });
    }

    // Largest Contentful Paint
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      const lcp = lcpEntries[lcpEntries.length - 1] as PerformanceEntry;
      updateMetrics({ lcp: lcp.startTime });
    }

    // First Input Delay
    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {
      const fid = fidEntries[0] as PerformanceEventTiming;
      updateMetrics({ fid: fid.processingStart - fid.startTime });
    }

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsEntries = performance.getEntriesByType('layout-shift');
    clsEntries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    });
    updateMetrics({ cls: clsValue });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      updateMetrics({ ttfb: navigationEntry.responseStart - navigationEntry.requestStart });
    }

    // Memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      updateMetrics({ memory: memory.usedJSHeapSize / 1024 / 1024 }); // Convert to MB
    }
  }, [updateMetrics]);

  useEffect(() => {
    if (!enableRealTimeMonitoring) return;

    const startMonitoring = () => {
      setIsMonitoring(true);
      measurePerformance();
    };

    // Start monitoring after page load
    if (document.readyState === 'complete') {
      startMonitoring();
    } else {
      window.addEventListener('load', startMonitoring);
    }

    // Monitor for layout shifts
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'layout-shift') {
          measurePerformance();
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Layout shift observation not supported
    }

    return () => {
      window.removeEventListener('load', startMonitoring);
      observer.disconnect();
    };
  }, [enableRealTimeMonitoring, measurePerformance]);

  const getPerformanceScore = (metric: number | null, thresholds: { good: number; needsImprovement: number }): 'good' | 'needs-improvement' | 'poor' => {
    if (metric === null) return 'poor';
    if (metric <= thresholds.good) return 'good';
    if (metric <= thresholds.needsImprovement) return 'needs-improvement';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-600';
      case 'needs-improvement': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Performance Monitor - Zion Tech Group</title>
        <meta name="description" content="Monitor and optimize your application performance with our advanced performance monitoring tools." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Advanced Performance Monitor
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Monitor, analyze, and optimize your application performance with real-time metrics and AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Monitoring
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Performance Metrics Dashboard */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Real-Time Performance Metrics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">First Contentful Paint</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
                </div>
                <div className={`text-sm ${getScoreColor(getPerformanceScore(metrics.fcp, { good: 1800, needsImprovement: 3000 }))}`}>
                  {getPerformanceScore(metrics.fcp, { good: 1800, needsImprovement: 3000 }).replace('-', ' ')}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Largest Contentful Paint</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
                </div>
                <div className={`text-sm ${getScoreColor(getPerformanceScore(metrics.lcp, { good: 2500, needsImprovement: 4000 }))}`}>
                  {getPerformanceScore(metrics.lcp, { good: 2500, needsImprovement: 4000 }).replace('-', ' ')}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">First Input Delay</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
                </div>
                <div className={`text-sm ${getScoreColor(getPerformanceScore(metrics.fid, { good: 100, needsImprovement: 300 }))}`}>
                  {getPerformanceScore(metrics.fid, { good: 100, needsImprovement: 300 }).replace('-', ' ')}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Cumulative Layout Shift</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
                </div>
                <div className={`text-sm ${getScoreColor(getPerformanceScore(metrics.cls, { good: 0.1, needsImprovement: 0.25 }))}`}>
                  {getPerformanceScore(metrics.cls, { good: 0.1, needsImprovement: 0.25 }).replace('-', ' ')}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Time to First Byte</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
                </div>
                <div className={`text-sm ${getScoreColor(getPerformanceScore(metrics.ttfb, { good: 800, needsImprovement: 1800 }))}`}>
                  {getPerformanceScore(metrics.ttfb, { good: 800, needsImprovement: 1800 }).replace('-', ' ')}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Memory Usage</h3>
                <div className="text-2xl font-bold text-cyan-400 mb-1">
                  {metrics.memory ? `${metrics.memory.toFixed(1)}MB` : 'N/A'}
                </div>
                <div className="text-sm text-gray-400">
                  JavaScript Heap
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={measurePerformance}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Refresh Metrics
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Advanced Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedPerformanceMonitor;