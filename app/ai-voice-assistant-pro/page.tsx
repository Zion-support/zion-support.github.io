import React from 'react';
import SEOHead from '../components/SEOHead';

const AIVoiceAssistantProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion AI Voice Assistant Pro - Advanced Voice AI Solutions"
        description="Transform your business with our advanced AI voice assistant. Natural language processing, multi-language support, and seamless integration capabilities."
        keywords="AI voice assistant, voice AI, natural language processing, voice recognition, business automation, voice technology"
        canonical="https://ziontechgroup.com/ai-voice-assistant-pro"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Zion AI Voice Assistant Pro</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Advanced voice-enabled AI assistant with natural language processing, multi-language support, and seamless integration capabilities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#features" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Features
                </a>
                <a 
                  href="/contact?service=ai-voice-assistant-pro" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Voice AI Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI voice assistant combines cutting-edge natural language processing with advanced voice recognition technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Language Understanding</h3>
              <p className="text-gray-600">Advanced NLP capabilities that understand context, intent, and nuances in human speech</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-language Support</h3>
              <p className="text-gray-600">Support for 50+ languages with accurate pronunciation and cultural context understanding</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Processing</h3>
              <p className="text-gray-600">Ultra-low latency voice processing for natural, conversational interactions</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">API Integrations</h3>
              <p className="text-gray-600">Seamless integration with your existing systems, CRM, and business applications</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600">Comprehensive analytics and insights into voice interactions and user behavior</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Training</h3>
              <p className="text-gray-600">Train the AI on your specific domain, terminology, and business processes</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
              <p className="text-lg text-gray-600">Choose the plan that fits your business needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$299<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 1,000 voice interactions</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 5 languages supported</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic API integration</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                </ul>
                <a href="/contact?service=ai-voice-assistant-pro&plan=basic" className="w-full bg-purple-600 text-white text-center py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-purple-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-purple-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-4">$799<span className="text-lg opacity-75">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Up to 10,000 voice interactions</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> 25 languages supported</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Advanced API integration</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Custom voice training</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Analytics dashboard</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Priority support</li>
                </ul>
                <a href="/contact?service=ai-voice-assistant-pro&plan=pro" className="w-full bg-white text-purple-600 text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$1,999<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited voice interactions</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 50+ languages supported</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Full API integration</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom model training</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 dedicated support</li>
                </ul>
                <a href="/contact?service=ai-voice-assistant-pro&plan=enterprise" className="w-full bg-purple-600 text-white text-center py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
              <p className="text-lg text-gray-600">See how our AI voice assistant can transform your business</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service Automation</h3>
                <p className="text-gray-600">Handle customer inquiries 24/7 with intelligent voice responses and seamless escalation to human agents when needed.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Voice-Controlled Applications</h3>
                <p className="text-gray-600">Build hands-free applications for accessibility, productivity, and enhanced user experience across all devices.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Home Integration</h3>
                <p className="text-gray-600">Control smart home devices, manage schedules, and automate daily tasks through natural voice commands.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Call Center Automation</h3>
                <p className="text-gray-600">Streamline call center operations with intelligent call routing, automated responses, and real-time assistance.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility Solutions</h3>
                <p className="text-gray-600">Make your applications accessible to users with disabilities through voice navigation and audio feedback.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Voice Search Optimization</h3>
                <p className="text-gray-600">Optimize your content and applications for voice search queries and conversational interactions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with Voice AI?</h2>
            <p className="text-xl mb-8">
              Join thousands of businesses already using our AI voice assistant to improve customer experience and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=ai-voice-assistant-pro" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVoiceAssistantProPage;