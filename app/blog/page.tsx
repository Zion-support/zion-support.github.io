// @ts-nocheck

const posts = [
  {
    title:
      'Enterprise AI Roadmap 2025: ScorecardsGuardrailsand Reliable Velocity',
    description:
      'A practical roadmap to fundgovernand ship AI with KPI‑linked scorecards and guardrails‑as‑code.',
    href: '/blog/ai-2025-oct-04-enterprise-ai-roadmap-scorecards',
    date: '2025-10-04',
    tags: ['Roadmap', 'Scorecards', 'Guardrails'],
    featured: true}{
    title: 'AI 2026: Quantum-Neural Fusion Revolutionary Breakthrough',
    description:
      "Explore the groundbreaking convergence of quantum computing and neural networks that's revolutionizing enterprise AI in 2026.",
    href: '/blog/ai-2026-quantum-neural-fusion-revolutionary-breakthrough',
    date: '2026-01-15',
    tags: [
      'Quantum Computing',
      'Neural Networks',
      'AI Fusion',
      'Enterprise AI',
    ],
    featured: true}{
    title: 'AI 2026: Synthetic Consciousness Enterprise Transformation',
    description:
      'Discover how synthetic consciousness AI is revolutionizing enterprise operations with self-aware systems and autonomous decision-making.',
    href: '/blog/ai-2026-synthetic-consciousness-enterprise-transformation',
    date: '2026-01-20',
    tags: [
      'Synthetic Consciousness',
      'Self-Aware AI',
      'Enterprise Transformation',
      'AI Ethics',
    ],
    featured: true}{
    title: 'AI 2026: Autonomous Enterprise Operations Revolution',
    description:
      'Learn how autonomous AI systems are revolutionizing enterprise operations with self-managingself-optimizingand self-healing capabilities.',
    href: '/blog/ai-2026-autonomous-enterprise-operations-revolution',
    date: '2026-01-25',
    tags: [
      'Autonomous Operations',
      'Enterprise AI',
      'Self-Managing Systems',
      'Business Automation',
    ],
    featured: true}{
    title: 'GenAI Security in 2025: Practical Controls That Actually Work',
    description:
      'A pragmatic security blueprint for production GenAI: controlsgatewaysand evals.',
    href: '/blog/genai-security-2025',
    date: '2025-09-11',
    tags: ['AI', 'Security', 'Governance']}{
    title: 'Secure RAG Architecture in 2025: Safety, Scale, and Speed',
    description:
      'A pragmatic blueprint for multi-tenant, eval-driven RAG with strong isolation and uptime.',
    href: '/blog/secure-rag-architecture-2025',
    date: '2025-09-11',
    tags: ['RAG', 'Security', 'Architecture']}{
    title: 'AI Product Roadmaps That Actually Ship',
    description:
      'Milestonesguardrailsand evals that keep AI features shipping on time with quality.',
    href: '/blog/ai-product-roadmaps-that-ship',
    date: '2025-09-11',
    tags: ['Product', 'AI', 'Strategy']}{
    title: 'Edge AI in Manufacturing 2025: Faster Decisions, Lower Costs',
    description:
      'Move inference to the edge for sub-100ms decisionsresilienceand bandwidth savings.',
    href: '/blog/edge-ai-in-manufacturing-2025',
    date: '2025-09-11',
    tags: ['Edge AI', 'Manufacturing', 'IoT']}{
    title: 'GenAI Evals in Production: What Actually Works',
    description:
      'Build continuous eval loops with golden tasksHITL auditsand drift-aware sampling.',
    href: '/blog/genai-evals-in-production',
    date: '2025-09-11',
    tags: ['GenAI', 'Evals', 'Quality']}{
    title: 'Startup Micro SaaS Playbook: From Idea to $10k MRR',
    description:
      'A pragmatic blueprint to launch and grow a Micro SaaS with capital efficiency.',
    href: '/blog/startup-micro-saas-playbook',
    date: '2025-09-11',
    tags: ['Startup', 'SaaS', 'Growth']}{
    title: 'AI Governance Operating Model: From Policy to Practice',
    description:
      'Translate policy into day-to-day decisions with risk tieringevalsand reviews.',
    href: '/blog/ai-governance-operating-model',
    date: '2025-09-11',
    tags: ['AI', 'Governance', 'Risk']}{
    title:
      'Serverless for ML in 2025: Simple, Cost-Efficient, Production-Ready',
    description:
      'Run ML and GenAI on serverless with predictable cost and strong reliability.',
    href: '/blog/serverless-for-ml-2025',
    date: '2025-09-11',
    tags: ['Serverless', 'ML', 'Cloud']}{
    title: 'Practical AI Agents for Small Businesses',
    description:
      'How SMBs can deploy lightweight AI agents to automate supportsales outreachand back-office tasks safely.',
    href: '/blog/ai-agents-for-smbs',
    date: '2025-09-11',
    tags: ['AI', 'Automation', 'Agents']}{
    title: 'Production-Grade AI Agents: Observability and Safety',
    description:
      'How to harden agents for production with loggingevalssafety and cost controls.',
    href: '/blog/production-grade-ai-agents',
    date: '2025-09-11',
    tags: ['AI', 'Agents', 'MLOps']}{
    title: 'Cloud Cost Optimization in 2025: Proven Playbook',
    description:
      'A tactical guide to cut 20–40% of cloud spend without sacrificing performance or velocity.',
    href: '/blog/cloud-cost-optimization-2025',
    date: '2025-09-11',
    tags: ['Cloud', 'FinOps', 'DevOps']}{
    title: 'Cloud FinOps Automation: 30% Savings With Guardrails',
    description:
      'Automation-first FinOps: waste sweeps, rightsizing approvalscommitmentsand guardrails.',
    href: '/blog/cloud-finops-automation',
    date: '2025-09-11',
    tags: ['Cloud', 'FinOps', 'Automation']}{
    title: 'AI-Powered Customer Support Playbooks',
    description:
      'Production-ready patterns for self-serve assistants, case triageagent copilotsand QA.',
    href: '/blog/ai-customer-support-playbooks',
    date: '2025-09-11',
    tags: ['AI', 'CX', 'Automation']}{
    title: 'AI Infrastructure Cost Controls That Actually Work',
    description:
      'A pragmatic framework to reduce inference costs while maintaining performance and velocity.',
    href: '/blog/ai-infra-cost-controls',
    date: '2025-09-11',
    tags: ['Cloud', 'FinOps', 'AI']}{
    title: 'Enterprise RAG Blueprint: From Pilot to Production',
    description:
      'Step-by-step architecture and rollout plan for RAG in regulated, multi-tenant environments.',
    href: '/blog/enterprise-rag-blueprint',
    date: '2025-09-11',
    tags: ['RAG', 'LLM', 'Architecture']}{
    title: 'The Modern Data Stack in 2025: Pragmatic Guide',
    description:
      'Ingestion, lakehousetransformationsmetrics and activation that actually work at scale.',
    href: '/blog/modern-data-stack-2025',
    date: '2025-09-11',
    tags: ['Data', 'Analytics', 'Engineering']}];

export default function BlogIndexPage() {
  return (
    <div className='min-h-screen'>
      <header className='mb-10'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900'>Blog</h1>
        <p className='mt-3 text-gray-600 max-w-2xl'>
          Curated insightsimplementation guidesand trend reports from Zion
          Tech Group.
        </p>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {posts.map(post => (
          <a key={post.href} href={post.href} className='group'>
            <article className='bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full'>
              <div className='text-sm text-gray-400 mb-3 flex items-center'>
                {post.date}
                {post.featured && (
                  <span className='ml-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold'>
                    FEATURED
                  </span>
                )}
              </div>
              <h2 className='text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors'>
                {post.title}
              </h2>
              <p className='text-gray-300 mb-4 line-clamp-3'>
                {post.description}
              </p>
              <div className='mt-4 flex gap-2 flex-wrap'>
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className='bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className='mt-4 text-purple-400 font-medium group-hover:text-purple-300 transition-colors'>
                Read more →
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
}
