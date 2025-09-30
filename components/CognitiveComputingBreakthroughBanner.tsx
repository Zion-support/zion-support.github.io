import React from 'react';
import Link from 'next/link';
import { Brain, Zap, Target, Cpu } from 'lucide-react';

export default function CognitiveComputingBreakthroughBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-indigo-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-blue-500 rounded-full opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-18 h-18 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🧠 NEW 2026 BREAKTHROUGH
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              COGNITIVE COMPUTING
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AI Cognitive Computing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {' '}Breakthrough 2026
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI cognitive computing breakthroughs that are transforming 
            enterprise operations with human-like reasoning, problem-solving, and autonomous decision-making.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/blog/ai-cognitive-computing-breakthrough-2026"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Cognitive AI →
            </Link>
            <Link
              href="/services/ai-cognitive-computing"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-purple-900 transition-all"
            >
              Get AI Consultation
            </Link>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Cognitive Reasoning</h3>
            <p className="text-purple-100 text-sm mb-3">95% accuracy in complex decision-making scenarios</p>
            <div className="text-2xl font-bold text-purple-400">95%</div>
            <div className="text-xs text-purple-200">Decision Accuracy</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Neural Architecture</h3>
            <p className="text-purple-100 text-sm mb-3">10x faster problem-solving capabilities</p>
            <div className="text-2xl font-bold text-blue-400">10x</div>
            <div className="text-xs text-purple-200">Faster Processing</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Autonomous Learning</h3>
            <p className="text-purple-100 text-sm mb-3">Self-improving AI systems with continuous adaptation</p>
            <div className="text-2xl font-bold text-green-400">80%</div>
            <div className="text-xs text-purple-200">Faster Learning</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Enterprise ROI</h3>
            <p className="text-purple-100 text-sm mb-3">$50M+ potential ROI for enterprise implementations</p>
            <div className="text-2xl font-bold text-orange-400">$50M+</div>
            <div className="text-xs text-purple-200">Potential ROI</div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/blog/ai-cognitive-computing-breakthrough-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-purple-400/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    AI Cognitive Computing Breakthrough 2026
                  </h3>
                  <p className="text-purple-100 text-sm">Revolutionary Intelligence Systems</p>
                </div>
              </div>
              <p className="text-purple-100 mb-4">
                Discover the revolutionary AI cognitive computing breakthroughs of 2026. Explore advanced 
                neural architectures, cognitive reasoning, and next-generation intelligence systems.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-purple-200">35 min read</div>
                <div className="flex items-center text-purple-400 font-semibold text-sm group-hover:text-purple-300 transition-colors">
                  Read Complete Guide →
                </div>
              </div>
            </div>
          </Link>
          
          <Link href="/services/ai-cognitive-computing" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-green-400/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    AI Cognitive Computing Services
                  </h3>
                  <p className="text-purple-100 text-sm">Enterprise Implementation</p>
                </div>
              </div>
              <p className="text-purple-100 mb-4">
                Transform your enterprise with cutting-edge cognitive computing solutions that deliver 
                unprecedented reasoning capabilities and autonomous decision-making.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-purple-200">Custom Solutions</div>
                <div className="flex items-center text-green-400 font-semibold text-sm group-hover:text-green-300 transition-colors">
                  Explore Services →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-purple-100 mb-6 text-lg">
            Transform your business with revolutionary cognitive computing technology
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Brain className="w-5 h-5 mr-2" />
            Start Your Cognitive AI Journey
          </Link>
        </div>
      </div>
    </section>
  );
}