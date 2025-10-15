import React from 'react';

const DocumentationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Documentation</h1>
          <p className="text-xl text-gray-300 mb-12">
            Comprehensive guides and API documentation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">API Reference</h3>
            <p className="text-gray-300">
              Complete API documentation with examples and code snippets.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
            <p className="text-gray-300">
              Quick start guides and tutorials to get you up and running.
            </p>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
            <p className="text-gray-300">
              Industry best practices and implementation guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
