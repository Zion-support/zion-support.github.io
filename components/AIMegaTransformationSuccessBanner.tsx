import React from 'react';
import Link from 'next/link';
import { ArrowRight, DollarSign, TrendingUp, Zap, Users, Target } from 'lucide-react';

export default function AIMegaTransformationSuccessBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6">
              <span className="w-4 h-4 mr-2">📊</span>
              FEATURED CASE STUDY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Mega Transformation Success:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                $150M ROI Case Study
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Discover how a Fortune 500 company achieved unprecedented success with comprehensive AI transformation, 
              delivering $150M ROI, 95% automation efficiency, and zero-touch operations across their entire organization.
            </p>
            
            {/* Key Results */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <DollarSign className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold text-yellow-300">$150M</div>
                <div className="text-sm opacity-90">Total ROI</div>
              </div>
              <div className="text-center">
                <Zap className="w-6 h-6 mx-auto mb-2 text-blue-300" />
                <div className="text-2xl font-bold text-blue-300">95%</div>
                <div className="text-sm opacity-90">Automation</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-300" />
                <div className="text-2xl font-bold text-green-300">600%</div>
                <div className="text-sm opacity-90">Productivity</div>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-purple-300" />
                <div className="text-2xl font-bold text-purple-300">18mo</div>
                <div className="text-sm opacity-90">Payback</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-mega-transformation-success-2026"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <span className="mr-2">📖</span>
                Read Full Case Study
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog/ai-business-transformation-2026-complete-guide"
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-8 py-4 rounded-lg font-semibold text-lg border border-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
              >
                <span className="mr-2">📋</span>
                Get Implementation Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Transformation Results</h3>
              
              {/* Results Chart */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Process Automation</span>
                  <span className="text-lg font-bold text-yellow-300">95%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Productivity Improvement</span>
                  <span className="text-lg font-bold text-green-300">600%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-1000" style={{ width: '100%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Cost Reduction</span>
                  <span className="text-lg font-bold text-blue-300">$120M</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-3 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Customer Satisfaction</span>
                  <span className="text-lg font-bold text-purple-300">85%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-3 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">Fortune 500</div>
                  <div className="text-sm opacity-90">Manufacturing Company</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg animate-bounce">
              💰
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-black font-bold text-sm animate-pulse">
              🏆
            </div>
            <div className="absolute top-1/2 -right-6 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-black font-bold text-sm animate-ping">
              ⚡
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}