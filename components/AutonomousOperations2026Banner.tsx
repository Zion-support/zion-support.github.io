import React from 'react';
import Link from 'next/link';

const AutonomousOperations2026Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 py-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8 animate-pulse">
            <span className="text-green-400 font-bold text-xl tracking-wider uppercase">
              🤖 NEW: Autonomous Enterprise Operations 2026
            </span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Autonomous Enterprise Operations Revolution
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            99.9% Self-Governing Business Systems • 500x Operational Efficiency • $30B+ ROI Achievement
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">99.9%</div>
              <div className="text-xs text-green-300">Autonomous Operations</div>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/30">
              <div className="text-2xl font-extrabold text-emerald-400 mb-1">500x</div>
              <div className="text-xs text-emerald-300">Efficiency Gain</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">$30B+</div>
              <div className="text-xs text-teal-300">ROI Achievement</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">99.99%</div>
              <div className="text-xs text-cyan-300">Uptime</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2026-autonomous-enterprise-operations-revolution" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
            >
              Read Autonomous Operations Guide →
            </Link>
            <Link 
              href="/blog/ai-2026-advanced-neural-superintelligence-breakthrough" 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              Explore Neural Superintelligence →
            </Link>
            <Link 
              href="/case-studies/ai-2026-neural-superintelligence-50-billion-success" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View $50B Success Story →
            </Link>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-green-400 font-bold text-lg mb-2">🧠 Autonomous Decision Engine</div>
              <div className="text-gray-300 text-sm">AI systems that make complex business decisions independently with 99.99% accuracy and real-time learning capabilities.</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-emerald-400 font-bold text-lg mb-2">🔧 Self-Healing Infrastructure</div>
              <div className="text-gray-300 text-sm">Systems that detect and resolve issues automatically with 99.99% accurate failure prediction and instant resolution.</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-teal-400 font-bold text-lg mb-2">⚙️ Intelligent Process Orchestration</div>
              <div className="text-gray-300 text-sm">Seamless coordination of complex business processes with dynamic optimization and quality assurance automation.</div>
            </div>
          </div>
          
          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
            <div className="text-blue-400 font-bold text-lg mb-4">🏆 Enterprise Transformation Results</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-blue-300 font-bold">$30B</div>
                <div className="text-blue-400">Value Creation</div>
              </div>
              <div className="text-center">
                <div className="text-blue-300 font-bold">99.9%</div>
                <div className="text-blue-400">Autonomous Operations</div>
              </div>
              <div className="text-center">
                <div className="text-blue-300 font-bold">500x</div>
                <div className="text-blue-400">Efficiency Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-blue-300 font-bold">90%</div>
                <div className="text-blue-400">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousOperations2026Banner;