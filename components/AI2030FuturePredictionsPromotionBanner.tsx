import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2030FuturePredictionsPromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-24 h-24 bg-cyan-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-24 w-20 h-20 bg-purple-500 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-pink-500 rounded-full opacity-30 animate-pulse delay-2000"></div>
        <div className="absolute bottom-16 right-1/3 w-12 h-12 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-3000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-bold">🔮 FUTURE VISION 2030</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            AI 2030 Future Predictions
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Peer into the future of artificial intelligence with our comprehensive 2030 predictions. Discover the technologies that will revolutionize every aspect of human life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-cyan-600 rounded-full text-sm font-semibold">
              🤖 AGI Breakthrough
            </span>
            <span className="px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold">
              ⚛️ Quantum Revolution
            </span>
            <span className="px-4 py-2 bg-pink-600 rounded-full text-sm font-semibold">
              🧠 Neural Interfaces
            </span>
            <span className="px-4 py-2 bg-indigo-600 rounded-full text-sm font-semibold">
              🚀 Autonomous Everything
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-6xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">AGI Breakthrough</h3>
              <p className="text-sm text-gray-300 mb-3">Human+ intelligence with 99.9% accuracy</p>
              <div className="text-xs text-cyan-300">BREAKTHROUGH</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum AI</h3>
              <p className="text-sm text-gray-300 mb-3">1000x speed improvements</p>
              <div className="text-xs text-purple-300">REVOLUTIONARY</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
              <p className="text-sm text-gray-300 mb-3">98% success rate in healthcare</p>
              <div className="text-xs text-pink-300">BREAKTHROUGH</div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Systems</h3>
              <p className="text-sm text-gray-300 mb-3">99.99% reliability in critical infrastructure</p>
              <div className="text-xs text-indigo-300">TRANSFORMATIVE</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2030-future-predictions"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore 2030 Predictions
            </Link>
            <Link
              to="/ai-2029-breakthrough-showcase"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 transform hover:scale-105"
            >
              View 2029 Breakthroughs
            </Link>
            <Link
              to="/enterprise-automation-mastery-2030"
              className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Master Enterprise Automation
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>Don't get left behind. Start implementing AI 2030 technologies today to secure your competitive advantage.</p>
          </div>
        </div>
      </div>
    </section>
  );
}