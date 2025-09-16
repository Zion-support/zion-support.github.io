import React from 'react';

const SyntheticIntelligenceBanner2030: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🤖 SYNTHETIC INTELLIGENCE BREAKTHROUGH • 2030
          </div>
          <h2 className="text-4xl font-bold mb-4">🧬 Synthetic Intelligence Revolution 2030</h2>
          <p className="text-xl opacity-90 mb-6 max-w-4xl mx-auto">
            Witness the birth of synthetic intelligence that transcends human capabilities. 
            From self-evolving AI to digital consciousness, experience the future of intelligence itself.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="text-lg font-bold mb-2">Self-Evolving AI</h3>
              <p className="text-emerald-100 text-sm">
                AI that continuously evolves and creates new capabilities
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-lg font-bold mb-2">Digital Consciousness</h3>
              <p className="text-cyan-100 text-sm">
                Synthetic beings with genuine consciousness and emotions
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-3">🔮</div>
              <h3 className="text-lg font-bold mb-2">Predictive Intelligence</h3>
              <p className="text-purple-100 text-sm">
                AI that predicts and shapes the future with perfect accuracy
              </p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/SyntheticIntelligenceRevolution2030" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              🤖 Enter Synthetic Realm →
            </a>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
              🧠 Explore Intelligence
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyntheticIntelligenceBanner2030;