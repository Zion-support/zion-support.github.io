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
    id: "ai-risk-register-checklist",
    title: "AI Risk Register Checklist",
    summary: "Owners, policy tests, and dashboards that make risk programs real.",
    id: "eval-systems-online-canaries",
    title: "Eval Systems That Scale: Online Canaries and Policy Gates",
    summary:
      "Move from ad-hoc checks to layered evals with CI gates and production canaries tied to KPIs.",
    category: "GenAI",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "edge-flags-validation-blueprints",
    title: "Blueprints: Validating Edge Flags Before They Break Prod",
    summary:
      "Versioned keys, negative caching, and health probes that prevent bad flag rolls globally.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 5,
  },
  {
    id: "genai-policy-tests-canaries",
    title: "GenAI Policy Tests: From Offline Suites to Online Canaries",
    summary:
      "How to combine offline evals with live canaries to catch regressions before customers do.",
    category: "GenAI",
    date: "2025-09-29",
    readMinutes: 6,
  },
  {
    id: "edge-flags-validation",
    title: "Edge Flags: Validation Circuits That Prevent Bad Rolls",
    summary:
      "Design health checks, signed payloads, and roll-forward playbooks to keep flags safe.",
    category: "Architecture",
    date: "2025-09-29",
    readMinutes: 5,
  },
  {
    id: "north-star-metrics-pitfalls",
    title: "North‑Star Metrics Pitfalls: Fixing Vanity and Ambiguity",
    summary:
      "Replace vanity KPIs with leading indicators and consistent instrumentation.",
    category: "Product Analytics",
    date: "2025-09-29",
    readMinutes: 5,
  },
  {
    id: "ai-governance-rubric",
    title: "A Lightweight Rubric for AI Governance Decisions",
    id: "platform-blueprints-golden-paths",
    title: "Golden Paths That Actually Get Used",
    summary:
      "When to require human‑in‑the‑loop, what to log, and how to audit outputs across teams.",
    category: "AI Governance",
    date: "2025-10-04",
    readMinutes: 4,
  },
  {
    id: "rag-freshness-strategies",
    title: "RAG Freshness Strategies",
    summary: "Invalidate staleness with versioned chunks, TTLs, and async warmups.",
    id: "ai-governance-rubric",
    title: "A Lightweight Rubric for AI Governance Decisions",
    summary:
      "Decision criteria for when to add controls, how to validate, and who owns risk.",
    category: "Risk & Compliance",
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
    date: "2025-10-04",
    readMinutes: 5,
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
    category: "Sales AI",
    date: "2025-09-30",
    readMinutes: 6,
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
      "A look at on‑device models, streaming pipelines, and cost/perf trade‑offs from deployments.",
    category: "AI Engineering",
    date: "2025-09-29",
    readMinutes: 7,
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
      "How we helped teams reduce cloud spend by 32% on average without hurting performance.",
    category: "Cloud",
    date: "2025-08-05",
    readMinutes: 5,
  },
  {
    id: "data-governance-starter",
    title: "Data Governance Starter Guide for Mid‑Market Teams",
    summary:
      "A no‑nonsense playbook for data quality, lineage, and access controls.",
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
    id: "5g-business-transformation",
    title: "5G and Business Transformation: Opportunities and Challenges",
    summary:
      "How 5G technology is enabling new business models and transforming industries across the globe.",
    category: "5G Technology",
    date: "2025-01-06",
    readMinutes: 7,
  },
  {
    id: "digital-transformation-2025",
    title: "Digital Transformation in 2025: Trends and Strategies",
    summary:
      "The latest trends in digital transformation and how businesses can adapt to stay competitive.",
    category: "Digital Transformation",
    date: "2025-01-05",
    readMinutes: 6,
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
  {
    id: "ai-automation-roi-calculator",
    title: "AI Automation ROI Calculator: Measure Your Business Impact",
    summary:
      "A practical framework for calculating the return on investment from AI automation initiatives, with real-world case studies and templates.",
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
    id: "ai-governance-at-scale-2025",
    title: "AI Governance at Scale: Policies That Enable Speed",
    summary:
      "A pragmatic model for approvals, policy tests, and observability that unlocks faster AI delivery.",
    category: "AI Governance",
    date: "2025-09-30",
    readMinutes: 6,
  },
  {
    id: "ai-scorecards-that-ship",
    title: "AI Scorecards That Ship",
    summary: "Tie initiatives to KPIs with lightweight scorecards and weekly operating rhythms.",
    category: "AI Strategy",
    date: "2025-10-05",
    readMinutes: 4,
  },
  {
    id: "edge-feature-flags",
    title: "Edge Feature Flags: Zero‑Regret Rollouts",
    summary: "Canary by segment and geography with instant rollback and budget caps at the edge.",
    category: "Architecture",
    date: "2025-10-05",
    readMinutes: 5,
  },
  {
    id: "cloud-governance-scorecards",
    title: "Cloud Governance with Scorecards",
    summary: "Turn policies into dashboards and PR checks—spend less time arguing, more shipping.",
    category: "Platform Engineering",
    date: "2025-10-05",
    readMinutes: 4,
      "Essential security practices for AI systems, covering model protection, data privacy, and adversarial defense strategies.",
    category: "Security",
    date: "2025-01-21",
    readMinutes: 11,
  },
];

export default latestInsights;

