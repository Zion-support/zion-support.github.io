import React, { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import FuturisticBackground from './components/FuturisticBackground';
import FuturisticNavigation from './components/FuturisticNavigation';
import FuturisticFooter from './components/FuturisticFooter';

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
      
      <FuturisticBackground />
      <FuturisticNavigation />
      
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  Welcome to Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Empowering businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and competitive advantage in the digital age.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </Link>
              <Link 
                to="/about" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-pink-400 mb-2">99%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business and drive innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">AI Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link 
                  to="/ai-services" 
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-2 transition-all duration-300"
                >
                  Learn More 
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="group glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <Link 
                  to="/cloud-infrastructure" 
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-2 transition-all duration-300"
                >
                  Learn More 
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="group glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">Digital Transformation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <Link 
                  to="/digital-transformation" 
                  className="inline-flex items-center text-pink-400 hover:text-pink-300 font-medium group-hover:translate-x-2 transition-all duration-300"
                >
                  Learn More 
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Tools Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
                  AI-Powered Tools
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI tools designed to automate, optimize, and enhance your business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-4">Automated content moderation using AI</p>
                <Link 
                  to="/zion-ai-content-moderator" 
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300 inline-flex items-center"
                >
                  Try Now 
                  <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="group glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Sales Predictor</h3>
                <p className="text-gray-300 text-sm mb-4">Predict sales trends with AI</p>
                <Link 
                  to="/zion-ai-sales-predictor" 
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300 inline-flex items-center"
                >
                  Try Now 
                  <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="group glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">Workflow Automator</h3>
                <p className="text-gray-300 text-sm mb-4">Automate business workflows</p>
                <Link 
                  to="/zion-ai-workflow-automator" 
                  className="text-pink-400 hover:text-pink-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300 inline-flex items-center"
                >
                  Try Now 
                  <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="group glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Financial Forecaster</h3>
                <p className="text-gray-300 text-sm mb-4">AI-powered financial predictions</p>
                <Link 
                  to="/zion-ai-financial-forecaster" 
                  className="text-green-400 hover:text-green-300 text-sm font-medium group-hover:translate-x-1 transition-all duration-300 inline-flex items-center"
                >
                  Try Now 
                  <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                View All Services 
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        <FuturisticFooter />
      </div>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;