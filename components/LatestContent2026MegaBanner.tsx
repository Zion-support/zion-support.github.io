import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap, Award, BookOpen, BarChart3 } from 'lucide-react';

export default function LatestContent2026MegaBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-yellow-400" />
            <span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
              NEW 2026 CONTENT
            </span>
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs, implementation guides, and success stories that are transforming businesses worldwide. 
            Get exclusive access to cutting-edge strategies and proven methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-yellow-400" />
              <h3 className="text-xl font-bold">Latest Blog Posts</h3>
            </div>
            <div className="space-y-3">
              <Link 
                href="/blog/ai-2026-enterprise-automation-revolution" 
                className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-green-400" />
                  <span className="font-semibold">AI 2026: Enterprise Automation Revolution</span>
                </div>
                <p className="text-sm text-blue-100">95% process automation, $10M+ savings</p>
              </Link>
              <Link 
                href="/blog/ai-cost-optimization-2026-ultimate-guide" 
                className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="font-semibold">AI Cost Optimization: 90% Reduction Guide</span>
                </div>
                <p className="text-sm text-blue-100">Master cost optimization strategies</p>
              </Link>
            </div>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold mt-4"
            >
              View All Blog Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-bold">Success Stories</h3>
            </div>
            <div className="space-y-3">
              <Link 
                href="/case-studies/ai-autonomous-manufacturing-mega-success-2026" 
                className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="font-semibold">$50M Manufacturing Success</span>
                </div>
                <p className="text-sm text-blue-100">98% automation, zero defects</p>
              </Link>
              <Link 
                href="/case-studies/ai-cost-optimization-success-2026" 
                className="block p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-yellow-400" />
                  <span className="font-semibold">$15M Cost Optimization</span>
                </div>
                <p className="text-sm text-blue-100">92% cost reduction achieved</p>
              </Link>
            </div>
            <Link 
              href="/case-studies" 
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold mt-4"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-purple-400" />
              <h3 className="text-xl font-bold">Interactive Tools</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-white/10 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="w-4 h-4 text-purple-400" />
                  <span className="font-semibold">AI ROI Calculator</span>
                </div>
                <p className="text-sm text-blue-100">Calculate your potential savings</p>
              </div>
              <div className="p-3 bg-white/10 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span className="font-semibold">Cost Optimization Tool</span>
                </div>
                <p className="text-sm text-blue-100">Optimize your AI infrastructure</p>
              </div>
            </div>
            <Link 
              href="/content-hub" 
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold mt-4"
            >
              Explore All Tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Get Exclusive Access to 2026 AI Content</h3>
            <p className="text-lg text-blue-100 mb-6">
              Join thousands of executives who are transforming their businesses with our latest AI insights, 
              implementation guides, and proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/content-hub" 
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
              >
                <BookOpen className="w-6 h-6" />
                Explore Content Hub
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-blue-100">New Articles</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">25+</div>
            <div className="text-blue-100">Case Studies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-blue-100">Interactive Tools</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400 mb-2">$500M+</div>
            <div className="text-blue-100">Proven ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
}