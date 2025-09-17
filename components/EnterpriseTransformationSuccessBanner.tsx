import React from 'react';
import Link from 'next/link';

export default function EnterpriseTransformationSuccessBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-12 left-12 w-20 h-20 bg-green-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-16 left-1/4 w-14 h-14 bg-purple-500/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-cyan-500/20 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-sm font-bold mb-6 animate-bounce">
            🏆 SUCCESS STORY
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
            AI 2026 Enterprise Transformation Breakthrough
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Fortune 500 company achieves 5,000% ROI through revolutionary AI 2026 quantum-neural fusion implementation
          </p>

          {/* Results comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-800/30 to-orange-800/30 backdrop-blur-sm rounded-lg p-6 border border-red-500/30">
              <h3 className="text-xl font-bold mb-4 text-red-200">Before AI 2026</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Production Efficiency:</span>
                  <span className="text-red-400 font-bold">60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Quality Issues:</span>
                  <span className="text-red-400 font-bold">$2.5M/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Lead Time:</span>
                  <span className="text-red-400 font-bold">45 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">ROI:</span>
                  <span className="text-red-400 font-bold">-15%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 backdrop-blur-sm rounded-lg p-6 border border-green-500/30">
              <h3 className="text-xl font-bold mb-4 text-green-200">After AI 2026</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Production Efficiency:</span>
                  <span className="text-green-400 font-bold">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Quality Issues:</span>
                  <span className="text-green-400 font-bold">$0.1M/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Lead Time:</span>
                  <span className="text-green-400 font-bold">12 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">ROI:</span>
                  <span className="text-green-400 font-bold">5,000%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="font-bold text-green-200 mb-1">Production Efficiency</h3>
              <p className="text-sm text-gray-300">Increased from 60% to 98%</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-bold text-blue-200 mb-1">Cost Reduction</h3>
              <p className="text-sm text-gray-300">Eliminated $2.4M in issues</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold text-purple-200 mb-1">Speed Improvement</h3>
              <p className="text-sm text-gray-300">73% faster lead times</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/case-studies/ai-2026-enterprise-transformation-breakthrough" 
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read Full Case Study
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Transformation
            </Link>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>Real Fortune 500 success story with documented results</p>
            <p className="mt-1">Implementation completed in 12 months with full ROI achieved</p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-2000"></div>
    </div>
  );
}