import React from 'react';
import SEOHead from '../components/SEOHead';

const AICustomerSupportProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Customer Support Pro - Zion Tech Group"
        description="Comprehensive AI-powered customer support solution with chatbots, sentiment analysis, and automated ticket routing. Revolutionize your customer service with AI."
        keywords="AI customer support, chatbots, sentiment analysis, automated ticket routing, customer service automation, AI support solutions"
        canonicalUrl="https://ziontechgroup.com/ai-customer-support-pro"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Customer Support Pro</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Comprehensive AI-powered customer support with chatbots, sentiment analysis, and automated ticket routing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#features" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Features
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced AI Support Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your customer support with intelligent automation and AI-powered insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Intelligent Chatbots</h3>
              <p className="text-gray-600 mb-4">
                Deploy AI-powered chatbots that understand context, provide accurate answers, and escalate complex issues to human agents.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Natural language understanding</li>
                <li>• Context-aware responses</li>
                <li>• Multi-language support</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">😊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sentiment Analysis</h3>
              <p className="text-gray-600 mb-4">
                Analyze customer emotions in real-time to provide personalized support and identify at-risk customers.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Real-time emotion detection</li>
                <li>• Customer satisfaction tracking</li>
                <li>• Proactive intervention</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-4xl mb-4">🎫</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Ticket Routing</h3>
              <p className="text-gray-600 mb-4">
                Automatically route tickets to the right agent based on expertise, workload, and customer priority.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Smart ticket classification</li>
                <li>• Agent skill matching</li>
                <li>• Priority-based routing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
              <p className="text-lg text-gray-600">
                Choose the plan that fits your support team size and requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">$199<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 1,000 conversations/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic chatbot functionality
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic analytics
                  </li>
                </ul>
                <a href="/contact" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pro</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">$599<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 10,000 conversations/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced AI features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Sentiment analysis
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Automated ticket routing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Priority support
                  </li>
                </ul>
                <a href="/contact" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Get Started
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">$1,499<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited conversations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    All AI features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    White-label solution
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 dedicated support
                  </li>
                </ul>
                <a href="/contact" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Customer Support?</h2>
            <p className="text-xl mb-8">
              Start using AI-powered customer support today and provide better service with less effort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
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

export default AICustomerSupportProPage;