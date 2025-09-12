import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AI2035BreakthroughPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    'Consciousness Transfer Technology',
    'Quantum-Neural Fusion Revolution',
    'Autonomous AI Evolution Systems',
    'Multi-Dimensional Computing',
    'Temporal AI Manipulation',
    'Reality Synthesis Technology'
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-cyan-400/30 rounded-full animate-bounce"></div>
      <div className="absolute top-8 right-8 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-4 left-1/4 w-4 h-4 bg-pink-400/30 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-8 right-1/4 w-5 h-5 bg-blue-400/30 rounded-full animate-bounce delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Main Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold mb-6 animate-pulse shadow-lg">
            🚀 AI 2035 BREAKTHROUGH REVEALED
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI 2035
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Breakthrough Technologies
            </span>
          </h1>

          {/* Dynamic Feature Display */}
          <div className="mb-8">
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-4">
              <span className="text-cyan-400 font-semibold text-lg">
                Now Featuring: {features[currentFeature]}
              </span>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the most advanced AI technologies that will reshape reality itself. 
              These breakthrough innovations represent the pinnacle of human-AI collaboration 
              with unprecedented ROI and accuracy.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-1">50,000%</div>
              <div className="text-sm text-gray-300">Max ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-1">99.99%</div>
              <div className="text-sm text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-pink-400 mb-1">6</div>
              <div className="text-sm text-gray-300">Breakthroughs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Possibilities</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2035-breakthrough-showcase"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="relative z-10">Explore Breakthroughs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/case-studies/ai-2035-consciousness-transfer-breakthrough"
              className="group relative px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">View Case Study</span>
            </Link>
            <Link
              to="/contact"
              className="group relative px-8 py-4 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Get Implementation Guide</span>
            </Link>
          </div>

          {/* Urgency Message */}
          <div className="mt-8 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg border border-red-400/30">
            <p className="text-red-300 font-semibold animate-pulse">
              ⚡ Limited Time: Early access to AI 2035 breakthrough technologies available now!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default AI2035BreakthroughPromotionBanner;