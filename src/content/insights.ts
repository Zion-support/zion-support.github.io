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
];

