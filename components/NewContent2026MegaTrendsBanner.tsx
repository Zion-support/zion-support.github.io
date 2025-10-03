// import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Brain, Zap, Target, Award, Clock, Star } from 'lucide-react';

export default function NewContent2026MegaTrendsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-cyan-900 border border-purple-500/30 rounded-2xl p-8 mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            <Star className="w-4 h-4" />
            NEW CONTENT 2026
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revolutionary AI Content Just Published
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the latest mega trends, breakthrough case studies, and quantum computing insights 
            that are reshaping the AI landscape in 2026
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* AI 2026 Mega Trends */}
          <Link to="/blog/ai-2026-future-ai-landscape-mega-trends" className="group">
            <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 border border-purple-500/40 rounded-xl p-6 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-purple-300 font-medium">BLOG POST</div>
                  <div className="text-white font-semibold">AI 2026 Mega Trends</div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                The Future AI Landscape
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Revolutionary breakthroughs in quantum consciousness, autonomous enterprise systems, and neural superintelligence
              </p>
              <div className="flex items-center gap-2 text-purple-300 text-sm">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
                <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Quantum Computing Breakthrough */}
          <Link to="/blog/quantum-computing-2026-commercial-breakthrough" className="group">
            <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 border border-blue-500/40 rounded-xl p-6 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-blue-300 font-medium">BLOG POST</div>
                  <div className="text-white font-semibold">Quantum Computing</div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                Commercial Breakthrough 2026
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                How quantum computing achieved commercial viability with $47B economy and 1000x speedups
              </p>
              <div className="flex items-center gap-2 text-blue-300 text-sm">
                <Clock className="w-4 h-4" />
                <span>15 min read</span>
                <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Fortune 500 Case Study */}
          <Link to="/case-studies/fortune-500-ai-transformation-12b-roi" className="group">
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 border border-green-500/40 rounded-xl p-6 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs text-green-300 font-medium">CASE STUDY</div>
                  <div className="text-white font-semibold">Fortune 500 Success</div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                $12.4B ROI Transformation
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                How a Fortune 500 company achieved unprecedented ROI through AI transformation and autonomous systems
              </p>
              <div className="flex items-center gap-2 text-green-300 text-sm">
                <Clock className="w-4 h-4" />
                <span>18 min read</span>
                <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">$47B</div>
            <div className="text-xs text-gray-300">Quantum Economy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">1000x</div>
            <div className="text-xs text-gray-300">Speed Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">340%</div>
            <div className="text-xs text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">89%</div>
            <div className="text-xs text-gray-300">Accuracy Boost</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/blog"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Brain className="w-5 h-5" />
              Explore All Content
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/case-studies"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Target className="w-5 h-5" />
              View Case Studies
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Stay ahead of the AI revolution with our cutting-edge insights and proven success stories
          </p>
        </div>
      </div>
    </div>
  );
}