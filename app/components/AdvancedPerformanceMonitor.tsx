<<<<<<< HEAD
'use client';

import React, { useState, useCallback, useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  fid: number | null
  cls: number | null
  ttfb: number | null
  memory: number | null
}

interface PerformanceMonitorProps {
<<<<<<< HEAD
  onMetricsUpdate?: (_metrics: PerformanceMetrics) => void;
  enableRealTimeMonitoring?: boolean;
=======
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void
  enableRealTimeMonitoring?: boolean
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
}


const AdvancedPerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    memory: null,
  })

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return
    if (typeof PerformanceObserver === 'undefined') return

    const observers: PerformanceObserver[] = []

    // Measure First Contentful Paint (FCP)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
<<<<<<< HEAD
        entries.forEach((entry: any) => {
=======
        entries.forEach((entry: PerformanceEntry) => {
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      observers.push(fcpObserver);
    } catch (error) {
      console.warn('FCP measurement failed:', error);
    }

    // Measure First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
<<<<<<< HEAD
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      observers.push(fidObserver);
    } catch (error) {
      console.warn('FID measurement failed:', error);
=======
        entries.forEach((entry: PerformanceEntry) => {
          if (entry.processingStart && entry.startTime) {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }))
          }
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })
      observers.push(fidObserver)
    } catch (error) {
      console.warn('FID measurement failed:', error)
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
    }

    // Measure Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
<<<<<<< HEAD
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => ({ ...prev, cls: clsValue }));
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS measurement failed:', error);
=======
        entries.forEach((entry: PerformanceEntry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            setMetrics(prev => ({ ...prev, cls: clsValue }))
          }
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      observers.push(clsObserver)
    } catch (error) {
      console.warn('CLS measurement failed:', error)
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
    }

    // Measure Time to First Byte (TTFB)
    try {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry) {
<<<<<<< HEAD
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        setMetrics(prev => ({ ...prev, ttfb }));
      }
    } catch (error) {
      console.warn('TTFB measurement failed:', error);
=======
        const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
        setMetrics(prev => ({ ...prev, ttfb }))
      }
    } catch (error) {
      console.warn('TTFB measurement failed:', error)
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
    }

    // Measure Memory Usage
    try {
      if ('memory' in performance) {
<<<<<<< HEAD
        const memory = (performance as any).memory;
        setMetrics(prev => ({ ...prev, memory: memory.usedJSHeapSize }));
      }
    } catch (error) {
      console.warn('Memory measurement failed:', error);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
=======
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory
        setMetrics(prev => ({ ...prev, memory: memory.usedJSHeapSize }))
      }
    } catch (error) {
      console.warn('Memory measurement failed:', error)
    }

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c

  useEffect(() => {
    if (!enableRealTimeMonitoring) return

    const cleanup = measureWebVitals()

    // Update metrics every 5 seconds
    const interval = setInterval(() => {
      measureWebVitals()
    }, 5000)

    return () => {
      if (cleanup) cleanup();
      clearInterval(interval);
    };
  }, [measureWebVitals, enableRealTimeMonitoring]);

  useEffect(() => {
    if (onMetricsUpdate) {
<<<<<<< HEAD
      onMetricsUpdate(metrics);
=======
      onMetricsUpdate(metrics)
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
    }
  }, [metrics, onMetricsUpdate])

  return (
    <div className="performance-monitor">
      <div className="metrics-display">
        <h3>Performance Metrics</h3>
        <div className="metric">
          <span>FCP: {metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span>FID: {metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span>CLS: {metrics.cls ? metrics.cls.toFixed(4) : 'N/A'}</span>
        </div>
        <div className="metric">
          <span>TTFB: {metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A'}</span>
        </div>
        <div className="metric">
          <span>Memory: {metrics.memory ? `${(metrics.memory / 1024 / 1024).toFixed(2)}MB` : 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AdvancedPerformanceMonitorPage: React.FC = () => {
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
  "Increase efficiency by up to 50%",
      "Reduce costs by 30% with automation",
      "Improve decision-making with AI insights",
      "Scale operations without proportional staff increases",
    'Gain competitive advantage with advanced technology'
  ]
  return (
    <>
      <Helmet>
        <title>Advanced Performance Monitor</title>
        <meta name="description" content="Advanced Performance Monitor solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, performance monitoring, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20">
            <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced SEO Optimizer New
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced Performance Monitor solution for modern businesses.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-driven performance monitoring
              </p>
            </div>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
</>
  )
}
export default AdvancedPerformanceMonitorPage
>>>>>>> 0a8d6a0455c0 (Fix TypeScript syntax errors and component export issues)
