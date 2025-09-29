import React from 'react';
import Link from 'next/link';
import { Brain, Zap, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

export default function CognitiveEnterprise2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-24 h-24 bg-purple-500 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-indigo-500 opacity-20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-blue-500 opacity-20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-cyan-500 opacity-20 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                🧠 NEW 2026
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                BREAKTHROUGH
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Cognitive Enterprise 2026:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                The Future of Intelligent Business
              </span>
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Discover how cognitive AI is revolutionizing enterprise operations with 95% automation efficiency, $15M+ ROI, and autonomous decision-making capabilities.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-purple-200 text-sm">Automation Rate</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">$15M+</div>
                  <div className="text-purple-200 text-sm">Average ROI</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-purple-200 text-sm">Decision Accuracy</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-purple-200 text-sm">Autonomous Ops</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-cognitive-enterprise-2026"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Brain className="w-5 h-5" />
                Explore Cognitive AI
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies/ai-cognitive-enterprise-success-2026"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-purple-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                View Success Story
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Cognitive AI Revolution</h3>
                <p className="text-purple-100 mb-6">
                  Autonomous decision-making, neural optimization, and quantum-enhanced processing for enterprise transformation
                </p>

                {/* Feature List */}
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-100">Neural decision networks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-100">Quantum processing units</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-100">Autonomous agent orchestration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-100">Real-time learning systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-100">Cognitive architecture optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-indigo-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}