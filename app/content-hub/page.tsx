import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, TrendingUp, Users, Zap, Brain, Rocket } from 'lucide-react';

export const metadata = {
  title: 'AI Content Hub 2026 - Revolutionary Guides, Case Studies & Success Stories',
  description: 'Explore our comprehensive AI content hub featuring revolutionary guides, Fortune 500 case studies, and breakthrough innovations for 2026.',
  keywords: 'AI content hub, AI guides, case studies, success stories, AI transformation, enterprise AI',
};

export default function ContentHub() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            🚀 AI CONTENT HUB 2026
          </span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Revolutionary AI Content Hub 2026
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover comprehensive AI guides, Fortune 500 case studies, and breakthrough innovations 
          that are transforming businesses worldwide in 2026.
        </p>
      </div>

      {/* Featured Content */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Revolutionary Guides</h2>
          <p className="text-lg text-gray-600">Master AI transformation with our comprehensive 2026 guides</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/blog/ai-2026-ultimate-guide" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI 2026 Ultimate Guide</h3>
                  <p className="text-sm text-gray-500">Complete transformation blueprint</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Master AI transformation with our comprehensive 2026 guide. From autonomous systems to quantum computing, 
                discover strategies delivering $50M+ ROI for Fortune 500 companies.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  45 min read
                </div>
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Read Ultimate Guide →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-next-generation-autonomous-systems-2026" className="group">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Next-Gen Autonomous Systems</h3>
                  <p className="text-sm text-gray-500">Self-managing enterprise guide</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Master next-generation autonomous AI systems with 99.9% uptime, 95% automation, and $25M+ ROI. 
                Complete implementation guide for 2026.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  30 min read
                </div>
                <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2026-mega-breakthroughs" className="group">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mega Breakthroughs 2026</h3>
                  <p className="text-sm text-gray-500">Revolutionary technologies</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Explore 15 revolutionary AI breakthroughs transforming enterprise operations, creating $50B+ market 
                opportunities, and delivering unprecedented performance gains.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  35 min read
                </div>
                <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-enterprise-transformation-2026" className="group">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Enterprise Transformation 2026</h3>
                  <p className="text-sm text-gray-500">$50M+ ROI implementation guide</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Master enterprise AI transformation with our comprehensive 2026 guide. Achieve $50M+ ROI, 
                95% automation, and complete business revolution.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  40 min read
                </div>
                <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2026-revolutionary-automation" className="group">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Revolutionary Automation 2026</h3>
                  <p className="text-sm text-gray-500">Complete business process transformation</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Master revolutionary AI automation with 98% process efficiency, $8M+ savings, and complete 
                business transformation. Proven strategies for 2026.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  35 min read
                </div>
                <div className="text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-2026-ultimate-guide" className="group">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Innovation 2026</h3>
                  <p className="text-sm text-gray-500">Complete innovation guide</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Discover the latest AI innovations, transformation guides, and breakthrough technologies 
                that are reshaping businesses in 2026.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  30 min read
                </div>
                <div className="text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors">
                  Read Guide →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Fortune 500 Success Stories</h2>
          <p className="text-lg text-gray-600">Real-world case studies showcasing $50M+ ROI achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/case-studies/ai-2026-mega-transformation-success" className="group">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">$50M Mega Transformation</h3>
                  <p className="text-sm text-gray-500">Fortune 500 Manufacturing</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                See how a Fortune 500 manufacturing company achieved $50M ROI with comprehensive AI transformation. 
                99.9% uptime, 95% automation, and complete business revolution.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  25 min read
                </div>
                <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                  Read Case Study →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-revolutionary-automation-success-2026" className="group">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">$8M Automation Success</h3>
                  <p className="text-sm text-gray-500">Fortune 500 Retail</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Discover how a Fortune 500 retail company achieved $8M ROI with revolutionary AI automation. 
                98% process efficiency, 300% productivity gains, and complete transformation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  20 min read
                </div>
                <div className="text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                  Read Case Study →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-2026-breakthrough-innovations-success" className="group">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">$15M Breakthrough Success</h3>
                  <p className="text-sm text-gray-500">Fortune 500 Technology</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                See how a Fortune 500 technology company achieved $15M ROI with breakthrough AI innovations. 
                Quantum computing, neural interfaces, and space technology success.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  30 min read
                </div>
                <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                  Read Case Study →
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Content Categories */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Content Categories</h2>
          <p className="text-lg text-gray-600">Explore our organized content by category</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/blog" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI Guides</h3>
              <p className="text-gray-600 text-sm mb-4">Comprehensive implementation guides</p>
              <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                Explore Guides →
              </div>
            </div>
          </Link>

          <Link href="/case-studies" className="group">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-gray-600 text-sm mb-4">Real-world success stories</p>
              <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                View Case Studies →
              </div>
            </div>
          </Link>

          <Link href="/blog" className="group">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Innovations</h3>
              <p className="text-gray-600 text-sm mb-4">Breakthrough technologies</p>
              <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                Explore Innovations →
              </div>
            </div>
          </Link>

          <Link href="/blog" className="group">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Automation</h3>
              <p className="text-gray-600 text-sm mb-4">Process automation guides</p>
              <div className="text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                Explore Automation →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Get started with our AI transformation services and join the Fortune 500 companies 
          achieving $50M+ ROI with our proven strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Transformation
          </Link>
          <Link
            href="/blog"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Explore More Content
          </Link>
        </div>
      </section>
    </div>
  );
}