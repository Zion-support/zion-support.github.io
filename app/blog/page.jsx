import Link from 'next/link';
import SEO from '../../components/SEO';

export const metadata = {
  title: 'AI & Technology Blog - Latest Insights & Breakthroughs | Zion Tech Group',
  description: 'Discover the latest insights in AI, quantum computing, neural interfaces, and enterprise transformation. Expert analysis, case studies, and breakthrough technologies.',
};

const BlogPage = () => {
  const featuredPosts = [
    {
<<<<<<< HEAD:app/blog/page.jsx
<<<<<<< HEAD:app/blog/page.jsx
<<<<<<< HEAD:app/blog/page.jsx
      title: "AI 2026: Agent Risk Maturity Matrix",
      description: "Benchmark and uplift agent safety across policy, evals, telemetry, and operations.",
      slug: "ai-2026-agent-risk-maturity-matrix",
      category: "AI Governance",
=======
      title: "AI 2026: Enterprise AI Governance Blueprint",
      description: "Policy-as-code, model risk tiers, and runtime monitoring to scale AI safely across the enterprise.",
      slug: "ai-2026-enterprise-ai-governance-blueprint",
      category: "Governance",
=======
      title: "AI 2026: Enterprise AI Governance Blueprint",
      description: "A practical blueprint to implement policy-as-code, model risk tiers, and real-time monitoring to scale AI safely and compliantly.",
      slug: "ai-2026-enterprise-ai-governance-blueprint",
      category: "Enterprise AI",
      date: "2025-09-15",
      featured: true,
      image: "/images/enterprise-ai-governance-2026.jpg"
=======
      title: "AI 2025: Multimodal AI Agents – Practical Enterprise Guide",
      description: "A hands-on 2025 playbook to design, deploy, and govern multimodal AI agents that drive measurable outcomes.",
      slug: "ai-2025-multimodal-agents-practical-guide",
      category: "Enterprise AI",
      date: "2025-09-15",
      featured: true,
      image: "/images/multimodal-agents-2025.jpg"
>>>>>>> origin/feat/new-blog-content:app/blog/page.tsx
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
      title: "Enterprise Foundation Models: A Practical Guide (2025)",
      description: "Vendor-neutral steps to evaluate, deploy, and govern foundation models that drive measurable outcomes.",
      slug: "ai-2025-enterprise-foundation-models-practical-guide",
      category: "Enterprise AI",
>>>>>>> origin/feature/content-sep-2025:app/blog/page.tsx
      date: "2025-09-15",
      featured: true,
      image: "/images/ai-governance-blueprint-2026.jpg"
    },
    {
      title: "AI 2026: Secure Agent Architecture - Zero-Trust, Guardrails, and Compliance",
      description: "Designing secure AI agent systems in 2026 using zero-trust principles, capability-scoped tools, runtime guardrails, and compliance-by-design.",
      slug: "ai-2026-secure-agent-architecture",
      category: "Security Architecture",
>>>>>>> origin/feature/add-governance-blueprint-content:app/blog/page.tsx
      date: "2025-09-15",
      featured: true,
      image: "/images/agent-risk-maturity-2026.jpg"
    },
    {
      title: "AI 2026: Real-Time Retrieval Architectures — Low-Latency, High-Trust RAG",
      description: "Sub-200ms p95 retrieval with grounding, verification, and continuous evaluations.",
      slug: "ai-2026-real-time-retrieval-architectures",
      category: "AI Infrastructure",
      date: "2025-09-15",
      featured: true,
      image: "/images/real-time-rag-2026.jpg"
    },
    {
      title: "AI 2026: Agents‑On‑Call Automation — Eval‑Gated Incident Response",
      description: "Autonomous triage and guided mitigation with policy-as-code guardrails and SLOs.",
      slug: "ai-2026-agents-oncall-automation",
      category: "Operations",
      date: "2025-09-15",
      featured: true,
      image: "/images/agents-oncall-2026.jpg"
    },
    {
      title: "AI 2026: Eval‑Driven Release Engineering — Deep Dive",
      description: "Wire objective evals into CI/CD, canaries, and runtime with auto‑rollback.",
      slug: "ai-2026-eval-driven-release-engineering-deep-dive",
      category: "Reliability",
      date: "2025-09-15",
      featured: true,
      image: "/images/eval-driven-release-deep-dive.jpg"
    },
    {
      title: "AI 2026: Agentic Observability Operating Model",
      description: "Traces, evals, and policy signals to operate autonomous agents with confidence.",
      slug: "ai-2026-agentic-observability-operating-model",
      category: "Observability",
      date: "2025-09-15",
      featured: true,
      image: "/images/agentic-observability-2026.jpg"
    },
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
        <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">AI & Technology Blog</h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest insights, breakthroughs, and expert analysis in AI, quantum computing, and enterprise transformation.
              </p>
            </div>
          </div>
        </section>

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
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
                      <span className="text-gray-500 text-sm ml-4">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{post.description}</p>
                    <Link href={`/blog/${post.slug}`} className="text-purple-600 font-semibold hover:text-purple-800 transition-colors">
                      Read Full Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated with Latest Insights</h2>
            <p className="text-lg opacity-90 mb-8">Get the latest AI and technology insights delivered directly to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe to Newsletter
              </Link>
              <Link href="/resources" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
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

