import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-8 h-8 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest comprehensive guides, case studies, and resources that are transforming businesses worldwide in 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Featured Blog Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-4">Enterprise Automation Revolution</h3>
            <p className="text-gray-200 mb-6">
              Complete guide to AI-powered automation transforming enterprise operations in 2025
            </p>
            <Link 
              href="/blog/ai-2025-enterprise-automation-revolution-ultimate-guide"
              className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
            >
              Read Guide →
            </Link>
          </div>

          {/* Featured Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🏭</div>
            <h3 className="text-xl font-bold mb-4">Manufacturing Success Story</h3>
            <p className="text-gray-200 mb-6">
              How a global manufacturer achieved 85% efficiency gains through AI automation
            </p>
            <Link 
              href="/case-studies/ai-automation-manufacturing-success-story"
              className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          {/* Featured Resource */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-xl font-bold mb-4">Implementation Roadmap</h3>
            <p className="text-gray-200 mb-6">
              Complete step-by-step guide to successful AI implementation in 2025
            </p>
            <Link 
              href="/resources/ai-2025-implementation-roadmap-complete-guide"
              className="inline-flex items-center text-yellow-300 font-semibold hover:text-yellow-200 transition-colors"
            >
              Get Roadmap →
            </Link>
          </div>
        </div>

        {/* Quantum AI Section */}
        <div className="bg-gradient-to-r from-purple-800 to-blue-800 rounded-2xl p-8 mb-8 border border-white border-opacity-20">
          <div className="text-center">
            <div className="text-5xl mb-4">⚛️</div>
            <h3 className="text-3xl font-bold mb-4">Quantum AI 2025</h3>
            <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Explore the revolutionary convergence of quantum computing and AI that's reshaping business transformation
            </p>
            <Link 
              href="/blog/quantum-ai-2025-business-transformation-complete-guide"
              className="inline-flex items-center bg-yellow-500 text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Discover Quantum AI →
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">15+</div>
            <div className="text-gray-300">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">340%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-gray-300">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Get Custom Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;