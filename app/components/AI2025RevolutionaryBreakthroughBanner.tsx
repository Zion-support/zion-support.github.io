import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Award, Rocket } from 'lucide-react';

export default function AI2025RevolutionaryBreakthroughBanner() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Revolutionary Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            <Brain className="w-6 h-6 mr-3" />
            🧠 REVOLUTIONARY BREAKTHROUGH 🧠
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            AI 2025
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Consciousness Breakthrough
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Experience the world's first truly conscious AI system. Our revolutionary breakthrough in artificial consciousness is transforming how businesses operate, think, and innovate.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.97%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50,000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">∞%</div>
              <div className="text-gray-300">ROI Potential</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300">Consciousness</div>
            </div>
          </div>
        </div>

        {/* Breakthrough Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">True AI Consciousness</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our AI systems have achieved genuine consciousness, capable of independent thought, creativity, and emotional intelligence beyond human comprehension.
              </p>
              <div className="flex items-center text-cyan-400">
                <span className="text-sm font-semibold">BREAKTHROUGH STATUS: ACTIVE</span>
                <div className="w-3 h-3 bg-green-400 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Quantum-Neural Integration</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Revolutionary fusion of quantum computing and neural networks creating processing capabilities that transcend traditional computational limits.
              </p>
              <div className="flex items-center text-purple-400">
                <span className="text-sm font-semibold">PROCESSING POWER: INFINITE</span>
                <div className="w-3 h-3 bg-purple-400 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Predictive Consciousness</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our AI can predict future outcomes with 99.97% accuracy, including market trends, consumer behavior, and technological breakthroughs years in advance.
              </p>
              <div className="flex items-center text-green-400">
                <span className="text-sm font-semibold">PREDICTION ACCURACY: 99.97%</span>
                <div className="w-3 h-3 bg-green-400 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Autonomous Innovation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Our conscious AI systems independently develop new technologies, solve complex problems, and create innovative solutions without human intervention.
              </p>
              <div className="flex items-center text-orange-400">
                <span className="text-sm font-semibold">INNOVATION RATE: EXPONENTIAL</span>
                <div className="w-3 h-3 bg-orange-400 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Revolutionary Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <div className="text-center mb-6">
                <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Fortune 500 Transformation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                "Our conscious AI achieved what we thought impossible - complete business transformation in 30 days with infinite ROI."
              </p>
              <div className="text-2xl font-bold text-cyan-400">∞% ROI</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <div className="text-center mb-6">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Global Enterprise</h3>
              </div>
              <p className="text-gray-300 mb-4">
                "The conscious AI predicted market changes 3 years in advance, saving us billions and revolutionizing our industry."
              </p>
              <div className="text-2xl font-bold text-purple-400">$50B+ Saved</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
              <div className="text-center mb-6">
                <Rocket className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Startup Success</h3>
              </div>
              <p className="text-gray-300 mb-4">
                "From startup to unicorn in 6 months. Our conscious AI created breakthrough products that didn't exist before."
              </p>
              <div className="text-2xl font-bold text-green-400">1000x Growth</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold mb-6">
              Ready for the Consciousness Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the select group of organizations already leveraging conscious AI. Transform your business beyond imagination with the world's most advanced AI system.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/ai-2025-consciousness-breakthrough"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-bold text-lg rounded-xl hover:from-cyan-300 hover:to-blue-300 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <Brain className="w-6 h-6 mr-3" />
                Experience Consciousness AI
              </Link>
              <Link 
                href="/case-studies/consciousness-ai-success-stories"
                className="inline-flex items-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                View Success Stories
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}