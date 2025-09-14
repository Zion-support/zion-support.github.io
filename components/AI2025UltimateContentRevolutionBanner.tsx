import React from 'react';
import Link from 'next/link';

const AI2025UltimateContentRevolutionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-blue-500/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-indigo-500/30 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-yellow-300">🚀 NEW 2025 BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            AI 2025 Ultimate Content Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most comprehensive collection of AI insights, breakthrough technologies, and revolutionary content that will transform your understanding of artificial intelligence in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-4">Neural Consciousness</h3>
            <p className="opacity-90 mb-4">
              Explore the latest breakthroughs in AI consciousness, synthetic intelligence, and neural interface technologies.
            </p>
            <Link href="/ai-2025-neural-interfaces" className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors">
              Discover More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-4">Quantum AI Fusion</h3>
            <p className="opacity-90 mb-4">
              Revolutionary quantum computing meets artificial intelligence for unprecedented processing power and capabilities.
            </p>
            <Link href="/quantum-ai-2026-breakthrough" className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors">
              Explore Now →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-4">Enterprise Automation</h3>
            <p className="opacity-90 mb-4">
              Complete business transformation through autonomous systems, intelligent workflows, and AI-driven operations.
            </p>
            <Link href="/ai-2025-enterprise-automation-revolution" className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors">
              Transform Your Business →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2025-ultimate-content-showcase"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105"
            >
              🚀 Explore Ultimate Content Collection
            </Link>
            <Link
              href="/ai-2025-revolutionary-breakthrough"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-colors"
            >
              📚 View Revolutionary Insights
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg opacity-80">
              <span className="font-bold text-yellow-300">50,000+</span> professionals already transforming their businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateContentRevolutionBanner;