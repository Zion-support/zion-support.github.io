import React from 'react';
import SEOHead from '../components/SEOHead';

const CustomerSupportHubPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Customer Support Hub - Zion Tech Group"
        description="Comprehensive customer support platform with AI-powered assistance and multi-channel communication."
        keywords="customer support, helpdesk, ticketing system, AI support, multi-channel support"
        canonicalUrl="https://ziontechgroup.com/customer-support-hub"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Customer Support Hub
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive customer support platform with AI-powered assistance and multi-channel communication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Features</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI-Powered Support</h3>
                    <p className="text-gray-400">Intelligent chatbots and automated responses for faster resolution.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Multi-Channel Support</h3>
                    <p className="text-gray-400">Email, chat, phone, and social media support in one platform.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Ticket Management</h3>
                    <p className="text-gray-400">Advanced ticketing system with priority queues and escalation rules.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Knowledge Base</h3>
                    <p className="text-gray-400">Self-service portal with searchable articles and FAQs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-white">Pricing</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">$199/mo</div>
                <div className="text-gray-400 line-through">$299/mo</div>
                <div className="text-sm text-blue-400">Limited Time Offer</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Unlimited Tickets</span>
                  <span className="text-blue-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">AI Chatbot</span>
                  <span className="text-blue-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Multi-Channel</span>
                  <span className="text-blue-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Knowledge Base</span>
                  <span className="text-blue-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Analytics & Reports</span>
                  <span className="text-blue-400">✓</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSupportHubPage;