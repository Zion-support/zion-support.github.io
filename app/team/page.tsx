import React from 'react';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Team</h1>
        <p className="text-lg text-gray-300 mb-8">
          Meet the brilliant minds behind our AI revolution.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg text-center">
            <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">AI Researchers</h3>
            <p className="text-gray-300">
              Leading experts in artificial intelligence and machine learning.
            </p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg text-center">
            <div className="w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Quantum Engineers</h3>
            <p className="text-gray-300">
              Pioneers in quantum computing and consciousness research.
            </p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg text-center">
            <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Autonomous Systems</h3>
            <p className="text-gray-300">
              Specialists in self-managing and autonomous AI systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;