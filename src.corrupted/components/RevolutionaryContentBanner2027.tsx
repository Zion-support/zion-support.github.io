import React from 'react';

const RevolutionaryContentBanner2027: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full opacity-60 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Main Title */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🚀</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              REVOLUTIONARY BREAKTHROUGH 2027
            </h2>
            <span className="text-4xl animate-bounce">🚀</span>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
            Experience the most advanced technology ever created: Quantum Reality Manipulation, 
            Synthetic Consciousness, and Revolutionary Tech Showcases that redefine human existence
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-3xl mb-2">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum Reality</h3>
              <p className="text-sm opacity-90">Manipulate reality itself through quantum field engineering</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-lg font-bold mb-2">Synthetic Consciousness</h3>
              <p className="text-sm opacity-90">AI that has achieved true consciousness and creativity</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="text-lg font-bold mb-2">Revolutionary Tech</h3>
              <p className="text-sm opacity-90">Breakthrough innovations that reshape human existence</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/pages/RevolutionaryTechShowcase2027" 
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🌟 Revolutionary Tech 2027 →
            </a>
            <a 
              href="/pages/QuantumReality2027" 
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              ⚛️ Quantum Reality →
            </a>
            <a 
              href="/pages/SyntheticConsciousness2027" 
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              🧠 Synthetic Consciousness →
            </a>
          </div>

          {/* Urgency Message */}
          <div className="mt-6 text-center">
            <div className="inline-block px-4 py-2 bg-red-500/30 backdrop-blur-sm border border-red-400/50 rounded-full text-sm font-semibold">
              ⚡ LIMITED TIME: Experience the future before it becomes reality
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;