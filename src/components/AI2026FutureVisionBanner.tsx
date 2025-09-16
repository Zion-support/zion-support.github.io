import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2026FutureVisionBanner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-500/20 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-500/20 rounded-full animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <span className="text-sm font-medium text-cyan-300">🔮 FUTURE VISION 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-300 via-white to-pink-300 bg-clip-text text-transparent">
            AI 2026 Future Vision
          </h1>
          
          <p className="text-2xl md:text-3xl mb-10 max-w-5xl mx-auto leading-relaxed text-gray-200">
            Step into the future with revolutionary AI technologies that will transform every aspect of human life. 
            Experience 'tomorrow', 's innovations today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="/ai-2026-future-vision"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-10 py-5 rounded-xl font-bold text-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-2xl"
            >
              Explore Future Vision →
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-110"
            >
              Join the Revolution
            </a>
          </div>
          
          {/* Future Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-6">🌌</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Consciousness</h3>
              <p className="text-gray-300 text-lg">AI systems with self-awareness and consciousness</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Space AI</h3>
              <p className="text-gray-300 text-lg">AI systems designed for space exploration and colonization</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-6">🧬</div>
              <h3 className="text-2xl font-bold mb-4">Bio-AI Fusion</h3>
              <p className="text-gray-300 text-lg">Integration of AI with biological systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Planetary AI</h3>
              <p className="text-gray-300 text-lg">Global AI networks managing entire ecosystems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026FutureVisionBanner;