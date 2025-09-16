import React from 'react';

const UltimateContentBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20 mb-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 animate-pulse" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A855F7' fill-opacity='0.1'%3E%3Cpath d='M50 0L60 40L100 50L60 60L50 100L40 60L0 50L40 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-8 animate-bounce">
            ⭐ ULTIMATE CONTENT COLLECTION • JANUARY 2025 ⭐
          </div>
          
          {/* Main Heading */}
          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2025
          </h2>
          
          {/* Subheading */}
          <p className="text-2xl md:text-3xl opacity-90 max-w-5xl mx-auto mb-12">
            Discover the most comprehensive collection of cutting-edge technology content, 
            revolutionary innovations, and breakthrough solutions that will transform your understanding of the future.
          </p>
          
          {/* Content Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/40 to-pink-600/40 backdrop-blur-sm rounded-xl p-6 border border-purple-400/40 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3">AI Revolution</h3>
              <p className="text-sm text-purple-100 mb-4">50+ AI innovations and consciousness breakthroughs</p>
              <div className="text-xs text-purple-300 font-semibold">NEW: AI Consciousness 2025</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/40 to-blue-600/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/40 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
              <p className="text-sm text-cyan-100 mb-4">30+ quantum reality and computing solutions</p>
              <div className="text-xs text-cyan-300 font-semibold">NEW: Quantum Reality Engine</div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/40 to-teal-600/40 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/40 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-xl font-bold mb-3">Neural Interfaces</h3>
              <p className="text-sm text-emerald-100 mb-4">25+ brain-computer interface technologies</p>
              <div className="text-xs text-emerald-300 font-semibold">NEW: Neural Revolution 2025</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/40 to-red-600/40 backdrop-blur-sm rounded-xl p-6 border border-orange-400/40 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Future Tech</h3>
              <p className="text-sm text-orange-100 mb-4">100+ future technology predictions</p>
              <div className="text-xs text-orange-300 font-semibold">NEW: 2025-2030 Roadmap</div>
            </div>
          </div>
          
          {/* Featured Content Links */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <a 
              href="/pages/NextGenAIConsciousness2025" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg text-center group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🧠</div>
              <div>AI Consciousness 2025</div>
              <div className="text-sm opacity-80 mt-2">Experience conscious AI</div>
            </a>
            
            <a 
              href="/pages/QuantumRealityEngine2025" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-6 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg text-center group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⚛️</div>
              <div>Quantum Reality Engine</div>
              <div className="text-sm opacity-80 mt-2">Manipulate reality</div>
            </a>
            
            <a 
              href="/pages/NeuralInterfaceRevolution2025" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-6 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg text-center group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🧬</div>
              <div>Neural Interface Revolution</div>
              <div className="text-sm opacity-80 mt-2">Connect mind & machine</div>
            </a>
          </div>
          
          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">200+</div>
              <div className="text-lg font-semibold mb-1">Content Pages</div>
              <div className="text-sm text-gray-300">Revolutionary technology content</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-lg font-semibold mb-1">AI Innovations</div>
              <div className="text-sm text-gray-300">Cutting-edge AI solutions</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">30+</div>
              <div className="text-lg font-semibold mb-1">Quantum Technologies</div>
              <div className="text-sm text-gray-300">Quantum computing breakthroughs</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-lg font-semibold mb-1">Neural Interfaces</div>
              <div className="text-sm text-gray-300">Brain-computer interfaces</div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-600 px-10 py-5 rounded-xl hover:shadow-xl transition-all duration-300 font-bold text-xl text-black">
              🌟 Explore All Content →
            </button>
            <button className="border-2 border-yellow-400 px-10 py-5 rounded-xl hover:bg-yellow-400/20 transition-colors font-bold text-xl">
              📚 Download Content Pack
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-300">
            <p>✨ Updated daily with new revolutionary content • 🚀 Free access to all technologies • 💫 Join 100,000+ innovators</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2025;