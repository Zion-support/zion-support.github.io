import React from 'react';
import Link from 'next/link';

const posts = [
  {
    title: 'AI Sales Playbooks 2025: Sequencing, Scoring, and Agentic SDRs',
    description:
      'Proven outbound frameworks with AI-assisted research, multi-channel cadences, and evals.',
    href: '/blog/ai-sales-playbooks-2025',
    date: '2025-09-11',
    tags: ['Sales', 'AI', 'Playbooks'],
  },
  {
    title: 'Data Governance for AI 2025: Practical, Lightweight Controls',
    description:
      'Implement trustable data flows, lineage, and access control for GenAI without heavy ceremony.',
    href: '/blog/data-governance-for-ai-2025',
    date: '2025-09-11',
    tags: ['Data', 'Governance', 'AI'],
  },
  {
    title: 'LLM Cost Optimization Playbook: Cut Spend Without Losing Quality',
    description:
      'Reduce inference spend 20–50% with routing, retrieval, batching, and tight observability.',
    href: '/blog/llm-cost-optimization-playbook',
    date: '2025-09-11',
    tags: ['LLM', 'Cost', 'Ops'],
  },
  {
    title: 'AI Governance Checklist 2025: Operationalize Policy With Evals',
    description:
      'A concise, actionable checklist to stand up pragmatic AI governance that accelerates delivery.',
    href: '/blog/ai-governance-checklist-2025',
    date: '2025-09-11',
    tags: ['AI', 'Governance', 'Risk'],
  },
  {
    title: 'AI Copilots for Engineering Teams',
    description:
      'How to deploy secure, repo-aware copilots that speed reviews and cut toil.',
    href: '/blog/ai-copilots-for-engineering',
    date: '2025-09-11',
    tags: ['AI', 'DevEx', 'Productivity'],
  },
  {
    title: 'Startup Fundraising in 2025: Efficient Rounds in a Tough Market',
    description:
      'Prove traction, run a tight process, and negotiate governance to raise efficiently.',
    href: '/blog/startup-fundraising-in-2025',
    date: '2025-09-11',
    tags: ['Startup', 'Fundraising', 'Strategy'],
  },
  {
    title: 'GenAI Security in 2025: Practical Controls That Actually Work',
    description:
      'A pragmatic security blueprint for production GenAI: controls, gateways, and evals.',
    href: '/blog/genai-security-2025',
    date: '2025-09-11',
    tags: ['AI', 'Security', 'Governance'],
  },
  {
    title: 'Secure RAG Architecture in 2025: Safety, Scale, and Speed',
    description:
      'A pragmatic blueprint for multi-tenant, eval-driven RAG with strong isolation and uptime.',
    href: '/blog/secure-rag-architecture-2025',
    date: '2025-09-11',
    tags: ['RAG', 'Security', 'Architecture'],
  },
  {
    title: 'AI Product Roadmaps That Actually Ship',
    description:
      'Milestones, guardrails, and evals that keep AI features shipping on time with quality.',
    href: '/blog/ai-product-roadmaps-that-ship',
    date: '2025-09-11',
    tags: ['Product', 'AI', 'Strategy'],
  },
  {
    title: 'Edge AI in Manufacturing 2025: Faster Decisions, Lower Costs',
    description:
      'Move inference to the edge for sub-100ms decisions, resilience, and bandwidth savings.',
    href: '/blog/edge-ai-in-manufacturing-2025',
    date: '2025-09-11',
    tags: ['Edge AI', 'Manufacturing', 'IoT'],
  },
  {
    title: 'GenAI Evals in Production: What Actually Works',
    description:
      'Build continuous eval loops with golden tasks, HITL audits, and drift-aware sampling.',
    href: '/blog/genai-evals-in-production',
    date: '2025-09-11',
    tags: ['GenAI', 'Evals', 'Quality'],
  },
  {
    title: 'Startup Micro SaaS Playbook: From Idea to $10k MRR',
    description:
      'A pragmatic blueprint to launch and grow a Micro SaaS with capital efficiency.',
    href: '/blog/startup-micro-saas-playbook',
    date: '2025-09-11',
    tags: ['Startup', 'SaaS', 'Growth'],
  },
  {
    title: 'AI Governance Operating Model: From Policy to Practice',
    description:
      'Translate policy into day-to-day decisions with risk tiering, evals, and reviews.',
    href: '/blog/ai-governance-operating-model',
    date: '2025-09-11',
    tags: ['AI', 'Governance', 'Risk'],
  },
  {
    title: 'Serverless for ML in 2025: Simple, Cost-Efficient, Production-Ready',
    description:
      'Run ML and GenAI on serverless with predictable cost and strong reliability.',
    href: '/blog/serverless-for-ml-2025',
    date: '2025-09-11',
    tags: ['Serverless', 'ML', 'Cloud'],
  },
  {
    title: 'Practical AI Agents for Small Businesses',
    description:
      'How SMBs can deploy lightweight AI agents to automate support, sales outreach, and back-office tasks safely.',
    href: '/blog/ai-agents-for-smbs',
    date: '2025-09-11',
    tags: ['AI', 'Automation', 'Agents'],
  },
  {
    title: 'Production-Grade AI Agents: Observability and Safety',
    description:
      'How to harden agents for production with logging, evals, safety and cost controls.',
    href: '/blog/production-grade-ai-agents',
    date: '2025-09-11',
    tags: ['AI', 'Agents', 'MLOps'],
  },
  {
    title: 'Cloud Cost Optimization in 2025: Proven Playbook',
    description:
      'A tactical guide to cut 20–40% of cloud spend without sacrificing performance or velocity.',
    href: '/blog/cloud-cost-optimization-2025',
    date: '2025-09-11',
    tags: ['Cloud', 'FinOps', 'DevOps'],
  },
  {
    title: 'Cloud FinOps Automation: 30% Savings With Guardrails',
    description:
      'Automation-first FinOps: waste sweeps, rightsizing approvals, commitments, and guardrails.',
    href: '/blog/cloud-finops-automation',
    date: '2025-09-11',
    tags: ['Cloud', 'FinOps', 'Automation'],
  },
  {
    title: 'AI-Powered Customer Support Playbooks',
    description:
      'Production-ready patterns for self-serve assistants, case triage, agent copilots, and QA.',
    href: '/blog/ai-customer-support-playbooks',
    date: '2025-09-11',
    tags: ['AI', 'CX', 'Automation'],
  },
  {
    title: 'AI Infrastructure Cost Controls That Actually Work',
    description:
      'A pragmatic framework to reduce inference costs while maintaining performance and velocity.',
    href: '/blog/ai-infra-cost-controls',
    date: '2025-09-11',
    tags: ['Cloud', 'FinOps', 'AI'],
  },
  {
    title: 'Enterprise RAG Blueprint: From Pilot to Production',
    description:
      'Step-by-step architecture and rollout plan for RAG in regulated, multi-tenant environments.',
    href: '/blog/enterprise-rag-blueprint',
    date: '2025-09-11',
    tags: ['RAG', 'LLM', 'Architecture'],
  },
  {
    title: 'The Modern Data Stack in 2025: Pragmatic Guide',
    description:
      'Ingestion, lakehouse, transformations, metrics and activation that actually work at scale.',
    href: '/blog/modern-data-stack-2025',
    date: '2025-09-11',
    tags: ['Data', 'Analytics', 'Engineering'],
  },
];

export default function BlogIndexPage() {
  return (
    <div className='min-h-screen'>
      <header className='mb-10'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900'>Blog</h1>
        <p className='mt-3 text-gray-600 max-w-2xl'>
          Curated insights, implementation guides, and trend reports from Zion Tech Group.
        </p>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {posts.map((post) => (
          <Link key={post.href} href={post.href} className='group'>
            <article className='border border-gray-200 rounded-lg p-6 bg-white h-full hover:shadow-md transition-shadow'>
              <div className='text-sm text-gray-500'>{post.date}</div>
              <h2 className='mt-2 text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
                {post.title}
              </h2>
              <p className='mt-2 text-gray-600'>{post.description}</p>
              <div className='mt-4 flex gap-2 flex-wrap'>
                {post.tags.map((tag) => (
                  <span key={tag} className='text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded'>
                    {tag}
                  </span>
                ))}
              </div>
              <div className='mt-4 text-blue-600 font-medium'>Read more →</div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

