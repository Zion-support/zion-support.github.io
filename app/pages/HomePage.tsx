import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">AI Solutions</h2>
            <p className="text-gray-600">
              Transform your business with cutting-edge artificial intelligence technology.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">Cloud Services</h2>
            <p className="text-gray-600">
              Scalable and secure cloud infrastructure for modern enterprises.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">Consulting</h2>
            <p className="text-gray-600">
              Expert guidance for your digital transformation journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;