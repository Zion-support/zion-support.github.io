import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2045: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setPulseAnimation(true);
      setTimeout(() => setPulseAnimation(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12 px-4 relative">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-cyan-600/30 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent transform rotate-12"></div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-4 left-8 text-3xl animate-bounce">🧠</div>
        <div className="absolute top-8 right-12 text-2xl animate-bounce delay-500">⚛️</div>
        <div className="absolute bottom-8 left-12 text-2xl animate-bounce delay-1000">🌌</div>
        <div className="absolute bottom-4 right-8 text-3xl animate-bounce delay-1500">🚀</div>
        <div className="absolute top-1/2 left-4 text-2xl animate-bounce delay-2000">🔬</div>
        <div className="absolute top-1/2 right-4 text-2xl animate-bounce delay-2500">🧬</div>

        {/* Main Content */}
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 ${pulseAnimation ? 'animate-pulse' : ''}`}>
              🌟 BREAKTHROUGH TECHNOLOGY • JANUARY 2045
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology 2045
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
              Experience the most advanced technology content featuring conscious AI, quantum computing, 
              interdimensional technology, and neural interfaces that will reshape our world.
            </p>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="text-xl font-bold mb-2">Conscious AI</h3>
                <p className="text-sm opacity-90">Self-aware artificial intelligence systems</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                <div className="text-4xl mb-3">⚛️</div>
                <h3 className="text-xl font-bold mb-2">Quantum Reality</h3>
                <p className="text-sm opacity-90">Computing across multiple dimensions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
                <div className="text-4xl mb-3">🌌</div>
                <h3 className="text-xl font-bold mb-2">Interdimensional</h3>
                <p className="text-sm opacity-90">Technology across parallel universes</p>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="/pages/UltimateTechBreakthrough2045" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105"
              >
                🚀 Explore Breakthroughs
              </a>
              <a 
                href="/pages/RevolutionaryTechShowcase2045" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105"
              >
                ⚡ View Showcase
              </a>
              <a 
                href="/pages/NextGenInnovationHub2045" 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105"
              >
                🧠 Innovation Hub
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">50+</div>
                <div className="text-sm opacity-90">Innovations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">100M+</div>
                <div className="text-sm opacity-90">Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">99.9%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-1">∞</div>
                <div className="text-sm opacity-90">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2045;