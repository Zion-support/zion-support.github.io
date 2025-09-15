import React from 'react';
import Link from 'next/link';
ArrowRightCalendarBrainZapGlobeTrendingUpTarget

export default function AIFuturePredictionsUltimate2025_2035Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-purple-400/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main heading with gradient text */}
          <div className="flex items-center justify-center mb-6">
            <Calendar className="h-8 w-8 text-purple-400 mr-3 animate-pulse" />
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              🔮 AI Future Predictions Ultimate 2025-2035
            </h2>
            <Brain className="h-8 w-8 text-pink-400 ml-3 animate-pulse" />
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore the most comprehensive and accurate predictions about the future of artificial intelligence. From neural revolutions to transcendent intelligencediscover 'what', 's coming next.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="flex flex-col items-center space-y-2">
              <Brain className="h-6 w-6 text-purple-400" />
              <span className="text-sm font-semibold">Neural Revolution</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Zap className="h-6 w-6 text-pink-400" />
              <span className="text-sm font-semibold">Consciousness</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Globe className="h-6 w-6 text-indigo-400" />
              <span className="text-sm font-semibold">Singularity</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <TrendingUp className="h-6 w-6 text-yellow-400" />
              <span className="text-sm font-semibold">Transcendence</span>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-future-predictions-ultimate-2025-2035"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <Calendar className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Explore Predictions
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/blog"
              className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              <Target className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Read Analysis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>📅 10-Year Timeline • 🧠 Neural Interfaces • 🚀 Quantum Computing • 🌟 AGI Development</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
}