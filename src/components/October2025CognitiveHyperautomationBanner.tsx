import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025CognitiveHyperautomationBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 border-4 border-purple-500 rounded-2xl shadow-2xl mb-8 animate-pulse-slow">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        {/* Header Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-purple-500/30 border-2 border-purple-400 rounded-full px-5 py-2 backdrop-blur-sm animate-bounce-slow">

            <span className="text-yellow-300 font-black text-sm tracking-wider">
              🔥 REVOLUTIONARY BREAKTHROUGH • OCTOBER 2025 • JUST PUBLISHED 🔥
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Main Message */}
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 bg-clip-text text-transparent leading-tight animate-gradient">
              Cognitive Hyperautomation Platform
            </h2>
            
            <p className="text-2xl md:text-3xl font-bold text-purple-100 mb-4">
              The Next Evolution in Enterprise Intelligence
            </p>

            <div className="flex items-center gap-3 mb-6">

              <p className="text-xl text-purple-200 font-semibold">
                98.9% Automation • 15,200% ROI • Fortune 50 Validated
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 bg-purple-800/40 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30">

                <span className="text-purple-100 font-semibold">
                  25,000+ Autonomous AI Agents • Real-Time Cognitive Intelligence
                </span>
              </div>
              <div className="flex items-center gap-3 bg-purple-800/40 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30">

                <span className="text-purple-100 font-semibold">
                  $14.7B Fortune 50 Success Story • 94% Process Automation
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/blog/ai-2025-october-cognitive-hyperautomation-platform"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-black text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-white/20"
            >

              <span>Discover the Revolution</span>

            </Link>
          </div>

          {/* Right Column - Metrics */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-purple-800/60 to-purple-900/60 backdrop-blur-md border-2 border-purple-400/50 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text mb-2">
                $38.5B
              </div>
              <div className="text-xl font-bold text-purple-200">Total Value Creation</div>
              <div className="text-sm text-purple-300 mt-2">Validated across enterprise deployments</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-pink-800/60 to-purple-900/60 backdrop-blur-md border-2 border-pink-400/50 rounded-xl p-4 shadow-xl">
                <div className="text-3xl md:text-4xl font-black text-pink-300 mb-1">98.9%</div>
                <div className="text-sm font-bold text-purple-200">Automation Rate</div>
              </div>
              <div className="bg-gradient-to-br from-purple-800/60 to-pink-900/60 backdrop-blur-md border-2 border-purple-400/50 rounded-xl p-4 shadow-xl">
                <div className="text-3xl md:text-4xl font-black text-purple-300 mb-1">15,200%</div>
                <div className="text-sm font-bold text-purple-200">Average ROI</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/60 to-purple-900/60 backdrop-blur-md border-2 border-green-400/50 rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-2 mb-2">

                <div className="text-lg font-bold text-purple-200">Fortune 50 Success</div>
              </div>
              <div className="text-2xl font-black text-green-300">$14.7B Business Impact</div>
              <div className="text-sm text-purple-300 mt-1">Global manufacturing leader transformation</div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Highlights */}
        <div className="mt-8 pt-6 border-t-2 border-purple-500/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-black text-purple-300 mb-1">25,000+</div>
              <div className="text-sm text-purple-200">AI Agents</div>
            </div>
            <div>
              <div className="text-2xl font-black text-pink-300 mb-1">50,000+</div>
              <div className="text-sm text-purple-200">Processes Automated</div>
            </div>
            <div>
              <div className="text-2xl font-black text-yellow-300 mb-1">99.7%</div>
              <div className="text-sm text-purple-200">Decision Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-black text-green-300 mb-1">87%</div>
              <div className="text-sm text-purple-200">Faster Execution</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
