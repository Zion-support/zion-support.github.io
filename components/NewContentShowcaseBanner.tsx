import React from 'react';
import Link from 'next/link';

export default function NewContentShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 border-y border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            FRESH CONTENT - JUST RELEASED
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Breakthroughs
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover the latest innovations that are transforming industries and delivering unprecedented results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Neural Optimization Revolution */}
          <div className="group bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">1000x</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Neural Optimization</div>
                <div className="text-purple-300 text-sm">Revolutionary Performance</div>
              </div>
            </div>
            <div className="text-gray-300 mb-6">
              Achieve 1000x performance improvements with our breakthrough Neural Optimization Engine. Transform your AI infrastructure with quantum-enhanced pruning and predictive memory management.
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-xs font-semibold">1000x Faster</span>
              <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-xs font-semibold">90% Cost Reduction</span>
              <span className="bg-yellow-500/20 text-yellow-200 px-3 py-1 rounded-full text-xs font-semibold">$500M ROI</span>
            </div>
            <Link 
              href="/blog/ai-2026-neural-optimization-revolution"
              className="group/link inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <span>Explore Technology</span>
              <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Autonomous Business Processes */}
          <div className="group bg-gradient-to-br from-emerald-900/40 to-teal-900/40 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">99.9%</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Autonomous Business</div>
                <div className="text-emerald-300 text-sm">Self-Running Enterprise</div>
              </div>
            </div>
            <div className="text-gray-300 mb-6">
              Transform your business into a fully autonomous enterprise with 99.9% process automation. Achieve unprecedented efficiency with intelligent decision-making and self-optimization.
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">99.9% Automated</span>
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">24/7 Operations</span>
              <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-xs font-semibold">∞ Scalability</span>
            </div>
            <Link 
              href="/blog/ai-2026-autonomous-business-processes"
              className="group/link inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <span>Learn More</span>
              <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Success Story */}
          <div className="group bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">$500M</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Success Story</div>
                <div className="text-blue-300 text-sm">Real ROI Achievement</div>
              </div>
            </div>
            <div className="text-gray-300 mb-6">
              Discover how a global technology conglomerate achieved $500M annual ROI through our Neural Optimization Engine. Real-world results from enterprise deployment.
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-xs font-semibold">$500M ROI</span>
              <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-xs font-semibold">1000x Performance</span>
              <span className="bg-yellow-500/20 text-yellow-200 px-3 py-1 rounded-full text-xs font-semibold">1.2 Month Payback</span>
            </div>
            <Link 
              href="/case-studies/ai-2026-neural-optimization-success-story"
              className="group/link inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <span>Read Case Study</span>
              <span className="group-hover/link:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              Join the revolution and discover how these breakthrough technologies can deliver unprecedented results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link 
                href="/blog"
                className="group bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Explore All Content
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}