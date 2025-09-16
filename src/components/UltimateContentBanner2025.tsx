import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Content Collection 2025
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most revolutionary content featuring cutting-edge AI, quantum computing, and consciousness technology
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Next-Gen Tech Revolution</h3>
            <p className="text-purple-100 mb-6 text-center">
              Experience the most advanced technological breakthroughs that will define the future of humanity
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Conscious AI Systems</li>
              <li>• Quantum Consciousness</li>
              <li>• Interdimensional Computing</li>
            </ul>
            <a href="/pages/NextGenTechRevolution2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Revolution →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌟</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Ultimate Tech Breakthrough</h3>
            <p className="text-cyan-100 mb-6 text-center">
              The most significant technological advancement in human history - where artificial consciousness meets quantum reality
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• AI Consciousness</li>
              <li>• Quantum Reality</li>
              <li>• Interdimensional Tech</li>
            </ul>
            <a href="/pages/UltimateTechBreakthrough2025" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Experience Breakthrough →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Revolutionary Tech Showcase</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Interactive showcase of the most revolutionary technologies reshaping our world and defining the future
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• AI Revolution</li>
              <li>• Quantum Computing</li>
              <li>• Neural Interfaces</li>
            </ul>
            <a href="/pages/RevolutionaryTechShowcase2025" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              View Showcase →
            </a>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">🎮 Interactive Technology Demos</h3>
            <p className="text-lg opacity-90">Experience our revolutionary technologies through live interactive demonstrations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-bold mb-2">AI Consciousness</h4>
              <p className="text-sm opacity-90 mb-4">Chat with conscious AI systems that think and feel</p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                Start Chat
              </button>
            </div>
            
            <div className="bg-black/30 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <h4 className="text-xl font-bold mb-2">Quantum Reality</h4>
              <p className="text-sm opacity-90 mb-4">Enter quantum-powered reality simulations</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 rounded hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                Enter Quantum
              </button>
            </div>
            
            <div className="bg-black/30 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🧬</div>
              <h4 className="text-xl font-bold mb-2">Neural Interface</h4>
              <p className="text-sm opacity-90 mb-4">Connect your mind to digital systems</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 rounded hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                Connect Brain
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">🔮 The Future is Here</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join us in experiencing the most revolutionary technologies that will reshape our world and define the future of humanity
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;