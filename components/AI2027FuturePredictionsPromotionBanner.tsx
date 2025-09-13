import React from 'react';
import Link from 'next/link';

export default function AI2027FuturePredictionsPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-bold mb-8 animate-pulse shadow-lg">
            🔮 REVOLUTIONARY FUTURE PREDICTIONS
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2027 Future
            <span className="block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Predictions Revolutionary
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Peer into the future with our revolutionary AI 2027 predictions. Discover 
            <span className="text-purple-400 font-bold"> neural synthesis</span>, 
            <span className="text-indigo-400 font-bold"> quantum-AI fusion</span>, and 
            <span className="text-cyan-400 font-bold"> transcendent intelligence</span> that will reshape civilization.
          </p>

          {/* Key Predictions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="text-3xl mb-3">🧠</div>
              <div className="text-lg font-bold text-white mb-2">Neural Synthesis</div>
              <div className="text-purple-400 font-semibold">95% Probability</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30">
              <div className="text-3xl mb-3">⚛️</div>
              <div className="text-lg font-bold text-white mb-2">Quantum-AI Fusion</div>
              <div className="text-cyan-400 font-semibold">88% Probability</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
              <div className="text-3xl mb-3">🌍</div>
              <div className="text-lg font-bold text-white mb-2">Climate Solutions</div>
              <div className="text-green-400 font-semibold">92% Probability</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2027-future-predictions-revolutionary"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold text-lg rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🔮 Explore Predictions
            </Link>
            <Link
              href="/resources/ai-2027-predictions-whitepaper"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              📊 Download Whitepaper
            </Link>
            <Link
              href="/webinars/ai-2027-future-predictions"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🎥 Watch Webinar
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">
              🔥 Limited Time: Early access to 2027 predictions with 30% discount
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <span className="flex items-center">
                ✅ Neural Synthesis Breakthrough
              </span>
              <span className="flex items-center">
                ✅ Quantum-AI Integration
              </span>
              <span className="flex items-center">
                ✅ Climate Solution AI
              </span>
              <span className="flex items-center">
                ✅ Space Colonization AI
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-100"></div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-indigo-400 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-10 right-10 w-5 h-5 bg-purple-400 rounded-full animate-bounce delay-700"></div>
    </div>
  );
}