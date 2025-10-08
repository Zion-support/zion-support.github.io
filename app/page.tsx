import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    if (
      typeof window !== 'undefined' &&
      (
        window as unknown as {
          gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag
    ) {
      (
        window as unknown as {
          gtag: (command: string, action: string, parameters: Record<string, unknown>) => void;
        }
      ).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-300 hover:bg-indigo-700"
      >
        Skip to main content
      </a>

      {/* Content Promotion Banner */}
      <ContentPromotionBanner />

      <main id="main-content" className="container mx-auto px-4 py-16" role="main">
        {/* Hero Section */}
        <section
          className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          aria-labelledby="hero-heading"
        >
          <div className="relative z-10">
            <h1 id="hero-heading" className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light" role="doc-subtitle">
              Advanced AI and IT Solutions
            </p>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
              Transform your business with our cutting-edge technology and innovative approaches.
            </p>
          </div>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
              <div className="text-4xl mb-4 animate-bounce">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Solutions</h3>
              <p className="text-gray-600 leading-relaxed">Transform your business with cutting-edge artificial intelligence and machine learning technologies</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
              <div className="text-4xl mb-4 animate-pulse">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">Optimized performance and rapid deployment with enterprise-grade infrastructure</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
              <div className="text-4xl mb-4 animate-ping">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">Bank-level security and compliance for your most critical business data</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20 relative" aria-labelledby="services-heading">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 focus-within:ring-4 focus-within:ring-indigo-300 border border-white/20">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">AI Solutions</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Harness the power of artificial intelligence to drive innovation and efficiency in
                  your organization with our cutting-edge AI technologies.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>Machine Learning Models</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>Natural Language Processing</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>Computer Vision</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>Predictive Analytics</li>
                </ul>
                <div className="text-xl font-bold text-indigo-600 mb-4">Starting at $1,500/month</div>
                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                  Learn More
                </button>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 focus-within:ring-4 focus-within:ring-green-300 border border-white/20">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🔄</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Digital Transformation</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transform your business processes with cutting-edge technology and expert
                  consultation to achieve operational excellence.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Process Automation</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Legacy System Modernization</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Workflow Optimization</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Change Management</li>
                </ul>
                <div className="text-xl font-bold text-green-600 mb-4">Starting at $2,500/month</div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                  Learn More
                </button>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 focus-within:ring-4 focus-within:ring-purple-300 border border-white/20">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">☁️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Cloud Services</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Scale your infrastructure with secure, reliable, and efficient cloud solutions
                  tailored to your business needs.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Cloud Migration</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Infrastructure as Code</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>DevOps & CI/CD</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>24/7 Monitoring</li>
                </ul>
                <div className="text-xl font-bold text-purple-600 mb-4">Custom Pricing</div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
                  Get Quote
                </button>
              </article>
            </Suspense>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/services"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              View All Services
            </a>
          </div>
        </section>

        {/* Content Carousel */}
        <ContentCarousel />

        {/* Dynamic Content Showcase */}
        <DynamicContentShowcase />

        {/* Content Statistics */}
        <ContentStatistics />

        {/* Newsletter Signup */}
        <ContentNewsletterSignup />

        {/* Call to Action Section */}
        <section className="text-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-16 relative overflow-hidden" aria-labelledby="cta-heading">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 id="cta-heading" className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of companies already using our AI solutions to drive growth, efficiency, and innovation. 
              Let's build the future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="tel:+13026009898"
                onClick={handlePhoneClick}
                className="group inline-flex items-center bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl"
                aria-label="Call us at (302) 600-9898"
              >
                <svg className="w-6 h-6 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call: (302) 600-9898
              </a>
              
              <a
                href="/contact"
                className="group inline-flex items-center bg-indigo-500 text-white px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/20 hover:bg-indigo-400 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-2xl"
                aria-label="Contact us via form"
              >
                <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get Free Consultation
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center text-indigo-100">
                <svg className="w-6 h-6 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Free initial consultation</span>
              </div>
              <div className="flex items-center justify-center text-indigo-100">
                <svg className="w-6 h-6 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Custom solution design</span>
              </div>
              <div className="flex items-center justify-center text-indigo-100">
                <svg className="w-6 h-6 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">24/7 support available</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
