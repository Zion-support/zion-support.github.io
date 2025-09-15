import React from 'react';
import Link from 'next/link';

export default function UltimateInnovation2025Banner() {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill="%23ffffff" fill-opacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-pink-400 text-black rounded-full px-6 py-2 mb-6 font-semibold">
            <span className="mr-2">🚀</span>
            ULTIMATE INNOVATION 2025
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            AI 2025 Ultimate Innovation
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience revolutionary breakthroughs in artificial intelligence that are reshaping the future of businesstechnologyand human potential.
          </p>
          
          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Neural Architecture Revolution</h3>
              <p className="text-sm opacity-80">1000x faster processing with advanced neural networks</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-2">Quantum AI Integration</h3>
              <p className="text-sm opacity-80">Revolutionary quantum computing integration</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-2">Autonomous Business Systems</h3>
              <p className="text-sm opacity-80">Self-managing processes with unprecedented efficiency</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2025-ultimate-innovation"
              className="bg-gradient-to-r from-yellow-400 to-pink-400 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-300 hover:to-pink-300 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Innovation →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
          
          {/* Success Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-1">5000%</div>
              <div className="text-sm opacity-80">ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">99.9%</div>
              <div className="text-sm opacity-80">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-1">24/7</div>
              <div className="text-sm opacity-80">Autonomous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-1">10x</div>
              <div className="text-sm opacity-80">Faster Processing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}