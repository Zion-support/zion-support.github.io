import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - Zion Tech Group',
  description: 'Comprehensive AI and technology solutions for modern businesses',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Solutions
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Comprehensive AI and technology solutions for modern businesses
        </p>
      </div>
    </div>
  );
}