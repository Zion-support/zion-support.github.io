import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Code Reviewer - Zion Tech Group',
  description: 'Automated code review and quality assurance with AI.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Code Reviewer</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Improve code quality with AI-powered automated code review.
          </p>
        </div>
      </div>
    </div>
  );
}