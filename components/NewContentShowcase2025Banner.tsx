import React from 'react';
import Link from 'next/link';

const NewContentShowcase2025Banner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🎉 NEW CONTENT LAUNCH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary New Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              & Interactive Tools
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of case studies, interactive assessments, 
            expert insights, and cutting-edge AI tools designed to transform your business.
          </p>
        </div>

        {/* Content Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-3">Case Studies</h3>
            <p className="text-sm opacity-90 mb-4">
              Real success stories from Fortune 500 companies achieving 1000%+ ROI
            </p>
            <div className="text-2xl font-bold text-yellow-300">6+ Studies</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">AI Assessment</h3>
            <p className="text-sm opacity-90 mb-4">
              Interactive tool to discover your AI potential and get personalized recommendations
            </p>
            <div className="text-2xl font-bold text-green-300">Free Tool</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">Expert Insights</h3>
            <p className="text-sm opacity-90 mb-4">
              Comprehensive blog with AI trends, strategies, and industry expertise
            </p>
            <div className="text-2xl font-bold text-blue-300">50+ Articles</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Interactive Demos</h3>
            <p className="text-sm opacity-90 mb-4">
              Hands-on demonstrations of AI technologies and business applications
            </p>
            <div className="text-2xl font-bold text-purple-300">Live Demos</div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">'What', 's New & Exciting</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">1000%+</div>
              <div className="text-sm opacity-90">Average ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">50+</div>
              <div className="text-sm opacity-90">Expert Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">10K+</div>
              <div className="text-sm opacity-90">Professionals Engaged</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/case-studies"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Explore Case Studies
            </Link>
            <Link
              href="/ai-assessment"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Take AI Assessment
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Read Expert Insights
            </Link>
          </div>
          
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who are already transforming their businesses 
            with our proven AI solutions and expert guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025Banner;