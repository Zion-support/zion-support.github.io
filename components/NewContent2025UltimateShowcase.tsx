import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, BookOpen, FileText, Users, Zap, Brain, Target, BarChart3, CheckCircle } from 'lucide-react';

export default function NewContent2025UltimateShowcase() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            New Content Available
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ultimate AI 2025 
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {' '}Content Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our latest revolutionary content: comprehensive guides, breakthrough case studies, 
            and implementation toolkits delivering 2,500-5,000% ROI.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* AI Trends Guide */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">AI Trends 2025</h3>
                <p className="text-gray-400 text-sm">Ultimate Guide</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Complete guide to revolutionary AI trends: quantum computing breakthroughs, 
              neural interfaces, and autonomous systems transforming industries.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <BookOpen className="w-4 h-4" />
                <span>45 min read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4" />
                <span>Updated 2025</span>
              </div>
            </div>
            <Link 
              href="/blog/ai-2025-trends-ultimate-guide"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105"
            >
              Read Guide
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">100,000% ROI</h3>
                <p className="text-gray-400 text-sm">Case Study</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              How a Fortune 500 company achieved unprecedented 100,000% ROI through 
              comprehensive AI transformation using quantum computing and neural interfaces.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FileText className="w-4 h-4" />
                <span>30 min read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Users className="w-4 h-4" />
                <span>Fortune 500</span>
              </div>
            </div>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-100000-roi"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 group-hover:scale-105"
            >
              View Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Implementation Toolkit */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Implementation Toolkit</h3>
                <p className="text-gray-400 text-sm">Complete Guide</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Complete implementation toolkit with 50+ templates, 100+ code samples, 
              and 25+ video tutorials for AI transformation success.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Zap className="w-4 h-4" />
                <span>50+ Templates</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Brain className="w-4 h-4" />
                <span>100+ Code Samples</span>
              </div>
            </div>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 group-hover:scale-105"
            >
              Get Toolkit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
            <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Blog Posts</h3>
            <p className="text-gray-400 text-sm mb-4">200+ Articles</p>
            <Link href="/blog" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
              Explore All →
            </Link>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
            <BarChart3 className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Case Studies</h3>
            <p className="text-gray-400 text-sm mb-4">150+ Success Stories</p>
            <Link href="/case-studies" className="text-green-400 hover:text-green-300 text-sm font-medium">
              View All →
            </Link>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
            <p className="text-gray-400 text-sm mb-4">100+ Guides</p>
            <Link href="/resources" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              Browse All →
            </Link>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
            <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
            <p className="text-gray-400 text-sm mb-4">50K+ Members</p>
            <Link href="/community" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
              Join Now →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of companies already achieving 2,500-5,000% ROI with our 
            revolutionary AI solutions and comprehensive content library.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/resources" 
              className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-colors flex items-center gap-2"
            >
              Explore Resources
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}