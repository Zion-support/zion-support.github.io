import React from 'react';
import Link from 'next/link';

export default function Latest2026ContentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -skew-x-12"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl">🚀</span>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                🆕 Just Released: 2026 AI Content
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary AI Insights for 2026
            </h2>
            
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Discover breakthrough strategies for autonomous infrastructure, quantum-AI computing, 
              and enterprise transformation that delivered $25M+ ROI.
            </p>

            {/* Content Preview Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="text-2xl mb-3">🏗️</div>
                <h3 className="font-semibold mb-2">Autonomous Infrastructure</h3>
                <p className="text-sm opacity-80 mb-3">99.9% uptime with self-healing systems</p>
                <div className="text-xs">
                  <span className="bg-white bg-opacity-20 px-2 py-1 rounded">$15M+ Savings</span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="text-2xl mb-3">⚛️</div>
                <h3 className="font-semibold mb-2">Quantum-AI Computing</h3>
                <p className="text-sm opacity-80 mb-3">1000x faster optimization breakthrough</p>
                <div className="text-xs">
                  <span className="bg-white bg-opacity-20 px-2 py-1 rounded">$50M+ ROI</span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-semibold mb-2">Enterprise Transformation</h3>
                <p className="text-sm opacity-80 mb-3">99% automation case study</p>
                <div className="text-xs">
                  <span className="bg-white bg-opacity-20 px-2 py-1 rounded">$25M ROI</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog/ai-autonomous-infrastructure-2026"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Read Infrastructure Guide
              </Link>
              <Link
                href="/blog/ai-quantum-hybrid-computing-2026"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Quantum-AI
              </Link>
              <Link
                href="/case-studies/ai-autonomous-enterprise-transformation-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Case Study
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-8 pt-6 border-t border-white border-opacity-20">
              <div className="flex items-center justify-center gap-8 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <span>⭐</span>
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>👥</span>
                  <span>100K+ Readers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🏆</span>
                  <span>Industry Leading</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}