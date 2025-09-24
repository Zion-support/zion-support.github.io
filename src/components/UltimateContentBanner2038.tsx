import React from 'react';

const UltimateContentBanner2038: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2038
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Ultimate Tech Breakthrough 2038
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most revolutionary technological advances that will reshape our world. 
            From cosmic intelligence to interdimensional computing, discover the future of technology.
          </p>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-3">🌌</div>
              <h3 className="text-lg font-bold mb-2">Cosmic Intelligence</h3>
              <p className="text-purple-100 text-sm">Multi-dimensional AI processing across realities</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">Quantum Reality Engine</h3>
              <p className="text-cyan-100 text-sm">Create and manipulate alternate realities</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Neural Universe Interface</h3>
              <p className="text-emerald-100 text-sm">Direct connection to universal consciousness</p>
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/pages/UltimateTechBreakthrough2038" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center"
            >
              🌟 Explore Breakthrough →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2038" 
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              ⚡ View Showcase
            </a>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-sm opacity-75">
            <p>✨ Limited Time: Early Access Available Now</p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 text-2xl opacity-20 animate-bounce">🌌</div>
      <div className="absolute top-20 right-20 text-3xl opacity-20 animate-bounce delay-1000">⚡</div>
      <div className="absolute bottom-10 left-20 text-2xl opacity-20 animate-bounce delay-2000">🧠</div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-20 animate-bounce delay-3000">✨</div>
    </div>
  );
};

export default UltimateContentBanner2038;