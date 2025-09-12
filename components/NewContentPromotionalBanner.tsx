import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, CheckCircle, BookOpen, CaseStudy, FileText } from 'lucide-react';

const NewContentPromotionalBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <CheckCircle className="w-4 h-4 mr-1" />
                NEW CONTENT
              </span>
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                TRENDING
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover Our Latest AI Content & Success Stories
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Explore our newest blog posts, case studies, and comprehensive guides featuring 
              real-world AI transformations and proven implementation strategies.
            </p>

            {/* Content Highlights */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <BookOpen className="w-5 h-5 text-blue-300" />
                  <span className="font-semibold">New Blog Posts</span>
                </div>
                <p className="text-blue-100 text-sm">
                  Enterprise transformation success stories and funding insights
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <CaseStudy className="w-5 h-5 text-purple-300" />
                  <span className="font-semibold">Case Studies</span>
                </div>
                <p className="text-blue-100 text-sm">
                  $2B revenue growth and 99.9% security success stories
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/blog" 
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center"
              >
                Explore All Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/resources" 
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors flex items-center"
              >
                Download Guides
                <FileText className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Featured Content Cards */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🏢</span>
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">NEW</span>
                </div>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Enterprise Transformation Success</h3>
              <p className="text-blue-100 text-sm mb-3">
                $2B revenue growth case study with proven strategies and implementation roadmap
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-200">25 min read</span>
                <Link href="/blog/ai-2025-enterprise-transformation-success" className="text-blue-300 hover:text-white text-sm font-medium">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🛡️</span>
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">TRENDING</span>
                </div>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Cybersecurity Transformation</h3>
              <p className="text-blue-100 text-sm mb-3">
                99.9% threat detection success with $200M in security cost savings
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-200">22 min read</span>
                <Link href="/case-studies/ai-cybersecurity-transformation-2025" className="text-blue-300 hover:text-white text-sm font-medium">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📚</span>
                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-medium">GUIDE</span>
                </div>
                <BookOpen className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI 2025 Implementation Playbook</h3>
              <p className="text-blue-100 text-sm mb-3">
                Complete 200-page guide with frameworks, templates, and proven strategies
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-200">200 pages</span>
                <Link href="/resources/ai-2025-comprehensive-implementation-playbook" className="text-blue-300 hover:text-white text-sm font-medium">
                  Download →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner;