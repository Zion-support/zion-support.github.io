import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Target, TrendingUp, Zap, Star, Clock, Award } from 'lucide-react';

const NewContent2025PromotionBanner = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Latest AI Trends',
      description: 'Comprehensive analysis of 2025 AI breakthroughs'
    },
    {
      icon: Target,
      title: 'Real Success Stories',
      description: '15,000% ROI transformation case studies'
    },
    {
      icon: BookOpen,
      title: 'Expert Tutorials',
      description: 'Step-by-step implementation guides'
    },
    {
      icon: Zap,
      title: 'Proven Strategies',
      description: 'Battle-tested frameworks and methodologies'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-bounce" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              New Content Alert
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              Fresh AI Insights & Breakthrough Content
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover our latest comprehensive guides, real-world transformation stories, and expert tutorials. 
              Everything you need to accelerate your AI journey and achieve breakthrough results.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700/50">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{feature.title}</h4>
                      <p className="text-gray-400 text-xs">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">25+</div>
                <div className="text-gray-400 text-sm">New Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">15,000%</div>
                <div className="text-gray-400 text-sm">Max ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/blog/ai-2025-comprehensive-trends-analysis"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="h-5 w-5" />
                Read Latest Trends
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Award className="h-5 w-5" />
                View Success Stories
              </Link>
            </div>
          </div>

          {/* Right Column - Content Cards */}
          <div className="space-y-6">
            {/* Featured Blog Post */}
            <Link href="/blog/ai-2025-comprehensive-trends-analysis" className="group block">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium">Blog Post</span>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <Clock className="h-3 w-3" />
                      <span>15 min read</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  AI 2025: Comprehensive Trends Analysis
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  The most comprehensive analysis of AI trends, breakthrough technologies, and future predictions that will shape the next decade.
                </p>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* Featured Case Study */}
            <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="group block">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">Case Study</span>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <Award className="h-3 w-3" />
                      <span>15,000% ROI</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                  Global Enterprise AI Transformation
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  How a Fortune 500 manufacturing giant achieved 15,000% ROI through comprehensive AI transformation across 47 countries.
                </p>
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                  <span>View Case Study</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* Featured Tutorial */}
            <Link href="/tutorials/ai-implementation-step-by-step-masterclass" className="group block">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs font-medium">Tutorial</span>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <Users className="h-3 w-3" />
                      <span>6 Phases</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  AI Implementation Masterclass
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Complete step-by-step guide to successful enterprise AI implementation with proven frameworks and best practices.
                </p>
                <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
                  <span>Start Learning</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025PromotionBanner;