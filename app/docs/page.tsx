import React from 'react';

const DocsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            Comprehensive documentation for all our services, APIs, and tools.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-300 mb-6">
            Quick start guides and tutorials to get you up and running with our platform.
          </p>
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
          <p className="text-gray-300 mb-6">
            Detailed API documentation with examples and code snippets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;

