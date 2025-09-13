import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimatePromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4 animate-pulse">
            🚀 NEW BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI 2025 Ultimate Content Revolution
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Discover the most revolutionary AI content ever created. Experience breakthrough technologies, 
            quantum computing solutions, and transcendent intelligence that delivers infinite ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/ai-2025-ultimate-automation-revolution" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              AI 2025 Automation Revolution
            </Link>
            <Link 
              href="/blog/ai-2026-quantum-neural-breakthrough" 
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              AI 2026 Quantum Breakthrough
            </Link>
            <Link 
              href="/blog/ai-2030-transcendent-intelligence" 
              className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              AI 2030 Transcendent Intelligence
            </Link>
          </div>
          <div className="mt-6 text-sm opacity-90">
            <span className="font-semibold">Featured:</span> 5,000% ROI • 15,000% ROI • ∞ ROI
          </div>
        </div>
      </div>
    </div>
  );
}