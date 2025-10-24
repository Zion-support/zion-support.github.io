<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { Monitor } from 'lucide-react';
interface EnhancedperformancemonitorProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
export default function Enhancedperformancemonitor({ className = '', children, ...props }: EnhancedperformancemonitorProps) {
  return (
    <div className={`enhancedperformancemonitor-component ${className}`} {...props}>
      {children}
=======
=======
'use client';
import React from "react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738

const EnhancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    CLS: null;
    FID: null;
    FCP: null;
    LCP: null;
    TTFB: null;
  });
=======

import {useEffect, useState} from 'react';
import {onCLS, onINP, onFCP, onLCP, onTTFB} from 'web-vitals';

interface PerformanceMetrics {lcp: number | null,
  inp: number | null,
  cls: number | null,
  fcp: number | null,
  ttfb: number | null,
  memoryUsage: number | null,
  loadTime: number | null;}

interface PerformanceReport {metrics: PerformanceMetrics,
  timestamp: string,
  userAgent: string,
  connectionType: string,
  deviceMemory: number | null;}

const EnhancedPerformanceMonitor: React.FC = () => {const [metrics, setMetrics] = useState<PerformanceMetrics   />({
    lcp: null,
    inp: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null,
    loadTime: null;})
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

  const [isVisible, setIsVisible] = useState(false);

<<<<<<< HEAD
  useEffect(() => {
    // Measure Core Web Vitals;
    getCLS((metric) => {
      setMetrics(prev => ({ ...prev, CLS: metric.value }));
    });

    getFID((metric) => {
      setMetrics(prev => ({ ...prev, FID: metric.value }));
    });

    getFCP((metric) => {
      setMetrics(prev => ({ ...prev, FCP: metric.value }));
    });

    getLCP((metric) => {
      setMetrics(prev => ({ ...prev, LCP: metric.value }));
    });

    getTTFB((metric) => {
      setMetrics(prev => ({ ...prev, TTFB: metric.value }));
    });

    // Monitor performance in development;
    if (process.env.NODE_ENV === 'development') {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {
          setIsVisible(prev => !prev);
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
=======
  useEffect(() => {const startTime = performance.now()

    // Monitor Core Web Vitals;
    const measureWebVitals = () => {
      onCLS((metric) => {
        setMetrics(prev => ({ ...prev, cls: metric.value}))
      })

      onINP((metric) => {setMetrics(prev => ({ ...prev, inp: metric.value}))
      })

      onFCP((metric) => {setMetrics(prev => ({ ...prev, fcp: metric.value}))
      })

      onLCP((metric) => {setMetrics(prev => ({ ...prev, lcp: metric.value}))
      })

      onTTFB((metric) => {setMetrics(prev => ({ ...prev, ttfb: metric.value}))
      })
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
    }
  }, []);

<<<<<<< HEAD
  const getScoreColor = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {</<<<PerformanceMetrics>if</PerformanceMetrics></PerformanceMetrics> (value === null) return 'text-gray-400';</<<<PerformanceMetrics>if</PerformanceMetrics></PerformanceMetrics> (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.needsImprovement) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreText = (value: number | null, thresholds: { good: number; needsImprovement: number }) => {
    if (value === null) return 'Measuring...';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.needsImprovement) return 'Needs Improvement';
    return 'Poor';
  };

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return null;
  }

  return(<div className="fixed bottom-4 right-4 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg p-4 shadow-lg z-50 max-w-sm">)
      <div className="flex items-center justify-between mb-3">)
        <h3 className="text-white font-semibold text-sm">Performance Monitor</h3>)
        <button;)
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover: text-white text-xs"
        >
          ✕
        </button>
      </div>,
      ,
      <div className="space-y-2 text-xs">,
        <div className="flex justify-between items-center">,
          <span className="text-gray-300">CLS:</span>,
          <span className={getScoreColor(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })}></span>
            {metrics.CLS ? metrics.CLS.toFixed(3) : '...'} ({getScoreText(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })})
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">FID: </span>,
          <span className={getScoreColor(metrics.FID, { good: 100, needsImprovement: 300 })}></span>
            {metrics.FID ? `${metrics.FID.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FID, { good: 100, needsImprovement: 300 })})
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">FCP: </span>,
          <span className={getScoreColor(metrics.FCP, { good: 1800, needsImprovement: 3000 })}></span>
            {metrics.FCP ? `${metrics.FCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FCP, { good: 1800, needsImprovement: 3000 })})
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">LCP: </span>,
          <span className={getScoreColor(metrics.LCP, { good: 2500, needsImprovement: 4000 })}></span>
            {metrics.LCP ? `${metrics.LCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.LCP, { good: 2500, needsImprovement: 4000 })})
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">TTFB: </span>,
          <span className={getScoreColor(metrics.TTFB, { good: 800, needsImprovement: 1800 })}></span>
            {metrics.TTFB ? `${metrics.TTFB.toFixed(0)}ms` : '...'} ({getScoreText(metrics.TTFB, { good: 800, needsImprovement: 1800 })})
      <div className="space-y-2 text-xs"></div>
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">CLS:</span><span className={getScoreColor(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })}>{metrics.CLS ? metrics.CLS.toFixed(3) : '...'} ({getScoreText(metrics.CLS, { good: 0.1, needsImprovement: 0.25 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">FID:</span><span className={getScoreColor(metrics.FID, { good: 100, needsImprovement: 300 })}>{metrics.FID ? `${metrics.FID.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FID, { good: 100, needsImprovement: 300 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">FCP:</span><span className={getScoreColor(metrics.FCP, { good: 1800, needsImprovement: 3000 })}>{metrics.FCP ? `${metrics.FCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.FCP, { good: 1800, needsImprovement: 3000 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">LCP:</span><span className={getScoreColor(metrics.LCP, { good: 2500, needsImprovement: 4000 })}>{metrics.LCP ? `${metrics.LCP.toFixed(0)}ms` : '...'} ({getScoreText(metrics.LCP, { good: 2500, needsImprovement: 4000 })})</span>
          </span>
        </div>
        
        <div className="flex justify-between items-center"></div>
          <span className="text-gray-300">TTFB:</span><span className={getScoreColor(metrics.TTFB, { good: 800, needsImprovement: 1800 })}>{metrics.TTFB ? `${metrics.TTFB.toFixed(0)}ms` : '...'} ({getScoreText(metrics.TTFB, { good: 800, needsImprovement: 1800 })})</span>
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-700"></div>
        <p className="text-xs text-gray-400">Press Ctrl+Shift+P to toggle</p>
        <p className="text-xs text-gray-400"></p>
          Press Ctrl+Shift+P to toggle;
        </p>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    </div>
  );
};
=======
import React from 'react';

<<<<<<< HEAD
const EnhancedPerformanceMonitor: React.FC = () => {
  return (
    <div className="enhancedperformancemonitor">
      <h2>EnhancedPerformanceMonitor</h2>
      <p>EnhancedPerformanceMonitor component.</p>
    </div>
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our EnhancedPerformanceMonitor?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our enhancedperformancemonitor solutions deliver unmatched performance, security, and scalability.
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
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our enhancedperformancemonitor solutions for your business.
            </p>
          </div></div>

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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your enhancedperformancemonitor needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div></div></div>
          </div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
};

export default EnhancedPerformanceMonitor;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
    // Monitor memory usage;
    const measureMemoryUsage = () => {if ('memory' in, performance) {
        const memory = (performance as, any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB;}))
      }
    }

    // Monitor load time;
    const measureLoadTime = () => {window.addEventListener('load', () => {
        const loadTime = performance.now() - startTime;
        setMetrics(prev => ({ ...prev, loadTime}))
      })
    }

    // Monitor resource loading;
    const monitorResourceLoading = () => {const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resource = entry as PerformanceResourceTiming;
            if (resource.duration > 1000) { // Log slow resources;
              console.warn('Slow resource detected: ', {
                name: resource.name,
                duration: resource.duration,
                size: resource.transferSize;})
            }
          }
        })
      })
      observer.observe({entryTypes: ['resource']})
    }

    // Monitor layout shifts;
    const monitorLayoutShifts = () => {const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          if (entry.entryType === 'layout-shift') {
            const layoutShift = entry as PerformanceEntry & { value: number}
            if (layoutShift.value > 0.1) {// Log significant layout shifts;
              console.warn('Significant layout shift detected: ', {
                value: layoutShift.value,
                startTime: layoutShift.startTime;})
            }
          }
        })
      })
      observer.observe({entryTypes: ['layout-shift']})
    }

    // Generate performance report;
    const generatePerformanceReport = (): PerformanceReport => {const report: PerformanceReport = {
        metrics,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        connectionType: (navigator as, any).connection?.effectiveType || 'unknown',
        deviceMemory: (navigator as, any).deviceMemory || null;}

      // Send to analytics (in a real app, you'd send this to your analytics, service)
      if (typeof window !== 'undefined' && window.gtag) {window.gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'Core Web Vitals',
          value: Math.round(metrics.lcp || 0),
          custom_map: {,
  lcp: metrics.lcp,
            inp: metrics.inp,
            cls: metrics.cls,
            fcp: metrics.fcp,
            ttfb: metrics.ttfb,
            memory_usage: metrics.memoryUsage,
            load_time: metrics.loadTime;}
        })
      }

      return report;
    }

    // Initialize monitoring;
    setIsMonitoring(true)
    measureWebVitals()
    measureMemoryUsage()
    measureLoadTime()
    monitorResourceLoading()
    monitorLayoutShifts()

    // Generate report after 5 seconds;
    const reportTimer = setTimeout(() => {const report = generatePerformanceReport()
      console.log('Performance Report: ', report)}, 5000)

    // Cleanup;
    return () => {clearTimeout(reportTimer)
      setIsMonitoring(false)}
  }, [])

  // Performance optimization suggestions;
  const getPerformanceSuggestions = (): string[] => {const suggestions: string[] = []

    if (metrics.lcp && metrics.lcp > 2500) {
      suggestions.push('LCP is above 2.5 s - consider optimizing images and reducing render-blocking resources')}

    if (metrics.inp && metrics.inp > 200) {suggestions.push('INP is above 200 ms - consider reducing JavaScript execution time')}

    if (metrics.cls && metrics.cls > 0.1) {suggestions.push('CLS is above 0.1 - consider fixing layout shifts and adding size attributes to images')}

    if (metrics.fcp && metrics.fcp > 1800) {suggestions.push('FCP is above 1.8 s - consider optimizing critical rendering path')}

    if (metrics.ttfb && metrics.ttfb > 600) {suggestions.push('TTFB is above 600 ms - consider optimizing server response time')}

    if (metrics.memoryUsage && metrics.memoryUsage > 50) {suggestions.push('High memory usage detected - consider optimizing memory leaks and reducing bundle size')}

    return suggestions;
  }

  const suggestions = getPerformanceSuggestions()

  // Don't render anything in production;
  if (process.env.NODE_ENV === 'production') {return null
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <h3 className="text-sm font-boldmb-2">Performance Monitor</h3>
        <div>LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div>INP: {metrics.inp ? `${metrics.inp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}</div>
        <div>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'Measuring...'}</div>
        <div>Memory: {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}</div>
        <div>Load Time: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'Measuring...'}</div>

 0 && (

          <div className="text-xs font-semiboldmb-1">Suggestions:</div>

 (
=======
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-smz-50">
      <h3 className="text-sm font-boldmb-2"  >Performance Monitor</h3>
      <div className="text-xsspace-y-1">
        <div  >LCP: {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >INP: {metrics.inp ? `${metrics.inp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'Measuring...'}</div>
        <div  >FCP: {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'Measuring...'}</div>
        <div  >Memory: {metrics.memoryUsage ? `${metrics.memoryUsage.toFixed(1)}MB` : 'N/A'}</div>
        <div  >Load Time: {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'Measuring...'}</div>
      
      {suggestions.length > 0 && (
        <div className="mt-2 pt-2 border-tborder-gray-600">
          <div className="text-xs font-semiboldmb-1"  >Suggestions:</div>
          <ul className="text-xsspace-y-1" />
            {suggestions.map((suggestion, index) => (
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
              <li key="{index}" className="text-yellow-300">• {suggestion}</li>
  ))}
          </ul>
        </div>
  )}
    </div>
  )

export default EnhancedPerformanceMonitor;

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
'use client'
import React, { useEffect, useState } from 'react'
import { Activity, Zap, TrendingUp, AlertTriangle } from 'lucide-react'

interface PerformanceMetrics {
  cpu: number
  memory: number
  network: number
  responseTime: number
}

interface EnhancedPerformanceMonitorProps {
  enableRealTimeMonitoring?: boolean
  alertThreshold?: {
    cpu: number
    memory: number
    responseTime: number
  }
}

const EnhancedPerformanceMonitor: React.FC<EnhancedPerformanceMonitorProps> = ({
  enableRealTimeMonitoring = true,
  alertThreshold = {
    cpu: 80,
    memory: 85,
    responseTime: 2000
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cpu: 0,
    memory: 0,
    network: 0,
    responseTime: 0
  })

  const [alerts, setAlerts] = useState<string[]>([])

  useEffect(() => {
    if (!enableRealTimeMonitoring) return

    const updateMetrics = () => {
      // Simulate performance metrics
      const newMetrics = {
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        network: Math.random() * 100,
        responseTime: Math.random() * 3000
      }

      setMetrics(newMetrics)

      // Check for alerts
      const newAlerts: string[] = []
      if (newMetrics.cpu > alertThreshold.cpu) {
        newAlerts.push(`High CPU usage: ${newMetrics.cpu.toFixed(1)}%`)
      }
      if (newMetrics.memory > alertThreshold.memory) {
        newAlerts.push(`High memory usage: ${newMetrics.memory.toFixed(1)}%`)
      }
      if (newMetrics.responseTime > alertThreshold.responseTime) {
        newAlerts.push(`Slow response time: ${newMetrics.responseTime.toFixed(0)}ms`)
      }

      setAlerts(newAlerts)
    }

    const interval = setInterval(updateMetrics, 1000)
    return () => clearInterval(interval)
  }, [enableRealTimeMonitoring, alertThreshold])

  const getStatusColor = (value: number, threshold: number) => {
    if (value > threshold) return 'text-red-500'
    if (value > threshold * 0.8) return 'text-yellow-500'
    return 'text-green-500'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Activity className="w-5 h-5 mr-2" />
          Performance Monitor
        </h3>
        <div className={`w-3 h-3 rounded-full ${enableRealTimeMonitoring ? 'bg-green-500' : 'bg-gray-400'}`} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">CPU Usage</span>
            <Zap className="w-4 h-4 text-blue-500" />
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.cpu, alertThreshold.cpu)}`}>
            {metrics.cpu.toFixed(1)}%
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Memory Usage</span>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.memory, alertThreshold.memory)}`}>
            {metrics.memory.toFixed(1)}%
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Network</span>
            <Activity className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-blue-600">
            {metrics.network.toFixed(1)}%
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Response Time</span>
            <Activity className="w-4 h-4 text-orange-500" />
          </div>
          <div className={`text-2xl font-bold ${getStatusColor(metrics.responseTime, alertThreshold.responseTime)}`}>
            {metrics.responseTime.toFixed(0)}ms
          </div>
        </div>
      </div>

      {alerts.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-sm font-medium text-red-800">Performance Alerts</span>
          </div>
          <ul className="space-y-1">
            {alerts.map((alert, index) => (
              <li key={index} className="text-sm text-red-700">{alert}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default EnhancedPerformanceMonitor
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-05cb
=======
    <div className="enhancedperformancemonitor">
      <h2>EnhancedPerformanceMonitor</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default EnhancedPerformanceMonitor;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
