import React from 'react';
import Link from 'next/link';
import { CogIcon, BoltIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const AdvancedAutomationMastery2025PromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-500/10 to-transparent animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
                <CogIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">
                NEW: Automation Mastery 2025
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Advanced Automation
              </span>
              <br />
              <span className="text-white">Master Your Operations</span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Transform your business with cutting-edge AI automation solutions. 
              Achieve 99.9% accuracy, 10,000x faster processing, and 2500% ROI improvement 
              with our revolutionary automation platform.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
                <div className="text-sm text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">10,000x</div>
                <div className="text-sm text-gray-300">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">2500%</div>
                <div className="text-sm text-gray-300">ROI Improvement</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/advanced-automation-mastery-2025"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Master Automation
                <BoltIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/advanced-automation-mastery-2025/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
                <ChartBarIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Content - Automation Dashboard */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-800/30 to-indigo-800/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Automation Dashboard</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm">Live</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium">Process Speed</span>
                    <BoltIcon className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-blue-400">10,000x</div>
                  <div className="text-xs text-gray-400">vs Manual</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium">Accuracy</span>
                    <ChartBarIcon className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-xs text-gray-400">Error-free</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium">ROI Boost</span>
                    <CurrencyDollarIcon className="h-4 w-4 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400">2500%</div>
                  <div className="text-xs text-gray-400">Cost Savings</div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium">Uptime</span>
                    <CogIcon className="h-4 w-4 text-indigo-400" />
                  </div>
                  <div className="text-2xl font-bold text-indigo-400">24/7</div>
                  <div className="text-xs text-gray-400">Continuous</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Process Automation</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-[95%] animate-pulse" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Data Processing</span>
                    <span>98%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full w-[98%] animate-pulse delay-500" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>Workflow Optimization</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-[92%] animate-pulse delay-1000" />
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">Active Automations</span>
                  <span className="text-white font-semibold">1,247</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-300 text-sm">Tasks Completed Today</span>
                  <span className="text-white font-semibold">45,892</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full animate-bounce" />
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full animate-bounce delay-1000" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAutomationMastery2025PromotionBanner;