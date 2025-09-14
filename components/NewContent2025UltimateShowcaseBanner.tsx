import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 font-bold text-sm">
            🚀 NEW CONTENT 2025 - ULTIMATE SHOWCASE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive library of cutting-edge AI content, case studies, and implementation guides. 
            Transform your business with proven strategies and real-world success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Ultimate Guides</h3>
            <p className="text-gray-200 mb-6">
              Comprehensive implementation guides covering AI transformation, quantum computing, and business automation.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>AI Business Transformation</span>
                <span className="text-yellow-400 font-bold">NEW</span>
              </div>
              <div className="flex justify-between">
                <span>Quantum AI Revolution</span>
                <span className="text-yellow-400 font-bold">NEW</span>
              </div>
              <div className="flex justify-between">
                <span>Enterprise Automation</span>
                <span className="text-yellow-400 font-bold">NEW</span>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Success Stories</h3>
            <p className="text-gray-200 mb-6">
              Real-world case studies showcasing 500% ROI achievements and Fortune 500 transformations.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Fortune 500 Case Study</span>
                <span className="text-green-400 font-bold">500% ROI</span>
              </div>
              <div className="flex justify-between">
                <span>Manufacturing Success</span>
                <span className="text-green-400 font-bold">$50M Savings</span>
              </div>
              <div className="flex justify-between">
                <span>AI Implementation</span>
                <span className="text-green-400 font-bold">18 Months</span>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Implementation Tools</h3>
            <p className="text-gray-200 mb-6">
              Practical tools, calculators, and frameworks to accelerate your AI transformation journey.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>ROI Calculator</span>
                <span className="text-blue-400 font-bold">Interactive</span>
              </div>
              <div className="flex justify-between">
                <span>Readiness Assessment</span>
                <span className="text-blue-400 font-bold">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Implementation Framework</span>
                <span className="text-blue-400 font-bold">Download</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              View Success Stories
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get Custom Strategy
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-400">50+</div>
              <div className="text-sm text-gray-200">New Articles</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">500%</div>
              <div className="text-sm text-gray-200">Average ROI</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-400">25+</div>
              <div className="text-sm text-gray-200">Case Studies</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">1000+</div>
              <div className="text-sm text-gray-200">Downloads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcaseBanner;