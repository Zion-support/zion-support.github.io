import React from 'react';
import Link from 'next/link';

export default function January2026NeuromorphicRevolutionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🧠 REVOLUTION
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              1,000,000x FASTER
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              $1.5B ROI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI 2026: Neuromorphic Computing Revolution
          </h2>
          <p className="text-xl text-green-200 max-w-4xl mx-auto mb-6">
            Revolutionary brain-inspired computing systems that mimic the human brain's neural architecture, 
            delivering unprecedented efficiency and performance in AI applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">1,000,000x</div>
              <div className="text-sm text-green-200">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">1000x</div>
              <div className="text-sm text-green-200">Energy Efficient</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">$1.5B</div>
              <div className="text-sm text-green-200">ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">99.9%</div>
              <div className="text-sm text-green-200">Accuracy Rate</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
            <h3 className="text-xl font-bold mb-4 text-green-200">Revolutionary Features</h3>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Brain-inspired neural architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Parallel processing like biological neurons
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Ultra-low power consumption
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Real-time learning and adaptation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Fault tolerance and self-healing
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-teal-400/30">
            <h3 className="text-xl font-bold mb-4 text-teal-200">Industry Applications</h3>
            <ul className="space-y-3 text-teal-100">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Autonomous vehicles with sub-millisecond decisions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Healthcare with 99.9% diagnostic accuracy
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Financial services with real-time fraud detection
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Industrial automation with predictive maintenance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Smart cities with real-time optimization
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link
              href="/blog/ai-2026-neuromorphic-computing-revolution"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Neuromorphic AI
              <span className="text-xl">→</span>
            </Link>
            <Link
              href="/case-studies/ai-2026-neuromorphic-computing-mega-success"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View $1.5B Success Story
              <span className="text-xl">→</span>
            </Link>
          </div>
          <p className="text-green-300 text-sm">
            Join Fortune 100 companies achieving $1.5B+ ROI with neuromorphic computing
          </p>
        </div>
      </div>
    </section>
  );
}