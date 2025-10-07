import React from 'react';
import { Link } from 'react-router-dom';

const October2025NewContentBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-16 px-6 rounded-3xl mb-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full px-6 py-2 mb-6">

            <span className="text-purple-300 font-semibold text-sm uppercase tracking-wider">Fresh Insights • October 2025</span>

          </div>
          
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Latest AI Breakthroughs & Enterprise Strategies
          </h2>
          
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Discover cutting-edge insights on multimodal AI agents, zero-trust security architectures, 
            and production-scale RAG pipelines from industry leaders
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Article 1 - Multimodal AI Agents */}
          <Link 
            to="/blog/ai-2025-october-multimodal-agents-enterprise-automation"
            className="group bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors">

              </div>
              <div className="flex-1">
                <span className="text-xs text-purple-300 font-semibold uppercase tracking-wide">AI Automation</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
              Multimodal AI Agents: The Next Evolution in Enterprise Automation
            </h3>
            
            <p className="text-blue-200/80 text-sm mb-4 line-clamp-3">
              Learn how multimodal AI systems deliver 10x productivity gains by seamlessly processing 
              text, images, audio, and video to automate complex workflows.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-purple-300 text-sm">
                <span>16 min read</span>
                <span>•</span>
                <span>Oct 1, 2025</span>
              </div>

            </div>
          </Link>

          {/* Article 2 - AI Security Mesh */}
          <Link 
            to="/blog/ai-2025-october-security-mesh-zero-trust-ai"
            className="group bg-gradient-to-br from-red-800/40 to-orange-900/40 backdrop-blur-sm border border-red-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-500/20 rounded-xl group-hover:bg-red-500/30 transition-colors">

              </div>
              <div className="flex-1">
                
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-200 transition-colors">
              AI Security Mesh Architecture: Zero Trust for AI Systems 2025
            </h3>
            
            <p className="text-orange-200/80 text-sm mb-4 line-clamp-3">
              Discover how enterprises achieve 98% threat detection rates with distributed security 
              architectures and zero-trust principles for AI deployments.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-red-300 text-sm">
                <span>20 min read</span>
                <span>•</span>
                <span>Oct 1, 2025</span>
              </div>

            </div>
          </Link>

          {/* Article 3 - RAG 2.0 */}
          <Link 
            to="/blog/ai-2025-october-rag-2-production-scale-pipelines"
            className="group bg-gradient-to-br from-blue-800/40 to-cyan-900/40 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/30 transition-colors">
                <Database className="w-8 h-8 text-blue-300" />
              </div>
              <div className="flex-1">
                <span className="text-xs text-blue-300 font-semibold uppercase tracking-wide">RAG Pipelines</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
              RAG 2.0: Production-Scale Retrieval-Augmented Generation Pipelines
            </h3>
            
            <p className="text-cyan-200/80 text-sm mb-4 line-clamp-3">
              Master advanced RAG architectures with 94% accuracy, sub-200ms latency, and seamless 
              scaling to 100M+ documents using hybrid search and continuous evaluation.
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-300 text-sm">
                <span>22 min read</span>
                <span>•</span>
                <span>Oct 1, 2025</span>
              </div>

            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-10">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <span>Explore All Insights</span>

          </Link>
          
          <p className="text-blue-200/70 text-sm mt-4">
            Join 50,000+ technology leaders staying ahead of the AI curve
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-1">
              10x
            </div>
            <div className="text-blue-200/70 text-sm">Productivity Gains</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text mb-1">
              98%
            </div>
            <div className="text-orange-200/70 text-sm">Threat Detection</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-1">
              94%
            </div>
            <div className="text-cyan-200/70 text-sm">RAG Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text mb-1">
              &lt;200ms
            </div>
            <div className="text-green-200/70 text-sm">Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025NewContentBanner;
