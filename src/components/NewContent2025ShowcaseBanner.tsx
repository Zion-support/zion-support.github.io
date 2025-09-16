import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function NewContent2025ShowcaseBanner() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-white">🌟 NEW CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Content 2025
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore cutting-edge AI technologies, quantum computing breakthroughs, and neural interface innovations 
            that will transform the future of business and human-computer interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI 2025 Advanced Automation */}
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI 2025 Advanced Automation</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary AI automation technologies that deliver 1000% ROI with advanced neural networks 
              and autonomous business systems.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span className="text-green-400">✓</span>
                <span>1000% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span className="text-green-400">✓</span>
                <span>95% Process Automation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span className="text-green-400">✓</span>
                <span>24/7 Autonomous Operation</span>
              </div>
            </div>
            <a
              href="/ai-2025-advanced-automation"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 inline-block"
            >
              Explore Now
            </a>
          </div>

          {/* Quantum AI 2026 Revolution */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm p-8 rounded-xl border border-indigo-500/30">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum AI 2026 Revolution</h3>
            <p className="text-gray-300 mb-6">
              Experience the future of computing with quantum AI technologies, neural interfaces, 
              and synthetic intelligence that will reshape the world.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span className="text-cyan-400">✓</span>
                <span>1000x Computing Power</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span className="text-cyan-400">✓</span>
                <span>99.9% Problem Solving Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span className="text-cyan-400">✓</span>
                <span>$10T Economic Impact</span>
              </div>
            </div>
            <a
              href="/quantum-ai-2026-revolution"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 inline-block"
            >
              Explore Now
            </a>
          </div>

          {/* Neural Interface 2025 Breakthrough */}
          <div className="bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 backdrop-blur-sm p-8 rounded-xl border border-violet-500/30">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Neural Interface 2025</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer interaction with revolutionary neural interfaces. 
              Control devices with your mind and enhance cognitive abilities.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span className="text-violet-400">✓</span>
                <span>99.9% Accuracy Rate</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span className="text-violet-400">✓</span>
                <span>5ms Response Time</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span className="text-violet-400">✓</span>
                <span>24h Battery Life</span>
              </div>
            </div>
            <a
              href="/neural-interface-2025-breakthrough"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-fuchsia-700 transition-all transform hover:scale-105 inline-block"
            >
              Explore Now
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            Get Started with AI Transformation
          </a>
        </div>
      </div>
    </section>
  );
}