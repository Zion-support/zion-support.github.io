import React from 'react';
import { Link } from 'react-router-dom';

const October2025CognitiveRevolutionBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 border-b border-purple-500/20 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle at 30% 50%,rgba(139,92,246,0.15),transparent 50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle at 70% 50%,rgba(99,102,241,0.15),transparent 50%)]"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Left side - Badge and Title */}
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div className="flex-shrink-0 mt-1">
              <div className="relative">


              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg animate-pulse">
                  🚀 BRAND NEW OCTOBER 2025
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-500 text-black shadow-lg">

                  BREAKTHROUGH CONTENT
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white shadow-lg">

                  $4.7B VALUE DELIVERED
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                🧠 Cognitive Computing Revolution: Human-Like AI Intelligence
              </h2>
              
              <p className="text-purple-100 text-sm sm:text-base leading-relaxed mb-3">
                <span className="font-bold text-yellow-300">JUST PUBLISHED TODAY:</span> Discover how Fortune 500 companies are deploying cognitive AI systems that understand, reason, and learn like humans — achieving{' '}
                <span className="font-bold text-green-300">98.7% decision accuracy</span>,{' '}
                <span className="font-bold text-green-300">$4.7B+ in value creation</span>, and{' '}
                <span className="font-bold text-green-300">3,600% ROI</span>. 
                Explore multi-agent orchestration (97.8% automation, $847M+ value), cognitive enterprise transformation, 
                and real-world telecom success story with transformational results!
              </p>
              
              {/* Featured content links */}
              <div className="flex flex-wrap gap-3 text-sm">
                <Link 
                  to="/blog/ai-2025-multiagent-enterprise-orchestration-revolution"
                  className="inline-flex items-center text-purple-200 hover:text-white transition-colors group"
                >

                  <span className="font-semibold">Multi-Agent Orchestration (97.8% Automation, $847M Value)</span>

                </Link>
                
                <span className="text-purple-400">•</span>
                
                <Link 
                  to="/blog/ai-2025-cognitive-computing-enterprise-transformation"
                  className="inline-flex items-center text-purple-200 hover:text-white transition-colors group"
                >

                  <span className="font-semibold">Cognitive AI Transformation (98.5% Accuracy, $1.2B Value)</span>

                </Link>
                
                <span className="text-purple-400">•</span>
                
                <Link 
                  to="/case-studies/global-telecom-cognitive-transformation-4-7-billion"
                  className="inline-flex items-center text-purple-200 hover:text-white transition-colors group"
                >

                  <span className="font-semibold">Fortune 20 Telecom Case Study ($4.7B Success, 3,602% ROI)</span>

                </Link>
              </div>
            </div>
          </div>
          
          {/* Right side - CTA Button */}
          <div className="flex-shrink-0">
            <Link
              to="/blog"
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <span>Explore Cognitive AI Revolution</span>

            </Link>
          </div>
        </div>
        
        {/* Bottom stats bar */}
        <div className="mt-4 pt-4 border-t border-purple-500/30">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">98.7%</div>
              <div className="text-xs text-purple-200">Decision Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">$4.7B+</div>
              <div className="text-xs text-purple-200">Value Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">3,600%</div>
              <div className="text-xs text-purple-200">Average ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">97.8%</div>
              <div className="text-xs text-purple-200">Automation Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025CognitiveRevolutionBanner;
