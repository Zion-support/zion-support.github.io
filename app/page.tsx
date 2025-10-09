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

// Service card skeleton for loading states
const ServiceCardSkeleton = memo(() => (
  <article className="quantum-card p-4 sm:p-6 energy-pulse animate-pulse">
    <div className="h-16 bg-gray-700 rounded mb-4"></div>
    <div className="h-6 bg-gray-700 rounded mb-3"></div>
    <div className="h-4 bg-gray-700 rounded mb-4"></div>
    <div className="h-4 bg-gray-700 rounded mb-2"></div>
    <div className="h-8 bg-gray-700 rounded"></div>
  </article>
));

ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload components after initial render
  useEffect(() => {
    preloadComponents();
    setIsLoaded(true);
  }, []);

  // Performance optimization: memoize heavy calculations
  const memoizedServices = useCallback(() => {
    return [
      {
        title: 'AI Services',
        description: 'Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
        icon: '🤖',
        price: 'Starting at $1,500/month',
        href: '/ai-services'
      },
      {
        title: 'AI Marketing',
        description: 'Revolutionary AI-powered marketing automation, ad optimization, and content generation.',
        icon: '📢',
        price: 'Starting at $2,000/month',
        href: '/ai-marketing'
      },
      {
        title: 'AI Automation',
        description: 'Intelligent process automation and workflow optimization for maximum efficiency.',
        icon: '⚙️',
        price: 'Starting at $1,200/month',
        href: '/ai-automation'
      }
    ];
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Navigation */}
      <Navigation />
      
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <main 
        id="main-content"
        className="relative overflow-hidden"
        role="main"
        aria-label="Main content"
      >
        <section 
          className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 
              id="hero-heading" 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text"
            >
              Zion Tech Group
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle">
              Advanced AI & IT Solutions for the Future
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, cloud solutions, 
              and innovative technology services. We deliver enterprise-grade solutions that drive 
              growth and efficiency.
            </p>
            
            {/* Primary Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {memoizedServices().map((service, index) => (
                <Suspense key={service.title} fallback={<ServiceCardSkeleton />}>
                  <article className="quantum-card p-4 sm:p-6 energy-pulse">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">
                        {service.price}
                      </div>
                      <a 
                        href={service.href} 
                        className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        Learn More →
                      </a>
                    </div>
                  </article>
                </Suspense>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 neon-glow"
                aria-label="Get started with our services"
              >
                Get Started Today
              </a>
              <a
                href="/about"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Learn more about our company"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        {isLoaded && (
          <>
            <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg mx-4 mb-8"></div>}>
              <ContentPromotionBanner />
            </Suspense>

            <Suspense fallback={<div className="h-64 bg-gray-800 animate-pulse rounded-lg mx-4 mb-8"></div>}>
              <ContentCarousel />
            </Suspense>

            <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse rounded-lg mx-4 mb-8"></div>}>
              <DynamicContentShowcase />
            </Suspense>

            <Suspense fallback={<div className="h-48 bg-gray-800 animate-pulse rounded-lg mx-4 mb-8"></div>}>
              <ContentStatistics />
            </Suspense>

            <Suspense fallback={<div className="h-32 bg-gray-800 animate-pulse rounded-lg mx-4 mb-8"></div>}>
              <ContentNewsletterSignup />
            </Suspense>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;