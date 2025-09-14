import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2026Banner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-medium">🌟 ULTIMATE 2026 SHOWCASE</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            The Ultimate AI & Technology Content Collection
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Comprehensive insightscase studiesand strategies for the AI revolution of 2026. Everything you need to transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-10 border border-white border-opacity-30">
            <div className="text-6xl mb-6">📚</div>
            <h3 className="text-3xl font-bold mb-6">Comprehensive Blog Series</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🧠</span>
                <Link href="/blog/ai-2026-revolutionary-breakthroughs" className="text-xl hover:text-yellow-300 transition-colors">
                  AI 2026: Revolutionary Breakthroughs
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">⚛️</span>
                <Link href="/blog/quantum-computing-business-applications-2026" className="text-xl hover:text-yellow-300 transition-colors">
                  Quantum Computing Business Applications
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🤖</span>
                <Link href="/blog/autonomous-enterprise-systems-2026" className="text-xl hover:text-yellow-300 transition-colors">
                  Autonomous Enterprise Systems
                </Link>
              </div>
            </div>
            <Link 
              href="/blog"
              className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Explore All Articles →
            </Link>
          </div>

          <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-10 border border-white border-opacity-30">
            <div className="text-6xl mb-6">💼</div>
            <h3 className="text-3xl font-bold mb-6">Success Stories & Case Studies</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏆</span>
                <Link href="/case-studies/fortune-500-ai-transformation" className="text-xl hover:text-yellow-300 transition-colors">
                  Fortune 500: $2.3B Revenue Increase
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🚚</span>
                <Link href="/case-studies/quantum-computing-logistics-optimization" className="text-xl hover:text-yellow-300 transition-colors">
                  Quantum Logistics: 40% Cost Reduction
                </Link>
              </div>
            </div>
            <Link 
              href="/case-studies"
              className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              View All Case Studies →
            </Link>
          </div>
        </div>

        <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-12 border border-white border-opacity-30 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Our expert team is ready to help you implement these revolutionary technologies and achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-900 px-10 py-4 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-purple-900 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2026Banner;