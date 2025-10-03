import React from 'react';

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>
        <p className="text-lg text-gray-300 mb-8">
          Access our comprehensive library of AI resources, guides, and documentation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Documentation</h3>
            <p className="text-gray-300">
              Complete technical documentation for all our AI solutions and APIs.
            </p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Guides</h3>
            <p className="text-gray-300">
              Step-by-step guides to help you implement AI solutions effectively.
            </p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
            <p className="text-gray-300">
              Real-world examples of successful AI implementations and transformations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;