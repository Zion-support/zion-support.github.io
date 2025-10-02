import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog & Insights - Zion Tech Group',
  description: 'Stay updated with the latest AI trends, breakthrough innovations, and enterprise transformation insights from Zion Tech Group.',
  keywords: 'AI blog, technology insights, enterprise transformation, AI trends, breakthrough innovations',
};

export default function BlogPage() {
  const featuredPosts = [
    {
      title: 'AI 2026 November Quantum Superintelligence Breakthrough',
      excerpt: 'Revolutionary quantum AI implementation achieving unprecedented business transformation with $500B ROI.',
      date: 'November 2026',
      readTime: '8 min read',
      category: 'Quantum AI',
      link: '/blog/ai-2026-november-quantum-superintelligence-breakthrough',
      featured: true
    },
    {
      title: 'AI 2026 August Quantum Consciousness Revolution',
      excerpt: 'Autonomous operations transformation with quantum consciousness breakthrough delivering $50B success.',
      date: 'August 2026',
      readTime: '6 min read',
      category: 'Autonomous Systems',
      link: '/blog/ai-2026-august-quantum-consciousness-revolution',
      featured: true
    },
    {
      title: 'AI 2026 July Mega Breakthrough Revolution',
      excerpt: 'Enterprise automation revolution with AI-powered business intelligence achieving $25.3B success.',
      date: 'July 2026',
      readTime: '7 min read',
      category: 'Enterprise AI',
      link: '/blog/ai-2026-july-mega-breakthrough-revolution',
      featured: true
    }
  ];

  const recentPosts = [
    {
      title: 'AI Customer Data Platforms 2026',
      excerpt: 'Next-generation customer data platforms powered by AI for enterprise transformation.',
      date: 'December 2025',
      readTime: '5 min read',
      category: 'Data Analytics',
      link: '/blog/ai-customer-data-platforms-2026'
    },
    {
      title: 'AI Customer Journey AI 2026',
      excerpt: 'Revolutionary AI-powered customer journey optimization for enterprise success.',
      date: 'December 2025',
      readTime: '6 min read',
      category: 'Customer Experience',
      link: '/blog/ai-customer-journey-ai-2026'
    },
    {
      title: 'AI Agent Observability 2026',
      excerpt: 'Advanced observability solutions for AI agents in enterprise environments.',
      date: 'December 2025',
      readTime: '4 min read',
      category: 'AI Operations',
      link: '/blog/ai-agent-observability-2026'
    },
    {
      title: 'Agentic Workflow Orchestration 2026',
      excerpt: 'Autonomous workflow orchestration powered by AI agents for enterprise efficiency.',
      date: 'December 2025',
      readTime: '7 min read',
      category: 'Workflow Automation',
      link: '/blog/agentic-workflow-orchestration-2026'
    },
    {
      title: 'AI Autonomous Cloud Ops 2026',
      excerpt: 'Revolutionary autonomous cloud operations powered by AI for enterprise infrastructure.',
      date: 'December 2025',
      readTime: '5 min read',
      category: 'Cloud Operations',
      link: '/blog/ai-autonomous-cloud-ops-2026'
    },
    {
      title: 'AI 2026 January Revolutionary Breakthroughs',
      excerpt: 'Comprehensive overview of January 2026 AI breakthroughs and enterprise transformations.',
      date: 'January 2026',
      readTime: '8 min read',
      category: 'AI Breakthroughs',
      link: '/blog/ai-2026-january-revolutionary-breakthroughs'
    }
  ];

  const categories = [
    { name: 'AI Breakthroughs', count: 45 },
    { name: 'Enterprise AI', count: 32 },
    { name: 'Quantum Computing', count: 28 },
    { name: 'Autonomous Systems', count: 25 },
    { name: 'Data Analytics', count: 22 },
    { name: 'Cloud Operations', count: 18 },
    { name: 'Customer Experience', count: 15 },
    { name: 'AI Operations', count: 12 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead with the latest AI trends, breakthrough innovations, and enterprise transformation insights
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-blue-600 px-4 py-2 rounded-full">
                <span className="font-semibold">200+</span> Articles Published
              </div>
              <div className="bg-green-600 px-4 py-2 rounded-full">
                <span className="font-semibold">50K+</span> Monthly Readers
              </div>
              <div className="bg-purple-600 px-4 py-2 rounded-full">
                <span className="font-semibold">Fortune 500</span> Insights
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most impactful insights and breakthrough discoveries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.date}
                    </span>
                    <Link 
                      href={post.link}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                    >
                      Read Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Recent Articles
                </h2>
                <p className="text-lg text-gray-600">
                  Latest insights and breakthrough discoveries
                </p>
              </div>

              <div className="space-y-6">
                {recentPosts.map((post, index) => (
                  <article key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {post.date}
                      </span>
                      <Link 
                        href={post.link}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                      >
                        Read More
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700 hover:text-blue-600 cursor-pointer">
                        {category.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Stay Updated
                </h3>
                <p className="text-gray-600 mb-4">
                  Get the latest AI insights and breakthrough discoveries delivered to your inbox.
                </p>
                <Link 
                  href="/contact"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-block"
                >
                  Subscribe Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how our AI and IT solutions can drive breakthrough results for your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}