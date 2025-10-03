import React from 'react';
import { Link } from 'react-router-dom';

const AI2026BreakthroughBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white text-sm font-medium mb-3">
              🔬 BREAKTHROUGH RESEARCH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              AI 2026 Enterprise Breakthrough
            </h2>
            <p className="text-indigo-100 text-lg mb-4 max-w-2xl">
              Discover the next frontier of business transformation with autonomous systems, quantum computing, and advanced AI automation delivering unprecedented ROI.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="bg-white/20 rounded-lg px-3 py-2 text-center">
                <div className="text-indigo-300 text-sm font-medium">300-500%</div>
                <div className="text-indigo-200 text-xs">ROI Improvement</div>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-2 text-center">
                <div className="text-purple-300 text-sm font-medium">80%</div>
                <div className="text-purple-200 text-xs">Operations Automated</div>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-2 text-center">
                <div className="text-pink-300 text-sm font-medium">90%</div>
                <div className="text-pink-200 text-xs">Faster Decisions</div>
              </div>
              <div className="bg-white/20 rounded-lg px-3 py-2 text-center">
                <div className="text-blue-300 text-sm font-medium">95%</div>
                <div className="text-blue-200 text-xs">Error Reduction</div>
              </div>
            </div>
            <Link 
              href="/blog/ai-2026-enterprise-breakthrough" 
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Explore AI 2026 Breakthrough
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center w-32 h-32 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full">
            <div className="text-4xl">🚀</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2026BreakthroughBanner;