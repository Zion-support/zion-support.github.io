import React from 'react';
import { Link } from 'react-router-dom';

const NewContent2025PromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🚀 New Content Alert: AI 2025 Breakthroughs
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover revolutionary AI content strategies and automation techniques delivering 300-400% higher engagement rates
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Advanced Content Strategy */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-3">Advanced Content Strategy</h3>
              <p className="text-gray-300 text-sm mb-4">
                Revolutionary AI content strategies delivering 300% higher engagement and 500% ROI improvements
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                AI-powered content creation
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Predictive content strategy
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Real-time optimization
              </div>
            </div>
            <Link 
              to="/blog/ai-2025-advanced-content-strategy"
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Read Full Guide
            </Link>
          </div>

          {/* Content Personalization */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Content Personalization</h3>
              <p className="text-gray-300 text-sm mb-4">
                Revolutionary AI technology delivering 400% higher engagement through real-time content personalization
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Real-time behavioral analysis
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Dynamic content morphing
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Multi-modal intelligence
              </div>
            </div>
            <Link 
              to="/blog/ai-2025-content-personalization-breakthrough"
              className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              Explore Breakthrough
            </Link>
          </div>

          {/* Automation Master Guide */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-center mb-4">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Automation Master Guide</h3>
              <p className="text-gray-300 text-sm mb-4">
                Complete blueprint for implementing AI-powered content automation with 300% higher ROI
              </p>
            </div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center text-sm text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Step-by-step implementation
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                Tool recommendations
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="text-green-400 mr-2">✓</span>
                ROI optimization strategies
              </div>
            </div>
            <Link 
              to="/resources/ai-content-automation-master-guide-2025"
              className="block w-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-center py-2 px-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all"
            >
              Get Master Guide
            </Link>
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">🏆 Enterprise Success Story</h3>
          <p className="text-gray-300 mb-6">
            See how a Fortune 500 company achieved 300% higher engagement rates and 500% ROI improvement using our AI content strategies
          </p>
          <Link 
            to="/case-studies/ai-content-strategy-enterprise-success-2025"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all"
          >
            View Success Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025PromotionBanner;