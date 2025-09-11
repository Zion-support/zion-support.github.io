<<<<<<< HEAD
import Link from 'next/link';

type BlogPostMeta = {
	title: string;
	slug: string;
	description: string;
	date: string;
};

const posts: BlogPostMeta[] = [
	{
		title: 'AI-Powered Customer Support: From FAQ Bots to Full Resolution',
		slug: 'ai-powered-customer-support',
		description:
			'Practical roadmap to evolve from basic chatbots to autonomous, KPI-driven support experiences.',
		date: '2025-09-11',
	},
	{
		title: 'Micro SaaS in 60 Days: A Lean Delivery Blueprint',
		slug: 'micro-saas-in-60-days',
		description:
			'How to scope, build, launch, and monetize a profitable niche product with minimal risk.',
		date: '2025-09-11',
	},
	{
		title: 'Cloud Cost Optimization That Doesn’t Hurt Velocity',
		slug: 'cloud-cost-optimization-without-slowdowns',
		description:
			'Concrete steps to cut 25–45% of cloud spend while keeping teams shipping fast.',
		date: '2025-09-11',
	},
	{
		title: 'AI Infrastructure Blueprint for 2025',
		slug: 'ai-infrastructure-blueprint',
		description:
			'Build a scalable, cost-efficient AI stack across data, training, and inference.',
		date: '2025-09-11',
	},
	{
		title: 'Go-To-Market Playbook for Micro SaaS',
		slug: 'go-to-market-for-micro-saas',
		description:
			'Positioning, channels, pricing, and activation to reach first 200 customers.',
		date: '2025-09-11',
	},
=======
// @ts-nocheck
import React from 'react';
import Link from 'next/link';

const posts = [
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
    title: 'Agentic Workflows in the Enterprise: Reliable, Observable, Governed',
    description:
      'Blueprint for agentic systems with reliability, observability, and governance at the core.',
    href: '/blog/agentic-workflows-enterprise',
    date: '2025-09-11',
    tags: ['AI', 'Agents', 'Governance'],
  },
  {
    title: 'AI Risk Register 2025: Practical Controls and Runbooks',
    description:
      'A pragmatic template for risks, owners, mitigations, and runbooks that scale.',
    href: '/blog/ai-risk-register-2025',
    date: '2025-09-11',
    tags: ['AI', 'Governance', 'Risk'],
  },
  {
    title: 'Zero-Trust AI Integrations: Safely Connecting to Your Systems',
    description:
      'Least privilege, short-lived creds, and policy approvals for safe integrations.',
    href: '/blog/zero-trust-ai-integrations',
    date: '2025-09-11',
    tags: ['Security', 'AI', 'Integrations'],
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
  {
    title: 'GenAI in Production: SLAs, Costs, and Control in 2025',
    description:
      'SLOs, guardrails, and budget enforcement patterns for GenAI products.',
    href: '/blog/genai-in-production-slas-costs-control-2025',
    date: '2025-09-11',
    tags: ['GenAI', 'SLOs', 'Cost Management'],
  },
  {
    title: 'Edge + AI: Personalization Without the Privacy Tradeoff',
    description:
      'Blend edge inference and federated analytics for fast, private personalization.',
    href: '/blog/edge-ai-privacy-personalization',
    date: '2025-09-11',
    tags: ['Edge', 'Privacy', 'Personalization'],
  },
  {
    title: 'Shipping Safer: Incident-Ready CI/CD for High-Velocity Teams',
    description:
      'Rollback-first pipelines, canaries, and SLO-aware gates for safer velocity.',
    href: '/blog/incident-ready-cicd',
    date: '2025-09-11',
    tags: ['DevOps', 'Reliability', 'CI/CD'],
  },
>>>>>>> chore/add-new-blog-content-and-promos
];

export default function BlogIndexPage() {
	return (
		<div className='min-h-screen bg-white'>
			<section className='py-16 bg-gray-50 border-b border-gray-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Blog</h1>
					<p className='text-gray-600 max-w-2xl'>
						Insights on AI, automation, cloud, and building micro SaaS products.
					</p>
				</div>
			</section>
			<section className='py-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
					{posts.map((post) => (
						<Link key={post.slug} href={`/blog/${post.slug}`} className='group'>
							<article className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col'>
								<time className='text-sm text-gray-500'>{new Date(post.date).toLocaleDateString()}</time>
								<h2 className='mt-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
									{post.title}
								</h2>
								<p className='mt-2 text-gray-600 flex-1'>{post.description}</p>
								<span className='mt-4 text-blue-600 font-medium'>Read more →</span>
							</article>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}

