import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Expense Tracker - Zion Tech Group',
  description: 'Intelligent expense tracking and management with AI.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Expense Tracker</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Track and manage expenses intelligently with AI-powered tools.
          </p>
        </div>
      </div>
    </div>
  );
}