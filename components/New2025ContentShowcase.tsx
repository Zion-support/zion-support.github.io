import React from 'react';
import { Link } from 'react-router-dom';

export default function New2025ContentShowcase() {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            🚀 NEW 2025 AI BREAKTHROUGHS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary autonomous systems, quantum-enhanced business intelligence, and cloud operations delivering unprecedented results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Autonomous Systems Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                99.9% AUTONOMOUS
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Next-Generation Autonomous Systems
            </h3>
            
            <p className="text-gray-600 mb-6">
              Revolutionary AI systems achieving 99.9% automation across enterprise operations, delivering $50B+ in proven savings and self-healing infrastructure.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-sm">$50B+ in operational savings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-sm">99.97% uptime with self-healing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">✓</span>
                <span className="text-sm">95% reduction in manual tasks</span>
              </div>
            </div>

            <Link 
              href="/blog/ai-2025-next-generation-autonomous-systems-revolution"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Read Full Article
              <span>→</span>
            </Link>
          </div>

          {/* Quantum BI Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">⚛️</span>
              </div>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                1000x QUANTUM BI
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quantum-Enhanced Business Intelligence
            </h3>
            
            <p className="text-gray-600 mb-6">
              Revolutionary quantum AI technology delivering 1000x faster analytics, $3.8B in proven ROI, and unprecedented business insights for enterprise leaders.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-blue-500">✓</span>
                <span className="text-sm">1000x faster analytics processing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">✓</span>
                <span className="text-sm">$3.8B in additional revenue</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500">✓</span>
                <span className="text-sm">99.97% forecasting accuracy</span>
              </div>
            </div>

            <Link 
              href="/blog/ai-2025-quantum-enhanced-business-intelligence-breakthrough"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Read Full Article
              <span>→</span>
            </Link>
          </div>

          {/* Cloud Operations Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                <span className="text-2xl">☁️</span>
              </div>
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                $5.2B CLOUD SAVINGS
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Autonomous Cloud Operations
            </h3>
            
            <p className="text-gray-600 mb-6">
              Revolutionary autonomous cloud management delivering 99.9% uptime, $5.2B in cost savings, and self-healing infrastructure for enterprise transformation.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-purple-500">✓</span>
                <span className="text-sm">$5.2B in operational savings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-500">✓</span>
                <span className="text-sm">99.97% uptime with self-healing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-500">✓</span>
                <span className="text-sm">85% reduction in manual tasks</span>
              </div>
            </div>

            <Link 
              href="/blog/ai-2025-autonomous-cloud-operations-revolution"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Read Full Article
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              💰 $50B Success Story: Fortune 100 Transformation
            </h3>
            <p className="text-lg mb-6 opacity-90">
              See how a leading Fortune 100 company achieved $50 billion in savings and 99.9% automation using our revolutionary autonomous systems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                <span className="font-semibold">$50B Savings</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                <span className="font-semibold">99.9% Automation</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                <span className="font-semibold">Fortune 100 Proven</span>
              </div>
            </div>

            <Link 
              href="/case-studies/ai-2025-autonomous-systems-50-billion-success"
              className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-gray-100 py-3 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Read Success Story
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-gray-600 mb-6">
            Join Fortune 500 companies achieving unprecedented results with our revolutionary AI technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/content-hub"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Content
            </Link>
            <Link 
              href="/contact"
              className="bg-white border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-3 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}