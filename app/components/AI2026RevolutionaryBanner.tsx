import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp, Users, Award } from 'lucide-react';

const AI2026RevolutionaryBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-indigo-600/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">🚀 AI 2026 REVOLUTIONARY BREAKTHROUGH</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            The Future is Here
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI technologies that are transforming industries in 2026. 
            From quantum computing breakthroughs to enterprise automation success stories.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Enterprise Automation */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold">Enterprise Automation</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Revolutionary AI automation solutions delivering 500%+ ROI and 300% efficiency improvements.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-green-400 font-semibold">500%+ ROI</span>
              <Link 
                href="/blog/ai-2026-enterprise-automation-revolution"
                className="text-purple-300 hover:text-purple-200 transition-colors group-hover:translate-x-1 transform duration-200"
              >
                Read More <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </div>
          </div>

          {/* Quantum Computing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-bold">Quantum AI</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Breakthrough quantum computing applications solving previously impossible problems in seconds.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-green-400 font-semibold">10,000x Faster</span>
              <Link 
                href="/blog/ai-2026-quantum-computing-breakthrough"
                className="text-blue-300 hover:text-blue-200 transition-colors group-hover:translate-x-1 transform duration-200"
              >
                Read More <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </div>
          </div>

          {/* Global Success */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-indigo-300" />
              </div>
              <h3 className="text-xl font-bold">Global Success</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Real Fortune 500 success stories with proven strategies and measurable results.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-green-400 font-semibold">$50B+ Savings</span>
              <Link 
                href="/case-studies/ai-2026-global-transformation-success"
                className="text-indigo-300 hover:text-indigo-200 transition-colors group-hover:translate-x-1 transform duration-200"
              >
                Read More <ArrowRight className="w-4 h-4 inline ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">500%+</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">$50B+</div>
            <div className="text-gray-300">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">300%</div>
            <div className="text-gray-300">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">95%</div>
            <div className="text-gray-300">Error Reduction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore AI Solutions
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
          
          <p className="text-gray-300 mt-6 text-sm">
            Join 500+ companies already transforming with AI 2026 technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2026RevolutionaryBanner;