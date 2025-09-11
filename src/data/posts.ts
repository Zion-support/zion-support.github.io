export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string; // ISO date
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-support-24-7',
    title: 'How AI-Powered 24/7 IT Support Transforms SLAs',
    excerpt: 'Learn how always-on, AI-augmented support can reduce MTTR and elevate customer satisfaction.',
    content:
      'Around-the-clock IT support used to require follow-the-sun staffing. With modern AI assistants and automation, teams can triage incidents, auto-remediate common issues, and escalate with rich context... ',
    publishedAt: '2025-09-10',
    tags: ['AI', 'Support', 'SLA']
  },
  {
    slug: 'green-it-roadmap',
    title: 'A Practical Roadmap to Green IT for SMEs',
    excerpt: 'Cut costs and carbon with quick wins across infra, devices, and operations.',
    content:
      'Sustainability initiatives do not have to be expensive or slow. Start with measuring your baseline, right-size compute, adopt power-aware policies, and choose efficient frameworks... ',
    publishedAt: '2025-09-08',
    tags: ['Sustainability', 'Green IT']
  },
  {
    slug: 'micro-saas-playbook',
    title: 'The 30-Day Micro‑SaaS Launch Playbook',
    excerpt: 'From idea validation to first revenue: a focused execution checklist.',
    content:
      'Launching a Micro‑SaaS does not require a large team. Validate the problem, define success metrics, prototype the core workflow, and ship a paid MVP with feedback loops... ',
    publishedAt: '2025-09-05',
    tags: ['MicroSaaS', 'Product']
  }
  ,
  {
    slug: 'edge-ai-on-prem-breakthroughs',
    title: 'Edge AI On‑Prem: Breakthroughs That Cut Latency by 80%+',
    excerpt: 'Why moving inference to the edge slashes costs and accelerates mission‑critical apps.',
    content:
      'Placing inference close to the data eliminates round‑trip latency and reduces egress. With compact GPU/TPU form factors and quantization‑aware models, teams can deploy resilient, low‑latency pipelines for vision, voice, and anomaly detection... ',
    publishedAt: '2025-09-11',
    tags: ['AI', 'Edge', 'Latency']
  },
  {
    slug: 'zero-trust-starter-pack',
    title: 'Zero‑Trust Starter Pack: 7 Controls for Week One',
    excerpt: 'Pragmatic, high‑impact steps to reduce blast radius without slowing delivery.',
    content:
      'Adopt identity‑aware proxies, short‑lived credentials, device posture checks, and default‑deny segmentation. Instrument production with continuous verification and automate drift detection to keep least‑privilege policies enforceable at scale... ',
    publishedAt: '2025-09-09',
    tags: ['Security', 'Zero Trust']
  },
  {
    slug: 'serverless-cost-optimization',
    title: 'Serverless Cost Optimization: From Spikes to Smooth Sailing',
    excerpt: 'Tame cold starts, right‑size memory, and cache hot paths to slash bills.',
    content:
      'Profile invocations to pick optimal memory/CPU, pre‑warm critical paths, and push static responses to the edge. Use async queues for bursty workloads and adopt idempotent retries to keep SLOs tight without overprovisioning... ',
    publishedAt: '2025-09-07',
    tags: ['Cloud', 'Serverless', 'FinOps']
  }
];

export function getLatestPosts(limit: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}

