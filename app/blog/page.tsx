import React from 'react';
import Link from 'next/link';
export const metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Explore our latest AI insights, guides, and case studies.'
};

const blogPosts = [
  {
    title: 'Reliable Agent Evals 2025: Measure, Guardrail, and Improve',
    slug: 'ai-reliable-agent-evals-2025',
    excerpt: 'Blueprint for production agent evaluations: golden tasks, scorecards, policy tests, and continuous improvement.',
    category: 'AI Reliability',
    publishedAt: 'September 30, 2025',
    image: '✅',
    color: 'purple',
    readTime: '12 min read'
  },
  {
    title: 'AI Enterprise GenAI Agent Platform 2026',
    slug: 'ai-enterprise-genai-agent-platform-2026',
    excerpt: 'Blueprint to ship a governed, reliable, and cost‑efficient GenAI agent platform—routing, memory, tools, observability, and guardrails.',
    category: 'Implementation Guide',
    publishedAt: 'September 30, 2025',
    image: '🏗️',
    color: 'green',
    readTime: '20 min read'
  },
  {
    title: 'AI Voice Interfaces Enterprise 2026',
    slug: 'ai-voice-interfaces-enterprise-2026',
    excerpt: 'Design low‑latency, multilingual, privacy‑preserving voice AI with guardrails, evals, and fallbacks.',
    category: 'Implementation Guide',
    publishedAt: 'September 30, 2025',
    image: '🎙️',
    color: 'indigo',
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
    title: 'AI‑Powered Enterprise Autonomous Systems',
    slug: 'ai-2025-enterprise-autonomous-systems',
    excerpt: 'Blueprint to deploy self‑healing, policy‑aware autonomous workflows with verifiable outcomes and 99.99% uptime.',
    category: 'Revolutionary Technology',
    publishedAt: 'January 30, 2025',
    image: '🤖',
    color: 'purple',
    readTime: '45 min read'
  },
  {
    title: 'AI 2026: Mega Trends & Predictions',
    slug: 'ai-2026-mega-trends-predictions',
    excerpt: 'The most consequential AI shifts in 2026—agentic automation, observability, and cost optimization.',
    category: 'Featured Article',
    publishedAt: 'January 15, 2026',
    image: '🚀',
    color: 'blue',
    readTime: '12 min read'
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
    title: 'AI Roadmaps 2026: What to Build Next and Why',
    slug: 'ai-roadmaps-2026',
    excerpt: 'A pragmatic roadmap across CX, ops, and platforms with reliability, governance, and ROI.',
    category: 'Strategy',
    publishedAt: 'September 30, 2025',
    image: '🧭',
    color: 'indigo',
    readTime: '10 min read'
  },
  {
    title: 'AI Operational Resilience 2026: Designing for Failure and Recovery',
    slug: 'ai-operational-resilience-2026',
    excerpt: 'Blueprint for 99.99% uptime with policy tests, isolation, and automated recovery.',
    category: 'Operations',
    publishedAt: 'September 29, 2025',
    image: '🧯',
    color: 'blue',
    readTime: '14 min read'
  },
  {
    title: 'AI Agent Observability 2026: Metrics, Traces, and Guardrails',
    slug: 'ai-agent-observability-2026',
    excerpt: 'Instrument agents with traces, evals, and policy guardrails to ship reliable autonomy.',
    category: 'AI Reliability',
    publishedAt: 'September 29, 2025',
    image: '🔎',
    color: 'purple',
    readTime: '12 min read'
  },
  {
    title: 'AI Value Stream Analytics 2026: Trace ROI from Token to Revenue',
    slug: 'ai-value-stream-analytics-2026',
    excerpt: 'Connect model spend to customer value with end-to-end tracing and scorecards.',
    category: 'Analytics',
    publishedAt: 'September 30, 2025',
    image: '📈',
    color: 'blue',
    readTime: '9 min read'
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
  },
  {
    title: 'AI Executive Playbook 2027: Ship Reliable, Measurable AI',
    slug: 'ai-executive-playbook-2027',
    excerpt: 'A concise executive guide to planning, funding, and governing AI that delivers measurable outcomes in 2027.',
    category: 'Strategy',
    publishedAt: 'January 2027',
    image: '📘',
    color: 'indigo',
    readTime: '12 min read'
  },
  {
    title: 'AI Operational Resilience 2026: Designing for Failure and Recovery',
    slug: 'ai-operational-resilience-2026',
    excerpt: 'Blueprint for 99.99% uptime with policy tests, isolation, chaos testing, and automated recovery for AI systems.',
    category: 'Operations',
    publishedAt: 'September 30, 2025',
    image: '🧯',
    color: 'orange',
    readTime: '14 min read'
  }
  ,
  {
    title: 'Agentic Workflow Orchestration 2026: Reliable AI Workflows',
    slug: 'agentic-workflow-orchestration-2026',
    excerpt: 'Orchestrate multi-step agents with policy gates, human approvals, and observability for measurable ROI.',
    category: 'Architecture',
    publishedAt: 'September 30, 2025',
    image: '🧩',
    color: 'purple',
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
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold mb-6">Zion Insights Blog</h1>
        <p className="text-white/70 mb-10">
          Curated research, playbooks, and case studies for enterprise AI leaders.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.slice(0, 8).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
                <div className="mb-2 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs bg-${post.color}-500/20 text-${post.color}-300 border border-${post.color}-500/30`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-white/60">{post.publishedAt}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mt-2 text-sm">{post.excerpt}</p>
                <div className="mt-3 text-white/60 text-sm">{post.readTime}</div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

