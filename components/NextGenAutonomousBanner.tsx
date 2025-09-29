import React from 'react';
import Link from 'next/link';

export default function NextGenAutonomousBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500 rounded-full opacity-25 animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-semibold mb-6">
            <span className="w-5 h-5 mr-2">🚀</span>
            NEW 2026 AUTONOMOUS SYSTEMS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Next-Generation
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              {' '}Autonomous AI Systems
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Discover the revolutionary autonomous AI systems that are creating truly self-managing enterprises 
            with 99.9% uptime and $35M+ annual savings
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-purple-300">99.9%</div>
              <div className="text-purple-100">Autonomous Uptime</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-blue-300">$35M+</div>
              <div className="text-blue-100">Annual Savings</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-green-300">98%</div>
              <div className="text-green-100">Process Automation</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="text-3xl font-bold text-orange-300">24/7</div>
              <div className="text-orange-100">Self-Management</div>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Article Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Autonomous Systems Guide</h3>
                <p className="text-purple-200 text-sm">Complete technical guide</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6">
              Master next-generation autonomous AI systems with self-healing infrastructure, 
              autonomous decision making, and quantum-enhanced optimization.
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-300">28 min read</div>
              <div className="flex gap-2">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">NEW 2026</span>
              </div>
            </div>
            <Link
              href="/blog/ai-next-generation-autonomous-systems-2026"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all group-hover:scale-105"
            >
              Read Complete Guide →
            </Link>
          </div>

          {/* Case Study Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">$35M Success Story</h3>
                <p className="text-green-200 text-sm">Fortune 500 case study</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6">
              See how a Fortune 500 company achieved $35M ROI with next-generation autonomous systems. 
              99.9% uptime, 98% automation, and complete self-managing operations.
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-300">22 min read</div>
              <div className="flex gap-2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">SUCCESS</span>
              </div>
            </div>
            <Link
              href="/case-studies/ai-next-generation-autonomous-success-2026"
              className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all group-hover:scale-105"
            >
              View Success Story →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Your Autonomous Enterprise?
            </h3>
            <p className="text-gray-200 mb-6">
              Transform your organization with next-generation autonomous AI systems. 
              Get expert guidance and implementation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}