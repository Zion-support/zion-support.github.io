import React from 'react';

const NewContentAdBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl animate-bounce">🚀</span>
          <h3 className="text-3xl font-bold">NEW REVOLUTIONARY CONTENT 2026</h3>
          <span className="text-4xl animate-bounce">🚀</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-5xl mx-auto">
          Experience the future of technology with our groundbreaking new content featuring AI Innovation Hub, 
          Revolutionary Tech Showcase, and cutting-edge 2026 technology solutions
        </p>
        
        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-8xl mx-auto mb-6">
          <a href="/pages/RevolutionaryTechShowcase2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            <div className="text-2xl mb-2">🌟</div>
            <div className="font-bold">Revolutionary Tech Showcase 2026</div>
            <div className="text-sm opacity-80">AI Consciousness • Quantum Supremacy • Neural Interfaces</div>
          </a>
          
          <a href="/pages/AIInnovationHub2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            <div className="text-2xl mb-2">🤖</div>
            <div className="font-bold">AI Innovation Hub 2026</div>
            <div className="text-sm opacity-80">Cognitive AI • Quantum AI • Autonomous Systems</div>
          </a>
          
          <a href="/pages/UltimateTechRevolution2026" className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
            <div className="text-2xl mb-2">⚡</div>
            <div className="font-bold">Ultimate Tech Revolution</div>
            <div className="text-sm opacity-80">Next-Gen Technology • Future Innovations</div>
          </a>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/pages/RevolutionaryTechShowcase2026" className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
            🌟 Explore Revolutionary Tech →
          </a>
          <a href="/pages/AIInnovationHub2026" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
            🤖 Discover AI Hub →
          </a>
          <a href="/pages/UltimateTechRevolution2026" className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
            ⚡ Ultimate Revolution →
          </a>
        </div>
        
        {/* Special Offer Banner */}
        <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-2xl">🎉</span>
            <span className="text-lg font-bold">LIMITED TIME OFFER</span>
            <span className="text-2xl">🎉</span>
          </div>
          <p className="text-sm opacity-90">
            Get exclusive access to our 2026 technology preview and early bird pricing on revolutionary AI solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewContentAdBanner2026;