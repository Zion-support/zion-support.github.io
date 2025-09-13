import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function AIContentHub2025() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Content Hub 2025: Latest Insights, Case Studies & Resources"
        description="Explore our comprehensive AI content hub featuring the latest insights, breakthrough case studies, and free resources. Stay ahead with cutting-edge AI knowledge and implementation guides."
        keywords="AI content hub, AI insights 2025, AI case studies, AI resources, AI implementation, AI trends"
        url="/ai-content-hub-2025"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-sm font-medium px-6 py-3 rounded-full mb-6">
            🚀 AI CONTENT HUB 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover the future of AI through our comprehensive collection of insights, 
            breakthrough case studies, and cutting-edge resources. From quantum AI to 
            space exploration, explore the revolutionary technologies shaping 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all text-lg shadow-lg"
            >
              📚 Explore All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all text-lg"
            >
              📋 Download Resources
            </Link>
          </div>
        </div>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🔥 JUST PUBLISHED</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary AI Breakthroughs 2025
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the groundbreaking AI innovations that are transforming industries 
              worldwide and reshaping the future of technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/ai-2025-revolutionary-breakthroughs" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
                <h3 className="text-lg font-semibold mb-2">AI Revolutionary Breakthroughs</h3>
                <p className="text-sm opacity-90 mb-3">Groundbreaking innovations transforming industries worldwide</p>
                <div className="text-xs opacity-75">25 min read • New</div>
              </div>
            </Link>
            
            <Link href="/case-studies/ai-space-exploration-breakthrough-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                <h3 className="text-lg font-semibold mb-2">Space Exploration Success</h3>
                <p className="text-sm opacity-90 mb-3">$2.1B mission with 99.9% autonomous operation</p>
                <div className="text-xs opacity-75">Case Study • New</div>
              </div>
            </Link>
            
            <Link href="/resources/ai-implementation-master-guide-2026" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-lg font-semibold mb-2">Implementation Master Guide</h3>
                <p className="text-sm opacity-90 mb-3">Complete 200+ page resource with proven strategies</p>
                <div className="text-xs opacity-75">Free Download • 200+ pages</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Categories</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Blog Articles</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Expert insights, trends analysis, and implementation guides covering the latest in AI technology.
                </p>
                <div className="text-blue-600 font-medium group-hover:underline">Explore Articles →</div>
              </div>
            </Link>
            
            <Link href="/case-studies" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600">Case Studies</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Real-world success stories showcasing AI implementation results and breakthrough achievements.
                </p>
                <div className="text-green-600 font-medium group-hover:underline">View Case Studies →</div>
              </div>
            </Link>
            
            <Link href="/resources" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Free Resources</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Downloadable guides, checklists, templates, and tools to accelerate your AI journey.
                </p>
                <div className="text-purple-600 font-medium group-hover:underline">Download Resources →</div>
              </div>
            </Link>
            
            <Link href="/webinars" className="group">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-orange-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600">Webinars</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Live sessions, expert panels, and interactive workshops on AI implementation and trends.
                </p>
                <div className="text-orange-600 font-medium group-hover:underline">Join Webinars →</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Latest Articles */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📚 Latest Articles</h2>
            <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
              View All Articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-revolutionary-breakthroughs" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
                <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  NEW
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI 2025 Revolutionary Breakthroughs
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Discover the groundbreaking AI innovations that are transforming industries 
                  worldwide and reshaping the future of technology.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>25 min read</span>
                  <span className="text-purple-600 font-medium group-hover:underline">Read Article →</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2025-enterprise-implementation-masterclass" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
                <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  POPULAR
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI 2025 Enterprise Implementation Masterclass
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Complete guide to successful AI transformation with proven strategies, 
                  frameworks, and best practices.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>45 min read</span>
                  <span className="text-blue-600 font-medium group-hover:underline">Read Article →</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-2025-cybersecurity-revolution" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                <div className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  CRITICAL
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  AI Cybersecurity Revolution
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Protecting the digital future with 99.9% threat detection accuracy 
                  and real-time protection systems.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>38 min read</span>
                  <span className="text-red-600 font-medium group-hover:underline">Read Article →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📊 Featured Case Studies</h2>
            <Link href="/case-studies" className="text-green-600 hover:text-green-700 font-medium">
              View All Case Studies →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-space-exploration-breakthrough-2025" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  NEW
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Space Exploration Breakthrough
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  $2.1B mission success with 99.9% autonomous operation, revolutionizing 
                  space exploration technology.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$2.1B</div>
                    <div className="text-xs text-gray-600">Mission Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">99.9%</div>
                    <div className="text-xs text-gray-600">Autonomous</div>
                  </div>
                </div>
                <div className="text-blue-600 font-medium group-hover:underline">Read Case Study →</div>
              </div>
            </Link>

            <Link href="/case-studies/ai-2025-fortune-500-breakthrough" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  SUCCESS
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Fortune 500 AI Breakthrough
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  $50M savings and 300% ROI in 18 months through comprehensive AI transformation.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$50M</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">300%</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                </div>
                <div className="text-green-600 font-medium group-hover:underline">Read Case Study →</div>
              </div>
            </Link>

            <Link href="/case-studies/ai-manufacturing-transformation-success-2025" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  SUCCESS
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Manufacturing AI Success
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  40% cost reduction and 60% faster processing through intelligent automation.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">40%</div>
                    <div className="text-xs text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">60%</div>
                    <div className="text-xs text-gray-600">Faster Processing</div>
                  </div>
                </div>
                <div className="text-purple-600 font-medium group-hover:underline">Read Case Study →</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Free Resources */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">📋 Free Resources</h2>
            <Link href="/resources" className="text-purple-600 hover:text-purple-700 font-medium">
              View All Resources →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-implementation-master-guide-2026" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  FREE DOWNLOAD
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Implementation Master Guide 2026
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Complete 200+ page resource with proven strategies, templates, and best practices.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>200+ pages</span>
                  <span className="text-green-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <div className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  FREE DOWNLOAD
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Implementation Checklist
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  150+ actionable items for successful AI deployment and transformation.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>150+ items</span>
                  <span className="text-blue-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-automation-implementation-playbook-2025" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
                <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  FREE DOWNLOAD
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI Automation Playbook
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Step-by-step playbook for implementing AI automation with proven methodologies.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Playbook</span>
                  <span className="text-purple-600 font-medium group-hover:underline">Download Free →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            📧 Stay Updated with Latest AI Insights
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}