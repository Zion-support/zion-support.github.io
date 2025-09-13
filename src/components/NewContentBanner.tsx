import React from 'react';
import Link from 'next/link';

export default function NewContentBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">
              🚀 NEW: AI 2025 Autonomous Systems Revolution
            </h2>
            <p className="text-purple-100">
              Discover the breakthrough that delivers <strong>15,000% ROI</strong> with next-generation autonomous AI systems
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-next-generation-autonomous-systems-revolution"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
            >
              🤖 Read Blog Post
            </Link>
            <Link 
              href="/case-studies/ai-2025-autonomous-manufacturing-revolution-25000-roi"
              className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-400 transition-colors text-center border border-purple-300"
            >
              🏭 View Case Study
            </Link>
            <Link 
              href="/tools/ai-2025-autonomy-calculator"
              className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-400 transition-colors text-center border border-indigo-300"
            >
              🧮 Calculate ROI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}