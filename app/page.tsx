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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future with advanced AI, quantum computing, and cutting-edge technology solutions
              that transform businesses and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        <section className="mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-4">
                  Advanced artificial intelligence solutions including ML, NLP, and computer vision.
                </p>
                <div className="text-lg font-semibold text-blue-600">Starting at $1,500/month</div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quantum Computing</h3>
                <p className="text-gray-600 mb-4">
                  Next-generation quantum computing capabilities for complex problem solving.
                </p>
                <div className="text-lg font-semibold text-purple-600">Custom Pricing</div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Autonomous Systems</h3>
                <p className="text-gray-600 mb-4">
                  Self-managing and self-optimizing systems for enterprise operations.
                </p>
                <div className="text-lg font-semibold text-green-600">Starting at $2,500/month</div>
              </article>
            </Suspense>
          </div>
          
          <div className="text-center">
            <a 
              href="/services"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              View All Services
            </a>
          </div>
        </section>

        {/* Additional Services Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
            <h3 className="text-lg font-semibold text-white mb-2">Cloud Services</h3>
            <p className="text-gray-300 text-sm">Scalable cloud infrastructure</p>
            <div className="mt-2">
              <span className="text-cyan-400 text-xs font-semibold">From $1,200/month</span>
            </div>
          </article>

          <article className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
            <p className="text-gray-300 text-sm">Advanced security solutions</p>
            <div className="mt-2">
              <span className="text-cyan-400 text-xs font-semibold">From $3,000/month</span>
            </div>
          </article>

          <article className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">Data Analytics</h3>
            <p className="text-gray-300 text-sm">Business intelligence and insights</p>
            <div className="mt-2">
              <span className="text-cyan-400 text-xs font-semibold">From $1,800/month</span>
            </div>
          </article>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get in touch with our experts for a free consultation and discover how our solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+1234567890"
                onClick={handlePhoneClick}
                className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300"
              >
                📞 Call (123) 456-7890
              </a>
              <a 
                href="mailto:info@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                ✉️ Email Us
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