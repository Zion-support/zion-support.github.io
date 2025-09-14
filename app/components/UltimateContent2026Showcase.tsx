import React from 'react';
import Link from 'next/link';

const UltimateContent2026Showcase = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🌟 ULTIMATE CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive library of cutting-edge AI content, case studies, and implementation guides. 
            Everything you need to transform your business with artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Blog Posts */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-2xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Latest Blog Posts</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-cyan-300 transition-colors">
                <Link href="/blog/ai-2025-2026-synthetic-intelligence-revolution-ultimate-breakthrough">
                  Synthetic Intelligence Revolution 2025-2026
                </Link>
              </li>
              <li className="hover:text-cyan-300 transition-colors">
                <Link href="/blog/ai-2025-advanced-automation-revolution-ultimate-guide">
                  Advanced Automation Revolution Guide
                </Link>
              </li>
              <li className="hover:text-cyan-300 transition-colors">
                <Link href="/blog/ai-2025-quantum-computing-business-revolution-ultimate-guide">
                  Quantum Computing Business Revolution
                </Link>
              </li>
              <li className="hover:text-cyan-300 transition-colors">
                <Link href="/blog/ai-2025-neural-interface-revolution-ultimate-guide">
                  Neural Interface Revolution Guide
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <Link 
                href="/blog" 
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                View All Posts →
              </Link>
            </div>
          </div>

          {/* Success Stories */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-2xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-3 text-green-400">Success Stories</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-green-300 transition-colors">
                <Link href="/case-studies/ai-2025-2026-synthetic-intelligence-fortune-500-2500-roi-success">
                  2,500% ROI Synthetic Intelligence Success
                </Link>
              </li>
              <li className="hover:text-green-300 transition-colors">
                <Link href="/case-studies/fortune-500-ai-transformation-2500-roi-success-story">
                  Fortune 500 AI Transformation Success
                </Link>
              </li>
              <li className="hover:text-green-300 transition-colors">
                <Link href="/case-studies/ai-2025-enterprise-automation-800-roi-success-story">
                  Enterprise Automation 800% ROI Success
                </Link>
              </li>
              <li className="hover:text-green-300 transition-colors">
                <Link href="/case-studies/ai-2025-quantum-ai-transformation-2000-roi-success-story">
                  Quantum AI 2,000% ROI Transformation
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <Link 
                href="/case-studies" 
                className="text-green-400 font-semibold hover:text-green-300 transition-colors"
              >
                View All Success Stories →
              </Link>
            </div>
          </div>

          {/* Implementation Guides */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-2xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold mb-3 text-purple-400">Implementation Guides</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-purple-300 transition-colors">
                <Link href="/resources/ai-2025-2026-synthetic-intelligence-implementation-ultimate-master-guide">
                  Synthetic Intelligence Implementation Guide
                </Link>
              </li>
              <li className="hover:text-purple-300 transition-colors">
                <Link href="/resources/ai-2025-implementation-ultimate-master-guide">
                  AI Implementation Ultimate Master Guide
                </Link>
              </li>
              <li className="hover:text-purple-300 transition-colors">
                <Link href="/resources/ai-2025-enterprise-transformation-master-guide">
                  Enterprise Transformation Master Guide
                </Link>
              </li>
              <li className="hover:text-purple-300 transition-colors">
                <Link href="/resources/ai-2025-quantum-implementation-complete-guide">
                  Quantum Implementation Complete Guide
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <Link 
                href="/resources" 
                className="text-purple-400 font-semibold hover:text-purple-300 transition-colors"
              >
                View All Resources →
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">🚀 New: Synthetic Intelligence Revolution</h3>
            <p className="text-lg mb-6 opacity-90">
              Discover the next evolution of AI that's achieving 2,500% ROI for Fortune 500 companies. 
              Self-evolving algorithms, quantum-enhanced neural networks, and autonomous business transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-2025-2026-synthetic-intelligence-revolution-ultimate-breakthrough"
                className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Read Guide
              </Link>
              <Link
                href="/case-studies/ai-2025-2026-synthetic-intelligence-fortune-500-2500-roi-success"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                View Case Study
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">💎 Ultimate Implementation Toolkit</h3>
            <p className="text-lg mb-6 opacity-90">
              Complete implementation guide with proven methodologies, ROI calculators, 
              step-by-step roadmaps, and everything needed for successful AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/resources/ai-2025-2026-synthetic-intelligence-implementation-ultimate-master-guide"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Download Guide
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-lg opacity-80">Blog Posts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">200+</div>
            <div className="text-lg opacity-80">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">150+</div>
            <div className="text-lg opacity-80">Implementation Guides</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">2,500%</div>
            <div className="text-lg opacity-80">Average ROI</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white bg-opacity-10 rounded-xl p-8">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of companies already achieving unprecedented results with our AI solutions. 
            Get started with our free consultation and discover your transformation potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContent2026Showcase;