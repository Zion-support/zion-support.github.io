import React from 'react';

const InnovationShowcase2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH INNOVATIONS • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Innovation Showcase 2026</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies and innovations that are reshaping our world
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced AI Systems</h3>
            <p className="text-purple-100 mb-6 text-center">
              Next-generation artificial intelligence that thinks, learns, and evolves autonomously
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Autonomous learning capabilities</li>
              <li>• Quantum-enhanced processing</li>
              <li>• Distributed intelligence networks</li>
              <li>• Predictive analytics</li>
            </ul>
            <a href="/pages/AdvancedAISystems2026" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Advanced AI →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-blue-100 mb-6 text-center">
              AI-powered space exploration and satellite intelligence systems
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Autonomous satellite networks</li>
              <li>• Deep space AI systems</li>
              <li>• Quantum communication</li>
              <li>• Space observation AI</li>
            </ul>
            <a href="/pages/SpaceTechAI2025" className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center">
              Explore Space Tech →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotech Revolution</h3>
            <p className="text-green-100 mb-6 text-center">
              Revolutionary biotechnology and personalized medicine solutions
            </p>
            <ul className="text-green-200 space-y-2 mb-6 text-sm">
              <li>• AI drug discovery</li>
              <li>• Precision medicine</li>
              <li>• Neural interface medicine</li>
              <li>• Synthetic biology</li>
            </ul>
            <a href="/pages/BiotechAIRevolution2025" className="block w-full bg-white text-green-600 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold text-center">
              Explore Biotech →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationShowcase2026;