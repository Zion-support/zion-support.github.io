import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
  keywords: 'AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Zion Tech Group - AI & Technology Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">AI Automation</h2>
            <p className="text-gray-600">Streamline your business processes with intelligent automation.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Cloud Infrastructure</h2>
            <p className="text-gray-600">Scalable and secure cloud solutions for your business.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Micro SaaS</h2>
            <p className="text-gray-600">Build and deploy micro SaaS applications quickly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}