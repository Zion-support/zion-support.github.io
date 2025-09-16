import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW: Revolutionary Content 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover groundbreaking innovations that are reshaping industries and creating new possibilities. 
            From conscious AI to quantum neural interfaces and interdimensional computing.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Revolutionary Tech Breakthrough</h3>
            <p className="text-purple-100 mb-6 text-center">
              Witness the most groundbreaking technological innovations that are reshaping industries
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Advanced AI Consciousness</li>
              <li>• Quantum Neural Interfaces</li>
              <li>• Interdimensional Computing</li>
            </ul>
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Breakthrough →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Next-Gen Innovation Hub</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Discover and explore the most revolutionary technologies shaping humanity's future
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Synthetic Intelligence</li>
              <li>• Quantum Neural Fusion</li>
              <li>• Consciousness Computing</li>
            </ul>
            <a href="/pages/NextGenInnovationHub2025" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Enter Innovation Hub →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced AI Transformation</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Transform your business with cutting-edge AI solutions and automation
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Autonomous AI Agents</li>
              <li>• Edge AI Computing</li>
              <li>• Generative AI 2.0</li>
            </ul>
            <a href="/pages/AdvancedAITransformation2025" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Start Transformation →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex justify-center space-x-4">
            <a href="/pages/RevolutionaryTechBreakthrough2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Innovations
            </a>
            <a href="/pages/NextGenInnovationHub2025" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Join Innovation Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;