import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Customer Insights - Zion Tech Group',
  description: 'Gain valuable customer insights with AI analytics.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Customer Insights</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Understand your customers better with AI-powered insights and analytics.
          </p>
        </div>
      </div>
    </div>
  );
}