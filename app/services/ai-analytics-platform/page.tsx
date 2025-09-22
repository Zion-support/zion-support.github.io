import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Analytics Platform - Zion Tech Group',
  description: 'Comprehensive AI analytics platform for enterprise solutions.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Analytics Platform</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            A comprehensive platform for AI-powered analytics and business intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}