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
      
      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text neon-text">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age. 
              Transform your operations with our innovative technology and expert services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 font-semibold">
                Get Started
              </a>
              <a href="/about" className="border-2 border-cyan-500 text-cyan-400 px-10 py-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 font-semibold">
                Learn More
              </a>
            </div>
            
            {/* Featured Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 p-8 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, NLP, computer vision, and predictive analytics.
                </p>
                <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300 flex items-center">
                  Explore AI Services 
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-purple-500/20 p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">☁️</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Scalable cloud solutions that provide reliability, security, and performance for your business operations.
                </p>
                <a href="/cloud-infrastructure" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300 flex items-center">
                  Explore Cloud Solutions 
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-pink-500/20 p-8 rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Digital Transformation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <a href="/digital-transformation" className="text-pink-400 hover:text-pink-300 font-semibold transition-colors duration-300 flex items-center">
                  Learn More 
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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