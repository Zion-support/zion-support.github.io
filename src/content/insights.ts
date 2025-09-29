export type InsightArticle = {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
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
    id: "secure-ml-platform-checklist",
    title: "Secure ML Platform: A 12‑Point Checklist",
    summary:
      "Pragmatic controls for data flows, registries, deployment targets, and drift monitoring.",
    category: "Security",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "edge-cdn-cache-budgeting",
    title: "Edge CDN Cache Budgeting: Hit‑Rate Wins Without Stale Bugs",
    summary:
      "Decide TTLs, validation circuits, and negative caching for reliable, fast UX.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "ai-cost-quick-wins",
    title: "AI Cost Quick Wins: Cut 25% Without Slowing Teams",
    summary:
      "Target redundant workflows, compress context, and cache prompts to reduce spend fast.",
    category: "AI Strategy",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "model-policy-tests-playbook",
    title: "A Playbook for Model Policy Tests",
    summary:
      "Define disallowed patterns, add detectors, and wire policy checks into CI and runtime.",
    category: "AI Governance",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "edge-cache-stale-while-revalidate",
    title: "Stale‑While‑Revalidate in Practice",
    summary:
      "Deliver instant responses while safely refreshing data in the background at the edge.",
    category: "Architecture",
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
    id: "ai-roadmaps-outcomes",
    title: "AI Roadmaps That Ship Outcomes, Not Science Projects",
    summary:
      "A 3-step method to prioritize use-cases, define measurable KPIs, and deliver value in 90 days.",
    category: "AI Strategy",
    date: "2025-09-29",
    readMinutes: 5,
  },
  {
    id: "cloud-finops-wins",
    title: "Cloud FinOps: 9 Wins Your CFO Will Love",
    summary:
      "Right-size fleets, shape demand, and make CI/CD cost-aware without slowing developers.",
    category: "Cloud FinOps",
    date: "2025-09-29",
    readMinutes: 4,
  },
  {
    id: "genai-guardrails-scorecards",
    title: "GenAI Guardrails: Scorecards That Prevent Silent Regressions",
    summary:
      "Policy tests, red-team prompts, and online checks that keep quality high as usage scales.",
    category: "GenAI",
    date: "2025-09-29",
    readMinutes: 6,
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
    title: "Kubernetes Cost Guardrails That Engineers Don't Hate",
    summary:
      "Limit waste with sensible defaults: requests/limits, QoS, autoscaling, and cost-aware CI policies.",
    category: "Cloud",
    date: "2025-09-28",
    readMinutes: 7,
  },
  {
    id: "ciso-zero-trust-scorecard",
    title: "A CISO's Zero‑Trust Scorecard",
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
    title: "An Operator's Playbook for LTV:CPA Ratio",
    summary:
      "Instrumentation, cohorting, and experimentation tactics to consistently improve unit economics.",
    category: "Product Analytics",
    date: "2025-09-28",
    readMinutes: 7,
  },
  {
    id: "edge-caching-primer",
    title: "Edge Caching Primer: Shrinking P95 Without Breaking Consistency",
    summary:
      "When to cache at the edge, what to purge, and patterns for safe staleness.",
    category: "Architecture",
    date: "2025-09-28",
    readMinutes: 6,
  },
  {
    id: "platform-engineering-blueprint",
    title: "Platform Engineering Blueprint 2025",
    summary:
      "Golden paths, paved roads, and product thinking to scale developer experience across hundreds of teams.",
    category: "Platform Engineering",
    date: "2025-09-27",
    readMinutes: 8,
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
    id: "genai-ops-safety",
    title: "Operationalizing GenAI Safely and at Scale",
    summary:
      "Guardrails, evals, and rollout strategies that keep quality high while shipping fast.",
    category: "MLOps",
    date: "2025-09-27",
    readMinutes: 6,
  },
  {
    id: "north-star-metrics-cheatsheet",
    title: "North‑Star Metrics: A 5‑Step Cheatsheet",
    summary:
      "A quick framework to choose metrics that truly reflect customer value and drive growth.",
    category: "Product Analytics",
    date: "2025-09-26",
    readMinutes: 5,
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
    id: "ai-workflow-automation-2025-trends",
    title: "AI Workflow Automation: 2025 Trends That Will Transform Business",
    summary:
      "Discover the latest trends in AI workflow automation that are reshaping how businesses operate and compete in 2025.",
    category: "AI & Automation",
    date: "2025-01-17",
    readMinutes: 6,
  },
  {
    id: "quantum-computing-business-ready",
    title: "Quantum Computing: When Will It Be Business-Ready?",
    summary:
      "An honest assessment of quantum computing's current capabilities and realistic timeline for business applications.",
    category: "Quantum Computing",
    date: "2025-01-17",
    readMinutes: 7,
  },
  {
    id: "edge-ai-real-world-deployments",
    title: "Edge AI: Real-World Deployments That Are Working Today",
    summary:
      "Case studies from manufacturing, healthcare, and retail showing how edge AI is delivering measurable results.",
    category: "Edge Computing",
    date: "2025-01-16",
    readMinutes: 8,
  },
  {
    id: "zero-trust-implementation-guide",
    title: "Zero Trust Implementation: A Practical Guide for 2025",
    summary:
      "Step-by-step guide to implementing Zero Trust security architecture without breaking your existing workflows.",
    category: "Security",
    date: "2025-01-15",
    readMinutes: 9,
  },
  {
    id: "ai-virtual-assistant-roi",
    title: "AI Virtual Assistants: Measuring ROI and Business Impact",
    summary:
      "How to quantify the business value of AI virtual assistants and ensure your investment delivers real results.",
    category: "AI & Automation",
    date: "2025-01-14",
    readMinutes: 5,
  },
  {
    id: "micro-saas-platform-selection",
    title: "Choosing the Right Micro SAAS Platforms for Your Business",
    summary:
      "A framework for evaluating and selecting micro SAAS platforms that align with your business goals and budget.",
    category: "Technology",
    date: "2025-01-13",
    readMinutes: 6,
  },
  {
    id: "data-analytics-ai-transformation",
    title: "Data Analytics Transformation: From Static Reports to AI Insights",
    summary:
      "How AI is transforming traditional data analytics into dynamic, predictive, and actionable business intelligence.",
    category: "Data Analytics",
    date: "2025-01-12",
    readMinutes: 7,
  },
  {
    id: "cybersecurity-threat-landscape-2025",
    title: "2025 Cybersecurity Threat Landscape: What Businesses Need to Know",
    summary:
      "The evolving threat landscape and emerging security challenges that businesses must prepare for in 2025.",
    category: "Security",
    date: "2025-01-11",
    readMinutes: 8,
  },
  {
    id: "cloud-edge-hybrid-architecture",
    title: "Cloud-Edge Hybrid Architecture: Best Practices for 2025",
    summary:
      "Designing and implementing hybrid cloud-edge architectures that optimize performance, cost, and security.",
    category: "Cloud Computing",
    date: "2025-01-10",
    readMinutes: 6,
  },
  {
    id: "ai-ethics-business-implementation",
    title: "AI Ethics in Business: Practical Implementation Guidelines",
    summary:
      "How to implement ethical AI practices in your business operations while maintaining competitive advantage.",
    category: "AI Ethics",
    date: "2025-01-09",
    readMinutes: 7,
  },
  {
    id: "iot-security-best-practices",
    title: "IoT Security: Best Practices for Connected Device Protection",
    summary:
      "Comprehensive security strategies for protecting IoT devices and networks from emerging threats.",
    category: "IoT Security",
    date: "2025-01-08",
    readMinutes: 6,
  },
  {
    id: "blockchain-business-applications",
    title: "Blockchain Beyond Cryptocurrency: Real Business Applications",
    summary:
      "Exploring practical blockchain applications in supply chain, finance, and digital identity management.",
    category: "Blockchain",
    date: "2025-01-07",
    readMinutes: 8,
  },
  {
    id: "5g-business-applications-reality",
    title: "5G Business Applications: What's Actually Working",
    summary:
      "Real-world 5G business applications that are delivering measurable ROI, from smart factories to autonomous vehicles.",
    category: "5G Technology",
    date: "2025-01-09",
    readMinutes: 6,
  },
  {
    id: "ai-ecommerce-personalization-roi",
    title: "AI E-commerce Personalization: ROI and Implementation Insights",
    summary:
      "How AI-powered personalization is driving revenue growth in e-commerce, with specific metrics and implementation strategies.",
    category: "E-commerce",
    date: "2025-01-08",
    readMinutes: 5,
  },
];

