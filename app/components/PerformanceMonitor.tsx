'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const PerformanceMonitorPage: React.FC = () => {
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
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]
=======

interface PerformanceMonitorProps {
  onMetricsUpdate?: (_metrics: PerformanceMetrics) => void;
  enabled?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enabled = true
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !enabled) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    
    // These would need to be measured with specific APIs
    const firstInputDelay = 0; // Would need to measure with PerformanceObserver
    const cumulativeLayoutShift = 0; // Would need to measure with PerformanceObserver
    const timeToInteractive = navigation.domContentLoadedEventEnd - navigation.navigationStart;

    const performanceMetrics: PerformanceMetrics = {
      loadTime,
      firstContentfulPaint,
      largestContentfulPaint,
      firstInputDelay,
      cumulativeLayoutShift,
      timeToInteractive
    };

    setMetrics(performanceMetrics);
    onMetricsUpdate?.(performanceMetrics);
  }, [onMetricsUpdate, enabled]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [measurePerformance]);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && metrics) {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  if (!enabled || !metrics) {
    return null;
  }

>>>>>>> cursor/fix-errors-and-merge-to-main-d47f
  return (
    <>
      <Helmet>
        <title>PerformanceMonitor</title>
        <meta name="description" content="Advanced PerformanceMonitor solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, PerformanceMonitor, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;>
              PerformanceMonitor
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced PerformanceMonitor solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
</>
  )
=======

import React, { useState, useEffect } from 'react';
import { Activity, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  firstInputDelay: number | null;
  cumulativeLayoutShift: number | null;
  timeToInteractive: number | null;
  totalBlockingTime: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (_metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
  logToConsole?: boolean;
  showDashboard?: boolean;
  className?: string;
>>>>>>> cursor/fix-errors-and-merge-to-main-2b30
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = true,
  showDashboard = false,
  className = ''
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToInteractive: null,
    totalBlockingTime: null
  });

  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (!enableRealTimeMonitoring || typeof window === 'undefined') return;

    const measurePerformance = () => {
      const newMetrics: PerformanceMetrics = {
        loadTime: null,
        firstContentfulPaint: null,
        largestContentfulPaint: null,
        firstInputDelay: null,
        cumulativeLayoutShift: null,
        timeToInteractive: null,
        totalBlockingTime: null
      };

      // Measure page load time
      if (performance.timing) {
        const timing = performance.timing;
        newMetrics.loadTime = timing.loadEventEnd - timing.navigationStart;
      }

      // Measure Core Web Vitals using Performance Observer
      if ('PerformanceObserver' in window) {
        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            newMetrics.firstContentfulPaint = fcpEntry.startTime;
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          newMetrics.largestContentfulPaint = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { processingStart: number }) => {
            newMetrics.firstInputDelay = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { hadRecentInput: boolean; value: number }) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          newMetrics.cumulativeLayoutShift = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to Interactive (TTI) - approximation
        const ttiObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const longTasks = entries.filter((entry: PerformanceEntry) => entry.duration > 50);
          if (longTasks.length === 0) {
            newMetrics.timeToInteractive = performance.now();
          }
        });
        ttiObserver.observe({ entryTypes: ['longtask'] });

        // Total Blocking Time (TBT) - approximation
        const tbtObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const blockingTime = entries
            .filter((entry: PerformanceEntry) => entry.duration > 50)
            .reduce((total, entry: PerformanceEntry) => total + (entry.duration - 50), 0);
          newMetrics.totalBlockingTime = blockingTime;
        });
        tbtObserver.observe({ entryTypes: ['longtask'] });
      }

      // Update metrics state
      setMetrics(prevMetrics => ({ ...prevMetrics, ...newMetrics }));
      setIsMonitoring(true);

      // Call callback if provided
      if (onMetricsUpdate) {
        onMetricsUpdate(newMetrics);
      }

      // Log to console if enabled
      if (logToConsole) {
         
        console.log('Performance Metrics Updated:', newMetrics);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }
<<<<<<< HEAD
  }, [])
  // Performance monitoring dashboard (only in development)
  if (process.env.NODE_ENV=== 'development'
    </>
  ) {return (
    <divclassName=&quot;fixed bottom-4 right-4 bg-black/80text-white p-4 rounded-lgtext-xsfont-monomax-w-xs&quot;><h3className=&quot;font-boldmb-2&quot;>PerformanceMetrics</h><divclassName=&quot;space-y-1&quot;><di v>LoadTime: {metrics.loadTime ?`${metrics.loadTime.toFixed(2)}ms`:'N/A'}</di><di v>FCP: {metrics.firstContentfulPaint?`${metrics.firstContentfulPaint.toFixed(2)}ms`:'N/A'}</di><di v>LCP: {metrics.largestContentfulPaint?`${metrics.largestContentfulPaint.toFixed(2)}ms`:'N/A'}</di><di v>FID: {metrics.firstInputDelay?`${metrics.firstInputDelay.toFixed(2)}ms`:'N/A'}</di><di v>CLS: {metrics.cumulativeLayoutShift ?metrics.cumulativeLayoutShift.toFixed(4):'N/A'}</di><di v>TTI: {metrics.timeToInteractive?`${metrics.timeToInteractive.toFixed(2)}ms`:'N/A'}</di><di v>TBT: {metrics.totalBlockingTime?`${metrics.totalBlockingTime.toFixed(2)}ms`:'N/A'}</di></di></di>
    )
  }
  return nul l
}
// Global performance monitoring utilitiesexportconstperformanceUtils= {// Measure custom performance marksmark: (name: string) => {
    if (type of windo w !== 'undefined' && 'performance' in windo w) {
      performance.mark(name)
   }
=======

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [enableRealTimeMonitoring, onMetricsUpdate, logToConsole]);

  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'text-gray-400';
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreIcon = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return <Clock className="w-4 h-4" />;
    if (value <= thresholds.good) return <CheckCircle className="w-4 h-4" />;
    if (value <= thresholds.needsImprovement) return <AlertTriangle className="w-4 h-4" />;
    return <AlertTriangle className="w-4 h-4" />;
  };

  if (!showDashboard) {
    return null;
>>>>>>> cursor/fix-errors-and-merge-to-main-2b30
  }

  return (
    <div className={`fixed bottom-4 right-4 bg-black/90 backdrop-blur-sm text-white p-4 rounded-lg text-xs font-mono max-w-xs z-50 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-4 h-4 text-emerald-400" />
        <h3 className="font-bold text-sm">Performance Metrics</h3>
        {isMonitoring && <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span>Load Time:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}
            <span className={getScoreColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>
              {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>FCP:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}
            <span className={getScoreColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}>
              {metrics.firstContentfulPaint ? `${metrics.firstContentfulPaint.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>LCP:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}
            <span className={getScoreColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}>
              {metrics.largestContentfulPaint ? `${metrics.largestContentfulPaint.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>FID:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}
            <span className={getScoreColor(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}>
              {metrics.firstInputDelay ? `${metrics.firstInputDelay.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>CLS:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}
            <span className={getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}>
              {metrics.cumulativeLayoutShift ? metrics.cumulativeLayoutShift.toFixed(3) : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>TTI:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 })}
            <span className={getScoreColor(metrics.timeToInteractive, { good: 3800, needsImprovement: 7300 })}>
              {metrics.timeToInteractive ? `${metrics.timeToInteractive.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span>TBT:</span>
          <div className="flex items-center gap-1">
            {getScoreIcon(metrics.totalBlockingTime, { good: 200, needsImprovement: 600 })}
            <span className={getScoreColor(metrics.totalBlockingTime, { good: 200, needsImprovement: 600 })}>
              {metrics.totalBlockingTime ? `${metrics.totalBlockingTime.toFixed(0)}ms` : 'N/A'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Global performance monitoring utilities
export const performanceUtils = {
  // Measure custom performance marks
  mark: (name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name);
    }
  },
  
  // Measure time between marks
  measure: (name: string, startMark: string, endMark?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      if (endMark) {
        performance.measure(name, startMark, endMark);
      } else {
        performance.measure(name, startMark);
      }
    }
  },
  
  // Get performance entries
  getEntries: (type?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      return type ? performance.getEntriesByType(type) : performance.getEntries();
    }
    return [];
  },
  
  // Clear performance entries
  clearEntries: (type?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      if (type) {
        performance.clearMeasures(type);
        performance.clearMarks(type);
      } else {
        performance.clearMeasures();
        performance.clearMarks();
      }
    }
  }
};

// Google Analytics integration for performance tracking
export const trackPerformanceToGA = (metrics: PerformanceMetrics) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as { gtag: (..._args: unknown[]) => void }).gtag('event', 'performance_metrics', {
      event_category: 'Performance',
      event_label: 'Core Web Vitals',
      custom_map: {
        load_time: metrics.loadTime,
        first_contentful_paint: metrics.firstContentfulPaint,
        largest_contentful_paint: metrics.largestContentfulPaint,
        first_input_delay: metrics.firstInputDelay,
        cumulative_layout_shift: metrics.cumulativeLayoutShift,
        time_to_interactive: metrics.timeToInteractive,
        total_blocking_time: metrics.totalBlockingTime
      }
    });
  }
};

export default PerformanceMonitor;