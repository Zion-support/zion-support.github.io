import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Welcome to Zion Tech Group</h1>
        <p className="text-gray-300 text-lg">
          Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, 
          and digital transformation services.
        </p>
        <div className="mt-8">
          <a 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Get Started
          </a>
          <a 
            href="/services" 
            className="bg-transparent hover:bg-blue-600 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
}