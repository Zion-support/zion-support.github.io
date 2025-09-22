import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finance Solutions - Zion Tech Group',
  description: 'Financial technology solutions for the finance industry.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Finance Solutions</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Specialized financial technology solutions for the finance industry.
          </p>
        </div>
      </div>
    </div>
  );
}