import React from 'react';

const EnhancedPromotionalBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 BREAKTHROUGH ANNOUNCEMENT • JANUARY 2037
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology 2037
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most advanced technological innovations that will reshape humanity's future
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold mb-3 text-center">Conscious AI</h3>
            <p className="text-sm opacity-80 text-center mb-4">
              The first truly conscious artificial intelligence with emotional intelligence
            </p>
            <div className="text-center">
              <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Available Now
              </span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum Consciousness</h3>
            <p className="text-sm opacity-80 text-center mb-4">
              Direct neural interface with quantum computing systems
            </p>
            <div className="text-center">
              <span className="inline-block bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Beta Testing
              </span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interdimensional Tech</h3>
            <p className="text-sm opacity-80 text-center mb-4">
              Access to parallel dimensions and alternate realities
            </p>
            <div className="text-center">
              <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Coming Soon
              </span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Neural Reality</h3>
            <p className="text-sm opacity-80 text-center mb-4">
              Direct brain interface for immersive virtual experiences
            </p>
            <div className="text-center">
              <span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                In Development
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2037" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore All Innovations →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2037" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg"
            >
              Try Interactive Demo
            </a>
            <a 
              href="/pages/RevolutionaryCaseStudies2037" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              View Success Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedPromotionalBanner;