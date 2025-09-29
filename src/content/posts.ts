export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
  readTime?: string;
  image?: string;
  tags?: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "ai-autonomous-operations-2025",
    title: "AI Autonomous Operations: Self‑Healing, Self‑Optimizing Infra",
    description: "Design SLO‑driven controllers, safe remediations, and policy‑guarded runbooks.",
    category: "Infrastructure",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "enterprise-ai-roadmap-2025",
    title: "Enterprise AI Roadmap 2025: From Pilots to Platform",
    description: "Operating model, platform capabilities, and productized use‑cases that compound.",
    category: "Strategy",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "9 min",
  },
  {
    slug: "cloud-native-ai-platforms-2025",
    title: "Cloud‑Native AI Platforms: Multi‑Region, Cost‑Aware, Governed",
    description: "Reference architecture for elastic GPUs, feature stores, evals, and guardrails.",
    category: "Cloud",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "7 min read"
  },
  // New posts
  {
    slug: "quantum-computing-business-applications-2025",
    title: "Quantum Computing: Practical Business Applications in 2025",
    description: "Where quantum adds value today: portfolio, routing, scheduling, and pricing.",
    category: "Quantum",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "ai-platform-roi-2025",
    title: "AI Platform ROI Scorecards: Proving Value Quarter by Quarter",
    description: "Lightweight scorecards that link capabilities to adoption, golden paths, SLOs, and outcomes.",
    category: "GenAI",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "genai-evals-in-prod-guardrails",
    title: "Shipping GenAI Safely: Evals, Guardrails, and Online Canaries",
    description:
      "A practical blueprint to combine offline evals with online policy tests so you can ship GenAI changes weekly without regressions.",
    category: "GenAI",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "edge-feature-flags-in-100ms",
    title: "Edge Feature Flags Under 100ms: Global Consistency at Scale",
    description:
      "Strategies for cache warmup, signed payloads, and validation circuits that enable instant, safe global rollouts.",
    category: "Architecture",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "north-star-metrics-pitfalls-fixes",
    title: "North‑Star Metrics Pitfalls: How to Measure What Matters",
    description:
      "Seven common anti‑patterns and the instrumentation playbook that replaces vanity with outcomes.",
    category: "Product Analytics",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read",
  },
  {
    slug: "ai-product-launch-checklist-2025",
    title: "AI Product Launch Checklist: From Pilot to Production",
    description:
      "A pragmatic checklist for hardening pilots, proving ROI, and launching AI features safely.",
    category: "Product",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "mlops-in-45-days",
    title: "MLOps in 45 Days: Shipping Reliable Models Fast",
    description:
      "Reference pipelines, eval gates, and rollout patterns to move from notebook to prod quickly.",
    category: "MLOps",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "practical-rag-architecture",
    title: "Practical RAG Architecture That Scales",
    description:
      "Chunking, indexing, and retrieval strategies that actually improve answer quality at lower cost.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "edge-inference-patterns-2025",
    title: "Edge Inference Patterns for Sub‑100ms Experiences",
    description:
      "Latency budgets, on‑device models, and caching strategies for lightning‑fast AI UX at the edge.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "ai-governance-checklist-2025",
    title: "AI Governance Checklist 2025: Ship Fast Without Breaking Policy",
    description:
      "Practical guardrails, review rituals, and approval flows to keep GenAI initiatives compliant and on‑track.",
    category: "AI Governance",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "5 min read",
  },
  {
    slug: "realtime-feature-flags-edge",
    title: "Real‑Time Feature Flags at the Edge",
    description:
      "Architect, cache, and validate flags globally for instant rollouts and safe rollbacks.",
    category: "Architecture",
    publishedAt: "2025-09-28",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "prompt-engineering-playbook-v2",
    title: "Prompt Engineering Playbook v2: Patterns That Survive Production",
    description:
      "Composable prompts, eval‑driven iteration, and telemetry for robust GenAI applications.",
    category: "GenAI",
    publishedAt: "2025-09-27",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "platform-scorecards-that-stick",
    title: "Platform Scorecards That Actually Drive Adoption",
    description:
      "Define capabilities, golden paths, and product metrics that align platform work with outcomes.",
    category: "Platform Engineering",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min read",
  },
  {
    slug: "genai-guardrails-in-the-wild",
    title: "GenAI Guardrails in the Wild: Evals, Policies, and Drift Control",
    description:
      "A field guide to combining offline suites with online policy tests to keep quality high.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "mlops-reliability-2025",
    title: "MLOps Reliability: Shipping GenAI Changes Safely",
    description:
      "Canary evals, shadow deploys, and rollback patterns to keep quality high while iterating fast.",
    category: "MLOps",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min read",
  },
  {
    slug: "realtime-data-pipelines-2025",
    title: "Reliable Real‑Time Data Pipelines in 2025",
    description:
      "Exactly‑once semantics, backpressure control, and pragmatic observability for streaming systems.",
    category: "Data Engineering",
    publishedAt: "2025-09-28",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "north-star-metrics-framework",
    title: "North‑Star Metrics: A Field‑Tested Framework",
    description:
      "A practical method to align teams to measurable outcomes and avoid vanity KPIs.",
    category: "Product Analytics",
    publishedAt: "2025-09-27",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "ai-workflow-automation-2025-guide",
    title: "The Complete Guide to AI Workflow Automation in 2025",
    description:
      "Discover how AI workflow automation is revolutionizing business operations. Learn implementation strategies, benefits, and real-world case studies.",
    category: "AI & Automation",
    publishedAt: "2025-01-17",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "platform-engineering-blueprint-2025",
    title: "Platform Engineering Blueprint 2025: From Chaos to Clarity",
    description:
      "Core capabilities, golden paths, and product thinking to accelerate delivery across hundreds of teams.",
    category: "Platform Engineering",
    publishedAt: "2025-09-27",
    featured: true,
    readTime: "11 min read",
  },
  {
    slug: "genai-eval-systems",
    title: "Shipping with Confidence: Evaluation Systems for GenAI Apps",
    description:
      "Offline + online evals, policy tests, and guardrails to keep quality high as you scale.",
    category: "GenAI",
    publishedAt: "2025-09-26",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "opentelemetry-tracing-primer",
    title: "OpenTelemetry Tracing That Engineers Actually Use",
    description:
      "Sampling strategies, semantic conventions, and dashboards that shrink MTTR for complex stacks.",
    category: "Observability",
    publishedAt: "2025-09-26",
    featured: false,
    readTime: "8 min read",
  },
  {
    slug: "ai-virtual-assistant-best-practices",
    title: "Best Practices for Implementing AI Virtual Assistants in 2025",
    description:
      "Learn how to successfully implement AI virtual assistants in your business. Discover strategies for training, deployment, and optimization.",
    category: "AI & Automation",
    publishedAt: "2025-01-15",
    featured: true,
    readTime: "10 min read",
  },
  {
    slug: "data-analytics-ai-transformation",
    title: "How AI is Transforming Data Analytics in 2025",
    description:
      "Explore the revolutionary impact of AI on data analytics. Learn about predictive analytics, automated insights, and real-time decision making.",
    category: "Data Analytics",
    publishedAt: "2025-01-12",
    featured: false,
    readTime: "12 min read",
  },
  {
    slug: "micro-saas-platform-advantages",
    title: "Why Micro SAAS Platforms Are the Future of Business Software",
    description:
      "Discover the advantages of micro SAAS platforms and how they're transforming how businesses consume and implement software solutions.",
    category: "Technology",
    publishedAt: "2025-01-10",
    featured: false,
    readTime: "9 min read",
  },
  {
    slug: "platform-engineering-blueprint-2025",
    title: "A Practical Blueprint for Platform Engineering in 2025",
    description:
      "Capabilities, golden paths, and scorecards to accelerate delivery without sacrificing autonomy.",
    category: "Platform Engineering",
    publishedAt: "2025-09-29",
  },
  {
    slug: "genai-evals-realworld",
    title: "Real‑World GenAI Evals: From Offline Suites to Online Guardrails",
    description:
      "Patterns for evaluation harnesses, drift detection, and policy testing that scale with usage.",
    category: "GenAI",
    publishedAt: "2025-09-29",
  },
  {
    slug: "ai-roadmaps",
    title: "Designing High-Impact AI Roadmaps",
    description:
      "A practical framework to align AI investments with measurable business outcomes and reduce time-to-value.",
    category: "AI Strategy",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "serverless-ai-inference-cost-playbook-2025",
    title: "Serverless AI Inference: The Cost Optimization Playbook",
    description: "Cut inference spend 40–70% with adaptive batching, warm pools, and tiered quality without hurting P95.",
    category: "AI Strategy",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "9 min",
  },
  {
    slug: "production-rag-architectures-that-work-2025",
    title: "RAG Architectures That Actually Work in Production",
    description: "Proven patterns for chunking, freshness, hybrid search, and evals that keep quality high.",
    category: "GenAI",
    publishedAt: "2025-10-04",
    featured: true,
    readTime: "12 min read"
  },
  {
    slug: "secure-ml-supply-chain-2025",
    title: "Secure ML Supply Chain: From SBOMs to Model Lineage",
    description: "End-to-end provenance and controls for datasets, models, and inference routes.",
    category: "Security",
    publishedAt: "2025-10-03",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "edge-cdn-ml-personalization-2025",
    title: "Edge CDN + On‑Device ML: Personalization Under 100ms",
    description: "Combine edge KV, signed configs, and tiny models for private, real‑time personalization.",
    category: "Edge Computing",
    publishedAt: "2025-01-21",
    featured: true,
    readTime: "6 min read",
  },
  {
    slug: "next-gen-cloud-infrastructure",
    title: "Next-Generation Cloud Infrastructure: Scaling for 2025 and Beyond",
    description:
      "Discover the latest cloud technologies and infrastructure patterns that are reshaping how businesses scale their operations.",
    category: "Cloud Strategy",
    publishedAt: "2025-01-21",
    featured: true,
    readTime: "10 min read",
  },
  {
    slug: "enterprise-ai-implementation-roadmap",
    title: "Enterprise AI Implementation: A Strategic Roadmap for 2025",
    description:
      "Navigate the complexities of enterprise AI adoption with our comprehensive roadmap covering strategy, implementation, and governance.",
    category: "AI Strategy",
    publishedAt: "2025-01-21",
    featured: true,
    readTime: "15 min read",
  },
  {
    slug: "micro-saas-platform-architecture",
    title: "Building Scalable Micro SAAS Platforms: Architecture Patterns and Best Practices",
    description:
      "Learn how to design and implement micro SAAS platforms that can scale to millions of users while maintaining performance and reliability.",
    category: "Platform Engineering",
    publishedAt: "2025-01-21",
    featured: false,
    readTime: "11 min read",
  },
  {
    slug: "ai-ethics-responsible-deployment",
    title: "AI Ethics and Responsible Deployment: Building Trust in AI Systems",
    description:
      "Essential guidelines for deploying AI systems responsibly, ensuring fairness, transparency, and accountability in your AI initiatives.",
    category: "AI Governance",
    publishedAt: "2025-01-21",
    featured: false,
    readTime: "9 min read",
  },
 
  // Newly added posts (2025-09-30 / 2025-09-29)
  {
    slug: "serverless-inference-cost-playbook-2025",
    title: "Serverless AI Inference Cost Playbook: 40–70% Savings Without P95 Pain",
    description:
      "Adaptive batching, warm pools, and tiered quality to cut spend while keeping latency sane.",
    category: "AI Solutions",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "ai-sales-copilot-2025",
    title: "AI Sales Copilot: Grounded Prompts, CRM Context, Reliable Evals",
    description: "Wire CRMs, build prompt libraries, and add evals that correlate with win‑rates.",
    category: "AI Strategy",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "genai-evals-in-production-2025",
    title: "GenAI Evals in Production: Policy Tests That Scale",
    description: "Layered evaluation: offline suites, pre-merge checks, and online canaries tied to KPIs.",
    category: "GenAI",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "feature-flags-edge-2025",
    title: "Feature Flags at the Edge: <100ms Global Releases",
    description: "Consistency models, cache strategies, and validation flows for instant global rollouts.",
    category: "Architecture",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "ai-governance-blueprint-2025",
    title: "AI Governance Blueprint 2025: Practical Guardrails That Ship",
    description: "Scorecards, policy tests, and change-control that keep AI initiatives fast and compliant.",
    category: "AI Strategy",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min",
  },
  {
    slug: "real-time-genai-guardrails-2025",
    title: "Real‑Time GenAI Guardrails: Inline Filters, Canaries, and Evals",
    description: "How to run fast with live canaries, inline moderation, and KPI‑linked evals at scale.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "8 min read"
  },
  // New content additions
  {
    slug: "agentic-workflows-in-production",
    title: "Agentic Workflows in Production: Patterns That Don’t Break",
    description:
      "Control loops, guardrails, and human checkpoints to deploy autonomous agents safely.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "cost-aware-mlops",
    title: "Cost‑Aware MLOps: Shipping Quality Under a Budget",
    description:
      "Right‑size evals, caching, and rollout to reduce spend without sacrificing reliability.",
    category: "MLOps",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "6 min read",
  },
  {
    slug: "edge-observability-toolbox",
    title: "Edge Observability Toolbox for Sub‑Second UX",
    description:
      "What to log, sample, and alert on for distributed edge apps and functions.",
    category: "Observability",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "5 min read",
  },
  {
    slug: "secure-ml-platform-blueprint",
    title: "Secure ML Platform Blueprint",
    description:
      "Harden data flows, registries, and deployments with pragmatic controls and audits that scale.",
    category: "Security",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "llm-blue-green-evals",
    title: "Blue/Green for LLMs: Evals as Release Gates",
    description:
      "Ship LLM changes with confidence using blue/green cohorts tied to online evals and guardrails.",
    category: "MLOps",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read",
  },
  {
    slug: "agent-observability-playbook",
    title: "Agent Observability: Traces, Tokens, and Task Outcomes",
    description:
      "A practical telemetry model for agentic systems covering spans, retries, function calls, and cost.",
    category: "GenAI",
    publishedAt: "2025-09-30",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "multi-tenant-guardrails",
    title: "Multi‑Tenant Guardrails Without Slowing Teams",
    description:
      "Policy packs, namespace isolation, and per‑tenant budgets that scale across dozens of products.",
    category: "AI Governance",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "5 min read",
  },
  {
    slug: "finetune-to-rag-transition",
    title: "When to Switch from Fine‑Tuning to RAG (and Back)",
    description:
      "Decision framework weighing cost, latency, data churn, and quality for production GenAI.",
    category: "GenAI",
    publishedAt: "2025-09-30",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "real-time-feature-stores",
    title: "Real‑Time Feature Stores That Don’t Break the Bank",
    description:
      "Online/offline sync, freshness SLAs, and caching strategies that balance accuracy and spend.",
    category: "Data Engineering",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "cost-aware-routing",
    title: "Cost‑Aware Routing Across Models and Vendors",
    description:
      "SLO‑driven policy routing that blends quality, latency, and dollar budgets automatically.",
    category: "AI Strategy",
    publishedAt: "2025-09-30",
    featured: false,
    readTime: "6 min read",
  },
 
 
  
  {
    slug: "ai-risk-register-checklist-2025",
    title: "AI Risk Register Checklist: Owners, Policy Tests, Dashboards",
    description: "Make AI risk real with accountable owners, measurable policies, and visible scorecards.",
    category: "AI Governance",
    publishedAt: "2025-10-06",
    featured: true,
    readTime: "5 min read"
  },
  {
    slug: "rag-freshness-strategies-2025",
    title: "RAG Freshness Strategies: Versioned Chunks, TTLs, Async Warmups",
    description: "Keep retrieval results fresh with versioned corpora, TTL budgets, and background warmups.",
    category: "GenAI",
    publishedAt: "2025-10-06",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "edge-feature-flags-zero-regret-2025",
    title: "Edge Feature Flags: Zero‑Regret Rollouts with Instant Rollback",
    description: "Segmented canaries by geo and account with budget caps and telemetry at the edge.",
    category: "Architecture",
    publishedAt: "2025-10-06",
    featured: false,
    readTime: "6 min read"
  }
];

