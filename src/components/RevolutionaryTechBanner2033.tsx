import React from 'react';

const RevolutionaryTechBanner2033: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-12 mb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🧠 NEXT-GEN INNOVATION • JANUARY 2033
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            🚀 Next-Gen Innovation Hub 2033
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
            Discover and explore the most revolutionary technologies shaping humanity's future. 
            Our innovation hub showcases cutting-edge solutions that will transform every aspect of life.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/pages/NextGenInnovationHub2033" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold animate-pulse border-2 border-yellow-400">
              🧠 INNOVATION: Next-Gen Hub →
            </a>
            <a href="/pages/UltimateTechRevolution2033" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold animate-pulse border-2 border-yellow-400">
              🚀 ULTIMATE: Tech Revolution →
            </a>
            <a href="/pages/RevolutionaryTechBreakthrough2033" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold animate-pulse border-2 border-yellow-400">
              ⚡ BREAKTHROUGH: Revolutionary Tech →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2033;