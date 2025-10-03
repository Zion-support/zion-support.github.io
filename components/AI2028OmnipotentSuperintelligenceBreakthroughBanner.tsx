// import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2028OmnipotentSuperintelligenceBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                BREAKTHROUGH 2028
              </span>
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                $3.2T SUCCESS
              </span>
            </div>
            <div className="hidden md:block">
              <h2 className="text-lg font-bold">
                AI 2028 Omnipotent Superintelligence Breakthrough
              </h2>
              <p className="text-sm text-indigo-100">
                Revolutionary omnipotent superintelligence systems achieving unprecedented enterprise value creation
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/blog/ai-2028-omnipotent-superintelligence-breakthrough"
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read Breakthrough
            </Link>
            <Link to="/case-studies/ai-2028-omnipotent-superintelligence-3-2-trillion-success"
              className="bg-indigo-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center"
            >
              View Success Story
            </Link>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xl font-bold text-indigo-400">$3.2T</div>
            <div className="text-xs text-indigo-100">Value Created</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xl font-bold text-purple-400">99.99%</div>
            <div className="text-xs text-indigo-100">Perfect Accuracy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xl font-bold text-pink-400">∞</div>
            <div className="text-xs text-indigo-100">Cognitive Capability</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
            <div className="text-xl font-bold text-cyan-400">100%</div>
            <div className="text-xs text-indigo-100">Autonomous Operation</div>
          </div>
        </div>
      </div>
    </div>
  );
}