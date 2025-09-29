import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function MegaContent2026Banner() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              🔥 MEGA CONTENT 2026
            </span>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              FEATURED
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content & Success Stories
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the latest AI innovations, transformation guides, and real-world success stories 
            that are reshaping businesses in 2026. Join 50,000+ professionals already transforming their operations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">50,000+</div>
              <div className="text-sm opacity-80">Active Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">300%</div>
              <div className="text-sm opacity-80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">$100M+</div>
              <div className="text-sm opacity-80">Total Savings</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Featured Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6">Featured Revolutionary Content</h2>
            
            <Link href="/blog/ai-2026-breakthrough-innovations" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔮</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">BREAKTHROUGH</span>
                      <span className="text-sm opacity-75">45 min read</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                      AI Breakthrough Innovations 2026
                    </h3>
                    <p className="text-sm opacity-90 mb-3">
                      Discover the 15 most revolutionary AI breakthrough innovations transforming enterprise operations with 300% ROI.
                    </p>
                    <div className="flex items-center text-yellow-400 font-semibold group-hover:translate-x-1 transition-transform">
                      Read Complete Guide <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-mega-transformation-2026" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">CASE STUDY</span>
                      <span className="text-sm opacity-75">30 min read</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                      $50M AI Transformation Success
                    </h3>
                    <p className="text-sm opacity-90 mb-3">
                      See how a Fortune 500 company achieved $50M ROI with comprehensive AI transformation in 18 months.
                    </p>
                    <div className="flex items-center text-green-400 font-semibold group-hover:translate-x-1 transition-transform">
                      View Success Story <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-autonomous-operations-2026" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">AUTONOMOUS</span>
                      <span className="text-sm opacity-75">35 min read</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                      AI Autonomous Operations 2026
                    </h3>
                    <p className="text-sm opacity-90 mb-3">
                      Master autonomous AI enterprise operations with zero-touch business management and $8M+ savings.
                    </p>
                    <div className="flex items-center text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                      Read Complete Guide <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Stats & CTA */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Content Impact Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-80">Total Content Views</span>
                  <span className="text-2xl font-bold text-yellow-400">2.5M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-80">Average ROI Achieved</span>
                  <span className="text-2xl font-bold text-green-400">300%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-80">Companies Transformed</span>
                  <span className="text-2xl font-bold text-blue-400">500+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-80">Total Savings Generated</span>
                  <span className="text-2xl font-bold text-purple-400">$100M+</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-8 text-black">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of companies already using our AI content to revolutionize their operations.
              </p>
              <div className="space-y-4">
                <Link
                  href="/blog"
                  className="block w-full bg-black text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-800 transition-colors"
                >
                  Explore All Content
                </Link>
                <a
                  href="tel:+13024640950"
                  className="block w-full border-2 border-black text-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-black hover:text-white transition-colors"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}