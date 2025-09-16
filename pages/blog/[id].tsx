// @ts-nocheck
import Head from 'next/head'
import { useRouter } from 'next/router'

// Simple registry mapping ids used by pages/blog and Homepage to components in /blog
const registry: Record<string, React.ComponentType> = {
  'agentic-product-playbooks': require('../../blog/agentic-product-playbooks').default,
  'ai-automation-trends-2025': require('../../blog/ai-automation-trends-2025').default,
  'ai-customer-agents-2025': require('../../blog/ai-customer-agents-2025').default,
  'ai-2026-operational-evals-blueprint': require('../../blog/ai-2026-operational-evals-blueprint').default,
  'ai-2026-agent-observability-blueprint': require('../../blog/ai-2026-agent-observability-blueprint').default,
  'ai-2026-foundation-model-quality-engineering': require('../../blog/ai-2026-foundation-model-quality-engineering').default,
  'cloud-cost-optimization-2025': require('../../blog/cloud-cost-optimization-2025').default,
  'genai-2025-practical-compliance-patterns': require('../../blog/genai-2025-practical-compliance-patterns').default,
  'agentic-crm-autonomous-revenue-workflows-2025': require('../../blog/agentic-crm-autonomous-revenue-workflows-2025').default,
  'ai-ethics-automation': require('../../blog/ai-ethics-automation').default,
  'autonomous-content-generation': require('../../blog/autonomous-content-generation').default,
  'cloud-native-automation': require('../../blog/cloud-native-automation').default,
  'evals-and-guardrails': require('../../blog/evals-and-guardrails').default,
  'future-of-work': require('../../blog/future-of-work').default,
  'performance-optimization': require('../../blog/performance-optimization').default,
  'ai-2026-real-time-rag-architectures': require('../../blog/ai-2026-real-time-rag-architectures').default,
  'ai-2026-guardrailed-tooling-risk-tiers': require('../../blog/ai-2026-guardrailed-tooling-risk-tiers').default,
  'ai-2026-production-evidence-hub-blueprint': require('../../blog/ai-2026-production-evidence-hub-blueprint').default,
}

export default function BlogPostRouter() {
  const router = useRouter()
  const { id } = router.query
  const slug = Array.isArray(id) ? id[0] : id

  if (!slug) {
    return null
  }

  const Component = registry[slug]

  if (!Component) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <Head>
            <title>Not Found | Zion Tech Group</title>
          </Head>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Article not found</h1>
          <p className="text-gray-600 mb-6">We couldn't find the article you were looking for.</p>
          <a href="/blog" className="text-blue-600 hover:text-blue-700 font-medium">Back to Blog</a>
        </div>
      </main>
    )
  }

  return <Component />
}

