import React from 'react';
import { Link } from 'react-router-dom';

export default function RevolutionaryAI2025Banner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 REVOLUTIONARY 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI 2025:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              The Future of Enterprise Intelligence
            </span>
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Experience the next generation of AI technology that's transforming businesses worldwide. 
            Discover autonomous systems, neural interfaces, and quantum-enhanced computing that deliver 
            unprecedented results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Autonomous AI Systems</h3>
            <p className="text-sm opacity-90 mb-4">
              Self-managing AI systems that operate independently, make intelligent decisions, 
              and deliver 99.9% automation accuracy.
            </p>
            <div className="text-yellow-300 font-semibold text-sm">
              Learn More →
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Neural Interfaces</h3>
            <p className="text-sm opacity-90 mb-4">
              Direct human-AI collaboration through advanced neural interface technology 
              enabling seamless integration.
            </p>
            <div className="text-yellow-300 font-semibold text-sm">
              Explore Technology →
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum AI</h3>
            <p className="text-sm opacity-90 mb-4">
              Quantum-enhanced AI delivering 1000x faster processing and solving 
              previously impossible optimization problems.
            </p>
            <div className="text-yellow-300 font-semibold text-sm">
              Discover Quantum AI →
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/services/ai-2025-revolutionary-solutions"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore AI 2025 Solutions
            </Link>
            <Link
              href="/blog/ai-revolution-2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-slate-900 transition-colors"
            >
              Read Latest Articles
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-300">300%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">99.9%</div>
              <div className="text-sm opacity-90">Automation Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">1000x</div>
              <div className="text-sm opacity-90">Faster Processing</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">$50M+</div>
              <div className="text-sm opacity-90">Average Savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}