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
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading provider of advanced AI and IT solutions for modern businesses. We help you transform through cutting-edge technology, innovative micro SAAS solutions, and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </a>
              <a href="/services" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Services</h3>
                <p className="text-gray-600 mb-4">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and predictive analytics.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• AI Development & Consulting</li>
                  <li>• Content Generation & Automation</li>
                  <li>• Customer Support & Analytics</li>
                  <li>• Sales & Financial Forecasting</li>
                </ul>
                <a href="/ai-services" className="text-blue-600 hover:text-blue-800 font-medium">Learn More →</a>
              </div>

              {/* Micro SAAS Solutions */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Micro SAAS Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Powerful, ready-to-use software solutions that solve specific business problems with intelligent automation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Task & Project Management</li>
                  <li>• Expense Tracking & Analytics</li>
                  <li>• Email Marketing & Social Media</li>
                  <li>• Inventory & Workflow Automation</li>
                </ul>
                <a href="/micro-saas-solutions" className="text-green-600 hover:text-green-800 font-medium">Learn More →</a>
              </div>

              {/* IT Solutions */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">IT Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive IT services including cloud infrastructure, cybersecurity, web development, and data analytics.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Cloud Infrastructure & Migration</li>
                  <li>• Cybersecurity & Compliance</li>
                  <li>• Web & Mobile Development</li>
                  <li>• Database Management & Analytics</li>
                </ul>
                <a href="/it-services" className="text-purple-600 hover:text-purple-800 font-medium">Learn More →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Overview */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Competitive Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Transparent, market-competitive pricing for all our services. Choose the plan that fits your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Micro SAAS</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$29 - $799</div>
                <p className="text-gray-600 mb-4">Monthly subscription plans for our micro SAAS solutions</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Task Management: $29-$199/month</li>
                  <li>• AI Content Generator: $49-$499/month</li>
                  <li>• Email Marketing: $39-$299/month</li>
                  <li>• Social Scheduler: $49-$399/month</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Services</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">$2,000 - $50,000</div>
                <p className="text-gray-600 mb-4">Custom AI development and consulting services</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• AI Development: $5,000-$50,000</li>
                  <li>• AI Consulting: $2,000-$25,000</li>
                  <li>• Customer Support AI: $99-$999/month</li>
                  <li>• Content Generation: $49-$499/month</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Solutions</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">$1,000 - $100,000</div>
                <p className="text-gray-600 mb-4">Comprehensive IT services and infrastructure solutions</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Cloud Infrastructure: $1,000-$20,000/month</li>
                  <li>• Cybersecurity: $2,000-$25,000/month</li>
                  <li>• Web Development: $3,000-$75,000</li>
                  <li>• Mobile Development: $5,000-$100,000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your project and discover how our AI and IT solutions can accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Get Free Consultation
              </a>
              <a href="tel:+13024640950" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;