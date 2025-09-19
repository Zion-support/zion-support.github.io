import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import DynamicContentCarousel from './components/DynamicContentCarousel';
import InteractiveTechShowcase from './components/InteractiveTechShowcase';
import RevolutionaryContentBanner2026 from './components/RevolutionaryContentBanner2026';
import RevolutionaryContentShowcase2026 from './components/RevolutionaryContentShowcase2026';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import { performanceMonitor } from './utils/performanceMonitor';
import { trackPageView, trackButtonClick } from './utils/analytics';
import { trackPageView as trackEnhancedPageView, trackButtonClick as trackEnhancedButtonClick } from './utils/enhancedAnalytics';
import './index.css';

const App: React.FC = () => {
  // Track page view and performance on mount
  useEffect(() => {
    trackPageView('home');
    trackEnhancedPageView('home');
    
    // Initialize performance monitoring
    const handlePerformanceTracking = () => {
      setTimeout(() => {
        const metrics = performanceMonitor.getMetrics();
        performanceMonitor.logMetrics();
        performanceMonitor.checkPerformanceBudget();
        performanceMonitor.sendToAnalytics();
        
        // Update performance metrics display in development
        if (process.env.NODE_ENV === 'development') {
          const metricsElement = document.getElementById('performance-metrics');
          if (metricsElement) {
            metricsElement.innerHTML = `
              <div>Load: ${metrics.loadTime.toFixed(0)}ms</div>
              <div>FCP: ${metrics.firstContentfulPaint.toFixed(0)}ms</div>
              <div>LCP: ${metrics.largestContentfulPaint.toFixed(0)}ms</div>
              <div>FID: ${metrics.firstInputDelay.toFixed(0)}ms</div>
              <div>CLS: ${metrics.cumulativeLayoutShift.toFixed(3)}</div>
              <div>TTI: ${metrics.timeToInteractive.toFixed(0)}ms</div>
            `;
          }
        }
      }, 2000);
    };

    // Track performance after page load
    if (document.readyState === 'complete') {
      handlePerformanceTracking();
    } else {
      window.addEventListener('load', handlePerformanceTracking);
    }

    return () => {
      window.removeEventListener('load', handlePerformanceTracking);
    };
  }, []);

  // Keyboard shortcuts for accessibility
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey || event.metaKey) {
      switch (event.key) {
        case 'h':
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          trackButtonClick('keyboard_shortcut_home', 'accessibility');
          break;
        case 'l':
          event.preventDefault();
          document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
          trackButtonClick('keyboard_shortcut_contact', 'accessibility');
          break;
        case 'k':
          event.preventDefault();
          // Toggle dark mode if available
          trackButtonClick('keyboard_shortcut_theme', 'accessibility');
          break;
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <div className="space-y-0">
              {/* Hero Section */}
              <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                  <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Revolutionary AI Solutions
                  </h1>
                  <p className="text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                    Transform your business with cutting-edge AI, blockchain, and quantum technologies that drive innovation and growth
                  </p>
                  <button 
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2"
                    onClick={() => {
                      trackButtonClick('get_started', 'hero_section');
                      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    aria-label="Get started with our services"
                  >
                    Get Started
                  </button>
                </div>
              </div>

              {/* Features Section */}
              <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                      Why Choose Zion Tech Group?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                      We deliver cutting-edge solutions that transform businesses and drive innovation
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900 dark:to-indigo-900">
                      <div className="text-4xl mb-4">🤖</div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">AI-Powered Solutions</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Advanced artificial intelligence that automates processes and enhances decision-making
                      </p>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900 dark:to-pink-900">
                      <div className="text-4xl mb-4">⚡</div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Lightning Fast</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Optimized performance and real-time processing for maximum efficiency
                      </p>
                    </div>
                    <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-teal-100 dark:from-green-900 dark:to-teal-900">
                      <div className="text-4xl mb-4">🔒</div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Enterprise Security</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Bank-level security and compliance for your most sensitive data
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Revolutionary Content Banner 2026 */}
              <div className="mb-12">
                <RevolutionaryContentBanner2026 />
              </div>

              {/* Revolutionary Content Showcase 2026 */}
              <div className="mb-12">
                <RevolutionaryContentShowcase2026 />
              </div>

              {/* Dynamic Content Carousel */}
              <DynamicContentCarousel />
              
              {/* Interactive Tech Showcase */}
              <InteractiveTechShowcase />

              {/* Contact Section */}
              <section id="contact-form" className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                      Ready to Transform Your Business?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                      Get in touch with our experts to discuss your technology needs and discover how our solutions can drive your success.
                    </p>
                    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Contact Information
                          </h3>
                          <div className="space-y-4 text-gray-600 dark:text-gray-300">
                            <p>📧 info@ziontechgroup.com</p>
                            <p>📞 +1 (555) 123-4567</p>
                            <p>📍 123 Innovation Drive, Tech City, TC 12345</p>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                            Quick Contact Form
                          </h3>
                          <form className="space-y-4">
                            <input
                              type="text"
                              placeholder="Your Name"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              required
                            />
                            <input
                              type="email"
                              placeholder="Your Email"
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              required
                            />
                            <textarea
                              placeholder="Your Message"
                              rows={4}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                              required
                            ></textarea>
                            <button
                              type="submit"
                              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                              onClick={(e) => {
                                e.preventDefault();
                                trackButtonClick('contact_form_submit', 'contact_section');
                                console.log('Thank you for your message! We\'ll get back to you soon.');
                              }}
                            >
                              Send Message
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          } />
        </Routes>
        
        <Footer />
        
        {/* Analytics Dashboard (Development Only) */}
        <AnalyticsDashboard />
        
        {/* Performance Monitor (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 left-4 bg-black bg-opacity-75 text-white p-3 rounded-lg text-xs font-mono max-w-xs">
            <div className="font-bold mb-2">Performance Metrics</div>
            <div id="performance-metrics" className="space-y-1">
              <div>Loading...</div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;