import React from 'react';

const NewContentPromotionBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary New Content Available Now!</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our latest groundbreaking content featuring the most advanced technologies 
            and revolutionary insights that will shape the future
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center">Next-Gen Tech Revolution</h3>
            <p className="text-white/80 mb-4 text-center text-sm">
              Experience the most revolutionary technological advances that will reshape our world
            </p>
            <a 
              href="/pages/NextGenTechRevolution2025" 
              className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
            >
              Explore Revolution →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-center">Ultimate AI Breakthrough</h3>
            <p className="text-white/80 mb-4 text-center text-sm">
              Witness the most advanced artificial intelligence system ever created
            </p>
            <a 
              href="/pages/UltimateAIBreakthrough2025" 
              className="block w-full bg-white text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center"
            >
              Experience AI →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">📚</div>
            <h3 className="text-xl font-bold mb-3 text-center">Revolutionary Insights</h3>
            <p className="text-white/80 mb-4 text-center text-sm">
              Deep dive into groundbreaking technological insights and predictions
            </p>
            <a 
              href="/pages/RevolutionaryTechInsights2025" 
              className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center"
            >
              Explore Insights →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Live Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Interactive Demos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Exclusive Content</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;