import React from "react";
import { Shield, Cpu, Globe, Award } from "lucide-react";

export default function October2025NextGenEnterpriseAIBanner() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full">
              <span className="text-emerald-400 font-bold text-sm">
                💎 NEW: OCTOBER 2025 BREAKTHROUGH
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Next-Gen Enterprise AI
              </span>
              <br />
              <span className="text-gray-300">
                Platform Revolution
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed">
              Transform your enterprise with cutting-edge AI infrastructure delivering 
              <span className="font-bold text-emerald-400"> 92% automation</span>, 
              <span className="font-bold text-cyan-400"> $4.7B cost savings</span>, and 
              <span className="font-bold text-purple-400"> 10x productivity gains</span>.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Enterprise Security</div>
                  <div className="text-sm text-gray-500">99.99% Protection</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cpu className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Neural Processing</div>
                  <div className="text-sm text-gray-500">100,000x Faster</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Global Scale</div>
                  <div className="text-sm text-gray-500">147 Countries</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Industry Leader</div>
                  <div className="text-sm text-gray-500">84 Awards</div>
                </div>
              </div>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-bold text-lg shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
              Explore Platform →
            </button>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-emerald-400 mb-2">$4.7B</div>
              <div className="text-gray-400">Annual Savings</div>
              <div className="text-sm text-emerald-500 mt-2">↑ 340% YoY</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">92%</div>
              <div className="text-gray-400">Automation Rate</div>
              <div className="text-sm text-cyan-500 mt-2">Industry Leading</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-gray-400">Productivity Gain</div>
              <div className="text-sm text-purple-500 mt-2">Proven Results</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20 rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1,847%</div>
              <div className="text-gray-400">Average ROI</div>
              <div className="text-sm text-yellow-500 mt-2">3-Year Period</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
