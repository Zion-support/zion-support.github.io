import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateShowcaseBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ ULTIMATE SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Now Available
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Experience the future of AI technology with our comprehensive collection of cutting-edge content and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">AI Innovation</h3>
            <p className="text-gray-200 mb-6">
              Discover the latest breakthroughs in artificial intelligence and machine learning technologies.
            </p>
            <Link 
              href="/blog/ai-innovation-2025"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Explore Innovation →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
            <p className="text-gray-200 mb-6">
              Transform your business with our comprehensive enterprise AI solutions and consulting services.
            </p>
            <Link 
              href="/services"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300"
            >
              View Solutions →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Analytics & Insights</h3>
            <p className="text-gray-200 mb-6">
              Leverage advanced analytics and business intelligence to drive data-driven decisions.
            </p>
            <Link 
              href="/analytics"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Learn More →
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcaseBanner;