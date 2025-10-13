import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ZionAiInventoryManager() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion AI Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="Intelligent inventory management with AI optimization." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion AI Inventory Manager
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Intelligent inventory management with AI optimization.
          </p>
<<<<<<< HEAD
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
              <p className="text-gray-600">
                Description of the first feature.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
              <p className="text-gray-600">
                Description of the second feature.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              <p className="text-gray-600">
                Description of the third feature.
              </p>
            </div>
=======
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Start Free Trial
            </button>
            <button className="border border-gray-300 text-gray-300 hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              Learn More
            </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-062f
          </div>
        </div>
      </div>
    </div>
  );
}