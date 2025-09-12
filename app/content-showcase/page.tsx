import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import StructuredData from '../../components/StructuredData';

export default function ContentShowcasePage() {
  const newBlogPosts = [
    {
      title: "AI Workforce Transformation 2025: Reskilling Strategies for the AI Era",
      description: "Discover comprehensive strategies for transforming your workforce in the AI era. Learn about reskilling programs, new role creation, and how to prepare your team for AI integration.",
      href: "/blog/ai-workforce-transformation-2025",
      icon: "👥",
      category: "AI & Workforce",
      readTime: "18 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Data Privacy & Compliance 2025: Complete Guide to AI Privacy Regulations",
      description: "Navigate the complex landscape of AI data privacy regulations in 2025. Learn about GDPR, CCPA, and emerging AI-specific privacy laws with practical compliance strategies.",
      href: "/blog/ai-data-privacy-compliance-2025",
      icon: "🔒",
      category: "AI & Compliance",
      readTime: "22 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly AI Systems",
      description: "Discover how to build sustainable AI systems that reduce environmental impact while maintaining performance. Learn about green AI practices, energy optimization, and carbon-neutral AI deployment.",
      href: "/blog/ai-sustainability-green-tech-2025",
      icon: "🌱",
      category: "AI & Sustainability",
      readTime: "20 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Industry Disruption Analysis 2025: How AI is Reshaping Every Sector",
      description: "Comprehensive analysis of how AI is disrupting every industry in 2025. Real impact data, case studies, and actionable insights for business leaders across all sectors.",
      href: "/blog/ai-industry-disruption-analysis-2025",
      icon: "🏭",
      category: "AI Analysis",
      readTime: "25 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Trends 2025: Comprehensive Guide to the Future of Artificial Intelligence",
      description: "Discover the 15 most important AI trends shaping 2025. From multimodal AI to edge computing, get expert insights on breakthrough technologies and business opportunities.",
      href: "/blog/ai-trends-2025-comprehensive-guide",
      icon: "🔮",
      category: "AI Predictions",
      readTime: "28 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI 2025: Year Ahead Predictions",
      description: "Discover our expert predictions for AI in 2025. From breakthrough technologies to enterprise adoption trends, get insights that will shape your AI strategy.",
      href: "/blog/ai-2025-year-ahead-predictions",
      icon: "🔮",
      category: "AI Predictions",
      readTime: "18 min read",
      date: "Jan 15, 2025"
    }
  ];

  const newCaseStudies = [
    {
      title: "AI Sustainability Transformation: 60% Energy Reduction & Carbon Neutrality",
      description: "Discover how a Fortune 500 manufacturing company achieved 60% energy reduction and carbon neutrality through AI sustainability transformation. Complete case study with implementation details.",
      href: "/case-studies/ai-sustainability-transformation-2025",
      icon: "🏭",
      category: "AI & Sustainability",
      result: "60% Energy Reduction",
      date: "Jan 30, 2025"
    },
    {
      title: "Fortune 500 AI Transformation Success: $50M Savings & 300% ROI in 18 Months",
      description: "How a Fortune 500 manufacturing company achieved $50M in cost savings and 300% ROI through comprehensive AI transformation. Complete case study with implementation details and lessons learned.",
      href: "/case-studies/ai-transformation-fortune-500-success-2025",
      icon: "🏆",
      category: "Fortune 500 Success",
      result: "$50M Savings",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Manufacturing Automation Success: 40% Cost Reduction Achieved",
      description: "How a Fortune 500 manufacturing company transformed their operations with AI automation, achieving unprecedented cost savings and efficiency gains while maintaining the highest quality standards.",
      href: "/case-studies/ai-manufacturing-automation-success-2025",
      icon: "🏭",
      category: "Manufacturing",
      result: "40% Cost Reduction",
      date: "Jan 20, 2025"
    },
    {
      title: "AI Retail Transformation Success: 300% Revenue Growth",
      description: "How a major retail chain achieved 300% revenue growth through AI-powered personalization, inventory optimization, and customer experience enhancement.",
      href: "/case-studies/ai-retail-transformation-2025",
      icon: "🛒",
      category: "Retail AI",
      result: "300% Growth",
      date: "Feb 03, 2025"
    }
  ];

  const newResources = [
    {
      title: "AI Workforce Transformation Playbook 2025: Complete 150+ Page Resource",
      description: "Complete 150+ page resource with proven strategies, templates, checklists, and best practices for successful AI workforce transformation in any organization.",
      href: "/resources/ai-workforce-transformation-playbook-2025",
      icon: "👥",
      category: "Workforce Development",
      type: "Free Download",
      date: "Jan 30, 2025"
    },
    {
      title: "Green AI Implementation Guide 2025: Build Sustainable AI Systems",
      description: "Download our comprehensive 120+ page Green AI Implementation Guide with strategies for building sustainable AI systems that reduce environmental impact by 60%.",
      href: "/resources/green-ai-implementation-guide-2025",
      icon: "🌱",
      category: "AI & Sustainability",
      type: "Free Download",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Implementation Master Guide 2025: Complete 200+ Page Resource",
      description: "Complete 200+ page resource with proven strategies, templates, checklists, and best practices for successful AI implementation in any organization.",
      href: "/resources/ai-implementation-master-guide-2025",
      icon: "📚",
      category: "Master Guide",
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
    <ErrorBoundary>
      <SEO
        title="Latest AI & Tech Content Showcase - Zion Tech Group"
        description="Discover Zion Tech Group's newest blog posts, case studies, and free resources on AI, cloud, and digital transformation. Stay informed with our expert insights."
        keywords="AI content, tech articles, case studies, free resources, AI blog, digital transformation, Zion Tech Group"
        url="/content-showcase"
      />
      <StructuredData
        type="WebPage"
        data={{
          headline: "Latest AI & Tech Content Showcase",
          description: "Discover Zion Tech Group's newest blog posts, case studies, and free resources on AI, cloud, and digital transformation. Stay informed with our expert insights.",
          url: "https://zion.app/content-showcase",
          publisher: {
            "@type": "Organization",
            name: "Zion Tech Group",
            logo: {
              "@type": "ImageObject",
              url: "https://zion.app/images/zion-tech-group-logo.png"
            }
          }
        }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🚀 FRESH CONTENT</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Content Showcase
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover our latest AI insights, case studies, and resources. From cutting-edge 
                research to real-world success stories, find everything you need to accelerate 
                your AI transformation in 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/blog"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                >
                  Browse All Articles
                </Link>
                <Link
                  href="/resources"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg"
                >
                  Download Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Banner */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 30, 2025</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                🚀 Fresh AI & Business Content Just Dropped
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                New this week: AI Workforce Transformation, Data Privacy Compliance, Green AI Sustainability, 
                and comprehensive implementation guides. Expert insights to accelerate your growth in 2025.
              </p>
            </div>

            {/* Featured Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog/ai-workforce-transformation-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">👥</div>
                  <h3 className="text-lg font-semibold mb-2">AI Workforce Transformation 2025</h3>
                  <p className="text-sm opacity-90 mb-3">Reskilling strategies for the AI era</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-data-privacy-compliance-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔒</div>
                  <h3 className="text-lg font-semibold mb-2">AI Data Privacy & Compliance 2025</h3>
                  <p className="text-sm opacity-90 mb-3">Complete guide to AI privacy regulations</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>22 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                  <h3 className="text-lg font-semibold mb-2">AI Sustainability & Green Tech 2025</h3>
                  <p className="text-sm opacity-90 mb-3">Building eco-friendly AI systems</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>20 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/case-studies/ai-sustainability-transformation-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏭</div>
                  <h3 className="text-lg font-semibold mb-2">AI Sustainability Success Story</h3>
                  <p className="text-sm opacity-90 mb-3">60% energy reduction, carbon neutrality</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Content Categories */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find the content that matters most to your role and industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Articles */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Blog Articles</h3>
                  <p className="text-gray-600">Expert insights and analysis on AI trends, implementation, and best practices</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Articles:</span>
                    <span className="font-semibold text-blue-600">80+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">New This Month:</span>
                    <span className="font-semibold text-green-600">15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average Read Time:</span>
                    <span className="font-semibold text-purple-600">18 min</span>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Browse Articles
                </Link>
              </div>

              {/* Case Studies */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Case Studies</h3>
                  <p className="text-gray-600">Real-world success stories and detailed implementation examples</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Case Studies:</span>
                    <span className="font-semibold text-green-600">30+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average ROI:</span>
                    <span className="font-semibold text-green-600">340%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Industries Covered:</span>
                    <span className="font-semibold text-purple-600">15+</span>
                  </div>
                </div>
                <Link
                  href="/case-studies"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  View Case Studies
                </Link>
              </div>

              {/* Resources */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Resources</h3>
                  <p className="text-gray-600">Templates, checklists, guides, and tools to accelerate your AI journey</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Resources:</span>
                    <span className="font-semibold text-purple-600">60+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Downloads:</span>
                    <span className="font-semibold text-green-600">30K+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Free Downloads:</span>
                    <span className="font-semibold text-blue-600">100%</span>
                  </div>
                </div>
                <Link
                  href="/resources"
                  className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Download Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay up-to-date with our latest insights and analysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newBlogPosts.map((post, index) => (
                <Link key={index} href={post.href} className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                      <div className="text-8xl">{post.icon}</div>
                      <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        NEW
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{post.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {post.description}
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
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                View All Articles
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Case Studies
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real success stories from companies that transformed with AI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newCaseStudies.map((study, index) => (
                <Link key={index} href={study.href} className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                      <div className="text-8xl">{study.icon}</div>
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        NEW
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                          {study.category}
                        </span>
                        <span className="text-gray-500 text-sm">Case Study</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{study.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {study.description}
                      </p>
                      <div className="grid grid-cols-1 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{study.result}</div>
                          <div className="text-sm text-gray-600">Achieved Result</div>
                        </div>
                      </div>
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
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
              >
                View All Case Studies
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Free tools, templates, and guides to accelerate your AI journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newResources.map((resource, index) => (
                <Link key={index} href={resource.href} className="group">
                  <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">{resource.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-semibold text-purple-600">{resource.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-semibold text-green-600">{resource.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Published:</span>
                        <span className="font-semibold text-blue-600">{resource.date}</span>
                      </div>
                    </div>
                    <div className="w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold group-hover:bg-purple-700 transition-colors">
                      Download Free
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
              >
                View All Resources
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated with Our Latest Content
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get weekly updates on AI trends, implementation guides, and exclusive content 
                delivered straight to your inbox. Join 10,000+ AI professionals.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  No spam. Unsubscribe anytime. We respect your privacy.
                </p>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  <strong>What you'll get:</strong> Weekly AI insights, exclusive case studies, 
                  free resources, and early access to new content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}