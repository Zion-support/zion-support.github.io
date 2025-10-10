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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Zion Tech Group
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI & IT Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-futuristic text-lg px-8 py-4 float-animation">
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
          <div className="max-w-7xl mx-auto">
            <h2 id="services-heading" className="text-3xl font-bold text-white mb-8 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Services</h3>
                  <p className="text-gray-600 mb-4">
                    Advanced AI solutions including machine learning, natural language processing, and computer vision.
                  </p>
                  <div className="mt-4">
                    <span className="text-cyan-400 text-sm font-semibold">Starting at $2,500/month</span>
                  </div>
                </article>
              </Suspense>

              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">IT Services</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive IT solutions including cloud computing, cybersecurity, and infrastructure management.
                  </p>
                  <div className="mt-4">
                    <span className="text-cyan-400 text-sm font-semibold">Starting at $1,800/month</span>
                  </div>
                </article>
              </Suspense>

              <Suspense fallback={<ServiceCardSkeleton />}>
                <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quantum Computing</h3>
                  <p className="text-gray-600 mb-4">
                    Cutting-edge quantum computing solutions for complex problem-solving and optimization.
                  </p>
                  <div className="mt-4">
                    <span className="text-cyan-400 text-sm font-semibold">Starting at $4,500/month</span>
                  </div>
                </article>
              </Suspense>
            </div>
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <article className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="text-lg font-semibold text-white mb-2">IoT Solutions</h3>
                <p className="text-gray-300 text-sm">Connected devices and smart systems</p>
                <div className="mt-2">
                  <span className="text-cyan-400 text-xs font-semibold">From $2,500/month</span>
                </div>
              </article>

              <article className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
                <div className="text-3xl mb-3">☁️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Cloud Solutions</h3>
                <p className="text-gray-300 text-sm">Scalable cloud infrastructure and services</p>
                <div className="mt-2">
                  <span className="text-cyan-400 text-xs font-semibold">From $1,200/month</span>
                </div>
              </article>

              <article className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-300 text-sm">Advanced security solutions and monitoring</p>
                <div className="mt-2">
                  <span className="text-cyan-400 text-xs font-semibold">From $3,000/month</span>
                </div>
              </article>

              <article className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-semibold text-white mb-2">Data Analytics</h3>
                <p className="text-gray-300 text-sm">Business intelligence and data insights</p>
                <div className="mt-2">
                  <span className="text-cyan-400 text-xs font-semibold">From $2,000/month</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our AI and IT solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1-302-464-0950" 
                onClick={handlePhoneClick}
                className="btn-futuristic text-lg px-8 py-4 float-animation"
              >
                Call (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;