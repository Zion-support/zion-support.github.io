import React from 'react';
import Link from 'next/link';

export default function NewContent2025RevolutionaryBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%253Csvg%20width%3D'60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 REVOLUTIONARY CONTENT DROP</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            🚀 Revolutionary AI Content Just Released!
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Discover our latest breakthrough content: Enterprise AI Revolution, Fortune 500 Success Stories, 
            and the Ultimate Business Transformation Guide. Everything you need to dominate AI in 2025.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2025-enterprise-ai-revolution"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🎯 Explore Enterprise Revolution
            </Link>
            <Link
              href="/case-studies/ai-2025-fortune-500-transformation-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              🏆 View Success Stories
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-business-transformation-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              📚 Get Ultimate Guide
            </Link>
          </div>
          
          {/* Featured Content Preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/blog/ai-2025-enterprise-ai-revolution" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-lg font-semibold mb-2">Enterprise AI Revolution</h3>
                <p className="text-sm opacity-90 mb-3">
                  Complete guide to transforming your enterprise with cutting-edge AI technologies
                </p>
                <div className="text-xs opacity-75">
                  📖 15 min read • 🆕 Just Released
                </div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-2025-fortune-500-transformation-success" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="text-lg font-semibold mb-2">Fortune 500 Success</h3>
                <p className="text-sm opacity-90 mb-3">
                  How a Fortune 500 company achieved 1500% ROI through strategic AI implementation
                </p>
                <div className="text-xs opacity-75">
                  📊 Case Study • 💰 1500% ROI
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-2025-ultimate-business-transformation-guide" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-lg font-semibold mb-2">Ultimate Guide</h3>
                <p className="text-sm opacity-90 mb-3">
                  Complete implementation blueprint with templates, frameworks, and ROI calculators
                </p>
                <div className="text-xs opacity-75">
                  📥 Free Download • 🛠️ 25+ Tools
                </div>
              </div>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm opacity-75">New Content Pieces</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm opacity-75">Pages of Content</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm opacity-75">Implementation Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1500%</div>
              <div className="text-sm opacity-75">Proven ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}