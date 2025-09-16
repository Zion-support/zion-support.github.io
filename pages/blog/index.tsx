import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground'

const posts = [
  { slug: 'ai-customer-agents-2025', title: 'Customer-Facing AI Agents in 2025', excerpt: 'Design reliable, on-brand customer agents with measurable ROI.' },
  { slug: 'ai-automation-trends-2025', title: 'AI Automation Trends 2025', excerpt: 'What forward-leaning teams ship next with agents, RAG, and guardrails.' },
  { slug: 'cloud-native-automation', title: 'Cloud-Native Automation', excerpt: 'GitOps, SLOs, and platform engineering patterns that scale.' },
  { slug: 'future-of-work', title: 'Future of Work', excerpt: 'Autonomous agents, copilots, and the new operating model.' },
  { slug: 'performance-optimization', title: 'Performance Optimization', excerpt: 'Web vitals, RUM, and release health for conversion lifts.' },
  { slug: 'ai-ethics-automation', title: 'AI Ethics & Automation', excerpt: 'Responsible AI with evaluations, safety baselines, and governance.' },
  { slug: 'autonomous-content-generation', title: 'Autonomous Content Generation', excerpt: 'Ship content faster with quality and factuality checks.' },
  { slug: 'agentic-product-playbooks', title: 'Agentic Product Playbooks', excerpt: 'Practical blueprints for shipping agentic workflows into production.' },
  { slug: 'evals-and-guardrails', title: 'Evals, Guardrails, and Safety', excerpt: 'Build trustworthy AI systems with evaluations and safety baselines.' },
  { slug: 'genai-2025-practical-compliance-patterns', title: 'GenAI for Regulated Industries (2025)', excerpt: 'Practical compliance patterns for GenAI rollouts in regulated sectors.' },
  { slug: 'agentic-crm-autonomous-revenue-workflows-2025', title: 'Agentic CRM: Autonomous Revenue Workflows (2025)', excerpt: 'Design safe, effective autonomous workflows across the revenue funnel.' }
]

const featuredNew = [
  { slug: 'ai-2026-evidence-led-operations-starter-kit', title: 'Evidence‑Led Operations — Starter Kit', cta: 'Read Guide' },
  { slug: 'ai-2026-agent-risk-metrics', title: 'Agent Risk Metrics — What to Track', cta: 'See Metrics' },
  { slug: 'rag-2026-freshness-aware-retrieval-patterns', title: 'RAG: Freshness‑Aware Retrieval', cta: 'View Patterns' }
]

export default function BlogIndexPage() {
  return (
    <UltraFuturisticBackground intensity="medium">
      <Head>
        <title>Blog | Zion Tech Group</title>
        <meta name="description" content="Insights on AI, cloud, automation, and platform engineering." />
        <link rel="canonical" href="https://ziontechgroup.com/blog" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/5 border border-purple-400/20 p-6 rounded-xl">
            <div>
              <div className="text-sm font-semibold text-purple-300">New on the blog</div>
              <h2 className="text-2xl font-bold text-white mt-1">Evidence‑Led Ops, Risk Metrics, Fresh RAG</h2>
              <p className="text-gray-300 mt-2">Three practical guides you can ship this week.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {featuredNew.map((f) => (
                <Link key={f.slug} href={`/blog/${f.slug}`} className="inline-block bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700">
                  {f.cta}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Insights & Guides
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Practical playbooks and deep dives on AI, cloud, and modern software delivery.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.slug} className="p-6 bg-black/40 border border-gray-700/50 hover:border-cyan-500/40 transition-colors rounded-lg backdrop-blur-sm">
              <h2 className="text-white text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-400 mb-4">{p.excerpt}</p>
              <Link href={`/blog/${p.slug}`} className="text-cyan-400 hover:text-white font-medium">Read →</Link>
            </div>
          ))}
        </div>
      </div>
    </UltraFuturisticBackground>
  )
}

