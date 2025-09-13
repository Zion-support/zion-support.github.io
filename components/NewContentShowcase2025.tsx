import React from 'react';
import Link from 'next/link';
import { BookOpen, TrendingUp, Users, ArrowRight, Star, Clock, Target } from 'lucide-react';

export default function NewContentShowcase2025() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md rounded-full px-6 py-3 border border-purple-500/30 mb-6">
            <Star className="h-5 w-5 text-purple-400" />
            <span className="text-purple-200 font-medium">New Content Available</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest AI Breakthroughs
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              & Expert Insights
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our newest content featuring cutting-edge AI technologies, 
            real-world success stories, and comprehensive implementation guides.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Blog Post */}
          <div className="lg:col-span-2">
            <div className="group relative bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-purple-300 font-medium">Featured Article</span>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                AI 2025: Next-Generation Breakthrough Technologies
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Explore the revolutionary AI breakthroughs that will define 2025, from quantum-enhanced 
                neural networks to autonomous business ecosystems. Discover how these technologies are 
                transforming industries worldwide.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-blue-300">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">15 min read</span>
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">Trending</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <Target className="h-4 w-4" />
                  <span className="text-sm">Industry Impact</span>
                </div>
              </div>
              
              <Link 
                href="/blog/ai-2025-next-generation-breakthrough"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Read Full Article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Case Study */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-md rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <span className="text-green-300 font-medium">Success Story</span>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-3">
                $2.5B Revenue Increase
              </h4>
              
              <p className="text-gray-300 text-sm mb-4">
                How a Fortune 100 company achieved unprecedented growth through comprehensive AI transformation.
              </p>
              
              <div className="flex items-center gap-2 text-green-300 mb-4">
                <Users className="h-4 w-4" />
                <span className="text-sm">Fortune 100 Company</span>
              </div>
              
              <Link 
                href="/case-studies/ai-2025-global-enterprise-transformation-ultimate-success"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium text-sm"
              >
                View Case Study
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Implementation Guide */}
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-md rounded-xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <span className="text-indigo-300 font-medium">Complete Guide</span>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-3">
                AI Implementation Mastery
              </h4>
              
              <p className="text-gray-300 text-sm mb-4">
                Your complete guide to enterprise AI transformation with proven strategies and best practices.
              </p>
              
              <div className="flex items-center gap-2 text-indigo-300 mb-4">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Comprehensive Guide</span>
              </div>
              
              <Link 
                href="/guides/ai-implementation-mastery-2025"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium text-sm"
              >
                Read Guide
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-purple-200">Articles Published</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-md rounded-xl p-6 border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-blue-200">Case Studies</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-xl p-6 border border-green-500/30">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-green-200">Implementation Guides</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-teal-500/20 to-purple-500/20 backdrop-blur-md rounded-xl p-6 border border-teal-500/30">
              <div className="text-3xl font-bold text-teal-400 mb-2">1M+</div>
              <div className="text-teal-200">Monthly Readers</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest AI Insights
            </h3>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our latest research, case studies, and implementation guides. 
              Join thousands of professionals transforming their businesses with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
              </Link>
              <Link 
                href="/newsletter"
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}