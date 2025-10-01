import React from 'react';

export default function April2026MegaBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 rounded-xl p-8 border border-purple-500/30 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">April 2026 Mega Breakthrough</h3>
      <p className="text-xl text-gray-300 mb-6">
        Discover the revolutionary AI breakthrough that's changing everything.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="/blog/ai-2026-april-revolutionary-breakthrough" 
          className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
        >
          Get Free Consultation
        </a>
      </div>
    </div>
  );
}