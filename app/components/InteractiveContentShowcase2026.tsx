import React from 'react';

export default function InteractiveContentShowcase2026() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
      <h2 className="text-3xl font-bold mb-4">
        2026 Content Showcase
      </h2>
      <p className="text-xl mb-6 opacity-90">
        Explore our latest insights and innovations for 2026
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">AI Trends 2026</h3>
          <p className="opacity-90 mb-4">
            Discover the cutting-edge AI trends that will shape enterprise technology in 2026.
          </p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
            Explore Trends
          </button>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Innovation Hub</h3>
          <p className="opacity-90 mb-4">
            Access our latest research, whitepapers, and technical insights.
          </p>
          <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
            Visit Hub
          </button>
        </div>
      </div>
    </div>
  );
}