import React from 'react';
import { motion } from 'framer-motion';

export default function October2025LatestContentBanner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-blue-900/40 border border-purple-500/30 rounded-2xl p-8 my-8"
    >
      <div className="absolute inset-0 bg-grid-white/5"></div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold rounded-full animate-pulse">
            🚀 NEW CONTENT OCTOBER 2025
          </span>
          <span className="text-purple-300 text-sm font-semibold">Just Published</span>
        </div>
        
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Latest AI Breakthroughs & Enterprise Solutions
        </h2>
        
        <p className="text-xl text-white/80 mb-6 leading-relaxed">
          Discover the newest innovations in AI agent orchestration, vector database optimization, 
          and continuous learning systems—proven strategies delivering 94% automation and $42M+ savings.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">Agent Orchestration</h3>
            <p className="text-white/70 text-sm mb-4">
              5,000+ coordinated AI agents achieving 94% automation
            </p>
            <a 
              href="/blog/ai-2025-october-agent-orchestration-platforms" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors"
            >
              Read More →
            </a>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-400/30 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-indigo-300 mb-2">Vector Optimization</h3>
            <p className="text-white/70 text-sm mb-4">
              Query 5B+ vectors in &lt;2ms with 97% cost reduction
            </p>
            <a 
              href="/blog/ai-2025-october-vector-database-optimization" 
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
            >
              Read More →
            </a>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-400/30 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-bold text-emerald-300 mb-2">Continuous Learning</h3>
            <p className="text-white/70 text-sm mb-4">
              Self-improving AI with 127% accuracy gains over 12 months
            </p>
            <a 
              href="/blog/ai-2025-october-continuous-learning-systems" 
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              Read More →
            </a>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a 
            href="/blog" 
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Explore All Articles
          </a>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl transition-all border border-white/20"
          >
            Get Expert Consultation
          </a>
        </div>
      </div>
    </motion.div>
  );
}
