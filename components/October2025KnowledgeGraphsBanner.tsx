// import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025KnowledgeGraphsBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-2 border-cyan-500/50 rounded-xl p-8 my-12 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🌐</span>
          <div>
            <div className="text-cyan-400 text-sm font-bold uppercase tracking-wider">
              JUST PUBLISHED • OCTOBER 1, 2025
            </div>
            <h2 className="text-3xl font-bold text-white">
              Enterprise Knowledge Graphs 2025: Connected Intelligence at Scale
            </h2>
          </div>
        </div>
        
        <p className="text-gray-300 text-lg mb-6">
          Build enterprise knowledge graphs connecting <span className="text-green-400 font-bold">100M+ entities</span> with{' '}
          <span className="text-green-400 font-bold">95% query accuracy</span> and{' '}
          <span className="text-green-400 font-bold">sub-100ms response times</span>. 
          Transform fragmented data silos into a unified, intelligent knowledge network delivering{' '}
          <span className="text-green-400 font-bold">$127M in value creation</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-cyan-800/20 rounded-lg p-4 border border-cyan-500/30">
            <div className="text-green-400 font-bold text-2xl mb-1">100M+</div>
            <div className="text-gray-400 text-sm">Connected entities</div>
          </div>
          <div className="bg-cyan-800/20 rounded-lg p-4 border border-cyan-500/30">
            <div className="text-green-400 font-bold text-2xl mb-1">95%</div>
            <div className="text-gray-400 text-sm">Query accuracy</div>
          </div>
          <div className="bg-cyan-800/20 rounded-lg p-4 border border-cyan-500/30">
            <div className="text-green-400 font-bold text-2xl mb-1">&lt;100ms</div>
            <div className="text-gray-400 text-sm">Response time</div>
          </div>
          <div className="bg-cyan-800/20 rounded-lg p-4 border border-cyan-500/30">
            <div className="text-green-400 font-bold text-2xl mb-1">$127M</div>
            <div className="text-gray-400 text-sm">Value creation</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="text-xs bg-cyan-800/40 text-cyan-300 px-3 py-1 rounded-full">
            Intelligent Entity Resolution
          </span>
          <span className="text-xs bg-cyan-800/40 text-cyan-300 px-3 py-1 rounded-full">
            Semantic Search
          </span>
          <span className="text-xs bg-cyan-800/40 text-cyan-300 px-3 py-1 rounded-full">
            Graph Neural Networks
          </span>
          <span className="text-xs bg-cyan-800/40 text-cyan-300 px-3 py-1 rounded-full">
            Multi-Hop Reasoning
          </span>
        </div>

        <div className="mt-6 flex gap-4">
          <Link 
            to="/blog/ai-2025-october-enterprise-knowledge-graphs-revolution"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Read Complete Guide
            <span>→</span>
          </Link>
          <Link 
            to="/contact"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
