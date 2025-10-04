'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RevolutionaryTechShowcase() {
  const [activeTab, setActiveTab] = useState('neural');

  const technologies = {
    neural: {
      title: 'Ultimate Neural Fusion',
      description: 'Revolutionary neural architecture achieving 500,000x performance improvements',
      features: [
        'Universal Consciousness Integration',
        'Meta-Cognitive Superintelligence',
        'Quantum Neural Networks',
        'Adaptive Learning Algorithms',
        'Real-time Decision Making',
        'Autonomous Operations'
      ],
      metrics: {
        performance: '500,000x',
        response: '0.0001s',
        autonomy: '99.99%',
        roi: '$100B+'
      }
    },
    quantum: {
      title: 'Quantum Consciousness AI',
      description: 'Breakthrough quantum computing integration with consciousness-level processing',
      features: [
        'Quantum State Manipulation',
        'Consciousness-Level Processing',
        'Parallel Universe Computing',
        'Quantum Entanglement Networks',
        'Superposition Decision Trees',
        'Quantum Error Correction'
      ],
      metrics: {
        performance: '1Mx',
        response: '0.00001s',
        autonomy: '100%',
        roi: '$1T+'
      }
    },
    autonomous: {
      title: 'Autonomous Enterprise AI',
      description: 'Self-managing AI systems that operate independently across entire enterprises',
      features: [
        'Self-Healing Infrastructure',
        'Autonomous Decision Making',
        'Predictive Maintenance',
        'Dynamic Resource Allocation',
        'Intelligent Automation',
        'Continuous Optimization'
      ],
      metrics: {
        performance: '250Kx',
        response: '0.001s',
        autonomy: '99.9%',
        roi: '$50B+'
      }
    }
  };

  const activeTech = technologies[activeTab as keyof typeof technologies];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-bold">
              🚀 REVOLUTIONARY TECHNOLOGY SHOWCASE
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Next-Generation AI Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover the cutting-edge AI technologies that are revolutionizing enterprise operations 
            and achieving unprecedented performance breakthroughs.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 rounded-2xl p-2 border border-gray-700">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl p-8 border border-gray-700">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">
                {activeTech.title}
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                {activeTech.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {Object.entries(activeTech.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-xl p-4 border border-purple-500/20">
                    <div className="text-2xl font-bold text-white mb-1">{value}</div>
                    <div className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>

              <Link to="/services/ultimate-neural-fusion-consulting"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Get Started Today
                <span className="text-xl">→</span>
              </Link>
            </div>

            <div>
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700">
                <h4 className="text-xl font-bold text-white mb-6">Key Features</h4>
                <div className="space-y-4">
                  {activeTech.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Proven Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/case-studies/ai-2026-ultimate-neural-fusion-100-billion-success" className="group">
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl font-bold text-green-400 mb-2">$100B</div>
                <div className="text-white font-semibold mb-2">Fortune 50 Success</div>
                <div className="text-gray-300 text-sm">
                  How a Fortune 50 company achieved $100B ROI with Ultimate Neural Fusion technology.
                </div>
              </div>
            </Link>

            <Link to="/case-studies/ai-2026-quantum-consciousness-fusion-100-billion-success" className="group">
              <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl font-bold text-blue-400 mb-2">$100B</div>
                <div className="text-white font-semibold mb-2">Quantum AI Success</div>
                <div className="text-gray-300 text-sm">
                  Revolutionary quantum consciousness AI achieving unprecedented results.
                </div>
              </div>
            </Link>

            <Link to="/case-studies/ai-2026-autonomous-enterprise-25-billion-success" className="group">
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group-hover:scale-105">
                <div className="text-3xl font-bold text-purple-400 mb-2">$25B</div>
                <div className="text-white font-semibold mb-2">Autonomous Success</div>
                <div className="text-gray-300 text-sm">
                  Self-managing AI systems revolutionizing enterprise operations.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}