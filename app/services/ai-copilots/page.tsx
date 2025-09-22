import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Copilots - Zion Tech Group',
  description: 'AI-powered copilots for enhanced productivity.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Copilots</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Boost productivity with AI-powered copilots for various tasks.
          </p>
        </div>
      </div>
    </div>
  );
}