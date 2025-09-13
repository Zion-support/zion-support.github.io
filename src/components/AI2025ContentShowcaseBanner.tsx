import React from 'react';
import { Link } from 'react-router-dom';

const AI2025ContentShowcaseBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🎯 AI 2025 Content Showcase
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary insights, proven strategies, and comprehensive guides for achieving extraordinary results with AI autonomous operations
          </p>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-400/30">
              <span className="text-yellow-400 font-semibold">✨ New Content Available Now</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Featured Blog Post */}
          <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-3 mr-4">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <span className="text-blue-300 text-sm font-medium">FEATURED BLOG</span>
                <div className="text-yellow-400 text-sm">8 min read</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              AI 2025: Autonomous Business Operations Revolution
            </h3>
            <p className="text-gray-300 mb-6">
              Discover how AI-powered autonomous operations are transforming businesses in 2025, delivering unprecedented efficiency and ROI. Learn about the breakthrough technologies and real-world implementations achieving extraordinary results.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">AI 2025</span>
              <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm">Autonomous Operations</span>
              <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm">Business Automation</span>
            </div>
            <Link 
              to="/blog/ai-2025-autonomous-business-operations"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center"
            >
              Read Full Article
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Featured Case Study */}
          <div className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 rounded-full p-3 mr-4">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <span className="text-green-300 text-sm font-medium">SUCCESS STORY</span>
                <div className="text-yellow-400 text-sm">12 min read</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Global Enterprise AI Transformation Success
            </h3>
            <p className="text-gray-300 mb-6">
              Fortune 500 company achieves 4,200% ROI through comprehensive AI transformation, reducing operational costs by 78% while increasing efficiency by 15,000%. Detailed case study with implementation insights.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-600/30 text-green-300 px-3 py-1 rounded-full text-sm">Enterprise</span>
              <span className="bg-teal-600/30 text-teal-300 px-3 py-1 rounded-full text-sm">ROI Success</span>
              <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">Transformation</span>
            </div>
            <Link 
              to="/case-studies/ai-2025-global-enterprise-autonomous-transformation"
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center"
            >
              View Case Study
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Implementation Guide Section */}
        <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 rounded-full p-3 mr-4">
                  <span className="text-2xl">📚</span>
                </div>
                <div>
                  <span className="text-purple-300 text-sm font-medium">IMPLEMENTATION GUIDE</span>
                  <div className="text-yellow-400 text-sm">15 min read</div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Complete AI 2025 Autonomous Operations Implementation Guide
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                The definitive guide to implementing AI autonomous operations in 2025. Step-by-step roadmap for achieving 2,500-5,000% ROI through intelligent automation, including readiness assessment, strategic planning, and performance measurement.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm">Implementation</span>
                <span className="bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded-full text-sm">ROI Guide</span>
                <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">Best Practices</span>
              </div>
              <Link 
                to="/resources/ai-2025-autonomous-operations-implementation-guide"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 inline-flex items-center"
              >
                Get Implementation Guide
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Link>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                <h4 className="text-white font-semibold mb-4">Guide Includes:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    AI Readiness Assessment
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Strategic Planning Framework
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Implementation Roadmap
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Performance Measurement
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Risk Management
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Success Factors
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-yellow-400 mb-2">2,500-5,000%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Operational Accuracy</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">10,000x</div>
            <div className="text-gray-300">Faster Processing</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-purple-400 mb-2">Zero</div>
            <div className="text-gray-300">System Downtime</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already achieving extraordinary results with AI autonomous operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025ContentShowcaseBanner;