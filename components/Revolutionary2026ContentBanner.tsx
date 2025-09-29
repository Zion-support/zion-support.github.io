import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🔥 REVOLUTIONARY 2026
            </span>
            <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              BREAKTHROUGH CONTENT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              {' '}Success Stories
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most groundbreaking AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026. From quantum computing to autonomous operations.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Revolutionary Breakthroughs Article */}
          <Link href="/blog/ai-2026-revolutionary-breakthroughs" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    AI 2026 Revolutionary Breakthroughs
                  </h3>
                  <p className="text-blue-200 text-sm">$100B+ opportunity</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Discover the groundbreaking AI innovations reshaping enterprise technology. From quantum computing 
                to autonomous operations, explore the $100B+ opportunity.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">1000x</div>
                    <div className="text-xs text-blue-200">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">99.9%</div>
                    <div className="text-xs text-blue-200">Uptime</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-400 font-semibold text-sm group-hover:text-yellow-300 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          {/* $50M Success Story */}
          <Link href="/case-studies/ai-enterprise-transformation-mega-success-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    $50M ROI Success Story
                  </h3>
                  <p className="text-blue-200 text-sm">Fortune 500 case study</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                See how a Fortune 500 company achieved $50M ROI with comprehensive AI transformation. 
                99% automation, 90% cost reduction, and complete business revolution.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">$50M</div>
                    <div className="text-xs text-blue-200">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">99%</div>
                    <div className="text-xs text-blue-200">Automation</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-400 font-semibold text-sm group-hover:text-yellow-300 transition-colors">
                  View Success →
                </div>
              </div>
            </div>
          </Link>

          {/* AI Mega Trends */}
          <Link href="/blog/ai-2026-mega-trends" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    AI Mega Trends 2026
                  </h3>
                  <p className="text-blue-200 text-sm">Complete enterprise guide</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                Discover the 15 mega trends reshaping enterprise AI. From autonomous operations to quantum computing, 
                learn how to capitalize on $50B+ market opportunities.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-400">15</div>
                    <div className="text-xs text-blue-200">Mega Trends</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">$50B+</div>
                    <div className="text-xs text-blue-200">Opportunity</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-400 font-semibold text-sm group-hover:text-yellow-300 transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>🚀</span>
              Explore All Revolutionary Content
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all flex items-center justify-center gap-2"
            >
              <span>📊</span>
              View All Success Stories
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <p className="text-blue-200 text-sm">
            Join 10,000+ professionals transforming their businesses with AI. Updated weekly with breakthrough insights.
          </p>
        </div>
      </div>
    </section>
  );
}