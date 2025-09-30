import React from 'react';
import Link from 'next/link';

const Revolutionary2026ContentBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="font-semibold">Revolutionary 2026 Content</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Discover the Future of AI & Technology
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Explore cutting-edge insights, breakthrough innovations, and transformative solutions 
            that are reshaping industries in 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AI Superintelligence</h3>
                <p className="text-sm opacity-80">Next-gen AI breakthroughs</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Explore how superintelligent AI systems are revolutionizing decision-making, 
              automation, and human-AI collaboration.
            </p>
            <Link 
              href="/blog/ai-superintelligence-2026"
              className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-semibold transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Quantum Computing</h3>
                <p className="text-sm opacity-80">Breakthrough applications</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Discover how quantum computing is solving previously impossible problems 
              in cryptography, optimization, and scientific research.
            </p>
            <Link 
              href="/blog/quantum-computing-2026"
              className="inline-flex items-center text-green-300 hover:text-green-200 font-semibold transition-colors"
            >
              Read More →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔮</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Metaverse Enterprise</h3>
                <p className="text-sm opacity-80">Virtual business solutions</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Learn how enterprises are leveraging the metaverse for training, 
              collaboration, and immersive customer experiences.
            </p>
            <Link 
              href="/blog/metaverse-enterprise-2026"
              className="inline-flex items-center text-purple-300 hover:text-purple-200 font-semibold transition-colors"
            >
              Read More →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All 2026 Content
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Revolutionary2026ContentBanner;