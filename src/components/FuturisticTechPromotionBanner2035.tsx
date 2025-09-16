import React from 'react';
import { ArrowRight, Zap, Star, Rocket, Sparkles } from 'lucide-react';

const FuturisticTechPromotionBanner2035: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-8">
            <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-purple-400 font-semibold">BREAKTHROUGH 2035-2037</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Technology
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience the future with our groundbreaking quantum computing, neural interfaces, 
            and interdimensional technology that will revolutionize everything.
          </p>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quantum Computing 2035</h3>
              <p className="text-gray-300 text-sm">100M times faster processing with quantum supremacy</p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-to-br from-pink-900/30 to-cyan-900/30 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Neural Interface 2036</h3>
              <p className="text-gray-300 text-sm">Direct mind-machine connection with 99.8% accuracy</p>
            </div>

            <div className="group p-6 rounded-xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Interdimensional 2037</h3>
              <p className="text-gray-300 text-sm">Transcend reality with infinite dimensional access</p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                100M
              </div>
              <div className="text-gray-300 text-sm">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                99.8%
              </div>
              <div className="text-gray-300 text-sm">Neural Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                ∞
              </div>
              <div className="text-gray-300 text-sm">Dimensions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-300 text-sm">Availability</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 cursor-pointer group">
              <span>Explore Quantum Future</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 cursor-pointer group">
              <span>Experience Neural Revolution</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>

          <p className="text-gray-400 mt-6">
            Join the technological revolution that will reshape reality itself
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuturisticTechPromotionBanner2035;