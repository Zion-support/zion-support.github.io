import React from 'react';
import Link from 'next/link';
import { Brain, Zap, ArrowRight, Sparkles } from 'lucide-react';

const AI2030AdvancedNeuralSynthesisPromotionBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-purple-400 mr-3" />
                <span className="text-purple-400 font-semibold text-sm uppercase tracking-wide">
                  New Breakthrough
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI 2030: Advanced Neural Synthesis
              </h2>
              
              <p className="text-xl text-gray-300 mb-6">
                Experience transcendent intelligence systems with 99.97% accuracy and 
                50,000x faster processing. Revolutionary cognitive architectures that 
                redefine what's possible with artificial intelligence.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">99.97%</div>
                  <div className="text-sm text-gray-300">Accuracy Rate</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400 mb-1">50,000x</div>
                  <div className="text-sm text-gray-300">Faster Processing</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/ai-2030-advanced-neural-synthesis"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:from-purple-600 hover:to-blue-700 flex items-center justify-center"
                >
                  Explore AI 2030
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/case-studies"
                  className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all border border-white/30"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
            
            {/* Visual Elements */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-4">
                    <Brain className="h-8 w-8 text-white mb-2" />
                    <div className="text-white font-semibold">Neural Synthesis</div>
                    <div className="text-purple-200 text-sm">Advanced AI</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-4">
                    <Zap className="h-8 w-8 text-white mb-2" />
                    <div className="text-white font-semibold">Transcendent Processing</div>
                    <div className="text-blue-200 text-sm">Quantum Speed</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-4">
                    <Sparkles className="h-8 w-8 text-white mb-2" />
                    <div className="text-white font-semibold">Predictive Intelligence</div>
                    <div className="text-green-200 text-sm">99.97% Accuracy</div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg p-4">
                    <ArrowRight className="h-8 w-8 text-white mb-2" />
                    <div className="text-white font-semibold">Autonomous Evolution</div>
                    <div className="text-yellow-200 text-sm">Self-Improving</div>
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

export default AI2030AdvancedNeuralSynthesisPromotionBanner;