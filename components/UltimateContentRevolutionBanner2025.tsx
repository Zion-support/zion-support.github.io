import React from 'react';
import Link from 'next/link';

export default function UltimateContentRevolutionBanner2025() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 mb-8">
            <span className="text-red-400 font-bold text-sm uppercase tracking-wide animate-pulse">
              🚀 REVOLUTIONARY BREAKTHROUGH
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Ultimate Content Revolution 2025
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most revolutionary AI content ever created. Discover breakthrough technologies, 
            <span className="text-yellow-400 font-bold"> 10,000% ROI case studies</span>, and transcendent intelligence 
            that will transform your business beyond imagination.
          </p>
          
          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">AI 2025 Breakthrough</h3>
              <p className="text-gray-300 text-sm mb-4">
                Revolutionary AI systems delivering 10,000% ROI through autonomous operations and transcendent intelligence.
              </p>
              <Link 
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
              >
                Explore Breakthrough →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">🌌</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">AI 2026 Revolutionary</h3>
              <p className="text-gray-300 text-sm mb-4">
                Quantum-neural fusion technology with consciousness integration delivering 15,000% ROI.
              </p>
              <Link 
                href="/ai-2026-breakthrough-revolutionary-content"
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
              >
                Discover Revolution →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 p-6 rounded-xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Quantum Breakthroughs</h3>
              <p className="text-gray-300 text-sm mb-4">
                Error-corrected quantum supremacy with infinite computational power and quantum internet.
              </p>
              <Link 
                href="/quantum-computing-breakthroughs-2030"
                className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors"
              >
                Enter Quantum Era →
              </Link>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-showcase"
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Content
            </Link>
            <Link 
              href="/case-studies"
              className="px-8 py-4 border-2 border-white/30 hover:border-white/60 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
            >
              View Success Stories
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400">10,000%</div>
              <div className="text-gray-400 text-sm">Guaranteed ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">99.9%</div>
              <div className="text-gray-400 text-sm">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">∞</div>
              <div className="text-gray-400 text-sm">Scalability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-gray-400 text-sm">Autonomous</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}