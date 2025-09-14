import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughBanner() {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 AI 2025 ULTIMATE BREAKTHROUGH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            The Future is Here
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most revolutionary AI technologies of 2025. From quantum computing to neural interfaces, 
            discover the breakthroughs that will transform your business and redefine what's possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
            <p className="text-gray-300 mb-6">
              Autonomous systems that work 24/7, learn continuously, and deliver results that exceed human capabilities.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                5000% ROI increase
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                99.9% uptime
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                10x faster processing
              </div>
            </div>
            <Link
              href="/ai-2025-ultimate-automation-revolution"
              className="text-yellow-400 font-semibold hover:text-yellow-300"
            >
              Explore AI Revolution →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
            <div className="text-5xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum AI</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum computing combined with AI for computational power that solves problems in seconds instead of millennia.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                10^15 operations/second
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                1000x faster than classical
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                Infinite parallel processes
              </div>
            </div>
            <Link
              href="/quantum-ai-2026-breakthrough"
              className="text-cyan-400 font-semibold hover:text-cyan-300"
            >
              Discover Quantum AI →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Neural Interfaces</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer interfaces that allow you to control technology with your thoughts and enhance cognitive abilities.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                99.7% accuracy rate
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                &lt;10ms response time
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                1000+ neural channels
              </div>
            </div>
            <Link
              href="/neural-interface-revolution-2025"
              className="text-green-400 font-semibold hover:text-green-300"
            >
              Experience Neural Tech →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-pink-400 rounded-xl p-8 text-black">
            <h3 className="text-3xl font-bold mb-4">Don't Get Left Behind</h3>
            <p className="text-lg mb-6">
              Join the AI revolution and transform your business with technologies that were once science fiction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}