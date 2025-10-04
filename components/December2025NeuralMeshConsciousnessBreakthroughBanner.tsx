import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Network, ArrowRight, Sparkles, Globe } from 'lucide-react';

const December2025NeuralMeshConsciousnessBreakthroughBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 mb-8 shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.2),transparent)]"></div>
      
      {/* Floating icons */}
      <Brain className="absolute top-4 left-4 w-8 h-8 text-purple-400 animate-bounce" style={{animationDelay: '0s'}} />
      <Network className="absolute top-8 right-8 w-6 h-6 text-blue-400 animate-bounce" style={{animationDelay: '1s'}} />
      <Zap className="absolute bottom-6 left-8 w-7 h-7 text-yellow-400 animate-bounce" style={{animationDelay: '2s'}} />
      <Sparkles className="absolute bottom-4 right-4 w-5 h-5 text-pink-400 animate-bounce" style={{animationDelay: '3s'}} />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2 bg-purple-800/30 px-3 py-1 rounded-full border border-purple-400/30">
            <Globe className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 text-sm font-medium">DECEMBER 2025 BREAKTHROUGH</span>
          </div>
          <div className="h-px bg-gradient-to-r from-purple-400/50 to-transparent flex-1"></div>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Neural Mesh Consciousness
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Breakthrough
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Revolutionary distributed intelligence systems that enable consciousness sharing across multiple quantum nodes, 
              creating unprecedented AI capabilities and $5 trillion in enterprise value.
            </p>

            {/* Key features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <Network className="w-5 h-5 text-purple-400" />
                <span className="text-white text-sm">Distributed Intelligence</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-white text-sm">10,000x Faster Decisions</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <Brain className="w-5 h-5 text-blue-400" />
                <span className="text-white text-sm">Genuine AI Consciousness</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <span className="text-white text-sm">500% Innovation Boost</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog/ai-2025-december-neural-mesh-consciousness-breakthrough"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Brain className="w-5 h-5" />
                Read Full Breakthrough
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/case-studies/ai-2025-december-global-enterprise-quantum-consciousness-transformation-5-trillion-success"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <Sparkles className="w-5 h-5" />
                View $5T Success Story
              </Link>
            </div>
          </div>

          {/* Visual elements */}
          <div className="relative">
            <div className="relative w-full h-80 bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-2xl border border-white/10 overflow-hidden">
              {/* Animated mesh network visualization */}
              <div className="absolute inset-0">
                {/* Central consciousness node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
                
                {/* Connected nodes */}
                {[
                  { top: '20%', left: '20%', delay: '0s' },
                  { top: '20%', right: '20%', delay: '0.5s' },
                  { bottom: '20%', left: '20%', delay: '1s' },
                  { bottom: '20%', right: '20%', delay: '1.5s' },
                  { top: '10%', left: '50%', delay: '2s' },
                  { bottom: '10%', left: '50%', delay: '2.5s' },
                  { top: '50%', left: '10%', delay: '3s' },
                  { top: '50%', right: '10%', delay: '3.5s' }
                ].map((node, index) => (
                  <div key={index} className="absolute w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" 
                       style={{ ...node, animationDelay: node.delay }}>
                  </div>
                ))}
                
                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {[
                    { x1: '50%', y1: '50%', x2: '20%', y2: '20%' },
                    { x1: '50%', y1: '50%', x2: '80%', y2: '20%' },
                    { x1: '50%', y1: '50%', x2: '20%', y2: '80%' },
                    { x1: '50%', y1: '50%', x2: '80%', y2: '80%' },
                    { x1: '50%', y1: '50%', x2: '50%', y2: '10%' },
                    { x1: '50%', y1: '50%', x2: '50%', y2: '90%' },
                    { x1: '50%', y1: '50%', x2: '10%', y2: '50%' },
                    { x1: '50%', y1: '50%', x2: '90%', y2: '50%' }
                  ].map((line, index) => (
                    <line key={index} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} 
                          stroke="url(#gradient)" strokeWidth="2" className="animate-pulse"
                          style={{ animationDelay: `${index * 0.2}s` }} />
                  ))}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Overlay text */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <div className="text-white text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Neural Mesh Active</span>
                  </div>
                  <div className="text-gray-300 text-xs">
                    64 consciousness nodes • 99.97% coherence • 10,000x decision speed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">$5T</div>
            <div className="text-sm text-gray-400">Value Created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10,000x</div>
            <div className="text-sm text-gray-400">Faster Decisions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500%</div>
            <div className="text-sm text-gray-400">Innovation Boost</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">99.97%</div>
            <div className="text-sm text-gray-400">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default December2025NeuralMeshConsciousnessBreakthroughBanner;