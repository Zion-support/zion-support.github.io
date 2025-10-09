import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
  }
};

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    // Preload components
    preloadComponents();
    return () => clearTimeout(timer);
  }, []);

  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'header_phone',
        value: 1
      });
    }
  }, []);

  // Analytics tracking for email clicks - optimized
  const handleEmailClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'email_click', {
        event_category: 'engagement',
        event_label: 'header_email',
        value: 1
      });
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid particle-bg">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, rgba(59, 7, 100, 0.8) 0%, rgba(29, 78, 216, 0.8) 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h1 
              id="hero-heading" 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text"
            >
              Zion Tech Group
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle">
              Advanced AI and IT Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Empowering businesses with cutting-edge artificial intelligence, automation, and technology solutions. 
              Transform your operations with our innovative approach to digital transformation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
                aria-label="Call us at +1 302 464 0950"
              >
                <span>📞</span>
                <span>+1 302 464 0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                onClick={handleEmailClick}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                aria-label="Email us at kleber@ziontechgroup.com"
              >
                <span>✉️</span>
                <span>Get Free Consultation</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">99%</div>
                <div className="text-gray-300 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to accelerate your business growth
            </p>
          </div>

          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🤖</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Services</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-center">
                  <a 
                    href="/ai-services" 
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">📢</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Marketing</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Revolutionary AI-powered marketing automation, ad optimization, and content generation.
                </p>
                <div className="text-center">
                  <a 
                    href="/ai-marketing" 
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚙️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Automation</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Intelligent automation of business processes with decision-making capabilities and exception handling.
                </p>
                <div className="text-center">
                  <a 
                    href="/ai-automation" 
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            </Suspense>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-4 text-center">🏥</div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">AI Healthcare</h3>
                <p className="text-gray-300 mb-4 text-center text-sm">
                  Medical AI solutions for diagnosis, treatment, and patient care.
                </p>
                <div className="text-center">
                  <a 
                    href="/ai-healthcare" 
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-4 text-center">💰</div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">AI Fintech</h3>
                <p className="text-gray-300 mb-4 text-center text-sm">
                  Financial AI applications for trading, risk management, and fraud detection.
                </p>
                <div className="text-center">
                  <a 
                    href="/ai-fintech" 
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-4 text-center">🔒</div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">Cybersecurity</h3>
                <p className="text-gray-300 mb-4 text-center text-sm">
                  Advanced security solutions to protect your digital assets.
                </p>
                <div className="text-center">
                  <a 
                    href="/cybersecurity" 
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-4 text-center">☁️</div>
                <h3 className="text-lg font-bold text-white mb-3 text-center">Cloud Solutions</h3>
                <p className="text-gray-300 mb-4 text-center text-sm">
                  Scalable cloud infrastructure and migration services.
                </p>
                <div className="text-center">
                  <a 
                    href="/ai-cloud-infrastructure" 
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>
        </div>
      </section>

      {/* Dynamic Content Sections */}
      <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse"></div>}>
        <ContentPromotionBanner />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse"></div>}>
        <ContentCarousel />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse"></div>}>
        <DynamicContentShowcase />
      </Suspense>

      <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse"></div>}>
        <ContentStatistics />
      </Suspense>

      <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse"></div>}>
        <ContentNewsletterSignup />
      </Suspense>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;