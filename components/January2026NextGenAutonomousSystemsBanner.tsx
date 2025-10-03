"use client";

// import React from 'react';
import { Link } from 'react-router-dom';

export default function January2026NextGenAutonomousSystemsBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-bold mb-4">
            🚀 NEW 2026 BREAKTHROUGH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Next-Generation Autonomous Systems
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-4xl mx-auto">
            Experience 99.8% operational autonomy with $25M+ ROI. The future of self-operating intelligence is here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-xl font-bold mb-2">Complete Autonomy</h3>
            <p className="text-blue-100 text-sm">99.8% autonomous operation across all enterprise functions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-2">Advanced Intelligence</h3>
            <p className="text-blue-100 text-sm">98.5% accuracy in complex decision-making scenarios</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-3">🔮</div>
            <h3 className="text-xl font-bold mb-2">Future-Proof Design</h3>
            <p className="text-blue-100 text-sm">Self-evolving systems with continuous innovation</p>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              to="/blog/ai-2026-next-generation-autonomous-systems-breakthrough"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Read Full Article →
            </Link>
            <Link
              to="/case-studies/ai-2026-next-generation-autonomous-systems-25-million-success"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              View $25M Success Story →
            </Link>
          </div>
          
          <div className="flex justify-center items-center gap-8 text-sm text-blue-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">99.8%</div>
              <div>Autonomous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">$25M+</div>
              <div>Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">40%</div>
              <div>Efficiency Gains</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}