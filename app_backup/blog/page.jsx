import React from 'react';
import Link from 'next/link';

const BlogPage = () => {
  const featuredPosts = [
    {
      title: "AI 2025: Enterprise AI Security Blueprint",
      description: "Layered controls for model, data, runtime, and supply chain risk in enterprise AI systems.",
      slug: "ai-2025-enterprise-ai-security-blueprint",
      category: "Security",
      date: "2025-09-15",
      featured: true,
      image: "/images/enterprise-ai-security-2025.jpg"
    },
    {
      title: "AI 2026: Agent Observability Blueprint",
      description: "Deep visibility into autonomous agents: traces, evaluations, and safety telemetry across the lifecycle.",
      slug: "ai-2026-agent-observability-blueprint",
      category: "Observability",
      date: "2025-09-15",
      featured: true,
      image: "/images/agent-observability-2026.jpg"
    },
    {
      title: "AI 2026: Autonomous Customer Support Agents",
      description: "Blueprint to deploy autonomous support agents with routing, guardrails, evaluations, and observability for higher CSAT and lower costs.",
      slug: "ai-2026-autonomous-customer-support-agents",
      category: "Enterprise AI",
      date: "2025-09-15",
      featured: true,
      image: "/images/autonomous-support-2026.jpg"
    },
    {
      title: "AI 2025: Multimodal Agents in the Enterprise",
      description: "Design and deploy agents that see, hear, and act to deliver measurable outcomes across the enterprise.",
      slug: "ai-2025-multimodal-agents-in-the-enterprise",
      category: "AI Agents",
      date: "2025-09-15",
      featured: true,
      image: "/images/multimodal-agents-2025.jpg"
    }
  ];

  const allPosts = [
    ...featuredPosts,
    {
      title: "AI 2026: LLM Evals Maturity Model",
      description: "An evaluation-first framework with metrics, harnesses, and governance to ship reliable AI.",
      slug: "ai-2026-llm-evals-maturity-model",
      category: "AI Quality",
      date: "2025-09-15",
      featured: false
    },
    {
      title: "AI 2026: Agent Platform SLOs — Best Practices",
      description: "Practical guidance to define, monitor, and enforce agent platform SLOs.",
      slug: "ai-2026-agent-platform-slos-best-practices",
      category: "Operations",
      date: "2025-09-15",
      featured: false
    },
    {
      title: "AI 2026: Agentic Sandbox Patterns",
      description: "Practical sandboxing patterns for safe agent tool use: isolation domains, time-boxing, scoped credentials, and runtime guardrails.",
      slug: "ai-2026-agentic-sandbox-patterns",
      category: "Security",
      date: "2025-09-15",
      featured: false
    },
    {
      title: "AI 2025: Ultimate Breakthrough Trends That Will Reshape Everything",
      description: "Discover the revolutionary AI trends that will transform 2025",
      slug: "ai-2025-ultimate-breakthrough-trends",
      category: "AI Trends",
      date: "2025-01-01",
      featured: false,
      image: "/images/ai-trends-2025.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">AI & Technology Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, strategies, and practical guides for AI implementation, enterprise automation, and digital transformation.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {post.image && (
                  <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white text-4xl">📊</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="space-y-6">
            {allPosts.map((post) => (
              <article key={post.slug} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                      {post.featured && (
                        <span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">Featured</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-3">{post.description}</p>
                    <Link href={`/blog/${post.slug}`} className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;