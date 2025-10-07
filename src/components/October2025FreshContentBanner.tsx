import React from 'react';
import { Link } from 'react-router-dom';

const October2025FreshContentBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-16 px-6 rounded-3xl mb-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-400/30 rounded-full px-6 py-2 mb-6">

            <span className="text-indigo-300 font-semibold text-sm uppercase tracking-wider">Just Published • October 1, 2025</span>

          </div>
          
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            🚀 4 New Enterprise AI Strategies You Can't Miss
          </h2>
          
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Fresh insights on DevSecOps automation, multimodal customer experience, autonomous networking, 
            and advanced prompt engineering—featuring real ROI metrics and implementation blueprints
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Article 1 - DevSecOps */}
          <Link 
            to="/blog/ai-2025-october-devsecops-continuous-compliance-automation"
            className="group bg-gradient-to-br from-indigo-800/40 to-purple-900/40 backdrop-blur-sm border border-indigo-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-indigo-500/20 rounded-xl group-hover:bg-indigo-500/30 transition-colors">

              </div>
              <div className="flex-1">
                <span className="text-xs text-indigo-300 font-semibold uppercase tracking-wide">DevSecOps & Compliance</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
              AI-Powered DevSecOps & Continuous Compliance Automation 2025
            </h3>
            
            <p className="text-purple-200/80 text-sm mb-4 line-clamp-3">
              Transform security with AI that automates vulnerability detection, compliance monitoring, and threat 
              remediation—reducing incidents by 94% and cutting remediation time from weeks to hours.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-indigo-300 text-sm">
                <span>18 min read</span>
                <span>•</span>
                <span>$12M avg savings</span>
              </div>

            </div>
          </Link>

          {/* Article 2 - Multimodal CX */}
          <Link 
            to="/blog/ai-2025-october-multimodal-customer-experience-revolution"
            className="group bg-gradient-to-br from-rose-800/40 to-orange-900/40 backdrop-blur-sm border border-rose-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-rose-500/20 rounded-xl group-hover:bg-rose-500/30 transition-colors">

              </div>
              <div className="flex-1">
                <span className="text-xs text-rose-300 font-semibold uppercase tracking-wide">Customer Experience</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-200 transition-colors">
              Real-Time Multimodal AI for Enterprise Customer Experience 2025
            </h3>
            
            <p className="text-orange-200/80 text-sm mb-4 line-clamp-3">
              Revolutionize engagement with AI that analyzes voice, video, text, and behavior simultaneously—
              delivering 89% higher CSAT scores and 67% churn reduction.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-300 text-sm">
                <span>16 min read</span>
                <span>•</span>
                <span>$18M revenue lift</span>
              </div>

            </div>
          </Link>

          {/* Article 3 - Network Operations */}
          <Link 
            to="/blog/ai-2025-october-autonomous-network-operations-sd-wan"
            className="group bg-gradient-to-br from-cyan-800/40 to-blue-900/40 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30 transition-colors">
                <Network className="w-8 h-8 text-cyan-300"</div>
              <div className="flex-1">
                <span className="text-xs text-cyan-300 font-semibold uppercase tracking-wide">Network Automation</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
              Autonomous Network Operations with AI-Driven SD-WAN 2025
            </h3>
            
            <p className="text-blue-200/80 text-sm mb-4 line-clamp-3">
              Transform network management with autonomous SD-WAN that optimizes routing, predicts failures, 
              and self-heals—reducing incidents by 91% and improving performance by 6.8x.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-cyan-300 text-sm">
                <span>17 min read</span>
                <span>•</span>
                <span>$8.4M savings</span>
              </div>

            </div>
          </Link>

          {/* Article 4 - Prompt Engineering */}
          <Link 
            to="/blog/ai-2025-october-advanced-prompt-engineering-chain-of-thought"
            className="group bg-gradient-to-br from-violet-800/40 to-fuchsia-900/40 backdrop-blur-sm border border-violet-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-violet-500/20 rounded-xl group-hover:bg-violet-500/30 transition-colors">
                <Lightbulb className="w-8 h-8 text-violet-300"</div>
              <div className="flex-1">
                <span className="text-xs text-violet-300 font-semibold uppercase tracking-wide">Prompt Engineering</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
              Advanced Prompt Engineering & Chain-of-Thought Reasoning 2025
            </h3>
            
            <p className="text-fuchsia-200/80 text-sm mb-4 line-clamp-3">
              Master enterprise LLM optimization with chain-of-thought reasoning, constitutional AI, and RAG—
              improving accuracy by 87% and reducing hallucinations by 96%.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-violet-300 text-sm">
                <span>22 min read</span>
                <span>•</span>
                <span>$22M productivity</span>
              </div>

            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <span>Read All Latest Articles</span>

          </Link>
          
          <p className="text-purple-200/70 text-sm mt-4">
            Join 50,000+ enterprise leaders implementing cutting-edge AI solutions
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text mb-1">
              94%
            </div>
            <div className="text-purple-200/70 text-sm">Security Incident Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text mb-1">
              89%
            </div>
            <div className="text-orange-200/70 text-sm">CSAT Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text mb-1">
              6.8x
            </div>
            <div className="text-blue-200/70 text-sm">Network Performance</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text mb-1">
              87%
            </div>
            <div className="text-fuchsia-200/70 text-sm">LLM Accuracy Gain</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025FreshContentBanner;
