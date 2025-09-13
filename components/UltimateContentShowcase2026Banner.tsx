import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2026Banner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              🚀 Ultimate Content Showcase 2026
            </h2>
            <p className="text-lg text-blue-100">
              Discover revolutionary AI content, breakthrough technologies, and transformative solutions
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/ultimate-content-showcase-2026"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Explore Showcase
            </Link>
            <Link 
              href="/ai-2025-ultimate-content-revolution"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              AI 2025 Revolution
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}