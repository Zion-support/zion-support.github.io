import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Automation - Zion Tech Group',
  description: 'Professional business automation solutions by Zion Tech Group.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Business Automation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional business automation solutions and implementations.
          </p>
        </div>
      </div>
    </div>
  );
}