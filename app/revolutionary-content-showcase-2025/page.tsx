import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revolutionary Content Showcase 2025 - Latest AI Breakthroughs & Resources',
  description: 'Discover our latest revolutionary AI content, case studies, and resources. From 5,000% ROI automation to enterprise transformation success stories.',
  keywords: ['AI content', 'revolutionary AI', 'AI showcase', 'AI 2025', 'content library', 'AI resources'],
  openGraph: {
    title: 'Revolutionary Content Showcase 2025 - Latest AI Breakthroughs & Resources',
    description: 'Discover our latest revolutionary AI content, case studies, and resources.',
    type: 'website',
  },
};

export default function RevolutionaryContentShowcase2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionary Content Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              Explore our latest <span className="font-bold text-yellow-300">revolutionary AI content</span>, breakthrough case studies, 
              and essential resources. From 5,000% ROI automation to enterprise transformation success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#featured-content"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                🔥 View Featured Content
              </Link>
              <Link
                href="#all-content"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                📚 Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section id="featured-content" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🔥 Featured Revolutionary Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most impactful and breakthrough content delivering unprecedented results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI 2025 Ultimate Automation Revolution */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">AI 2025 Ultimate Automation Revolution</h3>
              <p className="text-gray-600 mb-4">
                Revolutionary AI automation solutions delivering 5,000% ROI. Complete implementation guide with proven strategies.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
                </div>
                <Link
                  href="/blog/ai-2025-ultimate-automation-revolution"
                  className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
            
            {/* Global Enterprise Transformation */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3">Global Enterprise Transformation</h3>
              <p className="text-gray-600 mb-4">
                Fortune 500 company achieved 1,200% ROI through comprehensive AI transformation across 47 countries.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">CASE STUDY</span>
                </div>
                <Link
                  href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
                  className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
            
            {/* Ultimate Implementation Toolkit */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-3">Ultimate Implementation Toolkit</h3>
              <p className="text-gray-600 mb-4">
                Complete toolkit with 47 essential resources, templates, and tools for successful AI transformation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">TOOLKIT</span>
                </div>
                <Link
                  href="/resources/ai-2025-ultimate-implementation-toolkit"
                  className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📚 Content Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our content organized by type and focus area.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-3">Blog Posts</h3>
              <p className="text-gray-600 mb-4">
                In-depth articles covering AI trends, strategies, and implementation insights.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• AI 2025 Ultimate Automation Revolution</div>
                <div>• Revolutionary Trends & Predictions</div>
                <div>• Advanced Automation Mastery</div>
                <div>• Generative AI Revolution</div>
              </div>
              <Link
                href="/blog"
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                View All Posts →
              </Link>
            </div>
            
            {/* Case Studies */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
              <p className="text-gray-600 mb-4">
                Real-world success stories with detailed implementation results and ROI data.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• Global Enterprise Transformation</div>
                <div>• Financial Services Success</div>
                <div>• Manufacturing Breakthrough</div>
                <div>• Retail Revolution</div>
              </div>
              <Link
                href="/case-studies"
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                View All Cases →
              </Link>
            </div>
            
            {/* Resources */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3">Resources</h3>
              <p className="text-gray-600 mb-4">
                Practical tools, templates, and guides for AI implementation and success.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• Ultimate Implementation Toolkit</div>
                <div>• ROI Calculators</div>
                <div>• Implementation Guides</div>
                <div>• Assessment Tools</div>
              </div>
              <Link
                href="/resources"
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                View All Resources →
              </Link>
            </div>
            
            {/* Webinars */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold mb-3">Webinars</h3>
              <p className="text-gray-600 mb-4">
                Live and recorded sessions with AI experts and industry leaders.
              </p>
              <div className="text-sm text-gray-500 mb-4">
                <div>• Revolutionary Breakthroughs</div>
                <div>• Implementation Masterclass</div>
                <div>• Industry Insights</div>
                <div>• Q&A Sessions</div>
              </div>
              <Link
                href="/webinars"
                className="text-indigo-600 hover:text-indigo-800 font-semibold"
              >
                View All Webinars →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section id="all-content" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🆕 Latest Content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh content added this week with breakthrough insights and proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl">
              <div className="text-3xl mb-4">🔥</div>
              <h3 className="text-lg font-semibold mb-3">AI 2025 Breakthrough Revolution</h3>
              <p className="text-gray-600 mb-4">
                Latest breakthrough in AI technology delivering unprecedented results.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-3">Quantum Computing Solutions</h3>
              <p className="text-gray-600 mb-4">
                Revolutionary quantum computing applications for enterprise transformation.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
                <span className="text-sm text-gray-500">5 days ago</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-lg font-semibold mb-3">Manufacturing AI Success</h3>
              <p className="text-gray-600 mb-4">
                How a Fortune 500 manufacturer achieved 3,200% ROI with AI automation.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">CASE STUDY</span>
                <span className="text-sm text-gray-500">1 week ago</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold mb-3">Neural Interface Revolution</h3>
              <p className="text-gray-600 mb-4">
                Breakthrough in neural interface technology for enhanced human-AI interaction.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">REVOLUTIONARY</span>
                <span className="text-sm text-gray-500">1 week ago</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-semibold mb-3">Financial Services AI</h3>
              <p className="text-gray-600 mb-4">
                Major bank's AI transformation journey with 4,800% ROI achievement.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">SUCCESS</span>
                <span className="text-sm text-gray-500">2 weeks ago</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-lg font-semibold mb-3">E-commerce AI Breakthrough</h3>
              <p className="text-gray-600 mb-4">
                Global e-commerce platform achieves 5,200% ROI through intelligent automation.
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs font-semibold">BREAKTHROUGH</span>
                <span className="text-sm text-gray-500">2 weeks ago</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Revolutionary Content
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get the latest AI breakthroughs, case studies, and resources delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Join 50,000+ professionals getting revolutionary AI insights weekly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}