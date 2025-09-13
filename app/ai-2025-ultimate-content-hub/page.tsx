import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI 2025 Ultimate Content Hub - Zion Tech Group',
  description: 'Discover the most comprehensive collection of AI 2025 content, breakthrough technologies, and revolutionary implementations. Your ultimate destination for AI innovation.',
  keywords: ['AI 2025', 'Artificial Intelligence', 'Breakthrough Technology', 'Content Hub', 'Innovation'],
};

export default function AI2025UltimateContentHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              AI 2025 Ultimate Content Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Your comprehensive gateway to the most revolutionary AI content, breakthrough technologies, and transformative implementations of 2025
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🚀 500+ Articles
              </span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                💡 100+ Case Studies
              </span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                🛠️ 50+ Tools
              </span>
              <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                📚 25+ Guides
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Content Categories</h2>
          <p className="text-xl text-gray-600">Explore our most popular and impactful AI content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Breakthrough Technologies */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Breakthrough Technologies</h3>
            <p className="text-gray-600 mb-6">Discover the latest AI breakthroughs that are reshaping industries and creating unprecedented opportunities.</p>
            <div className="space-y-3">
              <Link href="/blog/ai-2025-revolutionary-breakthrough-announcement" className="block p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg hover:from-red-100 hover:to-pink-100 transition-colors">
                <div className="font-semibold text-gray-900">AI 2025 Revolutionary Breakthrough</div>
                <div className="text-sm text-gray-600">5000% ROI potential</div>
              </Link>
              <Link href="/blog/ai-2025-ultimate-breakthrough-trends" className="block p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg hover:from-purple-100 hover:to-indigo-100 transition-colors">
                <div className="font-semibold text-gray-900">Ultimate Breakthrough Trends</div>
                <div className="text-sm text-gray-600">Future predictions</div>
              </Link>
              <Link href="/case-studies/ai-2025-ultimate-breakthrough-success" className="block p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-colors">
                <div className="font-semibold text-gray-900">Ultimate Success Stories</div>
                <div className="text-sm text-gray-600">Real-world results</div>
              </Link>
            </div>
          </div>

          {/* Implementation Guides */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Guides</h3>
            <p className="text-gray-600 mb-6">Step-by-step guides to implement AI solutions in your organization with proven methodologies.</p>
            <div className="space-y-3">
              <Link href="/resources/ai-2025-revolutionary-implementation-guide" className="block p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:from-blue-100 hover:to-cyan-100 transition-colors">
                <div className="font-semibold text-gray-900">Revolutionary Implementation Guide</div>
                <div className="text-sm text-gray-600">Complete roadmap</div>
              </Link>
              <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="block p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-colors">
                <div className="font-semibold text-gray-900">Ultimate Implementation Toolkit</div>
                <div className="text-sm text-gray-600">All-in-one solution</div>
              </Link>
              <Link href="/resources/ai-2025-enterprise-transformation-master-guide" className="block p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg hover:from-orange-100 hover:to-red-100 transition-colors">
                <div className="font-semibold text-gray-900">Enterprise Master Guide</div>
                <div className="text-sm text-gray-600">Large-scale transformation</div>
              </Link>
            </div>
          </div>

          {/* Case Studies */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Case Studies</h3>
            <p className="text-gray-600 mb-6">Real-world success stories showcasing massive ROI and transformative results from AI implementations.</p>
            <div className="space-y-3">
              <Link href="/case-studies/ai-2025-global-transformation-breakthrough" className="block p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-colors">
                <div className="font-semibold text-gray-900">Global Transformation (10,000% ROI)</div>
                <div className="text-sm text-gray-600">Fortune 500 success</div>
              </Link>
              <Link href="/case-studies/ai-2025-fortune-500-transformation-breakthrough" className="block p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors">
                <div className="font-semibold text-gray-900">Fortune 500 Success (1500% ROI)</div>
                <div className="text-sm text-gray-600">Enterprise transformation</div>
              </Link>
              <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="block p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg hover:from-purple-100 hover:to-pink-100 transition-colors">
                <div className="font-semibold text-gray-900">Enterprise Success (1200% ROI)</div>
                <div className="text-sm text-gray-600">Global implementation</div>
              </Link>
            </div>
          </div>

          {/* Tools & Calculators */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tools & Calculators</h3>
            <p className="text-gray-600 mb-6">Interactive tools to help you calculate ROI, assess readiness, and plan your AI implementation strategy.</p>
            <div className="space-y-3">
              <Link href="/tools/ai-2025-roi-calculator" className="block p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg hover:from-green-100 hover:to-teal-100 transition-colors">
                <div className="font-semibold text-gray-900">AI 2025 ROI Calculator</div>
                <div className="text-sm text-gray-600">Calculate your potential returns</div>
              </Link>
              <Link href="/tools/ai-readiness-assessment" className="block p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-colors">
                <div className="font-semibold text-gray-900">AI Readiness Assessment</div>
                <div className="text-sm text-gray-600">Evaluate your organization</div>
              </Link>
              <Link href="/tools/ai-implementation-planner" className="block p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg hover:from-orange-100 hover:to-yellow-100 transition-colors">
                <div className="font-semibold text-gray-900">Implementation Planner</div>
                <div className="text-sm text-gray-600">Plan your AI journey</div>
              </Link>
            </div>
          </div>

          {/* Webinars & Training */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Webinars & Training</h3>
            <p className="text-gray-600 mb-6">Live webinars, training sessions, and educational content to accelerate your AI knowledge and skills.</p>
            <div className="space-y-3">
              <Link href="/webinars/ai-2025-revolutionary-breakthroughs" className="block p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg hover:from-red-100 hover:to-pink-100 transition-colors">
                <div className="font-semibold text-gray-900">Revolutionary Breakthroughs Webinar</div>
                <div className="text-sm text-gray-600">Live expert sessions</div>
              </Link>
              <Link href="/webinars/ai-2025-implementation-masterclass" className="block p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg hover:from-purple-100 hover:to-indigo-100 transition-colors">
                <div className="font-semibold text-gray-900">Implementation Masterclass</div>
                <div className="text-sm text-gray-600">Hands-on training</div>
              </Link>
              <Link href="/webinars/ai-2025-future-predictions" className="block p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:from-blue-100 hover:to-cyan-100 transition-colors">
                <div className="font-semibold text-gray-900">Future Predictions Series</div>
                <div className="text-sm text-gray-600">Trend analysis</div>
              </Link>
            </div>
          </div>

          {/* Industry Insights */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Insights</h3>
            <p className="text-gray-600 mb-6">Deep dive analysis, market trends, and industry-specific AI applications across various sectors.</p>
            <div className="space-y-3">
              <Link href="/blog/ai-2025-comprehensive-trends-analysis" className="block p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg hover:from-indigo-100 hover:to-purple-100 transition-colors">
                <div className="font-semibold text-gray-900">Comprehensive Trends Analysis</div>
                <div className="text-sm text-gray-600">Market deep dive</div>
              </Link>
              <Link href="/blog/ai-2025-industry-transformations" className="block p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg hover:from-green-100 hover:to-blue-100 transition-colors">
                <div className="font-semibold text-gray-900">Industry Transformations</div>
                <div className="text-sm text-gray-600">Sector-specific insights</div>
              </Link>
              <Link href="/blog/ai-2025-competitive-advantage" className="block p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg hover:from-orange-100 hover:to-red-100 transition-colors">
                <div className="font-semibold text-gray-900">Competitive Advantage</div>
                <div className="text-sm text-gray-600">Strategic positioning</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Discovery Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover More Content</h2>
            <p className="text-xl text-gray-600">Explore our extensive library of AI content organized by topic and expertise level</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Blog Articles</h3>
              <p className="text-gray-600 text-sm">500+ in-depth articles covering all aspects of AI</p>
            </Link>

            <Link href="/case-studies" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-gray-600 text-sm">100+ real-world success stories and implementations</p>
            </Link>

            <Link href="/resources" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Resources</h3>
              <p className="text-gray-600 text-sm">25+ comprehensive guides and toolkits</p>
            </Link>

            <Link href="/webinars" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🎥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Webinars</h3>
              <p className="text-gray-600 text-sm">Live sessions and recorded training content</p>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of organizations already leveraging our AI solutions to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/ai-services-2025" 
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}