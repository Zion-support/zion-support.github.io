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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading provider of AI and IT solutions for modern businesses. We help companies transform through cutting-edge technology, intelligent automation, and innovative micro SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started Today
              </a>
              <a href="/about" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Learn More
              </a>
              <a href="tel:+13024640950" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Call +1 (302) 464-0950
              </a>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">AI Tools Available</div>
              </div>
            </div>
            
            {/* Featured Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-4">
                  Advanced artificial intelligence solutions including machine learning, NLP, computer vision, and automation.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting at $2,500/month</div>
                <a href="/ai-services" className="text-blue-600 hover:text-blue-800 font-medium">Explore AI Services →</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting at $4,000/month</div>
                <a href="/cloud-infrastructure" className="text-blue-600 hover:text-blue-800 font-medium">Explore Cloud Solutions →</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SaaS Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Ready-to-use AI tools and micro SaaS applications for specific business needs and workflows.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting at $19/month</div>
                <a href="/micro-saas-solutions" className="text-blue-600 hover:text-blue-800 font-medium">Explore Micro SaaS →</a>
              </div>
            </div>

            {/* AI Tools Preview */}
            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular AI Tools</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <a href="/zion-ai-content-moderator" className="text-center group">
                  <div className="bg-blue-50 p-4 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <div className="text-2xl mb-2">🛡️</div>
                    <div className="text-sm font-medium">Content Moderator</div>
                    <div className="text-xs text-gray-500">$29/month</div>
                  </div>
                </a>
                <a href="/zion-ai-customer-churn-predictor" className="text-center group">
                  <div className="bg-green-50 p-4 rounded-lg group-hover:bg-green-100 transition-colors">
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-sm font-medium">Churn Predictor</div>
                    <div className="text-xs text-gray-500">$49/month</div>
                  </div>
                </a>
                <a href="/zion-ai-document-analyzer" className="text-center group">
                  <div className="bg-purple-50 p-4 rounded-lg group-hover:bg-purple-100 transition-colors">
                    <div className="text-2xl mb-2">📄</div>
                    <div className="text-sm font-medium">Document Analyzer</div>
                    <div className="text-xs text-gray-500">$59/month</div>
                  </div>
                </a>
                <a href="/zion-ai-workflow-automator" className="text-center group">
                  <div className="bg-orange-50 p-4 rounded-lg group-hover:bg-orange-100 transition-colors">
                    <div className="text-2xl mb-2">⚡</div>
                    <div className="text-sm font-medium">Workflow Automator</div>
                    <div className="text-xs text-gray-500">$89/month</div>
                  </div>
                </a>
              </div>
              <div className="text-center mt-6">
                <a href="/micro-saas-solutions" className="text-blue-600 hover:text-blue-800 font-medium">
                  View All AI Tools →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;