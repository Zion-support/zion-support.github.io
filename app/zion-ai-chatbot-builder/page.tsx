import React from 'react';
import SEOHead from '../components/SEOHead';

const ZionAIChatbotBuilderPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Chatbot Builder Pro",
    "description": "No-code AI chatbot creation platform with advanced natural language processing and multi-channel deployment",
    "url": "https://ziontechgroup.com/zion-ai-chatbot-builder",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "79",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Zion AI Chatbot Builder Pro - No-Code AI Chatbot Creation Platform"
        description="Build intelligent chatbots without coding using our advanced AI platform. Features natural language processing, multi-channel deployment, and real-time analytics."
        keywords="AI chatbot builder, no-code chatbot, natural language processing, customer support automation, chatbot platform, AI assistant"
        canonicalUrl="https://ziontechgroup.com/zion-ai-chatbot-builder"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Zion AI Chatbot Builder Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Build intelligent chatbots without coding using our advanced AI platform. 
              Features natural language processing, multi-channel deployment, and real-time analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn-futuristic hover-lift">
                Start Building Free
              </button>
              <button className="glass-effect px-8 py-3 rounded-lg text-center text-cyan-400 hover:text-white transition-all duration-300 hover:border-cyan-400">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Everything you need to create, deploy, and manage intelligent chatbots
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card-futuristic hover-lift group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">No-Code Builder</h3>
                <p className="text-gray-300 leading-relaxed">
                  Create sophisticated chatbots using our intuitive drag-and-drop interface. No programming knowledge required.
                </p>
              </div>
              
              <div className="card-futuristic hover-lift group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌍</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Multi-Language Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  Support for 50+ languages with automatic translation and localization capabilities.
                </p>
              </div>
              
              <div className="card-futuristic hover-lift group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎤</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Voice Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Add voice capabilities to your chatbots with text-to-speech and speech recognition.
                </p>
              </div>
              
              <div className="card-futuristic hover-lift group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Sentiment Analysis</h3>
                <p className="text-gray-300 leading-relaxed">
                  Understand customer emotions and respond appropriately with advanced sentiment analysis.
                </p>
              </div>
              
              <div className="card-futuristic hover-lift group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">Custom Training</h3>
                <p className="text-gray-300 leading-relaxed">
                  Train your chatbot on your specific data and knowledge base for better accuracy.
                </p>
              </div>
              
              <div className="card-futuristic hover-lift group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔌</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">API Integrations</h3>
                <p className="text-gray-300 leading-relaxed">
                  Connect with 100+ popular tools and services through our extensive API library.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-4 gradient-text">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Choose the plan that fits your business needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-futuristic hover-lift">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$79</div>
                  <div className="text-gray-300 mb-6">per month</div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Up to 1,000 conversations/month
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Basic AI training
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Email support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Standard integrations
                    </li>
                  </ul>
                  <button className="w-full btn-futuristic">Get Started</button>
                </div>
              </div>
              
              <div className="card-futuristic hover-lift border-2 border-cyan-400">
                <div className="text-center">
                  <div className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">Most Popular</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$199</div>
                  <div className="text-gray-300 mb-6">per month</div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Up to 10,000 conversations/month
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Advanced AI training
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Priority support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      All integrations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Analytics dashboard
                    </li>
                  </ul>
                  <button className="w-full btn-futuristic">Get Started</button>
                </div>
              </div>
              
              <div className="card-futuristic hover-lift">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$599</div>
                  <div className="text-gray-300 mb-6">per month</div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Unlimited conversations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Custom AI training
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      24/7 dedicated support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Custom integrations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      Advanced analytics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-green-500 mr-2">✓</span>
                      White-label options
                    </li>
                  </ul>
                  <button className="w-full btn-futuristic">Contact Sales</button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our platform to create intelligent customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn-futuristic hover-lift">
                Start Free Trial
              </button>
              <a 
                href="tel:+13024640950" 
                className="glass-effect px-8 py-3 rounded-lg text-center text-cyan-400 hover:text-white transition-all duration-300 hover:border-cyan-400"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIChatbotBuilderPage;