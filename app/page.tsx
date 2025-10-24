import React, { memo, useMemo } from 'react';
import Link from 'next/link';
import EnhancedSEOHead from './components/EnhancedSEOHead';

const HomePage: React.FC = memo(() => {
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI and IT solutions for modern businesses",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  }), []);

export default function HomePage() {
  return (
    <>
      <EnhancedSEOHead
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation."
        keywords="AI solutions, IT services, cloud infrastructure, digital transformation, machine learning, artificial intelligence"
        canonicalUrl="https://ziontechgroup.com"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center">
                Get Started
              </Link>
              <Link to="/about" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-4">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link to="/ai-services" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <Link to="/cloud-infrastructure" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <Link to="/digital-transformation" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">AI-Powered Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Moderator</h3>
                <p className="text-gray-600 text-sm mb-3">Automated content moderation using AI</p>
                <Link to="/zion-ai-content-moderator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Predictor</h3>
                <p className="text-gray-600 text-sm mb-3">Predict sales trends with AI</p>
                <Link to="/zion-ai-sales-predictor" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Workflow Automator</h3>
                <p className="text-gray-600 text-sm mb-3">Automate business workflows</p>
                <Link to="/zion-ai-workflow-automator" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Financial Forecaster</h3>
                <p className="text-gray-600 text-sm mb-3">AI-powered financial predictions</p>
                <Link to="/zion-ai-financial-forecaster" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Try Now →</Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="text-blue-600 hover:text-blue-800 font-medium">View All Services →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
