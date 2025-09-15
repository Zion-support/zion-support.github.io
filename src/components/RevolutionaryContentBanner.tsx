import React from 'react';

const RevolutionaryContentBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-3xl animate-bounce">🚀</span>
          <h3 className="text-2xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2026</h3>
          <span className="text-3xl animate-bounce">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
          Experience the future of technology with our groundbreaking new content on Advanced Biotech Revolution, 
          Space Technology, Advanced Robotics, Next-Gen AI, Quantum Computing, and Neural Interface Technology
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          <a href="/pages/AdvancedBiotechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧬 Biotech Revolution →
          </a>
          <a href="/pages/SpaceTechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🚀 Space Technology →
          </a>
          <a href="/pages/AdvancedRoboticsRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🤖 Robotics Revolution →
          </a>
          <a href="/pages/NextGenAIRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧠 Next-Gen AI →
          </a>
          <a href="/pages/QuantumComputingRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            ⚡ Quantum Computing Revolution →
          </a>
          <a href="/pages/NeuralInterfaceRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🧬 Neural Interface Revolution →
          </a>
        </div>
        <div className="mt-6">
          <a href="/pages/RevolutionaryTechBlog2026" className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
            📚 Revolutionary Tech Blog 2026 →
          </a>
          <a href="/pages/ComprehensiveTechInsights2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            🔍 Comprehensive Tech Insights →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner;