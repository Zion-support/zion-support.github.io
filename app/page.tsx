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
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-bounce delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Zion Tech Group
              </h1>
              <div className="h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full mt-4 animate-pulse"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future with <span className="text-cyan-400 font-semibold">AI-powered solutions</span>, 
              <span className="text-purple-400 font-semibold"> cutting-edge IT services</span>, and 
              <span className="text-pink-400 font-semibold"> innovative micro SaaS platforms</span> that transform businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link to="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link to="/about" className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Learn More
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions powered by cutting-edge technology and innovation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">AI Services</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                  </p>
                  <Link to="/ai-services" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-300">
                    Learn More 
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">Cloud Infrastructure</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                  </p>
                  <Link to="/cloud-infrastructure" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-2 transition-all duration-300">
                    Learn More 
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 hover:border-pink-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-4 group-hover:text-pink-300 transition-colors">Digital Transformation</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Complete digital transformation services to modernize your business processes and systems.
                  </p>
                  <Link to="/digital-transformation" className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold group-hover:translate-x-2 transition-all duration-300">
                    Learn More 
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                AI-Powered Tools
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI tools designed to automate, optimize, and transform your business operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div className="group relative bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-4">Automated content moderation using AI</p>
                <Link to="/zion-ai-content-moderator" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300">
                  Try Now 
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="group relative bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="text-lg font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">Sales Predictor</h3>
                <p className="text-gray-300 text-sm mb-4">Predict sales trends with AI</p>
                <Link to="/zion-ai-sales-predictor" className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300">
                  Try Now 
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="group relative bg-gradient-to-br from-pink-500/20 to-pink-600/10 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 hover:border-pink-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/25">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-bold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">Workflow Automator</h3>
                <p className="text-gray-300 text-sm mb-4">Automate business workflows</p>
                <Link to="/zion-ai-workflow-automator" className="inline-flex items-center text-pink-400 hover:text-pink-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300">
                  Try Now 
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="group relative bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 hover:border-green-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">Financial Forecaster</h3>
                <p className="text-gray-300 text-sm mb-4">AI-powered financial predictions</p>
                <Link to="/zion-ai-financial-forecaster" className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300">
                  Try Now 
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="group relative bg-gradient-to-br from-orange-500/20 to-orange-600/10 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 hover:border-orange-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="text-lg font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors">AI Code Assistant</h3>
                <p className="text-gray-300 text-sm mb-4">Intelligent code generation & review</p>
                <Link to="/ai-code-assistant" className="inline-flex items-center text-orange-400 hover:text-orange-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300">
                  Try Now 
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="group relative bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 backdrop-blur-sm border border-indigo-500/30 rounded-xl p-6 hover:border-indigo-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/25">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="text-lg font-bold text-indigo-400 mb-2 group-hover:text-indigo-300 transition-colors">AI Image Generator</h3>
                <p className="text-gray-300 text-sm mb-4">Create stunning images with AI</p>
                <Link to="/ai-image-generator" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300">
                  Try Now 
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              
              <div className="group relative bg-gradient-to-br from-teal-500/20 to-teal-600/10 backdrop-blur-sm border border-teal-500/30 rounded-xl p-6 hover:border-teal-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-lg font-bold text-teal-400 mb-2 group-hover:text-teal-300 transition-colors">Predictive Analytics</h3>
                <p className="text-gray-300 text-sm mb-4">Advanced data forecasting & insights</p>
                <Link to="/ai-predictive-analytics" className="inline-flex items-center text-teal-400 hover:text-teal-300 text-sm font-semibold group-hover:translate-x-1 transition-all duration-300">
                  Try Now 
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
                View All Services 
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
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