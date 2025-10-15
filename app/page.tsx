import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './components/SEOHead';

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

  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, and digital transformation."
        keywords="AI solutions, IT services, cloud infrastructure, digital transformation, machine learning, artificial intelligence"
        canonicalUrl="https://ziontechgroup.com"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-pink-500/30 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age. 
              <span className="text-cyan-400 font-semibold"> Transform your future with intelligent technology.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transform">
                Get Started
              </Link>
              <Link to="/about" className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transform">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-32">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🤖</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-300 inline-flex items-center">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">☁️</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <Link to="/cloud-infrastructure" className="text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-2 transition-all duration-300 inline-flex items-center">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🚀</div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Digital Transformation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <Link to="/digital-transformation" className="text-pink-400 hover:text-pink-300 font-semibold group-hover:translate-x-2 transition-all duration-300 inline-flex items-center">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-32">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              AI-Powered Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transform group">
                <div className="text-3xl mb-3 group-hover:animate-pulse">🛡️</div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-4">Automated content moderation using AI</p>
                <Link to="/zion-ai-content-moderator" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                  Try Now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105 transform group">
                <div className="text-3xl mb-3 group-hover:animate-pulse">📈</div>
                <h3 className="text-lg font-bold text-purple-400 mb-2">Sales Predictor</h3>
                <p className="text-gray-300 text-sm mb-4">Predict sales trends with AI</p>
                <Link to="/zion-ai-sales-predictor" className="text-purple-400 hover:text-purple-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                  Try Now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20 hover:scale-105 transform group">
                <div className="text-3xl mb-3 group-hover:animate-pulse">⚡</div>
                <h3 className="text-lg font-bold text-pink-400 mb-2">Workflow Automator</h3>
                <p className="text-gray-300 text-sm mb-4">Automate business workflows</p>
                <Link to="/zion-ai-workflow-automator" className="text-pink-400 hover:text-pink-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                  Try Now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105 transform group">
                <div className="text-3xl mb-3 group-hover:animate-pulse">💰</div>
                <h3 className="text-lg font-bold text-orange-400 mb-2">Financial Forecaster</h3>
                <p className="text-gray-300 text-sm mb-4">AI-powered financial predictions</p>
                <Link to="/zion-ai-financial-forecaster" className="text-orange-400 hover:text-orange-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300 inline-flex items-center">
                  Try Now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/services" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 transform">
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;