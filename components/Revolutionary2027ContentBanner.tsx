import React from 'react';
import Link from 'next/link';

export default function Revolutionary2027ContentBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-500/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span className="animate-pulse">⚡</span>
            BREAKTHROUGH 2027 CONTENT
            <span className="animate-pulse">⚡</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Future of AI is
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
              Here Now
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI technologies that will define 2027. From quantum neural networks 
            to consciousness-level AI systems, explore the breakthroughs that are transforming our world.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
              AI 2027 Breakthrough Technologies
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Explore quantum-neural hybrid systems, consciousness-level AI, and self-evolving architectures 
              that are revolutionizing artificial intelligence.
            </p>
            <div className="flex items-center justify-between">
              <Link
                href="/blog/ai-2027-breakthrough-technologies"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                Read More →
              </Link>
              <span className="text-yellow-400 text-sm font-semibold">NEW 2027</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
              Autonomous Enterprise Operations
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Learn how AI systems are managing entire organizations autonomously, achieving 400-600% 
              improvements in operational efficiency.
            </p>
            <div className="flex items-center justify-between">
              <Link
                href="/blog/ai-autonomous-enterprise-operations-2027"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all"
              >
                Read More →
              </Link>
              <span className="text-yellow-400 text-sm font-semibold">BREAKTHROUGH</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
              Quantum Neural Networks
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover how quantum computing and neural networks are converging to create the next 
              generation of AI capabilities.
            </p>
            <div className="flex items-center justify-between">
              <Link
                href="/blog/ai-quantum-neural-networks-2027"
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all"
              >
                Read More →
              </Link>
              <span className="text-yellow-400 text-sm font-semibold">REVOLUTIONARY</span>
            </div>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">💰</div>
          <h3 className="text-3xl font-bold mb-4 text-yellow-400">
            $500M Revenue Growth Success Story
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            See how a Fortune 100 company achieved unprecedented growth through comprehensive AI transformation, 
            with 1,200% ROI in just 18 months.
          </p>
          <Link
            href="/case-studies/ai-2027-transformation-mega-success"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all"
          >
            <span>View Success Story</span>
            <span className="text-2xl">→</span>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Ready to be part of the AI revolution?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Start Your AI Journey
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors"
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}