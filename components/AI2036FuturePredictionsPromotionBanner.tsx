import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AI2036FuturePredictionsPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPrediction, setCurrentPrediction] = useState(0);

  const predictions = [
    'Quantum Consciousness Integration',
    'Multi-Dimensional AI Systems',
    'Temporal Optimization Networks',
    'Perfect Reality Synthesis',
    'Autonomous AI Evolution',
    'Universal AI Integration'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPrediction((prev) => (prev + 1) % predictions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-pink-500/10 animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-pink-400/30 rounded-full animate-bounce"></div>
      <div className="absolute top-8 right-8 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-4 left-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-8 right-1/4 w-5 h-5 bg-indigo-400/30 rounded-full animate-bounce delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Main Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-bold mb-6 animate-pulse shadow-lg">
            🔮 AI 2036 FUTURE PREDICTIONS REVEALED
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Future of AI
            <span className="block bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Predictions for 2036
            </span>
          </h1>

          {/* Dynamic Prediction Display */}
          <div className="mb-8">
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-4">
              <span className="text-pink-400 font-semibold text-lg">
                Next Prediction: {predictions[currentPrediction]}
              </span>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Based on advanced predictive models and breakthrough research, discover 
              the most likely evolution of AI technology in 2036 and beyond. 
              Prepare for the future today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-pink-400 mb-1">95%</div>
              <div className="text-sm text-gray-300">Max Probability</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-1">6</div>
              <div className="text-sm text-gray-300">Key Predictions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-1">2036</div>
              <div className="text-sm text-gray-300">Target Year</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Possibilities</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2036-future-predictions"
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="relative z-10">View All Predictions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/blog/ai-2036-quantum-consciousness-integration"
              className="group relative px-8 py-4 border-2 border-pink-400 text-pink-400 font-bold rounded-lg hover:bg-pink-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Read Top Prediction</span>
            </Link>
            <Link
              to="/contact"
              className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Get Future Guide</span>
            </Link>
          </div>

          {/* Urgency Message */}
          <div className="mt-8 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-400/30">
            <p className="text-purple-300 font-semibold animate-pulse">
              ⚡ Exclusive: Early access to AI 2036 predictions and implementation strategies!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default AI2036FuturePredictionsPromotionBanner;