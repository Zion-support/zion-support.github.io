import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate AI Content Collection
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of cutting-edge AI content, case studies, and implementation guides that are transforming businesses worldwide.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Enterprise Automation Revolution */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-4">Enterprise Automation Revolution</h3>
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              Discover how AI automation is transforming enterprise operations in 2025, with real-world case studies and implementation strategies.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2025-enterprise-automation-revolution"
                className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-sm"
              >
                Read More
              </Link>
              <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">NEW</span>
            </div>
          </div>

          {/* Fortune 500 Success Story */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-4">Fortune 500 Success Story</h3>
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              How a Fortune 500 company achieved 340% ROI and $50M+ in annual savings through comprehensive AI transformation.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/case-studies/fortune-500-ai-transformation-2025-ultimate-success"
                className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-sm"
              >
                Read More
              </Link>
              <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">NEW</span>
            </div>
          </div>

          {/* AI Implementation Master Guide */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-4">AI Implementation Master Guide</h3>
            <p className="text-gray-200 mb-6 text-sm leading-relaxed">
              The complete guide to implementing AI in your enterprise, with step-by-step strategies and real-world examples.
            </p>
            <div className="flex items-center justify-between">
              <Link 
                href="/resources/ai-implementation-master-guide-2025-comprehensive"
                className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-sm"
              >
                Read More
              </Link>
              <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">NEW</span>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-sm opacity-80">AI Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">340%</div>
            <div className="text-sm opacity-80">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">$50M+</div>
            <div className="text-sm opacity-80">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
            <div className="text-sm opacity-80">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-yellow-500 to-pink-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
          <p className="text-sm opacity-80 mt-4">
            Join 500+ companies already transforming with AI
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
};

export default NewContent2025UltimateBanner;