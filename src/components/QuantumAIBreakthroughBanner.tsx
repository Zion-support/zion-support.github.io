import React from 'react';
import Link from 'next/link';
import { Zap, ArrowRight, Star, TrendingUp } from 'lucide-react';

const QuantumAIBreakthroughBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-blue-200 text-sm font-medium">⚡ Quantum AI Superintelligence</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Quantum AI Superintelligence
            </span>
            <br />
            <span className="text-white">The 2026 Breakthrough</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the revolutionary convergence of quantum computing and artificial intelligence, 
            creating the first true quantum AI superintelligence systems that transcend classical computation limits.
          </p>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">10,000x</div>
              <div className="text-sm text-gray-300">Drug Discovery Acceleration</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Climate Modeling Accuracy</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500-1000%</div>
              <div className="text-sm text-gray-300">Problem-Solving Improvement</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="text-3xl font-bold text-emerald-400 mb-2">2000x</div>
              <div className="text-sm text-gray-300">Neural Network Speedup</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Quantum Processing Units</h3>
              <p className="text-gray-300 text-sm">
                1,000+ qubit systems with 99.99% fidelity enabling unprecedented computational power
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Advanced Algorithms</h3>
              <p className="text-gray-300 text-sm">
                Quantum Machine Learning, Neural Networks, and Optimization algorithms
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Hybrid Systems</h3>
              <p className="text-gray-300 text-sm">
                Seamless integration of quantum and classical computing architectures
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/quantum-ai-superintelligence-2026"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-5 h-5" />
              Read Full Article
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="/resources/quantum-ai-superintelligence-implementation-guide-2026"
              className="inline-flex items-center gap-2 bg-white/10 border-2 border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              <Star className="w-5 h-5" />
              Implementation Guide
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Bottom Text */}
          <p className="text-sm text-gray-400 mt-8 max-w-2xl mx-auto">
            Join leading enterprises already implementing quantum AI superintelligence systems 
            and gain unprecedented competitive advantages in the quantum era.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuantumAIBreakthroughBanner;