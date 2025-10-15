import React from 'react';
import { Helmet } from 'react-helmet-async';

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
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta name="keywords" content="AI solutions, IT services, cloud infrastructure, digital transformation, machine learning, artificial intelligence" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI and IT solutions for modern businesses." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Advanced AI & IT Solutions
              <span className="block text-blue-600">for Modern Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, innovative micro SAAS platforms, 
              and comprehensive IT solutions. We help companies thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a href="/contact" className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl">
                Get Started Today
              </a>
              <a href="/services" className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold">
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Comprehensive Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From AI-powered micro SAAS platforms to enterprise IT solutions, we deliver innovative technology that drives results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-6">
                  Advanced artificial intelligence solutions including chatbots, document processing, predictive analytics, and more.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• AI Content Generator Pro</li>
                  <li>• AI Chatbot Platform</li>
                  <li>• Document Processor</li>
                  <li>• Predictive Analytics</li>
                </ul>
                <a href="/ai-services" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Learn More →
                </a>
              </div>

              {/* Micro SAAS */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SAAS Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Innovative micro SAAS platforms designed to solve specific business challenges with AI-powered automation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• CRM Pro</li>
                  <li>• Project Manager Pro</li>
                  <li>• Invoice Pro</li>
                  <li>• Analytics Pro</li>
                </ul>
                <a href="/micro-saas-solutions" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  Learn More →
                </a>
              </div>

              {/* IT Services */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Services</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive IT solutions including cloud infrastructure, web development, mobile apps, and digital transformation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li>• Cloud Infrastructure</li>
                  <li>• Web Development</li>
                  <li>• Mobile Development</li>
                  <li>• 5G Solutions</li>
                </ul>
                <a href="/it-services" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our AI and IT solutions can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg font-semibold">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-semibold">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;