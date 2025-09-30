import React from 'react';
import Link from 'next/link';

const NewBlogContentBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-yellow-400">📚</span>
              <span className="text-sm font-semibold">NEW BLOG CONTENT</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              AI Transformation 2026: 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                {' '}Complete Implementation Guide
              </span>
            </h2>
            
            <p className="text-xl mb-8 text-indigo-100 leading-relaxed">
              Master AI transformation with our comprehensive guide featuring proven strategies, 
              ROI frameworks, and real-world case studies achieving 300% ROI and 95% efficiency gains.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">35 min</div>
                <div className="text-sm text-indigo-200">Complete Guide</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">300%</div>
                <div className="text-sm text-indigo-200">ROI Strategies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">500+</div>
                <div className="text-sm text-indigo-200">Success Stories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-400">$50M+</div>
                <div className="text-sm text-indigo-200">Annual Savings</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-transformation-2026-complete-guide"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Read Complete Guide
              </Link>
              <Link
                href="/blog"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View All Articles
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Featured Blog Articles</h3>
              
              <div className="space-y-6">
                <Link href="/blog/ai-transformation-2026-complete-guide" className="group block">
                  <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg p-4 hover:from-yellow-600/30 hover:to-orange-600/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">📖</span>
                      <span className="text-sm font-semibold text-yellow-400">Complete Guide</span>
                    </div>
                    <h4 className="font-semibold group-hover:text-yellow-400 transition-colors">
                      AI Transformation 2026: Complete Implementation Guide
                    </h4>
                    <p className="text-sm text-indigo-200 mt-1">
                      Master AI transformation with proven strategies achieving 300% ROI
                    </p>
                  </div>
                </Link>
                
                <Link href="/blog/ai-revolution-2026-next-frontier" className="group block">
                  <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-lg p-4 hover:from-red-600/30 hover:to-pink-600/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🚀</span>
                      <span className="text-sm font-semibold text-red-400">Featured Article</span>
                    </div>
                    <h4 className="font-semibold group-hover:text-red-400 transition-colors">
                      AI Revolution 2026: The Next Frontier
                    </h4>
                    <p className="text-sm text-indigo-200 mt-1">
                      300% productivity gains with autonomous AI agents
                    </p>
                  </div>
                </Link>
                
                <Link href="/blog/quantum-ai-breakthrough-2026" className="group block">
                  <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4 hover:from-blue-600/30 hover:to-indigo-600/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">⚛️</span>
                      <span className="text-sm font-semibold text-blue-400">Breakthrough</span>
                    </div>
                    <h4 className="font-semibold group-hover:text-blue-400 transition-colors">
                      Quantum AI Breakthrough 2026
                    </h4>
                    <p className="text-sm text-indigo-200 mt-1">
                      500x faster processing for impossible problems
                    </p>
                  </div>
                </Link>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/20 text-center">
                <Link
                  href="/blog"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                >
                  View All Articles →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBlogContentBanner;