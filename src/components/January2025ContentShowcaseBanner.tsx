import React from 'react';
import { Link } from 'react-router-dom';

const January2025ContentShowcaseBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('/images/abstract-pattern.svg')] opacity-10 animate-pulse" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-1" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-400 px-6 py-3 rounded-full text-sm font-medium mb-8">
            <span className="text-lg">✨</span>
            <span>JANUARY 2025 CONTENT COLLECTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Complete AI Knowledge Hub
            </span>
            <br /> <span className="text-white">2025 Edition</span>
          </h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI insights, breakthrough technologies, and revolutionary implementations that are transforming enterprises worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Article 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl">
                🚀
              </div>
              <div>
                <span className="text-sm font-semibold text-blue-300">AI Innovation</span>
                <div className="text-xs text-purple-300">15 min read</div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
              Next-Generation Enterprise AI: Complete 2025 Guide
            </h3>
            <p className="text-purple-200 mb-4 text-sm leading-relaxed">
              Master the latest AI technologies with proven frameworks achieving 95% automation rates and $2M+ annual savings.
            </p>
            <Link
              to="/blog/next-generation-enterprise-ai-2025"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold transition-colors"
            >
              Read Full Article
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Featured Article 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                ⚡
              </div>
              <div>
                <span className="text-sm font-semibold text-purple-300">Quantum Computing</span>
                <div className="text-xs text-purple-300">22 min read</div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
              Quantum AI Breakthrough: Revolutionary Computing
            </h3>
            <p className="text-purple-200 mb-4 text-sm leading-relaxed">
              Explore quantum-classical hybrid systems delivering 1000x performance improvements in enterprise applications.
            </p>
            <Link
              to="/blog/quantum-ai-breakthrough-2025"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-semibold transition-colors"
            >
              Read Full Article
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Featured Article 3 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-2xl">
                🧠
              </div>
              <div>
                <span className="text-sm font-semibold text-green-300">Neural Networks</span>
                <div className="text-xs text-purple-300">18 min read</div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
              Autonomous Neural Networks: Self-Evolving AI
            </h3>
            <p className="text-purple-200 mb-4 text-sm leading-relaxed">
              Discover self-evolving neural architectures achieving 99.97% accuracy in autonomous decision-making systems.
            </p>
            <Link
              to="/blog/autonomous-neural-networks-2025"
              className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 font-semibold transition-colors"
            >
              Read Full Article
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/content"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
          >
            Explore Complete Content Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default January2025ContentShowcaseBanner;