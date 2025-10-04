import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AdvancedAnalytics from '../src/components/AdvancedAnalytics';
import AdvancedSecurity from '../src/components/AdvancedSecurity';
import AdvancedSEOHead from '../src/components/AdvancedSEOHead';
import AdvancedPerformanceOptimizer from '../src/utils/advancedPerformanceOptimizer';

const HomePage = React.memo(function HomePage() {
  // Initialize performance optimizer
  React.useEffect(() => {
    const optimizer = new AdvancedPerformanceOptimizer({
      enableImageOptimization: true,
      enableLazyLoading: true,
      enableResourceHints: true,
      enableCodeSplitting: true,
      enableCaching: true,
      enableCompression: true,
      enablePreloading: true,
      enableServiceWorker: true,
      enableCriticalCSS: true,
      enableBundleOptimization: true
    });
    
    // Log performance metrics periodically
    const logMetrics = () => {
      const metrics = optimizer.getMetrics();
      const score = optimizer.getPerformanceScore();
      console.log('Performance Metrics:', metrics);
      console.log('Performance Score:', score);
    };
    
    // Log metrics after page load
    const timer = setTimeout(logMetrics, 2000);
    
    return () => {
      clearTimeout(timer);
      optimizer.cleanup();
    };
  }, []);

  const seoData = {
    title: "Zion Tech Group - Advanced AI and IT Solutions | Enterprise AI Transformation",
    description: "Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. Transform your business with cutting-edge AI micro SaaS services and cloud automation.",
    keywords: ["AI solutions", "enterprise AI", "digital transformation", "automation", "cloud services", "AI consulting", "business intelligence", "machine learning", "artificial intelligence", "enterprise software"],
    canonical: "https://zion.app",
    ogImage: "/images/og-zion-tech-group.jpg",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterSite: "@ZionTechGroup",
    twitterCreator: "@ZionTechGroup",
    robots: "index, follow",
    author: "Zion Tech Group",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://zion.app",
      "logo": "https://zion.app/images/logo.png",
      "description": "Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://twitter.com/ZionTechGroup",
        "https://linkedin.com/company/zion-tech-group"
      ]
    }
  };

  return (
    <>
      <AdvancedSEOHead seoData={seoData} />
      <AdvancedAnalytics 
        config={{
          trackingId: 'G-XXXXXXXXXX',
          enableGoogleAnalytics: true,
          enableCustomAnalytics: true,
          enablePerformanceTracking: true,
          enableErrorTracking: true,
          enableUserBehaviorTracking: true,
          debugMode: process.env.NODE_ENV === 'development'
        }}
        onEventTracked={(event) => {
          console.log('Analytics event tracked:', event);
        }}
      />
      <AdvancedSecurity 
        config={{
          enableCSP: true,
          enableXSSProtection: true,
          enableClickjackingProtection: true,
          enableHTTPSRedirect: true,
          enableSecureHeaders: true,
          enableContentSecurityPolicy: true,
          enableSubresourceIntegrity: true,
          enableTrustedTypes: true,
          debugMode: process.env.NODE_ENV === 'development'
        }}
        onSecurityEvent={(event) => {
          console.log('Security event detected:', event);
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                  Zion Tech Group
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Home</Link>
                <Link to="/services" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Services</Link>
                <Link to="/blog" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Blog</Link>
                <Link to="/case-studies" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Case Studies</Link>
                <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Contact</Link>
              </nav>
              <div className="md:hidden">
                <button className="text-gray-700 hover:text-indigo-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="mb-8">
                <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  🚀 Leading AI Innovation Since 2025
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with
                <span className="text-indigo-600 block mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  AI-Powered Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation, 
                and enterprise IT solutions that drive growth, efficiency, and innovation across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/services"
                  className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                  Explore Our Services
                </Link>
                <a
                  href="tel:+13024640950"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 font-medium">
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Trust indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                  <div className="text-gray-600 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
                  <div className="text-gray-600 text-sm">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Services Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Comprehensive AI & IT Solutions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From AI-powered automation to enterprise cloud solutions, we deliver cutting-edge technology that drives business growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-indigo-600 text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">AI Micro SaaS Services</h3>
                  <p className="text-gray-600 mb-4">
                    Scalable AI solutions including chatbots, automation tools, and intelligent business processes.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Custom AI Model Development</li>
                    <li>• Natural Language Processing</li>
                    <li>• Predictive Analytics</li>
                    <li>• Machine Learning Pipelines</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-blue-600 text-4xl mb-4">☁️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Automation</h3>
                  <p className="text-gray-600 mb-4">
                    Streamline operations with automated cloud infrastructure and deployment pipelines.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Infrastructure as Code</li>
                    <li>• CI/CD Pipeline Setup</li>
                    <li>• Auto-scaling Solutions</li>
                    <li>• Cloud Cost Optimization</li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-green-600 text-4xl mb-4">🏢</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive digital transformation services for large-scale business operations.
                  </p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>• Digital Transformation</li>
                    <li>• Legacy System Modernization</li>
                    <li>• Data Migration</li>
                    <li>• Enterprise Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Features Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We combine cutting-edge technology with proven methodologies to deliver exceptional results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-indigo-600 text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-gray-600 text-sm">Rapid prototyping and agile development methodologies</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-2xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Secure & Reliable</h3>
                  <p className="text-gray-600 text-sm">Enterprise-grade security and 99.9% uptime guarantee</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">📈</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Scalable Solutions</h3>
                  <p className="text-gray-600 text-sm">Architecture designed to grow with your business</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-2xl">🎯</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Results-Driven</h3>
                  <p className="text-gray-600 text-sm">Data-driven approach with measurable business outcomes</p>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced CTA Section */}
          <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies that have already transformed their operations with our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium">
                  Get Started Today
                </Link>
                <a
                  href="tel:+13024640950"
                  className="bg-transparent text-white px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 font-medium">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Zion Tech Group</h3>
                <p className="text-gray-400 text-sm">
                  Leading provider of AI-powered enterprise solutions and digital transformation services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link to="/services" className="hover:text-white transition-colors">AI Solutions</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Cloud Automation</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Enterprise IT</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Digital Transformation</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="text-sm text-gray-400 space-y-2">
                  <p>Phone: +1 302 464 0950</p>
                  <p>Email: info@zion.app</p>
                  <p>Website: zion.app</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
});

export default HomePage;