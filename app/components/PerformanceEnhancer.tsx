'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Zap, Shield, Globe, Brain } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  lcp: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    lcp: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
  });

  useEffect(() => {
    // Simulate performance metrics
    const loadTime = performance.now();
    setMetrics({
      loadTime,
      lcp: 1200,
      cls: 0.1,
      fcp: 800,
      ttfb: 200,
    });
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Speed Optimization',
      description: 'Advanced techniques to improve page load times and user experience',
    },
    {
      icon: Shield,
      title: 'Security Enhancement',
      description: 'Robust security measures to protect your application and data',
    },
    {
      icon: Globe,
      title: 'Global Performance',
      description: 'Worldwide optimization for consistent performance across regions',
    },
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Intelligent monitoring and optimization using machine learning',
    },
  ];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success',
  ];

  return (
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
'use client';

import React, {useState} from 'react';
import {ArrowRight, Zap} from 'lucide-react';
import {Helmet} from 'react-helmet-async';

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
            <p className="text-gray-300text-sm">Monitor and optimize your app's performance</p>
          </div>
        <button
          onClick={optimizePerformance}
          disabled="{isOptimizing}"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerspace-x-2" />
          {isOptimizing ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparentrounded-fullanimate-spin" />
              <span  >Optimizing...</span>

          ) : (
              <Zap className="w-4 h-4" />
              <span  >Optimize</span>

          )}
        </button>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4gap-4mb-6">
        <div className="text-center">
          <div className="text-2 xl font-bold text-white mb-1"  />{metrics.loadTime.toFixed(0)}ms
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
            {features.map((feature, index) => (
              {features.map((feature, index) => (
                <div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4">
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xl font-semiboldtext-white mb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of working with our cutting-edge performance enhancement solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              Key Benefits
  </
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Experience the power of our performanceenhancer solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              {features.map((feature, index) => (

                <div key="{index}" className="flex items-startspace-x-3" />
                <CheckCircle className="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our performance enhancement solutions and how they can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Demo
        <title>PerformanceEnhancer | Zion Tech Group</title>
        <meta name="description" content="Professional PerformanceEnhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." / / />
        <meta name="keywords" content="PerformanceEnhancer, AI solutions, IT services, Zion Tech Group, performanceenhancer" / / />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4sm:px-6lg:px-8" /></section>
        <div className="max-w-7xlmx-auto"></div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent"  />PerformanceEnhancer
              </span>
              <br   />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced performance enhancer solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300">Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
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
          </div>
        </div>
      </section>

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
};

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

export default PerformanceEnhancer;
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
import React from 'react';

const PerformanceEnhancer: React.FC<PerformanceEnhancerProps> = () => {
  return (
    <div className="performanceenhancer">
      <h2>PerformanceEnhancer</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default PerformanceEnhancer;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Our performanceenhancer solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"></div>
            {features.map((feature, index) => (}
              {features.map((feature, index) => (
                <div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" /></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4"></div>
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xl font-semiboldtext-white mb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>))}
          </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6lg:px-8bg-white/5" /></section>
        <div className="max-w-7xlmx-auto"></div>
          <div className="text-centermb-16"></div>
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Experience the power of our performanceenhancer solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6"></div>
            {benefits.map((benefit, index) => (}
              {features.map((feature, index) => (

                <div key="{index}" className="flex items-startspace-x-3" /></div>
                <CheckCircle className="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
};
