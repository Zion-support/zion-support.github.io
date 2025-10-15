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
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Welcome to Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age. 
              <span className="neon-text"> Experience the future of technology today.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a href="/contact" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="/about" className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                Learn More
              </a>
            </div>
            
            {/* Featured Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="group glass-effect p-8 rounded-2xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="text-4xl mb-6 group-hover:animate-pulse">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">AI Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, NLP, and computer vision.
                </p>
                <a href="/ai-services" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Explore AI Services 
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              <div className="group glass-effect p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="text-4xl mb-6 group-hover:animate-pulse">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Scalable cloud solutions that provide reliability, security, and performance for your business.
                </p>
                <a href="/cloud-infrastructure" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Explore Cloud Solutions 
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              
              <div className="group glass-effect p-8 rounded-2xl shadow-2xl hover:shadow-pink-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                <div className="text-4xl mb-6 group-hover:animate-pulse">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">Digital Transformation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <a href="/digital-transformation" className="inline-flex items-center text-pink-400 hover:text-pink-300 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Learn More 
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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