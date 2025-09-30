import React from 'react';
import Link from 'next/link';

export default function Ultimate2026ContentShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl p-8 mb-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          ⚡ Ultimate 2026 Content Showcase
        </h2>
        <p className="text-xl opacity-90 max-w-4xl mx-auto">
          The most comprehensive collection of cutting-edge AI technologies, breakthrough innovations, 
          and real-world success stories that are reshaping the future of business
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 text-center">
          <div className="text-5xl mb-4">🧠</div>
          <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
          <p className="text-sm opacity-90 mb-4">
            Brain-computer interfaces with 99.7% accuracy
          </p>
          <div className="text-xs opacity-75 mb-3">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full">FEATURED</span>
          </div>
          <Link 
            href="/blog/ai-neural-interfaces-2026"
            className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
          >
            Read More
          </Link>
        </div>
        
        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 text-center">
          <div className="text-5xl mb-4">🚀</div>
          <h3 className="text-lg font-bold mb-2">Space AI Tech</h3>
          <p className="text-sm opacity-90 mb-4">
            Autonomous satellites and space exploration AI
          </p>
          <div className="text-xs opacity-75 mb-3">
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full">HOT</span>
          </div>
          <Link 
            href="/blog/ai-space-tech-2026"
            className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
          >
            Explore
          </Link>
        </div>
        
        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 text-center">
          <div className="text-5xl mb-4">🔒</div>
          <h3 className="text-lg font-bold mb-2">Synthetic Data</h3>
          <p className="text-sm opacity-90 mb-4">
            Privacy-preserving AI training with 99.9% protection
          </p>
          <div className="text-xs opacity-75 mb-3">
            <span className="bg-purple-500 text-white px-2 py-1 rounded-full">NEW</span>
          </div>
          <Link 
            href="/blog/ai-synthetic-data-2026"
            className="inline-block bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
          >
            Learn More
          </Link>
        </div>
        
        <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 text-center">
          <div className="text-5xl mb-4">💰</div>
          <h3 className="text-lg font-bold mb-2">$150M ROI</h3>
          <p className="text-sm opacity-90 mb-4">
            Mega transformation success story
          </p>
          <div className="text-xs opacity-75 mb-3">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full">SUCCESS</span>
          </div>
          <Link 
            href="/case-studies/ai-mega-transformation-success-2026"
            className="inline-block bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
          >
            View Case Study
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <Link 
          href="/content-hub"
          className="inline-block bg-white text-gray-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          🎯 Explore Content Hub
        </Link>
        <Link 
          href="/case-studies"
          className="inline-block bg-white/20 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
        >
          📊 View All Case Studies
        </Link>
      </div>
    </div>
  );
}