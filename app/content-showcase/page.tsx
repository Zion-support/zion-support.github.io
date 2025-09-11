import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Insights 2025"
        description="Explore our comprehensive collection of AI articles, case studies, and resources. Fresh content published weekly to help you succeed in 2025."
        keywords="AI content, business insights, case studies, resources, AI articles, technology trends"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 CONTENT SHOWCASE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Fresh AI & Business Content
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our latest expert insights, case studies, and resources. From AI predictions and automation trends 
            to retail transformation success stories, get the knowledge you need to succeed in 2025.
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

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-2xl p-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🔥 FEATURED THIS WEEK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Predictions 2025: The Future of Business
            </h2>
            <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
              Discover the key AI trends and predictions that will shape business in 2025. 
              Expert insights on automation, enterprise AI, and emerging technologies.
            </p>
            <Link
              href="/blog/ai-2025-predictions"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Read Full Article →
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Blog Articles */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h3>
              <p className="text-gray-600">Expert insights and analysis on AI, technology, and business trends</p>
            </div>
            
            <div className="space-y-4">
              <Link href="/blog/ai-2025-predictions" className="group block">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">🔮</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      AI Predictions 2025
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      The future of AI in business - key trends and predictions
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>20 min read</span>
                      <span>•</span>
                      <span>New</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-automation-trends-2025" className="group block">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      AI Automation Trends 2025
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Transform your business operations with intelligent automation
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>16 min read</span>
                      <span>•</span>
                      <span>New</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/cloud-native-architecture-2025" className="group block">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">☁️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      Cloud-Native Architecture 2025
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Build scalable, resilient applications with modern cloud patterns
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>15 min read</span>
                      <span>•</span>
                      <span>New</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="mt-6 text-center">
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Articles →
              </Link>
            </div>
          </div>

          {/* Case Studies */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Success Stories</h3>
              <p className="text-gray-600">Real-world case studies showcasing AI transformation results</p>
            </div>
            
            <div className="space-y-4">
              <Link href="/case-studies/ai-retail-transformation-success-2025" className="group block">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">🏪</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      Retail AI Transformation
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      300% revenue growth and 60% cost reduction case study
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Case Study</span>
                      <span>•</span>
                      <span>New</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-automation-manufacturing-2025" className="group block">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">🏭</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      AI Manufacturing Success
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      40% cost reduction and 60% faster processing
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Case Study</span>
                      <span>•</span>
                      <span>New</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/fortune-500-ai-transformation" className="group block">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      Fortune 500 AI Transformation
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Complete digital transformation success story
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Case Study</span>
                      <span>•</span>
                      <span>Popular</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="mt-6 text-center">
              <Link
                href="/case-studies"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Case Studies →
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Resources</h3>
              <p className="text-gray-600">Downloadable guides, checklists, and tools for AI implementation</p>
            </div>
            
            <div className="space-y-4">
              <Link href="/resources/ai-transformation-checklist-2025" className="group block">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">📋</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      AI Transformation Checklist
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      150+ actionable items for successful AI implementation
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Free Download</span>
                      <span>•</span>
                      <span>New</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/resources/ai-implementation-playbook-2025" className="group block">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">📚</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      AI Implementation Playbook
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Step-by-step implementation guide with templates
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Free Download</span>
                      <span>•</span>
                      <span>New</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <Link href="/resources/ai-security-hardening-checklist" className="group block">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">🛡️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1">
                      AI Security Hardening
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Essential security measures for AI systems
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Free Download</span>
                      <span>•</span>
                      <span>Popular</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="mt-6 text-center">
              <Link
                href="/resources"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Resources →
              </Link>
            </div>
          </div>
        </div>

        {/* Content Stats */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Content Library Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Fresh Content</h3>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Get weekly updates on AI trends, implementation guides, exclusive case studies, 
            and early access to new content. Join 15,000+ AI professionals and business leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}