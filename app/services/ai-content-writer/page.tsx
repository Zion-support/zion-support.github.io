import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Content Writer - Zion Tech Group',
  description: 'AI-powered content writing and editing tools.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Content Writer</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Create compelling content with our AI-powered writing tools.
          </p>
        </div>
      </div>
    </div>
  );
}