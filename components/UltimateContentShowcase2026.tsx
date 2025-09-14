import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI solutions, breakthrough technologies, and transformative business strategies that will revolutionize your industry in 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Neural Interface Revolution</h3>
            <p className="text-gray-300 mb-6">
              Explore the future of human-computer interaction with advanced neural interfaces that will transform how we work and communicate.
            </p>
            <Link 
              href="/neural-interface-revolution-2026" 
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Learn More →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Quantum AI Breakthrough</h3>
            <p className="text-gray-300 mb-6">
              Discover how quantum computing is revolutionizing AI capabilities and creating unprecedented opportunities for business transformation.
            </p>
            <Link 
              href="/quantum-ai-2026-breakthrough" 
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Explore Now →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Autonomous Business Systems</h3>
            <p className="text-gray-300 mb-6">
              Learn about self-managing business operations that run 24/7 without human intervention, delivering unprecedented efficiency and growth.
            </p>
            <Link 
              href="/autonomous-business-systems-2026" 
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Get Started →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/content-showcase-2026"
            className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All 2026 Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026;