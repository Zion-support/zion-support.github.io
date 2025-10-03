import React from 'react';
import { Link } from 'react-router-dom';

export default function NewContentShowcase2026Banner() {
  return (
    <section className="w-full bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">🔥 Latest AI Breakthroughs 2026</h2>
          <p className="text-xl opacity-90">Revolutionary technologies transforming enterprise operations</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
            <div className="text-4xl mb-4">🐝</div>
            <h3 className="text-xl font-bold mb-3">AI Agent Swarms</h3>
            <p className="text-sm opacity-90 mb-4">10,000x scale with collective intelligence and emergent behaviors</p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Performance:</span>
                <span className="font-bold">10,000x</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Decision Speed:</span>
                <span className="font-bold">95% faster</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Cost Savings:</span>
                <span className="font-bold">$500M+</span>
              </div>
            </div>
            <Link to="/blog/ai-agent-swarms-enterprise-orchestration-2026"
              className="block bg-white text-blue-600 hover:bg-yellow-400 hover:text-blue-800 px-4 py-2 rounded-full text-sm font-bold text-center transition-all"
            >
              Read Full Guide
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum-Enhanced AI</h3>
            <p className="text-sm opacity-90 mb-4">1000x performance with quantum advantage and exponential optimization</p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Performance:</span>
                <span className="font-bold">1000x</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Accuracy:</span>
                <span className="font-bold">99.9%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Value Creation:</span>
                <span className="font-bold">$10B+</span>
              </div>
            </div>
            <Link to="/blog/quantum-enhanced-ai-enterprise-breakthrough-2026"
              className="block bg-white text-blue-600 hover:bg-yellow-400 hover:text-blue-800 px-4 py-2 rounded-full text-sm font-bold text-center transition-all"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all">
            <div className="text-4xl mb-4">🏭</div>
            <h3 className="text-xl font-bold mb-3">Manufacturing Success</h3>
            <p className="text-sm opacity-90 mb-4">$2.5B savings with 50,000-agent deployment across 200+ facilities</p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>Cost Savings:</span>
                <span className="font-bold">$2.5B</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Agents Deployed:</span>
                <span className="font-bold">50,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Efficiency:</span>
                <span className="font-bold">75% faster</span>
              </div>
            </div>
            <Link to="/case-studies/ai-agent-swarms-manufacturing-success-2026"
              className="block bg-white text-blue-600 hover:bg-yellow-400 hover:text-blue-800 px-4 py-2 rounded-full text-sm font-bold text-center transition-all"
            >
              View Case Study
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link to="/content-hub"
            className="inline-block bg-white text-blue-600 hover:bg-yellow-400 hover:text-blue-800 px-8 py-3 rounded-full font-bold transition-all shadow-lg"
          >
            Explore All 2026 Content →
          </Link>
        </div>
      </div>
    </section>
  );
}