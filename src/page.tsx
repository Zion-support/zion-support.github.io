import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main id="main-content" className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT Solutions for Enterprise
          </p>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-medium text-gray-700 mb-2">AI Solutions</h3>
                <p className="text-gray-600">Cutting-edge artificial intelligence solutions for your business needs.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-medium text-gray-700 mb-2">IT Consulting</h3>
                <p className="text-gray-600">Expert IT consulting to optimize your technology infrastructure.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Cloud Services</h3>
                <p className="text-gray-600">Scalable cloud solutions to power your digital transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;