import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase 2025: Latest AI & Tech Insights"
        description="Explore our comprehensive collection of AI and technology content for 2025. Latest articles, case studies, resources, and expert insights to accelerate your business growth."
        keywords="AI content, tech insights, case studies, resources, 2025 content, AI articles, technology guides"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">🔥 JANUARY 2025</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Showcase 2025
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Discover our latest collection of AI and technology content. From cutting-edge research 
            to real-world case studies, get the insights you need to stay ahead in 2025.
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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 Featured This Week
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Our most popular and impactful content, handpicked by our experts to help you 
              navigate the rapidly evolving AI and technology landscape.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-2">AI Multimodal Applications</h3>
                <p className="text-sm opacity-90 mb-4">Beyond text to vision, audio, and beyond</p>
                <Link href="/blog/ai-multimodal-applications-2025" className="text-white text-sm font-medium hover:underline">
                  Read Article →
                </Link>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-lg font-semibold mb-2">Retail AI Transformation</h3>
                <p className="text-sm opacity-90 mb-4">$50M revenue increase case study</p>
                <Link href="/case-studies/ai-retail-transformation-2025" className="text-white text-sm font-medium hover:underline">
                  View Case Study →
                </Link>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold mb-2">AI Implementation Roadmap</h3>
                <p className="text-sm opacity-90 mb-4">Complete guide with 150+ action items</p>
                <Link href="/resources/ai-implementation-roadmap-2025" className="text-white text-sm font-medium hover:underline">
                  Download Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-multimodal-applications-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🎯</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI & Technology
                    </span>
                    <span className="text-gray-500 text-sm">20 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Multimodal Applications 2025: Beyond Text to Vision, Audio, and Beyond
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore the future of AI with multimodal applications that combine text, vision, audio, 
                    and more. Learn implementation strategies, use cases, and best practices for 2025.
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

            <Link href="/blog/ai-cybersecurity-threats-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center relative">
                  <div className="text-8xl">🛡️</div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                      Cybersecurity
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    AI Cybersecurity Threats 2025: Protecting Your Business from AI-Powered Attacks
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Learn about emerging AI-powered cybersecurity threats in 2025 and how to protect 
                    your business. Expert insights on AI security best practices and defense strategies.
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

            <Link href="/blog/ai-edge-computing-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">⚡</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Edge Computing
                    </span>
                    <span className="text-gray-500 text-sm">22 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Edge Computing 2025: Bringing Intelligence to the Edge
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover how AI edge computing is revolutionizing industries in 2025. Learn about 
                    implementation strategies, use cases, and the future of distributed AI systems.
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
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <Link href="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Case Studies →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/case-studies/ai-retail-transformation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">🛍️</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Case Study
                    </span>
                    <span className="text-gray-500 text-sm">15 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Retail Transformation 2025: $50M Revenue Increase
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How a major retail chain transformed their business with AI, achieving a $50M revenue 
                    increase, 40% improvement in customer satisfaction, and 60% reduction in operational costs.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-green-600 font-medium group-hover:underline">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/case-studies/ai-manufacturing-automation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏭</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Case Study
                    </span>
                    <span className="text-gray-500 text-sm">18 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Manufacturing Automation 2025: $15M Cost Savings
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    How Global Manufacturing Corp transformed their operations with AI automation, 
                    achieving $15M in annual cost savings, 45% improvement in efficiency, and 60% 
                    reduction in quality defects.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">🏦</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Case Study
                    </span>
                    <span className="text-gray-500 text-sm">16 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 30, 2025</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Financial Services Transformation 2025: $50M Cost Savings
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover how a major financial services firm achieved $50M cost savings through AI 
                    transformation. Complete case study with implementation details, ROI analysis, and lessons learned.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      View Case Study →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources</h2>
            <Link href="/resources" className="text-blue-600 hover:text-blue-700 font-medium">
              View All Resources →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/resources/ai-implementation-roadmap-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative">
                  <div className="text-8xl">📋</div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      Resource
                    </span>
                    <span className="text-gray-500 text-sm">45 pages</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">2.3MB</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    AI Implementation Roadmap 2025: Complete Guide to Success
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Your complete guide to successfully implementing AI in your organization. 
                    This comprehensive roadmap includes timelines, checklists, best practices, 
                    and real-world case studies.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/resources/ai-startup-funding-playbook-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                  <div className="text-8xl">💰</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Resource
                    </span>
                    <span className="text-gray-500 text-sm">65 pages</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">3.1MB</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    AI Startup Funding Playbook 2025: Complete Guide to Raising Capital
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    The complete guide to raising capital for AI startups in 2025. From seed to Series A, 
                    learn the strategies, templates, and insights that successful AI founders use.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-green-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-8xl">✅</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    FREE
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      Resource
                    </span>
                    <span className="text-gray-500 text-sm">30 pages</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">1.8MB</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    AI Implementation Checklist 2025: 150+ Action Items
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Step-by-step checklist for successful AI implementation. 150+ actionable items 
                    covering every aspect of your AI journey from planning to deployment.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Download →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated with Our Latest Content
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Get weekly updates on AI trends, technology insights, and business strategies. 
              Join 10,000+ professionals who trust our content.
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
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of AI experts can help you implement the strategies and insights from our content 
            to drive real business results. From strategy to deployment, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}