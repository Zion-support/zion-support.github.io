// import React from 'react';
import { Link } from 'react-router-dom';

export default function January2026RevolutionaryContentBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold animate-pulse">
              🚀 JANUARY 2026 REVOLUTIONARY CONTENT
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary AI Breakthroughs
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto">
            Discover the most advanced AI technologies transforming enterprise operations in 2026. 
            From edge-native intelligence to federated learning, explore breakthrough innovations 
            delivering unprecedented performance and ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-300">Edge-Native Intelligence</h3>
                <p className="text-gray-400">50x Performance Revolution</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Revolutionary edge-native AI delivering 50x performance improvements, sub-10ms latency, 
              and 99.9% uptime across distributed enterprise systems.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50x</div>
                <div className="text-sm text-gray-400">Performance</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">$3.2B</div>
                <div className="text-sm text-gray-400">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">10ms</div>
                <div className="text-sm text-gray-400">Latency</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Link to="/blog/ai-2026-edge-native-intelligence-revolution"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Read Article →
              </Link>
              <Link to="/case-studies/ai-2026-edge-native-intelligence-mega-success"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg font-bold hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Success Story →
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">🔒</div>
              <div>
                <h3 className="text-2xl font-bold text-green-300">Federated Learning</h3>
                <p className="text-gray-400">Privacy-First AI at Scale</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-lg">
              Privacy-first machine learning enabling 1000x faster training, zero data sharing, 
              and collaborative AI development across organizations.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">1000x</div>
                <div className="text-sm text-gray-400">Training Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">99.9%</div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">$2.8B</div>
                <div className="text-sm text-gray-400">ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400">0%</div>
                <div className="text-sm text-gray-400">Data Sharing</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Link to="/blog/ai-2026-federated-learning-enterprise-breakthrough"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Read Article →
              </Link>
              <Link to="/case-studies/ai-2026-federated-learning-enterprise-success"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-bold hover:from-teal-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Success Story →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4 text-purple-300">Revolutionary AI Content Library</h3>
            <p className="text-xl text-gray-300 mb-8">
              Explore our comprehensive collection of AI breakthrough articles, case studies, 
              and implementation guides for 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blog"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore All Articles →
              </Link>
              <Link to="/case-studies"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}