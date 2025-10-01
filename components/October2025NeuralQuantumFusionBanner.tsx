import React from 'react';
import { Atom, Zap, TrendingUp, Sparkles, DollarSign, Award } from 'lucide-react';

export default function October2025NeuralQuantumFusionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 py-16 px-6 sm:px-12 lg:px-16">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* NEW Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-black font-bold text-sm animate-bounce shadow-2xl">
            <Sparkles className="w-5 h-5" />
            ⚛️ BREAKTHROUGH: OCTOBER 1, 2025 - NEURAL-QUANTUM FUSION REVOLUTION! ⚛️
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200">
          ⚛️ Neural-Quantum Fusion ⚡
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-300">
          The Ultimate Enterprise AI Breakthrough
        </h3>

        {/* Key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-800 to-purple-900 p-6 rounded-2xl border-2 border-purple-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-8 h-8 text-yellow-300" />
              <div className="text-yellow-300 font-bold text-lg">SPEED</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">10,000x</div>
            <div className="text-purple-200 text-sm">Faster Processing</div>
          </div>

          <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 p-6 rounded-2xl border-2 border-indigo-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-8 h-8 text-green-300" />
              <div className="text-green-300 font-bold text-lg">ACCURACY</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">99.99%</div>
            <div className="text-indigo-200 text-sm">Decision Accuracy</div>
          </div>

          <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-6 rounded-2xl border-2 border-blue-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-8 h-8 text-green-400" />
              <div className="text-green-400 font-bold text-lg">VALUE</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">$24.7B</div>
            <div className="text-blue-200 text-sm">Total Value Created</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-800 to-cyan-900 p-6 rounded-2xl border-2 border-cyan-400 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-8 h-8 text-yellow-300" />
              <div className="text-yellow-300 font-bold text-lg">ROI</div>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2">4,200%</div>
            <div className="text-cyan-200 text-sm">Average ROI</div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm p-8 rounded-3xl border border-purple-400/30 mb-10 shadow-2xl">
          <p className="text-xl text-center text-white mb-6 leading-relaxed">
            <strong className="text-yellow-300">Revolutionary convergence of quantum computing and neural architectures</strong> delivering 
            unprecedented computational power for enterprise AI. Achieve <strong className="text-purple-300">10,000x faster processing</strong>, 
            <strong className="text-cyan-300"> 99.99% accuracy</strong>, and <strong className="text-green-300">87% cost reduction</strong>. 
            Fortune 500 leaders are already transforming their industries with this breakthrough technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <Atom className="w-12 h-12 text-purple-300 mx-auto mb-3" />
              <div className="font-bold text-white mb-2">Quantum Power</div>
              <div className="text-sm text-purple-200">Harness quantum superposition for parallel processing</div>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
              <div className="font-bold text-white mb-2">Enterprise Scale</div>
              <div className="text-sm text-indigo-200">Production-ready for Fortune 500 deployments</div>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-green-300 mx-auto mb-3" />
              <div className="font-bold text-white mb-2">Proven Results</div>
              <div className="text-sm text-blue-200">$24.7B value creation across early adopters</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="/blog/ai-2025-oct-01-neural-quantum-fusion-enterprise-breakthrough"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-full hover:from-yellow-300 hover:to-orange-400 transition-all shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105"
          >
            <Sparkles className="w-6 h-6" />
            Read the Breakthrough Guide
            <Sparkles className="w-6 h-6" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg rounded-full hover:from-purple-500 hover:to-indigo-500 transition-all shadow-2xl border-2 border-white/30"
          >
            <Atom className="w-6 h-6" />
            Schedule Your Demo
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-12 text-center">
          <p className="text-purple-200 text-sm mb-4">
            ⭐⭐⭐⭐⭐ Trusted by Fortune 500 Leaders
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white/60 text-sm">
            <span>🏦 Financial Services</span>
            <span>🏥 Healthcare</span>
            <span>🏭 Manufacturing</span>
            <span>🛒 Retail & E-Commerce</span>
          </div>
        </div>
      </div>
    </div>
  );
}
