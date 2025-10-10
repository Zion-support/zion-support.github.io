import React from 'react';

const ContentShowcase: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Content Showcase
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Discover our latest AI-powered solutions and innovations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card p-6">
            <h3 className="text-xl font-bold text-white mb-3">AI Services</h3>
            <p className="text-gray-300">Advanced AI solutions for enterprise clients.</p>
          </div>
          <div className="cyber-card p-6">
            <h3 className="text-xl font-bold text-white mb-3">IT Services</h3>
            <p className="text-gray-300">Comprehensive IT infrastructure and support.</p>
          </div>
          <div className="cyber-card p-6">
            <h3 className="text-xl font-bold text-white mb-3">Micro SaaS</h3>
            <p className="text-gray-300">Powerful micro SaaS tools for business automation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;