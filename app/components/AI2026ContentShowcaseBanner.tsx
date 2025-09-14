import React from 'react';
import Link from 'next/link';

const AI2026ContentShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW AI 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI 2026 Content Now Available
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the latest breakthroughs in AI technology with our comprehensive guides, 
            case studies, and implementation strategies for 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">Enterprise Automation Mastery</h3>
            <p className="text-gray-200 mb-4">
              Master enterprise automation with cutting-edge AI technologies. Complete implementation guide with real-world case studies.
            </p>
            <Link 
              href="/blog/ai-2026-enterprise-automation-mastery-ultimate-guide"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Read Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum AI Revolution</h3>
            <p className="text-gray-200 mb-4">
              Discover how quantum AI is revolutionizing business operations. Complete guide to next-generation intelligence.
            </p>
            <Link 
              href="/blog/quantum-ai-2026-business-revolution-complete-guide"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Explore Quantum AI →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-bold mb-3">Autonomous Systems</h3>
            <p className="text-gray-200 mb-4">
              Master autonomous AI systems for enterprise transformation. Complete implementation guide with breakthrough results.
            </p>
            <Link 
              href="/blog/ai-2026-autonomous-systems-enterprise-breakthrough"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              Learn More →
            </Link>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Complete AI 2026 Implementation Master Guide</h3>
            <p className="text-lg text-gray-200 mb-6">
              The definitive guide to implementing AI 2026 technologies in your enterprise. 
              Complete roadmap with tools, strategies, and real-world case studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/ai-2026-implementation-master-guide"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Download Master Guide
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-4">
            Join 10,000+ professionals who are already transforming their businesses with AI 2026
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Free Implementation Templates
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Expert Case Studies
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              ROI Calculators
            </div>
            <div className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              Implementation Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2026ContentShowcaseBanner;