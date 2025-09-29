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
    slug: "ai-sales-copilot-playbook-2025",
    title: "AI Sales Copilot: A Practical Playbook for 2025",
    description:
      "Prompt libraries, CRM grounding, and evals that lift rep productivity without hallucinations.",
    category: "AI Strategy",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "event-driven-architectures-at-scale",
    title: "Event‑Driven Architectures at Scale: Contracts, Idempotency, Backfills",
    description:
      "Design versioned events, enforce schemas, and ship reliable replays without double effects.",
    category: "Architecture",
    publishedAt: "2025-09-30",
    featured: false,
    readTime: "8 min read",
  },
  {
    slug: "zero-downtime-migrations-2025",
    title: "Zero‑Downtime Migrations: Blue/Green Data and Progressive Delivery",
    description:
      "Techniques for shipping schema changes safely with dual‑write, shadow reads, and kill switches.",
    category: "Platform Engineering",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "6 min read",
  },
  {
    slug: "ai-autonomous-operations-2025",
    title: "AI Autonomous Operations: Self‑Healing, Self‑Optimizing, Self‑Scaling",
    description:
      "How autonomous agents run infra with policy tests, safety rails, and ROI you can measure in weeks.",
    category: "AI & Automation",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "edge-cdn-cache-strategies-2025",
    title: "Edge CDN Cache Strategies: Fast UX Without Stale Bugs",
    description:
      "Design TTLs, validation circuits, background warming, and negative caching for resilient edge experiences.",
    category: "Architecture",
    publishedAt: "2025-09-30",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "ai-automation-roi-scorecards",
    title: "AI Automation ROI Scorecards: Proving Value in 90 Days",
    description:
      "Outcome metrics, cost baselines, and exec‑ready scorecards that make AI wins obvious.",
    category: "AI Strategy",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "6 min read",
  },
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
  },
  // 2025-09-30 New additions (merged)
  {
    slug: "ai-powered-customer-experience-2025",
    title: "AI-Powered Customer Experience: The Next Frontier in 2025",
    description:
      "How AI is revolutionizing customer experience with predictive personalization, real-time support, and intelligent automation.",
    category: "Customer Experience",
    publishedAt: "2025-01-22",
    featured: true,
    readTime: "11 min read",
  },
  {
    slug: "blockchain-enterprise-adoption",
    title: "Blockchain in Enterprise: Real-World Adoption Stories",
    description:
      "Case studies from Fortune 500 companies showing how blockchain is transforming supply chain, finance, and digital identity.",
    category: "Blockchain",
    publishedAt: "2025-01-21",
    featured: false,
    readTime: "9 min read",
  },
  {
    slug: "iot-security-2025-comprehensive-guide",
    title: "IoT Security 2025: A Comprehensive Guide for Businesses",
    description:
      "Complete security framework for IoT deployments including device authentication, network segmentation, and threat monitoring.",
    category: "IoT Security",
    publishedAt: "2025-01-20",
    featured: true,
    readTime: "13 min read",
  },
  {
    slug: "5g-business-applications-2025",
    title: "5G Business Applications: Transforming Industries in 2025",
    description:
      "Explore how 5G is enabling new business models in healthcare, manufacturing, retail, and smart cities.",
    category: "5G Technology",
    publishedAt: "2025-01-19",
    featured: false,
    readTime: "10 min read",
  },
  {
    slug: "digital-transformation-roadmap-2025",
    title: "Digital Transformation Roadmap: A Strategic Guide for 2025",
    description:
      "Step-by-step framework for successful digital transformation including technology selection, change management, and ROI measurement.",
    category: "Digital Strategy",
    publishedAt: "2025-01-18",
    featured: true,
    readTime: "12 min read",
  },
  {
    slug: "ai-chatbot-implementation-best-practices",
    title: "AI Chatbot Implementation: Best Practices for Maximum ROI",
    description:
      "Learn how to implement AI chatbots that deliver real business value, from design to deployment and optimization.",
    category: "AI & Automation",
    publishedAt: "2025-01-17",
    featured: false,
    readTime: "8 min read",
  },
  {
    slug: "cloud-native-architecture-patterns",
    title: "Cloud-Native Architecture Patterns for Modern Applications",
    description:
      "Essential patterns for building scalable, resilient cloud-native applications using microservices, containers, and serverless.",
    category: "Cloud Architecture",
    publishedAt: "2025-01-16",
    featured: false,
    readTime: "14 min read",
  },
  {
    slug: "machine-learning-model-deployment",
    title: "Machine Learning Model Deployment: Production-Ready Strategies",
    description:
      "Best practices for deploying ML models in production environments, including monitoring, versioning, and scaling strategies.",
    category: "Machine Learning",
    publishedAt: "2025-01-15",
    featured: false,
    readTime: "11 min read",
  },
  {
    slug: "cybersecurity-automation-2025",
    title: "Cybersecurity Automation: Reducing Response Time by 90%",
    description:
      "How automated security tools and AI-powered threat detection are revolutionizing cybersecurity operations.",
    category: "Cybersecurity",
    publishedAt: "2025-01-14",
    featured: true,
    readTime: "9 min read",
  },
  {
    slug: "generative-ai-transformation-2025",
    title: "The Generative AI Transformation: How Businesses Are Reinventing Themselves",
    description:
      "Discover how leading companies are leveraging generative AI to transform their operations, create new revenue streams, and gain competitive advantages.",
    category: "AI Innovation",
    publishedAt: "2025-01-22",
    featured: true,
    readTime: "12 min read",
  },
  {
    slug: "zero-trust-security-implementation",
    title: "Zero Trust Security: A Practical Implementation Guide for Modern Enterprises",
    description:
      "Learn how to implement zero trust security architecture to protect your organization from evolving cyber threats and ensure comprehensive security coverage.",
    category: "Cybersecurity",
    publishedAt: "2025-01-22",
    featured: true,
    readTime: "10 min read",
  },
  {
    slug: "cloud-native-architecture-patterns",
    title: "Cloud-Native Architecture Patterns: Building for Scale and Resilience",
    description:
      "Explore essential cloud-native patterns and practices that enable organizations to build scalable, resilient, and maintainable applications in the cloud.",
    category: "Cloud Architecture",
    publishedAt: "2025-01-22",
    featured: false,
    readTime: "11 min read",
  },
  {
    slug: "ai-powered-customer-experience",
    title: "AI-Powered Customer Experience: Transforming Engagement in 2025",
    description:
      "Learn how AI is revolutionizing customer experience through personalized interactions, predictive analytics, and automated customer service solutions.",
    category: "Customer Experience",
    publishedAt: "2025-01-22",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "data-driven-decision-making-framework",
    title: "The Data-Driven Decision Making Framework: From Insights to Action",
    description:
      "A comprehensive framework for implementing data-driven decision making across your organization, including tools, processes, and best practices.",
    category: "Data Strategy",
    publishedAt: "2025-01-22",
    featured: false,
    readTime: "9 min read",
  },
  {
    slug: "automation-roadmap-enterprise",
    title: "Building Your Enterprise Automation Roadmap: A Strategic Approach",
    description:
      "Strategic guidance for creating and executing an enterprise automation roadmap that delivers measurable ROI and transforms business operations.",
    category: "Business Automation",
    publishedAt: "2025-01-22",
    featured: true,
    readTime: "13 min read",
  },
  {
    slug: "next-gen-cybersecurity-trends",
    title: "Next-Generation Cybersecurity: Trends and Technologies Shaping 2025",
    description:
      "Explore the latest cybersecurity trends, emerging technologies, and threat landscapes that security professionals need to understand in 2025.",
    category: "Cybersecurity",
    publishedAt: "2025-01-22",
    featured: false,
    readTime: "7 min read",
  },
  // New content items (2025-09-29)
  {
    slug: "genai-telemetry-metrics-that-matter",
    title: "GenAI Telemetry: The Metrics That Predict Drift",
    description:
      "Capture inputs, policy outcomes, and feedback loops to prevent silent regressions before users notice.",
    category: "MLOps",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read",
  },
  {
    slug: "edge-flags-realtime-rollouts",
    title: "Edge Feature Flags: Real‑Time Global Rollouts That Stick",
    description:
      "Patterns for cache‑safe flags, consistency checks, and instant rollbacks across regions.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "6 min read",
  },
  {
    slug: "north-star-metrics-starter-kit",
    title: "North‑Star Metrics Starter Kit",
    description:
      "Practical templates and examples to define leading indicators that align to outcomes.",
    category: "Product Analytics",
    publishedAt: "2025-09-29",
    featured: false,
    readTime: "5 min read",
  },
<<<<<<< HEAD
  {
    slug: "secure-rag-2025",
    title: "Secure RAG 2025: Data Controls That Survive Production",
    description:
      "PII minimization, authorization-aware retrieval, and prompt firewalls for safe enterprise RAG.",
    category: "Security",
    publishedAt: "2025-09-30",
    featured: true,
    readTime: "8 min read",
  },
=======
>>>>>>> origin/main
];

