import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Generation - Zion Tech Group',
  description: 'Generate high-quality content with AI-powered tools.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Content Generation</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Create engaging content at scale with our AI-powered generation tools.
          </p>
        </div>
      </div>
    </div>
  );
}