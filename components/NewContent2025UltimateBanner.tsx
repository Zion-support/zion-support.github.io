import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEW CONTENT 2025 - ULTIMATE BREAKTHROUGH
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Revolutionary AI Content
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover the latest breakthrough content on AI automation mastery, quantum AI revolution, and Fortune 500 transformations that are reshaping industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              AI 2025 Advanced Automation Mastery
            </h3>
            <p className="text-gray-300 mb-6">
              The ultimate enterprise guide to revolutionary AI automation strategies transforming businesses in 2025.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-purple-600 px-3 py-1 rounded-full text-xs">340% ROI</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-xs">500+ Projects</span>
              <span className="bg-green-600 px-3 py-1 rounded-full text-xs">98% Success</span>
            </div>
            <Link 
              href="/blog/ai-2025-advanced-automation-mastery-ultimate-guide"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Read Guide →
            </Link>
          </div>

          {/* Quantum AI Content */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Quantum AI 2026 Revolutionary Breakthrough
            </h3>
            <p className="text-gray-300 mb-6">
              Explore the revolutionary quantum AI breakthrough that's reshaping everything in 2026.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-cyan-600 px-3 py-1 rounded-full text-xs">1000x Faster</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-xs">99.9% Accuracy</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-xs">Revolutionary</span>
            </div>
            <Link 
              href="/blog/quantum-ai-2026-revolutionary-breakthrough-complete-guide"
              className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
            >
              Explore Breakthrough →
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Fortune 500 Quantum AI Transformation
            </h3>
            <p className="text-gray-300 mb-6">
              Ultimate success story of Fortune 500 company achieving 500% ROI through quantum AI transformation.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-green-600 px-3 py-1 rounded-full text-xs">500% ROI</span>
              <span className="bg-yellow-600 px-3 py-1 rounded-full text-xs">$2.3B Growth</span>
              <span className="bg-red-600 px-3 py-1 rounded-full text-xs">Industry Leader</span>
            </div>
            <Link 
              href="/case-studies/quantum-ai-fortune-500-transformation-2026-ultimate-success"
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-yellow-700 transition-all duration-300"
            >
              Read Case Study →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-3xl font-bold mb-4 text-yellow-400">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution and achieve breakthrough results like our Fortune 500 clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$2.3B</div>
            <div className="text-gray-300">Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;