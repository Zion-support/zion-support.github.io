import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025AutonomousCognitiveIntelligenceBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-300 text-sm font-semibold mb-4">
            🚀 JUST PUBLISHED: OCTOBER 1, 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Autonomous Cognitive Intelligence Platform
          </h2>
          <p className="text-xl text-blue-200 mb-6 max-w-3xl mx-auto">
            Revolutionary self-learning AI achieving 99.98% accuracy • $8.4B Enterprise Success • 2,840% ROI
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">99.98%</div>
              <div className="text-sm text-blue-200">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">$8.4B</div>
              <div className="text-sm text-blue-200">Value Created</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">2,840%</div>
              <div className="text-sm text-blue-200">ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-3xl font-bold text-white">99.999%</div>
              <div className="text-sm text-blue-200">Uptime</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/blog/ai-2025-october-autonomous-cognitive-intelligence-platform"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Read Complete Guide
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
