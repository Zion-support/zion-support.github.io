import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-cyan-400 font-semibold text-lg">
              BREAKING: 3 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h2 className="text-6xl font-extrabold text-white mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Edge Computing • Neural Networks • Quantum Security — The future of enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Article 1: Edge Computing */}
          <Link href="/blog/ai-edge-computing-revolution-2025" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">⚡</div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-bold rounded-full">🔥 HOT</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-full">NEW TODAY</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 text-gray-900 text-sm font-semibold border border-white/20">
                  Edge Computing & AI
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                AI Edge Computing Revolution 2025
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform your infrastructure with edge AI that delivers 99.9% uptime, 50% faster processing, and real-time decision making at the edge.
              </p>

              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-semibold">Read Full Article</span>
                <span className="text-cyan-400">→</span>
              </div>
            </div>
          </Link>

          {/* Article 2: Neural Networks */}
          <Link href="/blog/ai-neural-networks-enterprise-transformation-2025" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">🧠</div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-bold rounded-full">🔥 HOT</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white text-sm font-bold rounded-full">NEW TODAY</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-fuchsia-50 text-gray-900 text-sm font-semibold border border-white/20">
                  Neural Networks & AI
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-fuchsia-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Neural Networks Enterprise Transformation 2025
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Advanced neural architectures delivering 95% accuracy, 300% faster training, and autonomous decision-making capabilities for enterprise applications.
              </p>

              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-semibold">Read Full Article</span>
                <span className="text-purple-400">→</span>
              </div>
            </div>
          </Link>

          {/* Article 3: Quantum Security */}
          <Link href="/blog/quantum-security-ai-systems-2025" className="group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl">🔒</div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-white text-sm font-bold rounded-full">🔥 HOT</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold rounded-full">NEW TODAY</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 text-gray-900 text-sm font-semibold border border-white/20">
                  Quantum Security & AI
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Quantum Security for AI Systems 2025
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Next-generation quantum encryption protecting AI systems with unbreakable security, 99.99% threat prevention, and future-proof infrastructure.
              </p>

              <div className="flex items-center justify-between">
                <span className="text-green-400 font-semibold">Read Full Article</span>
                <span className="text-green-400">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Implement These Breakthrough Technologies?
            </h3>
            
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ enterprises already implementing these cutting-edge AI solutions with <span className="text-cyan-400 font-bold">300% ROI</span> and <span className="text-purple-400 font-bold">95% automation</span>
            </p>

<<<<<<< HEAD
        {/* Stats Section */}
        <div className="text-left">
          {[{
            { value: '500+', label: 'Enterprise Clients' },
            { value: '10B+', label: 'Data Points Processed Daily' },
            { value: '99.9%', label: 'System Uptime' },
            { value: '5M+', label: 'Autonomous Operations Hours' }
          ].map((stat, index) => (
            <div key={index} className="text-left">
              <div className="text-left">
                {stat.value}
              </div>
              <div className="text-left">
                {stat.label}
              </div>
=======
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                <span>Start Your AI Transformation</span>
              </Link>
              
              <Link
                href="/blog"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300">
                <span>Explore All Articles</span>
                <span>→</span>
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-3825
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;