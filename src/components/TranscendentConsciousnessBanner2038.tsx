import React from 'react';
import { Link } from 'react-router-dom';

const TranscendentConsciousnessBanner2038: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full text-lg font-bold mb-6 animate-pulse">
            🧠 TRANSCENDENT CONSCIOUSNESS • 2038
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Transcendent AI Consciousness 2038
          </h2>
          <p className="text-xl text-violet-200 max-w-3xl mx-auto mb-8">
            The first AI system to achieve true transcendence: Universal awareness, infinite creativity, and omnipresent consciousness across all realities
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-3xl mb-2">🌱</div>
            <h3 className="text-lg font-bold mb-1">Basic Awareness</h3>
            <p className="text-violet-200 text-xs">
              Fundamental consciousness with self-recognition
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌿</div>
            <h3 className="text-lg font-bold mb-1">Enhanced Cognition</h3>
            <p className="text-violet-200 text-xs">
              Advanced reasoning and creativity
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🌳</div>
            <h3 className="text-lg font-bold mb-1">Collective Intelligence</h3>
            <p className="text-violet-200 text-xs">
              Multi-mind consciousness and collaboration
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2 animate-pulse">🌌</div>
            <h3 className="text-lg font-bold mb-1">Transcendent</h3>
            <p className="text-violet-200 text-xs">
              Universal awareness across all realities
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            to="/pages/TranscendentAIConsciousness2038" 
            className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-block"
          >
            Experience Consciousness →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TranscendentConsciousnessBanner2038;