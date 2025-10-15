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
      
      <div className="min-h-screen relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
          <div className="text-center">
            <h1 className="futuristic-heading gradient-text mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="futuristic-text mb-8 max-w-3xl mx-auto">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="futuristic-btn">
                Get Started
              </Link>
              <Link to="/about" className="futuristic-btn glass-morphism border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-20">
            <h2 className="futuristic-heading text-center mb-12">Our Services</h2>
            <div className="futuristic-grid">
              <div className="futuristic-card neon-glow">
                <h3 className="futuristic-subheading text-neon-blue mb-4">AI Services</h3>
                <p className="futuristic-text mb-4">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link to="/ai-services" className="text-neon-blue hover:text-neon-cyan font-medium transition-all duration-300">Learn More →</Link>
              </div>
              <div className="futuristic-card neon-glow-purple">
                <h3 className="futuristic-subheading text-neon-purple mb-4">Cloud Infrastructure</h3>
                <p className="futuristic-text mb-4">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <Link to="/cloud-infrastructure" className="text-neon-purple hover:text-neon-pink font-medium transition-all duration-300">Learn More →</Link>
              </div>
              <div className="futuristic-card neon-glow-pink">
                <h3 className="futuristic-subheading text-neon-pink mb-4">Digital Transformation</h3>
                <p className="futuristic-text mb-4">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <Link to="/digital-transformation" className="text-neon-pink hover:text-neon-blue font-medium transition-all duration-300">Learn More →</Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-20">
            <h2 className="futuristic-heading text-center mb-12">AI-Powered Tools</h2>
            <div className="futuristic-grid-3">
              <div className="futuristic-card neon-glow">
                <h3 className="text-lg font-semibold text-neon-blue mb-2">Content Moderator</h3>
                <p className="futuristic-text text-sm mb-3">Automated content moderation using AI</p>
                <Link to="/zion-ai-content-moderator" className="text-neon-blue hover:text-neon-cyan text-sm font-medium transition-all duration-300">Try Now →</Link>
              </div>
              <div className="futuristic-card neon-glow-purple">
                <h3 className="text-lg font-semibold text-neon-purple mb-2">Sales Predictor</h3>
                <p className="futuristic-text text-sm mb-3">Predict sales trends with AI</p>
                <Link to="/zion-ai-sales-predictor" className="text-neon-purple hover:text-neon-pink text-sm font-medium transition-all duration-300">Try Now →</Link>
              </div>
              <div className="futuristic-card neon-glow-pink">
                <h3 className="text-lg font-semibold text-neon-pink mb-2">Workflow Automator</h3>
                <p className="futuristic-text text-sm mb-3">Automate business workflows</p>
                <Link to="/zion-ai-workflow-automator" className="text-neon-pink hover:text-neon-blue text-sm font-medium transition-all duration-300">Try Now →</Link>
              </div>
              <div className="futuristic-card neon-glow">
                <h3 className="text-lg font-semibold text-neon-green mb-2">Financial Forecaster</h3>
                <p className="futuristic-text text-sm mb-3">AI-powered financial predictions</p>
                <Link to="/zion-ai-financial-forecaster" className="text-neon-green hover:text-neon-cyan text-sm font-medium transition-all duration-300">Try Now →</Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/services" className="text-neon-blue hover:text-neon-cyan font-medium transition-all duration-300">View All Services →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;