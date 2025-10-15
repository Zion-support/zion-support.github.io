import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIChatbotBuilderPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Chatbot Builder Pro",
    "description": "No-code AI chatbot creation platform with advanced natural language processing and multi-channel deployment",
    "url": "https://ziontechgroup.com/ai-chatbot-builder",
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
      "url": "https://ziontechgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "email": "kleber@ziontechgroup.com"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Zion AI Chatbot Builder Pro - No-Code AI Chatbot Creation Platform</title>
        <meta name="description" content="Build intelligent chatbots without coding using our advanced AI platform. Multi-channel deployment, natural language processing, and custom integrations." />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, customer support automation, chatbot platform" />
        <meta property="og:title" content="Zion AI Chatbot Builder Pro - No-Code AI Chatbot Creation" />
        <meta property="og:description" content="Build intelligent chatbots without coding using our advanced AI platform with natural language processing and multi-channel deployment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-chatbot-builder" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
              <span className="text-3xl">🤖</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion AI Chatbot Builder Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build intelligent chatbots without coding using our advanced AI platform. Deploy across multiple channels with natural language processing and custom integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Building Free
              </a>
              <a href="#demo" className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300">
                Watch Demo
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Bot Builder</h3>
              <p className="text-gray-600">Drag-and-drop interface to create sophisticated conversation flows without any coding knowledge.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Language Processing</h3>
              <p className="text-gray-600">Advanced NLP capabilities that understand context, intent, and sentiment for more human-like conversations.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-channel Deployment</h3>
              <p className="text-gray-600">Deploy your chatbot across websites, mobile apps, social media, and messaging platforms.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Integrations</h3>
              <p className="text-gray-600">Connect with your existing CRM, helpdesk, payment systems, and other business tools.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Dashboard</h3>
              <p className="text-gray-600">Track performance, user engagement, and conversation analytics with detailed insights.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">A/B Testing</h3>
              <p className="text-gray-600">Test different conversation flows and optimize your chatbot's performance with built-in A/B testing.</p>
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="bg-white rounded-2xl shadow-2xl p-8 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600">Choose the plan that fits your business needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-purple-500 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-4">$29<span className="text-lg text-gray-500">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 1,000 conversations/month</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 2 chatbot instances</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic NLP capabilities</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Web & WhatsApp integration</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                  </ul>
                  <a href="/contact" className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="border-2 border-purple-500 rounded-xl p-8 relative bg-gradient-to-b from-purple-50 to-white">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-4">$99<span className="text-lg text-gray-500">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Up to 10,000 conversations/month</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10 chatbot instances</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced NLP & AI</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> All channel integrations</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> A/B testing</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom branding</li>
                  </ul>
                  <a href="/contact" className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="border-2 border-gray-200 rounded-xl p-8 hover:border-purple-500 transition-all duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-4">$299<span className="text-lg text-gray-500">/month</span></div>
                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited conversations</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited chatbot instances</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom AI training</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label solution</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API access</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 phone support</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                  </ul>
                  <a href="/contact" className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your AI Chatbot?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses already using our platform to automate customer support and boost engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Start Free Trial
              </a>
              <a href="tel:+13024640950" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-medium">
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm opacity-75">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatbotBuilderPage;