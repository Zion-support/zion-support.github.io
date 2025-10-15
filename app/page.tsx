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
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "contact@ziontechgroup.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Innovation City",
      "addressRegion": "IC",
      "postalCode": "12345",
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
      
      <div className="cyber-bg"></div>
      <div className="min-h-screen relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6 glitch" data-text="Welcome to Zion Tech Group">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-neon">
                Get Started
              </Link>
              <Link to="/about" className="btn-neon-purple">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold neon-text-purple text-center mb-12">Our Services</h2>
            <div className="grid-futuristic grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-futuristic grid-item">
                <h3 className="text-xl font-semibold neon-text-green mb-4">AI Services</h3>
                <p className="text-gray-300 mb-4">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium">Learn More →</Link>
              </div>
              <div className="card-futuristic grid-item">
                <h3 className="text-xl font-semibold neon-text-green mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <Link to="/cloud-infrastructure" className="text-cyan-400 hover:text-cyan-300 font-medium">Learn More →</Link>
              </div>
              <div className="card-futuristic grid-item">
                <h3 className="text-xl font-semibold neon-text-green mb-4">Digital Transformation</h3>
                <p className="text-gray-300 mb-4">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <Link to="/digital-transformation" className="text-cyan-400 hover:text-cyan-300 font-medium">Learn More →</Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold neon-text text-center mb-12">AI-Powered Tools</h2>
            <div className="grid-futuristic grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-futuristic grid-item">
                <h3 className="text-lg font-semibold neon-text-green mb-2">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-3">Automated content moderation using AI</p>
                <Link to="/zion-ai-content-moderator" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="card-futuristic grid-item">
                <h3 className="text-lg font-semibold neon-text-green mb-2">Sales Predictor</h3>
                <p className="text-gray-300 text-sm mb-3">Predict sales trends with AI</p>
                <Link to="/zion-ai-sales-predictor" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="card-futuristic grid-item">
                <h3 className="text-lg font-semibold neon-text-green mb-2">Workflow Automator</h3>
                <p className="text-gray-300 text-sm mb-3">Automate business workflows</p>
                <Link to="/zion-ai-workflow-automator" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Try Now →</Link>
              </div>
              <div className="card-futuristic grid-item">
                <h3 className="text-lg font-semibold neon-text-green mb-2">Financial Forecaster</h3>
                <p className="text-gray-300 text-sm mb-3">AI-powered financial predictions</p>
                <Link to="/zion-ai-financial-forecaster" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">Try Now →</Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="holographic text-xl font-medium">View All Services →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;