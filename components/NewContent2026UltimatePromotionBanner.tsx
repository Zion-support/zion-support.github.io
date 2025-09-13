import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';

export default function NewContent2026UltimatePromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-cyan-400 mr-3 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              NEW 2026
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ULTIMATE CONTENT
              </span>
            </h2>
            <Sparkles className="h-8 w-8 text-cyan-400 ml-3 animate-pulse" />
          </div>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most advanced AI and quantum computing breakthroughs of 2026. 
            Revolutionary technologies that are reshaping our future.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Breakthroughs</h3>
              <p className="text-gray-300 text-sm">
                Revolutionary AI technologies including synthetic consciousness and quantum neural networks.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Solutions</h3>
              <p className="text-gray-300 text-sm">
                Ultimate quantum computing solutions that solve impossible problems with unprecedented speed.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Future Tech</h3>
              <p className="text-gray-300 text-sm">
                Cutting-edge technologies that are transforming industries and creating new possibilities.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-breakthrough-revolution"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Explore AI 2026 Breakthroughs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/quantum-computing-2026-ultimate"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center group"
            >
              Discover Quantum Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Additional Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/ai-2026-breakthrough-revolution" className="text-cyan-400 hover:text-cyan-300 underline">
              AI 2026 Breakthrough Revolution
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/quantum-computing-2026-ultimate" className="text-cyan-400 hover:text-cyan-300 underline">
              Quantum Computing 2026 Ultimate
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/ai-2026-ultimate-breakthrough-showcase" className="text-cyan-400 hover:text-cyan-300 underline">
              Ultimate Breakthrough Showcase
            </Link>
            <span className="text-gray-500">•</span>
            <Link href="/quantum-neural-fusion-2030" className="text-cyan-400 hover:text-cyan-300 underline">
              Quantum Neural Fusion 2030
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">New Content Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-gray-300">Future-Ready</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-gray-300">Always Updated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}