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
    id: "canary-evals-for-genai",
    title: "Canary Evals for GenAI: What to Measure Before You Ship",
    summary:
      "Define offline gates and online guardrails to prevent silent regressions in LLM features.",
    category: "MLOps",
    date: "2025-09-29",
    readMinutes: 5,
  },
  {
    id: "streaming-backpressure-patterns",
    title: "Taming Backpressure in Streaming Systems",
    summary:
      "Practical patterns for smoothing bursts, protecting downstreams, and keeping SLAs green.",
    category: "Data Engineering",
    date: "2025-09-28",
    readMinutes: 6,
  },
  {
    id: "north-star-metrics-that-drive-growth",
    title: "North‑Star Metrics That Actually Drive Growth",
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
    id: "ai-customer-personalization-2025",
    title: "AI Customer Personalization: Beyond Basic Recommendations",
    summary:
      "Advanced personalization strategies using real-time behavioral data and predictive modeling for 40% higher engagement.",
    category: "AI & Automation",
    date: "2025-01-22",
    readMinutes: 6,
  },
  {
    id: "blockchain-supply-chain-transparency",
    title: "Blockchain for Supply Chain Transparency: Real ROI Stories",
    summary:
      "How major retailers are using blockchain to track products from source to shelf, reducing fraud by 85%.",
    category: "Blockchain",
    date: "2025-01-21",
    readMinutes: 5,
  },
  {
    id: "iot-device-management-scale",
    title: "Managing IoT Devices at Scale: Lessons from 100K+ Deployments",
    summary:
      "Device provisioning, security updates, and monitoring strategies for large-scale IoT implementations.",
    category: "IoT",
    date: "2025-01-20",
    readMinutes: 7,
  },
  {
    id: "5g-low-latency-applications",
    title: "5G Low-Latency Applications: New Business Models Emerge",
    summary:
      "How ultra-low latency 5G is enabling real-time applications in gaming, healthcare, and autonomous vehicles.",
    category: "5G Technology",
    date: "2025-01-19",
    readMinutes: 6,
  },
  {
    id: "digital-transformation-change-management",
    title: "Digital Transformation: The Human Side of Technology Change",
    summary:
      "Proven strategies for managing organizational change during digital transformation initiatives.",
    category: "Change Management",
    date: "2025-01-18",
    readMinutes: 8,
  },
  {
    id: "ai-chatbot-conversation-design",
    title: "AI Chatbot Conversation Design: Creating Natural Interactions",
    summary:
      "UX principles and conversation flow patterns that make AI chatbots feel human and deliver results.",
    category: "AI & Automation",
    date: "2025-01-17",
    readMinutes: 5,
  },
  {
    id: "cloud-native-monitoring-strategies",
    title: "Cloud-Native Monitoring: Observability in Distributed Systems",
    summary:
      "Comprehensive monitoring strategies for microservices architectures including distributed tracing and log aggregation.",
    category: "Cloud Architecture",
    date: "2025-01-16",
    readMinutes: 7,
  },
  {
    id: "ml-model-drift-detection",
    title: "ML Model Drift Detection: Early Warning Systems",
    summary:
      "Automated systems for detecting model performance degradation and triggering retraining pipelines.",
    category: "Machine Learning",
    date: "2025-01-15",
    readMinutes: 6,
  },
  {
    id: "cybersecurity-threat-hunting-automation",
    title: "Automated Threat Hunting: AI-Powered Security Operations",
    summary:
      "How AI is transforming threat hunting from manual investigation to automated detection and response.",
    category: "Cybersecurity",
    date: "2025-01-14",
    readMinutes: 5,
  },
  {
    id: "edge-computing-data-processing",
    title: "Edge Computing for Real-Time Data Processing",
    summary:
      "Strategies for processing data at the edge to reduce latency and improve user experience in IoT applications.",
    category: "Edge Computing",
    date: "2025-01-13",
    readMinutes: 6,
  },
  {
    id: "api-security-best-practices-2025",
    title: "API Security Best Practices: Protecting Your Digital Assets",
    summary:
      "Comprehensive API security strategies including authentication, rate limiting, and threat detection.",
    category: "API Security",
    date: "2025-01-12",
    readMinutes: 7,
  },
  {
    id: "data-privacy-compliance-automation",
    title: "Automating Data Privacy Compliance: GDPR, CCPA, and Beyond",
    summary:
      "AI-powered tools for automating data privacy compliance across multiple jurisdictions and regulations.",
    category: "Data Privacy",
    date: "2025-01-11",
    readMinutes: 8,
  },
  {
    id: "container-security-hardening",
    title: "Container Security Hardening: Production-Ready Strategies",
    summary:
      "Security best practices for containerized applications including image scanning, runtime protection, and secrets management.",
    category: "Container Security",
    date: "2025-01-10",
    readMinutes: 6,
  },
  {
    id: "serverless-cost-optimization",
    title: "Serverless Cost Optimization: Maximizing Value While Minimizing Spend",
    summary:
      "Proven strategies for optimizing serverless architecture costs without sacrificing performance or scalability.",
    category: "Cloud Optimization",
    date: "2025-01-09",
    readMinutes: 5,
  },
];

