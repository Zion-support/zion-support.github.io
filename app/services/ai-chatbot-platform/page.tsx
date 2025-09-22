import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Chatbot Platform - Zion Tech Group',
  description: 'Build and deploy intelligent chatbots with our comprehensive AI platform.',
};

export default function AIChatbotPlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Chatbot Platform</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Create, deploy, and manage intelligent chatbots with our comprehensive AI platform.
          </p>
        </div>
      </div>
    </div>
  );
}