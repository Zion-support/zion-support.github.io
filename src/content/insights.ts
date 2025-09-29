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
  {
    id: "generative-ai-business-transformation",
    title: "Generative AI Business Transformation: Real-World Success Stories",
    summary:
      "Case studies showing how leading companies are using generative AI to transform operations, create new revenue streams, and gain competitive advantages.",
    category: "AI Innovation",
    date: "2025-01-22",
    readMinutes: 9,
  },
  {
    id: "zero-trust-implementation-guide",
    title: "Zero Trust Implementation Guide: A Practical Approach for 2025",
    summary:
      "Step-by-step guide to implementing Zero Trust security architecture without disrupting existing workflows or compromising productivity.",
    category: "Security",
    date: "2025-01-22",
    readMinutes: 8,
  },
  {
    id: "edge-computing-business-applications",
    title: "Edge Computing Business Applications: Beyond the Hype",
    summary:
      "Real-world applications of edge computing in manufacturing, healthcare, retail, and other industries, with measurable business outcomes.",
    category: "Edge Computing",
    date: "2025-01-22",
    readMinutes: 7,
  },
  {
    id: "ai-workforce-transformation",
    title: "AI and Workforce Transformation: Preparing for the Future of Work",
    summary:
      "How AI is reshaping the workplace and what organizations need to do to prepare their workforce for the AI-driven economy.",
    category: "Business Strategy",
    date: "2025-01-22",
    readMinutes: 10,
  },
  {
    id: "quantum-computing-business-readiness",
    title: "Quantum Computing Business Readiness: A Realistic Assessment",
    summary:
      "Honest evaluation of quantum computing's current state, business applications, and realistic timeline for enterprise adoption.",
    category: "Emerging Technology",
    date: "2025-01-22",
    readMinutes: 6,
  },
  {
    id: "sustainable-technology-practices",
    title: "Sustainable Technology Practices for Modern Enterprises",
    summary:
      "How technology leaders can implement sustainable practices in their operations while maintaining performance and innovation.",
    category: "Sustainability",
    date: "2025-01-22",
    readMinutes: 5,
  },
  {
    id: "remote-work-technology-solutions",
    title: "Remote Work Technology Solutions: Building the Future of Work",
    summary:
      "Essential technology solutions and best practices for creating effective remote work environments that support productivity and collaboration.",
    category: "Workplace Technology",
    date: "2025-01-22",
    readMinutes: 6,
  },
  {
    id: "data-privacy-compliance-2025",
    title: "Data Privacy and Compliance in 2025: What Businesses Need to Know",
    summary:
      "Overview of evolving data privacy regulations and practical steps for ensuring compliance while maintaining business agility.",
    category: "Data Privacy",
    date: "2025-01-22",
    readMinutes: 7,
  },
  {
    id: "blockchain-business-use-cases",
    title: "Blockchain Business Use Cases: Beyond Cryptocurrency",
    summary:
      "Practical blockchain applications in supply chain management, digital identity, smart contracts, and other business domains.",
    category: "Blockchain",
    date: "2025-01-22",
    readMinutes: 8,
  },
  {
    id: "5g-enterprise-transformation",
    title: "5G Enterprise Transformation: Opportunities and Implementation",
    summary:
      "How 5G technology is enabling new business models and transforming industries, with practical implementation considerations.",
    category: "5G Technology",
    date: "2025-01-22",
    readMinutes: 7,
  },
  {
    id: "digital-transformation-trends-2025",
    title: "Digital Transformation Trends 2025: What's Next",
    summary:
      "The latest trends in digital transformation and how businesses can adapt their strategies to stay competitive in an evolving landscape.",
    category: "Digital Transformation",
    date: "2025-01-22",
    readMinutes: 6,
  },
];

