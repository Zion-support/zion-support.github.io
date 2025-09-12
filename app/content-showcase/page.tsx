import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcasePage() {
  const newBlogPosts = [
    {
      title: "AI 2025 Enterprise Implementation Masterclass: Complete Success Framework",
      description: "Master enterprise AI implementation with our comprehensive 2025 guide. Learn strategies, frameworks, and best practices for successful AI transformation based on 500+ implementations.",
      href: "/blog/ai-2025-enterprise-implementation-masterclass",
      icon: "🎓",
      category: "Enterprise AI",
      readTime: "25 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI 2025 Cybersecurity Threats & Defense: Complete Protection Guide",
      description: "Protect your AI systems from emerging cyber threats in 2025. Learn about adversarial attacks, data poisoning, model theft, and comprehensive defense strategies.",
      href: "/blog/ai-2025-cybersecurity-threats-defense",
      icon: "🛡️",
      category: "AI Security",
      readTime: "20 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI 2025: Quantum Computing Breakthrough - Revolutionary Applications",
      description: "Discover how quantum computing is revolutionizing AI in 2025. Explore breakthrough applications, quantum machine learning, and the future of quantum-enhanced artificial intelligence.",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      icon: "⚛️",
      category: "Quantum AI",
      readTime: "22 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Healthcare Revolution 2025: Transforming Medicine with Artificial Intelligence",
      description: "Discover how AI is revolutionizing healthcare in 2025. Explore breakthrough applications in diagnosis, treatment, drug discovery, and patient care with real-world case studies.",
      href: "/blog/ai-healthcare-revolution-2025",
      icon: "🏥",
      category: "Healthcare AI",
      readTime: "18 min read",
      date: "Jan 28, 2025"
    }
  ];

  const newCaseStudies = [
    {
      title: "$200M AI Autonomous Manufacturing Success: Fortune 500 Transformation",
      description: "Discover how a Fortune 500 manufacturer achieved $200M in savings using autonomous AI systems. Learn the implementation strategy, challenges overcome, and ROI achieved.",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      icon: "💰",
      category: "Manufacturing AI",
      result: "$200M Savings",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Manufacturing Automation Breakthrough 2025: $200M Savings Case Study",
      description: "Discover how a Fortune 500 manufacturing company achieved $200M in savings through AI automation. Complete case study with implementation details, ROI analysis, and lessons learned.",
      href: "/case-studies/ai-manufacturing-automation-breakthrough-2025",
      icon: "🏭",
      category: "Manufacturing AI",
      result: "$200M Savings",
      date: "Jan 25, 2025"
    },
    {
      title: "Fortune 500 AI Transformation Success: $50M Savings & 300% ROI Case Study",
      description: "Discover how a Fortune 500 company achieved $50M in cost savings and 300% ROI through comprehensive AI transformation. Complete case study with implementation details.",
      href: "/case-studies/ai-transformation-fortune-500-success-2025",
      icon: "🏆",
      category: "Enterprise AI",
      result: "$50M Savings",
      date: "Jan 30, 2025"
    }
  ];

  const newResources = [
    {
      title: "AI Implementation Master Guide 2026: Complete Enterprise Framework",
      description: "The most comprehensive AI implementation guide available. 200+ pages of expert insights, practical frameworks, templates, and checklists to ensure your AI transformation succeeds.",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      category: "Master Guide",
      type: "Free Download",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Cybersecurity Checklist 2025: 150+ Security Items",
      description: "Comprehensive security checklist covering 150+ essential security measures for AI systems. Protect against adversarial attacks, data poisoning, and model theft.",
      href: "/resources/ai-cybersecurity-checklist-2025",
      icon: "🛡️",
      category: "Security",
      type: "Free Download",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Implementation Checklist 2025: 150+ Actionable Items",
      description: "Complete checklist covering every aspect of AI implementation from strategy to deployment, with 150+ actionable items across 7 key categories.",
      href: "/resources/ai-implementation-checklist-2025",
      icon: "📋",
      category: "Checklist",
      type: "Free Download",
      date: "Feb 08, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Content Showcase - Latest AI & Tech Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI articles, case studies, and resources. Stay ahead with expert insights on AI, cybersecurity, sustainability, and emerging technologies."
        keywords="AI content, tech resources, case studies, blog articles, AI guides, technology insights, expert analysis"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">📚 CONTENT SHOWCASE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Latest AI & Tech Content
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of expert insights, case studies, and resources. 
            Stay ahead with the latest trends in AI, cybersecurity, sustainability, and emerging technologies.
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
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
                <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 2025</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fresh AI & Tech Content Just Dropped
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
                New this week: AI Breakthrough Innovations 2025, Workforce Transformation Guide, 
                Sustainability Success Stories, and comprehensive implementation resources.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <h3 className="text-lg font-semibold mb-2">AI 2025: Breakthrough Innovations</h3>
                  <p className="text-sm opacity-90 mb-3">Revolutionary AI innovations transforming industries</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/blog/ai-workforce-transformation-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                  <h3 className="text-lg font-semibold mb-2">AI Workforce Transformation</h3>
                  <p className="text-sm opacity-90 mb-3">Complete reskilling strategies for the AI era</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                  <h3 className="text-lg font-semibold mb-2">AI Sustainability Success</h3>
                  <p className="text-sm opacity-90 mb-3">60% energy reduction and carbon neutrality</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                  <h3 className="text-lg font-semibold mb-2">Free AI Resources</h3>
                  <p className="text-sm opacity-90 mb-3">50+ implementation guides and templates</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Free Download</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                  <div className="text-6xl">🚀</div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      AI Innovations
                    </span>
                    <span className="text-gray-500 text-sm">28 min read</span>
                    <span className="text-gray-500 text-sm">•</span>
                    <span className="text-gray-500 text-sm">Jan 15, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    AI 2025: Breakthrough Innovations That Will Transform Everything
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Discover the revolutionary AI innovations of 2025 that are reshaping industries. 
                    From quantum AI to autonomous systems, explore the technologies defining the future.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-xs">ZT</span>
                      </div>
                      <span className="text-sm text-gray-600">Zion Tech Group</span>
                    </div>
                    <span className="text-purple-600 font-medium group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                </Link>
                <Link href="/blog/ai-workforce-transformation-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">👥</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Workforce Transformation 2025</h4>
                      <p className="text-sm text-gray-600">18 min read • New</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/ai-enterprise-transformation-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🏢</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Enterprise Transformation 2025</h4>
                      <p className="text-sm text-gray-600">18 min read • Popular</p>
                    </div>
                  </div>
                </Link>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                View All Articles
                <span>→</span>
              </Link>
            </div>

            {/* Case Studies */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Stories</h3>
              <p className="text-gray-600 mb-6">
                Real-world case studies showcasing how organizations achieved breakthrough 
                results with AI implementation.
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/case-studies/ai-sustainability-transformation-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🌱</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Sustainability Success</h4>
                      <p className="text-sm text-gray-600">60% energy reduction • New</p>
                    </div>
                  </div>
                </Link>
                <Link href="/case-studies/ai-cybersecurity-transformation-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🛡️</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Cybersecurity Success</h4>
                      <p className="text-sm text-gray-600">99.8% detection accuracy • New</p>
                    </div>
                  </div>
                </Link>
                <Link href="/case-studies/ai-automation-manufacturing-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🏭</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Manufacturing Success</h4>
                      <p className="text-sm text-gray-600">40% cost reduction</p>
                    </div>
                  </div>
                </Link>
              </div>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                View All Case Studies
                <span>→</span>
              </Link>
            </div>

            {/* Resources */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Free Resources</h3>
              <p className="text-gray-600 mb-6">
                Downloadable tools, checklists, and guides to accelerate your AI 
                transformation journey.
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/resources/ai-implementation-master-guide-2026" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">📖</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Implementation Master Guide 2026</h4>
                      <p className="text-sm text-gray-600">200+ pages • New</p>
                    </div>
                  </div>
                </Link>
                <Link href="/resources/ai-cybersecurity-checklist-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🛡️</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Cybersecurity Checklist 2025</h4>
                      <p className="text-sm text-gray-600">150+ items • New</p>
                    </div>
                  </div>
                </Link>
                <Link href="/resources/ai-workforce-transformation-playbook-2025" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">👥</div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">AI Workforce Transformation Playbook</h4>
                      <p className="text-sm text-gray-600">150+ pages • New</p>
                    </div>
                  </div>
                </Link>
              </div>
              <Link href="/resources" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                View All Resources
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/blog" className="group">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">Latest Articles</h3>
              <p className="text-gray-600 mb-4">Expert insights on AI trends, implementation strategies, and business transformation.</p>
              <div className="text-blue-600 font-medium group-hover:underline">Browse Articles →</div>
            </div>
          </Link>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/resources/ai-implementation-success-checklist-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                  <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-xs font-medium mb-3">
                    FREE DOWNLOAD
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    AI Implementation Checklist
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    150+ actionable items to ensure successful AI deployment and maximum ROI.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Checklist</span>
                    <span>150+ Items</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Complete implementation guide with 340% ROI and real case studies
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>18 min read</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">🔥 Trending</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-startup-funding-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">💰</div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-green-700 mb-1">Startup Strategy</div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">AI Startup Funding Guide 2025</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  From seed to Series A with $47B market insights and pitch templates
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>22 min read</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">📈 Rising</span>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-cost-optimization-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">⚡</div>
                  <div className="flex-1">
                    <div className="text-xs font-medium text-orange-700 mb-1">AI Engineering</div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">AI Cost Optimization 2025</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Ship faster, spend less with practical cost optimization strategies
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>9 min read</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">💡 Insight</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Latest Content</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
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
        </section>
      </div>
  );
}