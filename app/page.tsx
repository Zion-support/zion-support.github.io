import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from './components/SEOHead';

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI and IT solutions for modern businesses",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Innovation City",
      "addressRegion": "IC",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Services",
        "description": "Advanced artificial intelligence solutions"
      },
      {
        "@type": "Offer", 
        "name": "IT Services",
        "description": "Comprehensive IT solutions and support"
      },
      {
        "@type": "Offer",
        "name": "Cloud Infrastructure",
        "description": "Scalable cloud solutions"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation."
        keywords="AI solutions, IT services, cloud infrastructure, digital transformation, artificial intelligence, machine learning, business technology"
        url="https://ziontechgroup.com"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to Zion Tech Group
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </a>
                <a href="/about" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-6">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <a href="/ai-services" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn more →
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-6">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <a href="/cloud-infrastructure" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn more →
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Transformation</h3>
                <p className="text-gray-600 mb-6">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <a href="/digital-transformation" className="text-blue-600 hover:text-blue-800 font-medium">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI and IT solutions can drive your success.
            </p>
            <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block">
              Get Started Today
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;