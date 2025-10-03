// import React from 'react';
import { Cpu, Zap, Database, Rocket } from 'lucide-react';

export default function October2025NeuralProcessingBreakthroughBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-cyan-900 via-teal-900 to-emerald-900 py-16 px-4 sm:px-6 lg:px-8 border-y-4 border-cyan-400">
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="white" />
              <circle cx="90" cy="90" r="2" fill="white" />
              <path d="M10,10 L90,10 L90,90" stroke="white" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Cpu className="w-12 h-12 text-cyan-300 animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">
              ⚡ BREAKTHROUGH: OCTOBER 2025 ⚡
            </span>
            <Zap className="w-12 h-12 text-yellow-300 animate-pulse" />
          </div>
          
          <h2 className="text-6xl font-extrabold text-white mb-4 drop-shadow-2xl">
            Neural Processing Unit Revolution
          </h2>
          
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border-2 border-yellow-400 rounded-full px-6 py-3 mb-6">
            <Rocket className="w-6 h-6 text-yellow-300 animate-bounce" />
            <span className="text-2xl font-bold text-yellow-300">INDUSTRY-FIRST TECHNOLOGY</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-400 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="bg-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-cyan-300 mb-2">100,000x</h3>
              <p className="text-white text-lg font-semibold">Faster Processing</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-emerald-400 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="bg-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-emerald-300 mb-2">99.99%</h3>
              <p className="text-white text-lg font-semibold">Accuracy Rate</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-400 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-yellow-300 mb-2">$12.4B</h3>
              <p className="text-white text-lg font-semibold">Market Value</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-pink-400 hover:bg-white/20 transition-all duration-300">
            <div className="text-center">
              <div className="bg-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-pink-300 mb-2">4,750%</h3>
              <p className="text-white text-lg font-semibold">ROI Achieved</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-cyan-400 mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Revolutionary Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500 rounded-lg p-2 flex-shrink-0">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-cyan-300 mb-2">Quantum-Neural Hybrid Architecture</h4>
                <p className="text-cyan-100 text-lg">Combines quantum computing with neural processing for unprecedented computational power</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-500 rounded-lg p-2 flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-emerald-300 mb-2">Real-Time Adaptive Learning</h4>
                <p className="text-emerald-100 text-lg">Self-optimizing algorithms that improve performance continuously without human input</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-lg p-2 flex-shrink-0">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-yellow-300 mb-2">Petabyte-Scale Processing</h4>
                <p className="text-yellow-100 text-lg">Process massive datasets in milliseconds with distributed neural networks</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-pink-500 rounded-lg p-2 flex-shrink-0">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-pink-300 mb-2">Edge-to-Cloud Integration</h4>
                <p className="text-pink-100 text-lg">Seamless deployment from edge devices to cloud infrastructure with zero latency</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/services/neural-processing-units" 
              className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/30"
            >
              🚀 Discover Technology
            </a>
            <a 
              href="/case-studies/neural-processing" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/30"
            >
              💎 $12.4B Case Study
            </a>
          </div>
          
          <p className="mt-8 text-cyan-200 text-xl font-semibold animate-pulse">
            🎯 Early Adopter Program: 60% Discount on First Year - Apply Now!
          </p>
        </div>
      </div>
    </div>
  );
}
