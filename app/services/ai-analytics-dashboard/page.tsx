import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Analytics Dashboard - Zion Tech Group',
  description: 'Advanced AI-powered analytics dashboard for business intelligence.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Analytics Dashboard</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Transform your data into actionable insights with our AI-powered analytics dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}