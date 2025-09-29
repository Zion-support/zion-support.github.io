import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp, DollarSign, Users } from 'lucide-react';

export default function Revolutionary2026ContentBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M50 50c0-27.614-22.386-50-50-50v100c27.614 0 50-22.386 50-50z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-8">
            <Star className="w-5 h-5 mr-2" />
            REVOLUTIONARY 2026 CONTENT
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The Future of AI is
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              Here Today
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-5xl mx-auto leading-relaxed">
            Experience the most advanced AI technologies and transformation strategies that are 
            reshaping industries and delivering unprecedented business value
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-10 h-10 text-black" />
            </div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">$25M+</div>
            <div className="text-purple-200 text-sm">Average ROI</div>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-purple-200 text-sm">Automation Rate</div>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-purple-400 mb-2">1000x</div>
            <div className="text-purple-200 text-sm">Performance Gain</div>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-purple-200 text-sm">Carbon Neutral</div>
          </div>
        </div>

        {/* Featured Content Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Breakthrough Article */}
          <Link href="/blog/ai-2026-mega-breakthroughs" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-black" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    MEGA BREAKTHROUGH
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                AI 2026 Mega Breakthroughs
              </h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Revolutionary technologies including quantum-enhanced AI, autonomous systems, 
                and sustainable operations that are transforming enterprise operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">35 min</div>
                    <div className="text-xs text-purple-200">read</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">Featured</div>
                    <div className="text-xs text-purple-200">article</div>
                  </div>
                </div>
                <div className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                  Explore →
                </div>
              </div>
            </div>
          </Link>

          {/* Success Case Study */}
          <Link href="/case-studies/ai-2026-mega-transformation-success" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    MEGA SUCCESS
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                $25M ROI Transformation
              </h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Fortune 500 company achieves $25M ROI in 18 months with comprehensive 
                AI transformation using quantum-enhanced systems and autonomous operations.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400">22 min</div>
                    <div className="text-xs text-purple-200">read</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400">Fortune 500</div>
                    <div className="text-xs text-purple-200">case study</div>
                  </div>
                </div>
                <div className="flex items-center text-green-400 font-semibold group-hover:text-yellow-300 transition-colors">
                  View Success →
                </div>
              </div>
            </div>
          </Link>

          {/* Technology Showcase */}
          <Link href="/blog/ai-quantum-computing-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    QUANTUM AI
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-300 transition-colors">
                Quantum Computing AI
              </h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Next-generation intelligence with 1000x faster optimization and 
                revolutionary capabilities that are reshaping the future of computing.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400">25 min</div>
                    <div className="text-xs text-purple-200">read</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-purple-400">Revolutionary</div>
                    <div className="text-xs text-purple-200">technology</div>
                  </div>
                </div>
                <div className="flex items-center text-purple-400 font-semibold group-hover:text-yellow-300 transition-colors">
                  Discover →
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join the AI revolution and discover how these breakthrough technologies 
              can deliver unprecedented value to your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/blog/ai-2026-mega-breakthroughs"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Zap className="w-6 h-6 mr-3" />
                Explore Breakthroughs
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <TrendingUp className="w-6 h-6 mr-3" />
                View All Success Stories
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
            <p className="text-purple-200 text-sm mt-6">
              Trusted by Fortune 500 companies worldwide • 10,000+ professionals transformed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}