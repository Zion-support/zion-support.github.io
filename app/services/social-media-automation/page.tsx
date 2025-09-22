import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Social Media Automation - Zion Tech Group',
  description: 'Professional Social Media Automation solutions',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Social Media Automation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional Social Media Automation solutions
          </p>
        </div>
      </div>
    </div>
  );
}