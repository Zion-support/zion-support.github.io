import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Revolutionary AI Solutions for Enterprise
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome to our AI-powered platform
            </h2>
            <p className="text-gray-600 mb-6">
              Transform your business with cutting-edge AI micro SaaS services, 
              cloud automation, and enterprise IT solutions.
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900">AI Services</h3>
                <p className="text-blue-700">Advanced AI solutions for enterprise needs</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900">Cloud Migration</h3>
                <p className="text-green-700">Seamless cloud infrastructure migration</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-900">DevOps & SRE</h3>
                <p className="text-purple-700">Reliable and scalable operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
