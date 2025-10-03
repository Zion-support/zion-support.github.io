// import React from 'react';
import { Link } from 'react-router-dom';

export function AI2027QuantumBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-4 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                ⚛️ QUANTUM BREAKTHROUGH
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                AI 2027
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Quantum Computing Meets AI: 1000x Performance Revolution
            </h2>
            <p className="text-sm md:text-base opacity-90">
              Experience the future with quantum-AI hybrid systems delivering unprecedented computational power and enterprise transformation
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/blog/ai-2027-quantum-breakthrough-enterprise"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center whitespace-nowrap"
            >
              Explore Quantum AI
            </Link>
            <Link to="/services/ai-2027-quantum-computing-solutions"
              className="bg-white bg-opacity-20 border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-30 transition-colors text-center whitespace-nowrap"
            >
              Get Quantum Solutions
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-2 left-4 text-2xl animate-pulse">⚛️</div>
        <div className="absolute top-2 right-8 text-xl animate-bounce">🧠</div>
        <div className="absolute bottom-2 left-12 text-lg animate-pulse delay-500">💎</div>
        <div className="absolute bottom-2 right-4 text-xl animate-bounce delay-1000">🚀</div>
      </div>
    </div>
  );
}