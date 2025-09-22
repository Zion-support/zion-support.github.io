import React from 'react';
import Link from 'next/link';

export default function AI20252026TrendsBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="inline-flex items-center bg-purple-500/20 rounded-full px-4 py-2 mb-3">
                <span className="text-sm font-semibold text-purple-300">🚀 ULTIMATE GUIDE</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                AI 2025-2026: Ultimate Business Transformation Guide
              </h2>
              <p className="text-gray-300 text-lg mb-4 max-w-2xl">
                Discover the revolutionary AI trends and technologies that will reshape industries in 2025-2026. 
                Expert insights on quantum AI, autonomous systems, and enterprise automation.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Quantum AI Revolution
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Autonomous Systems
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Neural Interfaces
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link 
                href="/ai-2025-2026-ultimate-transformation"
                className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read the Guide
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}