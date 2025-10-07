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
            Advanced AI and IT Solutions
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    AI Solutions
                  </h3>
                  <p className="text-gray-600">
                    Cutting-edge artificial intelligence solutions for your business needs.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    IT Services
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive IT services and infrastructure management.
                  </p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    Development
                  </h3>
                  <p className="text-gray-600">
                    Custom software development and digital transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;