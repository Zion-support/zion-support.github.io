import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Brain, Globe, Rocket, TrendingUp, CheckCircle } from 'lucide-react';

export default function UltimateContentPromotionBanner2026() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-purple-500/20 rounded-xl p-8 mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Revolutionary Content 2026
              </h2>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              Discover the most groundbreaking AI innovations, quantum computing breakthroughs, and neural interface technologies that will reshape our future.
            </p>
            
            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>AI Innovation Showcase 2025-2026</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Quantum Computing Solutions</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Neural Interface Revolution</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Autonomous Systems 2026</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/ai-innovation-showcase-2025-2026"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/quantum-computing-solutions-2026-ultimate"
                className="inline-flex items-center px-6 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Quantum Solutions
                <Zap className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Content Preview Cards */}
          <div className="flex-shrink-0 lg:ml-8">
            <div className="grid grid-cols-2 gap-4">
              {/* AI Innovation Card */}
              <Link 
                href="/ai-innovation-showcase-2025-2026"
                className="group bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-2">
                  <Brain className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-sm font-semibold text-white">AI Innovation</span>
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-300">
                  Revolutionary breakthroughs
                </p>
              </Link>

              {/* Quantum Computing Card */}
              <Link 
                href="/quantum-computing-solutions-2026-ultimate"
                className="group bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-2">
                  <Zap className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-sm font-semibold text-white">Quantum Computing</span>
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-300">
                  1000+ qubit processors
                </p>
              </Link>

              {/* Neural Interface Card */}
              <Link 
                href="/neural-interface-revolution-2026"
                className="group bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-2">
                  <Globe className="h-5 w-5 text-purple-400 mr-2" />
                  <span className="text-sm font-semibold text-white">Neural Interface</span>
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-300">
                  Brain-computer interface
                </p>
              </Link>

              {/* Future Tech Card */}
              <Link 
                href="/ai-2026-ultimate-breakthrough"
                className="group bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-sm rounded-lg p-4 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-2">
                  <Rocket className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm font-semibold text-white">Future Tech</span>
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-300">
                  Next-gen solutions
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 pt-6 border-t border-purple-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">50+</div>
              <div className="text-sm text-gray-400">New Content Pages</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">1000+</div>
              <div className="text-sm text-gray-400">Quantum Qubits</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-gray-400">Neural Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">2026</div>
              <div className="text-sm text-gray-400">Future Ready</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}