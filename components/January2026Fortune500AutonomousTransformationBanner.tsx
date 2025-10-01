import React from 'react';
import { ArrowRight, Building2, TrendingUp, Target, Award, Users } from 'lucide-react';

export default function January2026Fortune500AutonomousTransformationBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 border border-emerald-500/30 rounded-2xl p-8 mb-8">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full">
            <Building2 className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm">CASE STUDY</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full">
            <Award className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm">FORTUNE 500</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          🏢🏢🏢 FORTUNE 500 AUTONOMOUS ENTERPRISE TRANSFORMATION 🏢🏢🏢
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-teal-200 mb-6 font-semibold">
          💰💰💰 COMPLETE SUCCESS STORY: $3.2B Annual Savings, 99.97% Autonomy, 847% ROI - PROVEN RESULTS! 💰💰💰
        </h2>

        {/* Key Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
              <span className="text-white font-bold">$3.2B Savings</span>
            </div>
            <p className="text-teal-200 text-sm">47% reduction in operational costs annually</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-teal-400" />
              <span className="text-white font-bold">99.97% Autonomy</span>
            </div>
            <p className="text-teal-200 text-sm">Complete operational autonomy achieved</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-6 h-6 text-cyan-400" />
              <span className="text-white font-bold">847% ROI</span>
            </div>
            <p className="text-teal-200 text-sm">Return on investment within 12 months</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-green-400" />
              <span className="text-white font-bold">45K+ Employees</span>
            </div>
            <p className="text-teal-200 text-sm">Global workforce transformation</p>
          </div>
        </div>

        {/* Transformation Journey */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">🚀 TRANSFORMATION JOURNEY HIGHLIGHTS:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-emerald-300">Phase 1: Foundation</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <span className="text-teal-200 text-sm">$847M savings in first 6 months</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <span className="text-teal-200 text-sm">45% improvement in efficiency</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <span className="text-teal-200 text-sm">78% reduction in quality defects</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-teal-300">Phase 2: Expansion</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                  <span className="text-teal-200 text-sm">$1.8B additional savings</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                  <span className="text-teal-200 text-sm">99.5% operational autonomy</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mt-2"></div>
                  <span className="text-teal-200 text-sm">156% increase in customer satisfaction</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-cyan-300">Phase 3: Mastery</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-teal-200 text-sm">$3.2B total annual savings</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-teal-200 text-sm">99.97% full autonomy</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <span className="text-teal-200 text-sm">Zero safety incidents</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">📊 COMPANY TRANSFORMATION STATS:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">$18.5B</div>
              <div className="text-teal-200 text-sm">Annual Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">127</div>
              <div className="text-teal-200 text-sm">Global Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">23</div>
              <div className="text-teal-200 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">18</div>
              <div className="text-teal-200 text-sm">Months to Complete</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">PROVEN RESULTS</span>
            </div>
            <span className="text-teal-200 text-sm">Complete case study with implementation details</span>
          </div>
          
          <div className="flex gap-3">
            <a 
              href="/content/case-studies/fortune-500-autonomous-enterprise-transformation-2026"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              <Building2 className="w-5 h-5" />
              Read Case Study
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a 
              href="/content/guides/complete-autonomous-enterprise-implementation-guide-2026"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              <Target className="w-5 h-5" />
              Get Implementation Guide
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Footer ROI Stats */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">6.8</div>
              <div className="text-sm text-teal-200">Month Payback</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">$12.4B</div>
              <div className="text-sm text-teal-200">5-Year NPV</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">340%</div>
              <div className="text-sm text-teal-200">Efficiency Gain</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-teal-200">Quality Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}