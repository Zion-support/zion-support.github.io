import React from 'react';
import Link from 'next/link';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-5 h-5 mr-2">✨</span>
            <span className="font-semibold text-lg">REVOLUTIONARY 2026 CONTENT</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            The Future of AI is
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Here Today
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-12">
            Discover groundbreaking AI innovations, transformation strategies, and real-world success stories 
            that are reshaping the business landscape in 2026
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$50B+</div>
              <div className="text-sm opacity-75">AI Market Opportunity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-sm opacity-75">Process Automation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">$25M+</div>
              <div className="text-sm opacity-75">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-sm opacity-75">System Reliability</div>
            </div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* AI Mega Trends */}
          <Link href="/blog/ai-2026-mega-trends" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI Mega Trends 2026</h3>
                  <p className="text-sm opacity-75">Complete Enterprise Guide</p>
                </div>
              </div>
              <p className="opacity-90 mb-6 text-lg">
                Discover the 15 revolutionary trends reshaping enterprise AI. From autonomous operations 
                to quantum computing, learn how to capitalize on $50B+ market opportunities.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">45 min comprehensive read</div>
                <div className="flex items-center text-white font-semibold group-hover:text-blue-300 transition-colors">
                  Explore Trends →
                </div>
              </div>
            </div>
          </Link>

          {/* Enterprise Automation */}
          <Link href="/blog/ai-enterprise-automation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI Enterprise Automation</h3>
                  <p className="text-sm opacity-75">Complete Transformation Guide</p>
                </div>
              </div>
              <p className="opacity-90 mb-6 text-lg">
                Transform your enterprise with AI automation. Achieve 95% process efficiency, 
                $5M+ savings, and zero-touch operations with our comprehensive implementation guide.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">18 min implementation guide</div>
                <div className="flex items-center text-white font-semibold group-hover:text-green-300 transition-colors">
                  Start Transformation →
                </div>
              </div>
            </div>
          </Link>

          {/* Success Story */}
          <Link href="/case-studies/ai-autonomous-enterprise-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 border border-white/20 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">$25M Success Story</h3>
                  <p className="text-sm opacity-75">Fortune 500 Case Study</p>
                </div>
              </div>
              <p className="opacity-90 mb-6 text-lg">
                See how a Fortune 500 manufacturing company achieved $25M ROI with comprehensive AI transformation. 
                99.9% uptime, 90% cost reduction, and complete business revolution.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-75">30 min detailed case study</div>
                <div className="flex items-center text-white font-semibold group-hover:text-yellow-300 transition-colors">
                  View Success →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Additional Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Link href="/blog/ai-autonomous-enterprise-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🤖</span>
                <h4 className="font-bold">Autonomous Enterprise</h4>
              </div>
              <p className="text-sm opacity-75 mb-3">Self-managing business operations</p>
              <div className="flex items-center text-blue-300 font-semibold text-sm group-hover:text-blue-200 transition-colors">
                Read Guide →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚛️</span>
                <h4 className="font-bold">Quantum AI</h4>
              </div>
              <p className="text-sm opacity-75 mb-3">1000x faster optimization</p>
              <div className="flex items-center text-purple-300 font-semibold text-sm group-hover:text-purple-200 transition-colors">
                Explore Quantum →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-agent-orchestration-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎭</span>
                <h4 className="font-bold">Agent Orchestration</h4>
              </div>
              <p className="text-sm opacity-75 mb-3">Multi-agent system mastery</p>
              <div className="flex items-center text-green-300 font-semibold text-sm group-hover:text-green-200 transition-colors">
                Learn Patterns →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🌱</span>
                <h4 className="font-bold">Sustainable AI</h4>
              </div>
              <p className="text-sm opacity-75 mb-3">Carbon-neutral operations</p>
              <div className="flex items-center text-green-300 font-semibold text-sm group-hover:text-green-200 transition-colors">
                Go Green →
              </div>
            </div>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Explore All AI Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          
          <div className="text-center">
            <p className="text-lg opacity-75 mb-4">
              Ready to transform your business with AI?
            </p>
            <a
              href="tel:+13024640950"
              className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300"
            >
              Get Free Consultation: +1 302 464 0950
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}