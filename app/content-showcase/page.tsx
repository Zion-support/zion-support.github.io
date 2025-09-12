import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';

export default function ContentShowcasePage() {
  const newBlogPosts = [
    {
      title: "AI Advanced Automation 2025: Complete Implementation Guide",
      description: "Master advanced AI automation in 2025 with our comprehensive guide. Learn implementation strategies, best practices, and real-world case studies for enterprise automation success.",
      href: "/blog/ai-2025-advanced-automation",
      icon: "🤖",
      category: "AI Automation",
      readTime: "25 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Cybersecurity Threats 2025: Complete Defense Guide",
      description: "Protect your organization from emerging AI cybersecurity threats in 2025. Learn about AI-powered attacks, defense strategies, and security best practices.",
      href: "/blog/ai-2025-cybersecurity-threats",
      icon: "🛡️",
      category: "Cybersecurity",
      readTime: "22 min read",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Breakthrough Innovations 2025: Revolutionary Technologies",
      description: "Discover the most groundbreaking AI innovations of 2025. From AGI breakthroughs to quantum AI, explore technologies reshaping industries.",
      href: "/blog/ai-2025-breakthrough-innovations",
      icon: "🚀",
      category: "AI Innovations",
      readTime: "25 min read",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly AI",
      description: "Discover how AI is driving sustainability initiatives and reducing carbon footprints. Learn about smart energy management and climate solutions.",
      href: "/blog/ai-sustainability-green-tech-2025",
      icon: "🌱",
      category: "Sustainability",
      readTime: "20 min read",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Robotics & Automation 2025: The Future of Intelligent Machines",
      description: "Explore revolutionary advances in AI-powered robotics and automation. Discover how intelligent machines are transforming industries.",
      href: "/blog/ai-robotics-automation-2025",
      icon: "🤖",
      category: "Robotics",
      readTime: "22 min read",
      date: "Jan 28, 2025"
    },
    {
      title: "AI Implementation Success Framework 2025: From Strategy to Governance",
      description: "Discover Zion Tech Group's comprehensive AI Implementation Success Framework for 2025. Learn how to navigate strategy, data, talent, and governance.",
      href: "/blog/ai-implementation-success-framework-2025",
      icon: "✅",
      category: "AI Strategy",
      readTime: "18 min read",
      date: "Feb 01, 2025"
    }
  ];

  const newCaseStudies = [
    {
      title: "AI Healthcare Diagnosis Success: 95% Accuracy Achieved",
      description: "How a major healthcare system transformed patient care with AI-powered diagnostic tools, achieving 95% accuracy, 60% faster diagnosis times, and $2.5M annual savings.",
      href: "/case-studies/ai-healthcare-diagnosis-success-2025",
      icon: "🏥",
      category: "Healthcare AI",
      result: "95% Accuracy",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Financial Services Transformation: $50M Savings & 300% ROI",
      description: "Discover how a Fortune 500 financial services company achieved $50M in cost savings and 300% ROI through comprehensive AI transformation.",
      href: "/case-studies/ai-financial-services-transformation-2025",
      icon: "🏦",
      category: "Financial AI",
      result: "$50M Savings",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Autonomous Manufacturing Success: $200M Savings",
      description: "How a Fortune 500 manufacturing company transformed their operations with autonomous AI systems, achieving $200M in annual savings and 60% faster processing times.",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      icon: "💰",
      category: "Manufacturing AI",
      result: "$200M Savings",
      date: "Jan 28, 2025"
    }
  ];

  const newResources = [
    {
      title: "AI Implementation Master Guide 2026: Complete 200+ Page Resource",
      description: "Download our comprehensive AI Implementation Master Guide for 2026. Step-by-step instructions, templates, checklists, and best practices for successful AI deployment.",
      href: "/resources/ai-implementation-master-guide-2026",
      icon: "📚",
      category: "Master Guide",
      type: "Free Download",
      date: "Jan 30, 2025"
    },
    {
      title: "AI Cybersecurity Checklist 2025: 150+ Security Items",
      description: "Complete cybersecurity checklist covering 150+ essential security measures for AI systems and deployments.",
      href: "/resources/ai-cybersecurity-checklist-2025",
      icon: "🛡️",
      category: "Security",
      type: "Free Download",
      date: "Feb 06, 2025"
    },
    {
      title: "AI Workforce Transformation Playbook 2025",
      description: "Complete reskilling strategies and implementation guides for the AI era. 150+ pages of practical guidance.",
      href: "/resources/ai-workforce-transformation-playbook-2025",
      icon: "👥",
      category: "Workforce",
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

        {/* Blog Posts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Blog Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newBlogPosts.map((post, index) => (
              <Link key={index} href={post.href} className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                    <div className="text-6xl">{post.icon}</div>
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      NEW
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold text-xs">ZT</span>
                        </div>
                        <span className="text-sm text-gray-600">Zion Tech Group</span>
                      </div>
                      <span className="text-blue-600 font-medium group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Success Stories & Case Studies</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newCaseStudies.map((study, index) => (
              <Link key={index} href={study.href} className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative">
                    <div className="text-6xl">{study.icon}</div>
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      CASE STUDY
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        {study.category}
                      </span>
                      <span className="text-gray-500 text-sm">{study.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-green-600 font-bold text-lg">
                        {study.result}
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
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Free Resources & Downloads</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newResources.map((resource, index) => (
              <Link key={index} href={resource.href} className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative">
                    <div className="text-6xl">{resource.icon}</div>
                    <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      FREE
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                        {resource.category}
                      </span>
                      <span className="text-gray-500 text-sm">{resource.type}</span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">{resource.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-purple-600 font-bold">
                        {resource.type}
                      </div>
                      <span className="text-purple-600 font-medium group-hover:underline">
                        Download Now →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
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
    </div>
  );
}