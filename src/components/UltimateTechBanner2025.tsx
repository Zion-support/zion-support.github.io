import React from 'react';

const UltimateTechBanner2025: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-pink-500/30 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-cyan-500/30 rounded-full animate-pulse delay-500"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2025
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technological breakthroughs that will reshape our world forever
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI Systems</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary AI that demonstrates true consciousness and self-awareness
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Self-learning algorithms</li>
              <li>• Emotional intelligence</li>
              <li>• Creative problem solving</li>
              <li>• Ethical decision making</li>
            </ul>
            <a href="/pages/NextGenTechRevolution2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore AI →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality Engine</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Breakthrough quantum computing that can manipulate reality itself
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum entanglement</li>
              <li>• Reality manipulation</li>
              <li>• Parallel universe access</li>
              <li>• Time-space bridging</li>
            </ul>
            <a href="/pages/UltimateTechBreakthrough2025" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Enter Quantum →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Tech</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Technology that transcends dimensional boundaries and reality itself
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Multi-dimensional processing</li>
              <li>• Reality fabrication</li>
              <li>• Dimensional travel</li>
              <li>• Infinite possibilities</li>
            </ul>
            <a href="/pages/NextGenTechRevolution2025" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Explore Dimensions →
            </a>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center space-x-6">
            <a href="/pages/UltimateTechBreakthrough2025" className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Experience the Future
            </a>
            <a href="/pages/NextGenTechRevolution2025" className="border-2 border-purple-400 px-10 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
              📺 Watch Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBanner2025;