import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> bulk-merge-20250912-100339
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
                <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Fresh AI & Tech Content Just Dropped
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
                New this week: AI 2025 Year in Review, Workforce Transformation, 
                Sustainability Success Stories, and Cybersecurity Case Studies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog/ai-2025-year-in-review" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📊</div>
                  <h3 className="text-lg font-semibold mb-2">AI 2025 Year in Review</h3>
                  <p className="text-sm opacity-90 mb-3">Comprehensive analysis of AI breakthroughs and trends</p>
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

              <Link href="/case-studies/ai-cybersecurity-transformation-2025" className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛡️</div>
                  <h3 className="text-lg font-semibold mb-2">AI Cybersecurity Success</h3>
                  <p className="text-sm opacity-90 mb-3">99.8% threat detection accuracy achieved</p>
                  <div className="flex items-center text-xs opacity-75">
                    <span>Case Study</span>
                    <span className="mx-2">•</span>
                    <span>New</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/ai-2025-breakthrough-innovations" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                <h3 className="text-lg font-semibold mb-2">AI 2025: Breakthrough Innovations</h3>
                <p className="text-sm opacity-90 mb-3">Revolutionary AI innovations transforming industries</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>28 min read</span>
                  <span className="mx-2">•</span>
                  <span>NEW</span>
                </div>
            </Link>
            
            <Link href="/case-studies/ai-enterprise-transformation-breakthrough-2025" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                <h3 className="text-lg font-semibold mb-2">Enterprise AI: $50M Success</h3>
                <p className="text-sm opacity-90 mb-3">Fortune 500 company achieves unprecedented growth</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Case Study</span>
                  <span className="mx-2">•</span>
                  <span>NEW</span>
                </div>
              </div>
            </Link>
            
            <Link href="/resources/ai-2025-complete-implementation-playbook" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
                <h3 className="text-lg font-semibold mb-2">AI Implementation Playbook</h3>
                <p className="text-sm opacity-90 mb-3">250+ page guide with templates and frameworks</p>
                <div className="flex items-center text-xs opacity-75">
                  <span>Free Download</span>
                  <span className="mx-2">•</span>
                  <span>NEW</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

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
<<<<<<< HEAD
=======
                    <span className="text-gray-500 text-sm">18 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    AI Cybersecurity Threats 2025
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Protecting against next-gen attacks, adversarial AI, and deepfakes. 
                    Comprehensive defense strategies.
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center relative">
                  <div className="text-8xl">🌱</div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    TRENDING
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                      Sustainability
                    </span>
                    <span className="text-gray-500 text-sm">20 min read</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    AI Sustainability & Green Tech
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Building eco-friendly AI systems that reduce carbon footprint while maintaining 
                    performance.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/ai-enterprise-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Enterprise AI
                  </span>
                  <span className="text-gray-500 text-sm">18 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Enterprise Transformation 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete implementation guide with 340% ROI and real case studies for enterprise AI adoption.
                </p>
              </div>
            </Link>

            <Link href="/blog/ai-startup-funding-guide-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Startup Strategy
                  </span>
                  <span className="text-gray-500 text-sm">22 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  AI Startup Funding Guide 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  From seed to Series A with $47B market insights and pitch templates for AI startups.
                </p>
              </div>
            </Link>

            <Link href="/blog/cloud-native-architecture-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    Cloud & DevOps
                  </span>
                  <span className="text-gray-500 text-sm">15 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                  Cloud-Native Architecture 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  Complete blueprint for building scalable, resilient applications with modern cloud patterns.
                </p>
              </div>
            </Link>

            <Link href="/blog/ai-go-to-market-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                    Growth & Marketing
                  </span>
                  <span className="text-gray-500 text-sm">12 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 mb-2">
                  AI Go-To-Market 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  From zero to traction playbook for AI products with proven positioning and pricing strategies.
                </p>
              </div>
            </Link>

            <Link href="/blog/edge-ai-privacy-by-design-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                    Edge Computing
                  </span>
                  <span className="text-gray-500 text-sm">8 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 mb-2">
                  Edge AI: Privacy by Design
                </h3>
                <p className="text-gray-600 text-sm">
                  On-device intelligence for instant, compliant customer experiences with privacy-first approach.
                </p>
              </div>
            </Link>

            <Link href="/blog/ai-cost-optimization-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                    AI Engineering
                  </span>
                  <span className="text-gray-500 text-sm">9 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-600 mb-2">
                  AI Cost Optimization 2025
                </h3>
                <p className="text-gray-600 text-sm">
                  Ship faster, spend less with practical cost optimization strategies for AI systems.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <Link
              href="/case-studies"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/case-studies/ai-retail-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    Retail & E-commerce
                  </span>
                  <span className="text-gray-500 text-sm">12 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  AI Retail Transformation
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  $50M revenue increase and 40% cost reduction through comprehensive AI transformation.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Fortune 500</span>
                  <span>•</span>
                  <span>$50M revenue</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-financial-services-transformation-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    Financial Services
                  </span>
                  <span className="text-gray-500 text-sm">15 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  Financial Services AI Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  $50M cost savings and 300% efficiency gains through AI-powered automation.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Major Bank</span>
                  <span>•</span>
                  <span>$50M savings</span>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/ai-automation-manufacturing-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                    Manufacturing
                  </span>
                  <span className="text-gray-500 text-sm">10 min read</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                  AI Manufacturing Success
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  40% cost reduction and 60% faster processing through intelligent automation.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Fortune 500</span>
                  <span>•</span>
                  <span>$2.3M savings</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Free Resources</h2>
            <Link
              href="/resources"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/resources/sustainable-ai-playbook-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  Sustainable AI Playbook
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Complete guide to building eco-friendly AI systems with actionable strategies.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>150 pages</span>
                  <span className="mx-2">•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-implementation-checklist-2025" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                  AI Implementation Checklist
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Step-by-step checklist for successful AI implementation with best practices.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>45 min read</span>
                  <span className="mx-2">•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-security-hardening-checklist" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 mb-2">
                  AI Security Hardening
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Essential security measures and hardening checklist for AI systems.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>30 min read</span>
                  <span className="mx-2">•</span>
                  <span>Free Download</span>
                </div>
              </div>
            </Link>

            <Link href="/resources/ai-automation-roi-calculator" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                  AI ROI Calculator
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Calculate potential return on investment for AI automation projects.
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>Interactive Tool</span>
                  <span className="mx-2">•</span>
                  <span>Free</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Latest Content</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get weekly updates on AI trends, implementation guides, and exclusive content 
            delivered straight to your inbox. Join 10,000+ AI professionals.
=======
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Content Showcase: Latest AI & Technology Insights | Zion Tech Group',
  description: 'Explore our comprehensive collection of AI and technology content. Discover the latest articles, case studies, and resources from industry experts.',
  keywords: 'AI content, technology insights, case studies, resources, AI articles, tech guides',
  openGraph: {
    title: 'Content Showcase: Latest AI & Technology Insights',
    description: 'Explore our comprehensive collection of AI and technology content. Discover the latest articles, case studies, and resources.',
    type: 'website',
  },
};

export default function ContentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Content Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive collection of AI and technology insights, 
              case studies, and resources from industry experts.
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium">✨ JUST PUBLISHED</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🚀 Fresh AI & Tech Insights
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
              New this week: AI Automation Complete Guide, Advanced Cost Optimization, Healthcare AI Success Story, 
              and AI Implementation Master Guide. Expert insights to accelerate your digital transformation.
            </p>
          </div>

          {/* Featured New Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/ai-automation-2025-complete-guide' className='group">
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🤖</div>
                <h3 className='text-lg font-semibold mb-2'>AI Automation Complete Guide</h3>
                <p className='text-sm opacity-90 mb-3'>Master AI automation with our comprehensive implementation guide</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>15 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>
            
            <Link href='/blog/ai-cost-optimization-advanced-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>⚡</div>
                <h3 className='text-lg font-semibold mb-2'>Advanced AI Cost Optimization</h3>
                <p className='text-sm opacity-90 mb-3'>Reduce AI expenses by 60% while maintaining performance</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>12 min read</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/case-studies/ai-healthcare-diagnosis-success-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>🏥</div>
                <h3 className='text-lg font-semibold mb-2'>Healthcare AI Success Story</h3>
                <p className='text-sm opacity-90 mb-3'>95% accuracy in medical diagnosis with 50% cost reduction</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Case Study</span>
                  <span className='mx-2'>•</span>
                  <span>New</span>
                </div>
              </div>
            </Link>

            <Link href='/resources/ai-implementation-master-guide-2025' className='group'>
              <div className='bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>📚</div>
                <h3 className='text-lg font-semibold mb-2'>AI Implementation Master Guide</h3>
                <p className='text-sm opacity-90 mb-3'>150+ page complete implementation guide with checklists</p>
                <div className='flex items-center text-xs opacity-75'>
                  <span>Free Download</span>
                  <span className='mx-2'>•</span>
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
              Explore Our Content Library
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources covering AI, automation, cloud computing, and business transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Articles */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Articles</h3>
              <p className="text-gray-600 mb-6">
                In-depth articles covering AI trends, implementation strategies, and industry insights.
              </p>
              <div className="space-y-3 mb-6">
                <Link href="/blog/ai-automation-2025-complete-guide" className="block group">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                      AI Automation 2025: Complete Guide
                    </span>
                    <span className="text-xs text-gray-500">New</span>
>>>>>>> bulk-merge-20250912-100339
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
<<<<<<< HEAD
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
=======
        </div>
      </section>

      {/* Trending Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trending Topics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the most popular topics and discussions in AI and technology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/blog?topic=ai-automation" className="group">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  AI Automation
                </h3>
                <p className="text-gray-600 text-sm">15 articles</p>
              </div>
            </Link>

            <Link href="/blog?topic=cost-optimization" className="group">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  Cost Optimization
                </h3>
                <p className="text-gray-600 text-sm">8 articles</p>
              </div>
            </Link>

            <Link href="/blog?topic=healthcare-ai" className="group">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🏥</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Healthcare AI
                </h3>
                <p className="text-gray-600 text-sm">12 articles</p>
              </div>
            </Link>

            <Link href="/blog?topic=enterprise-ai" className="group">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Enterprise AI
                </h3>
                <p className="text-gray-600 text-sm">20 articles</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest Content
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get weekly updates on new articles, case studies, and resources delivered 
            straight to your inbox. Join 10,000+ professionals.
>>>>>>> origin/9llxiv-codex/implement-analytics-and-error-tracking
>>>>>>> bulk-merge-20250912-100339
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
<<<<<<< HEAD
        </section>
      </div>
=======
<<<<<<< HEAD
        </section>
      </div>
=======
        </div>
      </section>
>>>>>>> origin/9llxiv-codex/implement-analytics-and-error-tracking
    </div>
>>>>>>> bulk-merge-20250912-100339
  );
}