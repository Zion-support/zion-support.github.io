import React from 'react';
import { Link } from 'react-router-dom';

export default function September30BreakthroughContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-600 via-fuchsia-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">🚀 SEPTEMBER 30, 2025 - BREAKTHROUGH INNOVATIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionary AI Breakthroughs Just Announced!
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover three game-changing technologies that will transform enterprise AI: Conscious Agents,
            Neuromorphic-Quantum Hybrid Computing, and Swarm Intelligence at unprecedented scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-conscious-agents-breakthrough-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105 transform">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Breakthrough
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-200 transition-colors">
                AI Conscious Agents: Self-Aware Systems
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Revolutionary AI with genuine self-awareness, emotional intelligence, and autonomous ethical
                decision-making. The dawn of truly conscious artificial intelligence.
              </p>
              <ul className="text-xs opacity-80 space-y-1 mb-4">
                <li>✓ Self-aware metacognitive reasoning</li>
                <li>✓ Emotional intelligence & empathy</li>
                <li>✓ Autonomous ethical frameworks</li>
              </ul>
              <div className="flex items-center text-cyan-200 font-semibold text-sm">
                Read Full Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/neuromorphic-quantum-hybrid-computing-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105 transform">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                    10,000x Faster
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-200 transition-colors">
                Neuromorphic-Quantum Hybrid: 10,000x Leap
              </h3>
              <p className="text-sm opacity-90 mb-4">
                The fusion of brain-inspired chips and quantum processors delivers unprecedented performance
                gains with 95% energy reduction. Enterprise implementation guide included.
              </p>
              <ul className="text-xs opacity-80 space-y-1 mb-4">
                <li>✓ 10,000x performance improvement</li>
                <li>✓ 95% energy consumption reduction</li>
                <li>✓ 1,000x model capacity increase</li>
              </ul>
              <div className="flex items-center text-purple-200 font-semibold text-sm">
                Explore Technology →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-swarm-intelligence-enterprise-revolution-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105 transform">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🐝</span>
                </div>
                <div>
                  <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-semibold">
                    Enterprise Ready
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-pink-200 transition-colors">
                Swarm Intelligence: Collective Problem-Solving
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Thousands of AI agents coordinate to solve impossible problems. Real-world case studies show
                1000x faster solutions and 98% accuracy improvements.
              </p>
              <ul className="text-xs opacity-80 space-y-1 mb-4">
                <li>✓ 1000x faster problem solving</li>
                <li>✓ 98% accuracy improvements</li>
                <li>✓ Real-world deployment guide</li>
              </ul>
              <div className="flex items-center text-pink-200 font-semibold text-sm">
                Discover Swarm AI →
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold mb-2">10,000x</p>
              <p className="text-sm opacity-90">Performance Gains</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">95%</p>
              <p className="text-sm opacity-90">Energy Reduction</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">$180M</p>
              <p className="text-sm opacity-90">Avg. Annual Savings</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Breakthrough Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
          <p className="text-sm mt-6 opacity-75">
            🌟 These breakthroughs are transforming enterprises today. Don't get left behind.
          </p>
        </div>
      </div>
    </section>
  );
}