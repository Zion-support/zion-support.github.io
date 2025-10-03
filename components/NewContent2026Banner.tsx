import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

export default function NewContent2026Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 mr-2 text-yellow-300" />
            <span className="text-sm font-semibold">NEW 2026 CONTENT</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              for 2026
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Discover breakthrough insights, implementation guides, and success stories that will transform your enterprise AI journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-300 mr-3" />
              <h3 className="text-xl font-bold">Enterprise Automation</h3>
            </div>
            <p className="text-blue-100 mb-6">
              Learn how Fortune 500 companies achieved $50M+ in savings through AI-driven autonomous operations
            </p>
            <Link 
              href="/blog/ai-2026-enterprise-automation-breakthrough"
              className="inline-flex items-center text-green-300 hover:text-green-200 font-semibold group"
            >
              Read the Guide
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-purple-300 mr-3" />
              <h3 className="text-xl font-bold">Quantum AI Revolution</h3>
            </div>
            <p className="text-blue-100 mb-6">
              Explore how quantum AI is revolutionizing business intelligence with exponential processing power
            </p>
            <Link 
              href="/blog/quantum-ai-2026-business-intelligence-revolution"
              className="inline-flex items-center text-purple-300 hover:text-purple-200 font-semibold group"
            >
              Discover Quantum AI
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-300 mr-3" />
              <h3 className="text-xl font-bold">Success Stories</h3>
            </div>
            <p className="text-blue-100 mb-6">
              Real Fortune 500 transformation case study with 156% ROI and $52M+ annual savings
            </p>
            <Link 
              href="/case-studies/fortune-500-ai-transformation-success"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 font-semibold group"
            >
              View Case Study
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Complete Implementation Roadmap</h3>
            <p className="text-blue-100 mb-6">
              Your comprehensive 24-month guide to enterprise AI transformation with proven strategies, best practices, and real-world examples
            </p>
            <Link 
              href="/guides/ai-2026-implementation-roadmap"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105"
            >
              Get Your Roadmap
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">156%</div>
            <div className="text-blue-100">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">$52M+</div>
            <div className="text-blue-100">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">73%</div>
            <div className="text-blue-100">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">24</div>
            <div className="text-blue-100">Month Timeline</div>
          </div>
        </div>
      </div>
    </section>
  );
}