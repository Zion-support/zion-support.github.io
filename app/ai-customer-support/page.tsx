'use client';
import React from 'react';
import { MessageCircle, Headphones, Bot, Zap, Shield, BarChart, Clock, Users, CheckCircle, Star, ArrowRight, Phone, Mail } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Customer Support Solutions - Zion Tech Group"
        description="Revolutionary AI-powered customer support with chatbots, omnichannel support, and intelligent automation. Boost satisfaction by 95% and reduce costs by 60%."
        keywords={['AI customer support', 'chatbots', 'omnichannel support', 'customer service automation', 'AI helpdesk']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Support Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support with AI-powered chatbots, intelligent automation, and 24/7 availability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="glass rounded-xl p-6">
                <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">24/7 AI Chat Support</h3>
                <p className="text-gray-300">Intelligent chatbots that provide instant responses to customer queries.</p>
              </div>
              <div className="glass rounded-xl p-6">
                <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Intelligent Automation</h3>
                <p className="text-gray-300">Automate routine tasks and escalate complex issues to human agents.</p>
              </div>
              <div className="glass rounded-xl p-6">
                <BarChart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Advanced Analytics</h3>
                <p className="text-gray-300">Track performance and optimize customer satisfaction with detailed insights.</p>
              </div>
            </div>
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-white mb-8">Pricing Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="glass rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Up to 1,000 conversations/month
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Basic chatbot
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Email support
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                    Get Started
                  </button>
                </div>
                <div className="glass rounded-xl p-8 ring-2 ring-cyan-400">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$399/month</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Up to 10,000 conversations/month
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Advanced AI chatbot
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Priority support
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                    Get Started
                  </button>
                </div>
                <div className="glass rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-6">$799/month</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Unlimited conversations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Custom AI training
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      24/7 dedicated support
                    </li>
                  </ul>
                  <button className="w-full py-3 px-6 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-white mb-8">Contact Us</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="flex items-center px-6 py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center px-6 py-3 border border-cyan-400 text-cyan-300 rounded-lg font-semibold hover:bg-cyan-400/20 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AICustomerSupportPage;