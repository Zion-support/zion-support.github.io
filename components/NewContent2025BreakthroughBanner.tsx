import React from 'react';
import Link from 'next/link';

export default function NewContent2025BreakthroughBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 BREAKTHROUGH CONTENT JUST RELEASED</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI 2025 Content Just Dropped!
          </h2>
          
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover our latest breakthrough content: Advanced Automation (500% gains), Quantum Computing Revolution, 
            and Global Retail Transformation (800% growth). Everything you need for AI success in 2025.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link
              href="/blog/ai-2025-advanced-automation-breakthrough"
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-30 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
              <div className="font-semibold text-lg mb-2">Advanced AI Automation</div>
              <div className="text-sm opacity-80 mb-3">500% productivity gains achieved</div>
              <div className="flex items-center text-xs opacity-75">
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-red-500 text-white px-2 py-1 rounded">BREAKTHROUGH</span>
              </div>
            </Link>
            
            <Link
              href="/blog/ai-2025-quantum-computing-revolution"
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-30 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚛️</div>
              <div className="font-semibold text-lg mb-2">Quantum Computing Revolution</div>
              <div className="text-sm opacity-80 mb-3">1000x speed improvements with quantum AI</div>
              <div className="flex items-center text-xs opacity-75">
                <span>20 min read</span>
                <span className="mx-2">•</span>
                <span className="bg-purple-500 text-white px-2 py-1 rounded">REVOLUTIONARY</span>
              </div>
            </Link>
            
            <Link
              href="/case-studies/ai-2025-global-retail-transformation-breakthrough"
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-30 transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛒</div>
              <div className="font-semibold text-lg mb-2">Retail Transformation</div>
              <div className="text-sm opacity-80 mb-3">800% revenue growth case study</div>
              <div className="flex items-center text-xs opacity-75">
                <span>Case Study</span>
                <span className="mx-2">•</span>
                <span className="bg-green-500 text-white px-2 py-1 rounded">SUCCESS</span>
              </div>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🔮 Explore All Breakthrough Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}