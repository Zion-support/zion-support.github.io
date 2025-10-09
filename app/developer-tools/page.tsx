import React from 'react';

const DeveloperToolsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Developer Tools</h1>
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600 mb-4">
            Comprehensive developer tools and APIs for building AI-powered applications.
          </p>
          <p className="text-gray-600">
            Access our developer resources, documentation, and tools to accelerate your AI development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperToolsPage;
