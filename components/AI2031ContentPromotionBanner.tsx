import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Star } from 'lucide-react';

export default function AI2031ContentPromotionBanner() {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full px-6 py-2 mb-6 text-sm font-semibold shadow-lg">
            <Star className="w-4 h-4 mr-2" />
            🔥 BREAKTHROUGH CONTENT - AI 2031
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The Future of AI is Here:
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> AI 2031 Breakthrough</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI technologies that will transform your business by 2031. 
            AGI, Quantum AI, and Neural Interfaces - all in one comprehensive content package.
          </p>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 mx-auto">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">AGI Predictions</h3>
              <p className="text-blue-100 text-sm">Expert analysis of Artificial General Intelligence emergence and business impact</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Quantum AI</h3>
              <p className="text-blue-100 text-sm">Quantum computing integration strategies and exponential performance gains</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4 mx-auto">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
              <p className="text-blue-100 text-sm">Brain-computer interface implementation and workforce transformation</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2031-future-predictions"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all text-lg shadow-lg flex items-center gap-2 group"
            >
              <Brain className="w-5 h-5" />
              🚀 Explore AI 2031 Predictions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/case-studies/ai-2031-enterprise-transformation-breakthrough"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all text-lg flex items-center gap-2 group"
            >
              <TrendingUp className="w-5 h-5" />
              💰 View 10,000% ROI Case Study
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link 
              href="/resources/ai-2031-implementation-master-guide"
              className="text-blue-200 hover:text-white transition-colors flex items-center gap-1"
            >
              📚 Implementation Master Guide
            </Link>
            <Link 
              href="/tools/ai-2031-roi-calculator"
              className="text-blue-200 hover:text-white transition-colors flex items-center gap-1"
            >
              🧮 ROI Calculator
            </Link>
            <Link 
              href="/webinars/ai-2031-breakthrough-webinar"
              className="text-blue-200 hover:text-white transition-colors flex items-center gap-1"
            >
              🎥 Free Webinar
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-purple-400 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
}