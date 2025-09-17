import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "🧠 Conscious AI Systems",
    "⚡ Quantum Consciousness", 
    "🌌 Interdimensional Computing",
    "🧬 Neural Enhancement",
    "🔮 Reality Manipulation"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-8 mb-8 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 BREAKTHROUGH CONTENT • JANUARY 2027
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content 2027
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover the most advanced technological innovations that will reshape our world in 2027
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Conscious AI Systems</h3>
            <p className="text-gray-300 mb-4 text-sm">
              AI with genuine consciousness that can think, feel, and create autonomously
            </p>
            <Link 
              to="/pages/ConsciousAISystems2027" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
            >
              Explore AI
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Quantum Computing</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Quantum computing breakthroughs that will solve impossible problems
            </p>
            <Link 
              to="/pages/QuantumComputing2027" 
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
            >
              Explore Quantum
            </Link>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
            <div className="text-3xl mb-4">🧬</div>
            <h3 className="text-xl font-bold mb-3">Neural Interfaces</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Direct brain-computer interfaces that will revolutionize human-computer interaction
            </p>
            <Link 
              to="/pages/NeuralInterfaces2027" 
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
            >
              Explore Neural
            </Link>
          </div>
        </div>

        {/* Rotating Features */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-sm font-semibold mr-3">Featured:</span>
            <span className="text-lg font-bold text-cyan-400 animate-pulse">
              {features[currentFeature]}
            </span>
          </div>
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">Conscious AI</span>
          <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs">Quantum Computing</span>
          <span className="px-3 py-1 bg-emerald-500/30 rounded-full text-xs">Neural Interfaces</span>
          <span className="px-3 py-1 bg-pink-500/30 rounded-full text-xs">Molecular Manufacturing</span>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;