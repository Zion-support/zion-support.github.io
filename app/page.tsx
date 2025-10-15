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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute -inset-10 opacity-30">
            <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
              <span className="text-purple-300 text-sm font-medium">🚀 Advanced AI & IT Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We provide cutting-edge AI and IT solutions to help your business thrive in the digital age. Experience the future of technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                Get Started
              </Link>
              <Link to="/about" className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-all duration-300 font-semibold text-lg">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Services Preview */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Services</h3>
                <p className="text-gray-300 mb-4">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link to="/ai-services" className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">Learn More →</Link>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud solutions that provide reliability, security, and performance for your business applications.
                </p>
                <Link to="/cloud-infrastructure" className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300">Learn More →</Link>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Digital Transformation</h3>
                <p className="text-gray-300 mb-4">
                  Complete digital transformation services to modernize your business processes and systems.
                </p>
                <Link to="/digital-transformation" className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300">Learn More →</Link>
              </div>
            </div>
          </div>
          
          {/* AI Tools Preview */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">AI-Powered Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-lg">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Content Moderator</h3>
                <p className="text-gray-300 text-sm mb-3">Automated content moderation using AI</p>
                <Link to="/zion-ai-content-moderator" className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors duration-300">Try Now →</Link>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-lg">📈</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Sales Predictor</h3>
                <p className="text-gray-300 text-sm mb-3">Predict sales trends with AI</p>
                <Link to="/zion-ai-sales-predictor" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300">Try Now →</Link>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-lg">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Workflow Automator</h3>
                <p className="text-gray-300 text-sm mb-3">Automate business workflows</p>
                <Link to="/zion-ai-workflow-automator" className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-300">Try Now →</Link>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-lg">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Financial Forecaster</h3>
                <p className="text-gray-300 text-sm mb-3">AI-powered financial predictions</p>
                <Link to="/zion-ai-financial-forecaster" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-300">Try Now →</Link>
              </div>
            </div>
            
            {/* New AI Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-lg">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Code Reviewer</h3>
                <p className="text-gray-300 text-sm mb-3">Automated code quality analysis</p>
                <Link to="/zion-ai-code-reviewer" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-300">Try Now →</Link>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-lg">🎤</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Voice Cloner</h3>
                <p className="text-gray-300 text-sm mb-3">Create realistic voice clones</p>
                <Link to="/zion-ai-voice-cloner" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-300">Try Now →</Link>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-lg">🎬</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Video Generator</h3>
                <p className="text-gray-300 text-sm mb-3">Create professional videos with AI</p>
                <Link to="/zion-ai-video-generator" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors duration-300">Try Now →</Link>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-lg">🌍</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Translator</h3>
                <p className="text-gray-300 text-sm mb-3">Advanced AI translation service</p>
                <Link to="/zion-ai-translator" className="text-rose-400 hover:text-rose-300 text-sm font-medium transition-colors duration-300">Try Now →</Link>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/services" className="text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300">View All Services →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;