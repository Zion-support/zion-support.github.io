// @ts-nocheck
import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import StructuredData from '../../components/StructuredData';
import ErrorBoundary from '../../components/ErrorBoundary';
import { BookOpen, Briefcase, Download, TrendingUp, Lightbulb, Shield, Factory, DollarSign } from 'lucide-react';

export default function ContentShowcasePage() {
  const newBlogPosts = [
    {
      title: "AI 2025: The Year Ahead - 15 Predictions That Will Shape Technology",
      description: "Discover the 15 most important AI predictions for 2025, from AGI breakthroughs to enterprise transformation. Expert insights on what's coming next.",
      href: "/blog/ai-2025-year-ahead-predictions",
      icon: "🤖",
      category: "AI Predictions",
      readTime: "25 min read",
      date: "Jan 15, 2025",
      featured: true
    },
    {
      title: "AI Automation Enterprise Success Stories 2025: Real Results from Fortune 500 Companies",
      description: "Discover how Fortune 500 companies achieved 300% ROI with AI automation. Real case studies, implementation strategies, and actionable insights for enterprise transformation.",
      href: "/blog/ai-automation-enterprise-success-2025",
      icon: "🏢",
      category: "Enterprise AI",
      readTime: "18 min read",
      date: "Jan 20, 2025",
      featured: true
    },
    {
      title: "AI Implementation Success Framework 2025: From Strategy to Governance",
      description: "Discover Zion Tech Group's comprehensive AI Implementation Success Framework for 2025. Learn how to navigate strategy, data, talent, and governance for successful AI adoption.",
      href: "/blog/ai-implementation-success-framework-2025",
      icon: "✅",
      category: "AI Strategy",
      readTime: "18 min read",
      date: "Feb 01, 2025"
    },
    {
      title: "AI Multimodal Applications 2025: Beyond Text to Vision and Audio",
      description: "Complete guide to building multimodal AI systems that process text, images, audio, and video for enhanced user experiences and business applications.",
      href: "/blog/ai-multimodal-applications-2025",
      icon: "🎭",
      category: "AI Technology",
      readTime: "12 min read",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Cybersecurity Threats 2025: Defending Against Next-Gen Attacks",
      description: "Comprehensive analysis of emerging AI-powered cyber threats and defense strategies to protect your organization in 2025.",
      href: "/blog/ai-cybersecurity-threats-2025",
      icon: "🛡️",
      category: "Cybersecurity",
      readTime: "20 min read",
      date: "Jan 30, 2025"
    }
  ];

  const newCaseStudies = [
    {
      title: "AI Healthcare Diagnosis Breakthrough 2025: 95% Accuracy Case Study",
      description: "How a leading healthcare system achieved 95% diagnostic accuracy, 80% faster processing, and $50M in cost savings through strategic AI implementation.",
      href: "/case-studies/ai-healthcare-diagnosis-breakthrough-2025",
      icon: "🏥",
      category: "Healthcare AI",
      result: "95% Accuracy",
      date: "Jan 25, 2025",
      featured: true
    },
    {
      title: "AI Transformation Enterprise Success 2025: Fortune 500 Case Study",
      description: "Explore a Fortune 500 enterprise's successful AI transformation journey with Zion Tech Group, achieving 300% efficiency gains and $50M in cost savings.",
      href: "/case-studies/ai-transformation-enterprise-success-2025",
      icon: "🏆",
      category: "Enterprise AI",
      result: "$50M Savings",
      date: "Feb 05, 2025"
    },
    {
      title: "AI Retail Transformation Success: 300% Revenue Growth",
      description: "How a major retail chain achieved 300% revenue growth through AI-powered personalization, inventory optimization, and customer experience enhancement.",
      href: "/case-studies/ai-retail-transformation-2025",
      icon: "🛒",
      category: "Retail AI",
      result: "300% Growth",
      date: "Feb 03, 2025"
    },
    {
      title: "AI Manufacturing Automation: 40% Cost Reduction Success",
      description: "Fortune 500 manufacturing company achieves 40% cost reduction and 60% faster processing through intelligent automation and predictive maintenance.",
      href: "/case-studies/ai-manufacturing-automation-success-2025",
      icon: "🏭",
      category: "Manufacturing",
      result: "40% Cost Reduction",
      date: "Feb 01, 2025"
    }
  ];

  const newResources = [
    {
      title: "AI Enterprise Readiness Assessment 2025 - Free Download",
      description: "Evaluate your organization's AI capabilities with our comprehensive assessment tool. Identify strengths, gaps, and opportunities to create a strategic roadmap for AI transformation.",
      href: "/resources/ai-enterprise-readiness-assessment-2025",
      icon: "📊",
      category: "Assessment",
      type: "Free Download",
      date: "Jan 22, 2025",
      featured: true
    },
    {
      title: "AI Implementation Master Guide 2025 - Complete Enterprise Playbook",
      description: "Download our comprehensive AI implementation master guide. 300+ pages of strategies, frameworks, and best practices for successful enterprise AI deployment in 2025.",
      href: "/resources/ai-implementation-master-guide-2025",
      icon: "📚",
      category: "Master Guide",
      type: "Free Download",
      date: "Jan 25, 2025",
      featured: true
    },
    {
      title: "AI Implementation Checklist 2025: 150+ Actionable Items",
      description: "Complete checklist covering every aspect of AI implementation from strategy to deployment, with 150+ actionable items across 7 key categories.",
      href: "/resources/ai-implementation-checklist-2025",
      icon: "📋",
      category: "Checklist",
      type: "Free Download",
      date: "Feb 08, 2025"
    },
    {
      title: "AI Security Hardening Checklist: Essential Security Measures",
      description: "Comprehensive security checklist covering 12 key areas and 80+ essential security measures for AI systems and deployments.",
      href: "/resources/ai-security-hardening-checklist",
      icon: "🛡️",
      category: "Security",
      type: "Free Download",
      date: "Feb 06, 2025"
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
                <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                🚀 Fresh AI & Tech Content Just Dropped
              </h2>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
                New this week: AI 2025 Predictions, Implementation Success Framework, Enterprise Transformation Case Study, 
                and our comprehensive 150-page AI Transformation Playbook. Expert insights to accelerate your growth.
              </p>
            </div>

            {/* Featured Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog/ai-2025-predictions" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                  <h3 className="text-lg font-semibold mb-2">AI 2025 Predictions</h3>
                  <p className="text-sm opacity-90 mb-3">The future of AI: AGI breakthroughs, enterprise adoption, and industry transformation</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-implementation-success-framework-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                  <h3 className="text-lg font-semibold mb-2">AI Implementation Framework</h3>
                  <p className="text-sm opacity-90 mb-3">7-step process that guarantees 340% ROI and successful AI transformation</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>30 min read</span>
                    <span className="mx-2">•</span>
                    <span>Essential</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-transformation-enterprise-success-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
                  <h3 className="text-lg font-semibold mb-2">Enterprise AI Success</h3>
                  <p className="text-sm opacity-90 mb-3">Fortune 500 case study: 340% ROI and $50M in cost savings</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-transformation-playbook-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                  <h3 className="text-lg font-semibold mb-2">AI Transformation Playbook</h3>
                  <p className="text-sm opacity-90 mb-3">150+ page complete implementation guide with templates</p>
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

        {/* Content Filtering */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Filter Content by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find the content that matters most to your role and industry
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                All Content
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                AI Predictions
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Enterprise AI
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Healthcare AI
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Free Resources
              </button>
              <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Case Studies
              </button>
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
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Blog Articles</h3>
                  <p className="text-gray-600">Expert insights and analysis on AI trends, implementation, and best practices</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Articles:</span>
                    <span className="font-semibold text-blue-600">75+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">New This Month:</span>
                    <span className="font-semibold text-green-600">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average Read Time:</span>
                    <span className="font-semibold text-purple-600">15 min</span>
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
                    <Briefcase className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Case Studies</h3>
                  <p className="text-gray-600">Real-world success stories and detailed implementation examples</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Case Studies:</span>
                    <span className="font-semibold text-green-600">25+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average ROI:</span>
                    <span className="font-semibold text-green-600">340%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Industries Covered:</span>
                    <span className="font-semibold text-purple-600">12+</span>
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
                    <Download className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Resources</h3>
                  <p className="text-gray-600">Templates, checklists, guides, and tools to accelerate your AI journey</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Resources:</span>
                    <span className="font-semibold text-purple-600">50+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Downloads:</span>
                    <span className="font-semibold text-green-600">25K+</span>
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