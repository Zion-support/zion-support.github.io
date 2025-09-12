"use client";
import React from 'react';
import Link from 'next/link';

export default function UltraContentPromotionBanner2026() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-15 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-white opacity-20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-bold">🚀 MEGA CONTENT DROP 2026</span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🎯 50+ Revolutionary AI Resources
            <br />
            <span className="text-yellow-300">Just Released!</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-5xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI insights, case studies, and implementation guides. 
            From quantum machine learning to neural architecture breakthroughs, everything you need to dominate AI in 2026.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 text-lg shadow-2xl transform hover:scale-105"
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/resources/ai-implementation-master-guide-2026"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              📚 Download Master Guide
            </Link>
          </div>
          
          {/* Featured content preview grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Link href="/blog/ai-2025-neural-architecture-revolution" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-3">🧠</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                  Neural Architecture Revolution
                </h3>
                <p className="text-sm opacity-90">
                  Next-gen AI systems transforming industries
                </p>
                <div className="mt-3 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full inline-block font-semibold">
                  NEW
                </div>
              </div>
            </Link>
            
            <Link href="/blog/ai-2025-quantum-machine-learning" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-3">⚛️</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                  Quantum Machine Learning
                </h3>
                <p className="text-sm opacity-90">
                  The next frontier in AI computing
                </p>
                <div className="mt-3 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full inline-block font-semibold">
                  BREAKTHROUGH
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-2025-fintech-transformation-breakthrough" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                  $2.3B Fintech Success
                </h3>
                <p className="text-sm opacity-90">
                  Real-world transformation results
                </p>
                <div className="mt-3 text-xs bg-yellow-400 text-black px-2 py-1 rounded-full inline-block font-semibold">
                  CASE STUDY
                </div>
              </div>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">50+</div>
              <div className="text-sm opacity-80">New Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">25+</div>
              <div className="text-sm opacity-80">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">15+</div>
              <div className="text-sm opacity-80">Implementation Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">10+</div>
              <div className="text-sm opacity-80">Expert Interviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}