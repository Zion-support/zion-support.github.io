import React from 'react';
import { Link } from 'react-router-dom';

export default function October2025ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse shadow-lg">
            🔥 BREAKING: NEW CONTENT — OCTOBER 2025
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
          Latest AI Breakthroughs & Enterprise Success Stories
        </h2>
        
        <p className="text-xl md:text-2xl text-center text-purple-100 max-w-4xl mx-auto mb-12 leading-relaxed">
          Explore revolutionary AI innovations delivering <strong className="text-yellow-400">400% efficiency gains</strong>, 
          <strong className="text-green-400"> $50M+ ROI</strong>, and <strong className="text-cyan-400">99.997% reliability</strong>. 
          Real results from real enterprises transforming industries.
        </p>

        {/* Blog Posts Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <span className="text-yellow-400">📚</span>
            Latest AI Innovation Guides
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Blog 1 */}
            <Link to="/blog/ai-orchestration-mega-agents-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 hover:bg-white/20 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    🤖
                  </div>
                  <span className="inline-block bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    NEW OCT 2025
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                  AI Orchestration Mega-Agents
                </h4>
                <p className="text-purple-100 mb-4 leading-relaxed text-sm">
                  Deploy AI systems that coordinate hundreds of agents for 95% autonomy and $25M ROI
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-xs text-purple-200">
                    <span>⏱️ 18 min read</span>
                    <span>🎯 Enterprise</span>
                  </div>
                  <div className="text-yellow-400 font-bold group-hover:text-yellow-300">
                    Read Now →
                  </div>
                </div>
              </div>
            </Link>

            {/* Blog 2 */}
            <Link to="/blog/ai-enterprise-supergraph-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 hover:bg-white/20 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    🌐
                  </div>
                  <span className="inline-block bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    NEW OCT 2025
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                  AI Enterprise Supergraph
                </h4>
                <p className="text-purple-100 mb-4 leading-relaxed text-sm">
                  Unify all enterprise data & systems into intelligent fabric with 99.5% accuracy & $40M ROI
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-xs text-purple-200">
                    <span>⏱️ 20 min read</span>
                    <span>🎯 Architecture</span>
                  </div>
                  <div className="text-yellow-400 font-bold group-hover:text-yellow-300">
                    Read Now →
                  </div>
                </div>
              </div>
            </Link>

            {/* Blog 3 */}
            <Link to="/blog/ai-continuous-optimization-engine-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 hover:bg-white/20 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    ⚡
                  </div>
                  <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    NEW OCT 2025
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                  AI Continuous Optimization Engine
                </h4>
                <p className="text-purple-100 mb-4 leading-relaxed text-sm">
                  Self-improving systems delivering 400% efficiency gains & $50M+ ROI through 24/7 optimization
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 text-xs text-purple-200">
                    <span>⏱️ 16 min read</span>
                    <span>🎯 Operations</span>
                  </div>
                  <div className="text-yellow-400 font-bold group-hover:text-yellow-300">
                    Read Now →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
            <span className="text-green-400">🏆</span>
            Real Enterprise Success Stories
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Case Study 1 */}
            <Link to="/case-studies/quantum-pharma-ai-breakthrough-2025" className="group">
              <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 border-2 border-pink-400/30 hover:border-pink-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                    🧬
                  </div>
                  <div>
                    <span className="inline-block bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                      SUCCESS STORY — OCT 2025
                    </span>
                    <h4 className="text-sm font-semibold text-pink-200">Pharmaceutical AI</h4>
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                  Quantum Pharma: AI Drug Discovery Revolution
                </h4>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  How AI accelerated drug discovery by <strong className="text-yellow-400">15x</strong>, 
                  reduced R&D costs by <strong className="text-green-400">88%</strong>, and created 
                  <strong className="text-cyan-400"> $2.8B</strong> in value with 12 breakthrough therapies.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-400">15x</div>
                    <div className="text-xs text-purple-200">Discovery Speed</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">$2.8B</div>
                    <div className="text-xs text-purple-200">Value Created</div>
                  </div>
                </div>
                <div className="text-yellow-400 font-bold text-lg group-hover:text-yellow-300">
                  Read Full Story →
                </div>
              </div>
            </Link>

            {/* Case Study 2 */}
            <Link to="/case-studies/energy-giant-autonomous-grid-optimization-2025" className="group">
              <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2 border-2 border-cyan-400/30 hover:border-cyan-400">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-3xl shadow-lg">
                    ⚡
                  </div>
                  <div>
                    <span className="inline-block bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                      SUCCESS STORY — OCT 2025
                    </span>
                    <h4 className="text-sm font-semibold text-cyan-200">Energy Innovation</h4>
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                  PowerGen: AI Autonomous Grid Revolution
                </h4>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  How AI achieved <strong className="text-green-400">$1.2B</strong> annual savings, 
                  <strong className="text-yellow-400"> 99.997%</strong> reliability, 
                  <strong className="text-cyan-400"> 72%</strong> renewable integration, and zero major outages.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">$1.2B</div>
                    <div className="text-xs text-purple-200">Annual Savings</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-yellow-400">99.997%</div>
                    <div className="text-xs text-purple-200">Uptime</div>
                  </div>
                </div>
                <div className="text-yellow-400 font-bold text-lg group-hover:text-yellow-300">
                  Read Full Story →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-2xl p-8 shadow-2xl text-gray-900 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Achieve Similar Results?
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join innovative enterprises achieving breakthrough results with AI. Our experts will 
            design a custom solution that delivers measurable business value.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" 
              className="bg-purple-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-purple-800 transition-all transform hover:scale-105 shadow-xl"
            >
              🚀 Schedule Free Consultation
            </Link>
            <Link to="/services/ai-business-intelligence-2025" 
              className="bg-white text-purple-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
            >
              Explore AI Services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}