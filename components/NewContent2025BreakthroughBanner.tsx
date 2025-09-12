import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, Target, TrendingUp } from 'lucide-react';

export default function NewContent2025BreakthroughBanner() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Breaking News Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-500 text-white text-sm font-bold mb-6 animate-bounce">
            <Zap className="w-5 h-5 mr-2" />
            🚀 BREAKING: NEW AI 2025 BREAKTHROUGHS RELEASED
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
            Revolutionary AI 2025 Content
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most <span className="font-bold text-yellow-300">revolutionary AI breakthroughs</span> of 2025, 
            featuring <span className="font-bold text-cyan-300">2,000% ROI case studies</span> and 
            <span className="font-bold text-green-300"> comprehensive implementation guides</span>.
          </p>
          
          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Brain className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <h3 className="font-bold text-lg mb-1">Revolutionary Breakthroughs</h3>
              <p className="text-sm text-white/80">Quantum-Neural Fusion & Autonomous Systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Target className="w-8 h-8 text-cyan-300 mx-auto mb-2" />
              <h3 className="font-bold text-lg mb-1">2,000% ROI Success</h3>
              <p className="text-sm text-white/80">Fortune 500 Transformation Case Study</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <TrendingUp className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <h3 className="font-bold text-lg mb-1">Complete Toolkit</h3>
              <p className="text-sm text-white/80">Ultimate Implementation Guide & Templates</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-revolutionary-breakthroughs" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Brain className="w-5 h-5 mr-2" />
              Explore Breakthroughs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" 
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Target className="w-5 h-5 mr-2" />
              View 2000% ROI Case Study
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Get Implementation Toolkit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          {/* Additional Content Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/blog/ai-2025-comprehensive-trends-analysis" className="text-white/80 hover:text-yellow-300 transition-colors underline">
              📊 AI 2025 Trends Analysis
            </Link>
            <span className="text-white/40">•</span>
            <Link href="/ai-2025-revolutionary-breakthroughs" className="text-white/80 hover:text-cyan-300 transition-colors underline">
              🚀 Revolutionary Breakthroughs
            </Link>
            <span className="text-white/40">•</span>
            <Link href="/case-studies" className="text-white/80 hover:text-green-300 transition-colors underline">
              📈 Success Stories
            </Link>
            <span className="text-white/40">•</span>
            <Link href="/resources" className="text-white/80 hover:text-purple-300 transition-colors underline">
              🛠️ Resources & Tools
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}