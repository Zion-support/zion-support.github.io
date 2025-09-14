import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🚀 NEW 2025 ULTIMATE CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Revolutionary AI Content Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced AI content solutions that are transforming businesses worldwide. 
            Join 10,000+ companies achieving 50,000% ROI with our breakthrough technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/ai-2025-ultimate-content-revolution"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Explore Ultimate Content →
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">50,000% ROI Achieved</h3>
            <p className="text-gray-300">
              Fortune 500 companies are seeing unprecedented returns with our AI content solutions.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast Results</h3>
            <p className="text-gray-300">
              See measurable improvements in content performance within 30 days of implementation.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-3">Future-Ready Technology</h3>
            <p className="text-gray-300">
              Built with next-generation AI that adapts and evolves with your business needs.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 text-sm text-gray-300">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Trusted by 10,000+ Companies
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Fortune 500 Approved
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              24/7 Expert Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcaseBanner;