export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  featured?: boolean;
  readTime?: string;
}

export const posts: BlogPost[] = [
  {
    slug: "ai-security-posture-2025",
    title: "AI Security Posture 2025: Hardening LLM Apps End-to-End",
    description:
      "Threat models, policy tests, and isolation patterns to keep GenAI features safe in production.",
    category: "Security",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "llm-evals-blueprint-2025",
    title: "LLM Evals Blueprint: Offline Suites to Online Guardrails",
    description:
      "A practical blueprint to design evals that predict real-world quality and prevent regressions.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "ai-product-launch-checklist-2025",
    title: "AI Product Launch Checklist: From Pilot to Production",
    description:
      "From offline suites to online canaries: patterns that keep quality high as usage grows.",
    category: "GenAI",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "feature-flags-edge-2025",
    title: "Feature Flags at the Edge: <100ms Global Releases",
    description:
      "Chunking, indexing, and retrieval strategies that actually improve answer quality at lower cost.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "edge-inference-patterns-2025",
    title: "Edge Inference Patterns for Sub‑100ms Experiences",
    description:
      "Latency budgets, on‑device models, and caching strategies for lightning‑fast AI UX at the edge.",
    category: "Architecture",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "north-star-metrics-anti-patterns",
    title: "North‑Star Metrics: 7 Anti‑Patterns to Avoid",
    description:
      "Common traps that derail metric-driven product development and how to fix them.",
    category: "Product Analytics",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read",
  },
  {
    slug: "mlops-reliability-2025",
    title: "MLOps Reliability: Shipping GenAI Changes Safely",
    description:
      "Canary evals, shadow deploys, and rollback patterns to keep quality high while iterating fast.",
    category: "MLOps",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min read",
  },
  {
    slug: "realtime-data-pipelines-2025",
    title: "Reliable Real‑Time Data Pipelines in 2025",
    description:
      "Exactly‑once semantics, backpressure control, and pragmatic observability for streaming systems.",
    category: "Data Engineering",
    publishedAt: "2025-09-28",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "ai-product-launch-checklist-2025",
    title: "AI Product Launch Checklist: From Pilot to Production",
    description:
      "A pragmatic checklist for hardening pilots, proving ROI, and launching AI features safely.",
    category: "Product",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "edge-inference-patterns-2025",
    title: "Edge Inference Patterns for Sub‑100ms Experiences",
    description:
      "Latency budgets, on‑device models, and caching strategies for lightning‑fast AI UX at the edge.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "ai-governance-checklist-2025",
    title: "AI Governance Checklist 2025: Ship Fast Without Breaking Policy",
    description:
      "Practical guardrails, review rituals, and approval flows to keep GenAI initiatives compliant and on‑track.",
    category: "AI Governance",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "5 min read",
  },
  {
    slug: "prompt-engineering-playbook-v2",
    title: "Prompt Engineering Playbook v2: Patterns That Survive Production",
    description:
      "Composable prompts, eval‑driven iteration, and telemetry for robust GenAI applications.",
    category: "GenAI",
    publishedAt: "2025-09-27",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "north-star-metrics-framework",
    title: "North‑Star Metrics: A Field‑Tested Framework",
    description:
      "A practical method to align teams to measurable outcomes and avoid vanity KPIs.",
    category: "Product Analytics",
    publishedAt: "2025-09-27",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "ai-workflow-automation-2025-guide",
    title: "The Complete Guide to AI Workflow Automation in 2025",
    description:
      "Discover how AI workflow automation is revolutionizing business operations. Learn implementation strategies, benefits, and real-world case studies.",
    category: "AI & Automation",
    publishedAt: "2025-01-17",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "platform-engineering-blueprint-2025",
    title: "Platform Engineering Blueprint 2025: From Chaos to Clarity",
    description:
      "Core capabilities, golden paths, and product thinking to accelerate delivery across hundreds of teams.",
    category: "Platform Engineering",
    publishedAt: "2025-09-27",
    featured: true,
    readTime: "11 min read",
  },
  {
    slug: "genai-eval-systems",
    title: "Shipping with Confidence: Evaluation Systems for GenAI Apps",
    description:
      "Offline + online evals, policy tests, and guardrails to keep quality high as you scale.",
    category: "GenAI",
    publishedAt: "2025-09-26",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "opentelemetry-tracing-primer",
    title: "OpenTelemetry Tracing That Engineers Actually Use",
    description:
      "Sampling strategies, semantic conventions, and dashboards that shrink MTTR for complex stacks.",
    category: "Observability",
    publishedAt: "2025-09-26",
    featured: false,
    readTime: "8 min read",
  },
  {
    slug: "ai-virtual-assistant-best-practices",
    title: "Best Practices for Implementing AI Virtual Assistants in 2025",
    description:
      "Learn how to successfully implement AI virtual assistants in your business. Discover strategies for training, deployment, and optimization.",
    category: "AI & Automation",
    publishedAt: "2025-01-15",
    featured: true,
    readTime: "10 min read",
  },
  {
    slug: "data-analytics-ai-transformation",
    title: "How AI is Transforming Data Analytics in 2025",
    description:
      "Explore the revolutionary impact of AI on data analytics. Learn about predictive analytics, automated insights, and real-time decision making.",
    category: "Data Analytics",
    publishedAt: "2025-01-12",
    featured: false,
    readTime: "12 min read",
  },
  {
    slug: "micro-saas-platform-advantages",
    title: "Why Micro SAAS Platforms Are the Future of Business Software",
    description:
      "Discover the advantages of micro SAAS platforms and how they're transforming how businesses consume and implement software solutions.",
    category: "Technology",
    publishedAt: "2025-01-10",
    featured: false,
    readTime: "9 min read",
  },
  // Additional curated posts (resolved from merge)
  {
    slug: "platform-engineering-blueprint-2025",
    title: "A Practical Blueprint for Platform Engineering in 2025",
    description:
      "Capabilities, golden paths, and scorecards to accelerate delivery without sacrificing autonomy.",
    category: "Platform Engineering",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "genai-evals-realworld",
    title: "Real‑World GenAI Evals: From Offline Suites to Online Guardrails",
    description:
      "Patterns for evaluation harnesses, drift detection, and policy testing that scale with usage.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "ai-roadmaps",
    title: "Designing High-Impact AI Roadmaps",
    description:
      "A practical framework to align AI investments with measurable business outcomes and reduce time-to-value.",
    category: "AI Strategy",
    publishedAt: "2025-09-15",
    featured: false,
    readTime: "5 min read",
  },
  {
    slug: "cloud-finops-tactics",
    title: "Cutting Cloud Spend Without Slowing Teams",
    description:
      "Proven tactics for right-sizing, demand shaping, and engineering-friendly guardrails that keep velocity high.",
    category: "Cloud FinOps",
    publishedAt: "2025-09-22",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "zero-trust-for-saas",
    title: "Zero-Trust in Practice for SaaS",
    description:
      "A pragmatic guide to rolling out least-privilege, continuous verification, and blast radius controls.",
    category: "Security",
    publishedAt: "2025-09-25",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "generative-ai-enterprise",
    title: "Generative AI in Enterprise: Real-World Success Stories",
    description:
      "Case studies from Fortune 500 companies showing how GenAI is transforming customer service, content creation, and business operations.",
    category: "AI Innovation",
    publishedAt: "2025-01-20",
    featured: false,
    readTime: "8 min read",
  },
  {
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration Best Practices: Lessons from 100+ Projects",
    description:
      "Essential strategies for successful cloud migration, including risk mitigation, cost optimization, and timeline management.",
    category: "Cloud Strategy",
    publishedAt: "2025-01-18",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "cybersecurity-2025-trends",
    title: "Cybersecurity Trends 2025: What Every CISO Needs to Know",
    description:
      "Emerging threats, new defense strategies, and the latest security technologies shaping the cybersecurity landscape.",
    category: "Cybersecurity",
    publishedAt: "2025-01-15",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "data-analytics-automation",
    title: "Automating Data Analytics: From Insight to Action",
    description:
      "How AI-powered analytics platforms are revolutionizing business intelligence and enabling real-time decision making.",
    category: "Data Science",
    publishedAt: "2025-01-12",
    featured: false,
    readTime: "8 min read",
  },
  {
    slug: "devops-automation-guide",
    title: "The Complete Guide to DevOps Automation",
    description:
      "Comprehensive strategies for automating CI/CD pipelines, infrastructure management, and deployment processes.",
    category: "DevOps",
    publishedAt: "2025-01-10",
    featured: false,
    readTime: "9 min read",
  },
  {
    slug: "microservices-architecture",
    title: "Microservices Architecture: Design Patterns and Best Practices",
    description:
      "Essential patterns for building scalable, maintainable microservices architectures in modern applications.",
    category: "Software Architecture",
    publishedAt: "2025-01-08",
    featured: false,
    readTime: "9 min read",
  },
  {
    slug: "ai-ethics-compliance",
    title: "AI Ethics and Compliance: Building Responsible AI Systems",
    description:
      "Framework for developing AI systems that are fair, transparent, and compliant with emerging regulations.",
    category: "AI Governance",
    publishedAt: "2025-01-05",
    featured: false,
    readTime: "8 min read",
  },
  // New content additions merged
  {
    slug: "ai-automation-roi-playbook-2025",
    title: "AI Automation ROI Playbook 2025",
    description:
      "Benchmarks, calculators, and rollout plans to prove value in 90 days.",
    category: "AI Strategy",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read",
  },
  {
    slug: "cloud-cost-guardrails-scorecards",
    title: "Cloud Cost Guardrails: Practical Scorecards That Stick",
    description:
      "Requests/limits, SLOs, and CI gates that cut spend 30% without drama.",
    category: "Cloud FinOps",
    publishedAt: "2025-09-30",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "ai-governance-playbook-2025",
    title: "The 2025 AI Governance Playbook for Product Teams",
    description:
      "Policy tests, eval systems, and auditability patterns that scale with velocity.",
    category: "AI Governance",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "edge-ai-design-guide",
    title: "Designing Edge AI Systems: A Field Guide",
    description:
      "Low-latency inference with quantization, caching, and graceful degradation.",
    category: "Edge Computing",
    publishedAt: "2025-09-28",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "quantum-computing-business-impact-2025",
    title: "Quantum Computing's Business Impact: What Every CEO Needs to Know",
    description:
      "Explore how quantum computing is revolutionizing cryptography, optimization, and AI. Learn about business applications and strategic implications.",
    category: "Quantum Computing",
    publishedAt: "2025-01-22",
    featured: true,
    readTime: "12 min read",
  },
  {
    slug: "edge-ai-implementation-guide",
    title: "Edge AI Implementation: Bringing Intelligence to the Edge",
    description:
      "Complete guide to implementing edge AI solutions for real-time processing, reduced latency, and improved privacy in enterprise applications.",
    category: "Edge AI",
    publishedAt: "2025-01-21",
    featured: true,
    readTime: "10 min read",
  },
  {
    slug: "zero-trust-security-implementation",
    title: "Zero Trust Security: A Practical Implementation Guide",
    description:
      "Step-by-step guide to implementing zero trust security architecture. Learn about micro-segmentation, identity verification, and continuous monitoring.",
    category: "Cybersecurity",
    publishedAt: "2025-01-20",
    featured: true,
    readTime: "9 min read",
  },
  {
    slug: "ai-powered-customer-experience",
    title: "Transforming Customer Experience with AI: Real-World Case Studies",
    description:
      "Discover how leading companies are using AI to enhance customer experience, reduce response times, and increase satisfaction scores.",
    category: "Customer Experience",
    publishedAt: "2025-01-19",
    featured: false,
    readTime: "8 min read",
  },
  {
    slug: "blockchain-business-applications",
    title: "Blockchain Beyond Crypto: Business Applications in 2025",
    description:
      "Explore practical blockchain applications in supply chain, healthcare, finance, and digital identity management for enterprise solutions.",
    category: "Blockchain",
    publishedAt: "2025-01-18",
    featured: false,
    readTime: "11 min read",
  },
  {
    slug: "machine-learning-production-guide",
    title: "From Model to Production: ML Deployment Best Practices",
    description:
      "Comprehensive guide to deploying machine learning models in production environments with monitoring, versioning, and scaling strategies.",
    category: "Machine Learning",
    publishedAt: "2025-01-17",
    featured: true,
    readTime: "13 min read",
  },
  {
    slug: "iot-security-challenges-solutions",
    title: "IoT Security Challenges and Solutions for Enterprise",
    description:
      "Address the growing security challenges in IoT deployments and learn about best practices for securing connected devices and networks.",
    category: "IoT Security",
    publishedAt: "2025-01-16",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "automated-testing-ai-qa",
    title: "Revolutionizing QA with AI-Powered Automated Testing",
    description:
      "How AI is transforming software testing through intelligent test generation, automated bug detection, and predictive quality assurance.",
    category: "Quality Assurance",
    publishedAt: "2025-01-15",
    featured: false,
    readTime: "9 min read",
  },
  // Appended new posts in this branch
  {
    slug: "edge-ai-latency-budgets",
    title: "Edge AI Latency Budgets: Designing for P95 < 150ms",
    description: "Practical latency allocations and validation techniques for edge inference workloads.",
    category: "Architecture",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read",
  },
  {
    slug: "ai-governance-operating-model",
    title: "AI Governance Operating Model: Roles, Rubrics, and Runbooks",
    description: "A pragmatic model to ship safe AI fast across dozens of product teams.",
    category: "AI Governance",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "cost-aware-mlops",
    title: "Cost-Aware MLOps: Shipping Improvements Without Surprises",
    description: "Guardrails, quotas, and profiling patterns that keep GenAI spend predictable.",
    category: "MLOps",
    publishedAt: "2025-09-30",
    featured: false,
    readTime: "5 min read",
  },
  // Main branch additional post retained
  {
    slug: "digital-transformation-ai-strategy",
    title: "AI-Driven Digital Transformation: A Strategic Framework",
    description:
      "Strategic framework for leveraging AI in digital transformation initiatives, including change management and ROI measurement.",
    category: "Digital Transformation",
    publishedAt: "2025-01-14",
    featured: true,
    readTime: "10 min read",
  }
];

