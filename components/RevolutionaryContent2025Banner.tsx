import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2025Banner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-25 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🌟 REVOLUTIONARY 2025 CONTENT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Transform Your Business with 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Cutting-Edge AI Solutions
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover the latest AI breakthroughs, autonomous systems, and quantum computing innovations 
            that are reshaping industries and delivering unprecedented business results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Featured Content Highlights</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Enterprise Automation Revolution</h4>
                  <p className="text-gray-200 mb-3">
                    Complete implementation guide for AI-powered enterprise automation with proven 340% ROI results.
                  </p>
                  <Link 
                    href="/blog/ai-2025-enterprise-automation-revolution-ultimate-success-guide"
                    className="text-yellow-300 hover:text-yellow-200 font-semibold"
                  >
                    Read Full Guide →
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Quantum AI Breakthrough</h4>
                  <p className="text-gray-200 mb-3">
                    Revolutionary quantum computing and AI integration delivering 1000x computational speedup.
                  </p>
                  <Link 
                    href="/blog/quantum-ai-2026-business-breakthrough-ultimate-guide"
                    className="text-yellow-300 hover:text-yellow-200 font-semibold"
                  >
                    Explore Quantum AI →
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Autonomous Business Systems</h4>
                  <p className="text-gray-200 mb-3">
                    Self-managing AI systems delivering 98% operational efficiency and 24/7 autonomous operation.
                  </p>
                  <Link 
                    href="/blog/ai-2025-autonomous-business-systems-revolution"
                    className="text-yellow-300 hover:text-yellow-200 font-semibold"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-6 text-center">Proven Results</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">340%</div>
                <div className="text-sm opacity-90">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-sm opacity-90">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-sm opacity-90">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Explore All Content
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2025Banner;