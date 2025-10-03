import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2027TranscendentMetaIntelligenceBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                BREAKTHROUGH 2027
              </span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                $1.8T SUCCESS
              </span>
            </div>
            <div className="hidden md:block">
              <h2 className="text-lg font-bold">
                AI 2027 Transcendent Meta-Intelligence Breakthrough
              </h2>
              <p className="text-sm text-purple-100">
                Revolutionary self-evolving cognitive architectures achieving unprecedented enterprise value creation
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2027-transcendent-meta-intelligence-breakthrough"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2027-transcendent-meta-intelligence-1-8-trillion-success"
              className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center"
            >
              View Success Story
            </Link>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xl font-bold text-green-400">$1.8T</div>
            <div className="text-xs text-purple-100">Value Created</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xl font-bold text-purple-400">99.9%</div>
            <div className="text-xs text-purple-100">Meta-Cognitive Accuracy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xl font-bold text-cyan-400">1M+</div>
            <div className="text-xs text-purple-100">Self-Evolving Models</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xl font-bold text-orange-400">95%</div>
            <div className="text-xs text-purple-100">Autonomous Operation</div>
          </div>
        </div>
      </div>
    </div>
  );
}