import React from 'react';
import Link from 'next/link';

const AI2025UltimateBusinessAutomationRevolutionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 transform rotate-12 scale-150"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-400 to-purple-400 transform -rotate-12 scale-150"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW ULTIMATE BREAKTHROUGH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            AI 2025: Ultimate Business Automation Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI automation strategies transforming businesses in 2025. 
            Achieve unprecedented 2,500% ROI through cutting-edge automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-ultimate-business-automation-revolution-complete-guide"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read Complete Guide →
            </Link>
            <Link
              href="/case-studies/fortune-500-ai-automation-transformation-2500-roi-success-story"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              View Success Story
            </Link>
          </div>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-2">2,500% ROI</h3>
            <p className="opacity-90">Average ROI achieved by Fortune 500 companies</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">340% Efficiency</h3>
            <p className="opacity-90">Increase in workforce productivity</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">18 Months</h3>
            <p className="opacity-90">Complete transformation timeline</p>
          </div>
        </div>

        {/* Featured Content Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/blog/ai-2025-ultimate-business-automation-revolution-complete-guide"
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl mb-3">📚</div>
            <h4 className="text-lg font-bold mb-2">Complete Implementation Guide</h4>
            <p className="text-sm opacity-90">Step-by-step framework for achieving 2,500% ROI</p>
          </Link>
          
          <Link
            href="/case-studies/fortune-500-ai-automation-transformation-2500-roi-success-story"
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl mb-3">🏆</div>
            <h4 className="text-lg font-bold mb-2">Fortune 500 Success Story</h4>
            <p className="text-sm opacity-90">Real-world case study with proven results</p>
          </Link>
          
          <Link
            href="/resources/ai-2025-implementation-ultimate-master-guide-2500-roi"
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl mb-3">🛠️</div>
            <h4 className="text-lg font-bold mb-2">Master Implementation Guide</h4>
            <p className="text-sm opacity-90">Complete toolkit and resources for success</p>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg mb-6 opacity-90">
            Ready to transform your business with AI automation?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Your Free Consultation
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateBusinessAutomationRevolutionBanner;