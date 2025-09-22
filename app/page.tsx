import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Building the future with cutting-edge AI solutions and innovative technology platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI Solutions</h3>
              <p className="text-gray-600">
                Advanced artificial intelligence platforms for modern businesses.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge technology solutions that drive growth and efficiency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Delivering world-class solutions with uncompromising quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}