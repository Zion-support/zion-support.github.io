import React from 'react';
import Link from 'next/link';

export default function AIInnovation2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="font-bold text-lg">NEW 2026 Roadmap</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30"></div>
            <div className="text-sm md:text-base">
              <span className="font-semibold">AI Innovation 2026:</span> Discover the future of enterprise AI with autonomous operations, quantum computing, and edge intelligence
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/blog/ai-innovation-2026-roadmap"
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Read Roadmap
            </Link>
            <Link
              href="/case-studies/ai-innovation-enterprise-2026"
              className="bg-white text-purple-700 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}