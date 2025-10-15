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
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age. 
              Transform your operations with our innovative micro SAAS services and advanced technology solutions.
            </p>
            
            {/* Contact Information */}
            <div className="mb-12 p-6 glass-effect rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-cyan-400">📞</span>
                  <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors">+1 302 464 0950</a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-cyan-400">📧</span>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors">kleber@ziontechgroup.com</a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/services" className="btn-futuristic">
                Explore Services
              </a>
              <a href="/contact" className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                Get Quote
              </a>
            </div>
            
            {/* Featured Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">AI Services</h3>
                <p className="text-gray-300 mb-4">
                  Advanced artificial intelligence solutions including machine learning, NLP, and computer vision.
                </p>
                <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">Explore AI Services →</a>
              </div>
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud solutions that provide reliability, security, and performance for your business.
                </p>
                <a href="/cloud-infrastructure" className="text-cyan-400 hover:text-cyan-300 transition-colors">Explore Cloud Solutions →</a>
              </div>
              <div className="glass-effect p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Digital Transformation</h3>
                <p className="text-gray-300 mb-4">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <a href="/digital-transformation" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;