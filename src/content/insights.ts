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
      "How to design developer workflows, templates, and scorecards that reduce cognitive load.",
    category: "Platform Engineering",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "governance-policy-testing",
    title: "Governance for AI: Policy Testing That Scales",
    summary:
      "From prompt policies to red‑team playbooks: techniques to continuously validate AI behavior.",
    category: "Risk & Compliance",
    date: "2025-09-29",
    readMinutes: 8,
  },
  {
    id: "ltv-cpa-playbook",
    title: "An Operator’s Playbook for LTV:CPA Ratio",
    summary:
      "Instrumentation, cohorting, and experimentation to consistently improve unit economics.",
    category: "Product Analytics",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "reliable-real-time-pipelines",
    title: "Building Reliable Real‑Time Data Pipelines",
    summary:
      "Exactly‑once semantics, schema evolution, and backpressure handling in streaming systems.",
    category: "Data Engineering",
    date: "2025-09-29",
    readMinutes: 7,
  },
  {
    id: "llm-guardrails-prod",
    title: "Shipping LLM Guardrails Without Killing Velocity",
    summary:
      "Policy-as-code, prompt hygiene, and eval gates that scale from POC to prod.",
    category: "GenAI",
    date: "2025-09-29",
    readMinutes: 7,
  },
  {
    id: "edge-ai-case-studies",
    title: "How Edge AI Is Powering Real‑Time Experiences",
    summary:
      "A look at on‑device models, streaming pipelines, and cost/perf trade‑offs from 3 deployments.",
    category: "AI Engineering",
    date: "2025-09-29",
    readMinutes: 7,
  },
  {
    id: "platform-engineering-golden-paths",
    title: "Golden Paths for Platform Engineering: Reduce Cognitive Load",
    summary:
      "Standardized templates, scorecards, and paved roads that keep product teams shipping.",
    category: "Platform Engineering",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "data-contracts-in-practice",
    title: "Data Contracts in Practice: Stop Breaking Your Dashboards",
    summary:
      "Contract-first schemas, change management, and lineage that make analytics reliable again.",
    category: "Data Engineering",
    date: "2025-09-28",
    readMinutes: 7,
  },
  {
    id: "ml-in-prod-e2e",
    title: "ML in Production: An End-to-End Delivery Blueprint",
    summary:
      "From labeling to rollout: evals, feature stores, and shadow deploys that derisk launches.",
    category: "MLOps",
    date: "2025-09-27",
    readMinutes: 9,
  },
  {
    id: "security-threat-modeling-sprints",
    title: "Threat Modeling Sprints That Teams Actually Enjoy",
    summary:
      "Lightweight rituals, checklists, and tooling to embed security without slowing velocity.",
    category: "Security",
    date: "2025-09-27",
    readMinutes: 6,
  },
  {
    id: "governance-ai-policy-testing",
    title: "Governance for AI: Policy Testing That Scales",
    summary:
      "From prompt policies to red‑team playbooks: techniques to continuously validate AI behavior.",
    category: "Risk & Compliance",
    date: "2025-09-29",
    readMinutes: 8,
  },
  {
    id: "llm-security-redteaming",
    title: "LLM Security: A Practical Red‑Teaming Handbook",
    summary:
      "Common attack surfaces, jailbreak detection, and layered defenses for enterprise LLM apps.",
    category: "Security",
    date: "2025-09-29",
    readMinutes: 10,
  },
  {
    id: "ai-buy-build-economics-2025",
    title: "Buy vs. Build for AI: 2025 Economics and Decision Tree",
    summary:
      "A CFO‑friendly model for TCO, data gravity, and competitive differentiation in AI investments.",
    category: "Strategy",
    date: "2025-09-29",
    readMinutes: 7,
  },
  {
    id: "genai-eval-playbook-2025",
    title: "A Practical Evaluation Playbook for GenAI Apps",
    summary:
      "How to stand up robust offline and online evals, define quality bars, and ship with confidence.",
    category: "GenAI",
    date: "2025-09-29",
    readMinutes: 8,
  },
  {
    id: "observability-opentelemetry-guide",
    title: "OpenTelemetry in Production: Traces That Engineers Actually Use",
    summary:
      "Sampling strategies, semantic conventions, and dashboards that shrink MTTR for complex stacks.",
    category: "Observability",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "modernization-catalog-strangler",
    title: "Modernization That Sticks: Catalogs, Contracts, and the Strangler Fig",
    summary:
      "Practical steps to decouple legacy systems with service catalogs and contract‑first delivery.",
    category: "Architecture",
    date: "2025-09-29",
    readMinutes: 9,
  },
  {
    id: "edge-inference-patterns",
    title: "Edge Inference Patterns for Sub‑100ms Experiences",
    summary:
      "Latency budgets, caching strategies, and model quantization techniques for lightning‑fast UX.",
    category: "Architecture",
    date: "2025-09-28",
    readMinutes: 6,
  },
  {
    id: "platform-blueprints-ref-arch",
    title: "Reference Architectures for Modern Data & AI Platforms",
    summary:
      "Battle-tested blueprints for ingestion, governance, semantic layers, and real-time activation.",
    category: "Architecture",
    date: "2025-09-28",
    readMinutes: 10,
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
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "cloud-cost-qa-automation",
    title: "QA Gates That Keep Cloud Costs From Creeping",
    summary:
      "Cost-aware tests, CI policies, and dashboards that prevent regressions before they ship.",
    category: "Cloud FinOps",
    date: "2025-09-27",
    readMinutes: 6,
  },
  {
    id: "security-sbom-supply-chain",
    title: "Shipping a Secure SBOM and Hardening Your Supply Chain",
    summary:
      "Step-by-step guidance to produce SBOMs, lock dependencies, and detect tampering early.",
    category: "Security",
    date: "2025-09-27",
    readMinutes: 7,
  },
  {
    id: "operationalizing-genai",
    title: "Operationalizing GenAI Safely and at Scale",
    summary:
      "Practical blueprints for evaluation, policy testing, and observability across the GenAI lifecycle.",
    category: "MLOps",
    date: "2025-09-25",
    readMinutes: 9,
  },
  {
    id: "zero-trust-saas",
    title: "Zero‑Trust in Practice for SaaS",
    summary:
      "Least‑privilege by default, continuous verification, and blast radius controls that actually work.",
    category: "Security",
    date: "2025-09-24",
    readMinutes: 6,
  },
  {
    id: "north-star-metrics",
    title: "North‑Star Metrics That Actually Drive Growth",
    summary:
      "Define actionable metrics, avoid vanity traps, and align teams to measurable outcomes.",
    category: "Product Analytics",
    date: "2025-09-22",
    readMinutes: 5,
  },
  {
    id: "real-time-pipelines-reliability",
    title: "Building Reliable Real‑Time Data Pipelines",
    summary:
      "Patterns for exactly‑once semantics, schema evolution, and backpressure handling in streaming systems.",
    category: "Data Engineering",
    date: "2025-09-20",
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
    id: "ai-automation-roi-calculator",
    title: "AI Automation ROI Calculator: Measure Your Business Impact",
    summary:
      "A practical framework for calculating the return on investment from AI automation initiatives, with real-world case studies and templates.",
    category: "AI Strategy",
    date: "2025-01-21",
    readMinutes: 8,
  },
  {
    id: "cloud-native-microservices-2025",
    title: "Cloud-Native Microservices: Patterns for 2025",
    summary:
      "Essential patterns and practices for building scalable, resilient microservices architectures in modern cloud environments.",
    category: "Architecture",
    date: "2025-01-21",
    readMinutes: 10,
  },
  {
    id: "enterprise-ai-governance-framework",
    title: "Enterprise AI Governance Framework: From Strategy to Implementation",
    summary:
      "Comprehensive governance framework for enterprise AI adoption, covering policy, risk management, and operational excellence.",
    category: "AI Governance",
    date: "2025-01-21",
    readMinutes: 12,
  },
  {
    id: "saas-platform-scaling-strategies",
    title: "SAAS Platform Scaling Strategies: From Startup to Enterprise",
    summary:
      "Proven strategies for scaling SAAS platforms from early-stage to enterprise, covering technical and business considerations.",
    category: "Platform Engineering",
    date: "2025-01-21",
    readMinutes: 9,
  },
  {
    id: "ai-security-best-practices",
    title: "AI Security Best Practices: Protecting Your AI Systems",
    summary:
      "Essential security practices for AI systems, covering model protection, data privacy, and adversarial defense strategies.",
    category: "Security",
    date: "2025-01-21",
    readMinutes: 11,
  },
];

