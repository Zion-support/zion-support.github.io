import React from 'react';
import Link from 'next/link';

export default function January2026ContentDiscoveryHub() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
            <span className="text-indigo-400 font-bold text-lg tracking-wider uppercase">
              🔍 January 2026 Content Discovery Hub
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Explore Our Latest AI Breakthroughs
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover cutting-edge AI technologies, enterprise success stories, and revolutionary breakthroughs 
            that are transforming industries worldwide.
          </p>
        </div>

        {/* Featured Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Latest Breakthroughs */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Latest Breakthroughs</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary AI technologies and scientific breakthroughs that are reshaping the future of enterprise automation.
            </p>
            <div className="space-y-3 mb-6">
              <Link 
                href="/blog/ai-2026-january-quantum-neural-consensus-breakthrough"
                className="block p-3 bg-purple-500/10 rounded-lg border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
              >
                <div className="font-semibold text-white">Quantum Neural Consensus</div>
                <div className="text-sm text-purple-300">99.97% accuracy breakthrough</div>
              </Link>
              <Link 
                href="/blog/ai-2026-autonomous-enterprise-operations"
                className="block p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
              >
                <div className="font-semibold text-white">Autonomous Enterprise Operations</div>
                <div className="text-sm text-indigo-300">Complete operational autonomy</div>
              </Link>
            </div>
            <Link 
              href="/blog"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors"
            >
              View All Breakthroughs →
            </Link>
          </div>

          {/* Success Stories */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4">Success Stories</h3>
            <p className="text-gray-300 mb-6">
              Real-world case studies showcasing how leading enterprises achieved unprecedented results with our AI solutions.
            </p>
            <div className="space-y-3 mb-6">
              <Link 
                href="/case-studies/fortune-500-quantum-neural-consensus-2-8b-success"
                className="block p-3 bg-green-500/10 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
              >
                <div className="font-semibold text-white">$2.8B Manufacturing Success</div>
                <div className="text-sm text-green-300">Quantum Neural Consensus implementation</div>
              </Link>
              <Link 
                href="/case-studies/fortune-500-ai-orchestration-3-2b-success"
                className="block p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
              >
                <div className="font-semibold text-white">$3.2B AI Orchestration Success</div>
                <div className="text-sm text-emerald-300">Enterprise transformation case study</div>
              </Link>
            </div>
            <Link 
              href="/case-studies"
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold transition-colors"
            >
              View All Success Stories →
            </Link>
          </div>

          {/* Services & Solutions */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-6xl mb-6">🛠️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Services & Solutions</h3>
            <p className="text-gray-300 mb-6">
              Comprehensive AI implementation services and enterprise solutions designed to transform your business operations.
            </p>
            <div className="space-y-3 mb-6">
              <Link 
                href="/services/quantum-neural-consensus-implementation"
                className="block p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
              >
                <div className="font-semibold text-white">Quantum Neural Consensus</div>
                <div className="text-sm text-blue-300">Multi-agent intelligence implementation</div>
              </Link>
              <Link 
                href="/services/enterprise-ai-transformation"
                className="block p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
              >
                <div className="font-semibold text-white">Enterprise AI Transformation</div>
                <div className="text-sm text-cyan-300">Complete digital transformation</div>
              </Link>
            </div>
            <Link 
              href="/services"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              Explore All Services →
            </Link>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* ROI Calculator */}
          <div className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Calculate Your ROI</h3>
            <p className="text-gray-300 mb-6">
              Use our interactive ROI calculator to estimate the potential value and returns from implementing our AI solutions in your organization.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Annual Revenue</label>
                <input 
                  type="text" 
                  placeholder="$100M - $1B+" 
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                <select className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500">
                  <option value="">Select Industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="financial">Financial Services</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="technology">Technology</option>
                </select>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
              Calculate Potential ROI
            </button>
          </div>

          {/* Content Recommendations */}
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Personalized Recommendations</h3>
            <p className="text-gray-300 mb-6">
              Get personalized content recommendations based on your industry, role, and interests. 
              Discover the most relevant AI insights for your organization.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Role</label>
                <select className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-green-500">
                  <option value="">Select Role</option>
                  <option value="cto">CTO</option>
                  <option value="cio">CIO</option>
                  <option value="cdo">CDO</option>
                  <option value="ai-director">AI Director</option>
                  <option value="enterprise-architect">Enterprise Architect</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Interests</label>
                <div className="flex flex-wrap gap-2">
                  {['Quantum AI', 'Autonomous Operations', 'Enterprise Transformation', 'ROI Optimization'].map((interest) => (
                    <button 
                      key={interest}
                      className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm hover:bg-green-500/30 transition-colors"
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
              Get Recommendations
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link 
              href="/blog"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📚</div>
              <div className="font-semibold text-white text-sm">Latest Blog Posts</div>
            </Link>
            <Link 
              href="/case-studies"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📊</div>
              <div className="font-semibold text-white text-sm">Success Stories</div>
            </Link>
            <Link 
              href="/services"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🛠️</div>
              <div className="font-semibold text-white text-sm">Our Services</div>
            </Link>
            <Link 
              href="/contact"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 text-center transition-colors group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">💬</div>
              <div className="font-semibold text-white text-sm">Contact Us</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}