import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - Zion Tech Group',
  description: 'Innovative technology solutions for modern businesses',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Innovative technology solutions for modern businesses
          </p>
        </div>
      </div>
    </div>
  );
}