import React from 'react';
import Link from 'next/link';
import { SparklesIcon, ArrowRightIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const AI2025InnovationShowcasePromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/10 to-transparent animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                <SparklesIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">
                NEW: 2025 Innovation Showcase
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Revolutionary AI Innovations
              </span>
              <br />
              <span className="text-white">Transforming 2025</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Discover the most advanced AI technologies reshaping our world. 
              From quantum consciousness to neural interfaces, explore breakthrough 
              innovations delivering unprecedented results.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-green-500 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-300">Quantum AI Processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-green-500 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-300">Neural Consciousness</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-green-500 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-300">10,000x Faster</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-green-500 rounded-full">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-gray-300">99.9% Accuracy</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/ai-innovation-showcase-2025"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Innovations
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/ai-innovation-showcase-2025/quantum-ai"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Quantum AI Details
                <CpuChipIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-800/30 to-blue-800/30 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <CpuChipIcon className="h-8 w-8 text-white" />
              </div>
              
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>

              {/* Main Content Card */}
              <div className="pt-8 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Innovation Highlights
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Quantum Processing</span>
                      <span className="text-green-400 font-bold">10,000x</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full w-full animate-pulse" />
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">Neural Accuracy</span>
                      <span className="text-green-400 font-bold">99.9%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full w-full animate-pulse delay-500" />
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">ROI Improvement</span>
                      <span className="text-green-400 font-bold">2500%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-yellow-500 h-2 rounded-full w-full animate-pulse delay-1000" />
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <span className="text-purple-300 text-sm">
                    Join 10,000+ companies already transforming with AI
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-bounce" />
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full animate-bounce delay-1000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025InnovationShowcasePromotionBanner;