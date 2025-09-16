import React from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI technologies and revolutionary content that will shape the future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🧠</div>
            <h4 className="text-xl font-bold mb-4">AI Consciousness Test</h4>
            <p className="mb-6 opacity-90">Test the consciousness level of our AI systems</p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
              Take Test
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">⚛️</div>
            <h4 className="text-xl font-bold mb-4">Quantum Computing</h4>
            <p className="mb-6 opacity-90">Explore quantum computing breakthroughs</p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h4 className="text-xl font-bold mb-4">Space Technology</h4>
            <p className="mb-6 opacity-90">Discover space exploration technologies</p>
            <button className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-green-600 transition-all duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;