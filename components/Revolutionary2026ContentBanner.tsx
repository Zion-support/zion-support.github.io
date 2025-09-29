import React from 'react';
import Link from 'next/link';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-600"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🚀 REVOLUTIONARY 2026 CONTENT
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Breakthrough AI Innovations
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              Reshaping Enterprise
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI technologies and success stories that are transforming businesses worldwide. 
            From $25M ROI case studies to quantum AI breakthroughs.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Breakthrough Innovations Article */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔮</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI 2026 Breakthrough Innovations</h3>
                <p className="text-sm text-gray-300">Revolutionary Technologies</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6">
              Explore the groundbreaking AI innovations of 2026 that are transforming enterprise operations. 
              From quantum-enhanced AI to fully autonomous business systems driving $50B+ market growth.
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">95%</div>
                  <div className="text-xs text-gray-300">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">$25M+</div>
                  <div className="text-xs text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">1000x</div>
                  <div className="text-xs text-gray-300">Performance</div>
                </div>
              </div>
            </div>
            <Link
              href="/blog/ai-2026-breakthrough-innovations"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all group-hover:scale-105"
            >
              Read Breakthrough Guide
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Mega Success Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">$25M ROI Success Story</h3>
                <p className="text-sm text-gray-300">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6">
              See how a Fortune 500 manufacturing company achieved unprecedented success with comprehensive AI transformation. 
              99% automation, 90% cost reduction, and complete business revolution in just 18 months.
            </p>
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">$25M</div>
                  <div className="text-xs text-gray-300">Total ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">99%</div>
                  <div className="text-xs text-gray-300">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">18</div>
                  <div className="text-xs text-gray-300">Months</div>
                </div>
              </div>
            </div>
            <Link
              href="/case-studies/ai-transformation-mega-success-2026"
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all group-hover:scale-105"
            >
              View Success Story
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Additional Content Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚡</span>
              <h4 className="font-bold">Quantum AI Computing</h4>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              1000x faster optimization with quantum-enhanced AI systems
            </p>
            <Link href="/blog/ai-quantum-computing-2026" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
              Learn More →
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🤖</span>
              <h4 className="font-bold">Autonomous Operations</h4>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Self-managing business systems with zero-touch operations
            </p>
            <Link href="/blog/ai-autonomous-enterprise-2026" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
              Learn More →
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🌱</span>
              <h4 className="font-bold">AI Sustainability</h4>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Carbon-neutral AI operations with 80% energy reduction
            </p>
            <Link href="/blog/ai-sustainability-green-tech-2026" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
              Learn More →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already benefiting from our AI solutions. 
              Get a free consultation and discover your transformation potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all"
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