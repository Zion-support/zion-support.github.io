import React from 'react';
import { Link } from 'react-router-dom';

const AI2025NewContentPromotionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400/10 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-indigo-400/10 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🚀 New AI 2025 Content Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover groundbreaking insights into autonomous business operations, achieving 2,500-5,000% ROI through AI transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              AI 2025: Autonomous Business Operations
            </h3>
            <p className="text-gray-300 mb-4">
              Learn how AI-powered autonomous operations are transforming businesses with unprecedented efficiency and ROI.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-300">8 min read</span>
              <Link 
                to="/blog/ai-2025-autonomous-business-operations"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Global Enterprise Transformation
            </h3>
            <p className="text-gray-300 mb-4">
              Fortune 500 company achieves 4,200% ROI through comprehensive AI transformation, reducing costs by 78%.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-green-300">12 min read</span>
              <Link 
                to="/case-studies/ai-2025-global-enterprise-autonomous-transformation"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                View Case Study
              </Link>
            </div>
          </div>

          {/* Implementation Guide */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Complete Implementation Guide
            </h3>
            <p className="text-gray-300 mb-4">
              Step-by-step roadmap for implementing AI autonomous operations and achieving extraordinary ROI.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-purple-300">15 min read</span>
              <Link 
                to="/resources/ai-2025-autonomous-operations-implementation-guide"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Get Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2,500-5,000%</div>
            <div className="text-sm text-gray-300">ROI Achievement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-300">Operational Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">10,000x</div>
            <div className="text-sm text-gray-300">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">Zero</div>
            <div className="text-sm text-gray-300">Downtime</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link 
              to="/resources"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all hover:from-yellow-500 hover:to-orange-600 hover:scale-105"
            >
              Explore All Resources
            </Link>
            <Link 
              to="/contact"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-white/30"
            >
              Get Implementation Help
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            Join thousands of companies already transforming with AI autonomous operations
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2025NewContentPromotionBanner;