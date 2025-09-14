import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateInnovationShowcaseBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW: AI 2025 ULTIMATE INNOVATION SHOWCASE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Revolutionary AI Innovations
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore the most groundbreaking AI technologies of 2025. From neural consciousness 
            to quantum AI fusion, discover solutions that are transforming industries worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/ai-2025-ultimate-innovation-showcase"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Innovations
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">Neural Consciousness</h3>
              <p className="text-sm opacity-90">Self-aware AI systems with emotional intelligence</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Quantum AI Fusion</h3>
              <p className="text-sm opacity-90">Revolutionary quantum computing integration</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold mb-2">Autonomous Systems</h3>
              <p className="text-sm opacity-90">Self-managing AI ecosystems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}