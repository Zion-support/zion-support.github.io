export type InsightArticle = {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string; // ISO date string
  readMinutes: number;
};

export const latestInsights: InsightArticle[] = [
  {
    id: 'ai-2025-oct-enterprise-rag-architecture-blueprint',
    title: 'Enterprise RAG Architecture Blueprint: 99.9% Precision at Scale',
    summary:
      'Reference architectures for multimodal RAG with cost-aware routing, hybrid search, and governance that scales across business units.',
    category: 'RAG Architecture',
    date: '2025-10-01',
    readMinutes: 11,
  },
  {
    id: 'ai-2025-oct-agent-observability-guide',
    title:
      'Agent Observability: Production Guide for Safe, Reliable Autonomous Systems',
    summary:
      'Implement structured traces, safety scores, and action audits for agent systems to reach enterprise SLOs and compliance.',
    category: 'AI Agents',
    date: '2025-10-01',
    readMinutes: 9,
  },
  {
    id: 'ai-2025-oct-edge-inference-patterns-production-guide',
    title: 'Edge Inference Patterns: Production-Ready AI Deployment Guide 2025',
    summary:
      'Master production-ready edge inference with real-world deployment strategies, performance optimization, and cost-effective scaling for enterprise AI.',
    category: 'Edge AI',
    date: '2025-10-01',
    readMinutes: 12,
  },
  {
    id: 'ai-2025-oct-northstar-metrics-ai-product-success',
    title:
      'North Star Metrics for AI Product Success: The Complete 2025 Framework',
    summary:
      'Learn the proven framework used by top AI companies to measure product success. Discover metrics that correlate with revenue and retention.',
    category: 'AI Strategy',
    date: '2025-10-01',
    readMinutes: 10,
  },
  {
    id: 'observability-otel-traces-that-matter',
    title: 'OpenTelemetry in Production: Traces That Engineers Actually Use',
    summary:
      'Sampling strategies, semantic conventions, and dashboards that shrink MTTR for complex stacks.',
    category: 'Observability',
    date: '2025-09-29',
    readMinutes: 6,
  },
  {
    id: 'edge-inference-patterns',
    title: 'Edge Inference Patterns That Actually Reduce Latency',
    summary:
      'Concrete deployment topologies, batching tricks, and cache strategies that cut P95 by 40%.',
    category: 'AI Infrastructure',
    date: '2025-09-28',
    readMinutes: 7,
  },
  {
    id: 'secure-ml-pipelines',
    title: 'Securing Machine Learning Pipelines in Production',
    summary:
      'Practical steps to harden data flows, model registries, and deployment targets for ML systems.',
    category: 'Security',
    date: '2025-08-20',
    readMinutes: 7,
  },
  {
    id: 'north-star-engineering-metrics',
    title: 'North‑Star Engineering Metrics: Fewer KPIs, Better Outcomes',
    summary:
      'How to pick three metrics that align delivery, reliability, and cost without dashboard bloat.',
    category: 'Leadership',
    date: '2025-08-30',
    readMinutes: 5,
  },
  {
    id: 'cloud-cost-optimization',
    title: 'Cloud Cost Optimization: 9 Wins in 90 Days',
    summary:
      'How we helped three clients reduce cloud spend by 32% on average without sacrificing performance.',
    category: 'Cloud',
    date: '2025-08-05',
    readMinutes: 5,
  },
  {
    id: 'data-governance-starter',
    title: 'Data Governance Starter Guide for Mid‑Market Teams',
    summary:
      'A no‑nonsense playbook for data quality, lineage, and access controls you can adopt this quarter.',
    category: 'Data',
    date: '2025-07-18',
    readMinutes: 8,
  },
  {
    id: 'kubernetes-runtime-security-essentials',
    title: 'Kubernetes Security: Runtime Protection Essentials',
    summary:
      'Secure your K8s clusters with RBAC, network policies, pod security standards, and real-time threat detection.',
    category: 'Security',
    date: '2025-09-30',
    readMinutes: 9,
  },
  {
    id: 'green-ml-carbon-optimization',
    title: 'Green ML: Optimizing AI Carbon Footprint in Production',
    summary:
      'Measure and reduce ML carbon emissions with efficient training, model compression, and renewable-powered inference.',
    category: 'AI & Sustainability',
    date: '2025-09-30',
    readMinutes: 7,
  },
  {
    id: 'distributed-tracing-microservices',
    title: 'Distributed Tracing: Debugging Microservices at Scale',
    summary:
      'Implement OpenTelemetry tracing with smart sampling, context propagation, and dashboards that reduce MTTR by 60%.',
    category: 'Observability',
    date: '2025-09-30',
    readMinutes: 8,
  },
  {
    id: 'realtime-ml-inference-patterns',
    title: 'Real-Time ML Inference: Sub-100ms Latency Patterns',
    summary:
      'Achieve ultra-low latency ML serving with model optimization, batching strategies, and edge deployment.',
    category: 'ML Engineering',
    date: '2025-09-30',
    readMinutes: 10,
  },
  {
    id: 'ai-cost-governance-framework',
    title: 'AI Cost Governance: FinOps Framework for ML Teams',
    summary:
      'Control AI spend with token budgets, model right-sizing, and automated cost alerts tied to business KPIs.',
    category: 'AI FinOps',
    date: '2025-09-30',
    readMinutes: 6,
  },
];
