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
      
      {/* Matrix Rain Background */}
      <div className="matrix-bg">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j}>
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="gradient-text animate-pulse">Welcome to</span>
              <br />
              <span className="neon-text">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We provide cutting-edge <span className="text-cyan-400 font-semibold">AI and IT solutions</span> to help your business thrive in the digital age. 
              <br className="hidden md:block" />
              <span className="text-purple-400">Innovation meets intelligence.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:neon-glow shadow-2xl">
                🚀 Get Started
              </a>
              <a href="/about" className="border-2 border-cyan-500 text-cyan-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:neon-glow">
                📖 Learn More
              </a>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="absolute top-20 left-10 floating">
              <div className="text-6xl opacity-20">🤖</div>
            </div>
            <div className="absolute top-40 right-20 floating" style={{ animationDelay: '1s' }}>
              <div className="text-5xl opacity-20">⚡</div>
            </div>
            <div className="absolute bottom-40 left-20 floating" style={{ animationDelay: '2s' }}>
              <div className="text-4xl opacity-20">🌐</div>
            </div>
            <div className="absolute bottom-20 right-10 floating" style={{ animationDelay: '3s' }}>
              <div className="text-5xl opacity-20">💻</div>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-32">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
              Cutting-edge solutions powered by artificial intelligence and modern technology
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-cyan-500/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">AI Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center group-hover:translate-x-2 transition-all duration-300">
                  Learn More 
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-purple-500/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <a href="/cloud-infrastructure" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center group-hover:translate-x-2 transition-all duration-300">
                  Learn More 
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-pink-500/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔄</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">Digital Transformation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <a href="/digital-transformation" className="text-pink-400 hover:text-pink-300 font-semibold flex items-center group-hover:translate-x-2 transition-all duration-300">
                  Learn More 
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-32">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">AI-Powered Tools</span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
              Intelligent solutions that automate and optimize your business processes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-cyan-500/20">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">Content Moderator</h3>
                <p className="text-gray-400 text-sm mb-4">Automated content moderation using AI</p>
                <a href="/zion-ai-content-moderator" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center group-hover:translate-x-1 transition-all duration-300">
                  Try Now 
                  <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-green-500/20">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💰</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">Sales Predictor</h3>
                <p className="text-gray-400 text-sm mb-4">Predict sales trends with AI</p>
                <a href="/zion-ai-sales-predictor" className="text-green-400 hover:text-green-300 text-sm font-semibold flex items-center group-hover:translate-x-1 transition-all duration-300">
                  Try Now 
                  <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-orange-500/20">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">Workflow Automator</h3>
                <p className="text-gray-400 text-sm mb-4">Automate business workflows</p>
                <a href="/zion-ai-workflow-automator" className="text-orange-400 hover:text-orange-300 text-sm font-semibold flex items-center group-hover:translate-x-1 transition-all duration-300">
                  Try Now 
                  <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-purple-500/20">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📈</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">Financial Forecaster</h3>
                <p className="text-gray-400 text-sm mb-4">AI-powered financial predictions</p>
                <a href="/zion-ai-financial-forecaster" className="text-purple-400 hover:text-purple-300 text-sm font-semibold flex items-center group-hover:translate-x-1 transition-all duration-300">
                  Try Now 
                  <svg className="ml-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/services" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg flex items-center justify-center group hover:translate-x-2 transition-all duration-300">
                View All Services 
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;