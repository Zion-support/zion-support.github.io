import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, Brain, Zap, Target } from 'lucide-react';

const AutonomousEnterpriseBreakthroughBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 rounded-2xl border border-emerald-500/20 shadow-2xl">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(16,185,129,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-teal-600/10 to-transparent"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-8 right-8 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-28 h-28 bg-teal-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-cyan-500/20 rounded-full blur-lg animate-pulse delay-700"></div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="flex items-center gap-2 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
                <Cpu className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-200 text-sm font-medium">ENTERPRISE AI 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-teal-500/20 px-3 py-1 rounded-full border border-teal-400/30">
                <Brain className="w-4 h-4 text-teal-300" />
                <span className="text-teal-200 text-sm font-medium">AUTONOMOUS SYSTEMS</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Advanced Autonomous
              </span>
              <br />
              <span className="text-white">Enterprise Systems</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Transform your business with cognitive independence. 
              <span className="text-emerald-300 font-semibold"> 95% reduction</span> in manual intervention with 
              <span className="text-teal-300 font-semibold"> 300% faster</span> decision-making capabilities.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Target className="w-6 h-6 text-emerald-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">Self-Organizing Intelligence</h3>
                <p className="text-gray-300 text-sm">Systems adapt their architecture based on real-time performance</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Brain className="w-6 h-6 text-teal-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">Predictive Decision Making</h3>
                <p className="text-gray-300 text-sm">Anticipate business needs before they manifest</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <Zap className="w-6 h-6 text-cyan-400 mb-2" />
                <h3 className="text-white font-semibold mb-1">Autonomous Problem Resolution</h3>
                <p className="text-gray-300 text-sm">Identify and resolve issues without human intervention</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/blog/ai-2026-january-advanced-autonomous-enterprise-breakthrough"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
              >
                Read Full Article
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual Section */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              {/* Autonomous System Visualization */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 border border-emerald-400/30 backdrop-blur-sm">
                <div className="relative">
                  {/* Central Hub */}
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Connected Nodes */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * 60) * (Math.PI / 180);
                      const radius = 60;
                      const x = Math.cos(angle) * radius + 32;
                      const y = Math.sin(angle) * radius + 32;
                      
                      return (
                        <div
                          key={i}
                          className="absolute w-8 h-8 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-full flex items-center justify-center shadow-md animate-pulse"
                          style={{
                            left: `${x}px`,
                            top: `${y}px`,
                            animationDelay: `${i * 200}ms`
                          }}
                        >
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    {[...Array(6)].map((_, i) => {
                      const angle = (i * 60) * (Math.PI / 180);
                      const radius = 60;
                      const x = Math.cos(angle) * radius + 64;
                      const y = Math.sin(angle) * radius + 64;
                      
                      return (
                        <line
                          key={i}
                          x1="64"
                          y1="64"
                          x2={x}
                          y2={y}
                          stroke="url(#connectionGradient)"
                          strokeWidth="2"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      );
                    })}
                  </svg>
                </div>
                
                <div className="text-center mt-8">
                  <h3 className="text-white font-bold text-xl mb-2">Autonomous Enterprise Mesh</h3>
                  <p className="text-gray-300 text-sm">Self-organizing intelligence network</p>
                </div>
              </div>

              {/* Performance Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-emerald-500/20 rounded-lg p-4 border border-emerald-400/30 text-center">
                  <div className="text-2xl font-bold text-emerald-300">95%</div>
                  <div className="text-emerald-200 text-sm">Reduced Manual Work</div>
                </div>
                <div className="bg-teal-500/20 rounded-lg p-4 border border-teal-400/30 text-center">
                  <div className="text-2xl font-bold text-teal-300">300%</div>
                  <div className="text-teal-200 text-sm">Faster Decisions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
    </div>
  );
};

export default AutonomousEnterpriseBreakthroughBanner;