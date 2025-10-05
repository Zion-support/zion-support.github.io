import React from 'react';
import { ArrowRight, Cpu, Shield, TrendingUp, Zap } from 'lucide-react';

import ArrowRight from 'next/link';

import { ArrowRight, TrendingUp, Zap } from 'lucide-react';

const February2026RevolutionaryEdgeComputingBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            February 2026 Revolutionary Breakthrough
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Revolutionary Edge Computing
            <span className="block text-3xl md:text-5xl mt-2">
              February 2026 Breakthrough
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Transform your enterprise with quantum-enhanced edge computing, autonomous infrastructure, 
            and real-time AI processing that delivers $12B+ value creation
          </p>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Cpu className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Quantum-Enhanced Processing</h3>
              <p className="text-blue-100 text-sm">
                1000x faster processing with sub-millisecond latency for real-time operations
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Autonomous Infrastructure</h3>
              <p className="text-blue-100 text-sm">
                Self-healing systems with 99.9% uptime and 85% operational cost reduction
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-blue-100 text-sm">
                99.7% accuracy in predictive maintenance and real-time optimization
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <ArrowRight 
              href="/blog/ai-2026-february-revolutionary-edge-computing-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read the Full Article
              <ArrowRight className="w-5 h-5 ml-2" />
            </ArrowRight>
            
            <ArrowRight 
              href="/case-studies/ai-2026-february-global-tech-edge-computing-transformation-12-billion-success"
              className="inline-flex items-center px-8 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 transition-all duration-300"
            >
              View Success Story
            </ArrowRight>
            
            <ArrowRight 
              href="/services/ai-2026-february-revolutionary-edge-computing-consulting"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Consulting Services
            </ArrowRight>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-1">$12B+</div>
              <div className="text-sm text-blue-200">Value Creation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">99.9%</div>
              <div className="text-sm text-blue-200">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">85%</div>
              <div className="text-sm text-blue-200">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">1000x</div>
              <div className="text-sm text-blue-200">Performance Gain</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>
  );
};

export default February2026RevolutionaryEdgeComputingBanner;