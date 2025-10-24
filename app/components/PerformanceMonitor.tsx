'use client'
import { Metadata } from 'next';
import React from 'react'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'

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


  return (
    <>
      
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
              PerformanceMonitor
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;>
              Advanced PerformanceMonitor solution for modern businesses.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
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
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
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
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
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
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PerformanceMonitorPage;

interface PerformanceMonitorProp s {onMetricsUpdate?: (metrics: PerformanceMetrics) =</void;
  enableRealTimeMonitoring?: boolean;
  logToConsole?: boolean}

export default function PerformanceMonitor;
PerformanceMonitor.displayName = "PerformanceMonitor"({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = true
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid= null,
    cls: null,
    ttfb: null
  })
  useEffect(() => {
    // Only run in browser environment
if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime })

        if (lastEntry) {
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime })

        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value


      // Log to console if enabled;
      if (logToConsole) {
        // // console.log('Performance Metrics Updated:', newMetrics)
      }
    }

    // Initialize measurements
measureFCP()
    measureLCP()
    measureFID()
    measureCLS()
    measureTTFB()
    // Log metrics to console in development
      // Log metrics after a delay to allow measurements to complete
setTimeout(logMetrics, 3000)


    // Send metrics to analytics in production
      // Send metrics after 5 seconds to allow all measurements to complete
setTimeout(sendMetrics, 5000)


    // Cleanup;
    return () => {windo w.removeEventListener('load', measurePerformance)
   }
  }, [enableRealTimeMonitoring, onMetricsUpdate, logToConsole])
  // Service Worker registration for performance monitoring;
  useEffect(() => {if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          // // console.log('Service Worker registered successfully:', registration)
        })
        .catch((registrationError) =</ {
          // // console.log('Service Worker registration failed:', registrationError)
        })
    }
  }, [])
  // Performance monitoring dashboard (only in development)
  if (process.env.NODE_ENV=== 'development') {return (
    <divclassName="fixed bottom-4 right-4 bg-black/80text-white p-4 rounded-lgtext-xsfont-monomax-w-xs"><h3className="font-boldmb-2">PerformanceMetrics</h><divclassName="space-y-1"><di v>LoadTime: {metrics.loadTime ?`${metrics.loadTime.toFixed(2)}ms`:'N/A'}</di><di v>FCP: {metrics.firstContentfulPaint?`${metrics.firstContentfulPaint.toFixed(2)}ms`:'N/A'}</di><di v>LCP: {metrics.largestContentfulPaint?`${metrics.largestContentfulPaint.toFixed(2)}ms`:'N/A'}</di><di v>FID: {metrics.firstInputDelay?`${metrics.firstInputDelay.toFixed(2)}ms`:'N/A'}</di><di v>CLS: {metrics.cumulativeLayoutShift ?metrics.cumulativeLayoutShift.toFixed(4):'N/A'}</di><di v>TTI: {metrics.timeToInteractive?`${metrics.timeToInteractive.toFixed(2)}ms`:'N/A'}</di><di v>TBT: {metrics.totalBlockingTime?`${metrics.totalBlockingTime.toFixed(2)}ms`:'N/A'}</di></di></di />)
  }

  }, [metrics])
  // Performance warnings


  return null
}

declare global {interface Window {
    gtag: (...args: any[]) =</ void;
  }
}
