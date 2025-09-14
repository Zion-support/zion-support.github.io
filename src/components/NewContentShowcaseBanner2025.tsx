import React from 'react';
import Link from 'next/link';

export default function NewContentShowcaseBanner2025() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full px-6 py-2 mb-6 shadow-lg font-bold">
            <span className="text-sm">🔥 NEW CONTENT 2025</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Revolutionary AI Content
            </span>
          </h2>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Discover the latest breakthrough content, case studies, and implementation guides 
            that are transforming businesses worldwide with autonomous AI technologies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-4">Ultimate Autonomous AI Revolution</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Explore the most advanced autonomous AI systems achieving 99.9% autonomous operations 
              with revolutionary breakthrough technologies.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm bg-green-500/20 text-green-400 px-3 py-1 rounded-full">New Release</span>
              <span className="text-sm text-gray-400">15 min read</span>
            </div>
            <Link 
              href="/blog/ai-2025-ultimate-autonomous-revolution"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Read Article →
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-4">$5.2B ROI Success Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Learn how a Fortune 100 company achieved the most successful autonomous AI 
              transformation in corporate history with unprecedented results.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">Featured</span>
              <span className="text-sm text-gray-400">12 min read</span>
            </div>
            <Link 
              href="/case-studies/global-enterprise-autonomous-ai-transformation-2025-ultimate-success-5-billion-roi"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          {/* Implementation Guide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-4">Implementation Master Guide</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete roadmap to autonomous AI success with step-by-step implementation 
              strategies, best practices, and proven methodologies.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">Essential</span>
              <span className="text-sm text-gray-400">25 min read</span>
            </div>
            <Link 
              href="/resources/autonomous-ai-implementation-master-guide-2025"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Get Guide →
            </Link>
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6 text-center">More Revolutionary Content</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              href="/blog/ai-2027-autonomous-business-revolution"
              className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <span className="text-2xl mr-3">🔮</span>
              <div>
                <div className="font-semibold text-sm">AI 2027 Revolution</div>
                <div className="text-xs text-gray-400">Future Technologies</div>
              </div>
            </Link>
            
            <Link 
              href="/case-studies/fortune-500-autonomous-transformation-2027-10-billion-roi"
              className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <span className="text-2xl mr-3">🏆</span>
              <div>
                <div className="font-semibold text-sm">$10B Transformation</div>
                <div className="text-xs text-gray-400">Success Stories</div>
              </div>
            </Link>
            
            <Link 
              href="/resources/ai-2025-implementation-quick-start-guide"
              className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <span className="text-2xl mr-3">⚡</span>
              <div>
                <div className="font-semibold text-sm">Quick Start Guide</div>
                <div className="text-xs text-gray-400">Get Started Fast</div>
              </div>
            </Link>
            
            <Link 
              href="/resources/ai-superintelligence-readiness-assessment"
              className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <span className="text-2xl mr-3">🎯</span>
              <div>
                <div className="font-semibold text-sm">Readiness Assessment</div>
                <div className="text-xs text-gray-400">Evaluate Your Org</div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6 opacity-90">
            Ready to transform your business with autonomous AI?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              📋 View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}