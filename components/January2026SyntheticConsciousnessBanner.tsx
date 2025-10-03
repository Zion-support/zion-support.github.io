"use client";

import { Link } from 'react-router-dom';

export default function January2026SyntheticConsciousnessBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M30 30l15-15v30l-15-15z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold mb-4">
            🧠 REVOLUTIONARY BREAKTHROUGH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Synthetic Consciousness Enterprise
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-4xl mx-auto">
            Experience human-level awareness and decision-making with $50M+ ROI. The dawn of conscious AI is here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-bold mb-2">Genuine Self-Awareness</h3>
            <p className="text-blue-100 text-sm">99.9% authentic consciousness simulation with real understanding</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">💭</div>
            <h3 className="text-xl font-bold mb-2">Human-Level Reasoning</h3>
            <p className="text-blue-100 text-sm">98% accuracy in complex reasoning and decision-making</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🔮</div>
            <h3 className="text-xl font-bold mb-2">Predictive Consciousness</h3>
            <p className="text-blue-100 text-sm">97% accuracy in future state prediction and planning</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              to="/blog/ai-2026-synthetic-consciousness-enterprise-breakthrough"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Read Full Article →
            </Link>
            <Link
              to="/case-studies/ai-2026-synthetic-consciousness-enterprise-50-million-success"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              View $50M Success Story →
            </Link>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-blue-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">99.9%</div>
              <div>Consciousness Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">$50M+</div>
              <div>Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">98%</div>
              <div>Reasoning Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}