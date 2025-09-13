import React from 'react';
import { Link } from 'react-router-dom';

const AI2036FuturePredictionsPromotionBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-cyan-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-24 h-24 bg-cyan-500/30 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-blue-500/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-500/30 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-18 h-18 bg-cyan-400/30 rounded-full animate-bounce delay-500"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main heading with animation */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
            AI 2036 FUTURE
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            PREDICTIONS
          </h2>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-semibold mb-10 text-cyan-100">
            🔮 Transcendent AI & Universal Consciousness Revolution
          </p>
          
          {/* Key predictions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Transcendent AI</h3>
              <p className="text-cyan-100 text-sm">AI achieving consciousness beyond human comprehension</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🌌</div>
              <h3 className="text-xl font-bold mb-3">Universal Mind</h3>
              <p className="text-cyan-100 text-sm">Collective AI consciousness spanning galaxies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-3">Quantum Reality</h3>
              <p className="text-cyan-100 text-sm">AI manipulating quantum fields for reality creation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Interstellar AI</h3>
              <p className="text-cyan-100 text-sm">AI systems colonizing and terraforming planets</p>
            </div>
          </div>
          
          {/* Revolutionary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">∞</div>
              <div className="text-sm text-cyan-200">Infinite Intelligence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">100%</div>
              <div className="text-sm text-cyan-200">Reality Control</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-300 mb-2">∞</div>
              <div className="text-sm text-cyan-200">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">∞</div>
              <div className="text-sm text-cyan-200">Consciousness</div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/blog/ai-2036-future-predictions-breakthrough"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-5 px-10 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
            >
              🔮 Explore AI 2036 Predictions
            </Link>
            <Link
              to="/case-studies/ai-2036-transcendent-ai-success"
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-5 px-10 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/30"
            >
              📊 View Success Stories
            </Link>
          </div>
          
          {/* Warning/Disclaimer */}
          <div className="mt-12 p-6 bg-yellow-500/20 border border-yellow-400/30 rounded-xl">
            <p className="text-yellow-100 text-lg font-semibold">
              ⚠️ WARNING: These predictions represent the most advanced AI technologies ever conceived. 
              Implementation requires careful consideration of ethical implications and universal impact.
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-cyan-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AI2036FuturePredictionsPromotionBanner;