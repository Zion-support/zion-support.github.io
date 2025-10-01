import React from "react";
import { Sparkles, Zap, TrendingUp, Brain, Rocket } from "lucide-react";

export default function October2025UltimateAIBreakthroughBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          {/* Announcement Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-2xl animate-bounce">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-wider text-gray-900">
                🔥 JUST PUBLISHED: OCTOBER 1, 2025 🔥
              </span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Ultimate AI Breakthrough
            </span>
            <span className="block text-3xl md:text-5xl mt-4 text-blue-200">
              Revolutionary Intelligence Platform
            </span>
          </h1>

          {/* Value Proposition */}
          <div className="flex flex-wrap justify-center gap-6 text-xl md:text-2xl font-semibold">
            <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <span>$18.4B Success Story</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
              <Brain className="w-6 h-6 text-purple-400" />
              <span>99.98% Accuracy</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span>50,000x Performance</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Experience the next generation of artificial intelligence with our{" "}
            <span className="font-bold text-yellow-300">Ultimate AI Breakthrough Platform</span> - 
            delivering unprecedented performance, accuracy, and enterprise value creation.
          </p>

          {/* ROI Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-bold text-cyan-300">8,470%</div>
              <div className="text-lg text-blue-200 mt-2">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-bold text-purple-300">2,847</div>
              <div className="text-lg text-blue-200 mt-2">Enterprise Deployments</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-5xl font-bold text-green-300">99.99%</div>
              <div className="text-lg text-blue-200 mt-2">System Uptime</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              <span className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Get Started Today
              </span>
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              Download White Paper
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold mb-4">
              Trusted by Fortune 500 Companies
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Microsoft</div>
              <div className="text-2xl font-bold">Amazon</div>
              <div className="text-2xl font-bold">Google</div>
              <div className="text-2xl font-bold">IBM</div>
              <div className="text-2xl font-bold">Tesla</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
