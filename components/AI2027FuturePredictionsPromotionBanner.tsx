import React from 'react';
import Link from 'next/link';

export default function AI2027FuturePredictionsPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-indigo-600 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold text-white animate-pulse">
              🔮 FUTURE PREDICTIONS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            AI 2027{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Future Predictions
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto">
            Discover the revolutionary AI breakthroughs predicted for 2027. From neural synthesis 
            to quantum-AI fusion - explore the future of artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/ai-2027-future-predictions-revolutionary"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🔮 Explore Predictions
            </Link>
            <Link
              href="/blog/ai-2027-neural-synthesis-breakthrough"
              className="bg-transparent text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              🧠 Neural Synthesis
            </Link>
          </div>
          
          {/* Key Predictions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Neural Synthesis</h3>
              <p className="text-cyan-100 text-sm">
                99.7% accuracy in neural synthesis with 8,000% ROI
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum-AI Fusion</h3>
              <p className="text-cyan-100 text-sm">
                10,000x faster processing with 15,000% ROI
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Systems</h3>
              <p className="text-cyan-100 text-sm">
                100% autonomous decision making with 5,000% ROI
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-2">Space AI</h3>
              <p className="text-cyan-100 text-sm">
                Autonomous space missions with 5,000% ROI
              </p>
            </div>
          </div>
          
          {/* Probability Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-cyan-200 text-sm">Neural Synthesis Probability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">88%</div>
              <div className="text-cyan-200 text-sm">Quantum-AI Probability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">92%</div>
              <div className="text-cyan-200 text-sm">Autonomous Systems Probability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">85%</div>
              <div className="text-cyan-200 text-sm">Space AI Probability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}