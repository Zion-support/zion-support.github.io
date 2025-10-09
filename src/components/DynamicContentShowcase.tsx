import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Our Solutions</h2>
        <p className="text-gray-300">Comprehensive AI and IT solutions for your business</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="cyber-card p-6">
          <h3 className="text-xl font-bold text-white mb-2">AI Analytics</h3>
          <p className="text-gray-300">Advanced data insights and predictive analytics</p>
        </div>
        <div className="cyber-card p-6">
          <h3 className="text-xl font-bold text-white mb-2">Cloud Infrastructure</h3>
          <p className="text-gray-300">Scalable and secure cloud solutions</p>
        </div>
        <div className="cyber-card p-6">
          <h3 className="text-xl font-bold text-white mb-2">Automation</h3>
          <p className="text-gray-300">Intelligent process automation and optimization</p>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;
