import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Content Showcase - Latest AI Insights, Case Studies & Resources',
  description: 'Explore our comprehensive collection of AI content including blog posts, case studies, resources, and tools. Stay updated with the latest AI trends and insights.',
  keywords: ['AI content', 'AI blog', 'AI case studies', 'AI resources', 'AI insights', 'AI trends'],
};

export default function ContentShowcasePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">📚 CONTENT LIBRARY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Content Showcase
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive collection of AI content including blog posts, 
              case studies, resources, and tools. Stay updated with the latest insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#featured"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Featured Content
              </Link>
              <Link
                href="#all-content"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Browse All Content
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">150+</div>
              <div className="text-gray-600">Blog Articles</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">75+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Resources</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Tools & Calculators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="featured" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          
          {/* Featured Blog Posts */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">🔥 Hot This Week</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/blog/ai-2025-trends-predictions" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🔮</span>
                    <div>
                      <div className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        NEW
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-purple-600">AI 2025 Trends & Predictions</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Discover the most important AI trends and predictions for 2025. From quantum computing breakthroughs to neural interfaces.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>15 min read</span>
                    <span className="mx-2">•</span>
                    <span>Published 2 days ago</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-2025-implementation-guide" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">📚</span>
                    <div>
                      <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        ESSENTIAL
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-blue-600">AI Implementation Guide 2025</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Complete roadmap for AI implementation with step-by-step instructions, tools, and best practices.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span>Published 1 week ago</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-2025-neural-interfaces" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🧠</span>
                    <div>
                      <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        BREAKTHROUGH
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-green-600">Neural Interface Revolution</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">How brain-computer interfaces are revolutionizing human-AI interaction and what it means for businesses.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>12 min read</span>
                    <span className="mx-2">•</span>
                    <span>Published 3 days ago</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Featured Case Studies */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">🏆 Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/case-studies/ai-enterprise-transformation-2025" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🏢</span>
                    <div>
                      <div className="inline-flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        340% ROI
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-orange-600">Enterprise AI Transformation</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">How a Fortune 500 company achieved 340% ROI through comprehensive AI transformation.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>18 min read</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-financial-services-transformation" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🏦</span>
                    <div>
                      <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        $2.4B Savings
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-green-600">Financial Services AI</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">$2.4B cost savings through AI implementation in financial services sector.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>15 min read</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-manufacturing-optimization" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🏭</span>
                    <div>
                      <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        40% Efficiency
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-blue-600">Manufacturing Optimization</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">40% efficiency improvement with AI-powered manufacturing optimization.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>12 min read</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Featured Resources */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">📋 Essential Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/resources/ai-2025-implementation-guide" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">📚</span>
                    <div>
                      <div className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        FREE DOWNLOAD
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-purple-600">AI Implementation Guide</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Complete 150-page guide with roadmap, tools, and templates for AI implementation.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>150 pages</span>
                    <span className="mx-2">•</span>
                    <span>PDF Download</span>
                  </div>
                </div>
              </Link>

              <Link href="/tools/ai-roi-calculator" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🧮</span>
                    <div>
                      <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        INTERACTIVE
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-green-600">AI ROI Calculator</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Calculate your potential ROI from AI implementation with our interactive calculator.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Tool</span>
                    <span className="mx-2">•</span>
                    <span>Interactive</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-tools-2025" className="group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">🛠️</span>
                    <div>
                      <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                        CURATED LIST
                      </div>
                      <h4 className="text-lg font-semibold group-hover:text-blue-600">AI Tools 2025</h4>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">Curated list of 50+ essential AI tools and platforms with detailed comparisons.</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>50+ Tools</span>
                    <span className="mx-2">•</span>
                    <span>Updated Weekly</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* All Content Categories */}
      <section id="all-content" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse All Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Blog Posts */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blog Posts</h3>
                <p className="text-gray-600">Latest AI insights, trends, and analysis</p>
              </div>
              <div className="space-y-3">
                <Link href="/blog/ai-2025-trends-predictions" className="block text-sm text-blue-600 hover:text-blue-800">
                  • AI 2025 Trends & Predictions
                </Link>
                <Link href="/blog/ai-2025-implementation-guide" className="block text-sm text-blue-600 hover:text-blue-800">
                  • AI Implementation Guide 2025
                </Link>
                <Link href="/blog/ai-2025-neural-interfaces" className="block text-sm text-blue-600 hover:text-blue-800">
                  • Neural Interface Revolution
                </Link>
                <Link href="/blog/ai-2025-quantum-computing" className="block text-sm text-blue-600 hover:text-blue-800">
                  • Quantum Computing Breakthroughs
                </Link>
                <Link href="/blog" className="block text-sm font-semibold text-purple-600 hover:text-purple-800 mt-4">
                  View All Blog Posts →
                </Link>
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Case Studies</h3>
                <p className="text-gray-600">Real-world AI success stories</p>
              </div>
              <div className="space-y-3">
                <Link href="/case-studies/ai-enterprise-transformation-2025" className="block text-sm text-blue-600 hover:text-blue-800">
                  • Enterprise AI Transformation
                </Link>
                <Link href="/case-studies/ai-financial-services-transformation" className="block text-sm text-blue-600 hover:text-blue-800">
                  • Financial Services AI
                </Link>
                <Link href="/case-studies/ai-manufacturing-optimization" className="block text-sm text-blue-600 hover:text-blue-800">
                  • Manufacturing Optimization
                </Link>
                <Link href="/case-studies/ai-retail-transformation" className="block text-sm text-blue-600 hover:text-blue-800">
                  • Retail AI Transformation
                </Link>
                <Link href="/case-studies" className="block text-sm font-semibold text-purple-600 hover:text-purple-800 mt-4">
                  View All Case Studies →
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Resources</h3>
                <p className="text-gray-600">Guides, templates, and tools</p>
              </div>
              <div className="space-y-3">
                <Link href="/resources/ai-2025-implementation-guide" className="block text-sm text-blue-600 hover:text-blue-800">
                  • AI Implementation Guide
                </Link>
                <Link href="/resources/ai-tools-2025" className="block text-sm text-blue-600 hover:text-blue-800">
                  • AI Tools 2025
                </Link>
                <Link href="/resources/ai-best-practices" className="block text-sm text-blue-600 hover:text-blue-800">
                  • AI Best Practices
                </Link>
                <Link href="/resources/ai-security-guide" className="block text-sm text-blue-600 hover:text-blue-800">
                  • AI Security Guide
                </Link>
                <Link href="/resources" className="block text-sm font-semibold text-purple-600 hover:text-purple-800 mt-4">
                  View All Resources →
                </Link>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tools</h3>
                <p className="text-gray-600">Interactive calculators and tools</p>
              </div>
              <div className="space-y-3">
                <Link href="/tools/ai-roi-calculator" className="block text-sm text-blue-600 hover:text-blue-800">
                  • AI ROI Calculator
                </Link>
                <Link href="/tools/ai-readiness-assessment" className="block text-sm text-blue-600 hover:text-blue-800">
                  • AI Readiness Assessment
                </Link>
                <Link href="/tools/ai-cost-estimator" className="block text-sm text-blue-600 hover:text-blue-800">
                  • AI Cost Estimator
                </Link>
                <Link href="/tools/ai-trend-analyzer" className="block text-sm text-blue-600 hover:text-blue-800">
                  • AI Trend Analyzer
                </Link>
                <Link href="/tools" className="block text-sm font-semibold text-purple-600 hover:text-purple-800 mt-4">
                  View All Tools →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest AI Content</h2>
          <p className="text-xl opacity-90 mb-8">
            Get weekly updates on new AI content, case studies, and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}