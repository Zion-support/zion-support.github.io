import React from 'react';
import SEOHead from '../components/SEOHead';

const AIChatbotBuilderPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Chatbot Builder Pro - Zion Tech Group"
        description="Build intelligent chatbots without coding using our advanced AI-powered platform. Multi-channel deployment, natural language processing, and analytics included."
        keywords="AI chatbot builder, no-code chatbot, customer support automation, conversational AI, chatbot development"
        canonicalUrl="https://ziontechgroup.com/ai-chatbot-builder"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-6">
                🤖 AI-Powered Platform
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                AI Chatbot Builder
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Build intelligent, conversational chatbots without coding. Deploy across multiple channels with advanced natural language processing and analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center font-semibold shadow-lg hover:shadow-xl">
                  Start Free Trial
                </a>
                <a href="#demo" className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300 text-center font-semibold">
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600">Everything you need to build and deploy intelligent chatbots</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Drag & Drop Builder</h3>
                <p className="text-gray-600">Create complex conversation flows with our intuitive visual builder. No coding required.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-language Support</h3>
                <p className="text-gray-600">Deploy chatbots in 100+ languages with automatic translation and localization.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Dashboard</h3>
                <p className="text-gray-600">Track performance with detailed analytics, conversation insights, and user behavior data.</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">API Integration</h3>
                <p className="text-gray-600">Connect with your existing systems using our comprehensive API and webhook support.</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-xl border border-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Training</h3>
                <p className="text-gray-600">Train your chatbot on your specific data and industry terminology for better accuracy.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-channel Deployment</h3>
                <p className="text-gray-600">Deploy on websites, mobile apps, WhatsApp, Slack, and other popular platforms.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-4">$29<span className="text-lg text-gray-500">/month</span></div>
                  <p className="text-gray-600 mb-6">Perfect for small businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 1,000 conversations/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1 chatbot</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Web integration</li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-2xl border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-4">$99<span className="text-lg text-gray-500">/month</span></div>
                  <p className="text-gray-600 mb-6">Ideal for growing businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 10,000 conversations/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 5 chatbots</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Multi-channel deployment</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API access</li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-4">$299<span className="text-lg text-gray-500">/month</span></div>
                  <p className="text-gray-600 mb-6">For large organizations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited conversations</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited chatbots</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 phone support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated account manager</li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Build Your AI Chatbot?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our platform to automate customer support and increase engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-purple-100">
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatbotBuilderPage;