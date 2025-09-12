// @ts-nocheck
import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcasePage() {
  const newBlogPosts = [
    {
      title: "AI Breakthrough Innovations 2025: Revolutionary Technologies Shaping the Future",
      description: "Discover the most groundbreaking AI innovations of 2025. From AGI breakthroughs to quantum AI, explore technologies that are reshaping industries and creating unprecedented opportunities.",
      href: "/blog/ai-2025-breakthrough-innovations",
      icon: "🧠",
      category: "AI Innovations",
      readTime: "25 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Trends 2025: 15 Predictions That Will Shape the Future of Technology",
      description: "Discover the most important AI trends and predictions for 2025. From AGI breakthroughs to quantum AI, explore what's coming next in artificial intelligence.",
      href: "/blog/ai-2025-trends-predictions",
      icon: "🔮",
      category: "AI Predictions",
      readTime: "28 min read",
      date: "Jan 30, 2025"
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
    }
  ];

  const newCaseStudies = [
    {
      title: "Fortune 500 AI Transformation Success: $50M Savings & 300% ROI Case Study",
      description: "Discover how a Fortune 500 company achieved $50M in cost savings and 300% ROI through comprehensive AI transformation. Complete case study with implementation details.",
      href: "/case-studies/ai-transformation-fortune-500-success-2025",
      icon: "🏆",
      category: "Enterprise AI",
      result: "$50M Savings",
      date: "Jan 30, 2025"
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
      title: "AI Implementation Master Guide 2025: Complete 150+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide for 2025. Step-by-step instructions, templates, checklists, and best practices for successful AI deployment.",
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
=======
>>>>>>> cursor/create-and-deploy-new-content-fa2c

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Content Showcase - Complete Knowledge Hub | Zion Tech Group"
        description="Explore our complete library of AI resources: 50+ expert articles, 25+ success stories, 30+ implementation guides, and exclusive tools. Everything you need to master AI in 2025."
        keywords="AI content, AI resources, AI articles, AI case studies, AI guides, AI knowledge hub, AI implementation"
        url="/content-showcase"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 text-sm font-medium mb-6">
            📚 COMPREHENSIVE RESOURCES
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🎯 Complete AI Knowledge Hub
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Access our complete library of AI resources: 50+ expert articles, 25+ success stories, 
            30+ implementation guides, and exclusive tools. Everything you need to master AI in 2025.
          </p>
        </div>

        {/* Featured Content */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🔥 Latest Breakthrough Content
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Our newest and most impactful content featuring AI 2026 predictions, enterprise success stories, 
                and comprehensive implementation roadmaps to accelerate your AI transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/ai-2026-future-predictions-and-trends" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔮</div>
                  <h3 className="text-lg font-semibold mb-2">AI 2026: Future Predictions</h3>
                  <p className="text-sm opacity-90 mb-3">Quantum AI, brain-computer interfaces, AGI breakthroughs - the future of AI</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span className="bg-red-500 px-2 py-1 rounded-full">Hot</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/blog/ai-2025-enterprise-ai-transformation-success" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💼</div>
                  <h3 className="text-lg font-semibold mb-2">Enterprise AI Success Stories</h3>
                  <p className="text-sm opacity-90 mb-3">How Fortune 500 companies achieved 300% ROI through strategic AI implementation</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>15 min read</span>
                    <span className="mx-2">•</span>
                    <span className="bg-green-500 px-2 py-1 rounded-full">New</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/resources/ai-2026-implementation-roadmap" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🗺️</div>
                  <h3 className="text-lg font-semibold mb-2">AI 2026 Implementation Roadmap</h3>
                  <p className="text-sm opacity-90 mb-3">Complete step-by-step guide for successful AI implementation in 2026</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>25 min read</span>
                    <span className="mx-2">•</span>
                    <span className="bg-blue-500 px-2 py-1 rounded-full">Guide</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* New Content Spotlight */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ✨ Just Released - January 30, 2025
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh insights and breakthrough content to keep you ahead of the AI curve
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/ai-2025-enterprise-readiness" className="group">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
                <h3 className="text-lg font-semibold mb-2">AI Enterprise Readiness 2025</h3>
                <p className="text-sm text-gray-600 mb-3">Complete assessment & implementation guide with 340% ROI</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>18 min read</span>
                    <span className="mx-2">•</span>
                    <span>🔥 NEW</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/case-studies/ai-enterprise-workflow-automation-success-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                  <h3 className="text-lg font-semibold mb-2">Enterprise Workflow Success</h3>
                  <p className="text-sm opacity-90 mb-3">Fortune 500 company achieves $12M savings with 10x efficiency</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>🌟 NEW</span>
                  </div>
                </div>
              </Link>
              
              <Link href="/services/ai-automation-consulting" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💼</div>
                  <h3 className="text-lg font-semibold mb-2">AI Automation Consulting</h3>
                  <p className="text-sm opacity-90 mb-3">Expert implementation services with guaranteed ROI</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Service</span>
                    <span className="mx-2">•</span>
                    <span>✨ NEW</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  The ultimate 150-page guide for AI implementation success. Includes step-by-step 
                  roadmaps, best practices, tools, templates, and real-world case studies to 
                  transform your organization with AI.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span>150 pages</span>
                    <span className="mx-2">•</span>
                    <span>45 min read</span>
                    <span className="mx-2">•</span>
                    <span>🎯 Essential</span>
                  </div>
                  <div className="text-blue-600 font-medium group-hover:underline">Download Guide →</div>
                </div>
              </div>
            </Link>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Resource Library</h3>
              <p className="text-gray-700 mb-4">
                Access our complete collection of AI resources including implementation guides, 
                checklists, templates, tools, and frameworks to accelerate your AI journey.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Implementation Guides</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Master Implementation Guide</li>
                    <li>• Industry-Specific Guides</li>
                    <li>• Technology Stack Guides</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tools & Templates</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Project Templates</li>
                    <li>• Assessment Checklists</li>
                    <li>• ROI Calculators</li>
                  </ul>
                </div>
              </div>
              <Link
                href="/resources"
                className="inline-flex items-center text-purple-600 font-medium hover:underline mt-4"
              >
                Explore All Resources →
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
              </Link>

              <Link href="/resources/ai-implementation-master-guide-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📚</div>
                  <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-medium mb-3">
                    COMPREHENSIVE
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    AI Implementation Master Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete 150+ page guide covering every aspect of AI implementation.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Guide</span>
                    <span>150+ Pages</span>
                  </div>
                </div>
              </Link>

              <Link href="/resources/ai-transformation-master-guide-2025" className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-medium mb-3">
                    TRANSFORMATION
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                    AI Transformation Guide
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete roadmap for enterprise-wide AI transformation and digital change.
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Roadmap</span>
                    <span>Enterprise</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Content Categories */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">📂 Content Categories</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📝</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Articles & Insights</h3>
                  <p className="text-gray-600 text-sm mb-4">Expert analysis and insights on AI trends</p>
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-xs text-gray-500">Articles</div>
                </div>
              </Link>

              <Link href="/case-studies" className="group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Stories</h3>
                  <p className="text-gray-600 text-sm mb-4">Real-world AI transformation results</p>
                  <div className="text-2xl font-bold text-green-600">25+</div>
                  <div className="text-xs text-gray-500">Case Studies</div>
                </div>
              </Link>

              <Link href="/resources" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Guides</h3>
                  <p className="text-gray-600 text-sm mb-4">Step-by-step implementation resources</p>
                  <div className="text-2xl font-bold text-purple-600">30+</div>
                  <div className="text-xs text-gray-500">Guides</div>
                </div>
              </Link>

              <Link href="/tools" className="group">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tools & Calculators</h3>
                  <p className="text-gray-600 text-sm mb-4">Interactive AI tools and calculators</p>
                  <div className="text-2xl font-bold text-orange-600">10+</div>
                  <div className="text-xs text-gray-500">Tools</div>
                </div>
              </Link>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">📧 Stay Updated with AI Insights</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Get weekly updates on AI trends, implementation guides, and exclusive content 
                delivered straight to your inbox. Join 10,000+ AI professionals.
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
      </div>
    </div>
  );
}

