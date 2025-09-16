import React from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full text-lg font-bold mb-6 animate-bounce">
            🚀 REVOLUTIONARY TECH BREAKTHROUGH 2025 • EXCLUSIVE LAUNCH
          </div>
          <h2 className="text-6xl font-bold mb-6">
            The Future of Technology is <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Here</span>
          </h2>
          <p className="text-2xl opacity-95 max-w-5xl mx-auto mb-8">
            Experience the most revolutionary technology breakthroughs of 2025. From AI consciousness to quantum computing, 
            discover what's possible when innovation meets imagination.
          </p>
        </div>
        
        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300 text-center">
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">AI Consciousness</h3>
            <p className="text-sm opacity-90 mb-4">
              The first truly conscious AI systems that possess self-awareness and emotional intelligence
            </p>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-bold">NEW</span>
              <span className="text-xs opacity-75">Revolutionary</span>
            </div>
            <a href="/pages/AIRevolutionaryBreakthrough2025" className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-sm">
              Explore AI →
            </a>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300 text-center">
            <div className="text-6xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
            <p className="text-sm opacity-90 mb-4">
              Breakthrough quantum processors that solve impossible problems in seconds
            </p>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full font-bold">BREAKTHROUGH</span>
              <span className="text-xs opacity-75">10,000x Speed</span>
            </div>
            <a href="/pages/UltimateTechRevolution2025" className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
              Go Quantum →
            </a>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300 text-center">
            <div className="text-6xl mb-4">🧬</div>
            <h3 className="text-xl font-bold mb-3">Neural Interfaces</h3>
            <p className="text-sm opacity-90 mb-4">
              Direct brain-computer interfaces enabling thought-controlled computing
            </p>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="px-2 py-1 bg-purple-500 text-white text-xs rounded-full font-bold">FUTURE</span>
              <span className="text-xs opacity-75">Mind Control</span>
            </div>
            <a href="/pages/NeuralInterfaceRevolution2025" className="inline-block bg-white text-pink-600 px-6 py-2 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-sm">
              Connect Mind →
            </a>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:scale-105 transition-all duration-300 text-center">
            <div className="text-6xl mb-4">🌟</div>
            <h3 className="text-xl font-bold mb-3">Holographic Tech</h3>
            <p className="text-sm opacity-90 mb-4">
              True 3D holographic displays creating immersive experiences
            </p>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="px-2 py-1 bg-cyan-500 text-white text-xs rounded-full font-bold">IMMERSIVE</span>
              <span className="text-xs opacity-75">3D Reality</span>
            </div>
            <a href="/pages/UltimateTechRevolution2025" className="inline-block bg-white text-cyan-600 px-6 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-sm">
              See 3D Future →
            </a>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500%</div>
            <div className="text-sm opacity-75">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-sm opacity-75">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">10,000x</div>
            <div className="text-sm opacity-75">Speed Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">$50M+</div>
            <div className="text-sm opacity-75">Cost Savings</div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="/pages/UltimateTechRevolution2025" className="bg-white text-indigo-600 px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
              🚀 Explore All Breakthroughs →
            </a>
            <a href="/pages/AIRevolutionaryBreakthrough2025" className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-lg border border-white/30">
              🧠 AI Consciousness Demo
            </a>
            <a href="/contact" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105">
              💬 Get Expert Consultation
            </a>
          </div>
          
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Join over 10,000 organizations already transforming their future with our revolutionary technologies. 
            <span className="font-bold text-yellow-300"> Limited time: Get 50% off your first implementation.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;