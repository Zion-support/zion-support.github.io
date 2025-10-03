import React from 'react';
import { Metadata } from 'next';
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'AI Customer Support Chatbot | Zion Tech Group - Intelligent Support Automation',
  description: 'Revolutionary AI-powered customer support chatbot with natural language processing, 24/7 availability, and seamless human handoff.',
  keywords: 'AI chatbot, customer support automation, conversational AI, NLP, customer service, support automation',
};

export default function AICustomerSupportChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6">
            <span className="text-3xl">🤖</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Customer Support Chatbot
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your customer support with our intelligent AI chatbot. Provide instant responses, 
            reduce support costs, and deliver exceptional customer experiences 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link 
              href="#demo" 
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
            <p className="text-gray-600">Advanced NLP capabilities understand customer intent and provide contextually relevant responses.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
            <p className="text-gray-600">Provide round-the-clock customer support without additional staffing costs or time zone limitations.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Seamless Human Handoff</h3>
            <p className="text-gray-600">Intelligently escalates complex issues to human agents with full conversation context.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Knowledge Base Integration</h3>
            <p className="text-gray-600">Connect to your existing knowledge base, FAQ, and documentation for accurate responses.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
            <p className="text-gray-600">Track conversation metrics, customer satisfaction, and identify common support issues.</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Customizable Interface</h3>
            <p className="text-gray-600">Match your brand with customizable chat widgets, colors, and conversation flows.</p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Starter</h3>
              <div className="text-3xl font-bold mb-4">$100<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1,000 conversations/month</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic NLP capabilities</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email integration</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic analytics</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
              </ul>
              <Link href="/contact" className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold text-center block hover:bg-gray-200 transition-colors">
                Get Started
              </Link>
            </div>

            <div className="border-2 border-purple-500 rounded-xl p-6 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Professional</h3>
              <div className="text-3xl font-bold mb-4">$300<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10,000 conversations/month</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced NLP & ML</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Multi-channel support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Human handoff</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API access</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
              </ul>
              <Link href="/contact" className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold text-center block hover:bg-purple-600 transition-colors">
                Start Free Trial
              </Link>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-pink-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <div className="text-3xl font-bold mb-4">$800<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited conversations</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom AI training</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label solution</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated account manager</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 phone support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced security</li>
              </ul>
              <Link href="/contact" className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold text-center block hover:bg-pink-600 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our AI Chatbot?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Reduce Support Costs by 60%</h3>
                  <p className="text-gray-600">Handle routine inquiries automatically, allowing your team to focus on complex issues.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Response Times</h3>
                  <p className="text-gray-600">Provide immediate answers to customer questions, improving satisfaction and reducing wait times.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-green-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-gray-600">AI learns from every conversation to improve responses and handle more complex queries over time.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Perfect for Every Industry</h3>
            <p className="mb-6">Our AI chatbot adapts to your business needs, whether you're in e-commerce, SaaS, healthcare, or professional services.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>E-commerce & Retail</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>SaaS & Technology</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Healthcare & Medical</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-3">✓</span>
                <span>Financial Services</span>
              </div>
            </div>
            <Link href="/contact" className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold inline-block hover:bg-gray-100 transition-colors">
              Start Your Free Trial
            </Link>
          </div>
        </div>

        {/* Integration Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Seamless Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <p className="text-sm font-medium">Website Chat</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <p className="text-sm font-medium">Mobile Apps</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <p className="text-sm font-medium">Email Support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <p className="text-sm font-medium">CRM Systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🎫</span>
              </div>
              <p className="text-sm font-medium">Help Desk</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <p className="text-sm font-medium">Analytics Tools</p>
            </div>
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Calculate Your ROI</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">60%</div>
              <p className="text-lg">Cost Reduction</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-lg">Availability</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3x</div>
              <p className="text-lg">Faster Response</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg mb-4">Ready to see how much you can save?</p>
            <Link href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Your ROI Report
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Support?</h2>
          <p className="text-xl text-gray-600 mb-8">Contact our team to learn more about our AI Customer Support Chatbot</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Call: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors">
              Email: kleber@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}