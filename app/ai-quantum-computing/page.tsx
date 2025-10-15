import React from 'react';
import SEOHead from '../components/SEOHead';

const AiQuantumComputingPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="AI Quantum Computing - Zion Tech Group"
        description="Cutting-edge AI solutions powered by quantum computing technology."
        keywords="AI quantum computing, quantum AI, quantum algorithms, quantum machine learning"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">AI Quantum Computing</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of quantum computing to accelerate AI and machine learning applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quantum Algorithms</h3>
              <p className="text-gray-300">Develop and optimize quantum algorithms for AI applications.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quantum Machine Learning</h3>
              <p className="text-gray-300">Leverage quantum computing for advanced machine learning tasks.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quantum Optimization</h3>
              <p className="text-gray-300">Solve complex optimization problems using quantum computing.</p>
            </div>
          </div>

          <div className="text-center">
            <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Explore Solutions
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiQuantumComputingPage;