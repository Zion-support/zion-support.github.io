import React from 'react';

const InteractiveTechShowcase = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Technology Showcase</h2>
        <p className="text-lg text-gray-600">Experience our cutting-edge technology solutions</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
          <p className="text-gray-600 mb-4">
            Advanced artificial intelligence solutions for automation and analytics.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Try Demo
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Quantum Computing</h3>
          <p className="text-gray-600 mb-4">
            Next-generation quantum computing solutions for complex problems.
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Explore
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-4">🧬</div>
          <h3 className="text-xl font-semibold mb-2">Neural Interfaces</h3>
          <p className="text-gray-600 mb-4">
            Direct brain-computer interfaces for enhanced human capabilities.
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;