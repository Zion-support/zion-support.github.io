import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, ShoppingCart, Zap } from 'lucide-react';

export default function October2025AgenticMarketplaceRevolutionBanner() {
  return (
    <div className="relative bg-gradient-to-br from-purple-950 via-indigo-950 to-blue-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.3),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-semibold">🔥 BREAKING: OCTOBER 1, 2025 - AGENTIC AI MARKETPLACE REVOLUTION</span>
            <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 leading-tight">
            🛒 Agentic AI Marketplace Revolution
          </h2>
          
          <p className="text-2xl md:text-3xl text-purple-200 font-semibold mb-4">
            Autonomous AI Agents Transforming Enterprise Commerce
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl text-purple-300">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-400" />
              <span>$12.4B Marketplace Transactions</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-yellow-400" />
              <span>98.7% Transaction Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-6 w-6 text-blue-400" />
              <span>82% Cost Reduction</span>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">$12.4B</div>
            <div className="text-lg text-purple-200">Annual Marketplace Transactions</div>
            <div className="text-sm text-purple-300 mt-2">Autonomous AI agent commerce</div>
          </div>
          
          <div className="bg-indigo-900/30 backdrop-blur-sm border border-indigo-400/30 rounded-xl p-6">
            <div className="text-4xl font-bold text-indigo-400 mb-2">15x</div>
            <div className="text-lg text-indigo-200">Faster Service Discovery</div>
            <div className="text-sm text-indigo-300 mt-2">Automated procurement & deployment</div>
          </div>
          
          <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">1,847</div>
            <div className="text-lg text-blue-200">Enterprise Deployments</div>
            <div className="text-sm text-blue-300 mt-2">Global marketplace adoption</div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">
            Revolutionary Marketplace Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🔍</div>
              <div className="text-lg font-semibold text-purple-200 mb-1">Autonomous Discovery</div>
              <div className="text-sm text-purple-300">AI agents find & evaluate services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <div className="text-lg font-semibold text-indigo-200 mb-1">Intelligent Negotiation</div>
              <div className="text-sm text-indigo-300">Automated pricing & SLA negotiation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-lg font-semibold text-blue-200 mb-1">Self-Service Integration</div>
              <div className="text-sm text-blue-300">Automated deployment & integration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <div className="text-lg font-semibold text-cyan-200 mb-1">Continuous Optimization</div>
              <div className="text-sm text-cyan-300">Ongoing performance improvement</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/blog/ai-2025-oct-agentic-ai-marketplace-revolution"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-purple-500/50 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              📖 Read Complete Guide
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
          
          <Link
            to="/case-studies/global-retail-agentic-marketplace-12-4-billion-success"
            className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold text-lg hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg hover:shadow-green-500/50 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              💎 $12.4B Success Story
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
          
          <Link
            to="/services"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg hover:shadow-blue-500/50 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              🚀 Get Started Today
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
        </div>

        {/* Footer Badge */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-2">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-purple-200 text-sm font-medium">
              💎 JUST PUBLISHED TODAY - October 1, 2025 - Transform Your Enterprise Procurement
            </span>
            <Sparkles className="h-4 w-4 text-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
