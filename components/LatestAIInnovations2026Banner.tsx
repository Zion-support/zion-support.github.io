import React from 'react';
import Link from 'next/link';

export default function LatestAIInnovations2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <span className="text-2xl">🌟</span>
            <span className="font-semibold">Latest AI Innovations 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Technologies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
              Reshaping Enterprise Operations
            </span>
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the cutting-edge AI innovations that are transforming how businesses operate, 
            compete, and innovate in 2026. From autonomous systems to quantum-enhanced intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-3xl">🧠</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Cognitive Superintelligence</h3>
            <p className="text-sm opacity-90 mb-4">
              AI systems with human-level reasoning capabilities achieving 99.7% accuracy in complex decision-making.
            </p>
            <Link href="/blog/ai-cognitive-computing-2026" className="text-cyan-300 font-semibold hover:text-cyan-200 transition-colors">
              Learn More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Quantum-Enhanced AI</h3>
            <p className="text-sm opacity-90 mb-4">
              Quantum computing integration enabling exponential processing power for AI systems.
            </p>
            <Link href="/blog/ai-quantum-computing-2026" className="text-purple-300 font-semibold hover:text-purple-200 transition-colors">
              Explore →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-3xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Autonomous Systems</h3>
            <p className="text-sm opacity-90 mb-4">
              Self-managing AI systems that optimize operations and adapt to changing conditions in real-time.
            </p>
            <Link href="/blog/ai-autonomous-enterprise-2026" className="text-green-300 font-semibold hover:text-green-200 transition-colors">
              Discover →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-3xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Multimodal Intelligence</h3>
            <p className="text-sm opacity-90 mb-4">
              AI systems integrating text, voice, image, and sensor data for comprehensive business insights.
            </p>
            <Link href="/blog/ai-multimodal-enterprise-integration-2026" className="text-orange-300 font-semibold hover:text-orange-200 transition-colors">
              Read More →
            </Link>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-4">Proven Results Across Industries</h3>
            <p className="text-lg opacity-90">
              Our AI innovations have delivered measurable results for companies worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-300 mb-2">95%</div>
              <div className="text-sm opacity-90">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-300 mb-2">$12M</div>
              <div className="text-sm opacity-90">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-300 mb-2">300%</div>
              <div className="text-sm opacity-90">Average ROI in 6 Months</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore AI Services
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join the AI revolution and transform your business today
          </p>
        </div>
      </div>
    </section>
  );
}