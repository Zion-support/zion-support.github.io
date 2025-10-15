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
      
      <div className="min-h-screen animated-bg matrix-bg relative overflow-hidden">
        {/* Particle Effect */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center">
            <h1 className="responsive-heading font-bold gradient-text mb-6 hologram">
              Welcome to Zion Tech Group
            </h1>
            <p className="responsive-text text-gray-300 mb-8 max-w-3xl mx-auto fade-in-up">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
              <Link to="/contact" className="btn-futuristic energy text-center">
                Get Started
              </Link>
              <Link to="/about" className="btn-futuristic glitch text-center">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold neon-text text-center mb-12 cyber-scan">Our Services</h2>
            <div className="responsive-grid">
              <div className="card-futuristic hologram slide-in-left">
                <div className="text-4xl mb-4 neon-text-purple">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Services</h3>
                <p className="text-gray-300 mb-4">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link to="/ai-services" className="neon-text hover:glow-text font-medium transition-all duration-300">Learn More →</Link>
              </div>
              <div className="card-futuristic hologram slide-in-left" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl mb-4 neon-text-pink">☁️</div>
                <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <Link to="/cloud-infrastructure" className="neon-text hover:glow-text font-medium transition-all duration-300">Learn More →</Link>
              </div>
              <div className="card-futuristic hologram slide-in-left" style={{animationDelay: '0.4s'}}>
                <div className="text-4xl mb-4 neon-text-green">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-4">Digital Transformation</h3>
                <p className="text-gray-300 mb-4">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <Link to="/digital-transformation" className="neon-text hover:glow-text font-medium transition-all duration-300">Learn More →</Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold neon-text-pink text-center mb-12 cyber-scan">AI-Powered Tools</h2>
            <div className="responsive-grid">
              <div className="card-futuristic energy-pulse slide-in-right">
                <div className="text-3xl mb-3 neon-text-cyan">🛡️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-3">Automated content moderation using AI</p>
                <Link to="/zion-ai-content-moderator" className="neon-text-cyan hover:glow-text text-sm font-medium transition-all duration-300">Try Now →</Link>
              </div>
              <div className="card-futuristic energy-pulse slide-in-right" style={{animationDelay: '0.1s'}}>
                <div className="text-3xl mb-3 neon-text-purple">📈</div>
                <h3 className="text-lg font-semibold text-white mb-2">Sales Predictor</h3>
                <p className="text-gray-300 text-sm mb-3">Predict sales trends with AI</p>
                <Link to="/zion-ai-sales-predictor" className="neon-text-purple hover:glow-text text-sm font-medium transition-all duration-300">Try Now →</Link>
              </div>
              <div className="card-futuristic energy-pulse slide-in-right" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl mb-3 neon-text-green">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Workflow Automator</h3>
                <p className="text-gray-300 text-sm mb-3">Automate business workflows</p>
                <Link to="/zion-ai-workflow-automator" className="neon-text-green hover:glow-text text-sm font-medium transition-all duration-300">Try Now →</Link>
              </div>
              <div className="card-futuristic energy-pulse slide-in-right" style={{animationDelay: '0.3s'}}>
                <div className="text-3xl mb-3 neon-text-pink">💰</div>
                <h3 className="text-lg font-semibold text-white mb-2">Financial Forecaster</h3>
                <p className="text-gray-300 text-sm mb-3">AI-powered financial predictions</p>
                <Link to="/zion-ai-financial-forecaster" className="neon-text-pink hover:glow-text text-sm font-medium transition-all duration-300">Try Now →</Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="btn-futuristic glitch">View All Services →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;