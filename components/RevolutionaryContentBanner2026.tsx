import React from 'react';
import Link from 'next/link';

const RevolutionaryContentBanner2026: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚡ REVOLUTIONARY 2026 CONTENT</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            🚀 The Future of Technology
            <br />
            <span className="text-yellow-300">Starts Here</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking AI services, quantum computing solutions, and comprehensive implementation guides 
            that will revolutionize how you do business in 2025 and beyond.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">AI Services 2025</h3>
              <p className="text-sm opacity-80">Comprehensive AI solutions for automation, analytics, and cybersecurity</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Quantum Computing</h3>
              <p className="text-sm opacity-80">Revolutionary quantum solutions for finance, healthcare, and research</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-lg font-bold mb-2">Implementation Guide</h3>
              <p className="text-sm opacity-80">Step-by-step guide to successful AI adoption in your organization</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-services-2025"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🎯 Explore AI Services
            </Link>
            <Link
              href="/quantum-computing-solutions"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ⚛️ Discover Quantum
            </Link>
            <Link
              href="/ai-implementation-guide-2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              📖 Read Guide
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">25+</div>
              <div className="text-sm opacity-80">New AI Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">6</div>
              <div className="text-sm opacity-80">Quantum Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">100%</div>
              <div className="text-sm opacity-80">Implementation Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">24/7</div>
              <div className="text-sm opacity-80">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentBanner2026;