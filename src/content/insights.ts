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
    id: "autonomous-ops-slo-controllers",
    title: "Autonomous Ops: SLO‑Driven Controllers That Keep You Green",
    summary:
      "Design controllers that watch SLOs and take safe corrective action automatically, with auditability.",
    category: "AI & Automation",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "ai-roadmap-evidence-reviews",
    title: "Monthly Evidence Reviews for AI Roadmaps",
    summary:
      "Turn AI bets into measurable learning with eval deltas, usage telemetry, and decision gates.",
    category: "Strategy",
    date: "2025-09-29",
    readMinutes: 5,
  },
  {
    id: "slsa-supply-chain-minimums",
    title: "SLSA‑Aligned Minimums for 90‑Day Supply‑Chain Uplift",
    summary:
      "SBOMs, signed provenance, and policy gates you can roll out this quarter.",
    category: "Security",
    date: "2025-09-28",
    readMinutes: 6,
  },
  {
    id: "genai-online-evals",
    title: "Online Evals for GenAI: From Shadow to Guardrails",
    summary:
      "Move from pilots to production with canary cohorts, eval budgets, and rollback triggers.",
    category: "MLOps",
    date: "2025-09-28",
    readMinutes: 7,
  },
  {
    id: "ai-reliability-scorecards",
    title: "AI Reliability Scorecards: What to Track Weekly",
    summary:
      "Outcome-linked metrics, eval pass rates, and incident burndown that keep quality high.",
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
    id: "governance-policy-testing",
    title: "Governance for AI: Policy Testing That Scales",
    summary:
      "Pair signals, context windows, and human feedback to harden detections and accelerate triage.",
    category: "Security",
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
    readMinutes: 6,
  },
  {
    id: "cloud-scorecards-review-rituals",
    title: "Cloud Scorecards: Review Rituals that Scale Decision Quality",
    summary:
      "Lightweight, repeatable scorecards that guide capacity, resilience, and cost decisions across teams.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "genai-evals-live-canaries",
    title: "GenAI Evals: Shipping with Live Canaries and Policy Tests",
    summary:
      "A practical path from notebooks to continuous evaluation with rollback triggers and budgets.",
    category: "GenAI",
    date: "2025-09-30",
    readMinutes: 7,
  },
  {
    id: "edge-flags-health-circuits",
    title: "Edge Flags: Health Circuits for Instant, Safe Rollouts",
    summary:
      "Validation, signing, and caching strategies that make rollouts boring—even on Friday.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 6,
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
    id: "cloud-finops-qa-gates",
    title: "Cloud FinOps QA Gates That Engineers Actually Use",
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
      "Dashboards, alerts, and review cadences that reduce AI spend without surprises.",
    category: "AI Operations",
    date: "2025-10-01",
    readMinutes: 6,
  },
  {
    id: "platform-golden-paths-insight",
    title: "Golden Paths That Teams Actually Use",
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
    id: "kubernetes-cost-guardrails",
    title: "Kubernetes Cost Guardrails That Engineers Don’t Hate",
    summary:
      "Limit waste with sensible defaults: requests/limits, QoS, autoscaling, and cost-aware CI policies.",
    category: "Cloud",
    date: "2025-09-28",
    readMinutes: 7,
  },
  {
    id: "ciso-zero-trust-scorecard",
    title: "A CISO’s Zero‑Trust Scorecard",
    summary:
      "Measure progress with identity controls, least privilege, continuous verification, and blast‑radius limits.",
    category: "Security",
    date: "2025-09-28",
    readMinutes: 8,
  },
  {
    id: "zero-trust-sdls",
    title: "Zero-Trust SDLC: Shipping Secure Software Without Slowing Down",
    summary:
      "Embed policy-as-code, automated threat modeling, and continuous verification into delivery workflows.",
    category: "Security",
    date: "2025-09-28",
    readMinutes: 8,
  },
  {
    id: "analytics-ltv-playbook",
    title: "An Operator’s Playbook for LTV:CPA Ratio",
    summary:
      "Instrumentation, cohorting, and experimentation tactics to consistently improve unit economics.",
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
  // New insights added
  {
    id: "genai-guardrails-in-production",
    title: "GenAI Guardrails in Production: Policy Tests That Scale",
    summary:
      "From offline eval suites to online canaries: patterns that keep quality and safety high as usage grows.",
    category: "GenAI",
    date: "2025-09-29",
    readMinutes: 8,
  },
  // Fresh insights
  {
    id: "secure-ml-supply-chain",
    title: "Secure ML Supply Chain: SBOMs, Data Provenance, and Guardrails",
    summary:
      "How to secure models, datasets, and dependencies with practical controls that scale.",
    category: "Security",
    date: "2025-10-01",
    readMinutes: 6,
  },
  {
    id: "ai-platform-roi-scorecards",
    title: "AI Platform ROI Scorecards That Finance Will Love",
    summary:
      "Align investment to measurable outcomes with adoption, DX, and reliability metrics.",
    category: "AI Strategy",
    date: "2025-10-01",
    readMinutes: 5,
  },
];

