import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const RevolutionaryContent2026Banner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW 2026 CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary AI Content 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the future of AI with our groundbreaking 2026 content series. 
            From enterprise transformation to quantum AI revolutionexplore the technologies that will reshape business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Article 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">🏢</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Enterprise AI Transformation</h3>
                <p className="text-sm opacity-80">Complete Implementation Guide</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Comprehensive roadmap for enterprise AI transformation in 2025. Learn implementation strategies
              best practicesand real-world case studies.
            </p>
            <a 
              href="/blog/ai-2025-enterprise-transformation-complete-guide"
              className="inline-flex items-center text-purple-300 hover:text-purple-200 font-semibold text-sm"
            >
              Read More →
            </a>
          </div>

          {/* Featured Article 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Quantum AI Revolution</h3>
                <p className="text-sm opacity-80">Business Transformation 2026</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Explore the revolutionary impact of Quantum AI on business operations
              competitive advantageand market dynamics in 2026.
            </p>
            <a 
              href="/blog/quantum-ai-2026-business-revolution"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 font-semibold text-sm"
            >
              Read More →
            </a>
          </div>

          {/* Featured Resource */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">AI Implementation Guide</h3>
                <p className="text-sm opacity-80">Enterprise Strategy 2026</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              The definitive guide to enterprise AI implementation in 2026. 
              Complete strategyexecution frameworkand best practices.
            </p>
            <a 
              href="/resources/ai-implementation-enterprise-guide-2026"
              className="inline-flex items-center text-green-300 hover:text-green-200 font-semibold text-sm"
            >
              Read More →
            </a>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">500+</div>
            <div className="text-sm opacity-80">AI Use Cases</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">98%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">340%</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-300 mb-2">24/7</div>
            <div className="text-sm opacity-80">Expert Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/blog"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Content
            </a>
            <a
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              View Resources
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2026Banner;