<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
const PerformanceEnhancer: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="performanceenhancer">
      <h2>PerformanceEnhancer</h2>
      <p>PerformanceEnhancer component.</p>
    </div>
  );
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>PerformanceEnhancer | Zion Tech Group</title>
        <meta name="description" content="Professional PerformanceEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="PerformanceEnhancer, AI solutions, IT services, Zion Tech Group, performanceenhancer" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                PerformanceEnhancer
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced performanceenhancer solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div></div></div></div>
=======
'use client';

import React, {useState} from 'react';
import {ArrowRight, Zap} from 'lucide-react';
import {Helmet} from 'react-helmet-async';

const PerformanceEnhancer: React.FC = () => {const [isOptimizing, setIsOptimizing] = useState(false);
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    performanceScore: 0,
    optimizationLevel: 0});

  const features = [{title: "Real-time Monitoring",
      description: "Monitor your application performance in real-time with advanced analytics"},
    {title: "Automatic Optimization",
      description: "AI-powered optimization that automatically improves your app's performance"},
    {title: "Performance Analytics",
      description: "Detailed insights and reports on your application's performance metrics"}];

  const benefits = ['Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'];

  const optimizePerformance = async () => {setIsOptimizing(true);
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setMetrics({
      loadTime: Math.random() * 1000 + 500,
      performanceScore: Math.random() * 40 + 60,
      optimizationLevel: Math.random() * 30 + 70});
    setIsOptimizing(false);
  };

  return (
    <>
      <Helmet>
        <title>Performance Enhancer | Zion Tech Group</title>
        <meta name="description" content="Professional Performance Enhancer services by Zion Tech Group. Advanced AI and IT solutions for your business."   />
        <meta name="keywords" content="Performance Enhancer, AI solutions, IT services, Zion Tech Group, performance optimization"   />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Performance Enhancer
              </span>
              <br   />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced performance enhancer solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2"   />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
          </div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our PerformanceEnhancer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our performanceenhancer solutions deliver unmatched performance, security, and scalability.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
=======
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Performance Enhancer?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our performance enhancer solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid md: grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
  ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our performanceenhancer solutions for your business.
            </p>
          </div></div>
=======
const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({}
  enableWebVitals = true,
const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  enableWebVitals = true;
  enableResourceTiming = true,
  enableMemoryMonitoring = true,
  enableNetworkMonitoring = true,
  enableUserTiming = true,
  enableLongTaskMonitoring = true,
  enableLayoutShiftMonitoring = true,
  enableFirstInputDelay = true,
  enableCumulativeLayoutShift = true,
  enableLargestContentfulPaint = true,
  enableFirstContentfulPaint = true,
  enableTimeToFirstByte = true,
  enableAnalytics = true,
  enableConsoleLogging = false,
  enableErrorReporting = true,
  enablePerformanceBudget = true,
  // Performance metrics storage;
  const performanceMetrics = useMemo(() => ({
  performanceBudget = {}
    lcp: 2500,
    fid: 100,
    cls: 0.1,
    fcp: 1800,
    ttfb: 600
  }
}) => {
}
  // Performance metrics storage
  const performanceMetrics = useMemo(() => ({}
    webVitals: {} as Record<string, any>,
    resourceTiming: [] as PerformanceEntry[],
    userTiming: [] as PerformanceEntry[],
    memoryUsage: {} as any,
    networkInfo: {} as any,
    longTasks: [] as PerformanceEntry[],
    layoutShifts: [] as PerformanceEntry[],
    errors: [] as any[]}), []);

  // Enhanced error reporting
  const reportError = useCallback((error: any, context?: string) => {}
    if (!enableErrorReporting) return;

    const errorData = {}
      message: error.message || 'Unknown error',
      stack: error.stack,
      context: context || 'PerformanceEnhancer',
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      performanceMetrics: performanceMetrics
    };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div></div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
    // Send to custom endpoint;
    if (typeof window !== 'undefined' && navigator.sendBeacon) {
    // Send to analytics
    if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {}
      (window as any).gtag('event', 'performance_error', {)}
        event_category: 'Performance',
        event_label: context || 'PerformanceEnhancer',
        value: 1,
        custom_parameter_1: error.message,
        custom_parameter_2: error.stack

    }

    // Send to custom endpoint
    if (typeof window !== 'undefined' && navigator.sendBeacon) {}
      navigator.sendBeacon('/api/analytics/performance-errors', JSON.stringify(errorData));
    }
  }, [enableErrorReporting, enableAnalytics, performanceMetrics]);

  // Web Vitals monitoring
  useEffect(() => {}
    if (!enableWebVitals || typeof window === 'undefined') return;

    const reportMetric = (metric: any) => {}
      try {}
        performanceMetrics.webVitals[metric.name] = metric;

        // Check performance budget
        if (enablePerformanceBudget && performanceBudget[metric.name as keyof typeof performanceBudget]) {}
          const budget = performanceBudget[metric.name as keyof typeof performanceBudget];
          if (budget && metric.value > budget) {}
            reportError(new Error(`Performance budget exceeded for ${metric.name}: ${metric.value} > ${budget}`), 'PerformanceBudget');
          }
        }

        // Send to analytics
        if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {}
          (window as any).gtag('event', 'web_vitals', {)}
            event_category: 'Performance',
            event_label: metric.name)
    value: Math.round(metric.value),
            non_interaction: true,
            custom_parameter_1: metric.delta,
            custom_parameter_2: metric.id

          (window as any).gtag('event', 'web_vitals', {)
            event_category: 'Performance')
            event_label: metric.name)
            value: Math.round(metric.value)
            non_interaction: true;
            custom_parameter_1: metric.delta;
            custom_parameter_2: metric.id;
        }

        // Send to custom endpoint
        if (typeof window !== 'undefined' && navigator.sendBeacon) {}
          const data = JSON.stringify({)}
            name: metric.name,
            value: metric.value,
            delta: metric.delta,
            id: metric.id,
            navigationType: metric.navigationType)
    timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            performanceMetrics: performanceMetrics

          const data = JSON.stringify({)
            name: metric.name;)
            value: metric.value;)
            delta: metric.delta;)
            id: metric.id)
            navigationType: metric.navigationType)
            timestamp: Date.now()
            url: window.location.href;
            userAgent: navigator.userAgent;
            performanceMetrics: performanceMetrics;
          navigator.sendBeacon('/api/analytics/performance', data);
        }

        if (enableConsoleLogging) {}
          }
      } catch (error) {}
        reportError(error, 'WebVitalsReporting');
      }
    };

    // Measure Core Web Vitals
    if (enableLargestContentfulPaint) {}
      getLCP(reportMetric);
    }
    if (enableFirstInputDelay) {}
      getFID(reportMetric);
    }
    if (enableCumulativeLayoutShift) {}
      getCLS(reportMetric);
    }
    if (enableFirstContentfulPaint) {}
      getFCP(reportMetric);
    }
    if (enableTimeToFirstByte) {}
      getTTFB(reportMetric);
    }
  }, [
    enableWebVitals,
    enableLargestContentfulPaint,
    enableFirstInputDelay,
    enableCumulativeLayoutShift,
    enableFirstContentfulPaint,
    enableTimeToFirstByte,
    enablePerformanceBudget,
    performanceBudget,
    enableAnalytics,
    enableConsoleLogging,
    performanceMetrics,
    reportError;
  ]);

  // Resource timing monitoring
  useEffect(() => {}
    if (!enableResourceTiming || typeof window === 'undefined') return;

    const measureResourceTiming = () => {}
      try {}
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        performanceMetrics.resourceTiming = resources;

        // Analyze resource performance;
        const slowResources = resources.filter(resource =>)
          resource.duration > 1000 || resource.transferSize > 1000000;)
          resource.duration > 1000 || resource.transferSize > 1000000
        );

        if (slowResources.length > 0) {}
          reportError(new Error(`Slow resources detected: ${slowResources.length} resources`), 'ResourceTiming');
        }

        if (enableConsoleLogging) {}
          }
      } catch (error) {}
        reportError(error, 'ResourceTiming');
      }
    };

    if (document.readyState === 'complete') {}
      measureResourceTiming();
    } else {}
      window.addEventListener('load', measureResourceTiming);
    }

    return () => {}
      window.removeEventListener('load', measureResourceTiming);
    };
  }, [enableResourceTiming, enableConsoleLogging, performanceMetrics, reportError]);

  // Memory monitoring
  useEffect(() => {}
    if (!enableMemoryMonitoring || typeof window === 'undefined') return;

    const measureMemory = () => {}
      try {}
        if ('memory' in performance) {}
          const memory = (performance as any).memory;
          performanceMetrics.memoryUsage = {}
            usedJSHeapSize: memory.usedJSHeapSize,
            totalJSHeapSize: memory.totalJSHeapSize,
            jsHeapSizeLimit: memory.jsHeapSizeLimit,
            timestamp: Date.now()
          };

          // Check for memory leaks
          if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {}
            reportError(new Error('High memory usage detected'), 'MemoryMonitoring');
          }

          if (enableConsoleLogging) {}
            }
        }
      } catch (error) {}
        reportError(error, 'MemoryMonitoring');
      }
    };

    // Measure memory every 30 seconds;
    const memoryInterval = setInterval(measureMemory, 30000);
    measureMemory(); // Initial measurement;
    return () => clearInterval(memoryInterval);
  }, [enableMemoryMonitoring, enableConsoleLogging, performanceMetrics, reportError]);

  // Network monitoring
  useEffect(() => {}
    if (!enableNetworkMonitoring || typeof window === 'undefined') return;

    const measureNetwork = () => {}
      try {}
        if ('connection' in navigator) {}
          const connection = (navigator as any).connection;
          performanceMetrics.networkInfo = {}
            effectiveType: connection.effectiveType,
            downlink: connection.downlink,
            rtt: connection.rtt,
            saveData: connection.saveData,
            timestamp: Date.now()
          };

          if (enableConsoleLogging) {}
            }
        }
      } catch (error) {}
        reportError(error, 'NetworkMonitoring');
      }
    };

    measureNetwork();
  }, [enableNetworkMonitoring, enableConsoleLogging, performanceMetrics, reportError]);

  // Long task monitoring
  useEffect(() => {}
    if (!enableLongTaskMonitoring || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {}
      try {}
        const entries = list.getEntries();
        performanceMetrics.longTasks.push(...entries);

        // Report long tasks;
        entries.forEach(entry => {)
          if (entry.duration > 50) {
        entries.forEach(entry => {)}
          if (entry.duration > 50) {}
            reportError(new Error(`Long task detected: ${entry.duration}ms`), 'LongTaskMonitoring');
          }

        if (enableConsoleLogging) {}
          }
      } catch (error) {}
        reportError(error, 'LongTaskMonitoring');
      }

    observer.observe({ entryTypes: ['longtask'] });

    return () => observer.disconnect();
  }, [enableLongTaskMonitoring, enableConsoleLogging, performanceMetrics, reportError]);

  // Layout shift monitoring
  useEffect(() => {}
    if (!enableLayoutShiftMonitoring || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {}
      try {}
        const entries = list.getEntries();
        performanceMetrics.layoutShifts.push(...entries);

        // Report significant layout shifts;
        entries.forEach(entry => {)
          if (entry.value > 0.1) {
        entries.forEach(entry => {)}
          if (entry.value > 0.1) {}
            reportError(new Error(`Significant layout shift detected: ${entry.value}`), 'LayoutShiftMonitoring');
          }

        if (enableConsoleLogging) {}
          }
      } catch (error) {}
        reportError(error, 'LayoutShiftMonitoring');
      }

    observer.observe({ entryTypes: ['layout-shift'] });

    return () => observer.disconnect();
  }, [enableLayoutShiftMonitoring, enableConsoleLogging, performanceMetrics, reportError]);

  // User timing monitoring
  useEffect(() => {}
    if (!enableUserTiming || typeof window === 'undefined') return;

    const measureUserTiming = () => {}
      try {}
        const userTiming = performance.getEntriesByType('measure') as PerformanceMeasure[];
        performanceMetrics.userTiming = userTiming;

        if (enableConsoleLogging) {}
          }
      } catch (error) {}
        reportError(error, 'UserTiming');
      }
    };

    if (document.readyState === 'complete') {}
      measureUserTiming();
    } else {}
      window.addEventListener('load', measureUserTiming);
    }

    return () => {}
      window.removeEventListener('load', measureUserTiming);
    };
  }, [enableUserTiming, enableConsoleLogging, performanceMetrics, reportError]);

  // Performance summary reporting
  useEffect(() => {}
    const reportPerformanceSummary = () => {}
      try {}
        const summary = {}
          webVitals: performanceMetrics.webVitals,
          resourceCount: performanceMetrics.resourceTiming.length,
          longTaskCount: performanceMetrics.longTasks.length,
          layoutShiftCount: performanceMetrics.layoutShifts.length,
          memoryUsage: performanceMetrics.memoryUsage,
          networkInfo: performanceMetrics.networkInfo,
          errorCount: performanceMetrics.errors.length,
          timestamp: Date.now(),
          url: window.location.href;
        };

        if (enableAnalytics && typeof window !== 'undefined' && 'gtag' in window) {}
          (window as any).gtag('event', 'performance_summary', {)}
            event_category: 'Performance',
            event_label: 'Summary',
            value: 1)
    custom_parameter_1: JSON.stringify(summary)

          (window as any).gtag('event', 'performance_summary', {)
            event_category: 'Performance'),
            event_label: 'Summary'),
            value: 1),
            custom_parameter_1: JSON.stringify(summary)}

        if (enableConsoleLogging) {}
          }
      } catch (error) {}
        reportError(error, 'PerformanceSummary');
      }
    };

    // Report summary after 10 seconds;
    const timeout = setTimeout(reportPerformanceSummary, 10000);

    return () => clearTimeout(timeout);
  }, [enableAnalytics, enableConsoleLogging, performanceMetrics, reportError]);

  return null;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

=======
      {/* Performance Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">{metrics.loadTime.toFixed(0)}ms</div>
                <div className="text-gray-300">Load Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{metrics.performanceScore.toFixed(0)}%</div>
                <div className="text-gray-300">Performance Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{metrics.optimizationLevel.toFixed(0)}%</div>
                <div className="text-gray-300">Optimization Level</div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={optimizePerformance}
                disabled={isOptimizing}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
              >
                {isOptimizing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Optimizing...</span>
                  <  />
                ) : (
                  <>
                    <Zap className="w-5 h-5"   />
                    <span>Optimize Performance</span>
                  <  />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our performance enhancer solutions for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
  ))}
          </div>
        </div>
      </section>
    <  />
  );
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
export default PerformanceEnhancer;
=======
'use client'
import React, { useEffect, useState } from 'react'
import { Zap, TrendingUp, Activity, CheckCircle } from 'lucide-react'

interface PerformanceMetrics {
  score: number
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  cumulativeLayoutShift: number
}

interface PerformanceEnhancerProps {
  enableMonitoring?: boolean
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  targetScore?: number
}

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  enableMonitoring = true,
  onMetricsUpdate,
  targetScore = 90
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    score: 0,
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0
  })

  const [isOptimizing, setIsOptimizing] = useState(false)

  useEffect(() => {
    if (!enableMonitoring) return

    const measurePerformance = () => {
      // Measure page load time
      const loadTime = performance.now()

      // Measure Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                firstContentfulPaint: entry.startTime
              }))
            }
          }
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              largestContentfulPaint: entry.startTime
            }))
          }
          if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({
              ...prev,
              cumulativeLayoutShift: prev.cumulativeLayoutShift + (entry as any).value
            }))
          }
        }
      })

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'] })

      // Calculate performance score
      const calculateScore = () => {
        let score = 100

        // FCP scoring (0-100)
        if (metrics.firstContentfulPaint > 3000) score -= 30
        else if (metrics.firstContentfulPaint > 1800) score -= 20
        else if (metrics.firstContentfulPaint > 1000) score -= 10

        // LCP scoring (0-100)
        if (metrics.largestContentfulPaint > 4000) score -= 30
        else if (metrics.largestContentfulPaint > 2500) score -= 20
        else if (metrics.largestContentfulPaint > 1500) score -= 10

        // CLS scoring (0-100)
        if (metrics.cumulativeLayoutShift > 0.25) score -= 30
        else if (metrics.cumulativeLayoutShift > 0.1) score -= 20
        else if (metrics.cumulativeLayoutShift > 0.05) score -= 10

        return Math.max(0, score)
      }

      const updateMetrics = () => {
        const newScore = calculateScore()
        const newMetrics = {
          ...metrics,
          loadTime,
          score: newScore
        }
        
        setMetrics(newMetrics)
        
        if (onMetricsUpdate) {
          onMetricsUpdate(newMetrics)
        }
      }

      // Update metrics after a delay to allow for measurements
      setTimeout(updateMetrics, 1000)

      return () => observer.disconnect()
    }

    const cleanup = measurePerformance()
    return cleanup
  }, [enableMonitoring, onMetricsUpdate, metrics])

  const optimizePerformance = async () => {
    setIsOptimizing(true)
    
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real app, you would implement actual optimizations here
    console.log('Performance optimization completed')
    
    setIsOptimizing(false)
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500'
    if (score >= 70) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return 'bg-green-500'
    if (score >= 70) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-yellow-500" />
          Performance Enhancer
        </h3>
        <div className={`w-3 h-3 rounded-full ${getScoreBgColor(metrics.score)}`} />
      </div>

      {/* Performance Score */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Performance Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(metrics.score)}`}>
            {metrics.score}/100
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${getScoreBgColor(metrics.score)}`}
            style={{ width: `${metrics.score}%` }}
          />
        </div>
        {metrics.score < targetScore && (
          <p className="text-xs text-gray-500 mt-2">
            Target: {targetScore}/100
          </p>
        )}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">Load Time</span>
            <Activity className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {metrics.loadTime.toFixed(0)}ms
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">FCP</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">LCP</span>
            <TrendingUp className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {metrics.largestContentfulPaint.toFixed(0)}ms
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-gray-600">CLS</span>
            <Activity className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-lg font-bold text-gray-900">
            {metrics.cumulativeLayoutShift.toFixed(3)}
          </div>
        </div>
      </div>

      {/* Optimization Button */}
      <button
        onClick={optimizePerformance}
        disabled={isOptimizing}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isOptimizing ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
            Optimizing...
          </>
        ) : (
          <>
            <Zap className="w-4 h-4 mr-2" />
            Optimize Performance
          </>
        )}
      </button>

      {/* Recommendations */}
      {metrics.score < targetScore && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="text-sm font-semibold text-yellow-800 mb-2">Recommendations</h4>
          <ul className="text-xs text-yellow-700 space-y-1">
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2" />
              Optimize images and assets
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2" />
              Enable compression
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-3 h-3 mr-2" />
              Minimize JavaScript bundles
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default PerformanceEnhancer
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
