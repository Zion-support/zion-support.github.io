import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Technology Insights 2025"
        description="Explore our comprehensive collection of AI articles, case studies, and resources. Expert insights on multimodal AI, education personalization, retail transformation, and more."
        keywords="AI content, technology insights, case studies, resources, blog articles, 2025 trends"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 CONTENT SHOWCASE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest AI & Technology Insights
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover our comprehensive collection of expert insights, real-world case studies, 
            and actionable resources. From AI multimodal applications to education personalization 
            and retail transformation, get the knowledge you need to succeed in 2025.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              📚 Browse All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
            >
              📋 Download Resources
            </Link>
          </div>
        </div>

        {/* Featured New Content */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
                <span className="text-sm font-medium">🆕 JUST PUBLISHED</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fresh Content This Week
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                New expert insights, case studies, and resources published this week. 
                Stay ahead with the latest trends and best practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog/ai-multimodal-applications-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
                  <h3 className="text-lg font-semibold mb-2">AI Multimodal Applications 2025</h3>
                  <p className="text-sm opacity-90 mb-3">Beyond text to vision, audio, and beyond</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-education-personalization-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
                  <h3 className="text-lg font-semibold mb-2">AI Education Personalization 2025</h3>
                  <p className="text-sm opacity-90 mb-3">Transforming learning with adaptive intelligence</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>22 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-retail-transformation-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛍️</div>
                  <h3 className="text-lg font-semibold mb-2">AI Retail Transformation 2025</h3>
                  <p className="text-sm opacity-90 mb-3">$15M revenue increase case study</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-multimodal-implementation-checklist-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                  <h3 className="text-lg font-semibold mb-2">AI Multimodal Implementation Checklist</h3>
                  <p className="text-sm opacity-90 mb-3">150+ actionable items for success</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Free Download</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Articles */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Blog Articles</h2>
            
            <div className="space-y-6">
              <Link href="/blog/ai-multimodal-applications-2025" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🎯</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">NEW</span>
                        <span className="text-sm text-gray-500">AI & Technology</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">18 min read</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                        AI Multimodal Applications 2025: Beyond Text to Vision, Audio, and Beyond
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Explore the future of AI with multimodal applications combining text, vision, audio, and more. 
                        Real-world implementations, use cases, and business impact for 2025.
                      </p>
                      <div className="flex items-center text-sm text-blue-600 group-hover:underline">
                        Read Article →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-education-personalization-2025" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🎓</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">NEW</span>
                        <span className="text-sm text-gray-500">Education & AI</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">22 min read</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                        AI Education Personalization 2025: Transforming Learning with Adaptive Intelligence
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Discover how AI is revolutionizing education through personalized learning experiences. 
                        Real case studies, implementation strategies, and ROI insights for educational institutions.
                      </p>
                      <div className="flex items-center text-sm text-blue-600 group-hover:underline">
                        Read Article →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-enterprise-transformation-2025" className="group block">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">🏢</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">POPULAR</span>
                        <span className="text-sm text-gray-500">Enterprise AI</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">18 min read</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                        AI Enterprise Transformation 2025: Complete Implementation Guide
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Complete implementation guide with 340% ROI and real case studies. 
                        Transform your enterprise with AI technologies.
                      </p>
                      <div className="flex items-center text-sm text-blue-600 group-hover:underline">
                        Read Article →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View All Articles
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Case Studies */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Success Stories</h3>
              <div className="space-y-4">
                <Link href="/case-studies/ai-retail-transformation-2025" className="group block">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">🛍️</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">AI Retail Transformation 2025</h4>
                        <p className="text-sm text-gray-600">$15M revenue increase case study</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/case-studies/ai-financial-services-transformation-2025" className="group block">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">🏦</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Financial Services AI Success</h4>
                        <p className="text-sm text-gray-600">$50M cost savings, 300% efficiency gains</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/case-studies/ai-automation-manufacturing-2025" className="group block">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">🏭</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">AI Manufacturing Success</h4>
                        <p className="text-sm text-gray-600">40% cost reduction, 60% faster processing</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="text-center mt-4">
                <Link
                  href="/case-studies"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View All Case Studies →
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Free Resources</h3>
              <div className="space-y-4">
                <Link href="/resources/ai-multimodal-implementation-checklist-2025" className="group block">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">📋</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">AI Multimodal Implementation Checklist</h4>
                        <p className="text-sm text-gray-600">150+ actionable items for success</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/resources/ai-implementation-playbook-2025" className="group block">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">📖</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">AI Implementation Playbook 2025</h4>
                        <p className="text-sm text-gray-600">Step-by-step implementation guide</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/resources/ai-security-hardening-checklist" className="group block">
                  <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">🛡️</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">AI Security Hardening Checklist</h4>
                        <p className="text-sm text-gray-600">Essential security measures for AI systems</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="text-center mt-4">
                <Link
                  href="/resources"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View All Resources →
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Stay Updated</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get weekly updates on AI trends, implementation guides, and exclusive content.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Impact</h2>
            <p className="text-gray-600">
              Our content helps thousands of professionals stay ahead in AI and technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-gray-600">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}