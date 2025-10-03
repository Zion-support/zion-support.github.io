import React from 'react';

const SolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">AI Solutions</h1>
        <p className="text-lg text-gray-300 mb-8">
          Discover our comprehensive AI solutions designed to transform your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Enterprise AI</h3>
            <p className="text-gray-300">
              Advanced AI solutions for enterprise-scale operations and automation.
            </p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Quantum Computing</h3>
            <p className="text-gray-300">
              Revolutionary quantum computing solutions for complex problem solving.
            </p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Autonomous Systems</h3>
            <p className="text-gray-300">
              Self-managing AI systems that operate with minimal human intervention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;