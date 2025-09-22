import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, TrendingUp, Award, Zap, Brain, ArrowRight, Brain } from 'lucide-react';

const NewContent2026ShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"></div>
      
      {/* Animated Background */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <Calendar className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium">📅 NEW 2026 CONTENT RELEASE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Revolutionary AI Content
            </span>
            <br />
            <span className="text-white">Now Available</span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest insights, case studies, and breakthrough technologies 
            that are shaping the future of AI in 2026.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Enterprise Automation Article */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Enterprise Automation</h3>
                <p className="text-sm text-gray-400">Revolution Guide</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete transformation guide covering cutting-edge AI technologies, 
              implementation strategies, and real-world success stories.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">AI Automation</span>
              <span className="text-xs text-gray-400">15 min read</span>
            </div>
            <Link 
              href="/blog/ai-2026-enterprise-automation-revolution"
              className="inline-flex items-center text-purple-300 hover:text-purple-200 transition-colors group-hover:translate-x-1 transform duration-200"
            >
              Read Article <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Quantum Computing Article */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Quantum AI</h3>
                <p className="text-sm text-gray-400">Breakthrough Technology</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Explore the revolutionary intersection of AI and quantum computing, 
              solving previously impossible problems in seconds.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full">Quantum AI</span>
              <span className="text-xs text-gray-400">18 min read</span>
            </div>
            <Link 
              href="/blog/ai-2026-quantum-computing-breakthrough"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors group-hover:translate-x-1 transform duration-200"
            >
              Read Article <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Global Success Case Study */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Global Success</h3>
                <p className="text-sm text-gray-400">Fortune 500 Case Study</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Real success stories from Fortune 500 companies achieving 500%+ ROI 
              with proven AI transformation strategies.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-green-300 bg-green-500/20 px-3 py-1 rounded-full">Case Study</span>
              <span className="text-xs text-gray-400">12 min read</span>
            </div>
            <Link 
              href="/case-studies/ai-2026-global-transformation-success"
              className="inline-flex items-center text-green-300 hover:text-green-200 transition-colors group-hover:translate-x-1 transform duration-200"
            >
              Read Case Study <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              What You'll Discover
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">500%+ ROI</h4>
              <p className="text-sm text-gray-400">Proven results from real implementations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">10,000x Faster</h4>
              <p className="text-sm text-gray-400">Quantum computing breakthroughs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">$50B+ Savings</h4>
              <p className="text-sm text-gray-400">Global cost savings achieved</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">95% Accuracy</h4>
              <p className="text-sm text-gray-400">AI-powered decision making</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Expert Consultation
            </Link>
          </div>
          
          <p className="text-gray-300 text-sm">
            Stay ahead of the curve with the latest AI insights and breakthrough technologies
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026ShowcaseBanner;