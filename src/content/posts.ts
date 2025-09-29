export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
  readTime?: string;
}

export const posts: BlogPost[] = [
  {
    slug: "ai-platform-roi-2025",
    title: "AI Platform ROI: Scorecards That Drive Adoption",
    description:
      "Connect capabilities to golden paths, platform SLOs, and adoption metrics to make cut/scale decisions.",
    category: "AI Strategy",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "7 min",
  },
  {
    slug: "secure-ml-supply-chain-2025",
    title: "Secure ML Supply Chain: Lineage, SBOMs, and Egress Controls",
    description:
      "Lock down datasets, models, and inference routes with provenance and policy tests in CI/CD.",
    category: "Security",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "6 min",
  },
  {
    slug: "edge-cdn-ml-personalization-2025",
    title: "Edge CDN + On‑Device ML: Personalization Under 100ms",
    description:
      "Combine edge KV, signed configs, and tiny models for private, real‑time personalization.",
    category: "Edge Computing",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min",
  },
  {
    slug: "ai-sales-copilot-2025",
    title: "AI Sales Copilot: Grounded Prompts, CRM Context, Reliable Evals",
    description:
      "Wire CRMs, build prompt libraries, and add evals that correlate with win‑rates.",
    category: "AI Strategy",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min",
  },
  {
    slug: "genai-evals-in-production-2025",
    title: "GenAI Evals in Production: Policy Tests That Scale",
    description:
      "Layered evaluation: offline suites, pre-merge checks, and online canaries tied to KPIs.",
    category: "GenAI",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "8 min",
  },
  {
    slug: "feature-flags-edge-2025",
    title: "Feature Flags at the Edge: <100ms Global Releases",
    description:
      "Consistency models, cache strategies, and validation flows for instant global rollouts.",
    category: "Architecture",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "7 min",
  },
  {
    slug: "enterprise-rag-blueprint-v2",
    title: "Enterprise RAG Blueprint v2: Freshness, Hybrid Search, and Evals",
    description:
      "Production patterns that keep responses grounded and useful with hybrid search and live evals.",
    category: "GenAI",
    publishedAt: "2025-10-02",
    featured: true,
    readTime: "11 min",
  },
  {
    slug: "serverless-inference-cost-playbook",
    title: "Serverless AI Inference: The Cost Optimization Playbook",
    description:
      "Cut spend 40–70% with adaptive batching, warm pools, and tiered quality without hurting P95.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "9 min",
  },
  {
    slug: "policy-first-genai-guardrails",
    title: "Secure GenAI: Policy‑First Guardrails That Scale",
    description:
      "Prompt isolation, PII redaction, and network egress controls—ship safely without slowing teams.",
    category: "Security",
    publishedAt: "2025-09-27",
    featured: false,
    readTime: "8 min",
  },
  {
    slug: "edge-ai-latency-budgets",
    title: "Edge AI Latency Budgets: Meet P95 Without Overbuild",
    description:
      "Placement, caching, and feature flags for reliable latency when models run at the edge.",
    category: "Edge AI",
    publishedAt: "2025-09-26",
    featured: false,
    readTime: "6 min",
  },
  {
    slug: "cloud-governance-scorecards",
    title: "Cloud Governance Scorecards: Faster Approvals, Safer Deploys",
    description:
      "Policy tests, evidence capture, and automated checks that speed delivery and reduce risk.",
    category: "Cloud",
    publishedAt: "2025-09-25",
    featured: false,
    readTime: "7 min",
  },
  {
    slug: "genai-online-evals",
    title: "GenAI Online Evals: Canary What Matters",
    description:
      "Live evals in production with guardrails and rollback triggers tied to real outcomes.",
    category: "GenAI",
    publishedAt: "2025-09-24",
    featured: false,
    readTime: "7 min",
  },
];

