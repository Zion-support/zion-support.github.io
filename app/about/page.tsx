import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Leading provider of AI-powered enterprise solutions
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At Zion Tech Group, we transform businesses through cutting-edge AI and IT solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
