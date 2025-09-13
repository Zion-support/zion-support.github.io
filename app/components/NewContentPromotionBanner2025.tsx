import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, TrendingUp, Zap, Star, ExternalLink } from 'lucide-react';

export default function NewContentPromotionBanner2025() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-cyan-500/20 rounded-xl">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      
      <div className="relative px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-cyan-400 text-sm font-semibold uppercase tracking-wide">New Content Available</div>
                  <div className="text-white text-lg font-bold">Revolutionary AI Resources 2025</div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Ultimate Content Hub
                </span>
                <br />
                <span className="text-3xl md:text-4xl">Now Live!</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                Access comprehensive AI implementation guides, video tutorials, case studies, 
                and technical documentation. Everything you need for 2,500-5,000% ROI transformation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-gray-300">
                  <BookOpen className="h-5 w-5 text-cyan-400 mr-2" />
                  <span className="text-sm">Implementation Guides</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="h-5 w-5 text-purple-400 mr-2" />
                  <span className="text-sm">Case Studies</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <TrendingUp className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-sm">Research Insights</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Zap className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-sm">Video Tutorials</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/content-hub-ultimate" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Content Hub
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/ai-implementation-guide-2025" 
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Start with Guide
                </Link>
              </div>
            </div>
            
            {/* Right Content - Featured Resources */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full">
                    Featured Guide
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">AI Implementation Mastery Guide 2025-2026</h3>
                <p className="text-gray-300 text-sm mb-4">Complete roadmap for AI transformation with proven methodologies for 2,500-5,000% ROI</p>
                <Link 
                  href="/ai-implementation-guide-2025"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors duration-300"
                >
                  Read Guide
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-400 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-semibold rounded-full">
                    Success Stories
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Real-World AI Transformations</h3>
                <p className="text-gray-300 text-sm mb-4">See how businesses achieved 99.9% efficiency and $50M+ savings with our AI solutions</p>
                <Link 
                  href="/case-studies-comprehensive"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors duration-300"
                >
                  View Case Studies
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-green-500/20 hover:border-green-400 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full">
                    Service Catalog
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Comprehensive AI Services</h3>
                <p className="text-gray-300 text-sm mb-4">Explore our full portfolio of AI services including autonomous operations, quantum computing, and neural interfaces</p>
                <Link 
                  href="/ai-services-comprehensive"
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold text-sm transition-colors duration-300"
                >
                  View Services
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-8 w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
    </div>
  );
}