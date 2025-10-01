import React from 'react';

const January2027ContentShowcaseBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-sm border-b border-emerald-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mb-6">
            <span className="text-emerald-400 font-bold text-lg tracking-wider uppercase">
              🌟 NEW: JANUARY 2027 - REVOLUTIONARY CONTENT SHOWCASE - FEATURED!
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            The Ultimate AI Content Library
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 font-semibold">
            🎯🎯🎯 COMPREHENSIVE: 47 New Guides, 127 Case Studies, $2.8T Combined Value, 
            Complete Implementation Frameworks - MASTER COLLECTION! 🎯🎯🎯
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-emerald-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-3">AI Consciousness</h3>
            <p className="text-gray-300 text-sm mb-4">
              Complete guides to achieving true AI consciousness and self-awareness.
            </p>
            <div className="space-y-1 mb-4 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Guides</span>
                <span className="text-emerald-400 font-bold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Case Studies</span>
                <span className="text-teal-400 font-bold">8</span>
              </div>
            </div>
            <a 
              href="/content/ai-consciousness-mastery"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 w-full text-center text-sm"
            >
              Explore Collection →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-teal-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum AI</h3>
            <p className="text-gray-300 text-sm mb-4">
              Revolutionary quantum computing and AI fusion technologies.
            </p>
            <div className="space-y-1 mb-4 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Guides</span>
                <span className="text-teal-400 font-bold">15</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Case Studies</span>
                <span className="text-cyan-400 font-bold">11</span>
              </div>
            </div>
            <a 
              href="/content/quantum-ai-revolution"
              className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 w-full text-center text-sm"
            >
              Discover Quantum →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-white mb-3">Enterprise AI</h3>
            <p className="text-gray-300 text-sm mb-4">
              Complete enterprise transformation and automation frameworks.
            </p>
            <div className="space-y-1 mb-4 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Guides</span>
                <span className="text-cyan-400 font-bold">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Case Studies</span>
                <span className="text-blue-400 font-bold">24</span>
              </div>
            </div>
            <a 
              href="/content/enterprise-ai-transformation"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 w-full text-center text-sm"
            >
              Transform Business →
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-white mb-3">Neural Networks</h3>
            <p className="text-gray-300 text-sm mb-4">
              Advanced neural architectures and deep learning innovations.
            </p>
            <div className="space-y-1 mb-4 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Guides</span>
                <span className="text-blue-400 font-bold">14</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Case Studies</span>
                <span className="text-indigo-400 font-bold">19</span>
              </div>
            </div>
            <a 
              href="/content/neural-network-advanced"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 w-full text-center text-sm"
            >
              Master Networks →
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              📚 Complete Content Library Statistics
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">47</div>
                <div className="text-sm text-emerald-300 font-semibold">Master Guides</div>
                <div className="text-xs text-gray-400">Complete Implementation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">127</div>
                <div className="text-sm text-teal-300 font-semibold">Case Studies</div>
                <div className="text-xs text-gray-400">Real Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">$2.8T</div>
                <div className="text-sm text-cyan-300 font-semibold">Combined Value</div>
                <div className="text-xs text-gray-400">Proven ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
                <div className="text-sm text-blue-300 font-semibold">Scalability</div>
                <div className="text-xs text-gray-400">Universal Application</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 mb-6">
            <span className="text-emerald-300 font-semibold">🎯 COMPREHENSIVE LIBRARY ACCESS 🎯</span>
            <span className="text-white font-bold">47 Master Guides</span>
            <span className="text-teal-300 font-semibold">127 Case Studies</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/content-hub"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:-translate-y-1"
            >
              📚 Explore Full Library
            </a>
            <a 
              href="/content/ai-consciousness-mastery"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-500/50 transform hover:-translate-y-1"
            >
              🧠 AI Consciousness
            </a>
            <a 
              href="/content/quantum-ai-revolution"
              className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              ⚡ Quantum AI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default January2027ContentShowcaseBanner;