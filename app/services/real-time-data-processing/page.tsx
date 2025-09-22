import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Real Time Data Processing - Zion Tech Group',
  description: 'Professional real time data processing services powered by AI and modern technology',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Real Time Data Processing
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Professional real time data processing services powered by AI and modern technology
        </p>
      </div>
    </div>
  );
}