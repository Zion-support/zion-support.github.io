import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'AI Operational Resilience 2026: Designing for Failure and Recovery',
    slug: 'ai-operational-resilience-2026',
    excerpt: 'Blueprint for 99.99% uptime with policy tests, isolation, and automated recovery without slowing teams.',
    category: 'Operations',
    publishedAt: 'September 30, 2025',
    image: '🧯',
    color: 'indigo',
    readTime: '14 min read'
  },
  {
    title: 'AI Agent Observability 2026: Metrics, Traces, and Guardrails',
    slug: 'ai-agent-observability-2026',
    excerpt: 'Instrument agents with traces, evals, and policy guardrails to ship reliable autonomy at scale.',
    category: 'AI Reliability',
    publishedAt: 'September 30, 2025',
    image: '🔎',
    color: 'purple',
    readTime: '12 min read'
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
    <div className="text-left">
      <div className="text-left">
        {/* Header */}
        <div className="text-left">
          <h1 className="text-left">
            AI & Technology
            <span className="text-left">
              {' '}Insights
            <
          </h1>
          <p className="text-left">
            Stay ahead with the latest AI breakthroughs, implementation guides, and revolutionary technologies 
            that are transforming enterprise operations worldwide.
          </p>
        </div>

        {/* Categories */}
        <div className="text-left">
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
        <div className="text-left">
          <h2 className="text-left">Featured Articles</h2>
          <div className="text-left">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="text-left">
                <div className="text-left">
                  <div className="text-left">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      post.color === 'indigo' ? 'bg-indigo-100' :
                      post.color === 'purple' ? 'bg-purple-100' :
                      post.color === 'blue' ? 'bg-blue-100' :
                      'bg-green-100'
                    }`}>
                      <span className="text-left">{post.image}<
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
                      <div className="text-left">{post.readTime}</div>
                    </div>
                  </div>
                  <h3 className="text-left">
                    {post.title}
                  </h3>
                  <p className="text-left">
                    {post.excerpt}
                  </p>
                  <div className="text-left">
                    <div className="text-left">{post.publishedAt}</div>
                    <div className="text-left">
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
          <h2 className="text-left">All Articles</h2>
          <div className="text-left">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="text-left">
                <div className="text-left">
                  <div className="text-left">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                      post.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                      post.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {post.category}
                    <
                    <span className="text-left">{post.readTime}<
                  </div>
                  <h3 className="text-left">
                    {post.title}
                  </h3>
                  <p className="text-left">
                    {post.excerpt}
                  </p>
                  <div className="text-left">
                    <div className="text-left">{post.publishedAt}</div>
                    <div className="text-left">
                      Read →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-left">
          <h3 className="text-left">Stay Updated with AI Insights</h3>
          <p className="text-left">
            Get the latest AI breakthroughs, implementation guides, and industry insights delivered to your inbox.
          </p>
          <div className="text-left">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-left"
            />
            <button className="text-left">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}