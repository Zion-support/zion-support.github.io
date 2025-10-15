import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIVoiceAssistantPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Voice Assistant Pro",
    "description": "Advanced voice-controlled AI assistant with natural language processing, multi-language support, and seamless integration with business applications.",
    "url": "https://ziontechgroup.com/ai-voice-assistant",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "99",
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
      <Helmet>
        <title>Zion AI Voice Assistant Pro - Intelligent Voice Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our AI Voice Assistant Pro. Natural language processing, multi-language support, and seamless integration. Starting from $99/month." />
        <meta name="keywords" content="AI voice assistant, voice automation, natural language processing, business automation, voice recognition, text-to-speech" />
        <meta property="og:title" content="Zion AI Voice Assistant Pro - Intelligent Voice Automation" />
        <meta property="og:description" content="Advanced voice-controlled AI assistant with natural language processing and multi-language support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-voice-assistant" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-6xl mb-6">🎤</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Zion AI Voice Assistant Pro
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
                Transform your business with intelligent voice automation. Our AI Voice Assistant Pro offers natural language processing, 
                multi-language support, and seamless integration with your business applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="/contact?service=ai-voice-assistant" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                  Try Free Demo
                </a>
                <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="text-center text-sm opacity-90">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Voice AI Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the future of voice automation with our comprehensive AI voice assistant platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🗣️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Language Processing</h3>
              <p className="text-gray-600">Advanced NLP capabilities that understand context, intent, and natural conversation flow.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-language Support</h3>
              <p className="text-gray-600">Support for 50+ languages with accurate pronunciation and cultural context understanding.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">API Integrations</h3>
              <p className="text-gray-600">Seamless integration with your existing business applications and workflows.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile App</h3>
              <p className="text-gray-600">Native mobile applications for iOS and Android with full voice assistant capabilities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Processing</h3>
              <p className="text-gray-600">Instant voice recognition and response with minimal latency for optimal user experience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voice Biometrics</h3>
              <p className="text-gray-600">Advanced voice authentication and user identification for enhanced security.</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core voice AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$99<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 1,000 voice commands/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 5 language support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic API access</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                </ul>
                <a href="/contact?service=ai-voice-assistant&plan=basic" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-blue-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-4">$299<span className="text-lg opacity-80">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Up to 10,000 voice commands/month</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 25 language support</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Advanced API access</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Custom voice training</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Priority support</li>
                </ul>
                <a href="/contact?service=ai-voice-assistant&plan=pro" className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$799<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited voice commands</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 50+ language support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Full API access</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom model training</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 dedicated support</li>
                </ul>
                <a href="/contact?service=ai-voice-assistant&plan=enterprise" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with Voice AI?</h2>
            <p className="text-xl mb-8">
              Join thousands of businesses already using our AI Voice Assistant to automate operations and improve customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact?service=ai-voice-assistant" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </a>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;