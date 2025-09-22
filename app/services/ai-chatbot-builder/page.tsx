import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Builder - Zion Tech Group',
  description: 'Build intelligent chatbots with our advanced AI chatbot builder platform.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create intelligent, conversational AI chatbots without coding expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Builder Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Visual chatbot designer</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Natural language processing</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Multi-channel deployment</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Analytics and insights</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Use Cases</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Customer support automation</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Lead generation</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">Sales assistance</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 mr-3"></div>
                <span className="text-gray-600">FAQ automation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}