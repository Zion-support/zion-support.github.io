import React from 'react';
import Link from 'next/link';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🚀 REVOLUTIONARY 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Next-Generation AI Content & Success Stories
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Autonomous Infrastructure */}
          <Link href="/blog/ai-autonomous-infrastructure-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏗️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Autonomous Infrastructure</h3>
                  <p className="text-sm opacity-80">Self-managing systems</p>
                </div>
              </div>
              <p className="text-sm mb-4 opacity-90">
                Achieve 99.9% uptime and 90% cost reduction with AI-powered autonomous infrastructure.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">25 min read</div>
                <div className="text-blue-200 font-semibold group-hover:text-white transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>

          {/* Quantum Computing */}
          <Link href="/blog/ai-quantum-hybrid-computing-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Quantum AI Computing</h3>
                  <p className="text-sm opacity-80">Next-gen intelligence</p>
                </div>
              </div>
              <p className="text-sm mb-4 opacity-90">
                Harness quantum computing for 1000x faster optimization and revolutionary capabilities.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">25 min read</div>
                <div className="text-purple-200 font-semibold group-hover:text-white transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>

          {/* Zero Trust Security */}
          <Link href="/blog/ai-zero-trust-security-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Zero Trust Security</h3>
                  <p className="text-sm opacity-80">Next-gen protection</p>
                </div>
              </div>
              <p className="text-sm mb-4 opacity-90">
                Implement 99.7% threat detection accuracy with AI-powered zero-trust architecture.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">22 min read</div>
                <div className="text-red-200 font-semibold group-hover:text-white transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">🏆 Featured Success Story</h3>
            <p className="text-lg opacity-90">Fortune 500 AI Transformation</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold mb-4">$25M ROI Achievement</h4>
              <p className="text-lg mb-6 opacity-90">
                See how a Fortune 500 company achieved 99% automation, 90% cost reduction, 
                and complete business revolution through AI transformation.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">$25M</div>
                  <div className="text-sm opacity-80">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">99%</div>
                  <div className="text-sm opacity-80">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">90%</div>
                  <div className="text-sm opacity-80">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">300%</div>
                  <div className="text-sm opacity-80">Productivity</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/case-studies/ai-autonomous-enterprise-transformation-2026"
                className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                View Complete Case Study
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore All AI Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View All Success Stories
            </Link>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Join 10,000+ professionals transforming their businesses with AI
          </p>
        </div>
      </div>
    </section>
  );
}