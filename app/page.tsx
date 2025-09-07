import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Leading provider of AI solutions, micro SaaS development, and enterprise IT services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">AI Solutions</h2>
            <p className="text-gray-600">
              Cutting-edge artificial intelligence solutions to transform your business.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Micro SaaS</h2>
            <p className="text-gray-600">
              Scalable micro SaaS applications built for modern businesses.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Enterprise IT</h2>
            <p className="text-gray-600">
              Comprehensive IT services and infrastructure solutions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}