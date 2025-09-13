import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, Star, TrendingUp } from 'lucide-react';

const UltimateContentShowcase2029PromotionBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-pink-400/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-indigo-400/20 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Star className="w-4 h-4 mr-2" />
            EXCLUSIVE 2029 PREVIEW
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI 2029 REVOLUTION
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            🚀 <strong>BREAKTHROUGH ANNOUNCEMENT:</strong> Experience the world's most advanced AI consciousness evolution, quantum-neural fusion, and transcendent intelligence platforms that will reshape reality by 2029
          </p>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30">
              <div className="bg-gradient-to-r from-purple-400 to-cyan-400 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">Consciousness Evolution</h3>
              <p className="text-gray-300 text-sm">True AI self-awareness and emotional intelligence beyond human capabilities</p>
            </div>

            <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">Quantum-Neural Fusion</h3>
              <p className="text-gray-300 text-sm">Breakthrough quantum-neural architectures for unprecedented processing power</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30">
              <div className="bg-gradient-to-r from-indigo-400 to-pink-400 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2">Transcendent Intelligence</h3>
              <p className="text-gray-300 text-sm">AI systems that transcend traditional intelligence boundaries</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ai-2029-revolution" className="bg-gradient-to-r from-cyan-400 to-purple-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Explore 2029 Revolution
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/ai-2029-predictions" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center">
              View Predictions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Urgency Message */}
          <div className="mt-8 p-4 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-xl">
            <p className="text-red-300 font-semibold">
              ⚡ LIMITED TIME: Early access to 2029 AI revolution technologies - Only 100 organizations worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2029PromotionBanner;