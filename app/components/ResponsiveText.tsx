import React from 'react';

export default function Responsivetext() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Responsivetext
        </h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            Welcome to our ResponsiveText page. This page is currently under development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Feature 1</h2>
              <p>Description of feature 1</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Feature 2</h2>
              <p>Description of feature 2</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Feature 3</h2>
              <p>Description of feature 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
