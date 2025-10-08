import React, { useCallback, useState, useEffect, Suspense, lazy } from 'react';
import ServiceCard from './components/ServiceCard';
import { PhoneIcon, CpuChipIcon, CloudIcon, SparklesIcon } from '@heroicons/react/24/outline';

// Dynamically import heavy components for better performance
const InteractiveAIROICalculator = lazy(() => import('./components/InteractiveAIROICalculator'));

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
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
          className={`text-center mb-16 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-labelledby="hero-heading"
        >
          <h1 id="hero-heading" className="text-5xl font-bold text-gray-900 mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8" role="doc-subtitle">
            Advanced AI and IT Solutions
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology.
          </p>
        </section>

        {/* Services Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">
            Our Services
          </h2>

          <ServiceCard
            title="AI Solutions"
            description="Harness the power of artificial intelligence to drive innovation and efficiency in your organization. From machine learning models to natural language processing, we deliver cutting-edge AI solutions."
            icon={<CpuChipIcon className="w-8 h-8" />}
          />

          <ServiceCard
            title="Digital Transformation"
            description="Transform your business processes with cutting-edge technology and expert consultation. We help modernize your operations and improve efficiency across all departments."
            icon={<SparklesIcon className="w-8 h-8" />}
          />

          <ServiceCard
            title="Cloud Services"
            description="Scale your infrastructure with secure, reliable, and efficient cloud solutions. From migration to optimization, we ensure your cloud strategy delivers maximum value."
            icon={<CloudIcon className="w-8 h-8" />}
          />
        </section>

        {/* Interactive ROI Calculator Section */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16" aria-labelledby="roi-calculator-heading">
          <h2 id="roi-calculator-heading" className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Calculate Your AI Investment ROI
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            See how our AI solutions can transform your business efficiency and drive measurable results.
          </p>
          <Suspense fallback={
            <div className="bg-white rounded-lg p-8 animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-4 w-1/2 mx-auto"></div>
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
          }>
            <InteractiveAIROICalculator />
          </Suspense>
        </section>

        {/* Call to Action Section */}
        <section className="text-center" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already transforming their business with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13026009898"
              onClick={handlePhoneClick}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              aria-label="Call us at (302) 600-9898"
            >
              <PhoneIcon className="w-5 h-5" />
              Contact Us: (302) 600-9898
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              aria-label="Email us at info@ziontechgroup.com"
            >
              Email Us
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
