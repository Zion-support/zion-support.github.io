import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import EnhancedSEO from '../src/components/EnhancedSEO';

// Lazy load heavy components
// const PerformanceTracker = dynamic(() => import('../src/components/PerformanceTracker'), {
//   ssr: false 
//   loading: () => <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
// });

const AccessibilityEnhancer = dynamic(() => import('../src/components/AccessibilityEnhancer'), {
  ssr: false
});

// const AdvancedPerformanceMonitor = dynamic(() => import('../src/components/AdvancedPerformanceMonitor'), {
//   ssr: false 
//   loading: () => <div className="h-64 w-full bg-gray-200 rounded animate-pulse" />
// });

// const AdvancedAnalyticsDashboard = dynamic(() => import('../src/components/AdvancedAnalyticsDashboard'), {
//   ssr: false 
//   loading: () => <div className="h-64 w-full bg-gray-200 rounded animate-pulse" />
// });

// const AdvancedSecurityMonitor = dynamic(() => import('../src/components/AdvancedSecurityMonitor'), {
//   ssr: false 
//   loading: () => <div className="h-64 w-full bg-gray-200 rounded animate-pulse" />
// });

// const AdvancedAccessibilityAuditor = dynamic(() => import('../src/components/AdvancedAccessibilityAuditor'), {
//   ssr: false 
//   loading: () => <div className="h-64 w-full bg-gray-200 rounded animate-pulse" />
// });

export default function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });

  useEffect(() => {
    setIsVisible(true);
    setIsLoading(false);
    
    // Performance monitoring
    if (typeof window !== 'undefined') {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            setPerformanceMetrics({
              loadTime: entry.loadEventEnd - entry.fetchStart,
              domContentLoaded: entry.domContentLoadedEventEnd - entry.fetchStart
            });
          }
        });
      });
      
      try {
        observer.observe({ entryTypes: ['navigation'] });
      } catch (e) {
        console.warn('Performance observer not supported');
      }
      
      return () => observer.disconnect();
    }
  }, []);

  const handleGetStarted = useCallback(() => {
    // Track user interaction
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'engagement',
        event_label: 'get_started_button'
      })}
  }, []);

  const features = useMemo(() => [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to transform your business operations and drive innovation.",
      icon: "🤖",
      color: "blue" as const,
      delay: 0.1
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable  secure  and reliable cloud solutions tailored to your specific business requirements.",
      icon: "☁️",
      color: "green" as const,
      delay: 0.2
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and systems.",
      icon: "🚀",
      color: "purple" as const,
      delay: 0.3
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring to ensure your systems run smoothly.",
      icon: "🛡️",
      color: "blue" as const,
      delay: 0.4
    }
  ], []);

  return (
    <>
      <EnhancedSEO
        title="Zion Tech Solutions - AI-Powered Business Solutions"
        description="Leading provider of AI-powered business solutions  cloud infrastructure  and digital transformation services. Transform your business with cutting-edge technology."
        keywords={[
          'AI solutions',
          'cloud infrastructure', 
          'digital transformation',
          'business automation',
          'technology consulting',
          'machine learning',
          'artificial intelligence',
          'cloud computing',
          'enterprise solutions'
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center"
              initial={{ y: 50, opacity: 0 }}
              animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isHeroInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Zion Tech Solutions
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
                initial={{ y: 30, opacity: 0 }}
                animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your business with cutting-edge AI-powered solutions  cloud infrastructure  and digital transformation services.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ y: 30, opacity: 0 }}
                animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link 
                  href="/dashboard" 
                  onClick={handleGetStarted}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View Dashboard
                </Link>
                <Link 
                  href="/services" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-blue-600 hover:shadow-xl"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          ref={featuresRef}
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              animate={isFeaturesInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver innovative technology solutions that drive business growth and operational excellence.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={isFeaturesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: feature.delay }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="text-center p-6 rounded-2xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 h-full">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${
                        feature.color === 'blue' ? 'from-blue-100 to-blue-200' :
                        feature.color === 'green' ? 'from-green-100 to-green-200' :
                        'from-purple-100 to-purple-200'
                      } rounded-2xl flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-3xl">{feature.icon}</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started with our comprehensive suite of AI-powered solutions and cloud services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/portfolio" 
                className="bg-transparent text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 border-2 border-white font-semibold"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">
                Don&apos;t just take our word for it - hear from our satisfied clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">&quot;Zion Tech transformed our business with their AI solutions. Highly recommended!&quot;</p>
                <div className="font-semibold text-gray-900">- Sarah Johnson  CEO</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">&quot;Outstanding cloud migration service. Professional and efficient team.&quot;</p>
                <div className="font-semibold text-gray-900">- Michael Chen  CTO</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">&quot;Excellent support and innovative solutions. Great partnership!&quot;</p>
                <div className="font-semibold text-gray-900">- Emily Rodriguez  Director</div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Advanced Monitoring & Analytics</h2>
              <p className="text-xl text-gray-300">
                Real-time performance monitoring  security analysis  and accessibility auditing
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* <AdvancedPerformanceMonitor 
                  onMetricsUpdate={(metrics) => {
                    console.log('Performance metrics updated:', metrics)}}
                  className="h-full"
                /> */}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* <AdvancedAnalyticsDashboard 
                  data={{
                    pageViews: 12543,
                    uniqueVisitors: 8921,
                    bounceRate: 42.3,
                    avgSessionDuration: 3.2,
                    conversionRate: 2.8,
                    topPages: [
                      { page: '/', views: 4521, bounceRate: 38.2 },
                      { page: '/services', views: 3124, bounceRate: 45.1 },
                      { page: '/about', views: 2898, bounceRate: 41.7 }
                    ],
                    trafficSources: [
                      { source: 'Direct', visitors: 4521, percentage: 50.7 },
                      { source: 'Google', visitors: 3124, percentage: 35.0 },
                      { source: 'Social', visitors: 1276, percentage: 14.3 }
                    ],
                    deviceTypes: [
                      { device: 'Desktop', count: 6234, percentage: 69.8 },
                      { device: 'Mobile', count: 2341, percentage: 26.2 },
                      { device: 'Tablet', count: 346, percentage: 3.9 }
                    ],
                    geographicData: [
                      { country: 'United States', visitors: 4521, percentage: 50.7 },
                      { country: 'Canada', visitors: 1234, percentage: 13.8 },
                      { country: 'United Kingdom', visitors: 987, percentage: 11.1 }
                    ],
                    hourlyData: Array.from({ length: 24 }, (_  i) => ({ hour: i  visitors: Math.floor(Math.random() * 100) })),
                    dailyData: Array.from({ length: 30 }, (_  i) => ({ 
                      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0], 
                      visitors: Math.floor(Math.random() * 500) + 200,
                      pageViews: Math.floor(Math.random() * 800) + 400
                    })),
                    realTimeVisitors: 23,
                    topKeywords: [
                      { keyword: 'AI solutions', searches: 234, position: 3 },
                      { keyword: 'cloud services', searches: 189, position: 5 },
                      { keyword: 'digital transformation', searches: 156, position: 7 }
                    ],
                    errorRate: 0.8,
                    performanceScore: 92
                  }}
                  className="h-full"
                /> */}
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <AdvancedSecurityMonitor 
                  metrics={{
                    totalThreats: 47,
                    blockedRequests: 1234,
                    suspiciousActivity: 23,
                    securityScore: 87,
                    lastScan: new Date(),
                    vulnerabilities: [
                      { id: '1', type: 'XSS', severity: 'high', description: 'Potential XSS vulnerability in contact form', status: 'open' },
                      { id: '2', type: 'CSRF', severity: 'medium', description: 'Missing CSRF token on login form', status: 'in-progress' }
                    ],
                    recentEvents: [
                      { id: '1', type: 'threat', message: 'Blocked suspicious request from IP 192.168.1.100', timestamp: new Date(), severity: 'high', source: 'Firewall' },
                      { id: '2', type: 'warning', message: 'Multiple failed login attempts detected', timestamp: new Date(), severity: 'medium', source: 'Auth System' }
                    ],
                    cspViolations: 3,
                    xssAttempts: 12,
                    sqlInjectionAttempts: 5,
                    bruteForceAttempts: 8,
                    rateLimitHits: 45
                  }}
                  className="h-full"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* <AdvancedAccessibilityAuditor 
                  onAuditComplete={(metrics) => {
                    console.log('Accessibility audit completed:', metrics)}}
                  className="h-full"
                /> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance and Accessibility Components */}
        <AccessibilityEnhancer />
        {/* <PerformanceTracker /> */}

        {/* Analytics Dashboard Link */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Monitor Your Website Performance
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get comprehensive insights into your website&apos;s performance  accessibility  and SEO with our advanced analytics dashboard.
              </p>
              <Link href="/analytics">
                <a className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                  <span className="mr-2">📊</span>
                  View Analytics Dashboard
                </a>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}