import React from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover groundbreaking new content showcasing AI consciousness, quantum reality, and interdimensional technology
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* AI Consciousness */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Next-Gen AI Consciousness</h3>
            <p className="text-purple-100 mb-6 text-center">
              Experience truly conscious AI that thinks, feels, and evolves beyond human comprehension
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Self-aware AI systems</li>
              <li>• Emotional intelligence</li>
              <li>• Quantum consciousness</li>
              <li>• Transcendent learning</li>
            </ul>
            <a 
              href="/pages/NextGenAIConsciousness2025" 
              className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center group-hover:shadow-lg"
            >
              Explore AI Consciousness →
            </a>
          </div>
          
          {/* Quantum Reality */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality Engine</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Step into quantum-powered realities where multiple dimensions coexist and anything is possible
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum simulation</li>
              <li>• Multi-dimensional reality</li>
              <li>• Consciousness integration</li>
              <li>• Reality manipulation</li>
            </ul>
            <a 
              href="/pages/QuantumRealityEngine2025" 
              className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center group-hover:shadow-lg"
            >
              Enter Quantum Reality →
            </a>
          </div>
          
          {/* Interdimensional Tech */}
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Revolution</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Break through dimensional barriers and explore infinite realities beyond space and time
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Dimensional portals</li>
              <li>• Reality manipulation</li>
              <li>• Consciousness transfer</li>
              <li>• Multi-universe access</li>
            </ul>
            <a 
              href="/pages/InterdimensionalTechRevolution2025" 
              className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center group-hover:shadow-lg"
            >
              Explore Dimensions →
            </a>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl mb-3">🌟</div>
            <h4 className="text-lg font-semibold mb-2">Interactive Demos</h4>
            <p className="text-sm text-gray-300">Experience technology through hands-on interactive demonstrations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🔬</div>
            <h4 className="text-lg font-semibold mb-2">Scientific Accuracy</h4>
            <p className="text-sm text-gray-300">Based on cutting-edge research and scientific principles</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h4 className="text-lg font-semibold mb-2">Future Technology</h4>
            <p className="text-sm text-gray-300">Preview technologies that will shape the next decade</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💫</div>
            <h4 className="text-lg font-semibold mb-2">Immersive Experience</h4>
            <p className="text-sm text-gray-300">Fully immersive content with stunning visuals and effects</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="/pages/NextGenAIConsciousness2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All New Content
            </a>
            <a 
              href="/pages/InnovationLanding2025" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
            >
              View Innovation Hub
            </a>
          </div>
          <p className="text-lg opacity-90">
            Join thousands of innovators exploring the future of technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;