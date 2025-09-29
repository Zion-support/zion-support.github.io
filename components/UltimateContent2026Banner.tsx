import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';

export default function UltimateContent2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6 shadow-lg">
            <Star className="w-5 h-5 mr-2" />
            ULTIMATE CONTENT COLLECTION 2026
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
              That Changes Everything
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI innovation content, case studies, 
            and breakthrough technologies that are reshaping industries in 2026.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-blue-200 text-sm">New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-300 mb-2">25+</div>
              <div className="text-blue-200 text-sm">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">$100M+</div>
              <div className="text-blue-200 text-sm">ROI Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-300 mb-2">1000x</div>
              <div className="text-blue-200 text-sm">Performance Gains</div>
            </div>
          </div>
        </div>
        
        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Autonomous Enterprise */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Autonomous Enterprise</h3>
                <p className="text-blue-200 text-sm">$25M ROI Success</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Discover how Fortune 500 companies achieved 95% automation and $25M ROI through autonomous AI systems.
            </p>
            <Link 
              href="/blog/ai-autonomous-enterprise-2026"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Read More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          {/* Quantum Optimization */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Quantum AI</h3>
                <p className="text-blue-200 text-sm">1000x Performance</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Revolutionary quantum optimization techniques delivering unprecedented performance gains across industries.
            </p>
            <Link 
              href="/blog/ai-quantum-optimization-2026"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Read More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          {/* Success Stories */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mr-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Success Stories</h3>
                <p className="text-blue-200 text-sm">Real Results</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm mb-4">
              Explore detailed case studies showcasing how companies achieved extraordinary results with AI transformation.
            </p>
            <Link 
              href="/case-studies/ai-autonomous-enterprise-success-2026"
              className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Read More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🚀 Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all"
            >
              📊 View Case Studies
            </Link>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📞 Call +1 302 464 0950
            </a>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              Trusted by 500+ Companies
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
              $100M+ ROI Delivered
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 text-purple-400 mr-2" />
              99.9% Success Rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}