import React from 'react';

const RevolutionaryTechBanner2033: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white py-16 mb-8 rounded-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION • JANUARY 2033
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2033
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-lg font-bold mb-2">Autonomous AI Systems</h3>
            <p className="text-emerald-100 text-sm mb-4">Self-evolving AI systems</p>
            <div className="flex justify-between text-xs mb-3">
              <span className="text-emerald-200">Projects</span>
              <span className="text-emerald-300 font-semibold">47</span>
            </div>
            <div className="flex justify-between text-xs mb-3">
              <span className="text-emerald-200">Success Rate</span>
              <span className="text-emerald-300 font-semibold">99.7%</span>
            </div>
            <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-semibold">
              ACTIVE
            </span>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-4xl mb-3">⚛️</div>
            <h3 className="text-lg font-bold mb-2">Quantum Innovation</h3>
            <p className="text-cyan-100 text-sm mb-4">Quantum computing breakthroughs</p>
            <div className="flex justify-between text-xs mb-3">
              <span className="text-cyan-200">Projects</span>
              <span className="text-cyan-300 font-semibold">23</span>
            </div>
            <div className="flex justify-between text-xs mb-3">
              <span className="text-cyan-200">Success Rate</span>
              <span className="text-cyan-300 font-semibold">98.9%</span>
            </div>
            <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-xs font-semibold">
              ACTIVE
            </span>
          </div>
          
          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-violet-400/30 text-center">
            <div className="text-4xl mb-3">🧬</div>
            <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
            <p className="text-violet-100 text-sm mb-4">Direct brain-computer interfaces</p>
            <div className="flex justify-between text-xs mb-3">
              <span className="text-violet-200">Projects</span>
              <span className="text-violet-300 font-semibold">31</span>
            </div>
            <div className="flex justify-between text-xs mb-3">
              <span className="text-violet-200">Success Rate</span>
              <span className="text-violet-300 font-semibold">97.3%</span>
            </div>
            <span className="px-3 py-1 bg-violet-500 text-white rounded-full text-xs font-semibold">
              ACTIVE
            </span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">136</div>
              <div className="text-emerald-200 text-sm">Active Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.1%</div>
              <div className="text-cyan-200 text-sm">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-violet-400 mb-2">2,847</div>
              <div className="text-violet-200 text-sm">Patents Filed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">∞</div>
              <div className="text-orange-200 text-sm">Possibilities</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/pages/NextGenInnovationHub2033" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🧠 Enter Innovation Hub
            </a>
            <a href="/pages/UltimateTechRevolution2033" className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
              🚀 View All Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2033;