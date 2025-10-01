import React from 'react';

export default function May2026ContentAdvertisingBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              May 2026 Content Advertising
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover the latest revolutionary content and breakthroughs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/blog/ai-2026-may-revolutionary-breakthrough"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Explore Content →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}