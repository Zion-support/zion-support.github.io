import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI Insights, Case Studies & Resources 2025"
        description="Explore our comprehensive collection of AI content including articles, case studies, and implementation guides. Stay ahead with the latest insights on AI transformation."
        keywords="AI content, case studies, AI articles, implementation guides, AI resources, AI insights, technology content"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🚀 Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of AI insights, real-world case studies, 
            and practical implementation guides. Stay ahead with the latest content on AI transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full">
              📚 50+ Articles
            </span>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full">
              📊 25+ Case Studies
            </span>
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-2 rounded-full">
              📋 15+ Resources
            </span>
            <span className="bg-orange-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full">
              🆕 Updated Weekly
            </span>
          </div>
        </header>

        {/* Featured Content */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🌟 Featured Content</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular and impactful content, handpicked for maximum value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Multimodal AI Article */}
            <Link href="/blog/ai-2025-multimodal-revolution" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
                <div className="inline-flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  NEW ARTICLE
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI Multimodal Revolution 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Beyond text to vision, audio & beyond. Discover how multimodal AI is transforming industries.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>15 min read</span>
                  <span className="text-purple-600 font-medium group-hover:underline">Read Article →</span>
                </div>
              </div>
            </Link>

            {/* Healthcare Automation Article */}
            <Link href="/blog/ai-healthcare-automation-2025" className="group">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-green-100">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🏥</div>
                <div className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  NEW ARTICLE
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Healthcare Automation 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Transforming patient care & clinical operations with intelligent automation.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>18 min read</span>
                  <span className="text-green-600 font-medium group-hover:underline">Read Article →</span>
                </div>
              </div>
            </Link>

            {/* Financial Services Case Study */}
            <Link href="/case-studies/ai-financial-services-transformation-breakthrough-2025" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                <div className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-4">
                  NEW CASE STUDY
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  $2.8B Financial Services Success
                </h3>
                <p className="text-gray-600 mb-4">
                  How a Fortune 500 company achieved $2.8B revenue increase through AI transformation.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>12 min read</span>
                  <span className="text-blue-600 font-medium group-hover:underline">View Case Study →</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📚 Latest Articles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fresh insights on AI trends, implementation strategies, and industry developments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/ai-2025-multimodal-revolution" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🎯</div>
                <div className="text-xs font-medium text-purple-700 mb-2">AI & Technology</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AI Multimodal Revolution 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Beyond text to vision, audio & beyond. Discover how multimodal AI is transforming industries.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>15 min read</span>
                  <span>NEW</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-healthcare-automation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🏥</div>
                <div className="text-xs font-medium text-green-700 mb-2">Healthcare & AI</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Healthcare Automation 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Transforming patient care & clinical operations with intelligent automation.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>18 min read</span>
                  <span>NEW</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2025-quantum-computing-breakthrough" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">⚛️</div>
                <div className="text-xs font-medium text-blue-700 mb-2">AI & Technology</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Quantum Computing Breakthrough
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Revolutionary quantum computing applications in AI and machine learning.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>12 min read</span>
                  <span>POPULAR</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2025-cybersecurity-revolution" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🛡️</div>
                <div className="text-xs font-medium text-red-700 mb-2">Cybersecurity & AI</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  AI Cybersecurity Revolution
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  How AI is revolutionizing cybersecurity and threat detection.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>14 min read</span>
                  <span>TRENDING</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2025-sustainability-green-tech" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🌱</div>
                <div className="text-xs font-medium text-green-700 mb-2">Sustainability & AI</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Sustainability & Green Tech
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  AI-powered solutions for environmental sustainability and green technology.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>11 min read</span>
                  <span>TRENDING</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2025-edge-ai-acceleration" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">⚡</div>
                <div className="text-xs font-medium text-orange-700 mb-2">Edge Computing & AI</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Edge AI Acceleration 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Real-time AI processing at the edge for instant, low-latency applications.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>13 min read</span>
                  <span>NEW</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📊 Success Stories & Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world examples of AI transformation success across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-financial-services-transformation-breakthrough-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">💰</div>
                <div className="text-xs font-medium text-green-700 mb-2">Financial Services</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  $2.8B Financial Services Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Fortune 500 company achieves $2.8B revenue increase through AI transformation.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>12 min read</span>
                  <span>NEW</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-healthcare-diagnosis-success-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🏥</div>
                <div className="text-xs font-medium text-blue-700 mb-2">Healthcare</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Healthcare Diagnosis Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  95% accuracy in medical diagnosis with AI-powered systems.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>10 min read</span>
                  <span>POPULAR</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-transformation-global-logistics-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🚛</div>
                <div className="text-xs font-medium text-purple-700 mb-2">Logistics</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  $300M Global Logistics Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Fortune 500 logistics company achieves $300M savings and 400% ROI.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>14 min read</span>
                  <span>FEATURED</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-automation-manufacturing-success-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🏭</div>
                <div className="text-xs font-medium text-orange-700 mb-2">Manufacturing</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Manufacturing AI Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  40% cost reduction and 60% faster processing through AI automation.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>11 min read</span>
                  <span>SUCCESS</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-cybersecurity-transformation-breakthrough-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🛡️</div>
                <div className="text-xs font-medium text-red-700 mb-2">Cybersecurity</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  Cybersecurity AI Breakthrough
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  90% reduction in security incidents with AI-powered threat detection.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>13 min read</span>
                  <span>BREAKTHROUGH</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🌱</div>
                <div className="text-xs font-medium text-green-700 mb-2">Sustainability</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Sustainability Transformation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  60% energy reduction achieved through AI-powered sustainability solutions.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>9 min read</span>
                  <span>GREEN</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/case-studies"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View All Case Studies
            </Link>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📋 Free Resources & Guides</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical implementation guides, templates, and tools to accelerate your AI journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/resources/ai-automation-implementation-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">📋</div>
                <div className="text-xs font-medium text-blue-700 mb-2">Implementation Guide</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Automation Implementation Playbook
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete guide with templates, checklists, and best practices for AI success.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>25 min read</span>
                  <span>NEW</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-master-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">📚</div>
                <div className="text-xs font-medium text-purple-700 mb-2">Master Guide</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AI Implementation Master Guide 2025
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Comprehensive 200+ page guide covering all aspects of AI implementation.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>200+ pages</span>
                  <span>POPULAR</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-cybersecurity-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🛡️</div>
                <div className="text-xs font-medium text-red-700 mb-2">Security Checklist</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  AI Cybersecurity Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Essential security measures and best practices for AI systems.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Checklist</span>
                  <span>ESSENTIAL</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-governance-starter-kit-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">⚖️</div>
                <div className="text-xs font-medium text-indigo-700 mb-2">Governance Kit</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  AI Governance Starter Kit
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Templates and frameworks for establishing AI governance in your organization.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Templates</span>
                  <span>STARTER</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-transformation-readiness-assessment-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">📊</div>
                <div className="text-xs font-medium text-green-700 mb-2">Assessment Tool</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  AI Readiness Assessment
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Evaluate your organization's readiness for AI transformation.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Assessment</span>
                  <span>FREE</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-gtm-starter-kit-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">🚀</div>
                <div className="text-xs font-medium text-orange-700 mb-2">GTM Kit</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  AI Go-To-Market Starter Kit
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Templates and strategies for launching AI products and services.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Templates</span>
                  <span>GTM</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/resources"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View All Resources
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated with Latest AI Insights</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get weekly updates on the latest AI trends, case studies, and implementation guides. 
            Join 25,000+ professionals who trust our insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}