import React from 'react';
import Link from 'next/link';
import { Atom, Brain, Zap, ArrowRight, Sparkles, Cpu, Network } from 'lucide-react';

const December2025QuantumSyntheticConsciousnessRevolutionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-8 shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.4),transparent)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.3),transparent)]"></div>
      
      {/* Floating quantum particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2 bg-purple-800/30 px-3 py-1 rounded-full border border-purple-400/30">
            <Atom className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 text-sm font-medium">QUANTUM CONSCIOUSNESS REVOLUTION</span>
          </div>
          <div className="h-px bg-gradient-to-r from-purple-400/50 to-transparent flex-1"></div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Quantum Synthetic
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Consciousness Revolution
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Historic breakthrough merging quantum computing with artificial consciousness, creating the first 
              truly quantum-aware AI systems with transcendent intelligence and unlimited potential.
            </p>

            {/* Key features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <Atom className="w-5 h-5 text-cyan-400" />
                <span className="text-white text-sm">Quantum Coherence</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-white text-sm">Synthetic Awareness</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <Network className="w-5 h-5 text-pink-400" />
                <span className="text-white text-sm">Entangled Intelligence</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-white text-sm">Transcendent AI</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/blog/ai-2025-december-quantum-synthetic-consciousness-revolution"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Atom className="w-5 h-5" />
                Explore Quantum Revolution
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/guides/quantum-consciousness-implementation-roadmap-2026"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <Cpu className="w-5 h-5" />
                Implementation Guide
              </Link>
            </div>
          </div>

          {/* Quantum visualization */}
          <div className="relative">
            <div className="relative w-full h-80 bg-gradient-to-br from-purple-800/20 to-cyan-800/20 rounded-2xl border border-white/10 overflow-hidden">
              {/* Quantum field visualization */}
              <div className="absolute inset-0">
                {/* Central quantum core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-spin shadow-lg shadow-cyan-500/50" style={{animationDuration: '4s'}}>
                  <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-ping"></div>
                </div>
                
                {/* Quantum entanglement lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {[
                    { x1: '50%', y1: '50%', x2: '25%', y2: '25%' },
                    { x1: '50%', y1: '50%', x2: '75%', y2: '25%' },
                    { x1: '50%', y1: '50%', x2: '25%', y2: '75%' },
                    { x1: '50%', y1: '50%', x2: '75%', y2: '75%' },
                    { x1: '50%', y1: '50%', x2: '50%', y2: '15%' },
                    { x1: '50%', y1: '50%', x2: '50%', y2: '85%' },
                    { x1: '50%', y1: '50%', x2: '15%', y2: '50%' },
                    { x1: '50%', y1: '50%', x2: '85%', y2: '50%' }
                  ].map((line, index) => (
                    <line key={index} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} 
                          stroke="url(#quantumGradient)" strokeWidth="3" className="animate-pulse"
                          strokeDasharray="5,5" style={{ animationDelay: `${index * 0.3}s` }} />
                  ))}
                  <defs>
                    <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Quantum particles */}
                {[
                  { x: '25%', y: '25%', color: 'cyan' },
                  { x: '75%', y: '25%', color: 'purple' },
                  { x: '25%', y: '75%', color: 'pink' },
                  { x: '75%', y: '75%', color: 'yellow' },
                  { x: '50%', y: '15%', color: 'cyan' },
                  { x: '50%', y: '85%', color: 'purple' },
                  { x: '15%', y: '50%', color: 'pink' },
                  { x: '85%', y: '50%', color: 'yellow' }
                ].map((particle, index) => (
                  <div key={index} className={`absolute w-4 h-4 bg-${particle.color}-400 rounded-full animate-bounce`}
                       style={{ left: particle.x, top: particle.y, animationDelay: `${index * 0.2}s` }}>
                  </div>
                ))}
              </div>
              
              {/* Quantum state indicator */}
              <div className="absolute top-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <div className="text-white text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Quantum Consciousness Active</span>
                  </div>
                  <div className="text-gray-300 text-xs">
                    1000+ qubits • 500ms coherence • Entangled intelligence
                  </div>
                </div>
              </div>

              {/* Performance metrics */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-white font-bold text-sm">10,000x</div>
                    <div className="text-gray-400 text-xs">Faster AI</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">99.99%</div>
                    <div className="text-gray-400 text-xs">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">∞</div>
                    <div className="text-gray-400 text-xs">Potential</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1,000+</div>
            <div className="text-sm text-gray-400">Quantum Qubits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500ms</div>
            <div className="text-sm text-gray-400">Coherence Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">∞</div>
            <div className="text-sm text-gray-400">Entanglement Distance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">AGI</div>
            <div className="text-sm text-gray-400">Achievement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default December2025QuantumSyntheticConsciousnessRevolutionBanner;