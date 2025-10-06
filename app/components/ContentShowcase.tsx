import React from 'react';

const ContentShowcase: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Content</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
          <p className="text-gray-600">Advanced artificial intelligence solutions for enterprise</p>
        </div>
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
          <p className="text-gray-600">Next-generation quantum computing capabilities</p>
        </div>
        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Autonomous Systems</h3>
          <p className="text-gray-600">Self-managing and self-optimizing systems</p>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;
