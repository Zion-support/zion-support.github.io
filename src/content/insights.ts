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
    id: "serverless-warm-pools-playbook",
    title: "Serverless Warm Pools: Cut Cold Starts, Not Corners",
    summary:
      "Define pre‑checks, post‑checks, and rollbacks so multi‑step agents remain safe and effective.",
    category: "AI Strategy",
    date: "2025-09-30",
    readMinutes: 4,
  },
  {
    id: "edge-model-distillation",
    title: "Edge Model Distillation: Tiny Models, Big Impact",
    summary:
      "Compress foundation models into fast, private on‑device predictors with measurable utility.",
    category: "Edge Computing",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "slsa-supply-chain-minimums",
    title: "SLSA‑Aligned Minimums for 90‑Day Supply‑Chain Uplift",
    summary:
      "Dual‑write, read‑shadowing, backfills, and safe cutovers with rollback checkpoints.",
    category: "Platform Engineering",
    date: "2025-09-30",
    readMinutes: 4,
  },
  {
    id: "ai-sales-copilot-insights",
    title: "AI Sales Copilot: Grounded Prompts, CRM Context, Reliable Evals",
    summary:
      "How to wire CRMs, build prompt libraries, and add evals that boost win‑rates without risk.",
    category: "AI Strategy",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "eda-contracts-replays",
    title: "Event‑Driven Architecture: Contracts, Idempotency, and Safe Replays",
    summary:
      "Version events, enforce schemas, and run backfills without double‑processing.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "ai-governance-at-scale-2025",
    title: "AI Governance at Scale: Policies That Enable Speed",
    summary:
      "A pragmatic model for approvals, policy tests, and observability that unlocks faster AI delivery.",
    category: "AI Governance",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "edge-observability-blueprint",
    title: "Edge Observability Blueprint: Sub‑100ms Reliability",
    summary:
      "Latency budgets, client ↔ edge traces, and error budgets that keep UX snappy.",
    category: "Observability",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "genai-policy-tests-canaries",
    title: "GenAI Policy Tests: From Offline Suites to Online Canaries",
    summary:
      "How to combine offline evals with live canaries to catch regressions before customers do.",
    category: "GenAI",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "rag-quality-playbook-2025",
    title: "RAG Quality Playbook 2025: Freshness, Grounding, and Evals",
    summary:
      "Combat staleness, leakage, and hallucinations with practical retrieval and eval patterns.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "edge-llm-latency-budgeting",
    title: "Edge LLMs: A Practical Guide to Sub‑100ms Latency Budgets",
    summary:
      "Where the milliseconds go and how to claw them back across client, edge, and model.",
    category: "Edge Computing",
    date: "2025-09-30",
    readMinutes: 4,
  },
  {
      id: "serverless-warm-pools-playbook",
      title: "Serverless Warm Pools: Cut Cold Starts, Not Corners",
      summary:
      "Adaptive warmers, concurrency hints, and budgets to keep P95 low without overspend.",
      category: "Architecture",
      date: "2025-09-30",
      readMinutes: 4,
  },
  {
      id: "crm-grounded-prompts",
      title: "Grounded Prompts with CRM Context: Sales Copilots That Convert",
      summary:
      "Reference opportunities, stakeholders, and last touches to improve reply quality and close rates.",
      category: "AI Strategy",
      date: "2025-09-30",
      readMinutes: 5,
  },
  {
      id: "zero-downtime-cutover-checklist",
      title: "Zero‑Downtime Cutover Checklist",
      summary:
      "Dual‑write, read‑shadowing, backfills, and safe cutovers with rollback checkpoints.",
      category: "Platform Engineering",
      date: "2025-09-30",
      readMinutes: 4,
  },
  {
      id: "ai-sales-copilot-insights",
      title: "AI Sales Copilot: Grounded Prompts, CRM Context, Reliable Evals",
      summary:
      "How to wire CRMs, build prompt libraries, and add evals that boost win‑rates without risk.",
      category: "AI Strategy",
      date: "2025-09-30",
      readMinutes: 5,
  },
  {
      id: "eda-contracts-replays",
      title: "Event‑Driven Architecture: Contracts, Idempotency, and Safe Replays",
      summary:
      "Version events, enforce schemas, and run backfills without double‑processing.",
      category: "Architecture",
      date: "2025-09-30",
      readMinutes: 6,
  },
  {
      id: "ai-governance-at-scale-2025",
      title: "AI Governance at Scale: Policies That Enable Speed",
      summary:
      "A pragmatic model for approvals, policy tests, and observability that unlocks faster AI delivery.",
      category: "AI Governance",
      date: "2025-09-30",
      readMinutes: 6,
  },
  {
      id: "zero-downtime-migrations",
      title: "Zero‑Downtime Migrations: Patterns that Keep Pages Green",
      summary:
      "Dual‑write, read‑shadowing, and progressive delivery to ship schema changes safely.",
      category: "Platform Engineering",
      date: "2025-09-29",
      readMinutes: 5,
  },
  {
      id: "ai-autonomous-ops-intro",
      title: "AI Autonomous Operations: From Runbooks to Self‑Managing Systems",
      summary:
      "Policy tests, health circuits, and closed‑loop optimization that shrink toil to near zero.",
      category: "AI & Automation",
      date: "2025-09-30",
      readMinutes: 6,
  },
  {
      id: "ai-roi-scorecards",
      title: "AI ROI Scorecards That Executives Trust",
      summary:
      "Pick leading indicators, instrument baselines, and report outcomes without vanity metrics.",
      category: "AI Strategy",
      date: "2025-09-30",
      readMinutes: 5,
  },
  {
      id: "edge-observability-blueprint",
      title: "Edge Observability Blueprint: Sub‑100ms Reliability",
      summary:
      "Latency budgets, client ↔ edge traces, and error budgets that keep UX snappy.",
    category: "Observability",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
      id: "genai-policy-tests-canaries",
      title: "GenAI Policy Tests: From Offline Suites to Online Canaries",
      summary:
      "How to combine offline evals with live canaries to catch regressions before customers do.",
      category: "GenAI",
      date: "2025-09-30",
      readMinutes: 6,
  },
  {
    id: "edge-flags-validation",
    title: "Edge Flags: Validation Circuits That Prevent Bad Rolls",
    summary:
      "Design health checks, signed payloads, and roll-forward playbooks to keep flags safe.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "north-star-metrics-pitfalls",
    title: "North‑Star Metrics Pitfalls: Fixing Vanity and Ambiguity",
    summary:
      "Replace vanity KPIs with leading indicators and consistent instrumentation.",
    category: "Product Analytics",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "ai-governance-rubric",
    title: "A Lightweight Rubric for AI Governance Decisions",
    summary:
      "When to require human‑in‑the‑loop, what to log, and how to audit outputs across teams.",
    category: "AI Governance",
    date: "2025-09-29",
    readMinutes: 5,
  },
  {
    id: "edge-cache-invalidation",
    title: "Edge Cache Invalidation Strategies That Won't Wake You Up",
    summary:
      "Versioned keys, background warming, and circuit breakers for resilient edge experiences.",
    category: "Architecture",
    date: "2025-09-28",
    readMinutes: 6,
  },
  {
    id: "genai-telemetry-metrics",
    title: "GenAI Telemetry: The 8 Metrics That Predict Drift",
    summary:
      "Capture inputs, policies, and human feedback signals to detect regressions before users do.",
    category: "GenAI",
    date: "2025-09-27",
    readMinutes: 7,
  },
  {
    id: "observability-otel-traces-that-matter",
    title: "OpenTelemetry in Production: Traces That Engineers Actually Use",
    summary:
      "Sampling strategies, semantic conventions, and dashboards that shrink MTTR for complex stacks.",
    category: "Observability",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "feature-flags-edge-realtime",
    title: "Real‑Time Feature Flags at the Edge",
    summary:
      "Architect, cache, and validate flags globally for instant rollouts and safe rollbacks.",
    category: "Architecture",
    date: "2025-09-28",
    readMinutes: 6,
  },
  {
    id: "north-star-metrics-insight",
    title: "North‑Star Metrics: A Field Guide",
    summary:
      "A practical approach to defining leading indicators that align teams to outcomes.",
    category: "Product Analytics",
    date: "2025-09-28",
    readMinutes: 7,
  },
  {
    id: "secure-ml-pipelines",
    title: "Securing Machine Learning Pipelines in Production",
    summary:
      "Practical steps to harden data flows, model registries, and deployment targets for ML systems.",
    category: "Security",
    date: "2025-08-20",
    readMinutes: 7,
  },
  {
    id: "cloud-cost-optimization",
    title: "Cloud Cost Optimization: 9 Wins in 90 Days",
    summary:
      "How we helped three clients reduce cloud spend by 32% on average without sacrificing performance.",
    category: "Cloud",
    date: "2025-08-05",
    readMinutes: 5,
  },
  {
    id: "data-governance-starter",
    title: "Data Governance Starter Guide for Mid‑Market Teams",
    summary:
      "A no‑nonsense playbook for data quality, lineage, and access controls you can adopt this quarter.",
    category: "Data",
    date: "2025-07-18",
    readMinutes: 8,
  },
  {
    id: "genai-guardrails-in-production",
    title: "GenAI Guardrails in Production: Policy Tests That Scale",
    summary:
      "From offline eval suites to online canaries: patterns that keep quality and safety high as usage grows.",
    category: "GenAI",
    date: "2025-09-29",
    readMinutes: 8,
  },
];

