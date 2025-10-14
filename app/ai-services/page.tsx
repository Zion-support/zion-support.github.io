import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'page - Zion Tech Group',
  description: 'Advanced AI and IT solutions by Zion Tech Group',
  keywords: 'AI, IT solutions, technology, innovation',
};

const pagePage: React.FC = () => {
  return (
    <div className="page-container">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">page</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            Discover our comprehensive page solutions designed to transform your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Feature 1</h3>
              <p className="text-gray-600">Description of feature 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Feature 2</h3>
              <p className="text-gray-600">Description of feature 2</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Feature 3</h3>
              <p className="text-gray-600">Description of feature 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pagePage;
