import React from 'react';
import { Link } from 'react-router-dom';

export default function SuperintelligentAutomationBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-b border-purple-500/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase">
              🚀 BREAKTHROUGH: Superintelligent Automation Now Live!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI 2026: Superintelligent Automation Breakthrough
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Revolutionary AI systems achieving <span className="text-purple-400 font-bold">99.9% automation accuracy</span>, 
            <span className="text-blue-400 font-bold"> $500M+ annual savings</span>, and 
            <span className="text-cyan-400 font-bold"> complete enterprise transformation</span>
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { value: '99.9%', label: 'Automation Accuracy', icon: '🎯', color: 'from-purple-500 to-purple-600' },
            { value: '$500M+', label: 'Annual Savings', icon: '💰', color: 'from-green-500 to-green-600' },
            { value: '1000x', label: 'Processing Speed', icon: '⚡', color: 'from-blue-500 to-blue-600' },
            { value: '24/7', label: 'Autonomous Ops', icon: '🤖', color: 'from-cyan-500 to-cyan-600' }
          ].map((metric, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center hover:border-purple-500/50 transition-all duration-300">
              <div className="text-5xl mb-3">{metric.icon}</div>
              <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Breakthrough Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">Meta-Cognitive Reasoning</h3>
            <p className="text-gray-400 mb-6">
              AI systems that think about thinking, enabling unprecedented problem-solving 
              capabilities and adaptive learning across complex enterprise environments.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-500/20 px-3 py-1 rounded-full text-purple-300 text-sm">Self-Aware</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 text-sm">Adaptive</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-6xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Neural Networks</h3>
            <p className="text-gray-400 mb-6">
              Revolutionary quantum computing integration achieving 1000x processing speed 
              improvements and real-time complex decision making across massive datasets.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full text-cyan-300 text-sm">1000x Speed</span>
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">Real-time</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="text-6xl mb-4">🔄</div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Orchestration</h3>
            <p className="text-gray-400 mb-6">
              Complete enterprise automation through AI systems that manage, optimize, 
              and evolve business processes without human intervention.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-500/20 px-3 py-1 rounded-full text-green-300 text-sm">24/7 Ops</span>
              <span className="bg-orange-500/20 px-3 py-1 rounded-full text-orange-300 text-sm">Self-Healing</span>
            </div>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-400">🎯 Proven Enterprise Success</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-3 text-white">Financial Impact</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• $500M+ average annual savings</li>
                  <li>• 2000% ROI within 18 months</li>
                  <li>• 95% reduction in operational costs</li>
                  <li>• $2B+ in revenue generation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-3 text-white">Operational Excellence</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• 99.9% automation accuracy</li>
                  <li>• 24/7 autonomous operations</li>
                  <li>• Zero-downtime infrastructure</li>
                  <li>• 1000x faster decision making</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/blog/ai-2026-superintelligent-automation-breakthrough" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough →
            </Link>
            <Link to="/contact" 
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Get Free Assessment
            </Link>
            <Link to="/case-studies" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Join 500+ leading enterprises achieving breakthrough results with our revolutionary 
            superintelligent automation systems. Transform your business operations today.
          </p>
        </div>
      </div>
    </section>
  );
}