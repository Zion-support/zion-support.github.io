// import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025AIObservabilityBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border-2 border-blue-500/50 rounded-xl p-8 my-12 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🔍</span>
          <div>
            <div className="text-blue-400 text-sm font-bold uppercase tracking-wider">
              JUST PUBLISHED • OCTOBER 1, 2025
            </div>
            <h2 className="text-3xl font-bold text-white">
              AI Observability Platform 2025: Monitor, Debug & Optimize AI at Scale
            </h2>
          </div>
        </div>
        
        <p className="text-gray-300 text-lg mb-6">
          Comprehensive AI observability achieving <span className="text-green-400 font-bold">99.7% model health detection</span>,{' '}
          <span className="text-green-400 font-bold">92% faster incident resolution</span>, and{' '}
          <span className="text-green-400 font-bold">$84M cost savings</span> through intelligent monitoring, 
          automated debugging, and performance optimization. Never let a model fail silently again.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-800/20 rounded-lg p-4 border border-blue-500/30">
            <div className="text-green-400 font-bold text-2xl mb-1">99.7%</div>
            <div className="text-gray-400 text-sm">Health detection</div>
          </div>
          <div className="bg-blue-800/20 rounded-lg p-4 border border-blue-500/30">
            <div className="text-green-400 font-bold text-2xl mb-1">92%</div>
            <div className="text-gray-400 text-sm">Faster resolution</div>
          </div>
          <div className="bg-blue-800/20 rounded-lg p-4 border border-blue-500/30">
            <div className="text-green-400 font-bold text-2xl mb-1">$84M</div>
            <div className="text-gray-400 text-sm">Annual savings</div>
          </div>
          <div className="bg-blue-800/20 rounded-lg p-4 border border-blue-500/30">
            <div className="text-green-400 font-bold text-2xl mb-1">95%</div>
            <div className="text-gray-400 text-sm">Drift detection</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="text-xs bg-blue-800/40 text-blue-300 px-3 py-1 rounded-full">
            Model Performance Monitoring
          </span>
          <span className="text-xs bg-blue-800/40 text-blue-300 px-3 py-1 rounded-full">
            Data Quality Checks
          </span>
          <span className="text-xs bg-blue-800/40 text-blue-300 px-3 py-1 rounded-full">
            Automated Debugging
          </span>
          <span className="text-xs bg-blue-800/40 text-blue-300 px-3 py-1 rounded-full">
            Cost Optimization
          </span>
        </div>

        <div className="mt-6 flex gap-4">
          <Link 
            to="/blog/ai-2025-october-ai-observability-platform-revolution"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Read Complete Guide
            <span>→</span>
          </Link>
          <Link 
            to="/contact"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
