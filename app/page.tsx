import React, { useCallback, useState, useEffect, Suspense, lazy } from 'react';
import { ChevronRightIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

// Dynamically import heavy components for better performance
const ServiceCard = lazy(() => import('./components/ServiceCard'));

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
          gtag?: (
            command: string,
            action: string,
            parameters: Record<string, unknown>
          ) => void;
        }
      ).gtag
    ) {
      (
        window as unknown as {
          gtag: (
            command: string,
            action: string,
            parameters: Record<string, unknown>
          ) => void;
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
          className={`text-center mb-20 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-labelledby="hero-heading"
        >
          <div className="max-w-4xl mx-auto">
            <h1 id="hero-heading" className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-8 font-light" role="doc-subtitle">
              Advanced AI and IT Solutions
            </p>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
              Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. 
              Transform your business with our cutting-edge technology and expert consultation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13026009898"
                onClick={handlePhoneClick}
                className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
                aria-label="Call us at (302) 600-9898"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call (302) 600-9898
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 shadow-lg"
                aria-label="Email us at kleber@ziontechgroup.com"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section 
          className="mb-20"
          aria-labelledby="services-heading"
        >
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  AI Solutions
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Harness the power of artificial intelligence to drive innovation and efficiency in your organization. 
                  From machine learning to natural language processing.
                </p>
                <a href="#" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  Learn more <ChevronRightIcon className="w-4 h-4 ml-1" />
                </a>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Digital Transformation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transform your business processes with cutting-edge technology and expert consultation. 
                  Modernize your operations for the digital age.
                </p>
                <a href="#" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  Learn more <ChevronRightIcon className="w-4 h-4 ml-1" />
                </a>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cloud Services
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Scale your infrastructure with secure, reliable, and efficient cloud solutions. 
                  Optimize performance and reduce costs.
                </p>
                <a href="#" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  Learn more <ChevronRightIcon className="w-4 h-4 ml-1" />
                </a>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Security Solutions
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Protect your digital assets with comprehensive security solutions. 
                  Advanced threat detection and prevention systems.
                </p>
                <a href="#" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  Learn more <ChevronRightIcon className="w-4 h-4 ml-1" />
                </a>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Data Analytics
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Unlock insights from your data with advanced analytics and business intelligence. 
                  Make data-driven decisions with confidence.
                </p>
                <a href="#" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  Learn more <ChevronRightIcon className="w-4 h-4 ml-1" />
                </a>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Automation
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Streamline operations with intelligent automation solutions. 
                  Reduce manual work and increase efficiency across your organization.
                </p>
                <a href="#" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                  Learn more <ChevronRightIcon className="w-4 h-4 ml-1" />
                </a>
              </article>
            </Suspense>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20 bg-white rounded-2xl shadow-xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We stay at the forefront of technology, implementing the latest AI and automation solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Our solutions have helped hundreds of companies achieve their digital transformation goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our team of experienced professionals brings deep expertise in AI, cloud, and enterprise solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our AI and technology solutions can accelerate your digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13026009898"
              onClick={handlePhoneClick}
              className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
              aria-label="Call us at (302) 600-9898"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call (302) 600-9898
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white/10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Email us at kleber@ziontechgroup.com"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2" />
                <span>Delaware, USA</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-4 h-4 mr-2" />
                <span>(302) 600-9898</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;