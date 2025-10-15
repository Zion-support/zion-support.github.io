import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIChatbotBuilderPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Chatbot Builder Pro - Zion Tech Group</title>
        <meta name="description" content="Create intelligent chatbots without coding using our advanced AI-powered platform. Build, deploy, and manage conversational AI solutions for customer support, sales, and engagement." />
        <meta name="keywords" content="ai chatbot builder, chatbot creation, conversational ai, customer support automation, no-code chatbot, ai assistant" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-chatbot-builder" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Zion AI Chatbot Builder Pro</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Create intelligent chatbots without coding using our advanced AI-powered platform. Build, deploy, and manage conversational AI solutions for customer support, sales, and engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#features" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Features
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots that engage your customers and drive business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No-Code Builder</h3>
              <p className="text-gray-600">Create sophisticated chatbots using our intuitive drag-and-drop interface. No programming knowledge required.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Language Processing</h3>
              <p className="text-gray-600">Advanced NLP capabilities that understand context, intent, and sentiment for more human-like conversations.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-language Support</h3>
              <p className="text-gray-600">Deploy chatbots in multiple languages to serve global audiences with localized responses.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🎤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Voice Integration</h3>
              <p className="text-gray-600">Enable voice interactions with text-to-speech and speech-to-text capabilities for enhanced user experience.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600">Comprehensive analytics and insights to track performance, user engagement, and conversation quality.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integration APIs</h3>
              <p className="text-gray-600">Seamlessly integrate with your existing systems, CRM, helpdesk, and other business tools.</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$39<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 1,000 conversations/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic NLP capabilities</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1 chatbot</li>
                </ul>
                <a href="/contact" className="w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block">
                  Start Free Trial
                </a>
              </div>

              <div className="bg-blue-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-6">$99<span className="text-lg opacity-80">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Up to 10,000 conversations/month</li>
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Advanced NLP capabilities</li>
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Priority support</li>
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Advanced analytics</li>
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Up to 5 chatbots</li>
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> Voice integration</li>
                  <li className="flex items-center"><span className="text-green-300 mr-2">✓</span> A/B testing</li>
                </ul>
                <a href="/contact" className="w-full bg-white text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors block">
                  Start Free Trial
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">$299<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited conversations</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom AI training</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 dedicated support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited chatbots</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label solution</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                </ul>
                <a href="/contact" className="w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Chatbot?</h2>
            <p className="text-xl mb-8">
              Join thousands of businesses using our AI Chatbot Builder to enhance customer engagement and automate support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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

export default ZionAIChatbotBuilderPage;