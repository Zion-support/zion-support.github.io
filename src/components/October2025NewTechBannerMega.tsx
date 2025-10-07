import React from "react";
import { Link } from "react-router-dom";

const October2025NewTechBannerMega = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16 px-6 my-12 rounded-2xl shadow-2xl">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">

            🔥 JUST PUBLISHED: OCTOBER 2025 AI BREAKTHROUGH SERIES 🔥

          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Revolutionary AI Solutions
            <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
              Transform Your Enterprise Today
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Three game-changing guides delivering <strong className="text-yellow-300">$3.75 BILLION</strong> in proven value.
            Master multimodal AI, zero-trust security, and production RAG systems.
          </p>
        </div>

        {/* Three Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Multimodal AI */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">

              </div>
              <div className="text-sm font-semibold text-purple-300 uppercase tracking-wide">
                NEW GUIDE #1
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">
              Multimodal AI Enterprise Breakthrough
            </h3>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Unify vision, language & audio processing. <strong className="text-yellow-300">$2.8B value</strong> with 97% accuracy at Fortune 500 scale.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2 text-sm text-gray-200">

                <span><strong>94% automation</strong> of complex workflows</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-200">

                <span><strong>$47M savings</strong> in document processing</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-200">

                <span><strong>3.7x faster</strong> customer service</span>
              </div>
            </div>
            
            <Link
              to="/blog/ai-2025-oct-multimodal-ai-enterprise-breakthrough"
              className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
            >
              Read Full Guide

            </Link>
          </div>

          {/* Card 2: AI Security */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">

              </div>
              <div className="text-sm font-semibold text-blue-300 uppercase tracking-wide">
                NEW GUIDE #2
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">
              AI Security Zero Trust Framework
            </h3>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Prevent <strong className="text-yellow-300">$1.8B in breaches</strong> with enterprise-grade AI security. Protect $127B infrastructure at 99.97% uptime.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2 text-sm text-gray-200">

                <span><strong>Zero breaches</strong> in 24 months</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-200">

                <span><strong>99.97% availability</strong> maintained</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-200">

                <span><strong>725% ROI</strong> over 3 years</span>
              </div>
            </div>
            
            <Link
              to="/blog/ai-2025-oct-ai-security-zero-trust-framework"
              className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 group"
            >
              Read Full Guide

            </Link>
          </div>

          {/* Card 3: RAG Architecture */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg">

              </div>
              <div className="text-sm font-semibold text-green-300 uppercase tracking-wide">
                NEW GUIDE #3
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">
              Enterprise RAG Production Architecture
            </h3>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Deploy RAG at scale. Process <strong className="text-yellow-300">10M+ queries/day</strong> with 94% accuracy delivering $470M value.
            </p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-start gap-2 text-sm text-gray-200">

                <span><strong>94% accuracy</strong> vs 67% pure LLM</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-200">

                <span><strong>$470M annual value</strong> Fortune 500</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-200">

                <span><strong>2,840% ROI</strong> in 3 years</span>
              </div>
            </div>
            
            <Link
              to="/blog/ai-2025-oct-rag-production-architecture-guide"
              className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 group"
            >
              Read Full Guide

            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 hover:scale-105"
            >

              Get Free Expert Consultation

            </Link>
            
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Explore All AI Insights

            </Link>
          </div>
          
          <p className="text-sm text-gray-300 mt-6">
            Join <strong className="text-yellow-300">1,247 Fortune 500 companies</strong> transforming with Zion Tech Group AI solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default October2025NewTechBannerMega;
