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
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI and IT Solutions for the Future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300 pulse-glow">
                Explore Our Services
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 pulse-glow">
                Get Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4" aria-labelledby="services-heading">
          <div className="container mx-auto">
            <h2 id="services-heading" className="text-3xl font-bold text-white mb-8 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Suspense fallback={<ServiceCardSkeleton />}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Services</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced artificial intelligence solutions including ML, NLP, and computer vision.
                  </p>
                  <button className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">IT Solutions</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive IT infrastructure, cloud services, and digital transformation.
                  </p>
                  <button className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </Suspense>
              
              <Suspense fallback={<ServiceCardSkeleton />}>
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Innovation</h3>
                  <p className="text-gray-600 mb-4">
                    Cutting-edge technology solutions and research-driven development.
                  </p>
                  <button className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </Suspense>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project and discover how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1234567890" 
                onClick={handlePhoneClick}
                className="bg-cyan-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 transition-all duration-300"
              >
                Call Us: +1 (234) 567-890
              </a>
              <a 
                href="mailto:info@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;