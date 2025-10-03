// import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2026AutonomousCloudOrchestrationBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🚀 BREAKING: Autonomous Cloud Orchestration
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI 2026: 99.9% Self-Healing Infrastructure
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary autonomous cloud orchestration delivering <span className="text-cyan-400 font-bold">99.9% self-healing infrastructure</span> with 
            <span className="text-purple-400 font-bold"> zero human intervention</span> and 
            <span className="text-blue-400 font-bold"> 1000x faster incident resolution</span>
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.9%</div>
              <div className="text-xs text-blue-300">Self-Healing Rate</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">1000x</div>
              <div className="text-xs text-purple-300">Faster Resolution</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">$5.2B</div>
              <div className="text-xs text-green-300">Proven Value</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">Zero</div>
              <div className="text-xs text-orange-300">Manual Intervention</div>
            </div>
          </div>
        </div>
        
        {/* Featured Content Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link to="/blog/ai-2026-autonomous-cloud-orchestration-breakthrough" className="group block rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-8 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">AUTONOMOUS BREAKTHROUGH</span>
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-3 py-1 rounded-full text-xs font-bold">99.9% HEALING</span>
            </div>
            <div className="text-white font-bold text-xl mb-3">Autonomous Cloud Orchestration</div>
            <div className="text-gray-400 text-sm mb-4">Revolutionary AI system delivering 99.9% self-healing infrastructure with zero human intervention and 1000x faster incident resolution.</div>
            <div className="text-blue-300 text-sm font-semibold group-hover:text-blue-200">Read Full Breakthrough →</div>
          </Link>
          
          <Link to="/case-studies/ai-2026-autonomous-cloud-orchestration-5-billion-success" className="group block rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-emerald-900/20 p-8 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">$5.2B SUCCESS</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">FORTUNE 50</span>
            </div>
            <div className="text-white font-bold text-xl mb-3">$5.2B Success Story</div>
            <div className="text-gray-400 text-sm mb-4">How a Fortune 50 global enterprise achieved $5.2B in value through autonomous cloud orchestration, delivering 99.999% uptime.</div>
            <div className="text-green-300 text-sm font-semibold group-hover:text-green-200">Read Success Story →</div>
          </Link>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Get Autonomous Infrastructure
            </Link>
            <Link to="/blog/ai-2026-autonomous-cloud-orchestration-breakthrough" 
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
            >
              Read Full Breakthrough →
            </Link>
            <Link to="/case-studies/ai-2026-autonomous-cloud-orchestration-5-billion-success" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              View $5.2B Success
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}