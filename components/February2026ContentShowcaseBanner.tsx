import React from 'react';
import Link from 'next/link';

const February2026ContentShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 border border-indigo-500/30 rounded-2xl p-8 mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                <span className="text-pink-400 text-sm font-medium">FEBRUARY 2026 SHOWCASE</span>
              </div>
              <div className="px-3 py-1 bg-indigo-600/30 border border-indigo-400/50 rounded-full">
                <span className="text-indigo-200 text-xs font-medium">NEW CONTENT</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              🌟🌟🌟 February 2026 Revolutionary Content Showcase
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-purple-200 mb-6 leading-relaxed">
              💎💎💎 FEATURED: Next-Generation Autonomous Systems, $2.7B Success Story, Complete Implementation Guide - ALL NEW! 💎💎💎
            </p>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Blog Post */}
              <div className="bg-black/20 border border-white/10 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">📖</span>
                  </div>
                  <span className="text-purple-200 font-semibold">Complete Guide</span>
                </div>
                <h3 className="text-white font-bold mb-2">Next-Generation Autonomous Systems Revolution</h3>
                <p className="text-gray-300 text-sm mb-4">Comprehensive implementation framework achieving 99.99% uptime with zero human intervention</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">18 min read</div>
                  <Link href="/content/blog/ai-2026-february-next-generation-autonomous-systems-revolution" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                    Read More →
                  </Link>
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-black/20 border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">💰</span>
                  </div>
                  <span className="text-blue-200 font-semibold">Success Story</span>
                </div>
                <h3 className="text-white font-bold mb-2">Fortune 500 $2.7B Transformation</h3>
                <p className="text-gray-300 text-sm mb-4">Global manufacturing conglomerate achieves 1,847% ROI with autonomous systems</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">12 min read</div>
                  <Link href="/content/case-studies/ai-2026-february-fortune-500-autonomous-systems-2-7-billion-success" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    View Case →
                  </Link>
                </div>
              </div>

              {/* Services */}
              <div className="bg-black/20 border border-white/10 rounded-xl p-6 hover:border-green-400/50 transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">🚀</span>
                  </div>
                  <span className="text-green-200 font-semibold">Consulting</span>
                </div>
                <h3 className="text-white font-bold mb-2">Autonomous Systems Consulting</h3>
                <p className="text-gray-300 text-sm mb-4">Expert implementation services for next-generation autonomous systems transformation</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">Services</div>
                  <Link href="/content/services/ai-2026-february-next-generation-autonomous-systems-consulting" className="text-green-400 hover:text-green-300 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border border-purple-400/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-300 mb-1">99.99%</div>
                <div className="text-xs text-gray-300">System Uptime</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-400/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-300 mb-1">$2.7B</div>
                <div className="text-xs text-gray-300">Annual Savings</div>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 border border-green-400/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-300 mb-1">1,847%</div>
                <div className="text-xs text-gray-300">ROI Achievement</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 border border-yellow-400/30 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-300 mb-1">&lt;10ms</div>
                <div className="text-xs text-gray-300">Response Time</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/content/blog/ai-2026-february-next-generation-autonomous-systems-revolution"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                📚 Explore All Content
              </Link>
              <Link 
                href="/content/services/ai-2026-february-next-generation-autonomous-systems-consulting"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-lg transition-all duration-200"
              >
                🚀 Start Transformation
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Content Showcase Icon */}
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-6xl">🌟</div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-indigo-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-300">
                🎯 <span className="font-semibold text-white">Complete Content Suite:</span> Revolutionary guides, proven success stories, and expert consulting services
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <span className="text-pink-400 text-sm font-medium">NEW & UPDATED</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default February2026ContentShowcaseBanner;