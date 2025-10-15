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
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden cyber-grid-bg">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse floating-element"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000 floating-element"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000 floating-element"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse delay-3000 floating-element"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-500 rounded-full blur-2xl animate-pulse delay-4000 floating-element"></div>
          <div className="absolute top-1/4 right-1/4 w-28 h-28 bg-orange-500 rounded-full blur-2xl animate-pulse delay-5000 floating-element"></div>
        </div>
        
        {/* Matrix rain effect */}
        <div className="matrix-rain">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="matrix-column"
              style={{
                left: `${i * 6.67}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${8 + Math.random() * 6}s`
              }}
            >
              {Array.from({ length: 15 }).map((_, j) => (
                <div key={j} className="opacity-60">
                  {Math.random() > 0.5 ? '1' : '0'}
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
                🚀 Leading AI & IT Solutions Provider
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 gradient-text glitch" data-text="Welcome to Zion Tech Group">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age. 
              Transform your operations with our innovative micro SAAS services and advanced technology solutions.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="glass-effect p-6 rounded-xl">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">AI & IT Services</div>
              </div>
              <div className="glass-effect p-6 rounded-xl">
                <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="glass-effect p-6 rounded-xl">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="mb-12 holographic-card max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center justify-center">
                <span className="mr-3">⚡</span>
                Ready to Transform Your Business?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors group">
                  <span className="text-cyan-400 text-xl group-hover:neon-text-cyan transition-all">📞</span>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">Phone</div>
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400 transition-colors group-hover:neon-text-cyan">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors group">
                  <span className="text-cyan-400 text-xl group-hover:neon-text-cyan transition-all">📧</span>
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider">Email</div>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400 transition-colors group-hover:neon-text-cyan">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Address</div>
                <div className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/services" className="btn-futuristic group">
                <span className="group-hover:neon-text-cyan transition-all">Explore Services</span>
              </a>
              <a href="/contact" className="btn-cyber group">
                <span className="group-hover:neon-text-cyan transition-all">Get Quote</span>
              </a>
              <a href="/pricing" className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 hover:neon-glow-purple group">
                <span className="group-hover:neon-text-purple transition-all">View Pricing</span>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16">
              <div className="text-gray-400 text-sm mb-6">Trusted by leading companies worldwide</div>
              <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-cyan-400">Microsoft</div>
                <div className="text-2xl font-bold text-purple-400">Google</div>
                <div className="text-2xl font-bold text-pink-400">Amazon</div>
                <div className="text-2xl font-bold text-blue-400">IBM</div>
                <div className="text-2xl font-bold text-green-400">Oracle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;