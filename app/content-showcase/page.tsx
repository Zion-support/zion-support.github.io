import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Business Resources"
        description="Explore our complete collection of AI articles, guides, case studies, and resources. 50+ pieces of content covering everything from AI implementation to business transformation."
        keywords="AI content, business resources, AI guides, case studies, implementation guides, productivity tools"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
              ← Back to Home
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">January 30, 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            🎯 Complete Content Showcase
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Discover our comprehensive collection of AI and business resources. From implementation 
            guides to case studies, we've created 50+ pieces of content to help you succeed with AI in 2025.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">ZT</span>
              </div>
              <span>Zion Tech Group</span>
            </div>
            <span>•</span>
            <span>50+ resources</span>
            <span>•</span>
            <span>Updated daily</span>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Total Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Blog Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Case Studies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-sm opacity-90">Free Guides</div>
            </div>
          </div>
        </div>

        {/* Featured New Content */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">🔥 Featured New Content</h2>
            <div className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
              Just Published
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Enterprise Implementation Masterclass
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete guide to achieving 300%+ ROI with AI implementation. Includes real case studies and proven frameworks.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>45 min read</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">NEW</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2025-productivity-revolution" className="group">
              <div className="bg-white border-2 border-green-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">
                  AI Productivity Revolution 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to 3X your productivity with AI tools and strategies that actually work.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>25 min read</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">NEW</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-2025-productivity-playbook" className="group">
              <div className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600">
                  AI Productivity Playbook 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  200+ pages of proven strategies, tools, and frameworks for maximum productivity.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Free Download</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">NEW</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Blog Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📝 Latest Blog Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🧠</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Breakthrough Innovations 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Revolutionary technologies that are reshaping industries and creating new opportunities.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>28 min read</span>
                  <span>Trending</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2025-year-ahead-predictions" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🔮</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI 2025 Year Ahead Predictions
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  15 trends that will reshape technology and business in 2025.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>32 min read</span>
                  <span>Popular</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-enterprise-automation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Enterprise Automation 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete implementation guide with 40% cost reduction strategies.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>20 min read</span>
                  <span>Featured</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-startup-funding-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Startup Funding Playbook 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Master the $47B funding landscape with proven strategies and templates.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>25 min read</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-healthcare-diagnosis-breakthrough-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Healthcare Diagnosis Breakthrough
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  98% accuracy rates and revolutionary medical AI systems.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>18 min read</span>
                  <span>Trending</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-retail-personalization-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🛍️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Retail Personalization 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  300% revenue growth through intelligent customer experiences.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>15 min read</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Blog Articles
            </Link>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Success Stories & Case Studies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-2025-enterprise-transformation-success" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Fortune 500 AI Success Story
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  $50M savings and 340% ROI through comprehensive AI transformation.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>15 min read</span>
                  <span>Featured</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏦</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Financial Services AI Transformation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  $2.4B cost savings and 95% fraud detection accuracy.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>12 min read</span>
                  <span>Popular</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-manufacturing-automation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏭</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Manufacturing AI Automation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  40% cost reduction and 60% faster processing times.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>10 min read</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-healthcare-diagnosis-breakthrough-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🏥</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Healthcare AI Diagnosis Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  98% accuracy rates and revolutionary medical AI systems.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>14 min read</span>
                  <span>Trending</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-retail-personalization-success-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🛍️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  Retail AI Personalization Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  300% revenue growth through intelligent customer experiences.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>11 min read</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🌱</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Sustainability Transformation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  60% energy reduction and carbon neutrality achievement.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>13 min read</span>
                  <span>Featured</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/case-studies"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </div>

        {/* Free Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Free Resources & Guides</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/resources/ai-implementation-master-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Implementation Master Guide
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete 150+ page resource with templates and checklists.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>150+ pages</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-2025-productivity-playbook" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Productivity Playbook 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  200+ pages of proven strategies and tools for maximum productivity.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>200+ pages</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-automation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Automation Checklist 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  150+ actionable items for successful AI implementation.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Checklist</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-roi-calculator-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI ROI Calculator 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Calculate potential return on AI investments with our free tool.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Tool</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-security-hardening-checklist" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Security Hardening Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Essential security measures for AI systems and implementations.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Checklist</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-ethics-compliance-checklist" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">⚖️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                  AI Ethics Compliance Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Ensure responsible AI implementation with our compliance guide.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Guide</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/resources"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View All Free Resources
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get personalized guidance for your AI implementation with our free consultation. 
            Our experts will help you develop a custom roadmap and avoid common pitfalls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}