import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIVoiceAssistantPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Voice Assistant Pro",
    "description": "Advanced voice AI solutions with natural language understanding, speech synthesis, and multi-language support",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
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
      <Helmet>
        <title>AI Voice Assistant Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced voice AI solutions with natural language understanding, speech synthesis, and multi-language support. Build intelligent voice interfaces for your business." />
        <meta name="keywords" content="AI voice assistant, speech recognition, natural language processing, voice AI, conversational AI, voice interfaces" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6 floating">🎤</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">AI Voice Assistant Pro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Build intelligent voice interfaces for your business with advanced AI technology. 
              <span className="text-cyan-400 font-semibold"> Natural conversations, seamless integration.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:neon-glow shadow-2xl">
                🚀 Get Started - $299/month
              </a>
              <a href="#demo" className="border-2 border-cyan-500 text-cyan-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:neon-glow">
                🎯 Try Demo
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-cyan-500/20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">Natural Language Understanding</h3>
              <p className="text-gray-300 leading-relaxed">
                Advanced NLP algorithms that understand context, intent, and sentiment in real-time conversations.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-purple-500/20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🗣️</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">Speech Synthesis</h3>
              <p className="text-gray-300 leading-relaxed">
                High-quality text-to-speech with natural intonation and multiple voice options for different use cases.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-pink-500/20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">Multi-language Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Support for 50+ languages with automatic language detection and seamless switching capabilities.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-green-500/20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">Real-time Processing</h3>
              <p className="text-gray-300 leading-relaxed">
                Ultra-low latency voice processing with sub-200ms response times for natural conversations.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-orange-500/20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔌</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">Easy Integration</h3>
              <p className="text-gray-300 leading-relaxed">
                Simple APIs and SDKs for seamless integration with your existing applications and workflows.
              </p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl hover:scale-105 transition-all duration-300 hover:neon-glow group border border-blue-500/20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Voice Analytics</h3>
              <p className="text-gray-300 leading-relaxed">
                Comprehensive analytics and insights on voice interactions, user behavior, and conversation patterns.
              </p>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 mb-16 border border-cyan-500/20">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 border border-gray-600/20">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ 1,000 voice interactions/month</li>
                  <li>✓ 5 languages supported</li>
                  <li>✓ Basic analytics</li>
                  <li>✓ Email support</li>
                </ul>
                <a href="/contact" className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors duration-300 block">
                  Get Started
                </a>
              </div>
              
              <div className="glass-effect p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 border border-cyan-500/50 neon-glow">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$799<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ 10,000 voice interactions/month</li>
                  <li>✓ 25 languages supported</li>
                  <li>✓ Advanced analytics</li>
                  <li>✓ Custom voice training</li>
                  <li>✓ Priority support</li>
                </ul>
                <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 block">
                  Get Started
                </a>
              </div>
              
              <div className="glass-effect p-8 rounded-2xl text-center hover:scale-105 transition-all duration-300 border border-gray-600/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$2,499<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ Unlimited voice interactions</li>
                  <li>✓ 50+ languages supported</li>
                  <li>✓ Custom analytics dashboard</li>
                  <li>✓ White-label solution</li>
                  <li>✓ 24/7 dedicated support</li>
                </ul>
                <a href="/contact" className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors duration-300 block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our team to discuss your voice AI requirements and get a custom solution tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+13024640950" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:neon-glow shadow-2xl">
                📞 Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-500 text-cyan-400 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:neon-glow">
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;