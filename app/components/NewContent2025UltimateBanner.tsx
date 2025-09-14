import React from 'react';
import Link from 'next/link';

const NewContent2025UltimateBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI 2025
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Autonomous Systems
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the ultimate guides, case studies, and implementation roadmaps for 
            next-generation autonomous enterprise systems achieving 600%+ ROI.
          </p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Blog Post */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-4">Next-Generation Autonomous Systems</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Complete guide to implementing autonomous AI systems that operate independently 
              and achieve unprecedented business results.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm bg-green-500 bg-opacity-20 px-3 py-1 rounded-full">
                15 min read
              </span>
              <span className="text-sm bg-blue-500 bg-opacity-20 px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
            <Link 
              href="/blog/ai-2025-next-generation-autonomous-systems-ultimate-guide"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
            >
              Read Guide →
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-4">600% ROI Success Story</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              How a Fortune 500 company achieved $2.8 billion in benefits through 
              comprehensive autonomous systems implementation.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm bg-green-500 bg-opacity-20 px-3 py-1 rounded-full">
                12 min read
              </span>
              <span className="text-sm bg-purple-500 bg-opacity-20 px-3 py-1 rounded-full">
                Case Study
              </span>
            </div>
            <Link 
              href="/case-studies/global-enterprise-ai-2025-autonomous-transformation-ultimate-success"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
            >
              View Case Study →
            </Link>
          </div>

          {/* Implementation Roadmap */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-xl font-bold mb-4">Implementation Roadmap</h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Step-by-step roadmap with frameworks, tools, and best practices for 
              successful autonomous enterprise transformation.
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm bg-green-500 bg-opacity-20 px-3 py-1 rounded-full">
                20 min read
              </span>
              <span className="text-sm bg-orange-500 bg-opacity-20 px-3 py-1 rounded-full">
                Resource
              </span>
            </div>
            <Link 
              href="/resources/ai-2025-autonomous-enterprise-implementation-ultimate-roadmap"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
            >
              Get Roadmap →
            </Link>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">600%</div>
            <div className="text-sm text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-sm text-gray-300">Process Automation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-300">System Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">$2.8B</div>
            <div className="text-sm text-gray-300">Benefits Generated</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services/ai-automation"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
            >
              Explore Services
            </Link>
          </div>
          
          <p className="text-sm text-gray-300 mt-6">
            Join 500+ enterprises already transforming with autonomous AI systems
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateBanner;