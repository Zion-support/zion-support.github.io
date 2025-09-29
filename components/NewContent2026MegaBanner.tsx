import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-semibold">
              🚀 NEW 2026 MEGA CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link href="/blog/ai-innovation-2026-comprehensive-guide" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-200 transition-colors">
                  AI Innovation Guide
                </h3>
                <p className="text-sm opacity-80 mb-3">
                  Complete guide to next-generation AI technologies
                </p>
                <div className="flex justify-center gap-4 text-xs">
                  <span className="bg-green-500 px-2 py-1 rounded-full">NEW</span>
                  <span>25 min read</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-retail-transformation-2026-mega-success" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-200 transition-colors">
                  $1.2B Retail Success
                </h3>
                <p className="text-sm opacity-80 mb-3">
                  Fortune 500 retail transformation case study
                </p>
                <div className="flex justify-center gap-4 text-xs">
                  <span className="bg-yellow-500 px-2 py-1 rounded-full">FEATURED</span>
                  <span>18 min read</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-brain-computer-interfaces-2026" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-200 transition-colors">
                  Neural Interfaces
                </h3>
                <p className="text-sm opacity-80 mb-3">
                  Brain-computer interface technology deep dive
                </p>
                <div className="flex justify-center gap-4 text-xs">
                  <span className="bg-purple-500 px-2 py-1 rounded-full">TECH</span>
                  <span>15 min read</span>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-quantum-finance-transformation-2026" className="group">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-200 transition-colors">
                  Quantum Finance
                </h3>
                <p className="text-sm opacity-80 mb-3">
                  $500M quantum AI finance transformation
                </p>
                <div className="flex justify-center gap-4 text-xs">
                  <span className="bg-blue-500 px-2 py-1 rounded-full">QUANTUM</span>
                  <span>12 min read</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">150+</div>
            <div className="text-sm opacity-80">Total Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">25</div>
            <div className="text-sm opacity-80">New 2026 Content</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">$5B+</div>
            <div className="text-sm opacity-80">ROI Documented</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">95%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            📚 Read Latest Articles
          </Link>
          <Link
            href="/case-studies"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
          >
            🏆 View Success Stories
          </Link>
          <Link
            href="/content-hub"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
          >
            🎯 Explore Content Hub
          </Link>
        </div>
      </div>
    </div>
  );
}