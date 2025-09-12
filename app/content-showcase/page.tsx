import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function ContentShowcasePage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Technology Insights - Zion Tech Group"
        description="Explore our comprehensive collection of AI insights, case studies, resources, and expert analysis. Stay ahead with cutting-edge technology content."
        keywords="AI content, technology insights, case studies, resources, expert analysis, AI trends, technology showcase"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">✨ FRESH CONTENT</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🚀 Content Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our latest expert insights, breakthrough case studies, and comprehensive resources. 
            From AI transformation guides to quantum computing breakthroughs, get the knowledge you need to succeed in 2025.
          </p>
        </header>

        {/* Featured Content Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">🔥 HOT THIS WEEK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fresh AI & Business Insights
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              New this week: AI Multimodal Applications, Quantum AI Computing, Cybersecurity Threats, 
              Retail Transformation Case Study, and comprehensive funding playbooks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                📚 Read Latest Articles
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
              >
                📋 Download Resources
              </Link>
            </div>
          </div>

          {/* Featured Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-multimodal-applications-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧠</div>
                <h3 className="text-lg font-semibold mb-2">AI Multimodal Applications 2025</h3>
                <p className="text-sm opacity-90 mb-3">Beyond text to vision, audio, and beyond</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>16 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/quantum-ai-computing-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚛️</div>
                <h3 className="text-lg font-semibold mb-2">Quantum AI Computing 2025</h3>
                <p className="text-sm opacity-90 mb-3">The next frontier of intelligence</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>18 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href="/blog/ai-cybersecurity-threats-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                <h3 className="text-lg font-semibold mb-2">AI Cybersecurity Threats 2025</h3>
                <p className="text-sm opacity-90 mb-3">Defending against next-gen attacks</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>14 min read</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-retail-transformation-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛍️</div>
                <h3 className="text-lg font-semibold mb-2">AI Retail Transformation</h3>
                <p className="text-sm opacity-90 mb-3">300% revenue growth case study</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className="space-y-16">
          {/* Latest Blog Articles */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">📚 Latest Blog Articles</h2>
              <Link 
                href="/blog" 
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
              >
                View All Articles
                <span>→</span>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/blog/ai-multimodal-applications-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                    <div className="text-8xl">🧠</div>
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      #1 TRENDING
                    </div>
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      2.3K views
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                        AI Technology
                      </span>
                      <span className="text-gray-500 text-sm">16 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      AI Multimodal Applications 2025: Beyond Text to Vision, Audio, and Beyond
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Explore the revolutionary intersection of AI and multimodal computing. Discover how 
                      companies are achieving 340% improvement in user engagement with next-generation AI systems.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-purple-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              <Link href="/blog/quantum-ai-computing-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                    <div className="text-8xl">⚛️</div>
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      #2 TRENDING
                    </div>
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      1.8K views
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Quantum Computing
                      </span>
                      <span className="text-gray-500 text-sm">18 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      Quantum AI Computing 2025: The Next Frontier of Intelligence
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      The convergence of quantum computing and AI is unlocking unprecedented computational power. 
                      Learn how companies are solving previously impossible problems.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-green-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              <Link href="/blog/ai-cybersecurity-threats-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center relative">
                    <div className="text-8xl">🛡️</div>
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      #3 TRENDING
                    </div>
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                      1.5K views
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                        Cybersecurity
                      </span>
                      <span className="text-gray-500 text-sm">14 min read</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                      AI Cybersecurity Threats 2025: Defending Against Next-Gen Attacks
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      As AI becomes more powerful, so do the threats. Learn about emerging AI-powered 
                      cyber attacks and advanced defense strategies.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-red-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>

          {/* Case Studies */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">📊 Success Stories & Case Studies</h2>
              <Link 
                href="/case-studies" 
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
              >
                View All Case Studies
                <span>→</span>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/case-studies/ai-retail-transformation-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative">
                    <div className="text-8xl">🛍️</div>
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">
                        Retail & E-commerce
                      </span>
                      <span className="text-gray-500 text-sm">Case Study</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                      AI Retail Transformation 2025: 300% Revenue Growth
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Discover how a major retail chain achieved 300% revenue growth through AI-powered 
                      personalization, inventory optimization, and customer experience enhancement.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                          <span className="text-pink-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-pink-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                    <div className="text-8xl">🏦</div>
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      POPULAR
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        Financial Services
                      </span>
                      <span className="text-gray-500 text-sm">Case Study</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 28, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      Financial Services AI Success: $50M Cost Savings
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      How a major bank achieved $50M cost savings and 300% efficiency gains through 
                      comprehensive AI transformation.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-blue-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>

              <Link href="/case-studies/ai-healthcare-diagnosis-success-2025" className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                    <div className="text-8xl">🏥</div>
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      TRENDING
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Healthcare
                      </span>
                      <span className="text-gray-500 text-sm">Case Study</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">Jan 25, 2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      Healthcare AI Success: 95% Diagnostic Accuracy
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Revolutionary AI system achieves 95% accuracy in medical diagnosis with 80% 
                      faster processing times.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold text-sm">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-green-600 font-medium group-hover:underline">
                        Read Case Study →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>

          {/* Resources */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">📋 Free Resources & Tools</h2>
              <Link 
                href="/resources" 
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
              >
                View All Resources
                <span>→</span>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/resources/ai-implementation-checklist-2025" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    AI Implementation Checklist
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    150+ actionable items for successful AI deployment
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>25K downloads</span>
                    <span>⭐ 4.9/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-startup-funding-playbook-2025" className="group">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💰</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    AI Startup Funding Playbook
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Complete guide from seed to Series A
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>18K downloads</span>
                    <span>⭐ 4.8/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-security-hardening-checklist" className="group">
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-red-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    AI Security Hardening
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Essential security measures for AI systems
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>12K downloads</span>
                    <span>⭐ 4.7/5</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/startup-seo-playbook-2025" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-100">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📈</div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Startup SEO Playbook
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Complete SEO strategy for AI startups
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>8K downloads</span>
                    <span>⭐ 4.6/5</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-white mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              📧 Stay Updated with Latest Content
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get weekly updates on our latest articles, case studies, and resources. 
              Join 50,000+ professionals who trust our expertise.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Custom Content or Consulting?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our experts can create custom content, case studies, and resources tailored 
              to your specific industry and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Custom Content
              </Link>
              <Link
                href="/services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}