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
    slug: "edge-inference-blueprints",
    title: "Edge Inference Blueprints: Sub‑100ms UX in Production",
    description:
      "Practical patterns for on‑device models, caching, and streaming that keep latency under 100ms.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "platform-scorecards-that-stick",
    title: "Platform Scorecards That Actually Drive Adoption",
    description:
      "Define capabilities, golden paths, and product metrics that align platform work with outcomes.",
    category: "Platform Engineering",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min read",
  },
  {
    slug: "genai-guardrails-in-the-wild",
    title: "GenAI Guardrails in the Wild: Evals, Policies, and Drift Control",
    description:
      "A field guide to combining offline suites with online policy tests to keep quality high.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: false,
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
    slug: "platform-engineering-golden-paths",
    title: "Golden Paths That Unblock 100+ Teams",
    description:
      "Scorecards, paved roads, and self-serve platforms that cut lead time to value by 60%.",
    category: "Platform Engineering",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min read",
  },
  {
    slug: "genai-guardrails-at-scale",
    title: "GenAI Guardrails at Scale: From Evals to Enforcement",
    description:
      "A practical blueprint for policy tests, classifiers, and kill‑switches that keep your GenAI safe in prod.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "north-star-metrics-that-drive-growth",
    title: "North‑Star Metrics That Actually Drive Growth",
    description:
      "Define actionable metrics, avoid vanity traps, and align teams to measurable outcomes.",
    category: "Product Analytics",
    publishedAt: "2025-09-29",
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
  {
    slug: "platform-engineering-blueprint-2025",
    title: "A Practical Blueprint for Platform Engineering in 2025",
    description:
      "Capabilities, golden paths, and scorecards to accelerate delivery without sacrificing autonomy.",
    category: "Platform Engineering",
    publishedAt: "2025-09-29",
  },
  {
    slug: "genai-evals-realworld",
    title: "Real‑World GenAI Evals: From Offline Suites to Online Guardrails",
    description:
      "Patterns for evaluation harnesses, drift detection, and policy testing that scale with usage.",
    category: "GenAI",
    publishedAt: "2025-09-29",
  },
  {
    slug: "ai-roadmaps",
    title: "Designing High-Impact AI Roadmaps",
    description:
      "A practical framework to align AI investments with measurable business outcomes and reduce time-to-value.",
    category: "AI Strategy",
    publishedAt: "2025-09-15",
  },
  {
    slug: "cloud-finops-tactics",
    title: "Cutting Cloud Spend Without Slowing Teams",
    description:
      "Proven tactics for right-sizing, demand shaping, and engineering-friendly guardrails that keep velocity high.",
    category: "Cloud FinOps",
    publishedAt: "2025-09-22",
  },
  {
    slug: "zero-trust-for-saas",
    title: "Zero-Trust in Practice for SaaS",
    description:
      "A pragmatic guide to rolling out least-privilege, continuous verification, and blast radius controls.",
    category: "Security",
    publishedAt: "2025-09-25",
  },
  {
    slug: "generative-ai-enterprise",
    title: "Generative AI in Enterprise: Real-World Success Stories",
    description:
      "Case studies from Fortune 500 companies showing how GenAI is transforming customer service, content creation, and business operations.",
    category: "AI Innovation",
    publishedAt: "2025-01-20",
  },
  {
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration Best Practices: Lessons from 100+ Projects",
    description:
      "Essential strategies for successful cloud migration, including risk mitigation, cost optimization, and timeline management.",
    category: "Cloud Strategy",
    publishedAt: "2025-01-18",
  },
  {
    slug: "cybersecurity-2025-trends",
    title: "Cybersecurity Trends 2025: What Every CISO Needs to Know",
    description:
      "Emerging threats, new defense strategies, and the latest security technologies shaping the cybersecurity landscape.",
    category: "Cybersecurity",
    publishedAt: "2025-01-15",
  },
  {
    slug: "data-analytics-automation",
    title: "Automating Data Analytics: From Insight to Action",
    description:
      "How AI-powered analytics platforms are revolutionizing business intelligence and enabling real-time decision making.",
    category: "Data Science",
    publishedAt: "2025-01-12",
  },
  {
    slug: "devops-automation-guide",
    title: "The Complete Guide to DevOps Automation",
    description:
      "Comprehensive strategies for automating CI/CD pipelines, infrastructure management, and deployment processes.",
    category: "DevOps",
    publishedAt: "2025-01-10",
  },
  {
    slug: "microservices-architecture",
    title: "Microservices Architecture: Design Patterns and Best Practices",
    description:
      "Essential patterns for building scalable, maintainable microservices architectures in modern applications.",
    category: "Software Architecture",
    publishedAt: "2025-01-08",
  },
  {
    slug: "ai-ethics-compliance",
    title: "AI Ethics and Compliance: Building Responsible AI Systems",
    description:
      "Framework for developing AI systems that are fair, transparent, and compliant with emerging regulations.",
    category: "AI Governance",
    publishedAt: "2025-01-05",
  },
  {
    slug: "real-time-data-pipelines-2025",
    title: "Real-Time Data Pipelines: Building Reliable Streaming at Scale",
    description:
      "Architecting bulletproof real-time data pipelines with Apache Kafka, Apache Flink, and modern streaming patterns.",
    category: "Data Engineering",
    publishedAt: "2025-01-21",
    featured: true,
    readTime: "12 min read",
  },
  {
    slug: "platform-engineering-scorecards",
    title: "Platform Engineering Scorecards: Metrics That Drive Adoption",
    description:
      "Designing platform scorecards that align engineering teams with business outcomes and accelerate delivery.",
    category: "Platform Engineering",
    publishedAt: "2025-01-21",
    featured: true,
    readTime: "10 min read",
  },
  {
    slug: "genai-operationalization-guide",
    title: "Operationalizing GenAI: From Prototype to Production",
    description:
      "Complete guide to deploying, monitoring, and scaling generative AI applications in enterprise environments.",
    category: "GenAI",
    publishedAt: "2025-01-21",
    featured: true,
    readTime: "14 min read",
  },
  {
    slug: "microservices-observability-patterns",
    title: "Microservices Observability: Patterns for Complex Systems",
    description:
      "Implementing distributed tracing, metrics, and logging in microservices architectures for better system visibility.",
    category: "Observability",
    publishedAt: "2025-01-20",
    featured: false,
    readTime: "9 min read",
  },
  {
    slug: "cloud-native-security-2025",
    title: "Cloud-Native Security: Protecting Modern Applications",
    description:
      "Security strategies for containerized applications, serverless functions, and cloud-native infrastructure.",
    category: "Security",
    publishedAt: "2025-01-20",
    featured: true,
    readTime: "11 min read",
  },
  {
    slug: "ai-workflow-automation-case-studies",
    title: "AI Workflow Automation: Real-World Success Stories",
    description:
      "Case studies from Fortune 500 companies showing how AI workflow automation transformed their operations.",
    category: "AI & Automation",
    publishedAt: "2025-01-19",
    featured: true,
    readTime: "8 min read",
  },
  {
    slug: "edge-computing-business-value",
    title: "Edge Computing: Unlocking Business Value at the Edge",
    description:
      "How edge computing is enabling new business models and improving customer experiences across industries.",
    category: "Edge Computing",
    publishedAt: "2025-01-19",
    featured: false,
    readTime: "7 min read",
  },
  {
    slug: "data-governance-framework-2025",
    title: "Data Governance Framework 2025: A Practical Approach",
    description:
      "Building effective data governance programs that balance compliance, security, and business agility.",
    category: "Data Governance",
    publishedAt: "2025-01-18",
    featured: true,
    readTime: "13 min read",
  },
  {
    slug: "fintech-ai-transformation",
    title: "FinTech AI Transformation: From Risk Assessment to Customer Experience",
    description:
      "How AI is revolutionizing financial services through intelligent automation, fraud detection, and personalized banking.",
    category: "FinTech",
    publishedAt: "2025-01-18",
    featured: false,
    readTime: "10 min read",
  },
  {
    slug: "sustainable-tech-practices",
    title: "Sustainable Technology Practices: Green IT for the Future",
    description:
      "Implementing environmentally conscious technology practices that reduce carbon footprint while maintaining performance.",
    category: "Sustainability",
    publishedAt: "2025-01-17",
    featured: false,
    readTime: "6 min read",
  },
  {
    slug: "ai-chatbot-implementation-guide",
    title: "AI Chatbot Implementation: From Design to Deployment",
    description:
      "Complete guide to building, training, and deploying AI chatbots that deliver exceptional customer experiences.",
    category: "AI & Automation",
    publishedAt: "2025-01-17",
    featured: true,
    readTime: "9 min read",
  },
];

