import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Code Assistant - Zion Tech Group',
  description: 'AI-powered code assistance and development tools.',
};

export default function AICodeAssistantPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Code Assistant</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Accelerate your development with AI-powered code assistance and tools.
          </p>
        </div>
      </div>
    </div>
  );
}