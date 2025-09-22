import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FinTech Solutions - Zion Tech Group',
  description: 'Financial technology solutions and digital banking platforms',
};

export default function FinTechPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            FinTech Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Financial technology solutions and digital banking platforms
          </p>
        </div>
      </div>
    </div>
  );
}