import React from 'react';

const RevolutionaryAdBanner2033: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-12 mb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY AD • JANUARY 2033
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Ad Banner 2033
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover the most advanced technologies that will reshape our world in 2033
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/pages/UltimateTechBreakthrough2033" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse border-2 border-yellow-400">
              🧠 Ultimate Tech 2033 →
            </a>
            <a href="/pages/RevolutionaryTechShowcase2033" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse border-2 border-yellow-400">
              ⚡ Revolutionary Showcase →
            </a>
            <a href="/pages/NextGenInnovationHub2033" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse border-2 border-yellow-400">
              🌟 Innovation Hub →
            </a>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Experience the Future Today</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of innovators who are already using our revolutionary technologies 
              to transform their businesses and shape the future.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/pages/UltimateTechBreakthrough2033" className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
                Get Started
              </a>
              <a href="/pages/RevolutionaryTechShowcase2033" className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                View Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2033;