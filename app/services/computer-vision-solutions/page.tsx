import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computer Vision Solutions - Zion Tech Group',
  description: 'Professional computer vision solutions services for your business.',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Computer Vision Solutions</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600">
            Professional computer vision solutions services to help your business grow and succeed.
          </p>
        </div>
      </div>
    </div>
  );
}