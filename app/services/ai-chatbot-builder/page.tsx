import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Builder | Zion Tech Group',
  description: 'Build intelligent chatbots with our AI-powered chatbot builder. No coding required, deploy in minutes.',
  keywords: 'AI chatbot builder, chatbot development, conversational AI, customer service automation',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'AI Chatbot Builder | Zion Tech Group',
    description: 'Build intelligent chatbots with our AI-powered chatbot builder.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot Builder | Zion Tech Group',
    description: 'Build intelligent chatbots with our AI-powered chatbot builder.',
  },
};

export default function AIChatbotBuilderPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Chatbot Builder</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build intelligent chatbots with our AI-powered chatbot builder. No coding required, deploy in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Drag & Drop Interface</h3>
                  <p className="text-gray-600">Build chatbots visually with our intuitive drag-and-drop builder</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Natural Language Processing</h3>
                  <p className="text-gray-600">Advanced NLP capabilities for human-like conversations</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Multi-Channel Deployment</h3>
                  <p className="text-gray-600">Deploy on website, mobile apps, and messaging platforms</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Analytics & Insights</h3>
                  <p className="text-gray-600">Track performance and optimize conversations</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Support</h3>
                <p className="text-gray-600">24/7 automated customer support and FAQ handling</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Lead Generation</h3>
                <p className="text-gray-600">Qualify leads and capture contact information</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sales Assistant</h3>
                <p className="text-gray-600">Guide customers through product selection and purchase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}