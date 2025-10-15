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
      
      {/* Matrix Rain Background */}
      <div className="matrix-bg">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} style={{ opacity: Math.random() }}>
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age. 
              Experience the future of technology with our innovative micro SAAS services and intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="btn-futuristic hover-lift">
                Get Started
              </Link>
              <Link to="/about" className="glass-effect px-8 py-3 rounded-lg text-center text-cyan-400 hover:text-white transition-all duration-300 hover:border-cyan-400">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-32">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Discover our comprehensive range of AI and IT solutions designed to transform your business
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-futuristic hover-lift group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">AI Services</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link to="/ai-services" className="inline-flex items-center text-cyan-400 hover:text-white font-medium transition-colors group-hover:translate-x-2 duration-300">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="card-futuristic hover-lift group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <Link to="/cloud-infrastructure" className="inline-flex items-center text-cyan-400 hover:text-white font-medium transition-colors group-hover:translate-x-2 duration-300">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="card-futuristic hover-lift group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Digital Transformation</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <Link to="/digital-transformation" className="inline-flex items-center text-cyan-400 hover:text-white font-medium transition-colors group-hover:translate-x-2 duration-300">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-32">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
              AI-Powered Tools
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Experience the power of artificial intelligence with our cutting-edge micro SAAS solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-futuristic hover-lift group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-3">Automated content moderation using AI</p>
                <Link to="/zion-ai-content-moderator" className="text-cyan-400 hover:text-white text-sm font-medium transition-colors group-hover:translate-x-1 duration-300 inline-flex items-center">
                  Try Now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="card-futuristic hover-lift group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📈</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Sales Predictor</h3>
                <p className="text-gray-300 text-sm mb-3">Predict sales trends with AI</p>
                <Link to="/zion-ai-sales-predictor" className="text-cyan-400 hover:text-white text-sm font-medium transition-colors group-hover:translate-x-1 duration-300 inline-flex items-center">
                  Try Now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="card-futuristic hover-lift group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Workflow Automator</h3>
                <p className="text-gray-300 text-sm mb-3">Automate business workflows</p>
                <Link to="/zion-ai-workflow-automator" className="text-cyan-400 hover:text-white text-sm font-medium transition-colors group-hover:translate-x-1 duration-300 inline-flex items-center">
                  Try Now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              <div className="card-futuristic hover-lift group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💰</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Financial Forecaster</h3>
                <p className="text-gray-300 text-sm mb-3">AI-powered financial predictions</p>
                <Link to="/zion-ai-financial-forecaster" className="text-cyan-400 hover:text-white text-sm font-medium transition-colors group-hover:translate-x-1 duration-300 inline-flex items-center">
                  Try Now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/services" className="btn-futuristic hover-lift">
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