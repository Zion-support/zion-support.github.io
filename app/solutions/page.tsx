import React from 'react';

const SolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Solutions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-gray-600">
              Advanced artificial intelligence solutions to transform your business operations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
            <p className="text-gray-600">
              Scalable cloud infrastructure and migration services for modern enterprises.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">DevOps Automation</h3>
            <p className="text-gray-600">
              Streamline your development and deployment processes with our automation tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;