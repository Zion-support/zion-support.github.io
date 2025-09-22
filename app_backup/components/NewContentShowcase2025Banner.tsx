import React from 'react';
import Link from 'next/link';

const NewContentShowcase2025Banner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-400 to-purple-400 text-purple-900 px-6 py-2 rounded-full text-sm font-bold mb-6">
            ✨ EXCLUSIVE 2025 CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-200 to-purple-200 bg-clip-text text-transparent">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Access our exclusive collection of cutting-edge AI automation content. 
            From comprehensive guides to real-world success stories, discover the strategies transforming businesses in 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 text-pink-300">Ultimate Business Guide</h3>
              <p className="text-gray-200 text-sm mb-4">
                Complete enterprise guide to AI automation revolution with step-by-step implementation strategies.
              </p>
              <div className="flex items-center justify-center text-pink-200 text-sm mb-4">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span>Comprehensive</span>
              </div>
            </div>
            <Link 
              href="/blog/ai-2025-ultimate-business-automation-revolution-complete-guide"
              className="block w-full bg-gradient-to-r from-pink-400 to-purple-400 text-purple-900 py-3 rounded-lg font-semibold text-center hover:from-pink-300 hover:to-purple-300 transition-all duration-300"
            >
              Read Guide
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-pink-300">Quantum AI Revolution</h3>
              <p className="text-gray-200 text-sm mb-4">
                Revolutionary guide to quantum-enhanced AI transforming business operations and competitive advantages.
              </p>
              <div className="flex items-center justify-center text-pink-200 text-sm mb-4">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                <span>18 min read</span>
                <span className="mx-2">•</span>
                <span>Future-focused</span>
              </div>
            </div>
            <Link 
              href="/blog/quantum-ai-2026-business-transformation-revolutionary-guide"
              className="block w-full bg-gradient-to-r from-pink-400 to-purple-400 text-purple-900 py-3 rounded-lg font-semibold text-center hover:from-pink-300 hover:to-purple-300 transition-all duration-300"
            >
              Explore Quantum AI
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-3 text-pink-300">340% ROI Success Story</h3>
              <p className="text-gray-200 text-sm mb-4">
                Real Fortune 500 case study showing how strategic AI automation generated massive returns.
              </p>
              <div className="flex items-center justify-center text-pink-200 text-sm mb-4">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                <span>12 min read</span>
                <span className="mx-2">•</span>
                <span>Case Study</span>
              </div>
            </div>
            <Link 
              href="/case-studies/enterprise-ai-automation-success-story-2025"
              className="block w-full bg-gradient-to-r from-pink-400 to-purple-400 text-purple-900 py-3 rounded-lg font-semibold text-center hover:from-pink-300 hover:to-purple-300 transition-all duration-300"
            >
              View Success Story
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-purple-900 rounded-2xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">📋 Complete Implementation Checklist</h3>
            <p className="text-lg mb-6">
              Download our comprehensive checklist covering all phases of AI automation implementation. 
              Ensure success with our proven step-by-step methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources/ai-automation-implementation-checklist-2025"
                className="bg-purple-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
              >
                Get Implementation Checklist
              </Link>
              <Link 
                href="/services"
                className="border-2 border-purple-900 text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-900 hover:text-white transition-colors"
              >
                Get Expert Help
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-pink-300 mb-1">340%</div>
            <div className="text-sm text-gray-200">Average ROI</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-pink-300 mb-1">67%</div>
            <div className="text-sm text-gray-200">Cost Reduction</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-pink-300 mb-1">89%</div>
            <div className="text-sm text-gray-200">Efficiency Gain</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-pink-300 mb-1">95%</div>
            <div className="text-sm text-gray-200">Satisfaction</div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4 text-pink-300">🎯 Why Choose Our Content?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start">
                <div className="text-2xl mr-3">✅</div>
                <div>
                  <h4 className="font-semibold text-pink-300 mb-2">Proven Results</h4>
                  <p className="text-gray-200 text-sm">Real-world case studies with measurable business impact</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">🚀</div>
                <div>
                  <h4 className="font-semibold text-pink-300 mb-2">Cutting-Edge</h4>
                  <p className="text-gray-200 text-sm">Latest AI technologies and implementation strategies</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-2xl mr-3">📈</div>
                <div>
                  <h4 className="font-semibold text-pink-300 mb-2">Actionable</h4>
                  <p className="text-gray-200 text-sm">Step-by-step guides you can implement immediately</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025Banner;