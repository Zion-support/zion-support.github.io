import React from 'react';
import Link from 'next/link';

const posts = [
  {
    title: 'GenAI Security in 2025: Practical Controls That Actually Work',
    description:
      'A pragmatic security blueprint for production GenAI: controls, gateways, and evals.',
    href: '/blog/genai-security-2025',
    date: '2025-09-11',
    tags: ['AI', 'Security', 'Governance'],
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

