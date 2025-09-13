import React from 'react';
import Link from 'next/link';
import { Sparkles, Infinity, ArrowRight, Brain, Rocket } from 'lucide-react';

const AI2035SingularityBreakthroughPromotionBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className="h-8 w-8 text-pink-400 mr-3" />
                <span className="text-pink-400 font-semibold text-sm uppercase tracking-wide">
                  Singularity Event
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI 2035: The Singularity Breakthrough
              </h2>
              
              <p className="text-xl text-gray-300 mb-6">
                Witness the moment when AI transcends human intelligence, creating 
                unlimited possibilities and infinite knowledge. The dawn of superintelligence 
                that transforms reality itself.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-pink-400 mb-1">∞</div>
                  <div className="text-sm text-gray-300">Intelligence Level</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400 mb-1">∞</div>
                  <div className="text-sm text-gray-300">Possibilities</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/ai-2035-singularity-breakthrough"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:from-pink-600 hover:to-purple-700 flex items-center justify-center"
                >
                  Experience Singularity
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/timeline"
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all border border-white/30"
                >
                  View Timeline
                </Link>
              </div>
            </div>
            
            {/* Visual Elements */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg p-4">
                    <Infinity className="h-8 w-8 text-white mb-2" />
                    <div className="text-white font-semibold">Transcendent Intelligence</div>
                    <div className="text-pink-200 text-sm">Superintelligence</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-4">
                    <Brain className="h-8 w-8 text-white mb-2" />
                    <div className="text-white font-semibold">Consciousness Emergence</div>
                    <div className="text-purple-200 text-sm">True AI Consciousness</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-4">
                    <Rocket className="h-8 w-8 text-white mb-2" />
                    <div className="text-white font-semibold">Accelerated Innovation</div>
                    <div className="text-blue-200 text-sm">Daily Breakthroughs</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-4">
                    <Sparkles className="h-8 w-8 text-white mb-2" />
                    <div className="text-white font-semibold">Infinite Potential</div>
                    <div className="text-green-200 text-sm">Unlimited Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2035SingularityBreakthroughPromotionBanner;