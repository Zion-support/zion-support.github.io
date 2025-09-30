// @ts-nocheck
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
              <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
                🚀 Zion Tech Group: Leading AI Innovation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Revolutionary AI Solutions for Enterprise
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-3xl mx-auto">
              Transform Your Business with Meta-Cognitive AI, Quantum-Neural Networks, and Autonomous Operations
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a 
                href="/blog/ai-2026-neural-architecture-breakthrough" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Read Latest Breakthroughs →
              </a>
              <a 
                href="/case-studies/fortune-500-ai-2026-breakthrough-mega-success" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View $2.3B Success Story
              </a>
            </div>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
                <div className="text-2xl font-extrabold text-blue-400 mb-1">95%</div>
                <div className="text-xs text-blue-300">Decision Accuracy</div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
                <div className="text-2xl font-extrabold text-purple-400 mb-1">1000x</div>
                <div className="text-xs text-purple-300">Processing Speed</div>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                <div className="text-2xl font-extrabold text-green-400 mb-1">98%</div>
                <div className="text-xs text-green-300">Automation Rate</div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
                <div className="text-2xl font-extrabold text-orange-400 mb-1">$2.3B</div>
                <div className="text-xs text-orange-300">Client Savings</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* NEW CONTENT ADVERTISING BANNER */}
      <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 mb-12 mx-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            🚀 BREAKING: Revolutionary 2026 AI Breakthroughs Now Live!
          </h3>
          <p className="text-purple-200 text-lg mb-4">
            Neural Architecture • Enterprise Automation • $2.3B Fortune 500 Success • Complete Mega Guide
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
            <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">1000x Processing Speed</span>
            <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300">98% Automation Rate</span>
            <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300">$2.3B Client Savings</span>
            <span className="bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300">Complete Mega Guide</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/blog/ai-2026-neural-architecture-breakthrough"
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Neural Architecture →
            </a>
            <a
              href="/blog/enterprise-automation-2026-mega-guide"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              Enterprise Automation Guide →
            </a>
            <a
              href="/case-studies/fortune-500-ai-2026-breakthrough-mega-success"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50"
            >
              $2.3B Success Story →
            </a>
          </div>
        </div>
      </div>

      {/* Fortune 500 Success Showcase Banner */}
      <section className="py-16 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8">
              <span className="text-green-400 font-bold text-xl tracking-wider uppercase">
                💰 Fortune 500 Success Story
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              $2.3 Billion in Measurable Value
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              See how a Fortune 500 leader achieved unprecedented results with our AI 2026 Breakthrough Suite, 
              delivering 99% operational efficiency and transformative business outcomes.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-green-500/30">
                <div className="text-3xl font-extrabold text-green-400 mb-2">$2.3B</div>
                <div className="text-green-300 text-sm">Total Value Generated</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30">
                <div className="text-3xl font-extrabold text-emerald-400 mb-2">99%</div>
                <div className="text-emerald-300 text-sm">Operational Efficiency</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-teal-500/30">
                <div className="text-3xl font-extrabold text-teal-400 mb-2">1.4</div>
                <div className="text-teal-300 text-sm">Month Payback Period</div>
              </div>
            </div>
            
            <a 
              href="/case-studies/fortune-500-ai-2026-breakthrough-mega-success"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Read Full Case Study →
            </a>
          </div>
        </div>
      </section>

      {/* AI Innovation Showcase */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary AI Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the next generation of artificial intelligence that's transforming how enterprises operate, 
              make decisions, and deliver value to their customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum-Neural Fusion</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary AI that combines quantum computing with neural networks, delivering 1000x processing speed 
                and unprecedented problem-solving capabilities.
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• 1000x faster processing</li>
                <li>• 95% decision accuracy</li>
                <li>• Real-time optimization</li>
                <li>• Quantum parallelism</li>
              </ul>
              <a 
                href="/blog/ai-2026-neural-architecture-breakthrough"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Automation</h3>
              <p className="text-gray-300 mb-6">
                Achieve 98% automation rates with our comprehensive mega guide, featuring meta-cognitive AI and 
                autonomous operations that transform business processes.
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• 98% automation rate</li>
                <li>• Self-healing systems</li>
                <li>• Meta-cognitive AI</li>
                <li>• Complete enterprise autonomy</li>
              </ul>
              <a 
                href="/blog/enterprise-automation-2026-mega-guide"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Get Guide →
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300 mb-6">
                Real-world success stories from Fortune 500 companies, demonstrating measurable value and 
                transformative business outcomes with our AI solutions.
              </p>
              <ul className="space-y-2 mb-6 text-gray-300">
                <li>• $2.3B total value</li>
                <li>• 99% efficiency</li>
                <li>• 1.4 month payback</li>
                <li>• 300% ROI</li>
              </ul>
              <a 
                href="/case-studies/fortune-500-ai-2026-breakthrough-mega-success"
                className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                View Case Study →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the AI revolution with Zion Tech Group. Get your free consultation and discover how our 
              revolutionary technologies can deliver unprecedented results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Started Today
              </a>
              <a 
                href="/blog/ai-2026-neural-architecture-breakthrough" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Read Latest Breakthroughs →
              </a>
              <a 
                href="/case-studies/fortune-500-ai-2026-breakthrough-mega-success" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View $2.3B Success Story
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}