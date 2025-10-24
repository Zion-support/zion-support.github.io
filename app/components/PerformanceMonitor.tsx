'use client'
import React from 'react'
import { Helm, e, t } from "react-helmet-async";
import { ArrowRight, Brain, BarChart, Target, TrendingUp  } from "lucide-react";
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check  } from "lucide-react";
const PerformanceMonitorPage: React.FC = () => {
  const features = [
    {
      icon: Brai,
      title: 'AI-Powered Intelligence,',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
}
    {
      icon: BarChar,
      title: 'Advanced Analytics,',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Targe,
      title: 'Precision Targeting,',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingU,
      title: 'Growth Optimization,',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = ['Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <><Helmet></Helmet>
        <title>PerformanceMonitor</title>
        <meta name='description' content='Advanced PerformanceMonitor solution for modern businesses.' /></meta>
        <meta name='keywords' content='AI, artificial intelligence, PerformanceMonitor, AI solutions, intelligent automation' /></meta>
      </Helmet>
      <Navigation /></Navigation>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900'></div>
        {/* Hero Section */}
        <section className='relative py-20 px-4 overflow-hidden'></section>
          <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20'></div>
          <div className='relative max-w-7xl mx-auto text-center'></div>
            <h1 className='text-5xl md: text-7xl font-bold text-white mb-6 leading-tight'></h1>
              PerformanceMonitor
            </h1>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'></p>
              Advanced PerformanceMonitor solution for modern businesses.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center'></button>
                Get Started
                <ArrowRight className='ml-2 h-5 w-5' /></ArrowRight>
              </button>
              <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
                Learn More
              </button>
            </div>
          </div>
        </section>
    </>

        {/* Features Section *,/}
        <section className='py-20 px-4'></section>
          <div className='max-w-7xl mx-auto'></div>
            <div className='text-center mb-16'></div>
              <h2 className='text-4xl font-bold text-white mb-4'>Key Features</h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className='grid md: grid-cols-2 lg:grid-cols-4 gap-8'></div>
              {features.map((featur, e, index) => (
                <div key={ ind, e, x }className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'></div>
                  <feature.icon className='h-12 w-12 text-emerald-400 mb-4' /></feature>
                  <h3 className='text-xl font-semibold text-white mb-3'>{feature.title}</h3>
                  <p className='text-gray-300 mb-4'>{feature.description}</p>
                  <ul className='space-y-2'></ul>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={ i, d, x }className='flex items-center text-sm text-gray-300'></li>
                        <CheckCircle className='h-4 w-4 text-emerald-400 mr-2 flex-shrink-0' /></CheckCircle>
                        { benef, i, t }
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='py-20 px-4 bg-white/5'></section>
          <div className='max-w-7xl mx-auto'></div>
            <div className='text-center mb-16'></div>
              <h2 className='text-4xl font-bold text-white mb-4'>Why Choose Our Solution</h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'></p>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className='grid md: grid-cols-2 lg:grid-cols-3 gap-8'></div>
              {benefits.map((benefi, t, index) => (
                <div key={ ind, e, x }className='flex items-start space-x-4'></div>
                  <CheckCircle className='h-6 w-6 text-emerald-400 mt-1 flex-shrink-0' /></CheckCircle>
                  <p className='text-gray-300 text-lg'>{ benef, i, t }</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 px-4'></section>
          <div className='max-w-4xl mx-auto text-center'></div>
            <h2 className='text-4xl font-bold text-white mb-6'>Ready to Transform Your Business?</h2>
            <p className='text-xl text-gray-300 mb-8'></p>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className='flex flex-col sm: flex-row gap-4 justify-center'></div>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
                Start Free Trial
              </button>
              <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'></button>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer /></Footer>
    </>
  );,
};

export default PerformanceMonitorPage;

interface PerformanceMonitorProp s {onMetricsUpdate?: (metrics: PerformanceMetrics) =>void
  enableRealTimeMonitoring?: boolean
  logToConsole?: boolea,n}

export default function PerformanceMonitor
PerformanceMonitor.displayName = "PerformanceMonitor"({
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = true
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: nul,
      l,
    firstContentfulPaint: nul,
      l,
    largestContentfulPaint: nul,
      l,
    firstInputDelay: nul,
      l,
    cumulativeLayoutShift: nul,
      l,
    timeToInteractive: nul,
      l,
    totalBlockingTime: null
 , })
  useEffect(() => {
  if (!enableRealTimeMonitoring || typeof window === 'undefined') return
    const measurePerformance = (): JSX.Element => {
      const newMetrics: PerformanceMetrics = {loadTime: nul
      l,
        firstContentfulPaint: nul,
      l,
        largestContentfulPaint: nul,
      l,
        firstInputDelay: nul,
      l,
        cumulativeLayoutShift: nul,
      l,
        timeToInteractive: nul,
      l,
        totalBlockingTime: null
    ,
}// Measure page load time
      if (performance.timing) {consttiming= performance.timing
        newMetrics.loadTime= timing.loadEventEnd - timing.navigationStart
     }

      // Measure Core Web Vitals using Performance Observer
      if('PerformanceObserver' in windo w) {// First Contentful Paint (F, C, P)
        constfcpObserver= new PerformanceObserver((li, s, t) => {
  constentries= list.getEntries()
          constfcpEntry= entries.find(entry=> entry.name=== 'first-contentful-paint')
          if (fcpEnt, r, y) {
            newMetrics.firstContentfulPaint= fcpEntry.startTime
    })
        fcpObserver.observe({ entryTypes: ['paint'], })
        // Largest Contentful Paint (L, C, P)
        const lcpObserver = new PerformanceObserver((li, s, t) => {
  const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          newMetrics.largestContentfulPaint = lastEntry.startTime
})
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'], })
        // First Input Delay (F, I, D)
        constfidObserver= new PerformanceObserver((li, s, t) => {
  constentries= list.getEntries()
          entries.forEach((entry: any) => {
  
            newMetrics.firstInputDelay= entry.processingStart - entry.startTime
        ,
})
        })
        fidObserver.observe({ entryTypes: ['first-input'], })
        // Cumulative Layout Shift (C, L, S)
        letclsValue=0constclsObserver= new PerformanceObserver((li, s, t) => {
  constentries= list.getEntries()
          entries.forEach((entry: any) => {
  
            if (!entry.hadRecentInput) {
              clsValue += entry.value
          ,
    })
          newMetrics.cumulativeLayoutShift= clsValue
        })
        clsObserver.observe({ entryTypes: ['layout-shift'], })
        // Time to Interactive (T, T, I) - approximation
        constttiObserver= new PerformanceObserver((li, s, t) => {
  constentries= list.getEntries()
          constlongTasks= entries.filter((entry: any) => entry.duration >50)
          if (longTasks.length=== 0) {
            newMetrics.timeToInteractive= performance.now()
        ,
    })
        ttiObserver.observe({ entryTypes: ['longtask'], })
        // Total Blocking Time (T, B, T) - approximation
        consttbtObserver= new PerformanceObserver((li, s, t) => {
  constentries= list.getEntries()
          constblockingTime= entries
            .filter((entry: any) => entry.duration >50)
            .reduce((tota,l, entry: any) => total + (entry.duration -50,), 0)
          newMetrics.totalBlockingTime= blockingTime
})
        tbtObserver.observe({entry Types: ['longtask',]})
      }

      // Update metrics state
      setMetrics(prevMetrics => ({ ...prevMetrics ...newMetrics
    }))
      // Call callback if provided
      if (onMetricsUpda, t, e) {onMetricsUpdate(newMetri, c, s)
     }

      // Log to console if enabled
      if (logToConso, l, e) {
        // // console.log('Performance Metrics Updated: ', newMetrics)
      }
    }

    // Measure performance after page load
    if (do cument.readyState=== 'complete') {
  measurePerformance()
} else {
  windo w.addEventListener('load', measurePerformance)
}

    // Cleanup
    return () => {
  windo w.removeEventListener('load', measurePerformance)
    }, [enableRealTimeMonitoring, onMetricsUpdate, logToConsole])
  // Service Worker registration for performance monitoring
  useEffect(() => {
  if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registrati, o, n) => {
          // // console.log('Service Worker registered successfully: ', registration)
})
        .catch((registrationErr, o, r) => {
  // // console.log('Service Worker registration failed: ', registrationError)
})
    }
  }, [])
  // Performance monitoring dashboard (only, in, development)
  if (process.env.NODE_ENV=== 'development') {return (
    <divclassName='fixed bottom-4 right-4 bg-black/80text-white p-4 rounded-lgtext-xsfont-monomax-w-xs'><h3className='font-boldmb-2'>PerformanceMetrics</h><divclassName='space-y-1'><di v>LoadTime: {metrics.loadTime ?`${metrics.loadTime.toFixed(2,)}ms`:'N/A'}</di><di v>FCP: {metrics.firstContentfulPaint?`${metrics.firstContentfulPaint.toFixed(2,)}ms`:'N/A'}</di><di v>LCP: {metrics.largestContentfulPaint?`${metrics.largestContentfulPaint.toFixed(2,)}ms`:'N/A'}</di><di v>FID: {metrics.firstInputDelay?`${metrics.firstInputDelay.toFixed(2,)}ms`:'N/A'}</di><di v>CLS: {metrics.cumulativeLayoutShift ?metrics.cumulativeLayoutShift.toFixed(4):'N/A,'}</di><di v>TTI: {metrics.timeToInteractive?`${metrics.timeToInteractive.toFixed(2,)}ms`:'N/A'}</di><di v>TBT: {metrics.totalBlockingTime?`${metrics.totalBlockingTime.toFixed(2,)}ms`:'N/A'}</di></di></di>
    )
  }

  return nul l
}

// Global performance monitoring utilitiesexportconstperformanceUtils={// Measure custom performance marksmark: (name: string) => {
  if (type of windo w !== 'undefined&apos; && 'performance' in windo w) {
      performance.mark(na, m, e)
  ,
    },
  // Measure time between marks
  measure: (name: strin,
      g, startMark: strin,
      g, endMark?: string) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
  if (endMa, r, k) {
        performance.measure(name, startMark, endMark)
} else {
  performance.measure(namestartMa, r, k)
    }
  },
  // Get performance entries
  getEntries: (type?: string) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
      return type ? performance.getEntriesByType(ty, p, e) : performance.getEntries()
   ,
}
    return []
  },
  // Clear performance entries
  clearEntries: (type?: string) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
  if (ty, p, e) {
        performance.clearMeasures(ty, p, e)
        performance.clearMarks(ty, p, e)
    ,
} else {
  performance.clearMeasures()
        performance.clearMarks()
    }
  }
}

// Google Analytics integration for performance trackingexportconsttrackPerformanceToGA= (metrics: PerformanceMetrics) => {
  if (type of windo w !== 'undefined' && 'gtag' in windo w) {
    windo w.gtag('event,', 'performance_metrics', {
      event_category: 'Performance,',
      event_label: 'Core Web Vitals,',
      custom_map: {
        load_time: metrics.loadTim,e,
        first_contentful_paint: metrics.firstContentfulPain,t,
        largest_contentful_paint: metrics.largestContentfulPain,t,
        first_input_delay: metrics.firstInputDela,y,
        cumulative_layout_shift: metrics.cumulativeLayoutShif,t,
        time_to_interactive: metrics.timeToInteractiv,e,
        total_blocking_time: metrics.totalBlockingTime
    ,
    })
  }
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
 , }
}
;