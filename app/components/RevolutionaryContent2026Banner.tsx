import React from 'react';
import Link from 'next/link';

const RevolutionaryContent2026Banner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-purple-400/30 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            The Future of Business is Here
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover groundbreaking insights into AI transformation, quantum computing, and enterprise automation that are reshaping industries in 2026.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* AI Enterprise Transformation */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3">AI Enterprise Transformation</h3>
            <p className="text-gray-200 mb-4 text-sm">
              Learn how Fortune 500 companies are achieving 340% ROI with AI automation and autonomous business systems.
            </p>
            <Link 
              href="/blog/ai-2026-enterprise-transformation-revolution"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 font-semibold text-sm"
            >
              Read More →
            </Link>
          </div>

          {/* Quantum Computing Applications */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">Quantum Computing Breakthrough</h3>
            <p className="text-gray-200 mb-4 text-sm">
              Explore real-world quantum computing applications that are revolutionizing business operations in 2026.
            </p>
            <Link 
              href="/blog/quantum-computing-business-applications-2026"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 font-semibold text-sm"
            >
              Read More →
            </Link>
          </div>

          {/* Success Story Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">340% ROI Success Story</h3>
            <p className="text-gray-200 mb-4 text-sm">
              Discover how a Fortune 500 company achieved unprecedented results with AI automation and process optimization.
            </p>
            <Link 
              href="/case-studies/ai-automation-enterprise-success-story"
              className="inline-flex items-center text-blue-300 hover:text-blue-200 font-semibold text-sm"
            >
              Read More →
            </Link>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">340%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-sm text-gray-300">Process Automation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
            <div className="text-sm text-gray-300">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
            <div className="text-sm text-gray-300">Faster Processing</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
          
          <p className="text-gray-300 text-sm mt-6">
            Join thousands of companies already transforming their operations with cutting-edge AI and quantum technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2026Banner;