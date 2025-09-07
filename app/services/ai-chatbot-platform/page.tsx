import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Platform | Zion Tech Group',
  description: 'Build intelligent chatbots with natural language processing, multi-channel deployment, and advanced conversation management. No coding required.',
  keywords: 'AI chatbot platform, conversational AI, chatbot development, customer service automation',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'AI Chatbot Platform | Zion Tech Group',
    description: 'Build intelligent chatbots with natural language processing and multi-channel deployment.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot Platform | Zion Tech Group',
    description: 'Build intelligent chatbots with natural language processing and multi-channel deployment.',
  },
};

export default function AIChatbotPlatformPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Chatbot Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build intelligent chatbots with natural language processing, multi-channel deployment, and advanced conversation management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Language Processing</h3>
            <p className="text-gray-600 mb-4">
              Advanced NLP capabilities for human-like conversations and understanding.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Intent recognition</li>
              <li>• Entity extraction</li>
              <li>• Sentiment analysis</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Channel Deployment</h3>
            <p className="text-gray-600 mb-4">
              Deploy your chatbot across multiple platforms and channels.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Website integration</li>
              <li>• Mobile apps</li>
              <li>• Social media platforms</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Analytics</h3>
            <p className="text-gray-600 mb-4">
              Track performance and optimize conversations with detailed analytics.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Conversation metrics</li>
              <li>• User satisfaction</li>
              <li>• Performance insights</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}