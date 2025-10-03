import React from 'react';
import Link from 'next/link';

export default function AI2027AutonomousEnterpriseRevolutionBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-cyan-950 to-teal-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🤖 AI 2027 AUTONOMOUS REVOLUTION
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent leading-tight">
            Autonomous Enterprise Revolution
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Transform your business with 99.9% automation, universal intelligence, and trillion-dollar value creation capabilities
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
              <div className="text-2xl font-extrabold text-blue-400 mb-1">99.9%</div>
              <div className="text-xs text-blue-300">Automation Rate</div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
              <div className="text-2xl font-extrabold text-cyan-400 mb-1">1,000,000x</div>
              <div className="text-xs text-cyan-300">Processing Power</div>
            </div>
            <div className="bg-gradient-to-r from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-4 border border-teal-500/30">
              <div className="text-2xl font-extrabold text-teal-400 mb-1">$1T+</div>
              <div className="text-xs text-teal-300">Value Potential</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
              <div className="text-2xl font-extrabold text-green-400 mb-1">95%</div>
              <div className="text-xs text-green-300">Cost Reduction</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/blog/ai-2027-autonomous-enterprise-revolution" 
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
            >
              Read Revolution Guide →
            </Link>
            <Link 
              href="/case-studies" 
              className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1"
            >
              View Success Stories →
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Start Your Revolution
            </Link>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Universal Automation</h3>
              <p className="text-gray-400 text-sm">99.9% business process automation with self-managing operations and autonomous decision making</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/20 to-teal-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Universal Intelligence</h3>
              <p className="text-gray-400 text-sm">Consciousness-level AI with meta-cognitive abilities and ethical decision making</p>
            </div>
            <div className="bg-gradient-to-br from-teal-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20">
              <div className="text-3xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-white mb-3">Quantum-Neural Processing</h3>
              <p className="text-gray-400 text-sm">1,000,000x processing power with universal connectivity and infinite scalability</p>
            </div>
          </div>
          
          {/* Industry Applications */}
          <div className="bg-gradient-to-r from-slate-500/10 to-gray-500/10 border border-slate-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Industry Transformation Results</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">MANUFACTURING</span>
                  <span className="text-white font-semibold">99.9% Automation • 400% Revenue Growth</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">FINANCE</span>
                  <span className="text-white font-semibold">1,000,000x Processing • 350% Growth</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">HEALTHCARE</span>
                  <span className="text-white font-semibold">99.999% Accuracy • 2,000% Faster</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">RETAIL</span>
                  <span className="text-white font-semibold">99.9% Automation • Universal Optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">LOGISTICS</span>
                  <span className="text-white font-semibold">Autonomous Operations • 95% Cost Reduction</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">ENERGY</span>
                  <span className="text-white font-semibold">Universal Efficiency • 90% Optimization</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* ROI Highlight */}
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                💰 PROVEN ROI
              </span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                FORTUNE 100 SUCCESS
              </span>
            </div>
            <p className="text-white font-semibold text-lg mb-2">
              Fortune 100 companies achieving 1,000%+ ROI with autonomous enterprise transformation
            </p>
            <p className="text-gray-300 text-sm">
              Complete business automation with universal intelligence, quantum-neural processing, and consciousness-driven decision making
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}