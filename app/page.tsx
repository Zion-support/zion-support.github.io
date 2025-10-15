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
      
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  ZION TECH GROUP
                </span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-8"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              <span className="text-cyan-400 font-semibold">Revolutionizing the future</span> with cutting-edge AI and IT solutions. 
              We empower businesses to thrive in the digital age with innovative technology and intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </Link>
              <Link 
                to="/about" 
                className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-105"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-cyan-400 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Transform Your Business?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-cyan-400 font-semibold">Phone</div>
                  <div className="text-gray-300">+1 302 464 0950</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-semibold">Email</div>
                  <div className="text-gray-300">kleber@ziontechgroup.com</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-semibold">Location</div>
                  <div className="text-gray-300">Middletown, DE</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Cutting-edge solutions designed to propel your business into the future
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative bg-black/50 backdrop-blur-sm border border-cyan-500/30 p-8 rounded-2xl hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI Services</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                  </p>
                  <Link 
                    to="/ai-services" 
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300 group"
                  >
                    Learn More 
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="group relative bg-black/50 backdrop-blur-sm border border-purple-500/30 p-8 rounded-2xl hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Cloud Infrastructure</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                  </p>
                  <Link 
                    to="/cloud-infrastructure" 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300 group"
                  >
                    Learn More 
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="group relative bg-black/50 backdrop-blur-sm border border-pink-500/30 p-8 rounded-2xl hover:border-pink-400/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-4">Digital Transformation</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Complete digital transformation services to modernize your business processes and systems.
                  </p>
                  <Link 
                    to="/digital-transformation" 
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold transition-colors duration-300 group"
                  >
                    Learn More 
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  AI-Powered Tools
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience the power of artificial intelligence with our cutting-edge tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative bg-black/40 backdrop-blur-sm border border-green-500/30 p-6 rounded-xl hover:border-green-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h3 className="text-lg font-bold text-green-400 mb-2">Content Moderator</h3>
                  <p className="text-gray-300 text-sm mb-4">Automated content moderation using AI</p>
                  <Link 
                    to="/zion-ai-content-moderator" 
                    className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-semibold transition-colors duration-300 group"
                  >
                    Try Now 
                    <svg className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="group relative bg-black/40 backdrop-blur-sm border border-cyan-500/30 p-6 rounded-xl hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-3">📈</div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">Sales Predictor</h3>
                  <p className="text-gray-300 text-sm mb-4">Predict sales trends with AI</p>
                  <Link 
                    to="/zion-ai-sales-predictor" 
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition-colors duration-300 group"
                  >
                    Try Now 
                    <svg className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="group relative bg-black/40 backdrop-blur-sm border border-purple-500/30 p-6 rounded-xl hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="text-lg font-bold text-purple-400 mb-2">Workflow Automator</h3>
                  <p className="text-gray-300 text-sm mb-4">Automate business workflows</p>
                  <Link 
                    to="/zion-ai-workflow-automator" 
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors duration-300 group"
                  >
                    Try Now 
                    <svg className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="group relative bg-black/40 backdrop-blur-sm border border-pink-500/30 p-6 rounded-xl hover:border-pink-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative z-10">
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="text-lg font-bold text-pink-400 mb-2">Financial Forecaster</h3>
                  <p className="text-gray-300 text-sm mb-4">AI-powered financial predictions</p>
                  <Link 
                    to="/zion-ai-financial-forecaster" 
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 text-sm font-semibold transition-colors duration-300 group"
                  >
                    Try Now 
                    <svg className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 group"
              >
                View All Services 
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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