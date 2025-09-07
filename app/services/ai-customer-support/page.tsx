import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Customer Support | Zion Tech Group',
  description: 'Intelligent customer support solutions powered by AI to enhance customer experience and reduce response times.',
  keywords: 'AI customer support, chatbot, customer service, automation, AI assistant'
};

export default function AICustomerSupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Customer Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligent customer support solutions powered by AI to enhance customer experience and reduce response times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">24/7 Availability</h3>
            <p className="text-gray-600">
              Round-the-clock customer support with AI-powered chatbots and intelligent routing.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Intelligent Routing</h3>
            <p className="text-gray-600">
              Smart ticket routing and prioritization based on customer intent and urgency.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Multi-channel Support</h3>
            <p className="text-gray-600">
              Support across email, chat, phone, and social media with consistent AI assistance.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}