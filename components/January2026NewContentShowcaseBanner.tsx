import React from 'react';
import { ArrowRight, BookOpen, FileText, Users, TrendingUp, Star, Zap, Target } from 'lucide-react';

export default function January2026NewContentShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 border border-amber-500/30 rounded-2xl p-8 mb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-red-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full">
            <Star className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm">NEW CONTENT</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-full">
            <Zap className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm">JANUARY 2026</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          🌟🌟🌟 REVOLUTIONARY NEW CONTENT SHOWCASE 🌟🌟🌟
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-orange-200 mb-6 font-semibold">
          💎💎💎 COMPLETE SUITE: Ultra-Intelligent Systems + Fortune 500 Case Study + Implementation Guide - $6.4B COMBINED VALUE! 💎💎💎
        </h2>

        {/* Content Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Blog Post Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Ultra-Intelligent Systems</h3>
                <p className="text-orange-200 text-sm">Revolutionary Breakthrough</p>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                <span className="text-orange-200 text-sm">99.97% Operational Autonomy</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                <span className="text-orange-200 text-sm">$3.2B Annual Savings</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-red-400" />
                <span className="text-orange-200 text-sm">340% Efficiency Gain</span>
              </div>
            </div>
            <a 
              href="/content/blog/ai-2026-january-ultra-intelligent-autonomous-systems-revolution"
              className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300"
            >
              Read Article
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Case Study Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Fortune 500 Case Study</h3>
                <p className="text-orange-200 text-sm">Proven Transformation</p>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                <span className="text-orange-200 text-sm">847% ROI Achievement</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                <span className="text-orange-200 text-sm">18-Month Journey</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-red-400" />
                <span className="text-orange-200 text-sm">Zero Safety Incidents</span>
              </div>
            </div>
            <a 
              href="/content/case-studies/fortune-500-autonomous-enterprise-transformation-2026"
              className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300"
            >
              View Case Study
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Implementation Guide Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Implementation Guide</h3>
                <p className="text-orange-200 text-sm">Complete Roadmap</p>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                <span className="text-orange-200 text-sm">18-Month Roadmap</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-400" />
                <span className="text-orange-200 text-sm">Best Practices</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-red-400" />
                <span className="text-orange-200 text-sm">Risk Management</span>
              </div>
            </div>
            <a 
              href="/content/guides/complete-autonomous-enterprise-implementation-guide-2026"
              className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300"
            >
              Get Guide
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">🎯 COMPLETE TRANSFORMATION PACKAGE INCLUDES:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                <span className="text-orange-200"><strong className="text-white">Revolutionary Technology Guide:</strong> Complete understanding of ultra-intelligent systems</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <span className="text-orange-200"><strong className="text-white">Proven Success Story:</strong> Real Fortune 500 transformation case study</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <span className="text-orange-200"><strong className="text-white">Implementation Roadmap:</strong> Step-by-step transformation guide</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                <span className="text-orange-200"><strong className="text-white">ROI Framework:</strong> Proven 847% ROI methodology</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <span className="text-orange-200"><strong className="text-white">Best Practices:</strong> Industry-leading implementation strategies</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <span className="text-orange-200"><strong className="text-white">Risk Management:</strong> Comprehensive risk mitigation strategies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">ALL NEW CONTENT</span>
            </div>
            <span className="text-orange-200 text-sm">Complete autonomous transformation package</span>
          </div>
          
          <div className="flex gap-3">
            <a 
              href="/content"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
            >
              <Star className="w-5 h-5" />
              Explore All Content
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
            >
              <Users className="w-5 h-5" />
              Get Expert Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Footer Combined Value Stats */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">$6.4B</div>
              <div className="text-sm text-orange-200">Combined Value</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">99.97%</div>
              <div className="text-sm text-orange-200">Autonomy Achieved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">847%</div>
              <div className="text-sm text-orange-200">Average ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">18</div>
              <div className="text-sm text-orange-200">Months to Transform</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}