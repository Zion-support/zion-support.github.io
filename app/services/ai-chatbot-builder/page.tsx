import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Builder - Zion Tech Group',
  description: 'Build intelligent chatbots with our AI-powered platform',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create intelligent chatbots that understand and respond to your customers
          </p>
        </div>
      </div>
    </div>
  );
}