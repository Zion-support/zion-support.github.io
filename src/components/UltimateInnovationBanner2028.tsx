import React from 'react';
import { ArrowRight, Zap, Star, Sparkles, Brain } from 'lucide-react';

const UltimateInnovationBanner2028: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE INNOVATION • JANUARY 2028
          </div>
          <h2 className="text-4xl font-bold mb-4">🚀 Ultimate Innovation 2028</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
            The pinnacle of human innovation where technology meets consciousness to create the impossible
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Consciousness Transfer</h3>
            <p className="text-indigo-100 mb-4 text-center text-sm">
              Transfer human consciousness into digital and synthetic bodies
            </p>
            <a href="/pages/UltimateInnovation2028" className="block w-full bg-white text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center text-sm">
              Explore Transfer →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Reality Programming</h3>
            <p className="text-purple-100 mb-4 text-center text-sm">
              Program and manipulate reality through quantum computing
            </p>
            <a href="/pages/UltimateInnovation2028" className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center text-sm">
              Program Reality →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-3 text-center">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center">Transcendent AI</h3>
            <p className="text-pink-100 mb-4 text-center text-sm">
              AI systems that transcend human limitations
            </p>
            <a href="/pages/UltimateInnovation2028" className="block w-full bg-white text-pink-600 py-2 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-center text-sm">
              Transcend Limits →
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="/pages/UltimateInnovation2028" className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            <Brain className="mr-2" />
            Experience Ultimate Innovation 2028
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UltimateInnovationBanner2028;