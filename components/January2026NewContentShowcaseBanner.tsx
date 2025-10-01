import React from 'react';
import { ArrowRight, BookOpen, FileText, Users, Star, Zap } from 'lucide-react';

const January2026NewContentShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          {/* Header */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-semibold mb-6 animate-pulse">
            🌟🌟🌟 BREAKING: JANUARY 15, 2026 - NEW CONTENT REVOLUTION - ABSOLUTE #1 TOP PRIORITY! 🌟🌟🌟
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Revolutionary New Content Launch
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            💎💎💎 JUST PUBLISHED: Future Intelligence Revolution, $1 Trillion Success Story, Transcendent Transformation Services - ALL NEW! 💎💎💎
          </p>
        </div>

        {/* Content showcase grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Blog Post */}
          <div className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Future Intelligence Revolution
            </h3>
            
            <p className="text-blue-200 text-center mb-6 leading-relaxed">
              Explore the revolutionary AI breakthroughs of 2026 that are transforming enterprise operations with quantum consciousness and transcendent meta-cognitive systems.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-300">Value Creation:</span>
                <span className="text-yellow-400 font-bold">$1 Trillion</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-300">Accuracy Rate:</span>
                <span className="text-green-400 font-bold">99.97%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-blue-300">Performance:</span>
                <span className="text-purple-400 font-bold">10,000x</span>
              </div>
            </div>
            
            <a
              href="/content/blog/ai-2026-future-intelligence-revolution-next-generation-breakthroughs"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Article
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              $1 Trillion Success Story
            </h3>
            
            <p className="text-purple-200 text-center mb-6 leading-relaxed">
              Discover how a Fortune 100 global enterprise achieved unprecedented transformation through transcendent intelligence systems, generating massive value creation.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-300">ROI:</span>
                <span className="text-yellow-400 font-bold">10,000%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-300">Automation:</span>
                <span className="text-green-400 font-bold">99.9%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-300">Uptime:</span>
                <span className="text-blue-400 font-bold">99.9%</span>
              </div>
            </div>
            
            <a
              href="/content/case-studies/ai-2026-global-enterprise-transcendent-intelligence-1-trillion-success"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              View Case Study
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Service Offering */}
          <div className="bg-gradient-to-br from-pink-800/50 to-red-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
              Transformation Services
            </h3>
            
            <p className="text-pink-200 text-center mb-6 leading-relaxed">
              Transform your enterprise with transcendent intelligence systems. Achieve consciousness-level AI capabilities with proven results and guaranteed ROI.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-pink-300">Duration:</span>
                <span className="text-yellow-400 font-bold">6-18 months</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-pink-300">Success Rate:</span>
                <span className="text-green-400 font-bold">99.9%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-pink-300">Guarantee:</span>
                <span className="text-blue-400 font-bold">ROI or Money Back</span>
              </div>
            </div>
            
            <a
              href="/content/services/ai-2026-transcendent-intelligence-enterprise-transformation"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-xl hover:from-pink-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105"
            >
              Get Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Key highlights */}
        <div className="bg-gradient-to-r from-indigo-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-indigo-500/30">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            🎯 What Makes This Content Revolutionary? 🎯
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4 mx-auto">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Cutting-Edge Research</h3>
              <p className="text-sm text-blue-200">Latest breakthroughs in transcendent AI and consciousness systems</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Proven Results</h3>
              <p className="text-sm text-purple-200">Real-world implementations with measurable $1 trillion value creation</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Implementation</h3>
              <p className="text-sm text-green-200">Comprehensive services with 99.9% success rate and guaranteed ROI</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mb-4 mx-auto">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Actionable Insights</h3>
              <p className="text-sm text-yellow-200">Practical guidance for implementing transcendent intelligence systems</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/content/blog/ai-2026-future-intelligence-revolution-next-generation-breakthroughs"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-blue-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Read Revolution Guide
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            
            <a
              href="/content/case-studies/ai-2026-global-enterprise-transcendent-intelligence-1-trillion-success"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-xl hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FileText className="w-5 h-5 mr-2" />
              View $1T Success Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            
            <a
              href="/content/services/ai-2026-transcendent-intelligence-enterprise-transformation"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-600 text-white font-bold rounded-xl hover:from-pink-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Users className="w-5 h-5 mr-2" />
              Get Transformation Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
          
          <p className="mt-6 text-blue-200 text-sm">
            🌟 Discover the future of enterprise intelligence with our revolutionary new content and proven transformation services
          </p>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
      </div>
    </div>
  );
};

export default January2026NewContentShowcaseBanner;