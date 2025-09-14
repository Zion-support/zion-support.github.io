import React from 'react';
import Link from 'next/link';

export default function AI2025AdvancedAutomationPromotionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW: AI 2025 ADVANCED AUTOMATION</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Future of AI Automation is Here
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience next-generation AI automation solutions that revolutionize how businesses operate. 
            Our 2025 advanced automation platform delivers unprecedented efficiency, intelligence, and scalability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/ai-2025-advanced-automation"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Advanced Automation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
          
          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">Neural Process Automation</h3>
              <p className="text-sm opacity-90">
                Advanced neural networks that learn and adapt to your business processes
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Real-time Decision Making</h3>
              <p className="text-sm opacity-90">
                AI systems that make intelligent decisions in real-time
              </p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg font-semibold mb-2">Self-Healing Systems</h3>
              <p className="text-sm opacity-90">
                Automated systems that detect and resolve issues independently
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}