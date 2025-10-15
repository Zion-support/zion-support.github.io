import React from 'react';
import SEOHead from '../components/SEOHead';

const CustomerSupportHubPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Customer Support Hub - Zion Tech Group"
        description="Comprehensive customer support solution with AI-powered chatbots, ticket management, and multi-channel support capabilities."
        keywords="customer support, helpdesk, ticket management, AI chatbot, multi-channel support, customer service automation"
        canonicalUrl="https://ziontechgroup.com/customer-support-hub"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Customer Support Hub</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your customer support with our comprehensive solution featuring AI-powered chatbots, ticket management, and multi-channel support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI-Powered Chatbots</h3>
                    <p className="text-gray-600">Intelligent chatbots that can handle common queries and escalate complex issues to human agents.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Multi-Channel Support</h3>
                    <p className="text-gray-600">Support customers across email, chat, phone, and social media from one unified platform.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ticket Management</h3>
                    <p className="text-gray-600">Organize, prioritize, and track customer issues with advanced ticket management system.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Knowledge Base</h3>
                    <p className="text-gray-600">Build and maintain a comprehensive knowledge base for self-service support.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
                  <div className="text-4xl font-bold text-blue-600 mt-2">$199/month</div>
                  <p className="text-gray-600">up to 25 agents</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Unlimited tickets</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>AI chatbot integration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Multi-channel support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>24/7 support</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSupportHubPage;