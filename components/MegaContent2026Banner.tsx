import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function MegaContent2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6">
            <Star className="w-4 h-4 mr-2" />
            MEGA BREAKTHROUGH 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Technologies
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Transforming Enterprise
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the groundbreaking AI breakthroughs of 2026 that are delivering 
            <span className="font-bold text-yellow-300"> $25M+ ROI</span> and 
            <span className="font-bold text-yellow-300"> 95% automation</span> for Fortune 500 companies
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">$25M+</div>
            <div className="text-blue-100 text-sm md:text-base">ROI Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-blue-100 text-sm md:text-base">Automation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">1000x</div>
            <div className="text-blue-100 text-sm md:text-base">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-blue-100 text-sm md:text-base">Carbon Neutral</div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
          <Link href="/blog/ai-2026-mega-breakthroughs" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                AI 2026 Mega Breakthroughs
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Revolutionary technologies transforming enterprise operations with quantum-enhanced AI, 
                autonomous systems, and sustainable operations achieving unprecedented results.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">35 min</div>
                    <div className="text-xs text-blue-200">read</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">Featured</div>
                    <div className="text-xs text-blue-200">article</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>

          {/* Featured Case Study */}
          <Link href="/case-studies/ai-2026-mega-transformation-success" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    MEGA SUCCESS
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                $25M ROI Transformation Success
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                See how a Fortune 500 company achieved $25M ROI in 18 months with comprehensive 
                AI transformation using quantum-enhanced systems and autonomous operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">22 min</div>
                    <div className="text-xs text-blue-200">read</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">Fortune 500</div>
                    <div className="text-xs text-blue-200">case study</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                  Read More →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/blog/ai-2026-mega-breakthroughs"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore Breakthroughs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/case-studies/ai-2026-mega-transformation-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Success Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <p className="text-blue-200 text-sm">
            Join 10,000+ professionals discovering the future of AI
          </p>
        </div>
      </div>
    </section>
  );
}