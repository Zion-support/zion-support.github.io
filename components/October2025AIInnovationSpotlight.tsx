import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025AIInnovationSpotlight() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950 py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Banner Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 rounded-full mb-6 animate-pulse">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-400 font-bold tracking-wide">OCTOBER 2025 — INNOVATION SPOTLIGHT</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Revolutionary AI Technologies
            </span>
            <br />
            <span className="text-white">
              Reshaping Enterprise Operations
            </span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover how leading organizations are leveraging next-generation AI systems to achieve 
            unprecedented efficiency, accuracy, and innovation
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all">
            <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
              95%
            </div>
            <h3 className="text-xl font-bold text-cyan-400 mb-2">Faster ML Iteration</h3>
            <p className="text-white/70">
              Zero-touch MLOps automation accelerates model deployment from hours to minutes
            </p>
          </div>

          <div className="bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 backdrop-blur-sm border border-violet-400/30 rounded-2xl p-8 hover:border-violet-400/60 transition-all">
            <div className="text-5xl font-extrabold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-3">
              85%
            </div>
            <h3 className="text-xl font-bold text-violet-400 mb-2">Improved Accuracy</h3>
            <p className="text-white/70">
              Multimodal AI systems deliver unprecedented precision across vision, language & audio
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all">
            <div className="text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              &lt;1ms
            </div>
            <h3 className="text-xl font-bold text-emerald-400 mb-2">Edge Latency</h3>
            <p className="text-white/70">
              Real-time intelligence at the edge with sub-millisecond inference across 10B+ daily requests
            </p>
          </div>
        </div>

        {/* Featured Articles Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Deep Dive Technical Guides
          </h3>
          
          <div className="space-y-6">
            {/* MLOps Article */}
            <Link 
              to="/blog/ai-2025-october-advanced-mlops-automation"
              className="group flex flex-col md:flex-row items-start gap-6 p-6 bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-400/20 rounded-xl hover:border-cyan-400/50 hover:bg-cyan-500/20 transition-all"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-cyan-500/30">
                ML
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  Advanced MLOps Automation 2025
                </h4>
                <p className="text-white/70 mb-3 leading-relaxed">
                  Comprehensive guide to zero-touch ML pipeline management with 95% faster model iteration, 
                  40% cost reduction, and 99.9% reliability through intelligent automation and self-healing systems.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                  Read Full Article <span>→</span>
                </div>
              </div>
            </Link>

            {/* Multimodal AI Article */}
            <Link 
              to="/blog/ai-2025-october-multimodal-ai-systems"
              className="group flex flex-col md:flex-row items-start gap-6 p-6 bg-gradient-to-r from-violet-500/10 to-transparent border border-violet-400/20 rounded-xl hover:border-violet-400/50 hover:bg-violet-500/20 transition-all"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-violet-400 to-fuchsia-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-violet-500/30">
                MM
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-violet-400 mb-2 group-hover:text-violet-300 transition-colors">
                  Multimodal AI Systems 2025
                </h4>
                <p className="text-white/70 mb-3 leading-relaxed">
                  Unified intelligence across vision, language & audio achieving 85% better accuracy and 5.2x ROI. 
                  Explore enterprise applications from customer service to medical diagnosis and content creation.
                </p>
                <div className="flex items-center gap-2 text-violet-400 font-semibold group-hover:gap-3 transition-all">
                  Read Full Article <span>→</span>
                </div>
              </div>
            </Link>

            {/* Edge AI Article */}
            <Link 
              to="/blog/ai-2025-october-edge-ai-deployment"
              className="group flex flex-col md:flex-row items-start gap-6 p-6 bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-400/20 rounded-xl hover:border-emerald-400/50 hover:bg-emerald-500/20 transition-all"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg shadow-emerald-500/30">
                EDGE
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300 transition-colors">
                  Edge AI Deployment 2025
                </h4>
                <p className="text-white/70 mb-3 leading-relaxed">
                  Ultra-low latency intelligence at scale with sub-millisecond inference, 99.99% uptime, and 
                  10B+ daily inferences. Learn deployment strategies for manufacturing, retail, vehicles & healthcare.
                </p>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:gap-3 transition-all">
                  Read Full Article <span>→</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/80 mb-6 text-lg">
              Transform your enterprise with these cutting-edge AI technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
              >
                Get Expert Consultation
              </Link>
              <Link 
                to="/blog" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all"
              >
                Explore More Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
