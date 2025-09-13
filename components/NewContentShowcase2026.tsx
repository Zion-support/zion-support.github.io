import React from 'react';
import Link from 'next/link';

const NewContentShowcase2026: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Content 2026
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Discover the future of AI-powered content creation and automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">AI Automation Revolution</h3>
            <p className="text-gray-300 mb-6">
              Cutting-edge AI automation solutions that transform your business operations and boost productivity by 300%.
            </p>
            <Link href="/ai-automation-solutions-2026" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
              Explore Solutions →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-800/50 to-indigo-800/50 rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Quantum Neural Fusion</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum-computing powered AI that processes information at unprecedented speeds.
            </p>
            <Link href="/quantum-neural-fusion-2026" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold">
              Learn More →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Future Predictions</h3>
            <p className="text-gray-300 mb-6">
              Exclusive insights into AI trends and predictions for 2026-2030 that will shape the future.
            </p>
            <Link href="/ai-2026-2030-future-predictions" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
              View Predictions →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/revolutionary-content-showcase-2026" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026;