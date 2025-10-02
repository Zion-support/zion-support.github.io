import React from 'react';
import { Zap, Cpu, Network, ArrowRight } from 'lucide-react';

export default function March2026EdgeAIRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M60 0c33.137 0 60 26.863 60 60s-26.863 60-60 60S0 93.137 0 60 26.863 0 60 0zm0 20c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 10c-16.569 0-30 13.431-30 30s13.431 30 30 30 30-13.431 30-30-13.431-30-30-30zm0 10c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Header Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-600/20 border border-orange-400/30 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">⚡ BREAKING: MARCH 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Edge AI Revolution
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Sub-Millisecond Intelligence at Scale Across 10,000+ Devices
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-orange-400 mb-2">&lt;1ms</div>
              <div className="text-sm text-gray-300">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Cpu className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">99.99%</div>
              <div className="text-sm text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Network className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">10,000+</div>
              <div className="text-sm text-gray-300">Concurrent Devices</div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-8">
            <p className="text-lg text-gray-200 mb-6">
              The Edge AI Revolution represents a fundamental shift from cloud-centric to distributed intelligence. 
              By bringing AI processing to the edge of networks, organizations achieve unprecedented speed, reliability, and efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Neural Edge Processors</h3>
                  <p className="text-sm text-gray-300">Specialized AI chips optimized for edge computing environments</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Distributed Learning</h3>
                  <p className="text-sm text-gray-300">AI models that learn and adapt across edge devices</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Federated Intelligence</h3>
                  <p className="text-sm text-gray-300">Collaborative AI that shares insights without sharing data</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Real-Time Inference</h3>
                  <p className="text-sm text-gray-300">Instant AI decision-making at the point of data generation</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog/ai-2026-march-edge-ai-revolution"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Read Full Guide
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 transition-all duration-200 backdrop-blur-sm"
            >
              Start Edge AI Pilot
            </a>
          </div>

          {/* Success Story */}
          <div className="mt-12 bg-gradient-to-r from-green-600/20 to-orange-600/20 rounded-2xl p-6 border border-green-400/30">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Global Manufacturing Success</h3>
            <p className="text-gray-300">
              Achieved <span className="text-green-400 font-semibold">99.7% reduction in equipment downtime</span> and 
              <span className="text-orange-400 font-semibold"> $340M annual savings</span> through predictive maintenance with edge AI across 500+ facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}