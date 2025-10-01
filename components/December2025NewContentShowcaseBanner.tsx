import React from 'react';
import Link from 'next/link';

const December2025NewContentShowcaseBanner: React.FC = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main heading */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
              <span className="text-white font-bold text-lg tracking-wider uppercase animate-pulse">
                🚀 NEW DECEMBER 2025 BREAKTHROUGHS
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white leading-tight">
              Revolutionary Autonomous Systems & Edge Intelligence
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto font-semibold">
              Discover the latest breakthroughs achieving 99.9% automation, $500M ROI, and 50x performance improvements
            </p>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl font-extrabold text-white mb-1">99.9%</div>
              <div className="text-xs text-blue-100">Autonomous Operations</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl font-extrabold text-white mb-1">$500M</div>
              <div className="text-xs text-blue-100">ROI Achievement</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl font-extrabold text-white mb-1">50x</div>
              <div className="text-xs text-blue-100">Edge Performance</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
              <div className="text-2xl font-extrabold text-white mb-1">70%</div>
              <div className="text-xs text-blue-100">Cost Reduction</div>
            </div>
          </div>

          {/* Content showcase grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Autonomous Cloud Operations */}
            <Link href="/blog/ai-2025-december-autonomous-cloud-operations" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</span>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">CLOUD OPS</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Autonomous Cloud Operations</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Revolutionary breakthrough achieving 99.9% uptime, 70% cost reduction, and complete self-healing infrastructure through advanced AI orchestration.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-blue-200">12 min read</div>
                  <div className="text-cyan-300 text-sm font-semibold group-hover:text-cyan-200">Read More →</div>
                </div>
              </div>
            </Link>

            {/* Edge Intelligence Revolution */}
            <Link href="/blog/ai-2025-december-edge-intelligence-revolution" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">EDGE AI</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Edge Intelligence Revolution</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Discover how edge intelligence systems are delivering 50x performance improvements, real-time decision making, and autonomous edge computing capabilities.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-blue-200">15 min read</div>
                  <div className="text-purple-300 text-sm font-semibold group-hover:text-purple-200">Read More →</div>
                </div>
              </div>
            </Link>

            {/* Success Story */}
            <Link href="/case-studies/ai-2025-december-autonomous-systems-500-million-success" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$500M</span>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">SUCCESS</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">$500M Success Story</h3>
                <p className="text-blue-100 text-sm mb-4">
                  How a Fortune 100 global conglomerate achieved $500M ROI through revolutionary autonomous systems implementation with 99.9% automation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-blue-200">18 min read</div>
                  <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read More →</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/ai-2025-december-autonomous-cloud-operations" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Autonomous Cloud Ops
            </Link>
            <Link 
              href="/blog/ai-2025-december-edge-intelligence-revolution" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Discover Edge Intelligence
            </Link>
            <Link 
              href="/case-studies/ai-2025-december-autonomous-systems-500-million-success" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View $500M Success Story
            </Link>
          </div>

          {/* Additional links */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blog" className="text-white/80 hover:text-white text-sm font-semibold transition-colors">
                All Blog Posts →
              </Link>
              <Link href="/case-studies" className="text-white/80 hover:text-white text-sm font-semibold transition-colors">
                All Case Studies →
              </Link>
              <Link href="/services" className="text-white/80 hover:text-white text-sm font-semibold transition-colors">
                Our Services →
              </Link>
              <Link href="/contact" className="text-white/80 hover:text-white text-sm font-semibold transition-colors">
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default December2025NewContentShowcaseBanner;