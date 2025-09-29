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
    id: "enterprise-genai-guardrails",
    title: "Enterprise Guardrails for Responsible GenAI",
    summary:
      "A pragmatic framework for policy testing, safety evaluations, and alignment with governance standards.",
    category: "GenAI",
    date: "2025-09-29",
    readMinutes: 7,
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
    id: "ciso-zero-trust-scorecard",
    title: "A CISO's Zero‑Trust Scorecard",
    summary:
      "Measure progress with identity controls, least privilege, continuous verification, and blast‑radius limits.",
    category: "Security",
    date: "2025-09-28",
    readMinutes: 8,
  },
  {
    id: "finops-slo-coupling",
    title: "Coupling FinOps With SLOs That Engineers Support",
    summary:
      "Unify reliability targets and cost controls with guardrails that keep developer velocity high.",
    category: "Cloud FinOps",
    date: "2025-09-27",
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
    id: "platform-blueprints-ref-arch",
    title: "Reference Architectures for Modern Data & AI Platforms",
    summary:
      "Battle-tested blueprints for ingestion, governance, semantic layers, and real-time activation.",
    category: "Architecture",
    date: "2025-09-28",
    readMinutes: 10,
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
    id: "cloud-cost-qa-automation",
    title: "QA Gates That Keep Cloud Costs From Creeping",
    summary:
      "Cost-aware tests, CI policies, and dashboards that prevent regressions before they ship.",
    category: "Cloud FinOps",
    date: "2025-09-27",
    readMinutes: 6,
  },
  {
    id: "ai-platform-roadmap-2025",
    title: "Our AI Platform Roadmap for 2025",
    summary:
      "A transparent look at the capabilities, milestones, and enterprise features we are shipping next year.",
    category: "Product",
    date: "2025-09-01",
    readMinutes: 6,
  },
  {
    id: "genai-evals-blueprint",
    title: "A Practical Blueprint for GenAI Evals in Production",
    summary:
      "How to stand up evaluation harnesses, golden sets, and regression testing for enterprise GenAI.",
    category: "MLOps",
    date: "2025-09-27",
    readMinutes: 9,
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
    id: "real-time-pipelines-reliability",
    title: "Building Reliable Real‑Time Data Pipelines",
    summary:
      "Patterns for exactly‑once semantics, schema evolution, and backpressure handling in streaming systems.",
    category: "Data Engineering",
    date: "2025-09-20",
    readMinutes: 7,
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
    id: "ai-automation-enterprise-2025",
    title: "Enterprise AI Automation: Beyond Chatbots to Business Transformation",
    summary:
      "How Fortune 500 companies are using AI to automate complex workflows, reduce costs by 40%, and accelerate decision-making.",
    category: "AI Strategy",
    date: "2025-01-17",
    readMinutes: 8,
  },
  {
    id: "cloud-native-security-architecture",
    title: "Building Bulletproof Cloud-Native Security Architecture",
    summary:
      "Zero-trust principles, service mesh security, and runtime protection for modern cloud applications.",
    category: "Cloud Security",
    date: "2025-01-16",
    readMinutes: 9,
  },
  {
    id: "genai-productivity-boost",
    title: "GenAI Productivity: 300% Faster Development with Smart Tooling",
    summary:
      "Real case studies showing how AI coding assistants, automated testing, and intelligent documentation transform development teams.",
    category: "Developer Tools",
    date: "2025-01-15",
    readMinutes: 7,
  },
  {
    id: "data-mesh-implementation-guide",
    title: "Data Mesh Implementation: From Theory to Production Success",
    summary:
      "Step-by-step guide to implementing data mesh architecture, including governance, ownership models, and technology choices.",
    category: "Data Architecture",
    date: "2025-01-14",
    readMinutes: 10,
  },
  {
    id: "kubernetes-cost-optimization-advanced",
    title: "Advanced Kubernetes Cost Optimization: 60% Savings Without Performance Loss",
    summary:
      "Advanced techniques for right-sizing workloads, implementing spot instances, and using cluster autoscaling effectively.",
    category: "Cloud Optimization",
    date: "2025-01-13",
    readMinutes: 8,
  },
  {
    id: "mlops-production-ready",
    title: "MLOps at Scale: Production-Ready Machine Learning Operations",
    summary:
      "Complete MLOps pipeline setup including model versioning, A/B testing, monitoring, and automated retraining.",
    category: "MLOps",
    date: "2025-01-12",
    readMinutes: 11,
  },
  {
    id: "cybersecurity-ai-defense",
    title: "AI-Powered Cybersecurity: Next-Generation Threat Detection",
    summary:
      "How machine learning is revolutionizing threat detection, incident response, and security operations centers.",
    category: "Cybersecurity",
    date: "2025-01-11",
    readMinutes: 9,
  },
  {
    id: "microservices-observability",
    title: "Microservices Observability: From Chaos to Clarity",
    summary:
      "Comprehensive observability strategy for microservices including distributed tracing, metrics, and alerting.",
    category: "Observability",
    date: "2025-01-10",
    readMinutes: 7,
  },
  {
    id: "serverless-cost-analysis",
    title: "Serverless Cost Analysis: When to Use and When to Avoid",
    summary:
      "Detailed cost modeling for serverless vs. traditional infrastructure, including hidden costs and optimization strategies.",
    category: "Cloud Economics",
    date: "2025-01-09",
    readMinutes: 6,
  },
];

