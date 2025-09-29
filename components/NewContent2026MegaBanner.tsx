import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, CheckCircle } from 'lucide-react';

export default function NewContent2026MegaBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                🚀 NEW 2026 CONTENT
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                💰 $50M+ ROI PROVEN
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Revolutionary AI Content for 2026
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Transform Your Business
              </span>
            </h2>

            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Discover cutting-edge AI strategies, case studies, and implementation guides that are 
              already helping Fortune 500 companies achieve $50M+ in combined ROI and savings.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">25+</div>
                <div className="text-sm opacity-80">New Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-300">15+</div>
                <div className="text-sm opacity-80">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300">$50M+</div>
                <div className="text-sm opacity-80">Proven ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300">95%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Star className="w-5 h-5" />
                Explore All Content
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Right Content - Featured Articles Grid */}
          <div className="space-y-6">
            {/* Featured Article 1 */}
            <Link href="/blog/ai-autonomous-enterprise-2026" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    BREAKTHROUGH
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  AI Autonomous Enterprise 2026: Complete Business Transformation Guide
                </h3>
                <p className="text-white/80 text-sm mb-3">
                  Master autonomous enterprise operations with AI. Achieve 95% automation, $10M+ ROI, and zero-touch business processes.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-white/70">
                    <span>28 min read</span>
                    <span>•</span>
                    <span>Enterprise AI</span>
                  </div>
                  <div className="flex items-center text-yellow-300 font-semibold text-sm group-hover:text-yellow-200 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>

            {/* Featured Case Study */}
            <Link href="/case-studies/ai-autonomous-manufacturing-success-2026" className="group block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    NEW 2026
                  </span>
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    $25M ROI
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  AI Autonomous Manufacturing Success: $25M ROI Case Study
                </h3>
                <p className="text-white/80 text-sm mb-3">
                  See how a Fortune 500 manufacturer achieved 95% automation, zero downtime, and $25M annual savings.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-white/70">
                    <span>12 min read</span>
                    <span>•</span>
                    <span>Manufacturing</span>
                  </div>
                  <div className="flex items-center text-yellow-300 font-semibold text-sm group-hover:text-yellow-200 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </Link>

            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4">Proven Results</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300">95%</div>
                  <div className="text-xs text-white/70">Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">$50M+</div>
                  <div className="text-xs text-white/70">Total ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">0</div>
                  <div className="text-xs text-white/70">Downtime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300">400%</div>
                  <div className="text-xs text-white/70">ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <p className="text-lg text-white/90 mb-6">
              Join 10,000+ professionals already transforming their businesses with our AI strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}