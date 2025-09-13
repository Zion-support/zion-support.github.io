import React from 'react';
import Link from 'next/link';

export default function NewContentDiscoveryWidget2025() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <span className="text-purple-400 font-semibold text-sm flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
              NEW CONTENT DISCOVERY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest breakthrough content featuring AI 2025-2026 predictions, 
            case studies with 15,000% ROI, and implementation guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Content 1 */}
          <div className="bg-gradient-to-br from-red-800/30 to-pink-800/30 rounded-2xl p-8 border border-red-500/20 hover:border-red-400/40 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">🚀</span>
              </div>
              <div>
                <div className="text-red-400 font-semibold text-sm">BREAKTHROUGH</div>
                <h3 className="text-lg font-bold text-white">AI 2025 Ultimate Breakthrough</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Revolutionary AI breakthroughs delivering 10,000% ROI and 99.9% accuracy across industries.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-yellow-400 font-bold">10,000% ROI</div>
              <Link
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="text-red-400 hover:text-red-300 transition-colors group-hover:underline"
              >
                Explore →
              </Link>
            </div>
          </div>

          {/* Featured Content 2 */}
          <div className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">🔮</span>
              </div>
              <div>
                <div className="text-cyan-400 font-semibold text-sm">PREDICTIONS</div>
                <h3 className="text-lg font-bold text-white">AI 2026 Future Predictions</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Exclusive AI 2026 predictions with 95% accuracy revealing quantum-neural fusion breakthroughs.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-yellow-400 font-bold">95% Accuracy</div>
              <Link
                href="/ai-2026-future-predictions-breakthrough"
                className="text-cyan-400 hover:text-cyan-300 transition-colors group-hover:underline"
              >
                View Predictions →
              </Link>
            </div>
          </div>

          {/* Featured Content 3 */}
          <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 rounded-2xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">🏆</span>
              </div>
              <div>
                <div className="text-green-400 font-semibold text-sm">SUCCESS STORY</div>
                <h3 className="text-lg font-bold text-white">Quantum-Neural Fusion Success</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Fortune 500 case study showing 15,000% ROI with quantum-neural fusion technology.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-yellow-400 font-bold">15,000% ROI</div>
              <Link
                href="/case-studies/ai-2026-quantum-neural-fusion-success"
                className="text-green-400 hover:text-green-300 transition-colors group-hover:underline"
              >
                View Case Study →
              </Link>
            </div>
          </div>

          {/* Featured Content 4 */}
          <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">📊</span>
              </div>
              <div>
                <div className="text-purple-400 font-semibold text-sm">TREND ANALYSIS</div>
                <h3 className="text-lg font-bold text-white">AI 2025 Revolutionary Trends</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Comprehensive analysis of AI trends and predictions for 2025 with market impact insights.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-yellow-400 font-bold">$2.5T Impact</div>
              <Link
                href="/blog/ai-2025-revolutionary-trends-predictions"
                className="text-purple-400 hover:text-purple-300 transition-colors group-hover:underline"
              >
                Read Analysis →
              </Link>
            </div>
          </div>

          {/* Featured Content 5 */}
          <div className="bg-gradient-to-br from-orange-800/30 to-red-800/30 rounded-2xl p-8 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">⚛️</span>
              </div>
              <div>
                <div className="text-orange-400 font-semibold text-sm">QUANTUM COMPUTING</div>
                <h3 className="text-lg font-bold text-white">Quantum Breakthroughs 2030</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Revolutionary quantum computing breakthroughs delivering 8,500% ROI in manufacturing.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-yellow-400 font-bold">8,500% ROI</div>
              <Link
                href="/quantum-computing-breakthroughs-2030"
                className="text-orange-400 hover:text-orange-300 transition-colors group-hover:underline"
              >
                Explore Quantum →
              </Link>
            </div>
          </div>

          {/* Featured Content 6 */}
          <div className="bg-gradient-to-br from-teal-800/30 to-cyan-800/30 rounded-2xl p-8 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">🧠</span>
              </div>
              <div>
                <div className="text-teal-400 font-semibold text-sm">NEURAL INTERFACES</div>
                <h3 className="text-lg font-bold text-white">Neural Interface Revolution</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Direct brain-computer interfaces achieving 99.7% accuracy in thought-to-text conversion.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-yellow-400 font-bold">99.7% Accuracy</div>
              <Link
                href="/neural-interface-revolution-2026"
                className="text-teal-400 hover:text-teal-300 transition-colors group-hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
          >
            <span className="mr-2">📚</span>
            View All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}