import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Zion Tech Group</h1>
        <p className="text-gray-300 text-lg mb-8">
          We are a leading technology company specializing in AI-powered solutions, 
          quantum computing, and digital transformation services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To revolutionize technology through innovative AI solutions and cutting-edge research.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-300">
              To be the global leader in AI-powered enterprise solutions and quantum computing.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-300">
              Innovation, excellence, integrity, and customer success drive everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}