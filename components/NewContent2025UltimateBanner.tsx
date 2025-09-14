import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🚀 NEW 2025 CONTENT RELEASE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Revolutionary AI Content Collection
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest breakthroughs in AI, Quantum Computing, and Autonomous Business Systems. 
            Complete guides, case studies, and implementation strategies for 2025.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">AI Enterprise Transformation</h3>
              <p className="text-sm opacity-90">Complete guide to AI implementation with 340% ROI strategies</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum Computing Breakthrough</h3>
              <p className="text-sm opacity-90">Revolutionary quantum-AI applications and implementation</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Business Systems</h3>
              <p className="text-sm opacity-90">Self-managing organizations and automated operations</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025UltimateBanner;