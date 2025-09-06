import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your trusted partner in technology solutions
        </p>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              AI Services
            </h2>
            <p className="text-gray-600">
              Advanced artificial intelligence solutions for your business needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              IT Services
            </h2>
            <p className="text-gray-600">
              Comprehensive IT infrastructure and support services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Micro SaaS
            </h2>
            <p className="text-gray-600">
              Scalable software-as-a-service solutions for modern businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;