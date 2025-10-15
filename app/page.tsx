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
      
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
        <div className="particles absolute inset-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">Welcome to Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We provide cutting-edge <span className="text-cyan-400 font-semibold">AI and IT solutions</span> to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="cyber-button text-lg px-8 py-4">
                Get Started
              </Link>
              <Link to="/about" className="cyber-button text-lg px-8 py-4 border-purple-400 text-purple-400 hover:border-purple-300 hover:text-purple-300">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Our <span className="gradient-text">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-cyber hover-lift group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="text-2xl font-semibold text-white mb-4">AI Services</h3>
                <p className="text-gray-300 mb-6">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium">Learn More →</Link>
              </div>
              <div className="card-cyber hover-lift group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">☁️</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <Link to="/cloud-infrastructure" className="text-cyan-400 hover:text-cyan-300 font-medium">Learn More →</Link>
              </div>
              <div className="card-cyber hover-lift group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🔄</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Digital Transformation</h3>
                <p className="text-gray-300 mb-6">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <Link to="/digital-transformation" className="text-cyan-400 hover:text-cyan-300 font-medium">Learn More →</Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              AI-Powered <span className="gradient-text">Tools</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-dark rounded-lg p-6 hover-lift">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-3">Automated content moderation using AI</p>
                <Link to="/zion-ai-content-moderator" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="glass-dark rounded-lg p-6 hover-lift">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-lg font-semibold text-white mb-2">Sales Predictor</h3>
                <p className="text-gray-300 text-sm mb-3">Predict sales trends with AI</p>
                <Link to="/zion-ai-sales-predictor" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="glass-dark rounded-lg p-6 hover-lift">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Workflow Automator</h3>
                <p className="text-gray-300 text-sm mb-3">Automate business workflows</p>
                <Link to="/zion-ai-workflow-automator" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="glass-dark rounded-lg p-6 hover-lift">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-white mb-2">Financial Forecaster</h3>
                <p className="text-gray-300 text-sm mb-3">AI-powered financial predictions</p>
                <Link to="/zion-ai-financial-forecaster" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Try Now →</Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="cyber-button">View All Services</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;