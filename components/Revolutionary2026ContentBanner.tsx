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
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 REVOLUTIONARY 2026 CONTENT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Next-Generation AI Content
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
              That Transforms Businesses
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Discover cutting-edge AI guides, case studies, and success stories that deliver 
            <span className="font-semibold text-yellow-300"> 99% automation efficiency</span> and 
            <span className="font-semibold text-yellow-300"> $25M+ ROI</span>
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Advanced Automation Guide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Advanced Automation</h3>
                <p className="text-sm opacity-80">Complete Guide</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6">
              Master advanced AI automation with 99% efficiency, $15M+ ROI, and zero-touch operations. 
              Complete enterprise transformation guide.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">99%</div>
                  <div className="text-xs opacity-80">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">$15M+</div>
                  <div className="text-xs opacity-80">ROI</div>
                </div>
              </div>
            </div>
            <Link
              href="/blog/ai-advanced-automation-2026"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105"
            >
              Read Complete Guide →
            </Link>
          </div>

          {/* Mega Success Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mega Success Story</h3>
                <p className="text-sm opacity-80">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6">
              See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation. 
              99% automation, 90% cost reduction.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">$25M</div>
                  <div className="text-xs opacity-80">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">90%</div>
                  <div className="text-xs opacity-80">Cost Reduction</div>
                </div>
              </div>
            </div>
            <Link
              href="/case-studies/ai-enterprise-transformation-mega-success-2026"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105"
            >
              View Success Story →
            </Link>
          </div>

          {/* Next-Gen Automation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Next-Gen Automation</h3>
                <p className="text-sm opacity-80">Revolutionary Guide</p>
              </div>
            </div>
            <p className="text-gray-200 mb-6">
              Discover next-generation AI automation that delivers 99% efficiency, $10M+ savings, 
              and complete business transformation.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">99%</div>
                  <div className="text-xs opacity-80">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-300">$10M+</div>
                  <div className="text-xs opacity-80">Savings</div>
                </div>
              </div>
            </div>
            <Link
              href="/blog/ai-next-generation-automation-2026"
              className="inline-block bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group-hover:scale-105"
            >
              Read Guide →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All AI Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              View All Success Stories
            </Link>
          </div>
          <p className="text-sm mt-4 opacity-80">
            Join 10,000+ professionals transforming their businesses with AI
          </p>
        </div>
      </div>
    </section>
  );
}