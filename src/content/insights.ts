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
    id: "platform-blueprints-golden-paths",
    title: "Golden Paths That Actually Get Used",
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
    id: "ai-automation-roi-breakdown",
    title: "AI Automation ROI: Real Numbers from 50+ Implementations",
    summary:
      "Detailed breakdown of cost savings, efficiency gains, and revenue increases from AI workflow automation across industries.",
    category: "ROI Analysis",
    date: "2025-01-25",
    readMinutes: 6,
  },
  {
    id: "micro-saas-market-opportunity",
    title: "The $50B Micro SAAS Market: Where to Invest in 2025",
    summary:
      "Market analysis revealing the fastest-growing micro SAAS segments and investment opportunities for businesses.",
    category: "Market Research",
    date: "2025-01-24",
    readMinutes: 7,
  },
  {
    id: "ai-virtual-assistant-adoption",
    title: "AI Virtual Assistant Adoption: 95% Customer Satisfaction Rates",
    summary:
      "Case studies showing how companies achieved 95% customer satisfaction and 40% cost reduction with AI assistants.",
    category: "Customer Experience",
    date: "2025-01-23",
    readMinutes: 5,
  },
  {
    id: "data-analytics-transformation",
    title: "Data Analytics Transformation: From Insights to Action",
    summary:
      "How AI-powered analytics platforms are helping businesses make 60% better decisions and reduce risks by 70%.",
    category: "Data Analytics",
    date: "2025-01-22",
    readMinutes: 8,
  },
  {
    id: "ai-implementation-timeline",
    title: "AI Implementation Timeline: From Zero to ROI in 90 Days",
    summary:
      "Step-by-step roadmap for implementing AI solutions with realistic timelines and milestone expectations.",
    category: "Implementation",
    date: "2025-01-21",
    readMinutes: 6,
  },
  {
    id: "automation-cost-savings-report",
    title: "Automation Cost Savings Report: $2.3M Annual Waste Eliminated",
    summary:
      "Comprehensive analysis of how AI automation eliminates manual process waste and delivers measurable ROI.",
    category: "Cost Optimization",
    date: "2025-01-20",
    readMinutes: 7,
  },
  {
    id: "ai-security-framework-2025",
    title: "AI Security Framework 2025: Protecting Intelligent Systems",
    summary:
      "Essential security measures and compliance requirements for AI systems in enterprise environments.",
    category: "Security",
    date: "2025-01-19",
    readMinutes: 9,
  },
  {
    id: "competitive-advantage-ai-strategies",
    title: "Competitive Advantage Through AI: Strategic Implementation",
    summary:
      "How market leaders are using AI to gain competitive advantage and capture market share in 2025.",
    category: "Strategy",
    date: "2025-01-18",
    readMinutes: 8,
  },
  {
    id: "ai-roi-success-stories",
    title: "AI ROI Success Stories: 200-500% Returns Achieved",
    summary:
      "Real-world examples of companies achieving exceptional ROI through strategic AI implementation.",
    category: "Success Stories",
    date: "2025-01-17",
    readMinutes: 10,
  },
  {
    id: "micro-saas-growth-metrics",
    title: "Micro SAAS Growth Metrics: Scaling Strategies That Work",
    summary:
      "Key performance indicators and growth strategies for scaling micro SAAS platforms successfully.",
    category: "Growth Strategy",
    date: "2025-01-16",
    readMinutes: 6,
  },
  {
    id: "ai-workflow-automation-benefits",
    title: "AI Workflow Automation: 80% Task Reduction Achieved",
    summary:
      "Quantified benefits of AI workflow automation including time savings, cost reduction, and efficiency gains.",
    category: "Automation",
    date: "2025-01-15",
    readMinutes: 5,
  },
  {
    id: "future-of-work-ai-impact",
    title: "The Future of Work: AI's Impact on Industry Transformation",
    summary:
      "Analysis of how AI is reshaping work across industries and the opportunities it creates for businesses.",
    category: "Future of Work",
    date: "2025-01-14",
    readMinutes: 7,
  },
  {
    id: "predictive-analytics-business-value",
    title: "Predictive Analytics: Turning Data into Business Value",
    summary:
      "How predictive analytics and AI are helping businesses forecast trends and optimize operations for maximum profit.",
    category: "Predictive Analytics",
    date: "2025-01-13",
    readMinutes: 8,
  },
  {
    id: "ai-implementation-best-practices",
    title: "AI Implementation Best Practices: From Planning to Production",
    summary:
      "Comprehensive guide to successfully implementing AI solutions with practical checklists and proven methodologies.",
    category: "Implementation",
    date: "2025-01-12",
    readMinutes: 9,
  },
];

