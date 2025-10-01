import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Database, Cloud } from 'lucide-react';

const October2025NewContentBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 rounded-3xl shadow-2xl my-12 border border-purple-500/30">
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-teal-500/10 animate-pulse"></div>
      
      <div className="relative z-10 px-8 py-12 md:px-12 md:py-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-purple-400 animate-bounce" />
          <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm font-bold rounded-full border border-purple-400/40 animate-pulse">
            🚀 JUST PUBLISHED - OCTOBER 2025
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent leading-tight">
          3 Revolutionary AI Breakthroughs Transforming Enterprise Technology
        </h2>

        <p className="text-xl text-white/80 mb-10 max-w-4xl leading-relaxed">
          Discover the latest cutting-edge innovations in AI-powered DevSecOps, Generative AI for Data Lakes, 
          and Multi-Cloud Orchestration—delivering 99.7% security, 10x faster insights, and 63% cost savings.
        </p>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Card 1: DevSecOps */}
          <Link 
            to="/blog/ai-2025-october-devsecops-revolution" 
            className="group bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-xs font-semibold text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                16 MIN READ
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              AI-Powered DevSecOps Revolution
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Autonomous security platforms preventing 99.7% of vulnerabilities with 12-minute remediation time
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-purple-400 font-bold">99.7%</span>
                <span className="text-white/60">Prevention</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-pink-400 font-bold">94%</span>
                <span className="text-white/60">↓ Incidents</span>
              </div>
            </div>
          </Link>

          {/* Card 2: Generative AI Data Lakes */}
          <Link 
            to="/blog/ai-2025-october-generative-ai-data-lakes" 
            className="group bg-gradient-to-br from-teal-900/40 to-emerald-900/40 backdrop-blur-sm rounded-2xl p-6 border border-teal-500/30 hover:border-teal-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-teal-500/20 rounded-xl group-hover:bg-teal-500/30 transition-colors">
                <Database className="w-6 h-6 text-teal-400" />
              </div>
              <span className="text-xs font-semibold text-teal-300 bg-teal-500/20 px-3 py-1 rounded-full">
                20 MIN READ
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
              Generative AI for Data Lakes
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Unlock petabyte-scale intelligence with AI-powered data cataloging and automated insights
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-teal-400 font-bold">10x</span>
                <span className="text-white/60">Faster Insights</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-emerald-400 font-bold">$15M+</span>
                <span className="text-white/60">Savings</span>
              </div>
            </div>
          </Link>

          {/* Card 3: Multi-Cloud Orchestration */}
          <Link 
            to="/blog/ai-2025-october-multi-cloud-ai-orchestration" 
            className="group bg-gradient-to-br from-indigo-900/40 to-violet-900/40 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-indigo-500/20 rounded-xl group-hover:bg-indigo-500/30 transition-colors">
                <Cloud className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full">
                19 MIN READ
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
              Multi-Cloud AI Orchestration
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Unified AI platform across AWS, Azure, and GCP with seamless model portability
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-indigo-400 font-bold">63%</span>
                <span className="text-white/60">↓ Costs</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-violet-400 font-bold">99.99%</span>
                <span className="text-white/60">Uptime</span>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6 border-t border-white/10">
          <Link
            to="/blog"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
          >
            <span>Explore All AI Breakthroughs</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            <span>Schedule Expert Consultation</span>
          </Link>
        </div>

        {/* Bottom highlight */}
        <div className="mt-8 text-center">
          <p className="text-sm text-white/50">
            <span className="font-semibold text-purple-400">1000+</span> Enterprise leaders trust Zion Tech Group for cutting-edge AI solutions
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default October2025NewContentBanner;
