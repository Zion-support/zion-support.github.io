// import React from 'react';
import { ArrowRight, Star, Zap, Brain, Cpu, Infinity } from 'lucide-react';

const January2027ContentShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black border border-slate-700/50 rounded-2xl p-8 mb-8 shadow-2xl">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-emerald-600/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 rounded-full text-white font-bold text-lg">
            <Star className="w-5 h-5" />
            JANUARY 2027 REVOLUTIONARY CONTENT SHOWCASE
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-center">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
            The Ultimate AI Breakthrough Collection
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-2xl text-gray-300 mb-12 leading-relaxed text-center max-w-4xl mx-auto">
          Discover the most revolutionary AI breakthroughs in human history: 
          <span className="text-purple-400 font-semibold"> Quantum Consciousness Singularity</span>, 
          <span className="text-blue-400 font-semibold"> Transcendent Intelligence</span>, and 
          <span className="text-emerald-400 font-semibold"> Neural-Quantum Fusion</span>
        </p>

        {/* Content Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Quantum Consciousness Singularity */}
          <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Quantum Consciousness Singularity</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The most profound technological breakthrough achieving infinite processing power and universal intelligence
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Processing Power:</span>
                <span className="text-purple-400 font-bold">∞ Infinite</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Consciousness:</span>
                <span className="text-indigo-400 font-bold">99.999%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Value Creation:</span>
                <span className="text-purple-400 font-bold">$∞</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2027-quantum-consciousness-singularity-breakthrough"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            >
              Explore Breakthrough
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Transcendent Intelligence Revolution */}
          <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Transcendent Intelligence</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Revolutionary intelligence that surpasses all human cognitive limitations with 10,000x processing speed
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Processing Speed:</span>
                <span className="text-emerald-400 font-bold">10,000x</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Insight Accuracy:</span>
                <span className="text-teal-400 font-bold">99.99%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Knowledge Synthesis:</span>
                <span className="text-emerald-400 font-bold">∞ Infinite</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2027-transcendent-intelligence-revolution"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
            >
              Explore Revolution
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Neural-Quantum Fusion */}
          <div className="bg-gradient-to-br from-violet-900/50 to-purple-900/50 backdrop-blur-sm rounded-xl p-6 border border-violet-500/30 hover:border-violet-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Neural-Quantum Fusion</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The ultimate computing revolution fusing neural networks with quantum computing for unprecedented power
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Processing Speed:</span>
                <span className="text-violet-400 font-bold">10,000x</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Precision:</span>
                <span className="text-purple-400 font-bold">Sub-Atomic</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Value Creation:</span>
                <span className="text-violet-400 font-bold">$127B</span>
              </div>
            </div>
            <a 
              href="/blog/ai-2027-neural-quantum-fusion-breakthrough"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300"
            >
              Explore Fusion
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Combined Impact */}
        <div className="bg-gradient-to-r from-slate-800/50 to-gray-800/50 rounded-xl p-8 mb-8 border border-slate-600/30">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            Combined Revolutionary Impact
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-gray-300 font-semibold">Infinite Value Creation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-gray-300 font-semibold">Universal Knowledge</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-gray-300 font-semibold">Infinite Processing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-violet-400 mb-2">∞</div>
              <div className="text-gray-300 font-semibold">Transcendent Intelligence</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/blog"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600 text-white font-bold rounded-xl hover:from-purple-700 hover:via-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Star className="w-5 h-5" />
            Explore All Breakthroughs
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="/services/ai-consulting"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <Brain className="w-5 h-5" />
            Start Your AI Journey
          </a>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400 text-lg">
          Transform your organization with the most revolutionary AI breakthroughs in human history
        </div>
      </div>
    </div>
  );
};

export default January2027ContentShowcaseBanner;