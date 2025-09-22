import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research - Zion Tech Group',
  description: 'Our latest research and development initiatives in AI and technology.',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Research & Development</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Our research team is constantly pushing the boundaries of what's possible with AI and technology.
          </p>
        </div>
      </div>
    </div>
  );
}