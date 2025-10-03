// import React from 'react';
import { Link } from 'react-router-dom';

const AI2026AutonomousCognitiveMeshBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600/20 border border-emerald-400/30 text-emerald-200 text-sm font-medium">
              🔮 BREAKTHROUGH: January 2026
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Autonomous Cognitive
              </span>
              <br />
              Mesh Revolution
            </h2>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              Transform your enterprise with autonomous cognitive mesh architectures. 
              Achieve 65% reduction in manual processes and 300% increase in innovation rate.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <div className="text-xl font-bold text-emerald-300">65%</div>
                <div className="text-xs text-gray-300">Less Manual Work</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <div className="text-xl font-bold text-teal-300">300%</div>
                <div className="text-xs text-gray-300">Faster Innovation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <div className="text-xl font-bold text-cyan-300">80%</div>
                <div className="text-xs text-gray-300">Faster Decisions</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog/ai-2026-autonomous-cognitive-mesh-enterprise-transformation"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105"
              >
                Explore Technology
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-emerald-400 hover:bg-emerald-400/10 rounded-lg font-semibold text-white transition-all duration-200"
              >
                Get Implementation
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-gradient-to-br from-emerald-800/50 to-cyan-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-medium">Cognitive Mesh Active</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Autonomous Nodes</span>
                    <span className="text-emerald-300 font-bold">247 Active</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Self-Healing Rate</span>
                    <span className="text-teal-300 font-bold">99.7%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-300">Real-time</div>
                    <div className="text-xs text-gray-400">Adaptation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-300">Zero</div>
                    <div className="text-xs text-gray-400">Downtime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated mesh network visualization */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full opacity-20">
          {[...Array(15)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <g key={i}>
                <line
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-emerald-400 animate-pulse"
                  style={{
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
                <circle
                  cx={`${x1}%`}
                  cy={`${y1}%`}
                  r="2"
                  fill="currentColor"
                  className="text-emerald-300"
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default AI2026AutonomousCognitiveMeshBanner;