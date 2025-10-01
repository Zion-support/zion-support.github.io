import React from 'react';
import Link from 'next/link';

const AI2026FutureAutonomousEnterpriseRevolutionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
              <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
                🚀 AI 2026: Future Autonomous Enterprise Revolution
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              $2.8 Trillion Value Creation Through Autonomous AI
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
              Discover how Fortune 50 companies achieve 99.9% automation, 1,000,000x processing speed, and unlimited scalability with AI 2026
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 text-center">
              <div className="text-3xl font-extrabold text-blue-400 mb-2">$2.8T</div>
              <div className="text-sm text-blue-300 font-semibold">Value Creation</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center">
              <div className="text-3xl font-extrabold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm text-purple-300 font-semibold">Automation</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 text-center">
              <div className="text-3xl font-extrabold text-green-400 mb-2">1Mx</div>
              <div className="text-sm text-green-300 font-semibold">Processing Speed</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 text-center">
              <div className="text-3xl font-extrabold text-orange-400 mb-2">∞</div>
              <div className="text-sm text-orange-300 font-semibold">Scalability</div>
            </div>
          </div>

          {/* Content Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Link href="/blog/ai-2026-future-autonomous-enterprise-revolution" className="group block rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">AI 2026 REVOLUTION</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">FUTURE ENTERPRISE</span>
              </div>
              <h3 className="text-white font-bold text-2xl mb-3">Future Autonomous Enterprise Revolution</h3>
              <p className="text-gray-400 text-lg mb-4">Discover how AI 2026 is revolutionizing enterprise operations with 99.9% autonomous systems, quantum-enhanced processing, and $2.8 trillion value creation potential.</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">12 min read</div>
                <div className="text-blue-300 text-lg font-semibold group-hover:text-blue-200">Read Full Article →</div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-2026-autonomous-enterprise-2-8-trillion-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">$2.8T SUCCESS</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">FORTUNE 50</span>
              </div>
              <h3 className="text-white font-bold text-2xl mb-3">$2.8 Trillion Success Story</h3>
              <p className="text-gray-400 text-lg mb-4">How a Fortune 50 global conglomerate achieved $2.8 trillion value creation through AI 2026 Autonomous Enterprise implementation - the largest documented AI transformation success.</p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">15 min read</div>
                <div className="text-green-300 text-lg font-semibold group-hover:text-green-200">Read Success Story →</div>
              </div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
              >
                Get Your AI 2026 Assessment
              </Link>
              <Link 
                href="/blog/ai-2026-future-autonomous-enterprise-revolution" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Read Full Article →
              </Link>
              <Link 
                href="/case-studies/ai-2026-autonomous-enterprise-2-8-trillion-success" 
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View $2.8T Success Story
              </Link>
            </div>
            
            <p className="text-gray-400 text-lg">
              Join the AI 2026 Autonomous Enterprise Revolution and unlock unlimited value creation potential for your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026FutureAutonomousEnterpriseRevolutionBanner;