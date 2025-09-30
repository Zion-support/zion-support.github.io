import React from 'react';
import Link from 'next/link';

export default function January2026FederatedLearningBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🔒 PRIVACY-FIRST AI
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              1000x TRAINING
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
            AI 2026: Federated Learning Enterprise Breakthrough
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover how federated learning is revolutionizing enterprise AI with privacy-first 
            machine learning, 1000x faster training, and zero data sharing across organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-3 text-green-300">Zero Data Sharing</h3>
            <p className="text-gray-300 mb-4">
              Complete privacy preservation with federated learning - models learn from data 
              without ever accessing the raw information.
            </p>
            <div className="text-2xl font-bold text-green-400">100% Private</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3 text-emerald-300">1000x Faster Training</h3>
            <p className="text-gray-300 mb-4">
              Distributed learning across thousands of devices enables 1000x faster 
              model training while maintaining complete privacy.
            </p>
            <div className="text-2xl font-bold text-emerald-400">1000x Speed</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3 text-yellow-300">$2.8B ROI</h3>
            <p className="text-gray-300 mb-4">
              Consortium of 200 financial institutions achieved $2.8B ROI with 
              federated learning while maintaining complete privacy.
            </p>
            <div className="text-2xl font-bold text-yellow-400">$2.8B ROI</div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog/ai-2026-federated-learning-enterprise-breakthrough"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Read Full Article →
            </Link>
            <Link
              href="/case-studies/ai-2026-federated-learning-enterprise-success"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-teal-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Success Story →
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Enable collaborative AI while maintaining complete privacy and regulatory compliance
          </p>
        </div>
      </div>
    </section>
  );
}