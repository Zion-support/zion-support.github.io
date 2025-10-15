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
      
      <div className="min-h-screen animated-bg cyber-grid relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full floating opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full floating opacity-40" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-pink-400 rounded-full floating opacity-50" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full floating opacity-30" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-400 rounded-full floating opacity-20" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 holographic">
              Zion Tech Group
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Leading provider of cutting-edge AI and IT solutions, micro SaaS applications, and digital transformation services for the modern world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a href="/contact" className="neon-button neon-glow hover:scale-105 transform transition-all duration-300 text-lg px-10 py-4">
                Get Started
              </a>
              <a href="/about" className="bg-transparent text-cyan-400 px-10 py-4 rounded-lg font-bold text-lg border-2 border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 transform">
                Learn More
              </a>
            </div>
            
            {/* Featured Services */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              <div className="futuristic-card group hover:scale-105 transform transition-all duration-500">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">AI Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, NLP, computer vision, and predictive analytics.
                </p>
                <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300">Explore AI Services →</a>
              </div>
              <div className="futuristic-card group hover:scale-105 transform transition-all duration-500" style={{animationDelay: '0.2s'}}>
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <a href="/cloud-infrastructure" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300">Explore Cloud Solutions →</a>
              </div>
              <div className="futuristic-card group hover:scale-105 transform transition-all duration-500" style={{animationDelay: '0.4s'}}>
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">Micro SaaS Solutions</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Innovative micro SaaS applications designed to solve specific business challenges and streamline operations.
                </p>
                <a href="/micro-saas-solutions" className="text-pink-400 hover:text-pink-300 font-semibold transition-colors duration-300">Explore Micro SaaS →</a>
              </div>
            </div>
            
            {/* Additional Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              <div className="futuristic-card text-center group hover:scale-105 transform transition-all duration-500">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌐</div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">Web Development</h4>
                <p className="text-gray-300 text-sm">Modern, responsive websites</p>
              </div>
              <div className="futuristic-card text-center group hover:scale-105 transform transition-all duration-500" style={{animationDelay: '0.1s'}}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">Mobile Apps</h4>
                <p className="text-gray-300 text-sm">Native & cross-platform apps</p>
              </div>
              <div className="futuristic-card text-center group hover:scale-105 transform transition-all duration-500" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">Cybersecurity</h4>
                <p className="text-gray-300 text-sm">Advanced security solutions</p>
              </div>
              <div className="futuristic-card text-center group hover:scale-105 transform transition-all duration-500" style={{animationDelay: '0.3s'}}>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">Data Analytics</h4>
                <p className="text-gray-300 text-sm">Business intelligence & insights</p>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-20 futuristic-card neon-glow text-center">
              <h2 className="text-4xl font-bold text-white mb-6 holographic">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that trust Zion Tech Group for their AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-cyan-500 text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-cyan-400 transition-all duration-300 hover:scale-105 transform neon-glow"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="bg-transparent text-cyan-400 px-10 py-4 rounded-lg font-bold text-lg border-2 border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 transform"
                >
                  Email kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;