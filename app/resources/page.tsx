import React from 'react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Resources
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Documentation</h3>
            <p className="text-gray-600">
              Comprehensive guides and API documentation for our solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">White Papers</h3>
            <p className="text-gray-600">
              In-depth research and insights on AI and technology trends.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
            <p className="text-gray-600">
              Real-world examples of successful implementations and transformations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;