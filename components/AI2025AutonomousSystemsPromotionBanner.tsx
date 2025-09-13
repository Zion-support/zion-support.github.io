import React from 'react';
import Link from 'next/link';

export default function AI2025AutonomousSystemsPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-8 w-24 h-24 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-0 left-1/3 w-20 h-20 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-4 right-1/4 w-16 h-16 bg-white rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Main content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
                BREAKTHROUGH
              </span>
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                NEW
              </span>
              <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                2025
              </span>
            </div>
            
            <h2 className="text-xl lg:text-2xl font-bold mb-2">
              🚀 AI 2025: Next-Generation Autonomous Systems Revolution
            </h2>
            
            <p className="text-sm lg:text-base opacity-90 mb-3">
              Achieve <strong className="text-yellow-300">1,200% ROI</strong> with self-healing, self-optimizing autonomous systems. 
              Complete implementation guide with proven frameworks.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>99.8% System Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-300">✓</span>
                <span>85% Cost Reduction</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-300">✓</span>
                <span>450% Efficiency Gain</span>
              </div>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <Link 
              href="/blog/ai-2025-next-generation-autonomous-systems"
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
            >
              📖 Read Article
            </Link>
            
            <Link 
              href="/case-studies/ai-2025-global-manufacturing-autonomy-breakthrough"
              className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-sm whitespace-nowrap"
            >
              📊 View Case Study
            </Link>
            
            <Link 
              href="/resources/ai-2025-autonomous-systems-implementation-master-guide"
              className="bg-yellow-500 text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-sm whitespace-nowrap"
            >
              📚 Get Guide
            </Link>
          </div>
        </div>
        
        {/* Quick stats */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-300">1,200%</div>
              <div className="text-xs opacity-80">ROI Achieved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-300">99.8%</div>
              <div className="text-xs opacity-80">System Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-300">85%</div>
              <div className="text-xs opacity-80">Cost Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-300">450%</div>
              <div className="text-xs opacity-80">Efficiency Gain</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}