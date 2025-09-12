import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function ContentShowcase() {
  return (
    <>
      <SEO
        title="Content Showcase - AI & Technology Resources | Zion Tech Group"
        description="Explore our comprehensive library of AI and technology resources. Discover breakthrough innovations, case studies, implementation guides, and expert insights for 2025."
        keywords="AI resources, technology guides, case studies, implementation guides, AI innovations, business transformation"
        url="/content-showcase"
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">🎯 COMPREHENSIVE RESOURCE LIBRARY</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI & Technology Content Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our extensive collection of breakthrough AI insights, implementation guides, 
                case studies, and expert resources designed to accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  📚 Browse All Articles
                </Link>
                <Link
                  href="/case-studies"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
                >
                  📊 View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔥 Featured Content - January 2025
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most popular and impactful resources that are transforming businesses worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* AI Breakthrough Innovations */}
              <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
                <article className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🚀</div>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                    NEW
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI 2025 Breakthrough Innovations
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Revolutionary AI technologies that are reshaping industries and creating unprecedented opportunities for businesses worldwide.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>25 min read</span>
                    <span className="group-hover:text-blue-600 transition-colors">Read Article →</span>
                  </div>
                </article>
              </Link>

              {/* Sustainability & Green Tech */}
              <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
                <article className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-green-100">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🌱</div>
                  <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                    NEW
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Sustainability & Green Tech 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How artificial intelligence is revolutionizing sustainability efforts and building a greener future for businesses and communities.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>20 min read</span>
                    <span className="group-hover:text-green-600 transition-colors">Read Article →</span>
                  </div>
                </article>
              </Link>

              {/* Robotics & Automation */}
              <Link href="/blog/ai-robotics-automation-2025" className="group">
                <article className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🤖</div>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
                    NEW
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Robotics & Automation 2025
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The future of intelligent machines and how advanced robotics are revolutionizing industries and creating unprecedented opportunities.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>22 min read</span>
                    <span className="group-hover:text-blue-600 transition-colors">Read Article →</span>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                📚 Content Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our organized collection of resources by topic and industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI & Machine Learning */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">🧠</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-6">
                  Cutting-edge AI technologies, implementation guides, and breakthrough innovations
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Articles</span>
                    <span className="font-medium">12+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Case Studies</span>
                    <span className="font-medium">8+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Guides</span>
                    <span className="font-medium">15+</span>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Explore AI Content
                </Link>
              </div>

              {/* Sustainability & Green Tech */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">🌱</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability & Green Tech</h3>
                <p className="text-gray-600 mb-6">
                  Eco-friendly AI solutions and sustainable technology implementations
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Articles</span>
                    <span className="font-medium">8+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Case Studies</span>
                    <span className="font-medium">5+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Guides</span>
                    <span className="font-medium">10+</span>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Explore Green Tech
                </Link>
              </div>

              {/* Robotics & Automation */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Robotics & Automation</h3>
                <p className="text-gray-600 mb-6">
                  Intelligent machines and automated systems transforming industries
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Articles</span>
                    <span className="font-medium">10+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Case Studies</span>
                    <span className="font-medium">6+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Guides</span>
                    <span className="font-medium">12+</span>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Explore Robotics
                </Link>
              </div>

              {/* Case Studies */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Success Stories</h3>
                <p className="text-gray-600 mb-6">
                  Real-world implementations and measurable business results
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Manufacturing</span>
                    <span className="font-medium">8+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Healthcare</span>
                    <span className="font-medium">5+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Finance</span>
                    <span className="font-medium">6+</span>
                  </div>
                </div>
                <Link
                  href="/case-studies"
                  className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  View Case Studies
                </Link>
              </div>

              {/* Implementation Guides */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">📋</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Guides</h3>
                <p className="text-gray-600 mb-6">
                  Step-by-step guides for successful technology adoption
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">AI Implementation</span>
                    <span className="font-medium">15+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">ROI Calculators</span>
                    <span className="font-medium">8+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Templates</span>
                    <span className="font-medium">20+</span>
                  </div>
                </div>
                <Link
                  href="/resources"
                  className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Download Guides
                </Link>
              </div>

              {/* Industry Solutions */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-6">🏭</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Tailored solutions for specific industries and use cases
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Manufacturing</span>
                    <span className="font-medium">12+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Healthcare</span>
                    <span className="font-medium">8+</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Finance</span>
                    <span className="font-medium">10+</span>
                  </div>
                </div>
                <Link
                  href="/services"
                  className="block w-full bg-teal-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                📈 Latest Resources & Downloads
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fresh content and downloadable resources added weekly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/resources/ai-implementation-master-guide-2026" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📖</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Implementation Master Guide 2026
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    200+ page comprehensive guide with frameworks and templates
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Free Download</span>
                    <span>200+ pages</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-cybersecurity-checklist-2025" className="group">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-green-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI Cybersecurity Checklist 2025
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    150+ security items for secure AI implementation
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Free Download</span>
                    <span>150+ items</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-workforce-transformation-playbook-2025" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-purple-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    AI Workforce Transformation Playbook
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Complete reskilling strategies and implementation guides
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Free Download</span>
                    <span>150+ pages</span>
                  </div>
                </div>
              </Link>

              <Link href="/tools/ai-roi-calculator" className="group">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-orange-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    AI ROI Calculator
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Calculate potential return on AI investments
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Interactive Tool</span>
                    <span>Free</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              📧 Stay Updated with Latest Content
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get weekly updates on new articles, case studies, and resources delivered 
              straight to your inbox. Join 10,000+ professionals who trust our content.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}