import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Builder - Zion Tech Group',
  description: 'Build intelligent chatbots with our AI-powered platform.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Chatbot Builder</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Create intelligent, conversational AI chatbots for your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}