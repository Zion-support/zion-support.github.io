import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Zap } from 'lucide-react';

const NewContent2025RevolutionaryBreakthroughBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/ai-pattern.svg')] opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-20 animate-pulse delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            🚀 NEW BREAKTHROUGH CONTENT 2025
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI 2025
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Breakthrough Content
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most comprehensive AI transformation resources, case studies, and implementation guides for 2025. 
            Achieve <span className="text-yellow-400 font-bold">15,000% ROI</span> with next-generation autonomous systems.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">15,000%</div>
              <div className="text-gray-300 text-sm">ROI Achieved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-gray-300 text-sm">Process Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-gray-300 text-sm">Employees Impacted</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Star className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">96%</div>
              <div className="text-gray-300 text-sm">Customer Satisfaction</div>
            </div>
          </div>
          
          {/* Content Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Blog Post */}
            <Link href="/blog/ai-2025-next-generation-autonomous-systems-revolutionary-breakthrough" 
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium mb-4">
                  📝 NEW BLOG POST
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  AI 2025: Next-Generation Autonomous Systems Revolutionary Breakthrough
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Discover the revolutionary breakthrough in next-generation autonomous systems that are transforming business operations in 2025.
                </p>
                <div className="flex items-center text-yellow-400 text-sm font-medium">
                  Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            {/* Case Study */}
            <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough-15000-roi" 
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-medium mb-4">
                  🏆 SUCCESS STORY
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  15,000% ROI: Global Enterprise Transformation Breakthrough
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Learn how a Fortune 500 company achieved unprecedented ROI through comprehensive AI transformation.
                </p>
                <div className="flex items-center text-yellow-400 text-sm font-medium">
                  View Case Study <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
            
            {/* Implementation Guide */}
            <Link href="/resources/ai-2025-ultimate-autonomous-systems-implementation-master-guide" 
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium mb-4">
                  📚 MASTER GUIDE
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  Ultimate Autonomous Systems Implementation Master Guide
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  The complete guide to implementing autonomous AI systems from strategy to execution and optimization.
                </p>
                <div className="flex items-center text-yellow-400 text-sm font-medium">
                  Get the Guide <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/case-studies" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
              View All Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/resources" 
                  className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
              Explore Resources
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm mb-4">Trusted by Fortune 500 companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">🏢 Fortune 500</div>
              <div className="text-white font-semibold">🌍 Global Enterprises</div>
              <div className="text-white font-semibold">🚀 Startups</div>
              <div className="text-white font-semibold">🏭 Manufacturing</div>
              <div className="text-white font-semibold">💰 Financial Services</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025RevolutionaryBreakthroughBanner;