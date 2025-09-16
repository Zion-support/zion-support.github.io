import React from 'react';

const NextGenInnovationBanner2041: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-8 mb-8 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🧠 NEXT-GEN INNOVATION • JANUARY 2041
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2041
          </h2>
          <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
            Welcome to the most advanced innovation hub in existence. Experience synthetic intelligence, 
            quantum consciousness, and interdimensional technology that will define the future of innovation.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/NextGenInnovationHub2041" 
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Enter Innovation Hub →
            </a>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-3 rounded-lg hover:bg-emerald-400/10 transition-colors text-lg">
              Explore Technologies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationBanner2041;