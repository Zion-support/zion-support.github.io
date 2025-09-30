import React from 'react';
import Link from 'next/link';

export default function AI2026InnovationShowcase() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-bold">
              🔬 INNOVATION SHOWCASE
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Latest Technology
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI 2026 Innovation Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the cutting-edge AI technologies and revolutionary solutions that are transforming 
            industries and creating unprecedented opportunities for business growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Quantum AI Processing</h3>
                <p className="text-sm text-gray-500">1000x faster computation</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Revolutionary quantum-enhanced neural networks delivering unprecedented processing power 
              with 99.9% accuracy for complex business applications.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Available Now</div>
              <Link
                href="/services/ai-autonomous-enterprise-solutions"
                className="text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Autonomous AI Agents</h3>
                <p className="text-sm text-gray-500">Human-level intelligence</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Self-learning AI agents that can reason, plan, and execute complex tasks with human-level 
              cognitive abilities, revolutionizing business operations.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">In Production</div>
              <Link
                href="/case-studies/ai-autonomous-enterprise-transformation-2026"
                className="text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                View Results →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Self-Improving AI</h3>
                <p className="text-sm text-gray-500">Continuous evolution</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              AI systems that autonomously improve their own algorithms and performance, delivering 
              200% performance improvement over 6 months without human intervention.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Beta Testing</div>
              <Link
                href="/blog/ai-2026-revolutionary-breakthroughs"
                className="text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
              <p className="text-xl mb-6 opacity-90">
                Don't get left behind in the AI revolution. Discover how these cutting-edge technologies 
                can transform your business and give you a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Explore All Services
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-center"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Why Choose Zion Tech Group?</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>500+ successful implementations</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>99.9% project success rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>24/7 expert support</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-green-400">✓</span>
                  <span>$2M+ average cost savings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}