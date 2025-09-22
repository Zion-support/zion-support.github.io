import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research - Zion Tech Group',
  description: 'Explore our latest research and development initiatives in AI and technology.',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Research & Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our cutting-edge research initiatives and technological innovations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI Research</h3>
            <p className="text-gray-600">
              Advanced machine learning algorithms and artificial intelligence systems.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technology Innovation</h3>
            <p className="text-gray-600">
              Next-generation technology solutions and platform development.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Industry Applications</h3>
            <p className="text-gray-600">
              Practical applications of our research across various industries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}