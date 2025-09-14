import React from 'react';
import Link from 'next/link';

const NewContent2026PromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🔥 NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Revolutionary AI Content
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Discover the future of AI with our groundbreaking 2026 content. 
            Quantum computing, machine learning, and enterprise transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Machine Learning</h3>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Revolutionary algorithms that process data 1000x faster than classical systems. 
              Complete implementation guide for enterprise transformation.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2026-quantum-machine-learning-revolution-ultimate-guide"
                className="text-yellow-400 font-bold text-lg hover:text-yellow-300 transition-colors"
              >
                Read Full Guide →
              </Link>
              <span className="text-sm opacity-75">15 min read</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-5xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Generative AI Enterprise</h3>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Transform your business with cutting-edge generative AI solutions. 
              Proven strategies for 340% ROI and enterprise success.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-breakthrough"
                className="text-yellow-400 font-bold text-lg hover:text-yellow-300 transition-colors"
              >
                Read Full Guide →
              </Link>
              <span className="text-sm opacity-75">12 min read</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-5xl mb-6">💎</div>
            <h3 className="text-2xl font-bold mb-4">Fortune 500 Success</h3>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Real case study: How a Fortune 500 company achieved 2000% ROI 
              through quantum AI transformation and business revolution.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/case-studies/fortune-500-quantum-ai-transformation-2026-ultimate-success"
                className="text-yellow-400 font-bold text-lg hover:text-yellow-300 transition-colors"
              >
                Read Case Study →
              </Link>
              <span className="text-sm opacity-75">8 min read</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-30">
            <h3 className="text-3xl font-bold mb-4">Transform Your Business Today</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already using our AI solutions to achieve breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-xl font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026PromotionBanner;