import React from 'react';
import Link from 'next/link';

export default function NeuralSuperintelligence2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Revolutionary AI Breakthrough
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Neural Superintelligence
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                2026 Revolution
              </span>
            </h2>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              The most significant AI breakthrough in history: Neural Superintelligence systems 
              delivering <strong>1000x performance gains</strong>, <strong>99.9% accuracy</strong>, 
              and <strong>$2B+ in enterprise savings</strong>.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-300">1000x</div>
                <div className="text-sm opacity-80">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pink-300">99.9%</div>
                <div className="text-sm opacity-80">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-300">$2B+</div>
                <div className="text-sm opacity-80">Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-300">50ms</div>
                <div className="text-sm opacity-80">Response</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-2026-neural-superintelligence"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl text-center"
              >
                Read the Breakthrough
              </Link>
              <Link
                href="/case-studies/neural-superintelligence-mega-success-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors text-center"
              >
                View Success Story
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-6xl mb-4">🧠⚡</div>
                <h3 className="text-2xl font-bold mb-4">Neural Superintelligence</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Quantum-Enhanced Neural Networks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Cognitive Superintelligence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Autonomous Enterprise Orchestration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>Real-time Decision Making</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
}