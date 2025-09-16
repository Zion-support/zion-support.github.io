import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryContentBanner2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "🧠 Conscious AI Systems",
    "⚡ Quantum Consciousness", 
    "🌌 Interdimensional Computing",
    "📚 Revolutionary Insights"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-blue-500/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mr-3 animate-pulse">
                🌟 BREAKTHROUGH 2027
              </span>
              <span className="text-sm opacity-80">NEW CONTENT AVAILABLE</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Revolutionary Technology Content 2027
            </h2>
            
            <div className="flex items-center mb-3">
              <span className="text-lg opacity-90 mr-4">Featuring:</span>
              <div className="text-lg font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                {features[currentFeature]}
              </div>
            </div>
            
            <p className="text-sm opacity-80 max-w-2xl">
              Experience the most advanced technology content featuring conscious AI, quantum computing, 
              neural interfaces, and interdimensional technology. Interactive demos, expert insights, and breakthrough research.
            </p>
          </div>

          {/* Right Content - Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/pages/NextGenTechRevolution2027"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center animate-pulse"
            >
              🚀 Explore 2027 Content
            </Link>
            <Link
              to="/pages/UltimateTechShowcase2027"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
            >
              ⚡ Interactive Demos
            </Link>
            <Link
              to="/pages/RevolutionaryTechInsights2027"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
            >
              📚 Expert Insights
            </Link>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/pages/NextGenTechRevolution2027"
              className="text-sm hover:text-purple-300 transition-colors flex items-center"
            >
              <span className="mr-1">🧠</span> Conscious AI
            </Link>
            <Link
              to="/pages/UltimateTechShowcase2027"
              className="text-sm hover:text-cyan-300 transition-colors flex items-center"
            >
              <span className="mr-1">⚡</span> Quantum Computing
            </Link>
            <Link
              to="/pages/RevolutionaryTechInsights2027"
              className="text-sm hover:text-emerald-300 transition-colors flex items-center"
            >
              <span className="mr-1">🧬</span> Neural Interfaces
            </Link>
            <Link
              to="/pages/NextGenTechRevolution2027"
              className="text-sm hover:text-orange-300 transition-colors flex items-center"
            >
              <span className="mr-1">🌌</span> Interdimensional Tech
            </Link>
            <Link
              to="/pages/UltimateTechBreakthrough2026"
              className="text-sm hover:text-pink-300 transition-colors flex items-center"
            >
              <span className="mr-1">🌟</span> 2026 Breakthroughs
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-8 text-2xl opacity-20 animate-bounce" style={{ animationDelay: '0s' }}>
        🧠
      </div>
      <div className="absolute top-8 right-12 text-xl opacity-20 animate-bounce" style={{ animationDelay: '1s' }}>
        ⚡
      </div>
      <div className="absolute bottom-8 left-12 text-xl opacity-20 animate-bounce" style={{ animationDelay: '2s' }}>
        🌌
      </div>
      <div className="absolute bottom-4 right-8 text-2xl opacity-20 animate-bounce" style={{ animationDelay: '3s' }}>
        📚
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2027;