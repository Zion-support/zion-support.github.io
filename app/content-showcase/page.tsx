import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content Showcase - Revolutionary AI Insights & Resources',
  description: 'Explore our comprehensive collection of AI insights, case studies, implementation guides, and resources. Everything you need to transform your business with AI.',
  keywords: ['AI content', 'AI resources', 'AI case studies', 'AI implementation', 'business transformation', 'AI insights'],
  openGraph: {
    title: 'Content Showcase - Revolutionary AI Insights',
    description: 'Comprehensive collection of AI insights and resources',
    type: 'website',
  },
};

export default function ContentShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            📚 CONTENT SHOWCASE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI Content Hub
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our comprehensive collection of AI insights, case studies, implementation guides, 
            and resources. Everything you need to transform your business with cutting-edge AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#featured"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg shadow-lg"
            >
              Explore Featured Content
            </Link>
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 text-lg"
            >
              Get Free Toolkit
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="featured" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Featured Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Featured Blog Post */}
            <Link href="/blog/ai-2025-ultimate-trends-predictions" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🔮</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI 2025: Ultimate Trends & Predictions</h3>
                <p className="text-gray-300 mb-6">
                  Revolutionary AI breakthroughs: Quantum AI Fusion, Synthetic Intelligence, Neural Interfaces, 
                  and Autonomous Business Operations. Discover the future of AI.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span>30 min read</span>
                    <span className="mx-2">•</span>
                    <span>Blog Post</span>
                  </div>
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    BREAKTHROUGH
                  </div>
                </div>
              </div>
            </Link>

            {/* Featured Case Study */}
            <Link href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🏢</div>
                <h3 className="text-2xl font-bold text-white mb-4">Global Enterprise Transformation</h3>
                <p className="text-gray-300 mb-6">
                  Fortune 500 case study: How a global manufacturing company achieved 2,500% ROI 
                  in 18 months through comprehensive AI transformation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>Fortune 500</span>
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    2,500% ROI
                  </div>
                </div>
              </div>
            </Link>

            {/* Featured Resource */}
            <Link href="/resources/ai-2025-ultimate-implementation-toolkit" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🛠️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Ultimate Implementation Toolkit</h3>
                <p className="text-gray-300 mb-6">
                  Complete guide with checklists, templates, ROI calculator, architecture blueprints, 
                  and real-world case studies for successful AI implementation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    <span>Toolkit</span>
                    <span className="mx-2">•</span>
                    <span>150+ pages</span>
                  </div>
                  <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ESSENTIAL
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Content Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Blog Posts */}
            <Link href="/blog" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div>
                <h3 className="text-xl font-semibold text-white mb-2">Blog Posts</h3>
                <p className="text-gray-300 mb-4">Expert insights, trends, and analysis</p>
                <div className="text-blue-400 group-hover:text-blue-300 font-semibold">
                  Read Articles →
                </div>
              </div>
            </Link>

            {/* Case Studies */}
            <Link href="/case-studies" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <h3 className="text-xl font-semibold text-white mb-2">Case Studies</h3>
                <p className="text-gray-300 mb-4">Real success stories and results</p>
                <div className="text-blue-400 group-hover:text-blue-300 font-semibold">
                  View Success Stories →
                </div>
              </div>
            </Link>

            {/* Resources */}
            <Link href="/resources" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                <h3 className="text-xl font-semibold text-white mb-2">Resources</h3>
                <p className="text-gray-300 mb-4">Guides, templates, and toolkits</p>
                <div className="text-blue-400 group-hover:text-blue-300 font-semibold">
                  Download Resources →
                </div>
              </div>
            </Link>

            {/* Tools */}
            <Link href="/tools" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
                <h3 className="text-xl font-semibold text-white mb-2">Tools</h3>
                <p className="text-gray-300 mb-4">Calculators and assessments</p>
                <div className="text-blue-400 group-hover:text-blue-300 font-semibold">
                  Try Tools →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Latest Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Link href="/blog/ai-2025-year-ahead-predictions" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                <h3 className="text-lg font-semibold text-white mb-2">AI 2025: The Year Ahead</h3>
                <p className="text-gray-300 mb-4">15 predictions that will shape the future of AI and business</p>
                <div className="flex items-center text-xs text-gray-400">
                  <span>25 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-enterprise-transformation-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Enterprise Transformation 2025</h3>
                <p className="text-gray-300 mb-4">Complete implementation guide with 340% ROI and real case studies</p>
                <div className="flex items-center text-xs text-gray-400">
                  <span>18 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Sustainability Success Story</h3>
                <p className="text-gray-300 mb-4">60% energy reduction, carbon neutrality - complete case study</p>
                <div className="flex items-center text-xs text-gray-400">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-startup-funding-guide-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                <h3 className="text-lg font-semibold text-white mb-2">AI Startup Funding Guide 2025</h3>
                <p className="text-gray-300 mb-4">From seed to Series A with $47B market insights and pitch templates</p>
                <div className="flex items-center text-xs text-gray-400">
                  <span>22 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏦</div>
                <h3 className="text-lg font-semibold text-white mb-2">Financial Services AI Success</h3>
                <p className="text-gray-300 mb-4">$50M cost savings, 300% efficiency gains - complete case study</p>
                <div className="flex items-center text-xs text-gray-400">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-2025-roi-calculator" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧮</div>
                <h3 className="text-lg font-semibold text-white mb-2">AI ROI Calculator</h3>
                <p className="text-gray-300 mb-4">Calculate your potential AI investment return</p>
                <div className="flex items-center text-xs text-gray-400">
                  <span>Tool</span>
                  <span className="mx-2">•</span>
                  <span>Interactive</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our free resources and expert guidance to implement AI in your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Download Free Toolkit
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}