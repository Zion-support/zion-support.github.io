import React, { memo } from 'react';
import SEOHead from '../components/SEOHead';

const ZionAIChatbotBuilderPage: React.FC = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Chatbot Builder Pro",
    "description": "Create intelligent chatbots for websites, mobile apps, and social media with advanced natural language processing",
    "url": "https://ziontechgroup.com/zion-ai-chatbot-builder",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <>
      <SEOHead
        title="Zion AI Chatbot Builder Pro - Create Intelligent Chatbots"
        description="Build smart chatbots without coding. Advanced natural language processing, multi-platform integration, and custom training for your business needs."
        keywords="AI chatbot, chatbot builder, natural language processing, customer support automation, conversational AI"
        canonicalUrl="https://ziontechgroup.com/zion-ai-chatbot-builder"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zion AI Chatbot Builder Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create intelligent chatbots for websites, mobile apps, and social media with advanced natural language processing. 
              <span className="text-cyan-400 font-semibold"> No coding required.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transform">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transform">
                View Demo
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🎨</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Visual Bot Builder</h3>
                <p className="text-gray-300 leading-relaxed">
                  Drag-and-drop interface to create conversation flows without any coding knowledge.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🧠</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Natural Language Processing</h3>
                <p className="text-gray-300 leading-relaxed">
                  Advanced NLP capabilities to understand user intent and provide accurate responses.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🔗</div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Multi-platform Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Deploy your chatbot across websites, mobile apps, and social media platforms.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">📊</div>
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Analytics Dashboard</h3>
                <p className="text-gray-300 leading-relaxed">
                  Track performance, user interactions, and optimize your chatbot's effectiveness.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🌍</div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Multi-language Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  Support for 50+ languages to reach global audiences effectively.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🔧</div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">API Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Connect with your existing systems and databases for seamless data flow.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Simple Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-600/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-white mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Up to 1,000 conversations/month</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> 3 chatbot instances</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Basic analytics</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Email support</li>
                </ul>
                <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/40 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-110 transform relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Pro</h3>
                <div className="text-4xl font-bold text-white mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Up to 10,000 conversations/month</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> 10 chatbot instances</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Advanced analytics</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Custom training</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Priority support</li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Unlimited conversations</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Unlimited chatbot instances</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Custom integrations</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> White-label options</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> 24/7 dedicated support</li>
                </ul>
                <button className="w-full bg-pink-500 hover:bg-pink-400 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to learn more about Zion AI Chatbot Builder Pro and how it can transform your customer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transform">
                Contact Us
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transform">
                Call +1 302 464 0950
              </a>
            </div>
            <p className="text-gray-400 mt-6">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

ZionAIChatbotBuilderPage.displayName = 'ZionAIChatbotBuilderPage';

export default ZionAIChatbotBuilderPage;