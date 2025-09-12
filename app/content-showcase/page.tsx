import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import StructuredData from '../../components/StructuredData';

export default function ContentShowcasePage() {
  const featuredContent = [
    {
      title: "AI 2025 Year in Review: The Complete Analysis",
      description: "Comprehensive analysis of AI breakthroughs, trends, and transformations that shaped 2025. Expert insights on what worked, what didn't, and what's next.",
      href: "/blog/ai-2025-year-in-review",
      icon: "📊",
      category: "AI Analysis",
      readTime: "25 min read",
      date: "Jan 30, 2025",
      featured: true
    },
    {
      title: "AI 2025 Breakthrough Trends: The 10 Most Revolutionary Developments",
      description: "Discover the 10 most revolutionary AI developments that are reshaping industries in 2025. From multimodal AI to edge computing, see what's driving the future.",
      href: "/blog/ai-2025-breakthrough-trends",
      icon: "🚀",
      category: "AI Trends",
      readTime: "22 min read",
      date: "Jan 30, 2025",
      featured: true
    },
    {
      title: "AI Automation Implementation Playbook 2025",
      description: "200+ pages of frameworks, templates, and step-by-step guides for AI automation success. Everything you need to transform your business with intelligent automation.",
      href: "/resources/ai-automation-implementation-playbook-2025",
      icon: "📚",
      category: "Implementation Guide",
      readTime: "200+ pages",
      date: "Jan 30, 2025",
      featured: true,
      type: "Free Download"
    },
    {
      title: "AI Financial Services Transformation: $50M Cost Savings Case Study",
      description: "How a Fortune 500 financial services company achieved $50M cost savings and 300% efficiency gains through comprehensive AI transformation.",
      href: "/case-studies/ai-financial-services-transformation-2025",
      icon: "🏦",
      category: "Case Study",
      readTime: "15 min read",
      date: "Jan 30, 2025",
      featured: true,
      result: "$50M Savings"
    }
  ];

  const latestArticles = [
    {
      title: "AI Workforce Transformation 2025",
      description: "Reskilling strategies for the AI era with practical implementation guides and real-world examples.",
      href: "/blog/ai-workforce-transformation-2025",
      icon: "👥",
      category: "AI Strategy",
      readTime: "18 min read",
      date: "Jan 29, 2025"
    },
    {
      title: "AI Data Privacy & Compliance 2025",
      description: "Complete guide to AI privacy regulations and compliance frameworks for enterprise deployment.",
      href: "/blog/ai-data-privacy-compliance-2025",
      icon: "🔒",
      category: "Compliance",
      readTime: "22 min read",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Sustainability & Green Tech 2025",
      description: "Building eco-friendly AI systems with 60% energy reduction and carbon neutrality strategies.",
      href: "/blog/ai-sustainability-green-tech-2025",
      icon: "🌱",
      category: "Sustainability",
      readTime: "20 min read",
      date: "Jan 27, 2025"
    },
    {
      title: "AI Customer Support Automation 2025",
      description: "80% faster response times and 60% cost reduction through intelligent customer service automation.",
      href: "/blog/ai-customer-support-automation-2025",
      icon: "🎧",
      category: "Customer Service",
      readTime: "12 min read",
      date: "Jan 26, 2025"
    },
    {
      title: "LLM Guardrails in Production 2025",
      description: "Safety without blocking delivery - implementing effective guardrails for production LLM systems.",
      href: "/blog/llm-guardrails-in-production-2025",
      icon: "🛡️",
      category: "AI Safety",
      readTime: "8 min read",
      date: "Jan 25, 2025"
    },
    {
      title: "Edge AI: Privacy by Design 2025",
      description: "On-device intelligence for instant, compliant customer experiences with privacy-first architecture.",
      href: "/blog/edge-ai-privacy-by-design-2025",
      icon: "🔐",
      category: "Edge Computing",
      readTime: "7 min read",
      date: "Jan 24, 2025"
    }
  ];

  const caseStudies = [
    {
      title: "AI Manufacturing Automation Success",
      description: "Fortune 500 manufacturing company achieves 40% cost reduction and 60% faster processing through intelligent automation.",
      href: "/case-studies/ai-manufacturing-automation-success-2025",
      icon: "🏭",
      category: "Manufacturing",
      result: "40% Cost Reduction",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Retail Personalization Success",
      description: "Major retail chain achieves 300% revenue growth through AI-powered personalization and customer experience enhancement.",
      href: "/case-studies/ai-retail-personalization-success-2025",
      icon: "🛍️",
      category: "Retail",
      result: "300% Revenue Growth",
      date: "Jan 26, 2025"
    },
    {
      title: "AI Healthcare Diagnosis Breakthrough",
      description: "Regional hospital system achieves 98% diagnostic accuracy and 70% reduction in wait times through AI implementation.",
      href: "/case-studies/ai-healthcare-diagnosis-breakthrough-2025",
      icon: "🏥",
      category: "Healthcare",
      result: "98% Accuracy",
      date: "Jan 24, 2025"
    }
  ];

  const resources = [
    {
      title: "AI Implementation Master Guide 2025",
      description: "Complete 150+ page resource with templates, checklists, and best practices for successful AI implementation.",
      href: "/resources/ai-implementation-master-guide-2025",
      icon: "📚",
      category: "Master Guide",
      type: "Free Download",
      pages: "150+ pages",
      date: "Jan 30, 2025"
    },
    {
      title: "AI ROI Calculator 2025",
      description: "Calculate potential return on investment for AI projects with our comprehensive ROI calculator tool.",
      href: "/resources/ai-roi-calculator-2025",
      icon: "💰",
      category: "Calculator",
      type: "Free Tool",
      pages: "Interactive",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Implementation Checklist 2025",
      description: "Step-by-step checklist for successful AI implementation with 150+ actionable items and best practices.",
      href: "/resources/ai-implementation-checklist-2025",
      icon: "📋",
      category: "Checklist",
      type: "Free Download",
      pages: "150+ items",
      date: "Jan 26, 2025"
    },
    {
      title: "AI Security Hardening Checklist",
      description: "Comprehensive security checklist covering 12 key areas and 80+ essential security measures for AI systems.",
      href: "/resources/ai-security-hardening-checklist",
      icon: "🛡️",
      category: "Security",
      type: "Free Download",
      pages: "80+ items",
      date: "Jan 24, 2025"
    }
  ];

  return (
    <ErrorBoundary>
      <SEO
        title="Content Showcase - Latest AI & Technology Resources | Zion Tech Group"
        description="Explore our comprehensive collection of AI articles, case studies, and resources. Stay ahead with the latest insights in artificial intelligence and technology."
        keywords="AI content, technology resources, AI articles, case studies, AI guides, technology insights"
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
        <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">✨ JUST PUBLISHED - JANUARY 2025</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                🚀 Fresh AI & Tech Content Just Dropped
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                New this week: AI 2025 Year in Review, Breakthrough Trends Analysis, Implementation Playbook, 
                and Fortune 500 Success Story. Expert insights to accelerate your growth.
              </p>
            </div>

            {/* Featured Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredContent.map((item, index) => (
                <Link key={index} href={item.href} className="group">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{item.description}</p>
                    <div className="flex items-center text-xs opacity-75">
                      <span>{item.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{item.featured ? 'Featured' : item.type || 'New'}</span>
                    </div>
                  </div>
                </Link>
              ))}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Blog Articles */}
              <Link href="/blog" className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Blog Articles</h3>
                  <p className="text-gray-600 mb-6">Expert insights and analysis on AI trends, implementation, and best practices</p>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Articles:</span>
                      <span className="font-semibold text-blue-600">75+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">New This Month:</span>
                      <span className="font-semibold text-green-600">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average Read Time:</span>
                      <span className="font-semibold text-purple-600">15 min</span>
                    </div>
                  </div>
                  <div className="text-blue-600 font-medium group-hover:underline">
                    Browse Articles →
                  </div>
                </div>
              </Link>

              {/* Case Studies */}
              <Link href="/case-studies" className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Case Studies</h3>
                  <p className="text-gray-600 mb-6">Real-world success stories and detailed implementation examples</p>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Case Studies:</span>
                      <span className="font-semibold text-green-600">25+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average ROI:</span>
                      <span className="font-semibold text-green-600">340%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Industries Covered:</span>
                      <span className="font-semibold text-purple-600">12+</span>
                    </div>
                  </div>
                  <div className="text-green-600 font-medium group-hover:underline">
                    View Case Studies →
                  </div>
                </div>
              </Link>

              {/* Resources */}
              <Link href="/resources" className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">Free Resources</h3>
                  <p className="text-gray-600 mb-6">Templates, checklists, guides, and tools to accelerate your AI journey</p>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Resources:</span>
                      <span className="font-semibold text-purple-600">50+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Downloads:</span>
                      <span className="font-semibold text-green-600">25K+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Free Downloads:</span>
                      <span className="font-semibold text-blue-600">100%</span>
                    </div>
                  </div>
                  <div className="text-purple-600 font-medium group-hover:underline">
                    Download Resources →
                  </div>
                </div>
              </Link>

              {/* Services */}
              <Link href="/services" className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Services</h3>
                  <p className="text-gray-600 mb-6">Professional AI consulting and implementation services</p>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Service Areas:</span>
                      <span className="font-semibold text-orange-600">8+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Success Rate:</span>
                      <span className="font-semibold text-green-600">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Client Satisfaction:</span>
                      <span className="font-semibold text-blue-600">98%</span>
                    </div>
                  </div>
                  <div className="text-orange-600 font-medium group-hover:underline">
                    Explore Services →
                  </div>
                </div>
              </Link>
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
              {latestArticles.map((article, index) => (
                <Link key={index} href={article.href} className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center relative">
                      <div className="text-8xl">{article.icon}</div>
                      <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        NEW
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">{article.readTime}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-500 text-sm">{article.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {article.description}
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
              {caseStudies.map((study, index) => (
                <Link key={index} href={study.href} className="group">
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                      <div className="text-8xl">{study.icon}</div>
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        SUCCESS
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
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
                        <span className="text-gray-600">Size:</span>
                        <span className="font-semibold text-blue-600">{resource.pages}</span>
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