import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Api Development - Zion Tech Group',
  description: 'Professional api development services for your business.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Api Development</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Professional api development services to help your business grow and succeed.
          </p>
        </div>
      </div>
    </div>
  );
}