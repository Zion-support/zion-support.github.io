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
      
      <div className="min-h-screen futuristic-bg cyber-grid relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic-text">
                  Welcome to Zion Tech Group
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
                <p className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
                  We provide cutting-edge AI and IT solutions to help your business thrive in the digital age. 
                  Experience the future of technology with our innovative micro SaaS services and intelligent automation.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link to="/contact" className="neon-button text-lg px-10 py-4">
                  Get Started
                </Link>
                <Link to="/about" className="neon-button-purple text-lg px-10 py-4">
                  Learn More
                </Link>
              </div>
              
              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="futuristic-card glow-effect p-6 text-center">
                  <div className="text-3xl font-bold neon-text mb-2">500+</div>
                  <div className="text-white">Projects Completed</div>
                </div>
                <div className="futuristic-card glow-effect p-6 text-center">
                  <div className="text-3xl font-bold neon-text-purple mb-2">50+</div>
                  <div className="text-white">AI Tools</div>
                </div>
                <div className="futuristic-card glow-effect p-6 text-center">
                  <div className="text-3xl font-bold neon-text-pink mb-2">99%</div>
                  <div className="text-white">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        {/* Services Preview */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">Our Services</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business and drive sustainable growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="futuristic-card glow-effect p-8 group">
                <div className="text-5xl mb-6 animated-icon">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:neon-text transition-all duration-300">AI Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold neon-text mb-2">$5,000 - $50,000</div>
                  <div className="text-sm text-gray-400">Starting from</div>
                </div>
                <Link to="/ai-services" className="neon-button w-full text-center">
                  Learn More →
                </Link>
              </div>
              
              <div className="futuristic-card glow-effect p-8 group">
                <div className="text-5xl mb-6 animated-icon">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:neon-text-purple transition-all duration-300">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold neon-text-purple mb-2">$2,000 - $25,000</div>
                  <div className="text-sm text-gray-400">Starting from</div>
                </div>
                <Link to="/cloud-infrastructure" className="neon-button-purple w-full text-center">
                  Learn More →
                </Link>
              </div>
              
              <div className="futuristic-card glow-effect p-8 group">
                <div className="text-5xl mb-6 animated-icon">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:neon-text-pink transition-all duration-300">Digital Transformation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <div className="mb-6">
                  <div className="text-2xl font-bold neon-text-pink mb-2">$10,000 - $100,000</div>
                  <div className="text-sm text-gray-400">Starting from</div>
                </div>
                <Link to="/digital-transformation" className="neon-button w-full text-center">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
          
        {/* AI Tools Preview */}
        <div className="relative z-10 py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold neon-text mb-6">AI-Powered Tools</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-neon-green to-neon-cyan mx-auto mb-8"></div>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Experience the power of artificial intelligence with our cutting-edge micro SaaS tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="futuristic-card glow-effect p-6 group">
                <div className="text-3xl mb-4 animated-icon">🛡️</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:neon-text transition-all duration-300">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-4">Automated content moderation using AI</p>
                <div className="text-sm text-neon-cyan mb-4">$199/month</div>
                <Link to="/zion-ai-content-moderator" className="neon-button w-full text-center text-sm">
                  Try Now →
                </Link>
              </div>
              
              <div className="futuristic-card glow-effect p-6 group">
                <div className="text-3xl mb-4 animated-icon">📈</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:neon-text-purple transition-all duration-300">Sales Predictor</h3>
                <p className="text-gray-300 text-sm mb-4">Predict sales trends with AI</p>
                <div className="text-sm text-neon-purple mb-4">$299/month</div>
                <Link to="/zion-ai-sales-predictor" className="neon-button-purple w-full text-center text-sm">
                  Try Now →
                </Link>
              </div>
              
              <div className="futuristic-card glow-effect p-6 group">
                <div className="text-3xl mb-4 animated-icon">⚡</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:neon-text-pink transition-all duration-300">Workflow Automator</h3>
                <p className="text-gray-300 text-sm mb-4">Automate business workflows</p>
                <div className="text-sm text-neon-pink mb-4">$399/month</div>
                <Link to="/zion-ai-workflow-automator" className="neon-button w-full text-center text-sm">
                  Try Now →
                </Link>
              </div>
              
              <div className="futuristic-card glow-effect p-6 group">
                <div className="text-3xl mb-4 animated-icon">💰</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:neon-text transition-all duration-300">Financial Forecaster</h3>
                <p className="text-gray-300 text-sm mb-4">AI-powered financial predictions</p>
                <div className="text-sm text-neon-cyan mb-4">$499/month</div>
                <Link to="/zion-ai-financial-forecaster" className="neon-button w-full text-center text-sm">
                  Try Now →
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/services" className="neon-button text-lg px-8 py-3">
                View All Services →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Futuristic CTA Section */}
        <div className="relative z-10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="futuristic-card glow-effect p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold holographic-text mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI-powered solutions to drive growth and innovation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link to="/contact" className="neon-button text-lg px-10 py-4">
                  Get Free Consultation
                </Link>
                <a href="tel:+13024640950" className="neon-button-purple text-lg px-10 py-4">
                  Call +1 302 464 0950
                </a>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold neon-text mb-2">24/7</div>
                  <div className="text-white">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold neon-text-purple mb-2">30-Day</div>
                  <div className="text-white">Free Trial</div>
                </div>
                <div>
                  <div className="text-2xl font-bold neon-text-pink mb-2">100%</div>
                  <div className="text-white">Satisfaction</div>
                </div>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
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