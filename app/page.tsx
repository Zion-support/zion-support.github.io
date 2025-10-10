'use client';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to Zion Tech Group
        </h1>
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Advanced AI and IT Solutions for Modern Businesses
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
              <p className="text-gray-600">
                Cutting-edge artificial intelligence solutions to transform your business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">IT Services</h3>
              <p className="text-gray-600">
                Comprehensive IT services and infrastructure management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-gray-600">
                Scalable cloud infrastructure and migration services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;