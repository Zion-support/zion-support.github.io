import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Development | Zion Tech Group',
  description: 'Build intelligent AI chatbots with natural language processing, multi-channel support, and custom integrations. Professional chatbot solutions starting at $8k.',
  keywords: 'AI chatbot development, conversational AI, customer service automation, chatbot solutions',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'AI Chatbot Development | Zion Tech Group',
    description: 'Build intelligent AI chatbots with natural language processing and multi-channel support.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot Development | Zion Tech Group',
    description: 'Build intelligent AI chatbots with natural language processing and multi-channel support.',
  },
};

export default function AIChatbotPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Chatbot Development</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build intelligent AI chatbots with natural language processing, multi-channel support, and custom integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Natural Language Processing</h3>
                  <p className="text-gray-600">Advanced NLP for human-like conversations</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Multi-Channel Support</h3>
                  <p className="text-gray-600">Deploy across websites, apps, and messaging platforms</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Custom Integrations</h3>
                  <p className="text-gray-600">Seamless integration with your existing systems</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock support to ensure smooth operation</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starting at $8,000</h3>
              <p className="text-gray-600 mb-4">
                Professional AI chatbot solutions tailored to your business needs.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Custom chatbot development</li>
                <li>• Multi-channel deployment</li>
                <li>• Training and documentation</li>
                <li>• 3 months of support included</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}