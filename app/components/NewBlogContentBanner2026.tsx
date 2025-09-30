import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles, TrendingUp } from 'lucide-react';

export default function NewBlogContentBanner2026() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 rounded-2xl border border-purple-400/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-400/20 rounded-full border border-purple-400/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-semibold text-sm">NEW CONTENT 2026</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-cyan-400/20 rounded-full border border-cyan-400/30">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-semibold text-sm">TRENDING</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          Revolutionary AI Insights 2026
        </h2>
        
        <p className="text-xl text-white/80 mb-8 max-w-3xl">
          Discover the latest breakthroughs in AI enterprise transformation, quantum computing, 
          and sustainable technology. Our newest articles explore the cutting-edge innovations 
          shaping the future of artificial intelligence.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-purple-400 font-semibold text-sm">ENTERPRISE AI</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              AI Enterprise Transformation 2026
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Complete guide to AI-driven enterprise transformation, featuring real-world success stories and implementation strategies.
            </p>
            <Link 
              href="/blog/ai-enterprise-transformation-2026" 
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
            >
              Read Article <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-cyan-400 font-semibold text-sm">QUANTUM AI</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              Quantum AI Breakthrough 2026
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Explore revolutionary quantum AI breakthroughs that are transforming computation and opening new frontiers.
            </p>
            <Link 
              href="/blog/quantum-ai-breakthrough-2026" 
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
            >
              Read Article <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-green-400/30 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-green-400 font-semibold text-sm">SUSTAINABILITY</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
              AI for Sustainability & Green Tech
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Discover how AI is driving the green tech revolution and creating sustainable solutions for our planet.
            </p>
            <Link 
              href="/blog/ai-sustainability-green-tech-2026" 
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold text-sm transition-colors"
            >
              Read Article <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-sm text-white/60">
              <span className="font-semibold text-white">3 New Articles</span> • 
              <span> 37 min total read</span> • 
              <span> Latest insights</span>
            </div>
          </div>
          
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <BookOpen className="w-5 h-5" />
            Explore All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}