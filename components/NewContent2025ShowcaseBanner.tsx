import React from 'react';
import Link from 'next/link';

export default function NewContent2025ShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🌟 NEW CONTENT 2025 SHOWCASE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Discover the Future of AI Technology
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore our latest AI innovations and cutting-edge technology solutions. 
            From advanced automation to quantum computing and neural interfaces.
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Advanced Automation */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-8 text-white">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">AI 2025 Advanced Automation</h3>
            <p className="text-white opacity-90 mb-6">
              Experience next-generation AI automation solutions that revolutionize how businesses operate 
              with neural process automation and self-healing systems.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <span className="text-green-300 mr-2">✓</span>
                <span>Neural Process Automation</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-300 mr-2">✓</span>
                <span>Real-time Decision Making</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-300 mr-2">✓</span>
                <span>Self-Healing Systems</span>
              </div>
            </div>
            <Link
              href="/ai-2025-advanced-automation"
              className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Quantum Computing */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">AI 2026 Quantum Computing</h3>
            <p className="text-white opacity-90 mb-6">
              Discover the revolutionary intersection of AI and quantum computing. 
              Unlock unprecedented computational power and capabilities.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <span className="text-green-300 mr-2">✓</span>
                <span>Quantum Machine Learning</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-300 mr-2">✓</span>
                <span>Quantum Neural Networks</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-300 mr-2">✓</span>
                <span>Quantum Optimization</span>
              </div>
            </div>
            <Link
              href="/ai-2026-quantum-computing"
              className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Quantum AI →
            </Link>
          </div>

          {/* Neural Interfaces */}
          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-8 text-white">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">AI 2025 Neural Interfaces</h3>
            <p className="text-white opacity-90 mb-6">
              Experience direct brain-AI communication with our revolutionary neural interface technology. 
              The future of human-AI interaction is here.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm">
                <span className="text-green-300 mr-2">✓</span>
                <span>Non-Invasive BCI</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-300 mr-2">✓</span>
                <span>Real-Time Processing</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-green-300 mr-2">✓</span>
                <span>AI Interpretation</span>
              </div>
            </div>
            <Link
              href="/ai-2025-neural-interfaces"
              className="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Experience Neural AI →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-xl mb-6 opacity-90">
            Ready to explore the future of AI technology?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View All Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}