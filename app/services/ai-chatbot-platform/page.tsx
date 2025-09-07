import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Platform | Zion Tech Group',
  description: 'Professional AI chatbot platform services for your business needs.',
  keywords: 'ai chatbot, services, business, technology',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'AI Chatbot Platform | Zion Tech Group',
    description: 'Professional AI chatbot platform services for your business needs.',
    type: 'website',
  },
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Chatbot Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional AI chatbot platform services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-white mb-4">AI-Powered</h3>
            <p className="text-gray-300">
              Advanced AI technology for intelligent customer interactions.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock customer support and assistance.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-4">Custom Solutions</h3>
            <p className="text-gray-300">
              Tailored chatbot solutions for your specific business needs.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our AI chatbot platform services and how they can benefit your business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}