'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIChatbotBuilder: React.FC = () => {
  const [botName, setBotName] = useState('');
  const [botPurpose, setBotPurpose] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">AI Chatbot Builder<p className="text-xl text-gray-300 text-center mb-12">Create intelligent chatbots for your website without coding</p>
          </p>

          <div className="cyber-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Build Your Chatbot</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Bot Name<input
                  type="text"
                  value={botName}
                  onChange={(e) =>setBotName(e.target.value)}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter your bot name..."</input>
                /></input>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Bot Purpose<select
                  value={botPurpose}
                  onChange={(e) =>setBotPurpose(e.target.value)}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                ></select>
                  <option value="">Select purpose...<option value="customer-support">Customer Support</option>
                  <option value="sales">Sales Assistant<option value="lead-generation">Lead Generation</option>
                  <option value="faq">FAQ Bot<option value="booking">Booking Assistant<button className="cyber-button w-full">Create Chatbot</button>
              </button>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Drag-and-drop builder</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Natural language processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Multi-language support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Analytics dashboard</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Integration with CRM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Custom branding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Live chat handoff</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">API access</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Basic<div className="text-3xl font-bold text-cyan-400 mb-4">$49/month</div>
              <ul className="text-gray-300 space-y-2">
                <li>1 chatbot<li>1,000 conversations/month</li>
                <li>Basic templates<li>Email support</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400">
              <h3 className="text-xl font-bold text-white mb-4">Professional<div className="text-3xl font-bold text-cyan-400 mb-4">$149/month</div>
              <ul className="text-gray-300 space-y-2">
                <li>5 chatbots<li>10,000 conversations/month</li>
                <li>Advanced features<li>Priority support<li>Analytics</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise<div className="text-3xl font-bold text-cyan-400 mb-4">$399/month</div>
              <ul className="text-gray-300 space-y-2">
                <li>Unlimited chatbots<li>Unlimited conversations</li>
                <li>Custom integrations<li>24/7 support<li>White-label option</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            >📞 Call: (302) 464-0950<a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >Start Building</a>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIChatbotBuilder;