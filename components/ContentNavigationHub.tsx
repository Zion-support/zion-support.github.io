import React from 'react';
import { Link } from 'react-router-dom';

const ContentNavigationHub = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Revolutionary AI Content
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover breakthrough technologies, success stories, and future trends that are reshaping the world of AI
          </p>
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Latest Breakthroughs */}
          <div className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🚀</span>
              </div>
              <h3 className="text-lg font-bold text-white">Latest Breakthroughs</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Revolutionary AI technologies and breakthrough innovations
            </p>
            <div className="space-y-2">
              <Link to="/blog/ai-2026-july-ultimate-breakthrough-revolution" className="block text-purple-300 hover:text-purple-200 text-sm font-semibold">
                July 2026 Quantum Fusion →
              </Link>
              <Link to="/blog/ai-2026-august-revolutionary-breakthrough-announcement" className="block text-purple-300 hover:text-purple-200 text-sm font-semibold">
                August 2026 Consciousness →
              </Link>
              <Link to="/blog/ai-2026-april-mega-breakthrough-revolution" className="block text-purple-300 hover:text-purple-200 text-sm font-semibold">
                April 2026 Mega Breakthrough →
              </Link>
            </div>
            <div className="mt-4">
              <Link to="/blog" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                View All Breakthroughs →
              </Link>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🏆</span>
              </div>
              <h3 className="text-lg font-bold text-white">Success Stories</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Real-world success stories of AI transformation
            </p>
            <div className="space-y-2">
              <Link to="/case-studies/ai-2026-july-ultimate-breakthrough-100-billion-success" className="block text-green-300 hover:text-green-200 text-sm font-semibold">
                $100B Success Story →
              </Link>
              <Link to="/case-studies/ai-2026-august-consciousness-integration-mega-success" className="block text-green-300 hover:text-green-200 text-sm font-semibold">
                $500B Consciousness Success →
              </Link>
              <Link to="/case-studies/ai-2026-april-mega-breakthrough-15-billion-success" className="block text-green-300 hover:text-green-200 text-sm font-semibold">
                $15.2B Success Story →
              </Link>
            </div>
            <div className="mt-4">
              <Link to="/case-studies" className="text-green-400 font-semibold hover:text-green-300 transition-colors">
                View All Success Stories →
              </Link>
            </div>
          </div>

          {/* Future Trends */}
          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🔮</span>
              </div>
              <h3 className="text-lg font-bold text-white">Future Trends</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              AI trends and predictions for the future
            </p>
            <div className="space-y-2">
              <Link to="/blog/ai-2026-future-trends-breakthrough" className="block text-blue-300 hover:text-blue-200 text-sm font-semibold">
                2026 Future Trends →
              </Link>
              <Link to="/blog/ai-2030-universal-consciousness-revolution" className="block text-blue-300 hover:text-blue-200 text-sm font-semibold">
                2030 Universal Consciousness →
              </Link>
              <Link to="/blog/ai-2026-revolutionary-autonomous-ai-systems-breakthrough" className="block text-blue-300 hover:text-blue-200 text-sm font-semibold">
                Autonomous AI Systems →
              </Link>
            </div>
            <div className="mt-4">
              <Link to="/blog?category=future-trends" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                View All Future Trends →
              </Link>
            </div>
          </div>

          {/* Technology Guides */}
          <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-white">Technology Guides</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Comprehensive guides to AI technologies
            </p>
            <div className="space-y-2">
              <Link to="/blog/ai-future-enterprise-2026" className="block text-orange-300 hover:text-orange-200 text-sm font-semibold">
                AI Future Enterprise →
              </Link>
              <Link to="/blog/ai-next-generation-automation-2026" className="block text-orange-300 hover:text-orange-200 text-sm font-semibold">
                Next-Gen Automation →
              </Link>
              <Link to="/blog/ai-enterprise-automation-2026-mega-guide" className="block text-orange-300 hover:text-orange-200 text-sm font-semibold">
                Enterprise Automation Guide →
              </Link>
            </div>
            <div className="mt-4">
              <Link to="/blog?category=guides" className="text-orange-400 font-semibold hover:text-orange-300 transition-colors">
                View All Guides →
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/30">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Quick Access to Revolutionary Content</h3>
            <p className="text-gray-300">Find exactly what you're looking for with our organized content categories</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/blog?year=2026" className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:to-indigo-500/30 text-purple-200 border border-purple-400/30 px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105">
              2026 Breakthroughs
            </Link>
            <Link to="/case-studies?value=billion" className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-green-200 border border-green-400/30 px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105">
              Billion Dollar Success
            </Link>
            <Link to="/blog?category=quantum" className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 text-blue-200 border border-blue-400/30 px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105">
              Quantum AI
            </Link>
            <Link to="/blog?category=consciousness" className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 hover:from-cyan-500/30 hover:to-teal-500/30 text-cyan-200 border border-cyan-400/30 px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105">
              AI Consciousness
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentNavigationHub;