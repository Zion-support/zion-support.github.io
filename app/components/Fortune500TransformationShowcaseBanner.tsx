
import { ArrowRight, Award, CheckCircle, TrendingUp, Users } from 'lucide-react';

import React from 'react';

import { ArrowRight, Users, TrendingUp, CheckCircle, Award, Star } from 'lucide-react';

export default function Fortune500TransformationShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 border border-emerald-500/30 rounded-2xl p-8 mb-8 shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2 mb-4">
            <Award className="w-5 h-5 text-emerald-300 animate-pulse" />
            <span className="text-emerald-300 font-semibold text-sm">🏆🏆🏆 CASE STUDY: FORTUNE 500 AUTONOMOUS ENTERPRISE TRANSFORMATION - PROVEN SUCCESS! 🏆🏆🏆</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Fortune 500
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Transformation Success
            </span>
          </h2>
          
          <p className="text-xl text-teal-200 max-w-4xl mx-auto leading-relaxed">
            💎💎💎 PROVEN RESULTS: Complete transformation of a Fortune 500 manufacturing company achieving <span className="text-yellow-400 font-bold">99.99% operational autonomy</span> with <span className="text-yellow-400 font-bold">$3.2B annual savings</span> and <span className="text-yellow-400 font-bold">847% ROI</span>! 💎💎💎
          </p>
        </div>

        {/* Key Results */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-emerald-800/50 to-teal-800/50 border border-emerald-400/30 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-emerald-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">99.99%</h3>
            <p className="text-emerald-200">Operational Autonomy</p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-800/50 to-cyan-800/50 border border-teal-400/30 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-teal-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">$3.2B</h3>
            <p className="text-teal-200">Annual Savings</p>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-800/50 to-blue-800/50 border border-cyan-400/30 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-cyan-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">847%</h3>
            <p className="text-cyan-200">ROI Achieved</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-800/50 to-emerald-800/50 border border-blue-400/30 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">18</h3>
            <p className="text-blue-200">Months to ROI</p>
          </div>
        </div>

        {/* Company Profile */}
        <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 border border-slate-400/30 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Company Profile</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-300" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">$47.8B</h4>
              <p className="text-slate-300 text-sm">Annual Revenue</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-teal-300" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">127,000+</h4>
              <p className="text-slate-300 text-sm">Global Employees</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-cyan-300" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">340+</h4>
              <p className="text-slate-300 text-sm">Global Facilities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-300" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">47</h4>
              <p className="text-slate-300 text-sm">Countries</p>
            </div>
          </div>
        </div>

        {/* Transformation Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-emerald-400" />
              Performance Improvements
            </h3>
            
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-400/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-200 font-semibold">Supply Chain Excellence</span>
                  <span className="text-green-300 font-bold">99.8%</span>
                </div>
                <p className="text-green-300 text-sm">On-time delivery rate with 89% reduction in disruptions</p>
              </div>
              
              <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 border border-teal-400/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-teal-200 font-semibold">Manufacturing Optimization</span>
                  <span className="text-teal-300 font-bold">99.7%</span>
                </div>
                <p className="text-teal-300 text-sm">Production efficiency with 94% reduction in downtime</p>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-400/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cyan-200 font-semibold">Quality Control</span>
                  <span className="text-cyan-300 font-bold">99.9%</span>
                </div>
                <p className="text-cyan-300 text-sm">Defect detection rate with 94% reduction in quality issues</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-teal-400" />
              Financial Impact
            </h3>
            
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-emerald-600/20 to-green-600/20 border border-emerald-400/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-emerald-200 font-semibold">Operational Efficiency</span>
                  <span className="text-emerald-300 font-bold">$1.8B</span>
                </div>
                <p className="text-emerald-300 text-sm">Annual savings through autonomous operations</p>
              </div>
              
              <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 border border-teal-400/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-teal-200 font-semibold">Supply Chain Optimization</span>
                  <span className="text-teal-300 font-bold">$847M</span>
                </div>
                <p className="text-teal-300 text-sm">Savings through intelligent supply chain management</p>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-400/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cyan-200 font-semibold">Quality Control Automation</span>
                  <span className="text-cyan-300 font-bold">$340M</span>
                </div>
                <p className="text-cyan-300 text-sm">Savings through automated quality assurance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-gradient-to-r from-emerald-800/30 to-teal-800/30 border border-emerald-400/30 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Implementation Timeline</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-300">1</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Foundation (Months 1-6)</h4>
              <p className="text-slate-300 text-sm">Autonomous system architecture deployment with 99.7% uptime and $847M initial savings</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-300">2</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Optimization (Months 7-12)</h4>
              <p className="text-slate-300 text-sm">Advanced intelligence integration achieving 94% autonomy and $1.8B cumulative savings</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-300">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Full Autonomy (Months 13-18)</h4>
              <p className="text-slate-300 text-sm">Complete transformation with 99.99% autonomy and 847% ROI achievement</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="flex items-center gap-2">
                Replicate This Success
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group border-2 border-emerald-400/50 hover:border-emerald-400 text-emerald-300 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-emerald-500/20">
              <span className="flex items-center gap-2">
                Download Complete Case Study
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
          
          <p className="text-slate-400 mt-4 text-sm">
            🏆 Proven Results: 99.9% Success Rate • 18-Month Implementation • 847% ROI Guarantee
          </p>
        </div>
      </div>
    </div>
  );
}