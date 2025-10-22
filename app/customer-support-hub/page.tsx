<<<<<<< HEAD
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
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export default function CustomerSupportHubPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Customer Support Hub | Zion Tech Group</title>
        <meta name="description" content="Professional customer support hub solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Customer Support Hub
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional customer support hub solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with customer support hub?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
