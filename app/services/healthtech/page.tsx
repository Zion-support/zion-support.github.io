import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HealthTech Solutions - Zion Tech Group',
  description: 'Healthcare technology solutions for modern medical practices.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">HealthTech Solutions</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Transform healthcare with innovative technology solutions.
          </p>
        </div>
      </div>
    </div>
  );
}