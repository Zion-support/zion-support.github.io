import React from 'react';

const OmniversalTechShowcase2029: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Omniversal Tech Showcase 2029
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience technology that transcends universes and dimensions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🌌</div>
            <h3 className="text-xl font-semibold text-white mb-3">Omniversal Technology</h3>
            <p className="text-gray-300">Technology that operates across all possible universes and realities.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-3">Reality Manipulation</h3>
            <p className="text-gray-300">Advanced systems that can alter the fundamental laws of reality itself.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-purple-400 text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold text-white mb-3">Consciousness Transfer</h3>
            <p className="text-gray-300">Technology that allows consciousness to exist across multiple realities.</p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transcend Reality?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in exploring technology that exists beyond the boundaries of our current universe.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OmniversalTechShowcase2029;