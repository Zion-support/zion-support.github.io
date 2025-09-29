import React from 'react';
import { Link } from 'react-router-dom';

export default function NewContentShowcaseBanner() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            New Content Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover cutting-edge AI strategies, real-world case studies, and proven frameworks 
            that are transforming businesses worldwide in 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Featured Article 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Featured Article
              </span>
              <span className="text-sm opacity-75">18 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              AI Enterprise Transformation 2025: Complete Implementation Guide
            </h3>
            <p className="text-gray-200 mb-4 text-sm leading-relaxed">
              Master AI enterprise transformation with proven strategies, frameworks, and real-world success stories. 
              Transform your business with AI in 2025.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-xs">
                <div className="text-center">
                  <div className="font-bold text-blue-300">300%</div>
                  <div className="opacity-75">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-green-300">85%</div>
                  <div className="opacity-75">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-300">$2.5M</div>
                  <div className="opacity-75">Savings</div>
                </div>
              </div>
            </div>
            <Link
              to="/blog/ai-enterprise-transformation-2025"
              className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              Read Article →
            </Link>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Success Story
              </span>
              <span className="text-sm opacity-75">Manufacturing</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              AI Supply Chain Optimization: 60% Cost Reduction
            </h3>
            <p className="text-gray-200 mb-4 text-sm leading-relaxed">
              See how a Fortune 500 manufacturer achieved 60% cost reduction and 95% efficiency improvement 
              using AI-powered supply chain optimization.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-xs">
                <div className="text-center">
                  <div className="font-bold text-green-300">60%</div>
                  <div className="opacity-75">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-blue-300">95%</div>
                  <div className="opacity-75">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-300">$12M</div>
                  <div className="opacity-75">Annual Savings</div>
                </div>
              </div>
            </div>
            <Link
              to="/case-studies/ai-supply-chain-optimization-2025"
              className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          {/* Featured Article 2 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                New Article
              </span>
              <span className="text-sm opacity-75">15 min read</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              AI Autonomous Operations: Self-Healing Infrastructure
            </h3>
            <p className="text-gray-200 mb-4 text-sm leading-relaxed">
              Learn how to implement AI-powered autonomous operations for self-healing, self-optimizing 
              infrastructure. Reduce downtime by 90% with autonomous systems.
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-4 text-xs">
                <div className="text-center">
                  <div className="font-bold text-emerald-300">90%</div>
                  <div className="opacity-75">Downtime Reduction</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-blue-300">99.99%</div>
                  <div className="opacity-75">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-300">15s</div>
                  <div className="opacity-75">Resolution Time</div>
                </div>
              </div>
            </div>
            <Link
              to="/blog/ai-autonomous-operations-2025"
              className="inline-block bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
            >
              Read Article →
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/blog"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Articles
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ professionals getting the latest AI insights and strategies
          </p>
        </div>
      </div>
    </section>
  );
}