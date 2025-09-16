import React from 'react';

const NewContentPromotionBanner2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white/20 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-6 left-12 w-1 h-1 bg-white/40 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-8 right-16 w-2 h-2 bg-white/25 rounded-full animate-ping delay-3000"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW CONTENT AVAILABLE • JANUARY 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Discover Revolutionary Technology Content
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our latest AI Innovation Hub, Revolutionary Tech Showcase, and cutting-edge technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-2 text-center">AI Innovation Hub 2026</h3>
            <p className="text-sm opacity-80 text-center mb-4">
              Experience the most advanced AI technologies reshaping industries
            </p>
            <a 
              href="/pages/AIInnovationHub2026" 
              className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
            >
              Explore AI Hub →
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-2 text-center">Revolutionary Tech Showcase</h3>
            <p className="text-sm opacity-80 text-center mb-4">
              Interactive exploration of groundbreaking technologies
            </p>
            <a 
              href="/pages/RevolutionaryTechShowcase2026" 
              className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
            >
              View Showcase →
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🌟</div>
            <h3 className="text-xl font-bold mb-2 text-center">Future Tech Solutions</h3>
            <p className="text-sm opacity-80 text-center mb-4">
              Comprehensive technology solutions for tomorrow's challenges
            </p>
            <a 
              href="/pages/ComprehensiveServices2025" 
              className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
            >
              View Solutions →
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <span className="text-sm opacity-80">Featured Technologies:</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Quantum Computing</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Neural Interfaces</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Conscious AI</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Extended Reality</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;