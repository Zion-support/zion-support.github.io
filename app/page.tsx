import React, { useCallback, useState, useEffect, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import { useAnalytics } from './components/AnalyticsProvider';

// Lazy load heavy components for better performance
const ServiceCard = lazy(() => import('./components/ServiceCard'));
const InteractiveAIROICalculator = lazy(() => import('./components/InteractiveAIROICalculator'));
const ContentShowcase = lazy(() => import('./components/ContentShowcase'));

// Loading skeleton component
const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
);

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { trackEvent, trackPageView } = useAnalytics();

  useEffect(() => {
    // Track page view
    trackPageView('/');
    
    // Set loaded state with animation delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [trackPageView]);

  // Analytics tracking for phone clicks
  const handlePhoneClick = useCallback(() => {
    trackEvent({
      event: 'phone_click',
      category: 'engagement',
      action: 'click',
      label: 'main_phone_number',
    });
  }, [trackEvent]);

  // Analytics tracking for service card clicks
  const handleServiceClick = useCallback((service: string) => {
    trackEvent({
      event: 'service_click',
      category: 'engagement',
      action: 'click',
      label: service,
    });
  }, [trackEvent]);

  const services = [
    {
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to drive innovation and efficiency in your organization.',
      icon: '🤖',
      href: '/ai-services',
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business processes with cutting-edge technology and expert consultation.',
      icon: '🚀',
      href: '/services',
    },
    {
      title: 'Cloud Services',
      description: 'Scale your infrastructure with secure, reliable, and efficient cloud solutions.',
      icon: '☁️',
      href: '/it-services',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta
          name="description"
          content="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI, artificial intelligence, enterprise solutions, digital transformation, IT services, cloud computing, quantum computing"
        />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta
          property="og:description"
          content="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta
          name="twitter:description"
          content="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <Navigation />
        
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <main id="main-content" className="container mx-auto px-4 py-16" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8" role="doc-subtitle">
              Advanced AI and IT Solutions
            </p>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
              Transform your business with our cutting-edge technology and achieve unprecedented growth.
            </p>
          </section>

          {/* Services Section */}
          <section className="grid md:grid-cols-3 gap-8 mb-16" aria-labelledby="services-heading">
            <h2 id="services-heading" className="sr-only">
              Our Services
            </h2>

            {services.map((service, index) => (
              <Suspense key={service.title} fallback={<ServiceCardSkeleton />}>
                <article 
                  className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href={service.href}
                    onClick={() => handleServiceClick(service.title)}
                    className="inline-block text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More →
                  </a>
                </article>
              </Suspense>
            ))}
          </section>

          {/* Interactive Components */}
          <Suspense fallback={<LoadingSpinner />}>
            <InteractiveAIROICalculator />
          </Suspense>

          <Suspense fallback={<LoadingSpinner />}>
            <ContentShowcase />
          </Suspense>

          {/* Call to Action Section */}
          <section className="text-center mt-16" aria-labelledby="cta-heading">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13026009898"
                onClick={handlePhoneClick}
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                aria-label="Call us at (302) 600-9898"
              >
                📞 Contact Us: (302) 600-9898
              </a>
              <a
                href="/contact"
                className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                Get Started Today
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;