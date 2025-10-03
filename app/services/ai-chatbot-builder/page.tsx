// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, MessageCircle, Users, DollarSign, Clock, Shield, BarChart3, Zap, Brain, Target } from 'lucide-react';

export default function AIChatbotBuilder() {
  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder | Zion Tech Group</title>
        <meta name="description" content="Build intelligent AI chatbots for customer support and lead generation. No-code chatbot builder with advanced AI capabilities." />
        <meta name="keywords" content="AI chatbot, chatbot builder, customer support automation, lead generation, conversational AI" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-chatbot-builder" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Chatbot Builder
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build intelligent AI chatbots for customer support and lead generation. No-code chatbot builder with advanced AI capabilities and seamless integrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Pricing
                </a>
                <a href="/contact" className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Chatbot Features</h2>
              <p className="text-xl text-gray-300">Everything you need to build intelligent conversational AI</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <MessageCircle className="h-12 w-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Natural Language Processing</h3>
                <p className="text-gray-300">Advanced NLP capabilities for understanding context, intent, and sentiment in conversations.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Brain className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
                <p className="text-gray-300">Self-learning chatbots that improve responses over time with every interaction.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Users className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Channel Support</h3>
                <p className="text-gray-300">Deploy chatbots on websites, mobile apps, social media, and messaging platforms.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Target className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Lead Generation</h3>
                <p className="text-gray-300">Qualify leads, collect contact information, and schedule appointments automatically.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <BarChart3 className="h-12 w-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Analytics Dashboard</h3>
                <p className="text-gray-300">Track conversations, user satisfaction, and chatbot performance with detailed insights.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <Shield className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with data encryption, compliance, and privacy protection.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Transform Customer Experience</h2>
              <p className="text-xl text-gray-300">See how AI chatbots revolutionize customer support and engagement</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">24/7 Customer Support</h3>
                      <p className="text-gray-300">Provide instant responses to customer queries around the clock without human intervention.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Reduce Support Costs by 60%</h3>
                      <p className="text-gray-300">Handle routine inquiries automatically, freeing human agents for complex issues.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Increase Lead Conversion by 40%</h3>
                      <p className="text-gray-300">Engage visitors immediately and guide them through the sales funnel with personalized conversations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Improve Response Time by 95%</h3>
                      <p className="text-gray-300">Instant responses to customer queries improve satisfaction and reduce wait times.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Chatbot Performance</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Average Response Time:</span>
                    <span className="font-semibold">0.3 seconds</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Customer Satisfaction:</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Query Resolution Rate:</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Lead Generation Increase:</span>
                    <span className="font-semibold">40%</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-white text-lg font-bold">
                      <span>ROI Timeline:</span>
                      <span className="text-green-300">3 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Perfect For Every Industry</h2>
              <p className="text-xl text-gray-300">AI chatbots tailored to your business needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <MessageCircle className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">E-commerce</h3>
                <p className="text-gray-300">Product recommendations, order tracking, and customer support for online stores.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300">Appointment scheduling, symptom checking, and patient support automation.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <DollarSign className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Financial Services</h3>
                <p className="text-gray-300">Account inquiries, transaction support, and financial advice automation.</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 text-center">
                <Target className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Real Estate</h3>
                <p className="text-gray-300">Property inquiries, virtual tours, and lead qualification for real estate agents.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the plan that matches your chatbot needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-pink-400 mb-2">$99</div>
                  <div className="text-gray-300">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    1,000 conversations/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Basic chatbot builder
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Website integration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Email support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              {/* Professional Plan */}
              <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-8 rounded-lg border-2 border-pink-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-white mb-2">$299</div>
                  <div className="text-pink-100">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    10,000 conversations/month
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Advanced AI features
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Multi-channel deployment
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Analytics dashboard
                  </li>
                  <li className="flex items-center text-white">
                    <CheckCircle className="h-5 w-5 text-green-300 mr-3" />
                    Priority support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-white hover:bg-gray-100 text-pink-600 py-3 rounded-lg font-semibold transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              {/* Enterprise Plan */}
              <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$799</div>
                  <div className="text-gray-300">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Unlimited conversations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Custom AI training
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI chatbots to improve customer experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}