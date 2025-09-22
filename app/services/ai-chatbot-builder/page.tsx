import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Builder - Zion Tech Group',
  description: 'Build intelligent chatbots with our AI-powered platform',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          AI Chatbot Builder
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Create intelligent chatbots that understand and respond to your customers
        </p>
      </div>
    </div>
  );
}