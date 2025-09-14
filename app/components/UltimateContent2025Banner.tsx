import React from 'react';
import Link from 'next/link';

const UltimateContent2025Banner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6">
            🚀 NEW 2025 CONTENT REVOLUTION
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Ultimate AI Automation Guide 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the complete roadmap to achieving 340% ROI through comprehensive AI automation. 
            Revolutionary strategies, real-world case studies, and proven implementation frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">Complete Business Guide</h3>
            <p className="text-gray-200 mb-6">
              Comprehensive 15-minute read covering everything from assessment to implementation. 
              Step-by-step strategies for enterprise automation success.
            </p>
            <Link 
              href="/blog/ai-2025-ultimate-business-automation-revolution-complete-guide"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
            >
              Read Complete Guide →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">340% ROI Success Story</h3>
            <p className="text-gray-200 mb-6">
              Real Fortune 500 case study showing how $16.2M investment generated $111.1M in annual benefits. 
              Detailed metrics, challenges, and lessons learned.
            </p>
            <Link 
              href="/case-studies/enterprise-ai-automation-success-story-2025"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
            >
              View Success Story →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">Quantum AI Revolution</h3>
            <p className="text-gray-200 mb-6">
              Revolutionary guide to Quantum AI in 2026. Explore how quantum computing is transforming 
              business operations and creating unprecedented competitive advantages.
            </p>
            <Link 
              href="/blog/quantum-ai-2026-business-transformation-revolutionary-guide"
              className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300"
            >
              Explore Quantum AI →
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎯 Complete Implementation Checklist</h3>
          <p className="text-lg mb-6">
            Download our comprehensive 8-minute checklist covering all phases of AI automation implementation. 
            Ensure you don't miss critical steps and maximize your success probability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/resources/ai-automation-implementation-checklist-2025"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Get Implementation Checklist
            </Link>
            <Link 
              href="/services"
              className="border-2 border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors"
            >
              Get Expert Help
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-300">340%</div>
              <div className="text-sm text-gray-200">Average ROI</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-300">67%</div>
              <div className="text-sm text-gray-200">Cost Reduction</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-300">89%</div>
              <div className="text-sm text-gray-200">Efficiency Gain</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold text-yellow-300">95%</div>
              <div className="text-sm text-gray-200">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContent2025Banner;