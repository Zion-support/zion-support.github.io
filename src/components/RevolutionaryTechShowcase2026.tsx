import React from 'react';

const RevolutionaryTechShowcase2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY 2026 TECHNOLOGY SHOWCASE
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Next-Generation Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking 2026 technology innovations in AI systems, 
            space technology, biotechnology, and quantum computing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-cyan-300">AI Revolution</h3>
            <p className="text-center opacity-90 mb-6">
              Advanced AI systems with human-level intelligence and beyond
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Neural interface technology</li>
              <li>• Quantum AI processing</li>
              <li>• Autonomous decision making</li>
              <li>• Creative AI applications</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-purple-300">Space Tech</h3>
            <p className="text-center opacity-90 mb-6">
              Revolutionary space exploration and colonization technology
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Advanced propulsion systems</li>
              <li>• Space habitat technology</li>
              <li>• Interplanetary communication</li>
              <li>• Space resource extraction</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-emerald-300">Biotech</h3>
            <p className="text-center opacity-90 mb-6">
              Cutting-edge biotechnology for health and sustainability
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Gene therapy advances</li>
              <li>• Synthetic biology</li>
              <li>• Regenerative medicine</li>
              <li>• Bioengineering solutions</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-orange-300">Quantum</h3>
            <p className="text-center opacity-90 mb-6">
              Quantum computing and quantum technology breakthroughs
            </p>
            <ul className="space-y-2 text-sm">
              <li>• Quantum processors</li>
              <li>• Quantum encryption</li>
              <li>• Quantum sensors</li>
              <li>• Quantum communication</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-semibold">
              Explore All Technologies →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2026;