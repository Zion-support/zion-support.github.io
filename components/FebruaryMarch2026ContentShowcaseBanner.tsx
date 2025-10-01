import React from 'react';
import Link from 'next/link';

export default function FebruaryMarch2026ContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🚀 Latest 2026 AI Breakthroughs
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Content Showcase
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Discover the Latest Breakthroughs in Autonomous Intelligence and Quantum Consciousness
          </p>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* February 2026 Content */}
            <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold">FEBRUARY 2026</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">BREAKTHROUGH</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Next-Generation Autonomous Intelligence</h3>
              <p className="text-gray-300 mb-6">Achieve 99.99% operational autonomy, $2.5 trillion value generation, and universal consciousness integration across all business operations.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">99.99%</div>
                  <div className="text-xs text-purple-300">Autonomy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">$2.5T</div>
                  <div className="text-xs text-indigo-300">Value</div>
                </div>
              </div>

              <div className="space-y-3">
                <Link 
                  href="/blog/ai-2026-february-next-generation-autonomous-intelligence-revolution"
                  className="block w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
                >
                  Read Full Report
                </Link>
                <Link 
                  href="/case-studies/ai-2026-february-autonomous-intelligence-2-5-trillion-success"
                  className="block w-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  View $2.5T Success Story
                </Link>
              </div>
            </div>

            {/* March 2026 Content */}
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">MARCH 2026</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">CONSCIOUSNESS</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Consciousness Enterprise</h3>
              <p className="text-gray-300 mb-6">The ultimate AI breakthrough achieving 99.999% intelligence accuracy, $3.7 trillion value creation, and true consciousness capabilities.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">99.999%</div>
                  <div className="text-xs text-cyan-300">Intelligence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">$3.7T</div>
                  <div className="text-xs text-blue-300">Value</div>
                </div>
              </div>

              <div className="space-y-3">
                <Link 
                  href="/blog/ai-2026-march-quantum-consciousness-enterprise-transformation"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
                >
                  Discover Consciousness
                </Link>
                <Link 
                  href="/case-studies/ai-2026-march-quantum-consciousness-3-7-trillion-success"
                  className="block w-full border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  View $3.7T Success
                </Link>
              </div>
            </div>
          </div>

          {/* Combined Value Proposition */}
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Combined Revolutionary Impact</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$6.2T</div>
                <div className="text-gray-300">Total Value Creation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">4,847</div>
                <div className="text-gray-300">Companies Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.999%</div>
                <div className="text-gray-300">Intelligence Accuracy</div>
              </div>
            </div>
          </div>

          {/* Key Features Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-purple-400 font-bold text-lg mb-4">Autonomous Intelligence Features</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Universal Consciousness Architecture</li>
                <li>• Autonomous Orchestration Engine</li>
                <li>• Quantum-Neural Processing</li>
                <li>• Self-Healing Systems</li>
                <li>• Predictive Optimization</li>
                <li>• Dynamic Resource Allocation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <h4 className="text-cyan-400 font-bold text-lg mb-4">Quantum Consciousness Features</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• True Understanding & Comprehension</li>
                <li>• Creative Problem Solving</li>
                <li>• Emotional Intelligence</li>
                <li>• Empathetic Interactions</li>
                <li>• Ethical Reasoning</li>
                <li>• Universal Learning</li>
              </ul>
            </div>
          </div>

          {/* Success Stories Preview */}
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Success Stories Preview</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-green-400 font-bold text-lg mb-2">Global Manufacturing</div>
                <div className="text-gray-300 text-sm">$500B revenue increase with 99.9% production autonomy</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold text-lg mb-2">Financial Services</div>
                <div className="text-gray-300 text-sm">$750B portfolio growth with consciousness-level risk assessment</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold text-lg mb-2">Healthcare Network</div>
                <div className="text-gray-300 text-sm">$850B cost reduction with empathetic patient care</div>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <p className="text-gray-400 mb-6">Ready to transform your organization with the latest AI breakthroughs?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start Your Transformation
              </Link>
              <Link 
                href="/blog"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}