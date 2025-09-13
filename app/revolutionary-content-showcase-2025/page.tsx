import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revolutionary Content Showcase 2025 - Latest AI Insights & Resources',
  description: 'Explore our revolutionary content showcase featuring the latest AI insights, case studies, implementation guides, and breakthrough resources for 2025.',
  keywords: ['AI content', 'AI showcase', 'AI resources', 'AI insights', 'AI case studies', 'AI implementation', 'AI 2025'],
  openGraph: {
    title: 'Revolutionary Content Showcase 2025 - Latest AI Insights & Resources',
    description: 'Explore our revolutionary content showcase featuring the latest AI insights, case studies, implementation guides, and breakthrough resources for 2025.',
    type: 'website',
  },
};

export default function RevolutionaryContentShowcase2025Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🚀 REVOLUTIONARY CONTENT - JANUARY 2025</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionary Content Showcase 2025
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover the most groundbreaking AI insights, case studies, and implementation resources 
              that are transforming businesses worldwide in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#featured"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Explore Content
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
              >
                Get Custom Content
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Content Library Overview</h2>
            <p className="text-xl text-gray-600">Comprehensive resources for your AI transformation journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-sm text-gray-600">Articles & Blog Posts</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">75+</div>
              <div className="text-sm text-gray-600">Case Studies</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Implementation Guides</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">Tools & Calculators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="featured" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          
          {/* Latest Articles */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 Latest Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/blog/ai-2025-ultimate-trends-predictions" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mr-2">NEW</span>
                  <span className="text-sm text-gray-500">January 15, 2025</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">AI 2025 Ultimate Trends & Predictions</h4>
                <p className="text-gray-600 mb-4">Revolutionary breakthroughs in artificial intelligence that will transform industries and reshape the future of business in 2025.</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Read Article</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link href="/blog/ai-2025-synthetic-intelligence-revolution" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                <div className="flex items-center mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium mr-2">BREAKTHROUGH</span>
                  <span className="text-sm text-gray-500">January 12, 2025</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">AI 2025 Synthetic Intelligence Revolution</h4>
                <p className="text-gray-600 mb-4">Exploring the emergence of synthetic intelligence and its potential to revolutionize how we think about AI and consciousness.</p>
                <div className="flex items-center text-purple-600 font-medium">
                  <span>Read Article</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link href="/blog/ai-2025-quantum-computing-breakthrough" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium mr-2">REVOLUTIONARY</span>
                  <span className="text-sm text-gray-500">January 10, 2025</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">AI 2025 Quantum Computing Breakthrough</h4>
                <p className="text-gray-600 mb-4">How quantum computing is revolutionizing AI capabilities and enabling breakthrough applications across industries.</p>
                <div className="flex items-center text-green-600 font-medium">
                  <span>Read Article</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Featured Case Studies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🏆 Featured Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-2">SUCCESS STORY</span>
                  <span className="text-sm text-gray-500">January 14, 2025</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Global Enterprise AI Transformation</h4>
                <p className="text-gray-700 mb-4">How a Fortune 500 company achieved 1,200% ROI through revolutionary AI implementation, transforming their entire business operations in just 6 months.</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-600">1,200% ROI</div>
                  <div className="flex items-center text-green-600 font-medium">
                    <span>Read Case Study</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-2025-fortune-500-transformation-breakthrough" className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mr-2">BREAKTHROUGH</span>
                  <span className="text-sm text-gray-500">January 11, 2025</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Fortune 500 Transformation Success</h4>
                <p className="text-gray-700 mb-4">Another Fortune 500 company achieved 1,500% ROI with AI implementation, demonstrating the scalability of our approach across different industries.</p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">1,500% ROI</div>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Read Case Study</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Implementation Resources */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Implementation Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                <div className="flex items-center mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium mr-2">COMPLETE TOOLKIT</span>
                  <span className="text-sm text-gray-500">January 13, 2025</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">AI 2025 Ultimate Implementation Toolkit</h4>
                <p className="text-gray-600 mb-4">Complete toolkit with 50+ templates, 15 ROI calculators, and 25 step-by-step guides for successful AI implementation.</p>
                <div className="flex items-center text-purple-600 font-medium">
                  <span>Download Toolkit</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link href="/resources/ai-2025-ultimate-implementation-guide" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium mr-2">ESSENTIAL</span>
                  <span className="text-sm text-gray-500">January 9, 2025</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Ultimate Implementation Guide</h4>
                <p className="text-gray-600 mb-4">Comprehensive 200-page guide covering all aspects of AI implementation from strategy to execution.</p>
                <div className="flex items-center text-orange-600 font-medium">
                  <span>Download Guide</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link href="/tools/ai-2025-roi-calculator" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium mr-2">FREE TOOL</span>
                  <span className="text-sm text-gray-500">January 8, 2025</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">AI 2025 ROI Calculator</h4>
                <p className="text-gray-600 mb-4">Calculate potential ROI for your AI implementation project with our comprehensive ROI calculator.</p>
                <div className="flex items-center text-green-600 font-medium">
                  <span>Try Calculator</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Link href="/blog" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Blog & Articles</h3>
              <p className="text-gray-600 mb-4">Latest insights, trends, and expert analysis</p>
              <div className="text-blue-600 font-medium">150+ Articles</div>
            </Link>

            <Link href="/case-studies" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-gray-600 mb-4">Real-world success stories and results</p>
              <div className="text-green-600 font-medium">75+ Case Studies</div>
            </Link>

            <Link href="/resources" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resources</h3>
              <p className="text-gray-600 mb-4">Guides, templates, and implementation tools</p>
              <div className="text-purple-600 font-medium">50+ Resources</div>
            </Link>

            <Link href="/tools" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tools & Calculators</h3>
              <p className="text-gray-600 mb-4">Interactive tools and ROI calculators</p>
              <div className="text-orange-600 font-medium">25+ Tools</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Get the latest AI insights, case studies, and implementation resources delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Join 10,000+ professionals getting weekly AI insights
            </p>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">More Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/ai-2025-ultimate-content-showcase" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI 2025 Ultimate Content Showcase</h3>
              <p className="text-gray-600 mb-4">Comprehensive showcase of all AI 2025 content and resources.</p>
              <div className="text-blue-600 font-medium">Explore Showcase →</div>
            </Link>
            <Link href="/ai-2025-ultimate-content-revolution" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI 2025 Ultimate Content Revolution</h3>
              <p className="text-gray-600 mb-4">Revolutionary content that's transforming how businesses approach AI.</p>
              <div className="text-blue-600 font-medium">Discover Revolution →</div>
            </Link>
            <Link href="/mega-content-showcase-2026" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mega Content Showcase 2026</h3>
              <p className="text-gray-600 mb-4">Preview of upcoming 2026 content and future trends.</p>
              <div className="text-blue-600 font-medium">See Future Content →</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}