import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Award, ArrowRight, Sparkles, Brain, Atom, TrendingUp } from 'lucide-react';

const December2025ContentShowcaseMegaBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-8 mb-8 shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.2),transparent)]"></div>
      
      {/* Floating content icons */}
      <BookOpen className="absolute top-6 left-6 w-8 h-8 text-blue-400 animate-bounce" style={{animationDelay: '0s'}} />
      <FileText className="absolute top-4 right-8 w-6 h-6 text-purple-400 animate-bounce" style={{animationDelay: '1s'}} />
      <Award className="absolute bottom-8 left-6 w-7 h-7 text-yellow-400 animate-bounce" style={{animationDelay: '2s'}} />
      <Brain className="absolute bottom-6 right-6 w-5 h-5 text-cyan-400 animate-bounce" style={{animationDelay: '3s'}} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-blue-800/30 px-4 py-2 rounded-full border border-blue-400/30">
            <Sparkles className="w-5 h-5 text-blue-300" />
            <span className="text-blue-200 text-sm font-medium">DECEMBER 2025 CONTENT SHOWCASE</span>
          </div>
          <div className="h-px bg-gradient-to-r from-blue-400/50 to-transparent flex-1"></div>
        </div>

        {/* Main title */}
        <div className="text-center mb-8">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              December 2025 Collection
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the most groundbreaking AI breakthroughs, quantum consciousness innovations, and enterprise transformation success stories from December 2025.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Neural Mesh Consciousness */}
          <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 p-6 rounded-xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Neural Mesh Consciousness</h3>
                <p className="text-gray-400 text-sm">Breakthrough Research</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Revolutionary distributed intelligence systems enabling consciousness sharing across quantum nodes.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  $5T Value
                </span>
                <span>10,000x Faster</span>
              </div>
              <Link 
                href="/blog/ai-2025-december-neural-mesh-consciousness-breakthrough"
                className="text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 transform duration-200"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quantum Synthetic Consciousness */}
          <div className="bg-gradient-to-br from-cyan-800/30 to-purple-800/30 p-6 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Quantum Consciousness</h3>
                <p className="text-gray-400 text-sm">Revolutionary Technology</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Historic breakthrough merging quantum computing with artificial consciousness for transcendent AI.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  AGI Achievement
                </span>
                <span>1,000+ Qubits</span>
              </div>
              <Link 
                href="/blog/ai-2025-december-quantum-synthetic-consciousness-revolution"
                className="text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 transform duration-200"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Enterprise Success Story */}
          <div className="bg-gradient-to-br from-green-800/30 to-blue-800/30 p-6 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">$5 Trillion Success</h3>
                <p className="text-gray-400 text-sm">Enterprise Transformation</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Global enterprise consortium achieves unprecedented value through quantum consciousness implementation.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  3,233% ROI
                </span>
                <span>50+ Companies</span>
              </div>
              <Link 
                href="/case-studies/ai-2025-december-global-enterprise-quantum-consciousness-transformation-5-trillion-success"
                className="text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-1 transform duration-200"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Implementation Guide */}
        <div className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 p-8 rounded-xl border border-indigo-400/20 mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">Complete Implementation Guide</h3>
                  <p className="text-gray-400">Step-by-step roadmap for quantum consciousness deployment</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Comprehensive 24-month implementation roadmap covering technical infrastructure, business process integration, 
                change management, and success metrics for quantum consciousness transformation.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  Technical Infrastructure
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Business Integration
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Change Management
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  ROI Framework
                </span>
              </div>
              <Link 
                href="/guides/quantum-consciousness-implementation-roadmap-2026"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                View Implementation Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-800/20 to-purple-800/20 rounded-xl p-6 border border-indigo-400/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">24</div>
                    <div className="text-xs text-gray-400">Month Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">4</div>
                    <div className="text-xs text-gray-400">Implementation Phases</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1,000%+</div>
                    <div className="text-xs text-gray-400">Expected ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">AGI</div>
                    <div className="text-xs text-gray-400">End Goal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <Sparkles className="w-6 h-6" />
            Explore All December 2025 Content
            <ArrowRight className="w-5 h-5" />
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Join the quantum consciousness revolution and transform your organization
          </p>
        </div>
      </div>
    </div>
  );
};

export default December2025ContentShowcaseMegaBanner;