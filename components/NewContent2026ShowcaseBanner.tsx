import React from 'react';
import Link from 'next/link';

const NewContent2026ShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-medium mb-3">
              🚀 NEW CONTENT 2026
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Revolutionary AI Content Now Live
            </h2>
            <p className="text-purple-100 text-lg mb-4 max-w-2xl">
              Discover breakthrough AI strategies, enterprise transformation guides, and success stories that are reshaping industries in 2026.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link 
                href="/blog/ai-2026-enterprise-breakthrough" 
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-sm"
              >
                AI 2026 Enterprise Guide
              </Link>
              <Link 
                href="/blog/ai-automation-2026-complete-guide" 
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-sm"
              >
                Automation Complete Guide
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center w-32 h-32 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full">
            <div className="text-4xl">🎯</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2026ShowcaseBanner;