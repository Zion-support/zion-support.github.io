import React from 'react';
import Link from 'next/link';

const NewContent2026UltimateBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-semibold">🚀 NEW IN 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ultimate AI 2026
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Content Revolution
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most comprehensive collection of AI 2026 content: 
            Quantum Computing, Autonomous Systems, Neural Interfaces, and Enterprise Automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-bold mb-2">Quantum AI</h3>
            <p className="text-sm opacity-90 mb-4">Revolutionary quantum computing breakthroughs</p>
            <Link href="/blog/ai-2026-quantum-computing-breakthrough" className="text-yellow-300 font-semibold hover:text-yellow-200">
              Explore →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-bold mb-2">Enterprise Automation</h3>
            <p className="text-sm opacity-90 mb-4">Complete automation revolution guide</p>
            <Link href="/blog/ai-2026-enterprise-automation-revolution" className="text-yellow-300 font-semibold hover:text-yellow-200">
              Explore →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-lg font-bold mb-2">Neural Interfaces</h3>
            <p className="text-sm opacity-90 mb-4">Brain-computer interface technology</p>
            <Link href="/blog/ai-2026-neural-interface-revolution" className="text-yellow-300 font-semibold hover:text-yellow-200">
              Explore →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-bold mb-2">Autonomous Systems</h3>
            <p className="text-sm opacity-90 mb-4">Self-managing AI ecosystems</p>
            <Link href="/blog/ai-2026-autonomous-systems" className="text-yellow-300 font-semibold hover:text-yellow-200">
              Explore →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-4 mb-6">
            <span className="text-sm font-semibold">📊 IMPACT METRICS</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">500+</div>
              <div className="text-sm opacity-90">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">50+</div>
              <div className="text-sm opacity-90">Enterprise Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">$2.3T</div>
              <div className="text-sm opacity-90">Market Opportunity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-1">340%</div>
              <div className="text-sm opacity-90">Average ROI</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/ai-2026-ultimate-content-showcase"
            className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            <span>Explore All AI 2026 Content</span>
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026UltimateBanner;