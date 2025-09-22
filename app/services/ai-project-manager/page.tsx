import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Project Manager - Zion Tech Group',
  description: 'AI-powered project management and collaboration tools.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Project Manager</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Manage projects efficiently with AI-powered project management tools.
          </p>
        </div>
      </div>
    </div>
  );
}