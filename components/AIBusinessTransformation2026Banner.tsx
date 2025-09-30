import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Zap, Users } from 'lucide-react';

export default function AIBusinessTransformation2026Banner() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6">
              <span className="w-4 h-4 mr-2">🚀</span>
              NEW 2026 TRANSFORMATION GUIDE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Business Transformation 2026:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Complete Guide to Revolutionary Change
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Master the proven 7-phase framework that's delivering $50M+ ROI and 500% productivity gains 
              across Fortune 500 companies. Learn from real-world success stories and implementation strategies.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <DollarSign className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                <div className="text-2xl font-bold text-yellow-300">$50M+</div>
                <div className="text-sm opacity-90">Average ROI</div>
              </div>
              <div className="text-center">
                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-300" />
                <div className="text-2xl font-bold text-green-300">500%</div>
                <div className="text-sm opacity-90">Productivity</div>
              </div>
              <div className="text-center">
                <Zap className="w-6 h-6 mx-auto mb-2 text-blue-300" />
                <div className="text-2xl font-bold text-blue-300">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-purple-300" />
                <div className="text-2xl font-bold text-purple-300">18mo</div>
                <div className="text-sm opacity-90">Payback</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-business-transformation-2026-complete-guide"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <span className="mr-2">📖</span>
                Read Complete Guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies/ai-mega-transformation-success-2026"
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-8 py-4 rounded-lg font-semibold text-lg border border-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
              >
                <span className="mr-2">📊</span>
                View $150M Case Study
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">7-Phase Transformation Framework</h3>
              <div className="space-y-4">
                {[
                  { phase: "1", title: "Strategic Assessment", progress: "100%" },
                  { phase: "2", title: "Technology Architecture", progress: "100%" },
                  { phase: "3", title: "Pilot Implementation", progress: "100%" },
                  { phase: "4", title: "Scale & Integration", progress: "100%" },
                  { phase: "5", title: "Advanced AI Deployment", progress: "100%" },
                  { phase: "6", title: "Continuous Optimization", progress: "100%" },
                  { phase: "7", title: "Innovation & Expansion", progress: "100%" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                      {item.phase}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{item.title}</span>
                        <span className="text-xs opacity-75">{item.progress}</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: item.progress }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">$150M ROI</div>
                  <div className="text-sm opacity-90">Achieved in 18 Months</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-lg animate-bounce">
              💰
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-black font-bold text-sm animate-pulse">
              ⚡
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}