import Link from 'next/link';
import React from 'react';
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
      title: "AI 2026: LLM Evals Maturity Model",
      description: "Evaluation-first framework with metrics, harnesses, and governance to ship reliable AI systems.",
      slug: "ai-2026-llm-evals-maturity-model",
      category: "Quality",
      date: "2025-09-15",
      featured: true,
      image: "/images/llm-evals-maturity-model-2026.jpg"
    },
    {
      title: "AI 2026: Multimodal Agents Enterprise Blueprint",
      description: "Design patterns, reference architectures, and an adoption roadmap for enterprise multimodal agents.",
      slug: "ai-2026-multimodal-agents-enterprise-blueprint",
      category: "Architecture",
      date: "2025-09-15",
      featured: true,
      image: "/images/multimodal-agents-enterprise-blueprint-2026.jpg"
    },
    {
      title: "AI 2026: Agent Observability Blueprint",
      description: "Deep visibility into autonomous agents: traces, evaluations, and safety telemetry.",
      slug: "ai-2026-agent-observability-blueprint",
      category: "Operations",
      date: "2025-09-15",
      featured: true,
      image: "/images/agent-observability-blueprint-2026.jpg"
    },
    {
      title: "AI 2026: Autonomous Incident Response",
      description: "Agentic playbooks and event-driven pipelines to cut MTTR and scale reliability.",
      slug: "ai-2026-ai-ops-autonomous-incident-response",
      category: "Operations",
      date: "2025-09-14",
      featured: true,
      image: "/images/ai-ops-autonomous-incident-response-2026.jpg"
    },
    {
      title: "AI 2025: LLM Evaluation Best Practices - Reliable, Fair, and Robust",
      description: "A practical guide to evaluating large language models in 2025: metrics, human evaluation, bias audits, reliability, and production monitoring.",
      slug: "ai-2025-llm-evaluation-best-practices",
      category: "Best Practices",
      date: "2025-09-15",
      featured: true,
      image: "/images/llm-evaluation-best-practices-2025.jpg"
    },
    {
      title: "AI 2025: The Generative AI Enterprise Revolution - Ultimate Breakthrough Guide",
      description: "Discover how generative AI is transforming enterprise operations in 2025, delivering unprecedented automation, creativity, and efficiency gains across all business functions.",
      slug: "ai-2025-generative-ai-enterprise-revolution-ultimate-breakthrough",
      category: "AI Revolution",
      date: "2025-01-15",
      featured: true,
      image: "/images/generative-ai-enterprise-2025.jpg"
    },
    {
      title: "Enterprise AI Governance Blueprint (2026)",
      description: "Policy-as-code, risk tiers, and continuous evaluations for safe AI scale.",
      slug: "ai-2026-enterprise-ai-governance-blueprint",
      category: "Governance",
      date: "2025-09-15",
      featured: true,
      image: "/images/ai-governance-blueprint-2026.jpg"
    },
    {
      title: "Enterprise AI Agents in 2025: Breakthroughs and Real-World Impact",
      description: "How enterprise AI agents are transforming operations, boosting productivity, and enabling autonomous workflows across industries in 2025.",
      slug: "ai-2025-enterprise-ai-agents-breakthrough",
      category: "Enterprise AI",
      date: "2025-09-15",
      featured: true,
      image: "/images/enterprise-ai-agents-2025.jpg"
    },
    {
      title: "AI 2026: Enterprise AI FinOps Cost Optimization",
      description: "Control AI infrastructure costs with FinOps: visibility, right-sizing, caching, eval-gated upgrades, and policy guardrails.",
      slug: "ai-2026-enterprise-ai-finops-cost-optimization",
      category: "FinOps",
      date: "2025-09-15",
      featured: true,
      image: "/images/ai-finops-2026.jpg"
    },
    {
      title: "AI 2026: Agent Safety Certification",
      description: "Certification framework to validate agent safety with scenario suites and governance.",
      slug: "ai-2026-agent-safety-certification",
      category: "Safety",
      date: "2025-09-15",
      featured: true,
      image: "/images/agent-safety-certification-2026.jpg"
    },
    {
      title: "AI 2026: Edge Agents On-Device Inference",
      description: "Design patterns for private, low-latency edge agents with hybrid offload.",
      slug: "ai-2026-edge-agents-on-device",
      category: "Edge AI",
      date: "2025-09-15",
      featured: true,
      image: "/images/edge-agents-on-device-2026.jpg"
    },
    {
      title: "AI 2026: Autonomous Compliance Operating Model",
      description: "Automate controls, evidence, and tests for audit-ready AI operations with policy-as-code.",
      slug: "ai-2026-autonomous-compliance",
      category: "Governance",
      date: "2025-09-15",
      featured: true,
      image: "/images/autonomous-compliance-2026.jpg"
    },
    {
      title: "Quantum Computing Breakthrough 2025: Enterprise Applications",
      description: "Explore how quantum computing is revolutionizing enterprise operations in 2025 with unprecedented processing power and breakthrough applications.",
      slug: "ai-2025-quantum-computing-breakthrough",
      category: "Quantum Computing",
      date: "2025-01-15",
      featured: true,
      image: "/images/quantum-computing-2025.jpg"
    },
    {
      title: "AI 2026: Autonomous Finance Operating System",
      description: "Design a real-time, autonomous finance OS with policy-as-code, continuous close, and AI-driven cash optimization.",
      slug: "ai-2026-autonomous-finance-operating-system",
      category: "Finance",
      date: "2025-09-15",
      featured: true,
      image: "/images/autonomous-finance-os-2026.jpg"
    }
  ];

  const categories = [
    { name: "AI Revolution", count: 25, color: "bg-blue-500" },
    { name: "Quantum Computing", count: 15, color: "bg-purple-500" },
    { name: "Neural Interfaces", count: 12, color: "bg-green-500" },
    { name: "Enterprise AI", count: 18, color: "bg-orange-500" },
    { name: "Future Tech", count: 20, color: "bg-pink-500" }
  ];

  return (
    <div>
      <SEO
        title="AI & Technology Blog - Latest Insights & Breakthroughs"
        description="Discover the latest insights in AI, quantum computing, neural interfaces, and enterprise transformation. Expert analysis, case studies, and breakthrough technologies."
        keywords="AI blog, technology insights, quantum computing, neural interfaces, enterprise AI, business transformation, AI trends, technology news"
        url="/blog"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI & Technology Blog
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest insights, breakthroughs, and expert analysis in AI, quantum computing, and enterprise transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{category.count}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center">
                    <span className="text-6xl">🚀</span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm ml-4">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.description}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                    >
                      Read Full Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated with Latest Insights</h2>
            <p className="text-xl opacity-90 mb-8">
              Get the latest AI and technology insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe to Newsletter
              </Link>
              <Link
                href="/resources"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Download Resources
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;