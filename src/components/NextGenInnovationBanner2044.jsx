import React from 'react';

const NextGenInnovationBanner2044 = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🧠 NEXT-GEN INNOVATION • JANUARY 2044
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2044
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
            The ultimate destination for cutting-edge innovation. Where the brightest minds collaborate 
            with advanced AI to create the impossible and shape the future of humanity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/30 text-center">
            <div className="text-2xl mb-2">🧬</div>
            <h3 className="text-sm font-bold mb-1">Biotech Revolution</h3>
            <p className="text-cyan-200 text-xs mb-2">47 Active Projects</p>
            <div className="w-full bg-cyan-500/30 rounded-full h-1">
              <div className="bg-cyan-400 h-1 rounded-full" style={{width: '94%'}}></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 text-center">
            <div className="text-2xl mb-2">⚛️</div>
            <h3 className="text-sm font-bold mb-1">Quantum Computing</h3>
            <p className="text-blue-200 text-xs mb-2">23 Active Projects</p>
            <div className="w-full bg-blue-500/30 rounded-full h-1">
              <div className="bg-blue-400 h-1 rounded-full" style={{width: '92%'}}></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-400/30 text-center">
            <div className="text-2xl mb-2">🌌</div>
            <h3 className="text-sm font-bold mb-1">Space Technology</h3>
            <p className="text-indigo-200 text-xs mb-2">31 Active Projects</p>
            <div className="w-full bg-indigo-500/30 rounded-full h-1">
              <div className="bg-indigo-400 h-1 rounded-full" style={{width: '88%'}}></div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-lg p-4 border border-purple-400/30 text-center">
            <div className="text-2xl mb-2">🧠</div>
            <h3 className="text-sm font-bold mb-1">AI & Consciousness</h3>
            <p className="text-purple-200 text-xs mb-2">52 Active Projects</p>
            <div className="w-full bg-purple-500/30 rounded-full h-1">
              <div className="bg-purple-400 h-1 rounded-full" style={{width: '96%'}}></div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="/pages/NextGenInnovationHub2044" className="inline-block bg-gradient-to-r from-cyan-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            🧠 Enter Innovation Hub →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationBanner2044;