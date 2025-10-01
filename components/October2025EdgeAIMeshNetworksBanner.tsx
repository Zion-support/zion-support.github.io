import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025EdgeAIMeshNetworksBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 py-16">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-semibold mb-4">
            🌐 REVOLUTIONARY: OCTOBER 1, 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Edge AI Mesh Networks: Distributed Intelligence Revolution
          </h2>
          <p className="text-xl text-orange-200 mb-6 max-w-3xl mx-auto">
            Sub-millisecond latency • 99.99% Uptime • $6.2B Enterprise Success Story
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">&lt;1ms</div>
              <div className="text-sm text-orange-200">Latency</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">99.99%</div>
              <div className="text-sm text-orange-200">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">$6.2B</div>
              <div className="text-sm text-orange-200">Value Created</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">4,200%</div>
              <div className="text-sm text-orange-200">ROI</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/blog/ai-2025-october-edge-ai-mesh-networks-revolution"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Discover Edge AI Mesh
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Request Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
