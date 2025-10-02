import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025SustainableAIInfrastructureBanner() {
  return (
    <div className="bg-gradient-to-br from-green-900/40 via-teal-900/40 to-emerald-900/40 border-2 border-green-500/50 rounded-xl p-10 my-16 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-green-400 text-sm font-bold uppercase tracking-wider mb-2">
            🌱 BREAKING: OCTOBER 2025 GREEN AI REVOLUTION 🌱
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sustainable AI Infrastructure Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            <span className="text-green-400 font-bold">92% Energy Reduction</span> •{' '}
            <span className="text-green-400 font-bold">$284M Cost Savings</span> •{' '}
            <span className="text-green-400 font-bold">Carbon-Neutral AI</span> •{' '}
            <span className="text-green-400 font-bold">1,240% ROI</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Energy-Efficient AI */}
          <div className="bg-green-900/30 border border-green-500/40 rounded-lg p-6 hover:bg-green-900/40 transition-all">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Energy-Optimized AI Computing
            </h3>
            <p className="text-gray-400 mb-4">
              Revolutionary AI infrastructure that reduces energy consumption by 92% while maintaining peak performance.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Dynamic power optimization</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Intelligent workload scheduling</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Hardware efficiency acceleration</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Renewable energy integration</span>
              </div>
            </div>
            <div className="bg-green-800/30 border border-green-600/40 rounded p-3 mb-4">
              <div className="text-sm font-semibold text-green-300 mb-1">Environmental Impact:</div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                <div>• 4.7M tons CO₂ saved</div>
                <div>• 92% energy reduction</div>
                <div>• 100% renewable power</div>
                <div>• Net-zero by 2026</div>
              </div>
            </div>
            <Link 
              to="/blog/sustainable-ai-infrastructure-green-computing-2025"
              className="text-green-400 hover:text-green-300 font-semibold inline-flex items-center gap-1"
            >
              Read Full Guide <span>→</span>
            </Link>
          </div>

          {/* Carbon-Neutral AI Operations */}
          <div className="bg-teal-900/30 border border-teal-500/40 rounded-lg p-6 hover:bg-teal-900/40 transition-all">
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Carbon-Neutral AI Operations
            </h3>
            <p className="text-gray-400 mb-4">
              Complete carbon-neutral AI platform with real-time emissions tracking and automated offset management.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Real-time carbon tracking</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Automated carbon offsets</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Green AI model optimization</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">ESG compliance reporting</span>
              </div>
            </div>
            <div className="bg-teal-800/30 border border-teal-600/40 rounded p-3 mb-4">
              <div className="text-sm font-semibold text-teal-300 mb-1">Enterprise Success:</div>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                <div>• $284M cost savings</div>
                <div>• 1,240% ROI</div>
                <div>• 320 facilities</div>
                <div>• 87% efficiency gain</div>
              </div>
            </div>
            <Link 
              to="/case-studies/enterprise-carbon-neutral-ai-transformation-2025"
              className="text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center gap-1"
            >
              View Case Study <span>→</span>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/services/sustainable-ai-infrastructure"
            className="inline-block bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Launch Sustainable AI Infrastructure →
          </Link>
        </div>
      </div>
    </div>
  );
}
