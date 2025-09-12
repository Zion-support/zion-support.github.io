import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Globe, TrendingUp, Star } from 'lucide-react';

export default function AI2031ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full px-6 py-2 mb-6 text-sm font-bold shadow-lg">
            <Star className="w-4 h-4 mr-2" />
            🚀 AI 2031 BREAKTHROUGH CONTENT
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of AI is 
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Here</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover revolutionary AI 2031 technologies: AGI emergence, quantum AI integration, 
            neural interfaces, and proven strategies for achieving <span className="text-yellow-400 font-bold">10,000% ROI</span>.
          </p>
          
          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Brain className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">AGI Systems</h3>
              <p className="text-sm text-blue-100">Artificial General Intelligence breakthrough</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quantum AI</h3>
              <p className="text-sm text-blue-100">Exponential computing power</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-3">
                <Globe className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">Neural Interfaces</h3>
              <p className="text-sm text-blue-100">Direct brain-AI communication</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2031-future-predictions"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Brain className="w-5 h-5" />
              Explore AI 2031 Predictions
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/case-studies/ai-2031-enterprise-transformation-breakthrough"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              <TrendingUp className="w-5 h-5 inline mr-2" />
              View 10,000% ROI Case Study
            </Link>
          </div>
          
          {/* Additional CTAs */}
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link
              href="/resources/ai-2031-implementation-master-guide"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              📚 Download Master Guide
            </Link>
            <Link
              href="/tools/ai-2031-roi-calculator"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              💰 Calculate Your ROI
            </Link>
            <Link
              href="/contact"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              💬 Get Expert Consultation
            </Link>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10,000%</div>
            <div className="text-blue-100 text-sm">Average ROI Achieved</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-blue-100 text-sm">Process Automation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500%</div>
            <div className="text-blue-100 text-sm">Efficiency Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
            <div className="text-blue-100 text-sm">Fortune 500 Success Stories</div>
          </div>
        </div>
      </div>
    </div>
  );
}