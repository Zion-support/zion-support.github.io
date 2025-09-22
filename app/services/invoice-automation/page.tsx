import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoice Automation - Zion Tech Group',
  description: 'Professional invoice automation services for your business.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Invoice Automation</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Professional invoice automation services to help your business grow and succeed.
          </p>
        </div>
      </div>
    </div>
  );
}