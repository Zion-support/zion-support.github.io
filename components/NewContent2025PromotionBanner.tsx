import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, BookOpen, FileText, Users, Zap, Brain, Target, BarChart3, CheckCircle, Star } from 'lucide-react';

export default function NewContent2025PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white/90 text-sm font-medium">4.9/5 Rating</span>
                <span className="text-white/70 text-sm">•</span>
                <span className="text-white/90 text-sm">50K+ Downloads</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                New AI 2025 
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Content Available
                </span>
              </h2>
              
              <p className="text-xl text-white/90 mb-8">
                Discover our latest revolutionary content: comprehensive guides, breakthrough case studies, 
                and implementation toolkits delivering unprecedented ROI.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-white/80 text-sm">New Articles</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">150+</div>
                  <div className="text-white/80 text-sm">Case Studies</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-white/80 text-sm">Resources</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-white/80 text-sm">Templates</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/blog/ai-2025-trends-ultimate-guide"
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Read Latest Guide
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/case-studies/ai-2025-global-enterprise-transformation-100000-roi"
                  className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center gap-2"
                >
                  <BarChart3 className="w-5 h-5" />
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Content - Featured Items */}
            <div className="space-y-4">
              {/* Featured Guide */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">AI Trends 2025: Ultimate Guide</h3>
                    <p className="text-white/80 text-sm mb-3">
                      Complete guide to revolutionary AI trends: quantum computing, neural interfaces, 
                      and autonomous systems.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/70">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        45 min read
                      </span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Updated 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Case Study */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">100,000% ROI Case Study</h3>
                    <p className="text-white/80 text-sm mb-3">
                      How a Fortune 500 company achieved unprecedented ROI through 
                      comprehensive AI transformation.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/70">
                      <span className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        30 min read
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        Fortune 500
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Toolkit */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Implementation Toolkit</h3>
                    <p className="text-white/80 text-sm mb-3">
                      Complete toolkit with 50+ templates, 100+ code samples, 
                      and 25+ video tutorials.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/70">
                      <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        50+ Templates
                      </span>
                      <span className="flex items-center gap-1">
                        <Brain className="w-3 h-3" />
                        100+ Code Samples
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}