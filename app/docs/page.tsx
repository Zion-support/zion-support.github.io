import React from 'react';

const DocsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Documentation</h1>
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600 mb-4">
            Comprehensive documentation for our AI services and APIs.
          </p>
          <p className="text-gray-600">
            Find guides, tutorials, and reference materials to help you get started with our platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
