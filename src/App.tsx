import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Zion Tech Group
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Building the future of technology
        </p>
        <div className="space-y-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors ml-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}