import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Clock, Users, TrendingUp, Zap, Brain, Target } from 'lucide-react';

export default function NewContentShowcase2025Banner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            New Content Available
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Our Latest
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              AI Breakthroughs
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Fresh insights, real success stories, and step-by-step guides to help you 
            transform your business with cutting-edge AI technology.
          </p>
          
          {/* Content Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Latest Breakthroughs</h3>
              <p className="text-white/80 text-sm">
                Revolutionary AI innovations reshaping 2025
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Success Stories</h3>
              <p className="text-white/80 text-sm">
                25,000% ROI achieved by global tech giants
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Step-by-Step Guide</h3>
              <p className="text-white/80 text-sm">
                Complete AI implementation tutorial
              </p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="text-lg font-semibold">50+</span>
              <span className="text-white/80">New Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-300" />
              <span className="text-lg font-semibold">100+</span>
              <span className="text-white/80">Case Studies</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-300" />
              <span className="text-lg font-semibold">25+</span>
              <span className="text-white/80">Tutorials</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/blog/ai-2025-latest-breakthroughs" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Read Latest Article <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              View Success Stories
            </Link>
            <Link 
              href="/tutorials" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all"
            >
              Browse Tutorials
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Fortune 500</div>
              <div className="text-2xl font-bold">Global Tech</div>
              <div className="text-2xl font-bold">Enterprise</div>
              <div className="text-2xl font-bold">Startups</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-300/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-300/20 rounded-full animate-pulse delay-1000"></div>
    </div>
  );
}