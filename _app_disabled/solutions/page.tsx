import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | Zion Tech Group',
  description: 'Comprehensive technology solutions for modern businesses.',
  keywords: 'solutions, technology, business, innovation',
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Solutions</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300">Advanced AI solutions for business automation and intelligence.</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
            <p className="text-gray-300">Professional web development services for modern applications.</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Cloud Services</h3>
            <p className="text-gray-300">Scalable cloud services for business growth and efficiency.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
