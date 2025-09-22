import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot - Zion Tech Group',
  description: 'Intelligent AI chatbots for customer service and engagement.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Chatbot</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Enhance customer experience with intelligent AI chatbots.
          </p>
        </div>
      </div>
    </div>
  );
}