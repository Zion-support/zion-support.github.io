import React from 'react';
import Link from 'next/link';

export default function AI2025NeuralInterfacesPromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🧠 NEW: AI 2025 NEURAL INTERFACES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Direct Brain-AI Communication
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the revolutionary neural interface technology that enables direct communication 
            between human brains and artificial intelligence systems. The future is now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/ai-2025-neural-interfaces"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Experience Neural AI
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Schedule a Demo
            </Link>
          </div>
          
          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">Non-Invasive BCI</h3>
              <p className="text-sm opacity-90">
                Advanced EEG-based neural interfaces that read brain signals without surgery
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Processing</h3>
              <p className="text-sm opacity-90">
                Ultra-low latency neural signal processing for real-time communication
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-lg font-semibold mb-2">AI Interpretation</h3>
              <p className="text-sm opacity-90">
                Advanced AI algorithms that interpret neural patterns and translate thoughts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}