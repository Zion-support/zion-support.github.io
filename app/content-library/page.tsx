import React from 'react';
import { Metadata } from 'next';
import InteractiveContentDiscoveryWidget2025 from '../../components/InteractiveContentDiscoveryWidget2025';
import NewContent2025PromotionBanner from '../../components/NewContent2025PromotionBanner';

export const metadata: Metadata = {
  title: 'Content Library | Zion Tech Group - Revolutionary AI & Technology Content',
  description: 'Explore our comprehensive library of AI insights, quantum computing breakthroughs, automation solutions, and cutting-edge technology content. Discover revolutionary content that transforms businesses.',
  keywords: [
    'content library',
    'AI content',
    'quantum computing content',
    'automation content',
    'technology insights',
    'business resources',
    'AI predictions',
    'quantum breakthroughs',
    'automation solutions',
    'tech tutorials'
  ],
  openGraph: {
    title: 'Content Library - Revolutionary AI & Technology Content',
    description: 'Comprehensive library of cutting-edge AI, quantum computing, and automation content',
    type: 'website',
    url: 'https://zion.tech/content-library'
  }
};

const ContentLibraryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Content Library
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our comprehensive collection of cutting-edge AI insights, quantum computing breakthroughs, 
            automation solutions, and technology content that's transforming businesses worldwide.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300 text-sm">Content Items</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-white mb-2">2.5M+</div>
              <div className="text-gray-300 text-sm">Total Views</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300 text-sm">User Satisfaction</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300 text-sm">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* New Content Promotion Banner */}
      <NewContent2025PromotionBanner />

      {/* Interactive Content Discovery Widget */}
      <InteractiveContentDiscoveryWidget2025 />

      {/* Featured Categories */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our content by category to find exactly what you're looking for, 
              from AI predictions to quantum computing breakthroughs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Predictions Category */}
            <div className="group p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Predictions</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary predictions about the future of artificial intelligence, 
                including breakthrough technologies and industry transformations.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-purple-400 font-semibold">25+ Articles</span>
                <a href="/ai-2025-2030-predictions" className="text-white hover:text-purple-400 transition-colors">
                  Explore →
                </a>
              </div>
            </div>

            {/* Quantum Computing Category */}
            <div className="group p-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing</h3>
              <p className="text-gray-300 mb-6">
                Breakthrough quantum technologies reshaping computation, 
                cryptography, and solving complex problems with quantum advantage.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-semibold">18+ Articles</span>
                <a href="/quantum-computing-breakthroughs-2025" className="text-white hover:text-cyan-400 transition-colors">
                  Explore →
                </a>
              </div>
            </div>

            {/* Automation Solutions Category */}
            <div className="group p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automation Solutions</h3>
              <p className="text-gray-300 mb-6">
                Revolutionary automation technologies transforming business operations 
                with unprecedented efficiency and ROI through intelligent process automation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-semibold">32+ Articles</span>
                <a href="/advanced-automation-solutions-2025" className="text-white hover:text-green-400 transition-colors">
                  Explore →
                </a>
              </div>
            </div>

            {/* Case Studies Category */}
            <div className="group p-8 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Case Studies</h3>
              <p className="text-gray-300 mb-6">
                Real-world success stories showcasing how businesses achieve 
                remarkable results with our AI and automation solutions.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-orange-400 font-semibold">45+ Studies</span>
                <a href="/case-studies" className="text-white hover:text-orange-400 transition-colors">
                  Explore →
                </a>
              </div>
            </div>

            {/* Tutorials Category */}
            <div className="group p-8 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tutorials</h3>
              <p className="text-gray-300 mb-6">
                Step-by-step guides and tutorials to help you implement 
                AI and automation solutions in your own business.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-yellow-400 font-semibold">28+ Tutorials</span>
                <a href="/tutorials" className="text-white hover:text-yellow-400 transition-colors">
                  Explore →
                </a>
              </div>
            </div>

            {/* Insights Category */}
            <div className="group p-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Insights</h3>
              <p className="text-gray-300 mb-6">
                Deep insights and analysis on emerging technologies, 
                market trends, and the future of digital transformation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-400 font-semibold">67+ Insights</span>
                <a href="/insights" className="text-white hover:text-indigo-400 transition-colors">
                  Explore →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our content library is constantly growing. Request specific content or get personalized 
            recommendations from our AI-powered discovery engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/content-request"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Request Content
            </a>
            <a
              href="/newsletter"
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Get Weekly Updates
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentLibraryPage;