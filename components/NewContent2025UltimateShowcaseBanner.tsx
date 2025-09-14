import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              & Success Stories
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how Fortune 500 companies achieved <span className="font-bold text-yellow-400">340% ROI</span> with AI transformation. 
            Get your complete roadmap to success with our latest content and proven strategies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">NEW</span>
              <span className="text-sm opacity-80">Blog Post</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Transformation 2025 Roadmap</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Your complete guide to successful AI implementation. From planning to scaling, we cover every step.
            </p>
            <Link 
              href="/blog/ai-transformation-2025-roadmap"
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Read Full Guide →
            </Link>
          </div>

          {/* Success Story */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">CASE STUDY</span>
              <span className="text-sm opacity-80">Success Story</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Fortune 500: 340% ROI Achievement</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              How a manufacturing giant reduced costs by 45% and increased efficiency by 340% with AI.
            </p>
            <Link 
              href="/case-studies/fortune-500-ai-success-story"
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          {/* Tools & Resources */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="flex items-center mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">TOOLS</span>
              <span className="text-sm opacity-80">Free Resources</span>
            </div>
            <h3 className="text-xl font-bold mb-3">AI Readiness Assessment</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Evaluate your organization's AI readiness and get personalized recommendations.
            </p>
            <Link 
              href="/tools/ai-readiness-assessment"
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Start Assessment →
            </Link>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">340%</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">500+</div>
            <div className="text-sm opacity-80">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">98%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm opacity-80">Expert Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Your AI Transformation Plan
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm">Trusted by Fortune 500 Companies</div>
            <div className="text-sm">•</div>
            <div className="text-sm">Certified AI Experts</div>
            <div className="text-sm">•</div>
            <div className="text-sm">Proven Results</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
    </div>
  );
};

export default NewContent2025UltimateShowcaseBanner;