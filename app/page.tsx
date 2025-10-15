import React from 'react';
import { Helmet } from 'react-helmet-async';
import './styles/futuristic.css';

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
      
      <div className="min-h-screen futuristic-bg">
        {/* Animated Background */}
        <div className="matrix-bg">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="matrix-char"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center">
            <div className="floating mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 relative">
                <span className="text-4xl">⚡</span>
                <div className="absolute inset-0 rounded-full border-2 border-neon-blue animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in-up">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
              <a href="/contact" className="futuristic-btn">
                Get Started
              </a>
              <a href="/about" className="glow-border text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-purple">Our Services</h2>
              <p className="text-lg text-gray-300">Comprehensive AI and IT solutions for modern businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="futuristic-card text-center p-8 slide-in-left">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Services</h3>
                <p className="text-gray-300 mb-4">Advanced artificial intelligence solutions including machine learning, NLP, and computer vision.</p>
                <a href="/ai-services" className="text-neon-blue hover:text-neon-purple font-medium transition-colors">Learn More →</a>
              </div>
              <div className="futuristic-card text-center p-8 fade-in-up">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 floating-delayed">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">Scalable cloud solutions that provide reliability, security, and performance.</p>
                <a href="/cloud-infrastructure" className="text-neon-blue hover:text-neon-purple font-medium transition-colors">Learn More →</a>
              </div>
              <div className="futuristic-card text-center p-8 slide-in-right">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 floating">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Digital Transformation</h3>
                <p className="text-gray-300 mb-4">Complete digital transformation services to modernize your business processes.</p>
                <a href="/digital-transformation" className="text-neon-blue hover:text-neon-purple font-medium transition-colors">Learn More →</a>
              </div>
            </div>
          </div>
        </div>

        {/* Zion AI Products Section */}
        <div className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text-green">Zion AI Products</h2>
              <p className="text-lg text-gray-300">Ready-to-use AI solutions for immediate business impact</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="futuristic-card p-6 holographic">
                <h3 className="text-lg font-semibold text-white mb-2">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-4">Automated content moderation using advanced AI algorithms.</p>
                <a href="/zion-ai-content-moderator" className="text-neon-blue hover:text-neon-purple text-sm font-medium transition-colors">Explore →</a>
              </div>
              <div className="futuristic-card p-6 holographic">
                <h3 className="text-lg font-semibold text-white mb-2">Customer Churn Predictor</h3>
                <p className="text-gray-300 text-sm mb-4">Predict and prevent customer churn with machine learning.</p>
                <a href="/zion-ai-customer-churn-predictor" className="text-neon-blue hover:text-neon-purple text-sm font-medium transition-colors">Explore →</a>
              </div>
              <div className="futuristic-card p-6 holographic">
                <h3 className="text-lg font-semibold text-white mb-2">Workflow Automator</h3>
                <p className="text-gray-300 text-sm mb-4">Automate business processes with intelligent workflow management.</p>
                <a href="/zion-ai-workflow-automator" className="text-neon-blue hover:text-neon-purple text-sm font-medium transition-colors">Explore →</a>
              </div>
              <div className="futuristic-card p-6 holographic">
                <h3 className="text-lg font-semibold text-white mb-2">Financial Forecaster</h3>
                <p className="text-gray-300 text-sm mb-4">Advanced financial forecasting and analysis tools.</p>
                <a href="/zion-ai-financial-forecaster" className="text-neon-blue hover:text-neon-purple text-sm font-medium transition-colors">Explore →</a>
              </div>
              <div className="futuristic-card p-6 holographic">
                <h3 className="text-lg font-semibold text-white mb-2">Document Analyzer</h3>
                <p className="text-gray-300 text-sm mb-4">Intelligent document processing and analysis.</p>
                <a href="/zion-ai-document-analyzer" className="text-neon-blue hover:text-neon-purple text-sm font-medium transition-colors">Explore →</a>
              </div>
              <div className="futuristic-card p-6 holographic">
                <h3 className="text-lg font-semibold text-white mb-2">Smart Expense Tracker</h3>
                <p className="text-gray-300 text-sm mb-4">AI-powered expense tracking and management.</p>
                <a href="/zion-smart-expense-tracker" className="text-neon-blue hover:text-neon-purple text-sm font-medium transition-colors">Explore →</a>
              </div>
            </div>
            <div className="text-center mt-8">
              <a href="/services" className="futuristic-btn">
                View All Products
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get started with our AI and IT solutions today and see the difference technology can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg">
                Contact Us
              </a>
              <a href="/pricing" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium">
                View Pricing
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-300">
              <p>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;