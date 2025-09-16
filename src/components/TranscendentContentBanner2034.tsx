import React from 'react';
import { Link } from 'react-router-dom';

const TranscendentContentBanner2034: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 TRANSCENDENT TECHNOLOGY • JANUARY 2034
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Transcendent Tech 2034</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-6">
            Experience technology that transcends the boundaries of what was once thought possible
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
            <div className="text-4xl mb-3 text-center">🧠</div>
            <h3 className="text-lg font-bold mb-2 text-center">Mind-Machine Fusion</h3>
            <p className="text-emerald-100 text-sm text-center mb-4">
              Direct neural interfaces merging human consciousness with AI
            </p>
            <Link 
              to="/pages/TranscendentTech2034" 
              className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center text-sm"
            >
              Fuse Your Mind →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <div className="text-4xl mb-3 text-center">🌌</div>
            <h3 className="text-lg font-bold mb-2 text-center">Reality Simulation</h3>
            <p className="text-purple-100 text-sm text-center mb-4">
              Create infinite virtual realities indistinguishable from physical reality
            </p>
            <Link 
              to="/pages/TranscendentTech2034" 
              className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm"
            >
              Enter Simulation →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
            <div className="text-4xl mb-3 text-center">🚀</div>
            <h3 className="text-lg font-bold mb-2 text-center">Interstellar Travel</h3>
            <p className="text-cyan-100 text-sm text-center mb-4">
              Technology enabling instant travel to any point in the universe
            </p>
            <Link 
              to="/pages/TranscendentTech2034" 
              className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center text-sm"
            >
              Explore Universe →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/pages/TranscendentTech2034" 
            className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
          >
            Transcend Reality →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TranscendentContentBanner2034;