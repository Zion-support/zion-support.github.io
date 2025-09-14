import React from 'react';
import Link from 'next/link';

const NewContent2025ShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
              Now Available
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore cutting-edge AI insights, breakthrough case studies, and proven implementation strategies. 
            Stay ahead with the latest in AI technology and business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Posts */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-2xl mr-3">🧠</div>
              <div className="text-sm text-yellow-300 font-semibold">BLOG POST</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Generative AI Enterprise Revolution</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Complete guide to implementing generative AI in enterprise environments. 
              Discover revolutionary capabilities and transformative business outcomes.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-breakthrough"
                className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm"
              >
                Read Now →
              </Link>
              <span className="text-xs text-gray-400">15 min read</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-2xl mr-3">⚛️</div>
              <div className="text-sm text-cyan-300 font-semibold">BLOG POST</div>
            </div>
            <h3 className="text-xl font-bold mb-3">Quantum Machine Learning Guide</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Ultimate guide to quantum machine learning in 2025. 
              Explore revolutionary capabilities and business transformation strategies.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2025-quantum-machine-learning-revolution-ultimate-guide"
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
              >
                Explore Guide →
              </Link>
              <span className="text-xs text-gray-400">20 min read</span>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="text-2xl mr-3">📊</div>
              <div className="text-sm text-green-300 font-semibold">CASE STUDY</div>
            </div>
            <h3 className="text-xl font-bold mb-3">2000% ROI Success Story</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Real Fortune 500 case study: Quantum AI transformation delivering 
              $1.05 billion in annual savings and unprecedented ROI.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/case-studies/ai-2025-quantum-ai-transformation-2000-roi-success-story"
                className="text-green-400 hover:text-green-300 font-semibold text-sm"
              >
                View Success →
              </Link>
              <span className="text-xs text-gray-400">12 min read</span>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-lg font-semibold mb-1">AI Revolution</div>
            <div className="text-sm text-gray-300">15+ Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-lg font-semibold mb-1">Quantum AI</div>
            <div className="text-sm text-gray-300">8+ Guides</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💼</div>
            <div className="text-lg font-semibold mb-1">Case Studies</div>
            <div className="text-sm text-gray-300">25+ Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-lg font-semibold mb-1">ROI Success</div>
            <div className="text-sm text-gray-300">1000%+ ROI</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Stay updated with the latest AI insights and business transformation strategies
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025ShowcaseBanner;