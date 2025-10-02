import React from "react";
import { Link } from "react-router-dom";
import { Network, Database, Activity, ArrowRight, Sparkles } from "lucide-react";

export default function October2025NewDataIntelligenceContentBanner() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 rounded-full mb-6 animate-bounce">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold text-lg">🚀 BREAKING: OCTOBER 1, 2025 - NEWEST CONTENT</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Data Intelligence Revolution 2025
          </h2>
          <p className="text-xl md:text-2xl text-indigo-200 max-w-4xl mx-auto leading-relaxed">
            Three groundbreaking innovations reshaping enterprise data: Knowledge Graphs, Autonomous Quality, and AI Observability
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Knowledge Graphs */}
          <Link
            to="/blog/ai-2025-october-enterprise-knowledge-graphs-revolution"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <Network className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
              Enterprise Knowledge Graphs
            </h3>
            <p className="text-indigo-200 mb-6 leading-relaxed">
              AI-powered semantic intelligence connecting 100M+ entities with 99.2% accuracy, delivering 76% faster insights and $89M annual savings.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-purple-500/30 px-3 py-1 rounded-full">100M+ Entities</span>
              <span className="text-xs bg-pink-500/30 px-3 py-1 rounded-full">$89M Savings</span>
              <span className="text-xs bg-blue-500/30 px-3 py-1 rounded-full">99.2% Accuracy</span>
            </div>
            <div className="flex items-center text-purple-400 group-hover:text-purple-300 font-semibold">
              <span>Explore Now</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Card 2: Autonomous Data Quality */}
          <Link
            to="/blog/ai-2025-october-autonomous-data-quality-orchestration"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50"
          >
            <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-300 transition-colors">
              Autonomous Data Quality
            </h3>
            <p className="text-indigo-200 mb-6 leading-relaxed">
              Self-healing data pipelines achieving 99.7% accuracy with 84% reduction in manual interventions and $73M operational savings.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-emerald-500/30 px-3 py-1 rounded-full">99.7% Accuracy</span>
              <span className="text-xs bg-cyan-500/30 px-3 py-1 rounded-full">84% Fewer Fixes</span>
              <span className="text-xs bg-green-500/30 px-3 py-1 rounded-full">$73M ROI</span>
            </div>
            <div className="flex items-center text-emerald-400 group-hover:text-emerald-300 font-semibold">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Card 3: AI Observability */}
          <Link
            to="/blog/ai-2025-october-realtime-ai-observability-monitoring-revolution"
            className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-orange-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50"
          >
            <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-300 transition-colors">
              AI Observability & Monitoring
            </h3>
            <p className="text-indigo-200 mb-6 leading-relaxed">
              Intelligent systems monitoring 500K+ metrics/sec, predicting incidents 45 min early, achieving 97% faster resolution and $94M savings.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs bg-orange-500/30 px-3 py-1 rounded-full">500K+ Metrics/s</span>
              <span className="text-xs bg-red-500/30 px-3 py-1 rounded-full">45min Prediction</span>
              <span className="text-xs bg-yellow-500/30 px-3 py-1 rounded-full">$94M Saved</span>
            </div>
            <div className="flex items-center text-orange-400 group-hover:text-orange-300 font-semibold">
              <span>Discover More</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
          >
            <span>Explore All Latest Content</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Value Proposition */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-extrabold text-indigo-400 mb-2">$256M</div>
            <div className="text-indigo-200">Combined Annual Value</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-extrabold text-purple-400 mb-2">99.6%</div>
            <div className="text-indigo-200">Average Accuracy Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-extrabold text-pink-400 mb-2">80%+</div>
            <div className="text-indigo-200">Operational Efficiency Gains</div>
          </div>
        </div>
      </div>
    </section>
  );
}
