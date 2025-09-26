import React from 'react';
import { Link } from 'react-router-dom';

export default function NewContentPromotionBanner2025() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">
            🚀 New Content Alert: AI 2025 Revolution Series
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest insights, case studies, and implementation guides that are transforming 
            businesses worldwide with cutting-edge AI technologies.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Blog Post 1 */}
          <Link to="/blog/ai-2025-customer-experience-revolution"
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold mb-2">
                AI Customer Experience Revolution
              </h3>
              <p className="text-sm opacity-80 mb-3">
                Transform customer experience with 400% ROI through AI-powered autonomous agents
              </p>
              <div className="text-xs opacity-70">
                Blog Post • 15 min read
              </div>
            </div>
          </Link>

          {/* Blog Post 2 */}
          <Link to="/blog/ai-2025-autonomous-workforce-revolution"
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">
                Autonomous Workforce Revolution
              </h3>
              <p className="text-sm opacity-80 mb-3">
                Discover how AI agents deliver 500% productivity gains and 70% cost reduction
              </p>
              <div className="text-xs opacity-70">
                Blog Post • 12 min read
              </div>
            </div>
          </Link>

          {/* Case Study */}
          <Link to="/case-studies/ai-customer-experience-transformation-2025-ultimate-success"
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-center">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-semibold mb-2">
                TechCorp Success Story
              </h3>
              <p className="text-sm opacity-80 mb-3">
                How TechCorp achieved $15M ROI through AI customer experience transformation
              </p>
              <div className="text-xs opacity-70">
                Case Study • 20 min read
              </div>
            </div>
          </Link>
        </div>

        {/* Implementation Guide */}
        <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-3">
              Complete Implementation Guide
            </h3>
            <p className="text-lg opacity-90 mb-4 max-w-2xl mx-auto">
              Get your comprehensive roadmap to AI customer experience transformation with proven strategies, 
              best practices, and ROI calculator.
            </p>
            <Link to="/resources/ai-customer-experience-implementation-guide-2025"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download Implementation Guide
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">400%</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">95%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">$2.8B</div>
            <div className="text-sm opacity-80">Total Value Created</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm opacity-80">Companies Transformed</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-lg mb-4">
            Ready to transform your business with AI? Get expert guidance and support.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}