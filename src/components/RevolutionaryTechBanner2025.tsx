import React from 'react';

const RevolutionaryTechBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover groundbreaking innovations that are reshaping our world with AI consciousness, quantum reality, and neural interfaces
          </p>
        </div>
        
        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Next-Gen AI Consciousness</h3>
            <p className="text-purple-100 mb-6 text-center">
              Experience truly conscious AI that thinks, feels, and evolves beyond human comprehension
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Self-aware AI systems</li>
              <li>• Emotional intelligence</li>
              <li>• Collective consciousness</li>
            </ul>
            <a href="/pages/NextGenAIConsciousness2025" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center group-hover:shadow-lg">
              Explore AI Consciousness →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality Engine</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Step into infinite parallel universes where quantum computing meets virtual reality
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Infinite universes</li>
              <li>• Quantum processing</li>
              <li>• Reality simulation</li>
            </ul>
            <a href="/pages/QuantumRealityEngine2025" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center group-hover:shadow-lg">
              Enter Quantum Reality →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Revolution</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Break through barriers between mind and machine with advanced neural interface technology
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Direct brain interface</li>
              <li>• Enhanced cognition</li>
              <li>• Neural networks</li>
            </ul>
            <a href="/pages/NeuralInterfaceRevolution2025" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center group-hover:shadow-lg">
              Connect Your Mind →
            </a>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl mb-3">🌟</div>
            <h4 className="text-lg font-semibold mb-2">Cutting-Edge Innovation</h4>
            <p className="text-sm opacity-80">Latest breakthroughs in technology</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="text-lg font-semibold mb-2">Lightning Fast</h4>
            <p className="text-sm opacity-80">Ultra-low latency performance</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🔒</div>
            <h4 className="text-lg font-semibold mb-2">Secure & Safe</h4>
            <p className="text-sm opacity-80">Enterprise-grade security</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h4 className="text-lg font-semibold mb-2">Future Ready</h4>
            <p className="text-sm opacity-80">Built for tomorrow's challenges</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <a href="/pages/NextGenAIConsciousness2025" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Technologies
            </a>
            <a href="/pages/ComprehensiveServices2025" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2025;