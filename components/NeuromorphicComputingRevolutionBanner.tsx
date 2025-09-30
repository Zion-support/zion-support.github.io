import React from 'react';

export default function NeuromorphicComputingRevolutionBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/40 via-indigo-900/40 to-slate-900/40 border-y border-purple-500/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-36 h-36 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Revolutionary Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8 animate-pulse">
            <span className="text-purple-400 font-bold text-lg tracking-wider uppercase flex items-center gap-2">
              🧠 NEUROMORPHIC REVOLUTION
            </span>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            Neuromorphic Computing
            <br />
            <span className="text-5xl md:text-6xl">Revolution 2026</span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-semibold max-w-5xl mx-auto">
            🧠 Brain-Inspired AI • 99.7% Neural Efficiency • 1000x Processing Speed
          </p>
          
          <p className="text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the most revolutionary neuromorphic computing breakthrough that mimics human brain architecture. 
            Achieve unprecedented neural efficiency and processing power while consuming 99% less energy than traditional computing.
          </p>
          
          {/* Revolutionary Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {[
              { 
                icon: '🧠', 
                value: '99.7%', 
                label: 'Neural Efficiency Rate',
                description: 'Brain-inspired processing',
                color: 'from-purple-500 to-pink-500'
              },
              { 
                icon: '⚡', 
                value: '1000x', 
                label: 'Processing Speed',
                description: 'Lightning-fast computation',
                color: 'from-indigo-500 to-cyan-500'
              },
              { 
                icon: '🔋', 
                value: '99%', 
                label: 'Energy Reduction',
                description: 'Ultra-low power consumption',
                color: 'from-green-500 to-emerald-500'
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-semibold text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-xs">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog/ai-2026-neuromorphic-computing-revolution" 
              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Explore Neuromorphic AI →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Get Brain-Inspired Demo
            </a>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🧠',
              title: 'Neural Plasticity',
              description: 'Adaptive learning that mimics human brain plasticity'
            },
            {
              icon: '⚡',
              title: 'Spike-Based Processing',
              description: 'Event-driven computation with ultra-low power'
            },
            {
              icon: '🔗',
              title: 'Synaptic Connectivity',
              description: 'Massive parallel processing with billions of neurons'
            },
            {
              icon: '💡',
              title: 'Cognitive Memory',
              description: 'Hierarchical memory systems like human cognition'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-center">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}