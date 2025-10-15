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
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="futuristic-bg"></div>
        <div className="grid-overlay"></div>
        
        {/* Floating Particles */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-gradient holographic">
              ZION TECH GROUP
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-futuristic neon-glow">
                Get Started
              </Link>
              <Link to="/about" className="btn-futuristic neon-glow" style={{borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)'}}>
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-32">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-card p-8 floating">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 neon-glow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-gradient">AI Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors">Learn More →</Link>
              </div>
              <div className="glass-card p-8 floating" style={{animationDelay: '0.5s'}}>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 neon-glow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-gradient">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <Link to="/cloud-infrastructure" className="text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors">Learn More →</Link>
              </div>
              <div className="glass-card p-8 floating" style={{animationDelay: '1s'}}>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6 neon-glow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-gradient">Digital Transformation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <Link to="/digital-transformation" className="text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors">Learn More →</Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-32">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient">AI-Powered Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6 neon-border">
                <h3 className="text-xl font-semibold text-white mb-3 text-gradient">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-4">Automated content moderation using AI</p>
                <Link to="/zion-ai-content-moderator" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">Try Now →</Link>
              </div>
              <div className="glass-card p-6 neon-border">
                <h3 className="text-xl font-semibold text-white mb-3 text-gradient">Sales Predictor</h3>
                <p className="text-gray-300 text-sm mb-4">Predict sales trends with AI</p>
                <Link to="/zion-ai-sales-predictor" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">Try Now →</Link>
              </div>
              <div className="glass-card p-6 neon-border">
                <h3 className="text-xl font-semibold text-white mb-3 text-gradient">Workflow Automator</h3>
                <p className="text-gray-300 text-sm mb-4">Automate business workflows</p>
                <Link to="/zion-ai-workflow-automator" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">Try Now →</Link>
              </div>
              <div className="glass-card p-6 neon-border">
                <h3 className="text-xl font-semibold text-white mb-3 text-gradient">Financial Forecaster</h3>
                <p className="text-gray-300 text-sm mb-4">AI-powered financial predictions</p>
                <Link to="/zion-ai-financial-forecaster" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">Try Now →</Link>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/services" className="btn-futuristic neon-glow" style={{borderColor: 'var(--neon-green)', color: 'var(--neon-green)'}}>
                View All Services
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