// import React from 'react';
import { motion } from 'framer-motion';

export default function October2025FreshInnovationsBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/50 to-blue-900/50 border-2 border-purple-400/40 rounded-3xl p-10 my-10 shadow-2xl"
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <motion.span 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base font-extrabold rounded-full shadow-lg"
          >
            ✨ BREAKING: OCTOBER 2025 INNOVATIONS
          </motion.span>
          <span className="text-purple-300 text-lg font-bold">Fresh Off the Press!</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent leading-tight">
          Transform Your Enterprise with Cutting-Edge AI
        </h2>

        <p className="text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl">
          Explore revolutionary AI strategies that leading Fortune 500 companies are deploying right now 
          to achieve unprecedented automation, efficiency, and competitive advantage.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-400/40 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-400/60 transition-all">
            <div className="text-5xl mb-4">🎯</div>
            <div className="text-4xl font-extrabold text-purple-300 mb-3">94%</div>
            <p className="text-white/80 text-lg font-semibold mb-2">Process Automation</p>
            <p className="text-white/60 text-sm">
              AI agent orchestration platforms coordinating thousands of specialized agents
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-400/40 rounded-2xl p-8 backdrop-blur-sm hover:border-indigo-400/60 transition-all">
            <div className="text-5xl mb-4">⚡</div>
            <div className="text-4xl font-extrabold text-indigo-300 mb-3">&lt;2ms</div>
            <p className="text-white/80 text-lg font-semibold mb-2">Query Latency</p>
            <p className="text-white/60 text-sm">
              Vector database optimization enabling billion-scale real-time search
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-cyan-600/20 border border-emerald-400/40 rounded-2xl p-8 backdrop-blur-sm hover:border-emerald-400/60 transition-all">
            <div className="text-5xl mb-4">📈</div>
            <div className="text-4xl font-extrabold text-emerald-300 mb-3">+127%</div>
            <p className="text-white/80 text-lg font-semibold mb-2">Accuracy Gains</p>
            <p className="text-white/60 text-sm">
              Continuous learning systems that improve autonomously from production data
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">📚 New Content Available Now:</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-white/80">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 text-2xl">→</span>
              <div>
                <a href="/blog/ai-2025-october-agent-orchestration-platforms" className="font-semibold text-purple-300 hover:text-purple-200 transition-colors">
                  Enterprise AI Agent Orchestration Platforms
                </a>
                <p className="text-sm text-white/60 mt-1">5,000+ agents, $42M+ savings</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 text-2xl">→</span>
              <div>
                <a href="/blog/ai-2025-october-vector-database-optimization" className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors">
                  Vector Database Optimization Guide
                </a>
                <p className="text-sm text-white/60 mt-1">5B+ vectors, 97% cost reduction</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 text-2xl">→</span>
              <div>
                <a href="/blog/ai-2025-october-continuous-learning-systems" className="font-semibold text-emerald-300 hover:text-emerald-200 transition-colors">
                  Continuous Learning AI Systems
                </a>
                <p className="text-sm text-white/60 mt-1">Self-improving models, 91% drift reduction</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-2xl">→</span>
              <div>
                <a href="/blog" className="font-semibold text-blue-300 hover:text-blue-200 transition-colors">
                  View All Latest Articles
                </a>
                <p className="text-sm text-white/60 mt-1">100+ expert insights and guides</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-5">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact" 
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white text-lg font-extrabold rounded-xl transition-all shadow-2xl"
          >
            Get Expert Consultation →
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/blog" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-lg font-bold rounded-xl transition-all border-2 border-white/30"
          >
            Explore All Content
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
