import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';

export default function AutonomousEnterprisePromoBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                🔥 NEW 2026
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                FEATURED CASE STUDY
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              AI Autonomous Enterprise Success: $25M ROI Case Study
            </h2>
            
            <p className="text-lg mb-6 opacity-90">
              See how a Fortune 500 manufacturing company achieved complete business autonomy with 99.9% uptime, 90% cost reduction, and $25M ROI in 18 months.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-300" />
                  <span className="text-sm">$25M ROI</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">99.9% Uptime</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/case-studies/ai-autonomous-enterprise-success-2026"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/blog/ai-autonomous-enterprise-2026"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Read Guide
              </Link>
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fortune 500 Success</h3>
                <p className="text-sm opacity-90 mb-4">
                  Complete autonomous enterprise transformation with measurable results
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Process Automation</span>
                    <span className="font-semibold">95%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cost Reduction</span>
                    <span className="font-semibold">90%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>System Uptime</span>
                    <span className="font-semibold">99.9%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}