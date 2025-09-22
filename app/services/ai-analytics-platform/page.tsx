import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Analytics Platform - Zion Tech Group',
  description: 'Comprehensive AI analytics platform for enterprise data analysis',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          AI Analytics Platform
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Comprehensive analytics platform powered by artificial intelligence
        </p>
      </div>
    </div>
  );
}