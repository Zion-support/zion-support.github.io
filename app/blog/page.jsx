import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI & Technology Blog - Latest Insights & Breakthroughs | Zion Tech Group',
  description: 'Discover the latest insights in AI, quantum computing, neural interfaces, and enterprise transformation. Expert analysis, case studies, and breakthrough technologies.',
  keywords: [
    'AI blog', 'technology insights', 'quantum computing', 'neural interfaces', 
    'enterprise AI', 'business transformation', 'AI trends', 'technology news'
  ],
};

const BlogPage = () => {
  const featuredPosts = [
    {
      title: "AI 2026: Enterprise AI Governance Blueprint",
      description: "A practical blueprint to implement policy-as-code, model risk tiers, and real-time monitoring to scale AI safely and compliantly.",
      slug: "ai-2026-enterprise-ai-governance-blueprint",
      category: "Enterprise AI",
      date: "2025-09-15",
      featured: true,
      image: "/images/enterprise-ai-governance-2026.jpg"
    },
    {
      title: "AI 2025: Multimodal AI Agents – Practical Enterprise Guide",
      description: "A hands-on 2025 playbook to design, deploy, and govern multimodal AI agents that drive measurable outcomes.",
      slug: "ai-2025-multimodal-agents-practical-guide",
      category: "Enterprise AI",
      date: "2025-09-15",
      featured: true,
      image: "/images/multimodal-agents-2025.jpg"
    },
    {
      title: "AI 2026: Agent Observability Blueprint",
      description: "Deep visibility into autonomous agents: traces, evaluations, and safety telemetry across the lifecycle.",
      slug: "ai-2026-agent-observability-blueprint",
      category: "Observability",
      date: "2025-09-15",
      featured: true,
      image: "/images/agent-observability-2026.jpg"
    }
  ];

  const recentPosts = [
    {
      title: "AI 2026: Foundation Model Ops Playbook",
      description: "Operational patterns for governing, deploying, and monitoring foundation models at enterprise scale.",
      slug: "ai-2026-foundation-model-ops",
      category: "MLOps",
      date: "2025-09-15",
      image: "/images/foundation-model-ops-2026.jpg"
    },
    {
      title: "AI 2026: Autonomous Finance Control Plane",
      description: "Real-time policy enforcement, anomaly detection, and auditability for modern finance operations.",
      slug: "ai-2026-autonomous-finance-control-plane",
      category: "Finance AI",
      date: "2025-09-15",
      image: "/images/finance-control-plane-2026.jpg"
    },
    {
      title: "AI 2026: Agentic Sandbox Patterns",
      description: "Isolation domains, least privilege, and runtime guards for safe agent tool use.",
      slug: "ai-2026-agentic-sandbox-patterns",
      category: "Security",
      date: "2025-09-15",
      image: "/images/agentic-sandbox-2026.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI & Technology Blog - Latest Insights & Breakthroughs"
        description="Discover the latest insights in AI, quantum computing, neural interfaces, and enterprise transformation. Expert analysis, case studies, and breakthrough technologies."
        keywords="AI blog, technology insights, quantum computing, neural interfaces, enterprise AI, business transformation, AI trends, technology news"
        url="/blog"
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI & Technology Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest insights in AI, quantum computing, neural interfaces, and enterprise transformation. 
            Expert analysis, case studies, and breakthrough technologies.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-purple-600">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-purple-600">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800"
                  >
                    Read More →
                  </Link>
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