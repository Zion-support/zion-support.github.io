import React from 'react';

export const metadata = {
  title: 'AI Chatbot Services - Zion Tech Group',
  description: 'Professional AI chatbot development and implementation services'
};

export default function AIChatbotPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Chatbot Services
          </h1>
          <p className="text-xl text-gray-600">
            Intelligent conversational AI solutions for your business
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Professional AI Chatbot Development
          </h2>
          <p className="text-gray-600">
            Our AI chatbot services help you create intelligent, responsive, and context-aware conversational agents that can handle customer inquiries, provide support, and automate business processes.
          </p>
        </div>
      </div>
    </div>
  );
}