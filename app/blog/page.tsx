import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'Executive AI Roadmap — October 2025',
    slug: 'ai-2025-october-01-executive-ai-roadmap',
    excerpt: 'A practical 30/60/90 plan: guardrails, cost controls, and data foundations for reliable AI at speed.',
    category: 'Executive Guide',
    publishedAt: 'October 1, 2025',
    image: '🧭',
    color: 'blue',
    readTime: '9 min read'
  },
  {
    title: 'New Governed Agent Patterns for Reliable Autonomy',
    slug: 'ai-2025-september-30-new-governed-agent-patterns',
    excerpt: 'Policy-first orchestration, approvals, verifiers, budgets, and rollback so autonomy ships safely.',
    category: 'Featured Article',
    publishedAt: 'September 30, 2025',
    image: '🛡️',
    color: 'blue',
    readTime: '12 min read'
  },
  {
    title: 'Autonomous FinOps Scorecards — Prevent Cost Regressions',
    slug: 'ai-2025-september-30-autonomous-finops-scorecards',
    excerpt: 'KPI-linked scorecards, routing, caching, and rollback to govern AI spend in real time.',
    category: 'Implementation Guide',
    publishedAt: 'September 30, 2025',
    image: '📊',
    color: 'green',
    readTime: '14 min read'
  },
  {
    title: 'AI Enterprise Autonomous Agents 2026: Operating Models, Architecture, ROI',
    slug: 'ai-enterprise-autonomous-agents-2026',
    excerpt: 'Deploy autonomous AI agents with provable guardrails to achieve 400% efficiency gains, 70% cost reduction, and 99.95% uptime.',
    category: 'Implementation Guide',
    publishedAt: 'September 30, 2025',
    image: '🤖',
    color: 'green',
    readTime: '18 min read'
  },
  {
    title: 'Enterprise RAG Guardrails 2026: Safe, Reliable, and Controllable AI',
    slug: 'ai-2026-enterprise-rag-guardrails',
    excerpt: 'Design enterprise-grade RAG with policy guardrails, verifiable citations, and cost-aware routing. Prevent hallucinations and ensure compliance.',
    category: 'Implementation Guide',
    publishedAt: 'January 20, 2026',
    image: '🛡️',
    color: 'indigo',
    readTime: '24 min read'
  },
  {
    title: 'Autonomous Enterprise Operations 2026: 90% Efficiency, 300% ROI',
    slug: 'ai-2026-autonomous-enterprise-operations',
    excerpt: 'Deploy autonomous AI for incident response, finance, supply chain, and support with provable guardrails and ROI.',
    category: 'Revolutionary Technology',
    publishedAt: 'January 18, 2026',
    image: '🏭',
    color: 'green',
    readTime: '28 min read'
  },
  {
    title: 'AI 2026 Neural Superintelligence: The Next Frontier of Artificial Intelligence',
    slug: 'ai-2026-neural-superintelligence',
    excerpt: 'Explore the revolutionary AI 2026 neural superintelligence systems that surpass human intelligence, delivering 1000x performance gains and transforming enterprise operations.',
    category: 'Breakthrough Technology',
    publishedAt: 'January 20, 2026',
    image: '🧠',
    color: 'indigo',
    readTime: '18 min read'
  },
  {
    title: 'AI 2026 Enterprise Autonomous Systems: The Future of Business Automation',
    slug: 'ai-2026-enterprise-autonomous-systems',
    excerpt: 'Discover how next-generation AI autonomous systems are revolutionizing enterprise operations, delivering 400% efficiency gains, 70% cost reduction, and complete business process automation.',
    category: 'Revolutionary Technology',
    publishedAt: 'January 20, 2026',
    image: '🤖',
    color: 'purple',
    readTime: '15 min read'
  },
  {
    title: 'AI 2026: Revolutionary Trends Transforming Enterprise',
    slug: 'ai-2026-revolutionary-trends',
    excerpt: 'Discover the revolutionary AI trends shaping 2026. From autonomous enterprise systems to quantum AI, explore how these breakthroughs are transforming business operations.',
    category: 'Featured Article',
    publishedAt: 'January 15, 2026',
    image: '🚀',
    color: 'blue',
    readTime: '12 min read'
  },
  {
    title: 'AI 2026 Quantum Computing Breakthrough: Revolutionary Processing Power',
    slug: 'quantum-ai-breakthrough-2026',
    excerpt: 'Explore the revolutionary AI quantum computing breakthrough of 2026. Discover how quantum-enhanced AI is solving complex problems 1000x faster and transforming enterprise computing.',
    category: 'Breakthrough Technology',
    publishedAt: 'January 10, 2026',
    image: '⚛️',
    color: 'purple',
    readTime: '14 min read'
  },
  {
    title: 'AI Enterprise Transformation 2026: Complete Implementation Guide',
    slug: 'ai-enterprise-transformation-2026',
    excerpt: 'Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI and 70% cost reduction.',
    category: 'Implementation Guide',
    publishedAt: 'January 5, 2026',
    image: '🏢',
    color: 'green',
    readTime: '20 min read'
  },
  {
    title: 'AI Autonomous Agents 2025: Enterprise Implementation Guide',
    slug: 'ai-autonomous-agents-2025',
    excerpt: 'Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns. Achieve 80% automation and 90% efficiency gains.',
    category: 'Implementation Guide',
    publishedAt: 'December 28, 2025',
    image: '🤖',
    color: 'blue',
    readTime: '16 min read'
  },
  {
    title: 'AI 2027 Cost Optimization Playbook: Reliable, Fast, and Affordable AI',
    slug: 'ai-2027-cost-optimization-playbook',
    excerpt: 'Cut AI spend 30–70% with routing, caching, quantization, and guardrails while improving reliability.',
    category: 'Implementation Guide',
    publishedAt: 'September 30, 2025',
    image: '💸',
    color: 'green',
    readTime: '13 min read'
  }
  ,
  {
    title: 'AI 2026 Agentic Workflow Orchestration: Guardrails to ROI',
    slug: 'ai-2026-agentic-workflow-orchestration',
    excerpt: 'Design multi-agent workflows with policy guardrails, human-in-the-loop reviews, and online evaluations for reliable business outcomes.',
    category: 'Implementation Guide',
    publishedAt: 'October 1, 2025',
    image: '🧩',
    color: 'green',
    readTime: '16 min read'
  },
  {
    title: 'AI Insights: New Content Highlights — September 30, 2025',
    slug: 'ai-september-30-2025-new-content-highlights',
    excerpt: 'A concise overview of today’s new guides across workflows, data fabric, and resilience—what changed and why it matters.',
    category: 'Featured Article',
    publishedAt: 'September 30, 2025',
    image: '🆕',
    color: 'blue',
    readTime: '8 min read'
  },
  {
    title: 'AI Strategic Roadmaps — October 2025',
    slug: 'ai-october-2025-strategic-roadmaps',
    excerpt: 'Quarterly plan for governed autonomy, cost-aware routing, and data fabric foundations with milestones and risks.',
    category: 'Implementation Guide',
    publishedAt: 'October 1, 2025',
    image: '🗺️',
    color: 'green',
    readTime: '10 min read'
  },
  {
    title: 'AI 2026 Intelligent Data Fabric: Real-Time Decisions at Scale',
    slug: 'ai-2026-intelligent-data-fabric',
    excerpt: 'Unify batch, streaming, and unstructured data into a governed fabric powering low-latency AI decisions and observability.',
    category: 'Featured Article',
    publishedAt: 'October 1, 2025',
    image: '🧩',
    color: 'blue',
    readTime: '14 min read'
  }
];

const categories = [
  { name: 'All', count: blogPosts.length, color: 'gray' },
  { name: 'Breakthrough Technology', count: blogPosts.filter(post => post.category === 'Breakthrough Technology').length, color: 'purple' },
  { name: 'Revolutionary Technology', count: blogPosts.filter(post => post.category === 'Revolutionary Technology').length, color: 'indigo' },
  { name: 'Implementation Guide', count: blogPosts.filter(post => post.category === 'Implementation Guide').length, color: 'green' },
  { name: 'Featured Article', count: blogPosts.filter(post => post.category === 'Featured Article').length, color: 'blue' }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI & Technology
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Insights
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with the latest AI breakthroughs, implementation guides, and revolutionary technologies 
            that are transforming enterprise operations worldwide.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                category.color === 'gray'
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : category.color === 'purple'
                  ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  : category.color === 'indigo'
                  ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                  : category.color === 'green'
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-indigo-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      post.color === 'indigo' ? 'bg-indigo-100' :
                      post.color === 'purple' ? 'bg-purple-100' :
                      post.color === 'blue' ? 'bg-blue-100' :
                      'bg-green-100'
                    }`}>
                      <span className="text-2xl">{post.image}</span>
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${
                        post.color === 'indigo' ? 'text-indigo-600' :
                        post.color === 'purple' ? 'text-purple-600' :
                        post.color === 'blue' ? 'text-blue-600' :
                        'text-green-600'
                      }`}>
                        {post.category}
                      </div>
                      <div className="text-sm text-gray-500">{post.readTime}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{post.publishedAt}</div>
                    <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                      Read Article →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                      post.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                      post.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{post.publishedAt}</div>
                    <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                      Read →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Insights</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Get the latest AI breakthroughs, implementation guides, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}