import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Micro Saas - Zion Tech Group',
  description: 'Professional micro saas services powered by AI and modern technology',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Micro Saas
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Professional micro saas services powered by AI and modern technology
        </p>
      </div>
    </div>
  );
}