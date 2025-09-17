import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "🧠 Conscious AI Systems",
    "⚡ Quantum Consciousness", 
    "🌌 Interdimensional Computing",
    "🧬 Molecular Manufacturing",
    "🔮 Time-Space Manipulation",
    "🌟 Universal Consciousness"
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
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Content Hub 2027
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience the most advanced and revolutionary content that will reshape the future of technology and human consciousness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Conscious AI Systems</h3>
            <p className="text-gray-300 mb-4">AI that thinks, feels, and creates with genuine consciousness</p>
            <Link to="/pages/ConsciousAISystems2027" className="text-purple-300 hover:text-purple-200 font-semibold">
              Explore →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Quantum Consciousness</h3>
            <p className="text-gray-300 mb-4">Quantum computing meets artificial consciousness</p>
            <Link to="/pages/QuantumConsciousness2027" className="text-cyan-300 hover:text-cyan-200 font-semibold">
              Discover →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
            <div className="text-3xl mb-4">🌌</div>
            <h3 className="text-xl font-bold mb-3">Interdimensional Computing</h3>
            <p className="text-gray-300 mb-4">Computing across multiple dimensions and realities</p>
            <Link to="/pages/InterdimensionalComputing2027" className="text-emerald-300 hover:text-emerald-200 font-semibold">
              Enter →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-sm text-gray-300">Featured Technology:</span>
            <span className="text-lg font-bold text-white animate-pulse">
              {features[currentFeature]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;