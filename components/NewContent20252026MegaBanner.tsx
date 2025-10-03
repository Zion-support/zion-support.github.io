import React from 'react';
import { Link } from 'react-router-dom';

export default function NewContent20252026MegaBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            🚀 NEW 2025-2026 MEGA CONTENT BREAKTHROUGH
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-6">
            Revolutionary AI Trends, Case Studies & Transformation Guides
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="bg-red-500 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              BREAKTHROUGH
            </span>
            <span className="bg-green-500 px-4 py-2 rounded-full text-sm font-bold">
              $3.2B ROI
            </span>
            <span className="bg-blue-500 px-4 py-2 rounded-full text-sm font-bold">
              1000x PERFORMANCE
            </span>
            <span className="bg-purple-500 px-4 py-2 rounded-full text-sm font-bold">
              QUANTUM AI
            </span>
            <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              AUTONOMOUS OPS
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Featured Blog Post */}
          <div className="bg-gradient-to-br from-blue-800 to-purple-800 p-6 rounded-xl border border-blue-400">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-500 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                NEW BLOG
              </span>
              <span className="bg-blue-500 px-3 py-1 rounded-full text-xs font-bold">
                2025-2026
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-yellow-300">
              AI 2025-2026 Mega Trends Breakthrough
            </h3>
            <p className="text-gray-200 mb-4">
              Discover revolutionary AI trends and breakthroughs that will transform enterprise operations 
              with quantum computing, autonomous operations, and meta-cognitive AI.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-500 text-white px-2 py-1 rounded text-xs">1000x Performance</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">95% Automation</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">Quantum AI</span>
            </div>
            <Link to="/blog/ai-2025-2026-mega-trends-breakthrough"
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all transform hover:scale-105"
            >
              Read Full Article →
            </Link>
          </div>

          {/* Featured Case Study */}
          <div className="bg-gradient-to-br from-green-800 to-emerald-800 p-6 rounded-xl border border-green-400">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                $3.2B ROI
              </span>
              <span className="bg-green-500 px-3 py-1 rounded-full text-xs font-bold">
                SUCCESS STORY
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-yellow-300">
              Mega Transformation Success Case Study
            </h3>
            <p className="text-gray-200 mb-4">
              How a Fortune 500 company achieved $3.2B ROI through revolutionary AI transformation 
              using quantum-enhanced systems and autonomous operations.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs">$3.2B ROI</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">450% Revenue</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">Fortune 500</span>
            </div>
            <Link to="/case-studies/ai-2025-2026-mega-transformation-success"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-bold hover:from-green-400 hover:to-emerald-400 transition-all transform hover:scale-105"
            >
              View Case Study →
            </Link>
          </div>
        </div>

        {/* Additional Content Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-4 rounded-lg border border-purple-400">
            <h4 className="text-lg font-bold mb-2 text-cyan-300">⚛️ Quantum AI Revolution</h4>
            <p className="text-gray-200 text-sm mb-3">
              Revolutionary quantum-enhanced AI delivering 1000x performance improvements
            </p>
            <Link to="/blog/ai-2026-quantum-enhanced-analytics" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
              Learn More →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-orange-800 to-red-800 p-4 rounded-lg border border-orange-400">
            <h4 className="text-lg font-bold mb-2 text-yellow-300">🤖 Autonomous Operations</h4>
            <p className="text-gray-200 text-sm mb-3">
              Achieve 95% operational automation with self-healing infrastructure
            </p>
            <Link to="/blog/ai-2026-autonomous-enterprise-operations" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
              Discover More →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-cyan-800 to-blue-800 p-4 rounded-lg border border-cyan-400">
            <h4 className="text-lg font-bold mb-2 text-yellow-300">🧠 Meta-Cognitive AI</h4>
            <p className="text-gray-200 text-sm mb-3">
              Self-improving AI systems with autonomous learning capabilities
            </p>
            <Link to="/blog/ai-2026-meta-cognitive-breakthrough" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
              Explore More →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-yellow-600 to-orange-600 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            🚀 Ready to Transform Your Enterprise?
          </h3>
          <p className="text-white mb-6 text-lg">
            Don't miss the AI revolution. Implement these breakthrough technologies and achieve unprecedented results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link to="/services"
              className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors transform hover:scale-105"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">$3.2B</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">1000x</div>
            <div className="text-sm text-gray-300">Performance Boost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">95%</div>
            <div className="text-sm text-gray-300">Automation Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">450%</div>
            <div className="text-sm text-gray-300">Revenue Growth</div>
          </div>
        </div>
      </div>
    </div>
  );
}