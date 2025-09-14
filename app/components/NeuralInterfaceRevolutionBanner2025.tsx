import React from 'react';
import Link from 'next/link';

const NeuralInterfaceRevolutionBanner2025: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-6 py-3 mb-8 shadow-lg">
            <span className="text-sm font-bold">🧠 NEW 2025 BREAKTHROUGH</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Neural Interface
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Revolution 2025
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how neural interfaces are revolutionizing enterprise operations in 2025. 
            Complete guide to implementation, benefits, and future predictions.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">1000% Faster Decisions</h3>
              <p className="text-sm opacity-80">Direct neural processing for instant business decisions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold mb-2">Thought-Based Collaboration</h3>
              <p className="text-sm opacity-80">Instant team communication through neural networks</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold mb-2">Neural Security</h3>
              <p className="text-sm opacity-80">Unbreakable thought-based authentication systems</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-2025-neural-interface-revolution-enterprise-breakthrough"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Read Complete Guide
            </Link>
            <Link
              href="/services/neural-interface-implementation"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get Implementation Strategy
            </Link>
          </div>

          {/* Success Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1500%</div>
              <div className="text-sm opacity-80">Production Efficiency Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$2.5B</div>
              <div className="text-sm opacity-80">Annual Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-sm opacity-80">Error Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-sm opacity-80">Autonomous Operations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-5 h-5 bg-purple-300 rounded-full animate-bounce"></div>
    </section>
  );
};

export default NeuralInterfaceRevolutionBanner2025;