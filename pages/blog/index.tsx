import Head from 'next/head'
import Link from 'next/link'
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground'

const posts = [
  { slug: 'agent-benchmarking-2026', title: 'New Frontier in Agent Benchmarking (2026)', excerpt: 'Practical evaluation patterns and metrics to ship reliable agent systems.' },
  { slug: 'responsible-autonomy-checklist', title: 'Responsible Autonomy Checklist', excerpt: 'A pragmatic preflight checklist for deploying autonomous features safely.' },
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
  { slug: 'agentic-crm-autonomous-revenue-workflows-2025', title: 'Agentic CRM: Autonomous Revenue Workflows (2025)', excerpt: 'Design safe, effective autonomous workflows across the revenue funnel.' },
  { slug: 'ai-2026-foundation-model-quality-engineering', title: 'Foundation Model Quality Engineering (2026)', excerpt: 'Evals, safety, and release health for production-grade foundation model apps.' },
  { slug: 'ai-2026-operationalizing-agentic-workflows', title: 'Operationalizing Agentic Workflows (2026)', excerpt: 'Design SLIs/SLOs, guardrails, and evals to ship reliable agentic systems.' }
  ,{ slug: 'ai-2026-operational-risk-metrics-for-agents', title: 'Operational Risk Metrics for Agents (2026)', excerpt: 'Standardize override rates, violations, groundedness, and MTTR.' }
  ,{ slug: 'ai-2026-production-evidence-hub-blueprint', title: 'Production Evidence Hub — Blueprint (2026)', excerpt: 'Centralize evals, traces, policy events, and incidents for audits.' }
  ,{ slug: 'ai-2026-secure-tooling-permissions-blueprint', title: 'Secure Tooling Permissions — Blueprint (2026)', excerpt: 'Risk‑tiered adapters, approvals, and budgets for safe agent actions.' }
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

