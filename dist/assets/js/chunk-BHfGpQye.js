import { r as reactExports, j as jsxRuntimeExports, L as Link, S as Sparkles, T as TrendingUp, a as Star, C as Clock, A as ArrowRight, Z as Zap, b as Award, R as React, c as CircleCheckBig, X, d as Calendar, e as Shield, f as Cloud, B as Brain, g as BookOpen, U as Users, h as Target, E as Eye } from './chunk-BQ1mJZAX.js';

const variantStyles = {
  info: "from-indigo-500/15 to-blue-500/15 border-indigo-400/30 text-indigo-100",
  success: "from-emerald-500/15 to-teal-500/15 border-emerald-400/30 text-emerald-100",
  warning: "from-amber-500/15 to-orange-500/15 border-amber-400/30 text-amber-100",
  danger: "from-rose-500/15 to-red-500/15 border-rose-400/30 text-rose-100"
};
function ContentPromotionBanner(props) {
  const {
    variant = "info",
    title = "New content just landed",
    description = "Explore our latest articles, guides, and success stories.",
    ctaText = "Read now",
    ctaLink = "/blog",
    dismissible = false,
    className = ""
  } = props;
  const [visible, setVisible] = reactExports.useState(true);
  if (!visible) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `mx-auto px-6 py-4 bg-gradient-to-r ${variantStyles[variant]} border rounded-none ${className}`,
      role: "region",
      "aria-label": "Content Promotion Banner",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex flex-col md:flex-row md:items-center gap-3 justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm uppercase tracking-wide opacity-80", children: "Latest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white font-semibold text-lg", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-sm", children: description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: ctaLink,
              className: "bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold text-sm",
              children: ctaText
            }
          ),
          dismissible && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Dismiss promotion",
              className: "text-white/70 hover:text-white text-sm",
              onClick: () => setVisible(false),
              children: "Dismiss"
            }
          )
        ] })
      ] })
    }
  ) });
}

const newArticles2025 = [
  {
    id: "ai-autonomous-infrastructure-2025",
    slug: "ai-autonomous-infrastructure-2025",
    title: "AI Autonomous Infrastructure: The Future of Self-Managing Systems",
    description: "Discover how AI-powered autonomous infrastructure is revolutionizing enterprise operations with self-healing, self-optimizing, and self-scaling capabilities.",
    excerpt: "Transform your infrastructure management with AI that never sleeps, never makes mistakes, and continuously optimizes performance.",
    author: "Zion Tech Group Team",
    date: "2025-01-30",
    category: "AI Operations",
    tags: ["Autonomous Infrastructure", "AI", "Self-Healing", "Automation"],
    featured: true,
    readTime: "12 min read",
    image: "/images/ai-autonomous-infrastructure.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "quantum-ai-hybrid-computing-2025",
    slug: "quantum-ai-hybrid-computing-2025",
    title: "Quantum-AI Hybrid Computing: Breaking Computational Barriers",
    description: "Explore the revolutionary combination of quantum computing and artificial intelligence, delivering unprecedented processing power for complex business problems.",
    excerpt: "Unlock exponential computational power with quantum-AI hybrid systems that solve problems impossible for traditional computers.",
    author: "Zion Tech Group Team",
    date: "2025-01-29",
    category: "Quantum Computing",
    tags: ["Quantum Computing", "AI", "Hybrid Systems", "Computational Power"],
    featured: true,
    readTime: "15 min read",
    image: "/images/quantum-ai-hybrid.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "ai-cybersecurity-next-generation-2025",
    slug: "ai-cybersecurity-next-generation-2025",
    title: "Next-Generation AI Cybersecurity: Zero-Trust with Intelligence",
    description: "Learn how advanced AI cybersecurity systems are creating impenetrable digital fortresses with zero-trust architecture and behavioral analytics.",
    excerpt: "Build an unbreachable security perimeter with AI that learns, adapts, and evolves to counter emerging threats in real-time.",
    author: "Zion Tech Group Team",
    date: "2025-01-28",
    category: "Cybersecurity",
    tags: ["AI Security", "Zero Trust", "Behavioral Analytics", "Threat Detection"],
    featured: true,
    readTime: "10 min read",
    image: "/images/ai-cybersecurity-next-gen.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "edge-ai-real-time-intelligence-2025",
    slug: "edge-ai-real-time-intelligence-2025",
    title: "Edge AI: Real-Time Intelligence at the Network Edge",
    description: "Discover how Edge AI is bringing real-time intelligence to IoT devices, autonomous vehicles, and smart cities with sub-millisecond response times.",
    excerpt: "Experience the power of AI processing at the edge, delivering instant decisions without cloud dependency.",
    author: "Zion Tech Group Team",
    date: "2025-01-27",
    category: "Edge Computing",
    tags: ["Edge AI", "Real-time Processing", "IoT", "Autonomous Systems"],
    featured: true,
    readTime: "11 min read",
    image: "/images/edge-ai-real-time.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "ai-content-generation-enterprise-2025",
    slug: "ai-content-generation-enterprise-2025",
    title: "Enterprise AI Content Generation: Scale Your Content Strategy",
    description: "Master enterprise-grade AI content generation that maintains brand voice, ensures quality, and scales content production by 1000%.",
    excerpt: "Transform your content strategy with AI that understands your brand, maintains consistency, and delivers quality at scale.",
    author: "Zion Tech Group Team",
    date: "2025-01-26",
    category: "Content AI",
    tags: ["Content Generation", "AI Writing", "Brand Voice", "Content Strategy"],
    featured: true,
    readTime: "9 min read",
    image: "/images/ai-content-enterprise.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "ai-customer-insights-advanced-2025",
    slug: "ai-customer-insights-advanced-2025",
    title: "Advanced AI Customer Insights: Predicting Behavior Before It Happens",
    description: "Unlock the power of predictive customer analytics with AI that anticipates needs, predicts churn, and personalizes experiences at scale.",
    excerpt: "Stay ahead of customer needs with AI that predicts behavior patterns and delivers personalized experiences before customers even ask.",
    author: "Zion Tech Group Team",
    date: "2025-01-25",
    category: "Customer Analytics",
    tags: ["Customer Insights", "Predictive Analytics", "Personalization", "Churn Prediction"],
    featured: false,
    readTime: "8 min read",
    image: "/images/ai-customer-insights-advanced.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "genai-evals-production-2025",
    slug: "genai-evals-production-2025",
    title: "GenAI Evals in Production: Quality Gates That Actually Work",
    description: "Implement production-ready GenAI evaluation systems with automated quality gates, performance monitoring, and continuous improvement loops.",
    excerpt: "Ensure your GenAI systems deliver consistent quality with automated evaluation pipelines that catch issues before users do.",
    author: "Zion Tech Group Team",
    date: "2025-01-24",
    category: "GenAI Quality",
    tags: ["GenAI", "Quality Gates", "Evaluation", "Production Monitoring"],
    featured: true,
    readTime: "7 min read",
    image: "/images/genai-evals-production.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "ai-platform-roi-measurement-2025",
    slug: "ai-platform-roi-measurement-2025",
    title: "AI Platform ROI Measurement: Quantifying Business Impact",
    description: "Learn how to measure and maximize ROI from AI platform investments with proven frameworks and success metrics.",
    excerpt: "Turn AI investments into measurable business outcomes with comprehensive ROI frameworks and success tracking.",
    author: "Zion Tech Group Team",
    date: "2025-01-23",
    category: "AI Strategy",
    tags: ["AI ROI", "Business Metrics", "Platform Investment", "Success Measurement"],
    featured: true,
    readTime: "6 min read",
    image: "/images/ai-platform-roi.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "zero-trust-for-genai-2026",
    slug: "zero-trust-for-genai-2026",
    title: "Zero‑Trust for GenAI 2026: Prompt Firewalls and Signed Outputs",
    description: "Production patterns: egress control, prompt firewalls, and signed outputs at scale.",
    excerpt: "Ship GenAI safely with layered controls: prompt firewalls, egress policies, signing.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Security",
    tags: ["GenAI", "Security", "Zero‑Trust"],
    featured: true,
    readTime: "8 min read",
    image: "/images/zero-trust-for-genai-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "quantum-ai-hybrid-blueprint-2026",
    slug: "quantum-ai-hybrid-blueprint-2026",
    title: "Quantum‑AI Hybrid Blueprint 2026: Practical Near‑Term Wins",
    description: "Blend quantum libraries with AI orchestration to unlock optimization wins today.",
    excerpt: "Near‑term value from QC + AI: routing patterns and orchestration tips.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Quantum",
    tags: ["Quantum", "AI", "Optimization"],
    featured: false,
    readTime: "9 min read",
    image: "/images/quantum-ai-hybrid-blueprint-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "secure-ml-supply-chain-2026",
    slug: "secure-ml-supply-chain-2026",
    title: "Secure ML Supply Chain 2026: SBOMs, Attestations, and Drift Guards",
    description: "Continuously track models, datasets, and prompts with signed SBOMs and policy checks.",
    excerpt: "Stop ML supply‑chain drift with automated SBOMs, attestations, and CI policy gates.",
    author: "Zion Tech Group Team",
    date: "2025-10-13",
    category: "Security",
    tags: ["ML", "Supply Chain", "SBOM", "Security"],
    featured: true,
    readTime: "7 min read",
    image: "/images/secure-ml-supply-chain-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "edge-llm-caching-blueprint-2026",
    slug: "edge-llm-caching-blueprint-2026",
    title: "Edge LLM Caching Blueprint 2026: Sub‑100ms Prompts at Scale",
    description: "Architect edge‑accelerated LLM inference using regional caches, warm pools, and cost‑aware routing for lightning‑fast responses.",
    excerpt: "Deliver sub‑100ms prompts with regional caches, warm pools, and adaptive routing.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Architecture",
    tags: ["Edge AI", "LLM Inference", "Caching", "Performance"],
    featured: true,
    readTime: "13 min read",
    image: "/images/edge-llm-caching-blueprint-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "ai-governance-scorecards-quickstart-2025",
    slug: "ai-governance-scorecards-quickstart-2025",
    title: "AI Governance Scorecards: A Practical Quickstart",
    description: "Stand up pragmatic governance scorecards tied to KPIs, risks, and evaluation policies that teams actually use.",
    excerpt: "Ship governance that sticks: KPI‑linked scorecards, policy tests, and clear owners.",
    author: "Zion Tech Group Team",
    date: "2025-09-28",
    category: "AI Strategy",
    tags: ["Governance", "Evals", "Policy", "Risk"],
    featured: true,
    readTime: "9 min read",
    image: "/images/ai-governance-scorecards-quickstart-2025.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "serverless-ai-inference-cost-playbook-2025",
    slug: "serverless-ai-inference-cost-playbook-2025",
    title: "Serverless AI Inference Cost Playbook (2025)",
    description: "Cut inference costs 40–70% with adaptive batching, warm pools, and demand shaping without degrading SLOs.",
    excerpt: "A tactical guide to reduce AI inference spend while maintaining performance.",
    author: "Zion Tech Group Team",
    date: "2025-09-26",
    category: "Cost Optimization",
    tags: ["Serverless", "Cost", "Inference", "Optimization"],
    featured: true,
    readTime: "11 min read",
    image: "/images/serverless-ai-inference-cost-playbook-2025.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "ai-platform-architecture-2026",
    slug: "ai-platform-architecture-2026",
    title: "AI Platform Architecture 2026: Building Scalable, Cost-Effective AI Systems",
    description: "Comprehensive guide to designing AI platforms that scale efficiently, reduce costs by 70%, and deliver consistent performance across all workloads.",
    excerpt: "Master the architecture patterns that power next-generation AI platforms with proven scalability and cost optimization strategies.",
    author: "Zion Tech Group Team",
    date: "2025-01-31",
    category: "AI Architecture",
    tags: ["AI Platform", "Architecture", "Scalability", "Cost Optimization"],
    featured: true,
    readTime: "14 min read",
    image: "/images/ai-platform-architecture-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "ai-incident-response-playbooks-2025",
    slug: "ai-incident-response-playbooks-2025",
    title: "AI Incident Response Playbooks: Automated Recovery in Under 60 Seconds",
    description: "Design AI incident response systems that detect, analyze, and resolve issues automatically with comprehensive playbooks and intelligent automation.",
    excerpt: "Build bulletproof AI systems with automated incident response that recovers from failures faster than human teams ever could.",
    author: "Zion Tech Group Team",
    date: "2025-01-30",
    category: "AI Operations",
    tags: ["Incident Response", "Automation", "Recovery", "Playbooks"],
    featured: true,
    readTime: "11 min read",
    image: "/images/ai-incident-response-playbooks-2025.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "multi-modal-ai-applications-2026",
    slug: "multi-modal-ai-applications-2026",
    title: "Multi-Modal AI Applications 2026: Vision, Language, and Audio Integration",
    description: "Explore cutting-edge multi-modal AI applications that combine computer vision, natural language processing, and audio processing for revolutionary user experiences.",
    excerpt: "Unlock the power of multi-modal AI with applications that see, hear, and understand like humans, delivering unprecedented user experiences.",
    author: "Zion Tech Group Team",
    date: "2025-01-29",
    category: "AI Innovation",
    tags: ["Multi-Modal AI", "Computer Vision", "NLP", "Audio Processing"],
    featured: true,
    readTime: "13 min read",
    image: "/images/multi-modal-ai-applications-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "ai-ethics-framework-2026",
    slug: "ai-ethics-framework-2026",
    title: "AI Ethics Framework 2026: Building Responsible AI Systems",
    description: "Comprehensive framework for developing ethical AI systems that are fair, transparent, accountable, and aligned with human values.",
    excerpt: "Create AI systems that are not just powerful, but also ethical, fair, and aligned with human values and societal good.",
    author: "Zion Tech Group Team",
    date: "2025-01-28",
    category: "AI Ethics",
    tags: ["AI Ethics", "Responsible AI", "Fairness", "Transparency"],
    featured: true,
    readTime: "10 min read",
    image: "/images/ai-ethics-framework-2026.jpg",
    newBadge: true,
    trending: false,
    featuredInHomepage: false
  },
  {
    id: "ai-performance-monitoring-2025",
    slug: "ai-performance-monitoring-2025",
    title: "AI Performance Monitoring: Real-Time Quality Assurance",
    description: "Implement comprehensive AI performance monitoring systems that track model performance, detect drift, and ensure consistent quality in production.",
    excerpt: "Monitor AI systems in real-time with comprehensive performance tracking, drift detection, and automated quality assurance.",
    author: "Zion Tech Group Team",
    date: "2025-01-27",
    category: "AI Monitoring",
    tags: ["Performance Monitoring", "Model Drift", "Quality Assurance", "Real-Time"],
    featured: false,
    readTime: "9 min read",
    image: "/images/ai-performance-monitoring-2025.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: false
  },
  {
    id: "production-agent-actions-2026",
    slug: "production-agent-actions-2026",
    title: "Production Agent Actions 2026: Deterministic Tools with Live Traces",
    description: "Design agents with deterministic tools, budgets, and traces so actions are reliable and auditable.",
    excerpt: "Make agent actions trustworthy with typed tools, timeouts, retries, and live traces.",
    author: "Zion Tech Group Team",
    date: "2025-10-14",
    category: "GenAI",
    tags: ["Agents", "Tracing", "Reliability"],
    featured: true,
    readTime: "8 min read",
    image: "/images/production-agent-actions-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "privacy-first-observability-2026-updated",
    slug: "privacy-first-observability-2026-updated",
    title: "Privacy‑First Observability 2026: Scoped IDs and Redaction That Teams Use",
    description: "Ship user‑centric traces without PII leaks using scoped identifiers, field‑level redaction, and retention policies.",
    excerpt: "Keep signals rich and safe with scoped IDs, redaction, and TTL policies.",
    author: "Zion Tech Group Team",
    date: "2025-10-14",
    category: "Observability",
    tags: ["Privacy", "Telemetry", "Compliance"],
    featured: true,
    readTime: "7 min read",
    image: "/images/privacy-first-observability-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "platform-golden-paths-kpis-2026",
    slug: "platform-golden-paths-kpis-2026",
    title: "Platform Golden Paths 2026: KPIs that Prove Value",
    description: "Build golden paths that reduce time‑to‑first‑success and link directly to product KPIs and ROI.",
    excerpt: "From paved roads to outcomes: golden paths that measurably move KPIs.",
    author: "Zion Tech Group Team",
    date: "2025-10-14",
    category: "Platform Engineering",
    tags: ["Golden Paths", "KPIs", "ROI"],
    featured: true,
    readTime: "8 min read",
    image: "/images/platform-golden-paths-kpis-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "genai-routing-blueprint-2026",
    slug: "genai-routing-blueprint-2026",
    title: "GenAI Routing Blueprint 2026: Fast, Cheap, and Grounded",
    description: "Design intent-aware routers, fallback tiers, and caches to hit quality SLOs at a fraction of the cost.",
    excerpt: "Route by intent, cache by value, and tier by SLO to cut spend 40–70% without hurting UX.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "GenAI",
    tags: ["Routing", "Caching", "SLOs", "Cost"],
    featured: true,
    readTime: "10 min read",
    image: "/images/genai-routing-blueprint-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "secure-ml-supply-chain-2026",
    slug: "secure-ml-supply-chain-2026",
    title: "Secure ML Supply Chain 2026: Attestations, Policy Tests, SBOMs",
    description: "Ship verifiably secure models and tools with signed artifacts, provenance, and CI policy tests.",
    excerpt: "From data to deployment: secure each link with attestations, SBOMs, and automated policy checks.",
    author: "Zion Tech Group Team",
    date: "2025-09-28",
    category: "Security",
    tags: ["Supply Chain", "Attestation", "SBOM", "Policy"],
    featured: true,
    readTime: "11 min read",
    image: "/images/secure-ml-supply-chain-2026.jpg",
    newBadge: true,
    trending: true,
    featuredInHomepage: true
  },
  {
    id: "golden-paths-roi-2026",
    slug: "golden-paths-roi-2026",
    title: "Golden Paths ROI 2026: Proving Platform Value Quarterly",
    description: "Build developer golden paths with scorecards that tie adoption to shipped business outcomes.",
    excerpt: "Instrument your platform with KPIs that teams adopt—show ROI without vanity metrics.",
    author: "Zion Tech Group Team",
    date: "2025-09-27",
    category: "Platform Engineering",
    tags: ["Golden Paths", "ROI", "KPIs", "Platform"],
    featured: true,
    readTime: "9 min read",
    image: "/images/golden-paths-roi-2026.jpg",
    newBadge: true,
    trending: false,
    featuredInHomepage: true
  }
];
const homepageFeaturedArticles = newArticles2025.filter((article) => article.featuredInHomepage);

const newServices = [
  {
    id: "ai-runbooks-risk-budgets",
    slug: "ai-runbooks-risk-budgets",
    title: "AI Runbooks with Risk Budgets",
    description: "Budgeted actions, approvals, and rollback gates so teams ship automation with confidence.",
    category: "AI Operations",
    pricing: {
      starting: "$1,499/month",
      popular: false,
      features: ["Risk budgets", "Approval workflows", "Rollback gates", "Incident SLAs"]
    },
    features: [
      "Budgeted Actions & Guardrails",
      "Approval & Change Controls",
      "Rollback Triggers & Gates",
      "Policy Tests in CI",
      "KPI‑Linked Canaries",
      "Incident SLOs & Scorecards",
      "Observability & Traces",
      "Templates & Playbooks"
    ],
    metrics: [
      { value: "<60s", label: "Containment Time" },
      { value: "40%", label: "Incident Reduction" },
      { value: "3x", label: "Faster Releases" }
    ],
    testimonial: {
      quote: "We shipped safe automation in weeks and cut incidents by 40%.",
      author: "Nina Patel",
      company: "RetailMax"
    },
    cta: {
      primary: "Get Playbooks",
      secondary: "See Templates"
    },
    icon: "📘",
    featured: true,
    tags: ["Runbooks", "Risk Budgets", "Automation"],
    newBadge: true,
    trending: true
  },
  {
    id: "privacy-preserving-feature-flags",
    slug: "privacy-preserving-feature-flags",
    title: "Privacy‑Preserving Feature Flags",
    description: "Edge flags with scoped IDs, on‑device filters, and budgets for zero‑regret rollouts.",
    category: "Architecture",
    pricing: {
      starting: "$999/month",
      popular: true,
      features: ["Edge KV", "Scoped IDs", "Geo/account targeting", "Instant rollback"]
    },
    features: [
      "<100ms Edge Delivery",
      "Scoped IDs & On‑Device Filters",
      "Risk Budgets & Instant Rollback",
      "Geo & Account Targeting",
      "Signed Configs & Audit Trails",
      "Progressive Delivery Controls",
      "Privacy‑Safe Telemetry",
      "Policy Gates in CI"
    ],
    metrics: [
      { value: "<100ms", label: "Global Rollouts" },
      { value: "25%", label: "Waste Reduction" },
      { value: "0", label: "PII in Telemetry" }
    ],
    testimonial: {
      quote: "We ship globally under 100ms with built‑in budgets and private telemetry.",
      author: "Omar Haddad",
      company: "Streamly"
    },
    cta: {
      primary: "Enable Edge Flags",
      secondary: "View Blueprint"
    },
    icon: "🏁",
    featured: true,
    tags: ["Edge", "Flags", "Privacy", "Budgets"],
    newBadge: true,
    trending: true
  },
  {
    id: "edge-llm-caching",
    slug: "edge-llm-caching",
    title: "Edge LLM Caching & On‑Device Inference",
    description: "Sub‑100ms prompts with privacy by default. Ship on‑device agents, encrypted caches, and edge toolchains.",
    category: "AI Engineering",
    pricing: {
      starting: "$1,999/month",
      popular: true,
      features: ["On‑device inference", "Encrypted caches", "Edge tool routing", "Fallback orchestration"]
    },
    features: [
      "On‑device Model Execution",
      "Encrypted Semantic Caches",
      "Intent‑Aware Tool Routing",
      "Offline‑First Orchestration",
      "Latency Budgets & SLOs",
      "Privacy‑Preserving Telemetry",
      "Edge Rollouts & Canarying",
      "Cross‑Vendor Model Fallbacks"
    ],
    metrics: [
      { value: "<100ms", label: "Median Prompt" },
      { value: "35%", label: "Cost Reduction" },
      { value: "99.99%", label: "Offline Reliability" }
    ],
    testimonial: {
      quote: "We hit 90ms median prompts and improved trust with on‑device execution.",
      author: "Priya Desai",
      company: "FinEdge"
    },
    cta: {
      primary: "Enable Edge",
      secondary: "See Architecture"
    },
    icon: "🚀",
    featured: true,
    tags: ["Edge", "LLM", "Caching", "Privacy", "Latency"],
    newBadge: true,
    trending: true
  },
  {
    id: "ml-sbom-security",
    slug: "ml-sbom-security",
    title: "ML SBOMs & Secure Model Supply Chain",
    description: "Prove and protect your AI supply chain with SBOMs, signed models, and policy‑as‑code.",
    category: "Security",
    pricing: {
      starting: "$2,499/month",
      popular: false,
      features: ["Model SBOMs", "Signature verification", "Policy‑as‑code", "Vuln scanning"]
    },
    features: [
      "Model & Dataset SBOMs",
      "Signed Artifacts & Attestations",
      "Policy‑as‑Code Enforcement",
      "Dependency & Prompt Supply Scanning",
      "Runtime Guardrails",
      "Compliance Reporting",
      "Key Management Integrations",
      "CICD Gates & Release Controls"
    ],
    metrics: [
      { value: "85%", label: "Risk Reduction" },
      { value: "<1d", label: "Audit Prep" },
      { value: "99.9%", label: "Signature Coverage" }
    ],
    testimonial: {
      quote: "Security and compliance reviews now take hours instead of weeks.",
      author: "Jon Ruiz",
      company: "RegSecure"
    },
    cta: {
      primary: "Secure Models",
      secondary: "View Controls"
    },
    icon: "🔐",
    featured: true,
    tags: ["Security", "SBOM", "Compliance", "Policy", "Supply Chain"],
    newBadge: true,
    trending: true
  },
  {
    id: "ai-autonomous-infrastructure-platform",
    slug: "ai-autonomous-infrastructure-platform",
    title: "AI Autonomous Infrastructure Platform",
    description: "Revolutionary AI-powered infrastructure that automatically heals, optimizes, and scales without human intervention. Achieve 99.9% uptime with self-managing systems.",
    category: "AI Infrastructure",
    pricing: {
      starting: "$2,999/month",
      popular: true,
      features: ["Self-healing systems", "Auto-scaling", "Predictive maintenance", "Real-time optimization"]
    },
    features: [
      "Autonomous System Healing",
      "Intelligent Auto-Scaling",
      "Predictive Maintenance",
      "Real-time Performance Optimization",
      "Anomaly Detection & Response",
      "Zero-downtime Updates",
      "Multi-cloud Orchestration",
      "Advanced Monitoring & Analytics"
    ],
    metrics: [
      { value: "99.9%", label: "System Uptime" },
      { value: "75%", label: "Cost Reduction" },
      { value: "90%", label: "Faster Recovery" }
    ],
    testimonial: {
      quote: "The AI Autonomous Infrastructure Platform has revolutionized our operations. We've achieved 99.9% uptime with minimal human intervention.",
      author: "Dr. Jennifer Chen",
      company: "TechFlow Systems"
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "View Demo"
    },
    icon: "🤖",
    featured: true,
    tags: ["Autonomous Systems", "Infrastructure", "AI", "Self-Healing", "Automation"],
    newBadge: true,
    trending: true,
    specialOffer: {
      title: "Launch Special",
      description: "50% OFF First 3 Months",
      discount: "50%",
      validUntil: "March 31, 2025"
    }
  },
  {
    id: "quantum-ai-hybrid-computing",
    slug: "quantum-ai-hybrid-computing",
    title: "Quantum-AI Hybrid Computing Solutions",
    description: "Breakthrough quantum-AI hybrid computing platform that delivers unprecedented computational power for complex business optimization and machine learning.",
    category: "Quantum Computing",
    pricing: {
      starting: "$4,999/month",
      popular: false,
      features: ["Quantum algorithms", "AI optimization", "Complex problem solving", "Real-time processing"]
    },
    features: [
      "Quantum Algorithm Integration",
      "AI-Quantum Hybrid Processing",
      "Complex Optimization Solutions",
      "Real-time Quantum Computing",
      "Machine Learning Acceleration",
      "Business Intelligence Enhancement",
      "Risk Analysis & Modeling",
      "Custom Quantum Applications"
    ],
    metrics: [
      { value: "1000x", label: "Faster Processing" },
      { value: "95%", label: "Accuracy Improvement" },
      { value: "300%", label: "ROI Increase" }
    ],
    testimonial: {
      quote: "Quantum-AI hybrid computing has given us a massive competitive advantage. The processing power is incredible.",
      author: "Michael Rodriguez",
      company: "Quantum Capital"
    },
    cta: {
      primary: "Schedule Demo",
      secondary: "Learn More"
    },
    icon: "⚛️",
    featured: true,
    tags: ["Quantum Computing", "AI", "Optimization", "Machine Learning", "Business Intelligence"],
    newBadge: true,
    trending: true
  },
  {
    id: "ai-cybersecurity-zero-trust",
    slug: "ai-cybersecurity-zero-trust",
    title: "AI-Powered Zero Trust Cybersecurity",
    description: "Next-generation AI-driven zero trust security architecture that provides comprehensive protection against evolving cyber threats with real-time adaptation.",
    category: "Cybersecurity",
    pricing: {
      starting: "$1,999/month",
      popular: true,
      features: ["AI threat detection", "Zero trust architecture", "Real-time protection", "Compliance automation"]
    },
    features: [
      "AI-Powered Threat Detection",
      "Dynamic Zero Trust Architecture",
      "Real-time Threat Response",
      "Behavioral Analytics",
      "Automated Compliance",
      "Multi-layered Security",
      "Incident Response Automation",
      "Security Intelligence Platform"
    ],
    metrics: [
      { value: "99.9%", label: "Threat Detection" },
      { value: "60%", label: "Faster Response" },
      { value: "85%", label: "False Positive Reduction" }
    ],
    testimonial: {
      quote: "The AI cybersecurity system provides unmatched protection. We've eliminated 99.9% of threats before they become incidents.",
      author: "Sarah Thompson",
      company: "SecureTech Corp"
    },
    cta: {
      primary: "Security Audit",
      secondary: "View Platform"
    },
    icon: "🛡️",
    featured: true,
    tags: ["Cybersecurity", "Zero Trust", "AI Security", "Threat Detection", "Compliance"],
    newBadge: true,
    trending: true
  },
  {
    id: "ai-content-generation-automation",
    slug: "ai-content-generation-automation",
    title: "AI Content Generation Automation Platform",
    description: "Revolutionary AI platform that generates high-quality, brand-consistent content at scale while maintaining SEO optimization and brand voice.",
    category: "Content AI",
    pricing: {
      starting: "$799/month",
      popular: false,
      features: ["Content generation", "Brand consistency", "SEO optimization", "Multi-format support"]
    },
    features: [
      "Intelligent Content Generation",
      "Brand Voice Consistency",
      "SEO Optimization",
      "Multi-format Content Creation",
      "Quality Assurance Automation",
      "Content Strategy Planning",
      "Performance Analytics",
      "Collaborative Workflows"
    ],
    metrics: [
      { value: "10x", label: "Content Production" },
      { value: "95%", label: "Brand Consistency" },
      { value: "80%", label: "Time Savings" }
    ],
    testimonial: {
      quote: "AI content generation has transformed our marketing. We produce 10x more content while maintaining perfect brand consistency.",
      author: "Emily Johnson",
      company: "MarketingPro Solutions"
    },
    cta: {
      primary: "Start Trial",
      secondary: "See Examples"
    },
    icon: "📝",
    featured: false,
    tags: ["Content Generation", "AI", "Marketing", "SEO", "Brand Consistency"],
    newBadge: true,
    trending: false
  },
  {
    id: "ai-customer-experience-platform",
    slug: "ai-customer-experience-platform",
    title: "AI Customer Experience Transformation Platform",
    description: "Comprehensive AI platform that transforms customer experiences through intelligent personalization, predictive analytics, and seamless automation.",
    category: "Customer Experience",
    pricing: {
      starting: "$1,499/month",
      popular: false,
      features: ["Personalization", "Predictive analytics", "Customer journey mapping", "Real-time insights"]
    },
    features: [
      "Intelligent Personalization",
      "Predictive Customer Analytics",
      "Journey Mapping & Optimization",
      "Real-time Customer Insights",
      "Multi-channel Engagement",
      "Sentiment Analysis",
      "Automated Customer Service",
      "Performance Optimization"
    ],
    metrics: [
      { value: "45%", label: "Revenue Increase" },
      { value: "90%", label: "Customer Satisfaction" },
      { value: "70%", label: "Engagement Boost" }
    ],
    testimonial: {
      quote: "The AI customer experience platform has revolutionized our customer relationships. Revenue increased 45% in just 6 months.",
      author: "David Kim",
      company: "CustomerFirst Inc"
    },
    cta: {
      primary: "Transform CX",
      secondary: "View Results"
    },
    icon: "💬",
    featured: false,
    tags: ["Customer Experience", "Personalization", "Predictive Analytics", "Customer Journey", "Engagement"],
    newBadge: true,
    trending: true
  },
  {
    id: "ai-supply-chain-optimization",
    slug: "ai-supply-chain-optimization",
    title: "AI Supply Chain Optimization Platform",
    description: "Advanced AI platform for supply chain optimization featuring predictive analytics, intelligent routing, and automated inventory management.",
    category: "Supply Chain",
    pricing: {
      starting: "$2,499/month",
      popular: false,
      features: ["Predictive analytics", "Route optimization", "Inventory management", "Demand forecasting"]
    },
    features: [
      "Predictive Supply Chain Analytics",
      "Intelligent Route Optimization",
      "Automated Inventory Management",
      "Demand Forecasting",
      "Risk Assessment & Mitigation",
      "Supplier Performance Analytics",
      "Cost Optimization",
      "Real-time Visibility"
    ],
    metrics: [
      { value: "65%", label: "Faster Deliveries" },
      { value: "40%", label: "Cost Reduction" },
      { value: "95%", label: "On-Time Delivery" }
    ],
    testimonial: {
      quote: "AI supply chain optimization has transformed our logistics. We're 65% faster and 40% more cost-effective than before.",
      author: "Lisa Wang",
      company: "LogisticsMax"
    },
    cta: {
      primary: "Optimize Now",
      secondary: "View Case Study"
    },
    icon: "🚚",
    featured: false,
    tags: ["Supply Chain", "Logistics", "Predictive Analytics", "Optimization", "Cost Reduction"],
    newBadge: true,
    trending: false
  }
];

function ComprehensivePromoBanner({
  className = "",
  variant = "hero",
  showCount = 4
}) {
  const [isVisible, setIsVisible] = reactExports.useState(true);
  const [activeTab, setActiveTab] = reactExports.useState("content");
  if (!isVisible) {
    return null;
  }
  const getVariantStyles = () => {
    switch (variant) {
      case "compact":
        return {
          container: "bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-400/30 p-4",
          text: "text-white",
          accent: "text-indigo-200",
          button: "bg-white text-indigo-600 hover:bg-indigo-50",
          buttonSecondary: "border-white text-white hover:bg-white hover:text-indigo-600"
        };
      case "full":
        return {
          container: "bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 border-purple-400/30 p-8",
          text: "text-white",
          accent: "text-purple-200",
          button: "bg-white text-purple-600 hover:bg-purple-50",
          buttonSecondary: "border-white text-white hover:bg-white hover:text-purple-600"
        };
      default:
        return {
          container: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 border-blue-400/30 p-6",
          text: "text-white",
          accent: "text-blue-200",
          button: "bg-white text-blue-600 hover:bg-blue-50",
          buttonSecondary: "border-white text-white hover:bg-white hover:text-blue-600"
        };
    }
  };
  const styles = getVariantStyles();
  const featuredArticles = homepageFeaturedArticles.slice(0, 2);
  const featuredServicesList = newServices.filter((s) => s.featured).slice(0, 2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${styles.container} ${className} border rounded-xl mb-8 relative overflow-hidden`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-shimmer" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-lg font-bold ${styles.text}`, children: "🚀 2025 TRANSFORMATION SUITE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 animate-bounce" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsVisible(false),
            className: `${styles.accent} hover:${styles.text} transition-colors`,
            "aria-label": "Dismiss banner",
            children: "✕"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-xl font-bold ${styles.text} mb-2`, children: "🎯 Revolutionary AI Solutions + Expert Insights = Business Transformation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${styles.accent} text-sm mb-4`, children: "Get the complete package: cutting-edge AI services, autonomous infrastructure, quantum computing solutions, and expert guidance through our latest articles." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveTab("content"),
            className: `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === "content" ? "bg-white text-blue-600" : "bg-white/10 text-white hover:bg-white/20"}`,
            children: "📚 Latest Articles"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveTab("services"),
            className: `px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${activeTab === "services" ? "bg-white text-blue-600" : "bg-white/10 text-white hover:bg-white/20"}`,
            children: "🛠️ New Services"
          }
        )
      ] }),
      activeTab === "content" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6", children: featuredArticles.map((article) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 px-2 py-1 rounded text-xs font-medium", children: article.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3" }),
              "NEW"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `font-semibold ${styles.text} mb-2 line-clamp-2`, children: article.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${styles.accent} text-sm mb-3 line-clamp-2`, children: article.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              article.readTime
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(article.date).toLocaleDateString() })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: `/blog/${article.slug}`,
            className: `${styles.button} px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 w-full justify-center`,
            children: [
              "Read Article",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] }, article.id)) }),
      activeTab === "services" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6", children: featuredServicesList.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start justify-between mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: service.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `font-semibold ${styles.text} text-sm`, children: service.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 px-2 py-1 rounded text-xs font-medium", children: service.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${styles.accent} text-xs mb-2 line-clamp-2`, children: service.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold ${styles.text} text-sm`, children: service.pricing.starting }),
              service.pricing.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-400 text-black px-2 py-1 rounded text-xs font-medium", children: "POPULAR" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: `/services/${service.id}`,
            className: `${styles.button} px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 w-full justify-center`,
            children: [
              "Explore Service",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] }, service.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/services",
            className: `${styles.button} px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
              "Explore All Services",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            className: `${styles.button} px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4" }),
              "Read All Articles",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: `${styles.buttonSecondary} border px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`,
            children: "Get Free Consultation"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/10 rounded-lg p-4 border border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${styles.text} font-bold text-lg mb-2`, children: "🔥 EXCLUSIVE 2025 TRANSFORMATION PACKAGE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${styles.accent} text-sm mb-3`, children: "Get 50% OFF AI Autonomous Operations + FREE AI Strategy Consultation + Complete Article Library Access" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:scale-105",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4" }),
                "Claim Your Package",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${styles.accent} text-xs flex items-center justify-center`, children: "Valid until March 31, 2025" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-bold ${styles.text}`, children: "500+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${styles.accent} text-xs`, children: "Projects Delivered" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-bold ${styles.text}`, children: "99.9%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${styles.accent} text-xs`, children: "Success Rate" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-bold ${styles.text}`, children: "24/7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${styles.accent} text-xs`, children: "Expert Support" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-bold ${styles.text}`, children: "$2M+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${styles.accent} text-xs`, children: "Cost Savings" })
        ] })
      ] })
    ] })
  ] });
}

function NewArticlesPromoBanner({
  className = "",
  variant = "default",
  showCount = 3,
  autoRotate = false
}) {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [isVisible, setIsVisible] = reactExports.useState(true);
  const articles = homepageFeaturedArticles.slice(0, showCount);
  const currentArticle = autoRotate ? articles[currentIndex] : articles[0];
  React.useEffect(() => {
    if (autoRotate && articles.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % articles.length);
      }, 5e3);
      return () => clearInterval(interval);
    }
  }, [autoRotate, articles.length]);
  if (!isVisible || articles.length === 0) {
    return null;
  }
  const getVariantStyles = () => {
    switch (variant) {
      case "premium":
        return {
          container: "bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 border-purple-400/30",
          text: "text-white",
          accent: "text-purple-200",
          button: "bg-white text-purple-600 hover:bg-purple-50",
          buttonSecondary: "border-white text-white hover:bg-white hover:text-purple-600"
        };
      case "featured":
        return {
          container: "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 border-emerald-400/30",
          text: "text-white",
          accent: "text-emerald-200",
          button: "bg-white text-emerald-600 hover:bg-emerald-50",
          buttonSecondary: "border-white text-white hover:bg-white hover:text-emerald-600"
        };
      default:
        return {
          container: "bg-gradient-to-r from-blue-500 to-indigo-600 border-blue-400/30",
          text: "text-white",
          accent: "text-blue-200",
          button: "bg-white text-blue-600 hover:bg-blue-50",
          buttonSecondary: "border-white text-white hover:bg-white hover:text-blue-600"
        };
    }
  };
  const styles = getVariantStyles();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${styles.container} ${className} border rounded-xl p-6 mb-8 relative overflow-hidden`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-shimmer" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-lg font-bold ${styles.text}`, children: "🚀 FRESH CONTENT ALERT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 animate-bounce" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsVisible(false),
            className: `${styles.accent} hover:${styles.text} transition-colors`,
            "aria-label": "Dismiss banner",
            children: "✕"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-xl font-bold ${styles.text} mb-2`, children: "🎯 Just Published: Revolutionary AI Articles That Will Transform Your Business" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${styles.accent} text-sm mb-4`, children: "Discover cutting-edge insights on AI Autonomous Infrastructure, Quantum-AI Hybrid Computing, Next-Gen Cybersecurity, and Enterprise AI Implementation strategies." })
      ] }),
      currentArticle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 px-2 py-1 rounded-full text-xs font-medium", children: currentArticle.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3" }),
              "NEW"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `font-semibold ${styles.text} mb-1`, children: currentArticle.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${styles.accent} text-sm mb-2`, children: currentArticle.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              currentArticle.readTime
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(currentArticle.date).toLocaleDateString() })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: `/blog/${currentArticle.slug}`,
            className: `${styles.button} px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:scale-105`,
            children: [
              "Read Now",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", children: articles.slice(0, 3).map((article, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 px-2 py-1 rounded text-xs font-medium", children: article.category }),
          article.trending && /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3 text-yellow-400" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: `font-medium ${styles.text} text-sm mb-1 line-clamp-2`, children: article.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.accent, children: article.readTime }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: `/blog/${article.slug}`,
              className: `${styles.accent} hover:${styles.text} transition-colors`,
              children: "Read →"
            }
          )
        ] })
      ] }, article.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            className: `${styles.button} px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
              "Explore All Articles",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/insights",
            className: `${styles.buttonSecondary} border px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`,
            children: "View Insights"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2 justify-center", children: ["AI Autonomous Ops", "Quantum Computing", "AI Security", "Edge AI", "Content AI", "GenAI Evals"].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20", children: tag }, tag)) })
    ] })
  ] });
}

function NewServicesPromoBanner({
  className = "",
  variant = "default",
  showCount = 3,
  featuredOnly = false
}) {
  const [isVisible, setIsVisible] = reactExports.useState(true);
  const services = featuredOnly ? newServices.filter((service) => service.featured).slice(0, showCount) : newServices.slice(0, showCount);
  if (!isVisible || services.length === 0) {
    return null;
  }
  const getVariantStyles = () => {
    switch (variant) {
      case "premium":
        return {
          container: "bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 border-emerald-400/30",
          text: "text-white",
          accent: "text-emerald-200",
          button: "bg-white text-emerald-600 hover:bg-emerald-50",
          buttonSecondary: "border-white text-white hover:bg-white hover:text-emerald-600",
          card: "bg-white/10 backdrop-blur-sm border-white/20"
        };
      case "showcase":
        return {
          container: "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 border-purple-400/30",
          text: "text-white",
          accent: "text-purple-200",
          button: "bg-white text-purple-600 hover:bg-purple-50",
          buttonSecondary: "border-white text-white hover:bg-white hover:text-purple-600",
          card: "bg-white/10 backdrop-blur-sm border-white/20"
        };
      default:
        return {
          container: "bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-400/30",
          text: "text-white",
          accent: "text-blue-200",
          button: "bg-white text-blue-600 hover:bg-blue-50",
          buttonSecondary: "border-white text-white hover:bg-white hover:text-blue-600",
          card: "bg-white/10 backdrop-blur-sm border-white/20"
        };
    }
  };
  const styles = getVariantStyles();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${styles.container} ${className} border rounded-xl p-6 mb-8 relative overflow-hidden`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-shimmer" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-lg font-bold ${styles.text}`, children: "🚀 NEW SERVICES LAUNCH" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 animate-bounce" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setIsVisible(false),
            className: `${styles.accent} hover:${styles.text} transition-colors`,
            "aria-label": "Dismiss banner",
            children: "✕"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-xl font-bold ${styles.text} mb-2`, children: "🎯 Revolutionary AI Services That Will Transform Your Business" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${styles.accent} text-sm mb-4`, children: "Discover our newest AI-powered services: Autonomous Operations, Quantum Optimization, AI Cybersecurity Suite, Edge AI Platform, and Content Generation Platform." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6", children: services.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${styles.card} rounded-lg p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: service.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: `font-semibold ${styles.text} text-sm mb-1`, children: service.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 px-2 py-1 rounded text-xs font-medium", children: service.category })
            ] })
          ] }),
          service.newBadge && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3" }),
            "NEW"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${styles.accent} text-xs mb-3 line-clamp-2`, children: service.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-bold ${styles.text} text-sm`, children: service.pricing.starting }),
            service.pricing.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-400 text-black px-2 py-1 rounded text-xs font-medium", children: "POPULAR" })
          ] }),
          service.pricing.discount && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-red-400 text-white px-2 py-1 rounded text-xs font-medium", children: service.pricing.discount })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: service.benefits.slice(0, 2).map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-3 h-3 text-green-400 flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${styles.accent} text-xs`, children: benefit })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: `/services/${service.id}`,
            className: `${styles.button} px-3 py-2 rounded text-xs font-semibold inline-flex items-center gap-1 transition-all duration-300 hover:scale-105 flex-1 justify-center`,
            children: [
              "Learn More",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
            ]
          }
        ) })
      ] }, service.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/services",
            className: `${styles.button} px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
              "Explore All Services",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: `${styles.buttonSecondary} border px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`,
            children: "Get Free Consultation"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 p-3 bg-white/10 rounded-lg border border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${styles.text} font-semibold text-sm mb-1`, children: "🔥 Limited Time Offer: Get 50% OFF Your First 3 Months" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `${styles.accent} text-xs`, children: "Plus FREE AI Strategy Consultation • Valid until March 31, 2025" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2 justify-center", children: ["AI Autonomous Ops", "Quantum Computing", "AI Security", "Edge AI", "Content Generation", "Customer Insights"].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20", children: tag }, tag)) })
    ] })
  ] });
}

const EnhancedPromotionalBanner = ({
  banner,
  className = "",
  onDismiss
}) => {
  const [isVisible, setIsVisible] = reactExports.useState(true);
  const [timeRemaining, setTimeRemaining] = reactExports.useState(banner.hideAfter);
  reactExports.useEffect(() => {
    if (banner.autoHide && banner.hideAfter > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsVisible(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1e3);
      return () => clearInterval(timer);
    }
  }, [banner.autoHide, banner.hideAfter]);
  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) {
      onDismiss(banner.id);
    }
  };
  const getAnimationClass = () => {
    switch (banner.animation) {
      case "pulse":
        return "animate-pulse";
      case "bounce":
        return "animate-bounce";
      case "fade-in":
        return "animate-fade-in";
      case "slide-in":
        return "animate-slide-in";
      default:
        return "";
    }
  };
  const getBadgeColor = () => {
    switch (banner.variant) {
      case "launch":
        return "bg-green-500 text-white";
      case "premium":
        return "bg-purple-500 text-white";
      case "warning":
        return "bg-red-500 text-white";
      case "success":
        return "bg-yellow-500 text-black";
      case "special":
        return "bg-pink-500 text-white";
      default:
        return "bg-blue-500 text-white";
    }
  };
  if (!isVisible) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative overflow-hidden ${banner.backgroundColor} ${banner.textColor} ${className} ${getAnimationClass()}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 flex-1", children: [
        banner.icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl animate-pulse", children: banner.icon }),
        banner.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getBadgeColor()}`, children: banner.badge }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm md:text-base", children: banner.message }),
          banner.autoHide && timeRemaining > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs opacity-75 mt-1", children: [
            "Auto-hide in ",
            timeRemaining,
            "s"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: banner.ctaLink,
            className: "bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2",
            children: [
              banner.ctaText,
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ),
        banner.showClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: handleDismiss,
            className: "text-white/80 hover:text-white hover:bg-white/20 p-1 rounded-full transition-all duration-300",
            "aria-label": "Dismiss banner",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 -right-4 w-8 h-8 bg-white/10 rounded-full animate-float" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -left-4 w-6 h-6 bg-white/10 rounded-full animate-float", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/4 w-4 h-4 bg-white/10 rounded-full animate-float", style: { animationDelay: "4s" } })
    ] })
  ] });
};
var EnhancedPromotionalBanner_default = EnhancedPromotionalBanner;

function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "w-full py-4 px-6 bg-gray-900 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto", children: "Zion Tech Group" }) });
}

const latestArticles = [
  {
    id: "ai-incident-command-center-2026",
    slug: "ai-incident-command-center-2026",
    title: "AI Incident Command Center 2026: Faster Containment, Fewer Surprises",
    description: "Stand up a command center with budgeted actions, live traces, and rollback-ready playbooks that contain incidents in under 60 seconds.",
    excerpt: "Close the loop from detections to safe actions with KPI‑wired incident budgets and rollbacks.",
    author: "Zion Tech Group Team",
    date: "2025-10-29",
    category: "Security",
    tags: ["Incident Response", "Automation", "Guardrails"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-incident-command-center-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "edge-privacy-playbooks-2026",
    slug: "edge-privacy-playbooks-2026",
    title: "Edge Privacy Playbooks 2026: Scoped IDs, Local Filters, DP Noise",
    description: "Practical patterns to keep insights rich and risk low with on‑device filtering, scoped identifiers, and differential privacy.",
    excerpt: "Ship privacy‑first analytics and personalization without PII using scoped IDs and local filters.",
    author: "Zion Tech Group Team",
    date: "2025-10-29",
    category: "Edge Computing",
    tags: ["Privacy", "Edge", "Telemetry"],
    featured: true,
    readTime: "8 min read",
    image: "/images/edge-privacy-playbooks-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-safety-budgets-2026",
    slug: "ai-safety-budgets-2026",
    title: "AI Safety Budgets 2026: Guardrails That Don’t Slow Teams",
    description: "Set explicit risk budgets, approvals, and rollback triggers that keep delivery fast and safe.",
    excerpt: "Ship faster with measurable safety budgets wired to KPIs and release trains.",
    author: "Zion Tech Group Team",
    date: "2025-10-17",
    category: "AI Strategy",
    tags: ["Guardrails", "Budgets", "Delivery"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-safety-budgets-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "edge-privacy-ml-2026",
    slug: "edge-privacy-ml-2026",
    title: "Edge Privacy for ML 2026: On‑Device Filters and Scoped IDs",
    description: "Design telemetry and inference with local filters, signed configs, and retention windows.",
    excerpt: "Keep insights rich without PII using on‑device redaction and scoped identifiers.",
    author: "Zion Tech Group Team",
    date: "2025-10-17",
    category: "Edge Computing",
    tags: ["Privacy", "Edge", "Telemetry"],
    featured: true,
    readTime: "8 min read",
    image: "/images/edge-privacy-ml-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "agent-evals-in-prod-2026",
    slug: "agent-evals-in-prod-2026",
    title: "Agent Evals in Production 2026: Online Checks That Predict Outcomes",
    description: "Wire agent evals to KPIs with lightweight canaries, scorecards, and rollback‑ready signals.",
    excerpt: "Prevent regressions while shipping weekly with online evals tied to outcomes.",
    author: "Zion Tech Group Team",
    date: "2025-10-17",
    category: "GenAI",
    tags: ["Agents", "Evals", "Scorecards"],
    featured: true,
    readTime: "7 min read",
    image: "/images/agent-evals-in-prod-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-breach-drills-2026",
    slug: "ai-breach-drills-2026",
    title: "AI Breach Drills 2026: Practice Safe Autonomy Under Pressure",
    description: "Runbook drills for AI systems: budgeted actions, approvals, and instant rollback paths.",
    excerpt: "Turn incidents into rehearsals—budgeted actions, approvals, and rollback checkpoints.",
    author: "Zion Tech Group Team",
    date: "2025-10-15",
    category: "Security",
    tags: ["Incident Response", "Automation", "Guardrails"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-breach-drills-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-governance-scorecards-quickstart-2026",
    slug: "ai-governance-scorecards-quickstart-2026",
    title: "AI Governance Scorecards Quickstart 2026: Ship Fast, Stay Safe",
    description: "Lightweight scorecards, PR checks, and canaries that predict outcomes without slowing teams.",
    excerpt: "Kickstart scorecards and guardrails in weeks—wired to KPIs and delivery speed.",
    author: "Zion Tech Group Team",
    date: "2025-10-16",
    category: "AI Strategy",
    tags: ["Scorecards", "Governance", "Canaries"],
    featured: true,
    readTime: "6 min read",
    image: "/images/ai-governance-scorecards-quickstart-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "edge-agent-observability-2026",
    slug: "edge-agent-observability-2026",
    title: "Edge Agent Observability 2026: Live Traces, Budgets, and Fallbacks",
    description: "Observe multi‑tool agents with user‑centric traces, budgeted actions, and deterministic fallbacks at the edge.",
    excerpt: "User‑centric traces and safety budgets for agents running at the edge.",
    author: "Zion Tech Group Team",
    date: "2025-10-16",
    category: "Edge Computing",
    tags: ["Agents", "Observability", "Edge"],
    featured: true,
    readTime: "7 min read",
    image: "/images/edge-agent-observability-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "privacy-preserving-feature-flags-2026",
    slug: "privacy-preserving-feature-flags-2026",
    title: "Privacy‑Preserving Feature Flags 2026: Geo Budgets and On‑Device Filters",
    description: "Sub‑100ms, zero‑regret rollouts using scoped IDs, local filters, and telemetry‑driven rollback.",
    excerpt: "Zero‑regret rollouts with privacy by design: scoped IDs and local filters.",
    author: "Zion Tech Group Team",
    date: "2025-10-16",
    category: "Architecture",
    tags: ["Feature Flags", "Privacy", "Edge"],
    featured: false,
    readTime: "7 min read",
    image: "/images/privacy-preserving-feature-flags-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "privacy-first-insights-telemetry-2026",
    slug: "privacy-first-insights-telemetry-2026",
    title: "Privacy‑First Insights 2026: Signal‑Rich Analytics Without PII",
    description: "Scoped IDs, redaction, and retention windows that keep insights high and risk low.",
    excerpt: "Ship analytics teams love without PII risk using scoped identifiers and filters.",
    author: "Zion Tech Group Team",
    date: "2025-10-15",
    category: "Observability",
    tags: ["Privacy", "Telemetry", "Compliance"],
    featured: true,
    readTime: "8 min read",
    image: "/images/privacy-first-insights-telemetry-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "agent-blue-green-releases-2026",
    slug: "agent-blue-green-releases-2026",
    title: "Blue‑Green Releases for Agents: Safe Rollouts with Live Traces",
    description: "Deploy agent updates with canaries, budgeted tool actions, and trace‑driven rollbacks.",
    excerpt: "Reduce blast radius for agent updates with canaries, budgets, and rollbacks.",
    author: "Zion Tech Group Team",
    date: "2025-10-15",
    category: "GenAI",
    tags: ["Agents", "Releases", "Tracing"],
    featured: true,
    readTime: "8 min read",
    image: "/images/agent-blue-green-releases-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-security-data-leak-prevention-2026",
    slug: "ai-security-data-leak-prevention-2026",
    title: "AI Security 2026: Data‑Leak Prevention with Scoped IDs and Egress Guards",
    description: "Practical playbooks to prevent prompt and data leaks with scoped identifiers, redaction, and egress controls.",
    excerpt: "Stop data leaks before they happen with scoped IDs, field‑level filters, and egress guards.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "AI Security",
    tags: ["Security", "Privacy", "Egress", "Redaction"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-security-data-leak-prevention-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-safety-budgets-2026",
    slug: "ai-safety-budgets-2026",
    title: "AI Safety Budgets 2026: Guardrails You Can Ship",
    description: "Budgeted actions, approvals, and rollbacks that keep AI features safe without slowing teams.",
    excerpt: "Ship fast with safety budgets: approvals, fallbacks, and KPI‑linked rollbacks.",
    author: "Zion Tech Group Team",
    date: "2025-10-14",
    category: "AI Governance",
    tags: ["Safety", "Budgets", "Governance", "Evals"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-safety-budgets-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "edge-personalization-2026",
    slug: "edge-personalization-2026",
    title: "Edge Personalization 2026: Private <100ms Experiences at Scale",
    description: "Segment, cache, and sign configurations to deliver private, sub‑100ms personalization globally.",
    excerpt: "Deliver private, fast personalization with signed configs and tiered caches.",
    author: "Zion Tech Group Team",
    date: "2025-10-14",
    category: "Edge Computing",
    tags: ["Edge", "Personalization", "Latency", "Privacy"],
    featured: true,
    readTime: "8 min read",
    image: "/images/edge-personalization-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "platform-engineering-scorecards-v2-2026",
    slug: "platform-engineering-scorecards-v2-2026",
    title: "Platform Engineering Scorecards v2: Leading Indicators that Drive ROI",
    description: "A refined system of scorecards—adoption, golden paths, and SLOs—that link platform work to revenue and retention.",
    excerpt: "From infrastructure spend to shipped outcomes: scorecards engineers adopt and executives trust.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Platform Engineering",
    tags: ["Scorecards", "ROI", "SLOs", "Golden Paths"],
    featured: true,
    readTime: "8 min read",
    image: "/images/platform-engineering-scorecards-v2-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "multimodal-agents-enterprise-2026",
    slug: "multimodal-agents-enterprise-2026",
    title: "Multimodal Agents 2026: Vision + Text + Voice that Teams Can Trust",
    description: "Design enterprise‑grade multimodal agents with tool reliability budgets, live traces, and offline fallbacks.",
    excerpt: "Ship agents that see, read, and speak—safely and reliably in production.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "GenAI",
    tags: ["Agents", "Multimodal", "Tracing", "Reliability"],
    featured: true,
    readTime: "9 min read",
    image: "/images/multimodal-agents-enterprise-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-cost-aware-inference-2026",
    slug: "ai-cost-aware-inference-2026",
    title: "Cost‑Aware Inference 2026: Warm Pools, Tiers, and SLAs",
    description: "Cut inference cost 30–60% with adaptive batching, warm pools, and quality tiers under SLAs.",
    excerpt: "Reduce GenAI spend without hurting P95 using warm pools and tiered quality.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "GenAI",
    tags: ["Inference", "Cost", "Optimization"],
    featured: true,
    readTime: "8 min read",
    image: "/images/serverless-inference-costs.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "production-rag-ops-2026",
    slug: "production-rag-ops-2026",
    title: "Production RAG Ops 2026: Freshness Windows and Drift Guards",
    description: "Operate RAG reliably with TTL freshness windows, drift detection, and KPI‑linked budgets.",
    excerpt: "Keep answers accurate with freshness windows, drift guards, and quality budgets.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "GenAI",
    tags: ["RAG", "Freshness", "Quality"],
    featured: false,
    readTime: "9 min read",
    image: "/images/reliable-rag-ops-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "zero-trust-for-genai-2026",
    slug: "zero-trust-for-genai-2026",
    title: "Zero‑Trust for GenAI 2026: Prompt Firewalls and Signed Outputs",
    description: "Production patterns: egress control, prompt firewalls, and signed outputs at scale.",
    excerpt: "Ship GenAI safely with layered controls: prompt firewalls, egress policies, signing.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Security",
    tags: ["GenAI", "Security", "Zero‑Trust"],
    featured: true,
    readTime: "8 min read",
    image: "/images/zero-trust-for-genai-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "quantum-ai-hybrid-blueprint-2026",
    slug: "quantum-ai-hybrid-blueprint-2026",
    title: "Quantum‑AI Hybrid Blueprint 2026: Practical Near‑Term Wins",
    description: "Blend quantum libraries with AI orchestration to unlock optimization wins today.",
    excerpt: "Near‑term value from QC + AI: routing patterns and orchestration tips.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Quantum",
    tags: ["Quantum", "AI", "Optimization"],
    featured: false,
    readTime: "9 min read",
    image: "/images/quantum-ai-hybrid-blueprint-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "secure-ml-supply-chain-2026",
    slug: "secure-ml-supply-chain-2026",
    title: "Secure ML Supply Chain 2026: SBOMs, Attestations, and Drift Guards",
    description: "Continuously track models, datasets, and prompts with signed SBOMs and policy checks.",
    excerpt: "Stop ML supply‑chain drift with automated SBOMs, attestations, and CI policy gates.",
    author: "Zion Tech Group Team",
    date: "2025-10-13",
    category: "Security",
    tags: ["ML", "Supply Chain", "SBOM", "Security"],
    featured: true,
    readTime: "7 min read",
    image: "/images/secure-ml-supply-chain-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "genai-routing-blueprint-2026",
    slug: "genai-routing-blueprint-2026",
    title: "GenAI Routing Blueprint 2026: Quality Tiers, Caches, and Budgets",
    description: "Route traffic by SLA with tiered models, edge caches, and KPI‑linked budgets.",
    excerpt: "A practical guide to keep costs predictable without hurting UX or outcomes.",
    author: "Zion Tech Group Team",
    date: "2025-10-13",
    category: "GenAI",
    tags: ["Routing", "Quality Tiers", "Budgets", "Caching"],
    featured: true,
    readTime: "8 min read",
    image: "/images/genai-routing-blueprint-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "golden-paths-roi-2026",
    slug: "golden-paths-roi-2026",
    title: "Golden Paths ROI 2026: Scorecards that Prove Platform Value",
    description: "Link developer journeys to SLOs, adoption, and revenue with actionable scorecards.",
    excerpt: "Shift platform conversations from infra spend to shipped outcomes and ROI.",
    author: "Zion Tech Group Team",
    date: "2025-10-13",
    category: "Platform Engineering",
    tags: ["Golden Paths", "Scorecards", "ROI"],
    featured: true,
    readTime: "7 min read",
    image: "/images/golden-paths-roi-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "reliable-rag-ops-2026",
    slug: "reliable-rag-ops-2026",
    title: "Reliable RAG Ops 2026: Freshness, Drift, and Quality Budgets",
    description: "Operate RAG at scale with TTL freshness windows, drift monitors, and KPI‑tied budgets.",
    excerpt: "A production playbook to keep RAG answers accurate without blowing budgets.",
    author: "Zion Tech Group Team",
    date: "2025-10-12",
    category: "GenAI",
    tags: ["RAG", "Freshness", "Quality"],
    featured: true,
    readTime: "8 min read",
    image: "/images/reliable-rag-ops-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "agent-evals-scorecards-2026",
    slug: "agent-evals-scorecards-2026",
    title: "Agent Evals 2026: Scorecards That Predict Outcomes",
    description: "Online evals wired to KPIs—scorecards that correlate with revenue, CSAT, and retention.",
    excerpt: "A practical playbook for evals that protect velocity and predict business outcomes.",
    author: "Zion Tech Group Team",
    date: "2025-10-13",
    category: "GenAI",
    tags: ["Evals", "Scorecards", "KPIs"],
    featured: true,
    readTime: "8 min read",
    image: "/images/agent-evals-scorecards-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "privacy-preserving-agents-2026",
    slug: "privacy-preserving-agents-2026",
    title: "Privacy‑Preserving Agents: Scoped IDs, Redaction, and On‑Device Caches",
    description: "Build assistants that keep insights high and PII risk low with scoped identifiers and local caches.",
    excerpt: "Implement privacy by design for agent workflows without losing observability.",
    author: "Zion Tech Group Team",
    date: "2025-10-13",
    category: "AI Security",
    tags: ["Privacy", "Agents", "Security"],
    featured: false,
    readTime: "7 min read",
    image: "/images/privacy-preserving-agents-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "platform-kpis-2026",
    slug: "platform-kpis-2026",
    title: "Platform KPIs 2026: Adoption, Golden Paths, and SLOs",
    description: "Scorecards engineers adopt—link platform telemetry to shipped business outcomes.",
    excerpt: "From costs to value: KPIs that prove platform ROI quarter by quarter.",
    author: "Zion Tech Group Team",
    date: "2025-10-12",
    category: "Platform Engineering",
    tags: ["KPIs", "Scorecards", "Platform"],
    featured: true,
    readTime: "7 min read",
    image: "/images/platform-kpis-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-incident-budgets-2026",
    slug: "ai-incident-budgets-2026",
    title: "AI Incident Budgets: Playbooks That Contain in <60s",
    description: "Budgeted actions, approvals, and rollback triggers for safe automation under pressure.",
    excerpt: "Close the loop from detections to actions with KPI‑wired incident budgets.",
    author: "Zion Tech Group Team",
    date: "2025-10-12",
    category: "Security",
    tags: ["Incident Response", "Automation", "Guardrails"],
    featured: false,
    readTime: "6 min read",
    image: "/images/ai-incident-budgets-2026.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "ai-incident-response-playbooks-2025",
    slug: "ai-incident-response-playbooks-2025",
    title: "AI Incident Response Playbooks: Contain in <60s with Confidence",
    description: "From detections to safe actions: policy-tested playbooks and rollback-ready automations.",
    excerpt: "Design incident playbooks with budgeted actions, approvals, and telemetry that close the loop fast.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Cybersecurity",
    tags: ["IR", "Automation", "Guardrails"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-incident-response-playbooks-2025.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "privacy-preserving-analytics-2025",
    slug: "privacy-preserving-analytics-2025",
    title: "Privacy‑Preserving Analytics: Ship Insights Without PII Risk",
    description: "On-device redaction, scoped IDs, and DP noise for compliant, decision-grade telemetry.",
    excerpt: "A practical blueprint for analytics that respect privacy while keeping signals rich.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Observability",
    tags: ["Privacy", "Telemetry", "Compliance"],
    featured: true,
    readTime: "8 min read",
    image: "/images/privacy-preserving-analytics-2025.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "platform-engineering-scorecards-2026",
    slug: "platform-engineering-scorecards-2026",
    title: "Platform Engineering Scorecards 2026: Golden Paths that Drive Outcomes",
    description: "Adoption, golden-path TTFX, and SLOs as leading indicators of platform ROI.",
    excerpt: "A pragmatic scorecard system engineers actually use—wired to shipped value.",
    author: "Zion Tech Group Team",
    date: "2025-10-09",
    category: "Platform Engineering",
    tags: ["Scorecards", "Golden Paths", "ROI", "Platform"],
    featured: true,
    readTime: "8 min read",
    image: "/images/platform-engineering-scorecards-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-cybersecurity-automation-2025",
    slug: "ai-cybersecurity-automation-2025",
    title: "AI Cybersecurity Automation: Autonomic Response Under 60s",
    description: "Behavioral detections, policy tests, and playbooks that auto-contain incidents fast.",
    excerpt: "From detections to actions: close the loop with safe automation and SLAs.",
    author: "Zion Tech Group Team",
    date: "2025-10-09",
    category: "Cybersecurity",
    tags: ["Security", "Automation", "Detection", "Response"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-cybersecurity-automation.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "edge-ai-blueprint-2026",
    slug: "edge-ai-blueprint-2026",
    title: "Edge AI Blueprint 2026: Privacy‑Preserving Intelligence <100ms",
    description: "Signed configs, geo budgets, and tiny models for reliable edge decisions.",
    excerpt: "A field guide to building private, low‑latency edge AI systems at scale.",
    author: "Zion Tech Group Team",
    date: "2025-10-09",
    category: "Edge Computing",
    tags: ["Edge AI", "Latency", "Privacy", "On‑device"],
    featured: true,
    readTime: "9 min read",
    image: "/images/edge-ai-blueprint-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "llm-policy-testing-2025",
    slug: "llm-policy-testing-2025",
    title: "LLM Policy Testing in CI: Ship Fast, Stay Safe",
    description: "Automate governance with lightweight policy tests on every PR and release train.",
    excerpt: "Policy tests wired to CI keep AI features safe without slowing delivery.",
    author: "Zion Tech Group Team",
    date: "2025-10-08",
    category: "AI Governance",
    tags: ["Policy", "CI", "Governance", "Evals"],
    featured: true,
    readTime: "6 min read",
    image: "/images/ai-governance-blueprint.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-operational-scorecards-2026",
    slug: "ai-operational-scorecards-2026",
    title: "AI Operational Scorecards 2026: Guardrails That Drive Outcomes",
    description: "Guardrails wired to KPIs with PR checks, canaries, and SLOs engineers adopt",
    excerpt: "From policy to practice: scorecards that correlate with outcomes and speed teams up.",
    author: "Zion Tech Group Team",
    date: "2025-10-09",
    category: "AI Strategy",
    tags: ["Governance", "Scorecards", "Evals"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-operational-scorecards.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "edge-llm-caching-blueprint-2025",
    slug: "edge-llm-caching-blueprint-2025",
    title: "Edge LLM Caching: Latency Budgets, KV Patterns, and Cost Control",
    description: "Sub-100ms prompts with tiered caches, signed configs, and freshness windows.",
    excerpt: "Cut latency and cost with edge caches and deterministic fallbacks.",
    author: "Zion Tech Group Team",
    date: "2025-10-09",
    category: "Architecture",
    tags: ["Edge", "Caching", "LLM"],
    featured: true,
    readTime: "6 min read",
    image: "/images/edge-llm-caching.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "finops-scorecards-2025",
    slug: "finops-scorecards-2025",
    title: "FinOps Scorecards: Guardrails Engineers Actually Use",
    description: "Budgets, PR checks, and alerts that cut cloud waste 25–40% without slowing teams.",
    excerpt: "A practical FinOps playbook with scorecards tied to product goals.",
    author: "Zion Tech Group Team",
    date: "2025-10-08",
    category: "Cloud",
    tags: ["FinOps", "Cloud", "Budgets", "Governance"],
    featured: true,
    readTime: "7 min read",
    image: "/images/cloud-finops-guardrails.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "enterprise-rag-blueprint-2025",
    slug: "enterprise-rag-blueprint-2025",
    title: "Enterprise RAG Blueprint v2: Freshness, Hybrid Search, Auth",
    description: "A pragmatic blueprint for RAG at scale with freshness windows and layered evals.",
    excerpt: "Keep answers accurate with freshness windows and hybrid retrieval patterns.",
    author: "Zion Tech Group Team",
    date: "2025-10-08",
    category: "GenAI",
    tags: ["RAG", "Freshness", "Hybrid Search", "Auth"],
    featured: true,
    readTime: "9 min read",
    image: "/images/enterprise-rag-v2.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-governance-scorecards-2026",
    slug: "ai-governance-scorecards-2026",
    title: "AI Governance 2026: Scorecards Engineers Actually Use",
    description: "Practical guardrails wired to KPIs, PR checks, and online canaries that teams adopt.",
    excerpt: "Move beyond heavy process. Ship fast with measurable guardrails, policy tests, and rollback‑ready canaries.",
    author: "Zion Tech Group Team",
    date: "2025-10-07",
    category: "AI Strategy",
    tags: ["Governance", "Policy", "Scorecards", "Evals"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-governance-scorecards-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "freshness-aware-rag-v2",
    slug: "freshness-aware-rag-v2",
    title: "Freshness‑Aware RAG v2: TTL Budgets, Async Warmups, and SLAs",
    description: "A production playbook for freshness with hybrid search, versioned corpora, and policy‑backed SLAs.",
    excerpt: "Keep answers accurate with freshness windows, budgeted warmups, and KPI‑aligned evaluation.",
    author: "Zion Tech Group Team",
    date: "2025-10-07",
    category: "GenAI",
    tags: ["RAG", "Freshness", "Hybrid Search", "SLAs"],
    featured: true,
    readTime: "8 min read",
    image: "/images/freshness-aware-rag-v2.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "edge-flags-blueprint-2026",
    slug: "edge-flags-blueprint-2026",
    title: "Edge Flags Blueprint 2026: <100ms Global Releases with Budgets",
    description: "Segmented rollouts, risk budgets, and instant rollback powered by edge compute and KV.",
    excerpt: "Blueprint for zero‑regret rollouts: geo/account targeting, budgets, and telemetry‑driven decisions.",
    author: "Zion Tech Group Team",
    date: "2025-10-07",
    category: "Architecture",
    tags: ["Edge", "Feature Flags", "Progressive Delivery"],
    featured: false,
    readTime: "6 min read",
    image: "/images/edge-flags-blueprint-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-platform-roadmaps-2026",
    slug: "ai-platform-roadmaps-2026",
    title: "AI Product Roadmaps 2026: From Bet to Business Impact",
    description: "Outcome-led roadmaps that connect bets to scorecards, release trains, and shipped value.",
    excerpt: "A practical system for roadmapping AI that ties every bet to measurable business outcomes and reliable delivery.",
    author: "Zion Tech Group Team",
    date: "2025-10-06",
    category: "AI Strategy",
    tags: ["Roadmaps", "Delivery", "Scorecards", "AI"],
    featured: true,
    readTime: "9 min read",
    image: "/images/ai-product-roadmaps-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "genai-guardrails-blueprints-2026",
    slug: "genai-guardrails-blueprints-2026",
    title: "GenAI Guardrails Blueprints 2026: Policy Tests, Canaries, and SLAs",
    description: "Composable guardrail patterns that scale without slowing teams or blocking delivery.",
    excerpt: "Blueprints for ship-fast, stay-safe guardrails: inline filters, policy tests in CI, KPI-linked canaries, and SLOs.",
    author: "Zion Tech Group Team",
    date: "2025-10-06",
    category: "GenAI",
    tags: ["Guardrails", "Policy", "Evals", "Canaries"],
    featured: true,
    readTime: "8 min read",
    image: "/images/genai-guardrails-blueprints-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "cloud-finops-scorecards-2026",
    slug: "cloud-finops-scorecards-2026",
    title: "Cloud FinOps Scorecards 2026: Guardrails Engineers Actually Use",
    description: "PR gates, alerts, and budgets that cut waste 25–40% while keeping velocity high.",
    excerpt: "A modern FinOps playbook with scorecards wired to product goals and automated waste prevention.",
    author: "Zion Tech Group Team",
    date: "2025-10-06",
    category: "Cloud",
    tags: ["FinOps", "Cloud", "Optimization", "Governance"],
    featured: false,
    readTime: "6 min read",
    image: "/images/cloud-finops-scorecards-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-risk-register-2025",
    slug: "ai-risk-register-2025",
    title: "AI Risk Register That Drives Action",
    description: "From static lists to owned mitigations with policy tests and SLAs.",
    excerpt: "Make your AI risk program measurable and actionable with owners, timelines, and CI policy tests.",
    author: "Zion Tech Group Team",
    date: "2025-10-04",
    category: "AI Governance",
    tags: ["Risk", "Governance", "Policy", "Compliance"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-risk-register.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-guardrails-scorecards-2025",
    slug: "ai-guardrails-scorecards-2025",
    title: "AI Guardrails That Engineers Adopt: Scorecards, PR Gates, Evals",
    description: "Practical guardrails wired to your SDLC: measurable, fast, and adoption‑friendly.",
    excerpt: "Guardrails that actually get used: scorecards tied to KPIs, lightweight PR checks, and online canaries.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "AI Strategy",
    tags: ["Guardrails", "Scorecards", "Evals"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-guardrails-scorecards.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "edge-flags-zero-regret-2025",
    slug: "edge-flags-zero-regret-2025",
    title: "Zero‑Regret Rollouts with Edge Flags",
    description: "Global progressive delivery with geo/account segmentation, budgets, and instant rollback.",
    excerpt: "Blueprint for <100ms feature flags at the edge with safety budgets and telemetry.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Architecture",
    tags: ["Edge", "Feature Flags", "Delivery"],
    featured: false,
    readTime: "6 min read",
    image: "/images/edge-flags-zero-regret.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "freshness-aware-rag-2025",
    slug: "freshness-aware-rag-2025",
    title: "Freshness‑Aware RAG: TTL Windows and Versioned Corpora",
    description: "Keep retrieval accurate with TTL budgets, async warmups, and audit trails.",
    excerpt: "A practical guide to freshness controls in enterprise RAG.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "GenAI",
    tags: ["RAG", "Freshness", "Search"],
    featured: true,
    readTime: "8 min read",
    image: "/images/freshness-aware-rag.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-product-roadmaps-2025",
    slug: "ai-product-roadmaps-2025",
    title: "AI Product Roadmaps 2025: From Vision to Velocity",
    description: "Outcome-driven roadmaps with scorecards, release trains, and guardrails that ship.",
    excerpt: "A pragmatic playbook for building AI product roadmaps that actually deliver—linking strategy to shipped value.",
    author: "Zion Tech Group Team",
    date: "2025-10-05",
    category: "AI Strategy",
    tags: ["Roadmaps", "Scorecards", "Delivery", "AI"],
    featured: true,
    readTime: "9 min read",
    image: "/images/ai-product-roadmaps.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "sbom-automation-ml-supply-chain",
    slug: "sbom-automation-ml-supply-chain",
    title: "Automating SBOM for the ML Supply Chain",
    description: "From models to datasets to prompts—continuous SBOMs with policy gates and attestations.",
    excerpt: "How to build living SBOMs for ML assets, wire policy checks, and stop supply‑chain drift.",
    author: "Zion Tech Group Team",
    date: "2025-10-05",
    category: "Security",
    tags: ["SBOM", "Supply Chain", "ML", "Security"],
    featured: false,
    readTime: "7 min read",
    image: "/images/sbom-ml-supply-chain.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "online-genai-evals-2025",
    slug: "online-genai-evals-2025",
    title: "Online GenAI Evals: Canary Checks That Keep You Fast",
    description: "Lightweight online evals tied to KPIs to prevent regressions while shipping weekly.",
    excerpt: "Stand up live canaries, budgeted evals, and dashboards that protect velocity without red tape.",
    author: "Zion Tech Group Team",
    date: "2025-10-05",
    category: "GenAI",
    tags: ["Evals", "Canaries", "Guardrails", "Observability"],
    featured: true,
    readTime: "6 min read",
    image: "/images/online-genai-evals.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "practical-rag-in-production-2025",
    slug: "practical-rag-in-production-2025",
    title: "Practical RAG in Production",
    description: "Freshness, hybrid search, and evals that scale beyond the demo.",
    excerpt: "A production-ready approach to RAG with freshness guarantees and layered evaluation.",
    author: "Zion Tech Group Team",
    date: "2025-10-04",
    category: "GenAI",
    tags: ["RAG", "Search", "Evals"],
    featured: true,
    readTime: "8 min read",
    image: "/images/practical-rag-2025.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-platform-engineering-2025",
    slug: "ai-platform-engineering-2025",
    title: "AI Platform Engineering 2025: The Complete Guide to Building Scalable AI Infrastructure",
    description: "Comprehensive guide to building enterprise-grade AI platforms that scale. Learn about MLOps, model governance, and infrastructure best practices.",
    excerpt: "Building AI platforms that can handle enterprise-scale workloads requires careful planning, robust infrastructure, and proven engineering practices. This guide covers everything from initial architecture to production deployment.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "Platform Engineering",
    tags: ["AI", "Platform Engineering", "MLOps", "Infrastructure", "Scalability"],
    featured: true,
    readTime: "15 min read",
    image: "/images/ai-platform-engineering.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "enterprise-rag-blueprint-v2",
    slug: "enterprise-rag-blueprint-v2",
    title: "Enterprise RAG Blueprint v2: Advanced Retrieval-Augmented Generation for Business",
    description: "Next-generation RAG implementation strategies for enterprise applications. Learn advanced techniques for document retrieval, context management, and response generation.",
    excerpt: "Retrieval-Augmented Generation (RAG) has evolved significantly. This blueprint covers advanced techniques for enterprise-scale RAG implementations with improved accuracy and performance.",
    author: "Zion Tech Group Team",
    date: "2025-01-16",
    category: "AI Strategy",
    tags: ["RAG", "Enterprise AI", "Document Processing", "NLP", "Knowledge Management"],
    featured: true,
    readTime: "12 min read",
    image: "/images/enterprise-rag-v2.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-autonomous-operations-guide",
    slug: "ai-autonomous-operations-guide",
    title: "AI Autonomous Operations: Building Self-Healing Infrastructure Systems",
    description: "Learn how to implement AI-driven autonomous operations that can self-heal, self-optimize, and self-scale without human intervention.",
    excerpt: "Autonomous operations represent the future of infrastructure management. This guide shows you how to build systems that can manage themselves with minimal human oversight.",
    author: "Zion Tech Group Team",
    date: "2025-01-15",
    category: "AI Operations",
    tags: ["Autonomous Operations", "Infrastructure", "AI", "Self-Healing", "Automation"],
    featured: true,
    readTime: "10 min read",
    image: "/images/ai-autonomous-ops.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "quantum-computing-business-guide",
    slug: "quantum-computing-business-guide",
    title: "Quantum Computing for Business: Practical Applications and ROI Analysis",
    description: "Explore real-world quantum computing applications for business. Learn about quantum advantage, implementation strategies, and measurable ROI.",
    excerpt: "Quantum computing is moving from research to practical business applications. Discover how forward-thinking companies are already using quantum solutions to solve complex problems.",
    author: "Zion Tech Group Team",
    date: "2025-01-14",
    category: "Quantum Computing",
    tags: ["Quantum Computing", "Business Applications", "ROI", "Optimization", "Technology"],
    featured: false,
    readTime: "11 min read",
    image: "/images/quantum-business.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "edge-ai-implementation-guide",
    slug: "edge-ai-implementation-guide",
    title: "Edge AI Implementation Guide: Bringing Intelligence to the Edge",
    description: "Complete guide to implementing AI at the edge for real-time processing, reduced latency, and enhanced privacy.",
    excerpt: "Edge AI is revolutionizing how we deploy artificial intelligence. Learn the strategies, tools, and best practices for successful edge AI implementation.",
    author: "Zion Tech Group Team",
    date: "2025-01-13",
    category: "Edge Computing",
    tags: ["Edge AI", "Real-time Processing", "IoT", "Latency", "Privacy"],
    featured: false,
    readTime: "13 min read",
    image: "/images/edge-ai-guide.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "zero-trust-security-implementation",
    slug: "zero-trust-security-implementation",
    title: "Zero Trust Security Implementation: A Complete Enterprise Guide",
    description: "Comprehensive guide to implementing Zero Trust security architecture in enterprise environments. Learn best practices and implementation strategies.",
    excerpt: "Zero Trust is no longer optional for enterprise security. This guide provides a complete roadmap for implementing Zero Trust architecture in your organization.",
    author: "Zion Tech Group Team",
    date: "2025-01-12",
    category: "Cybersecurity",
    tags: ["Zero Trust", "Security", "Enterprise", "Architecture", "Implementation"],
    featured: false,
    readTime: "14 min read",
    image: "/images/zero-trust-guide.jpg",
    newBadge: false,
    trending: true
  },
  {
    id: "ai-content-generation-best-practices",
    slug: "ai-content-generation-best-practices",
    title: "AI Content Generation: Best Practices for Quality and Brand Consistency",
    description: "Learn how to use AI for content generation while maintaining quality, brand voice, and SEO optimization.",
    excerpt: "AI content generation can transform your content strategy, but success requires careful planning and execution. Discover the best practices for AI-generated content.",
    author: "Zion Tech Group Team",
    date: "2025-01-11",
    category: "Content AI",
    tags: ["Content Generation", "AI", "SEO", "Brand Consistency", "Marketing"],
    featured: false,
    readTime: "8 min read",
    image: "/images/ai-content-generation.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "mlops-reliability-patterns",
    slug: "mlops-reliability-patterns",
    title: "MLOps Reliability Patterns: Building Robust Machine Learning Systems",
    description: "Essential patterns and practices for building reliable, production-ready machine learning systems with proper monitoring and governance.",
    excerpt: "MLOps reliability requires more than just deploying models. Learn the essential patterns for building robust, production-ready ML systems.",
    author: "Zion Tech Group Team",
    date: "2025-01-10",
    category: "MLOps",
    tags: ["MLOps", "Reliability", "Machine Learning", "Production", "Monitoring"],
    featured: false,
    readTime: "9 min read",
    image: "/images/mlops-reliability.jpg",
    newBadge: false,
    trending: true
  },
  {
    id: "ai-supply-chain-optimization-2025",
    slug: "ai-supply-chain-optimization-2025",
    title: "AI Supply Chain Optimization: 65% Faster Deliveries, 40% Lower Cost",
    description: "Demand sensing, dynamic routing, and smart inventory that lift OTIF while cutting cost.",
    excerpt: "Achieve 65% faster deliveries with AI‑powered planning, routing, and SLA‑aware orchestration.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Applied AI",
    tags: ["Supply Chain", "Optimization", "Routing", "Forecasting"],
    featured: true,
    readTime: "9 min read",
    image: "/images/ai-supply-chain-optimization.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "privacy-first-observability-quickstart-2025",
    slug: "privacy-first-observability-quickstart-2025",
    title: "Privacy‑First Observability Quickstart: Scoped IDs, Redaction, Retention",
    description: "Stand up privacy‑safe telemetry with scoped identifiers, field‑level filters, and TTL policies.",
    excerpt: "Ship insights without PII risk in under a week using proven building blocks.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Observability",
    tags: ["Privacy", "Telemetry", "Compliance"],
    featured: false,
    readTime: "7 min read",
    image: "/images/privacy-first-observability-quickstart.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "ai-platform-scorecards-roi-2026",
    slug: "ai-platform-scorecards-roi-2026",
    title: "AI Platform Scorecards 2026: Proving ROI with Leading Indicators",
    description: "A practical system to link platform telemetry to adoption, retention, and revenue using scorecards engineers actually adopt.",
    excerpt: "Design scorecards that shift conversations from infra spend to shipped business outcomes.",
    author: "Zion Tech Group Team",
    date: "2025-10-10",
    category: "AI Strategy",
    tags: ["Scorecards", "ROI", "Platform Engineering"],
    featured: true,
    readTime: "8 min read",
    image: "/images/ai-platform-scorecards-roi-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-sre-blueprints-2026",
    slug: "ai-sre-blueprints-2026",
    title: "AI SRE Blueprints 2026: Error Budgets, Rollbacks, and Live Traces",
    description: "Design SRE guardrails for AI systems: quality/error budgets, rollback triggers, and trace-driven remediation.",
    excerpt: "Keep reliability high with explicit error budgets, rollback paths, and live traces.",
    author: "Zion Tech Group Team",
    date: "2025-10-29",
    category: "AI Operations",
    tags: ["SRE", "Budgets", "Rollbacks", "Tracing"],
    featured: true,
    readTime: "8 min read",
    image: "/images/ai-sre-blueprints-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "privacy-first-ab-testing-2026",
    slug: "privacy-first-ab-testing-2026",
    title: "Privacy‑First A/B Testing 2026: Insights Without PII",
    description: "Scoped IDs, on‑device metrics, and DP noise for compliant experiments that still drive decisions.",
    excerpt: "Run powerful experiments without collecting PII using scoped identifiers and differential privacy.",
    author: "Zion Tech Group Team",
    date: "2025-10-29",
    category: "Analytics",
    tags: ["A/B Testing", "Privacy", "DP"],
    featured: false,
    readTime: "7 min read",
    image: "/images/privacy-first-ab-testing-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "production-rag-quality-budgets-2026",
    slug: "production-rag-quality-budgets-2026",
    title: "Production RAG: Quality Budgets, Freshness Windows, and SLAs",
    description: "Run RAG at scale with explicit quality budgets, freshness controls, and KPI-aligned SLAs that avoid regressions.",
    excerpt: "Keep answers accurate and on‑budget with freshness windows, async warmups, and layered evals.",
    author: "Zion Tech Group Team",
    date: "2025-10-10",
    category: "GenAI",
    tags: ["RAG", "Freshness", "Evals", "SLAs"],
    featured: true,
    readTime: "9 min read",
    image: "/images/production-rag-quality-budgets-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-governance-blueprint-2025",
    slug: "ai-governance-blueprint-2025",
    title: "AI Governance Blueprint 2025: Practical Guardrails That Ship",
    description: "Scorecards, policy tests, and change-control that keep AI initiatives fast and compliant.",
    excerpt: "Move beyond slideware: adopt scorecards, policy tests, and measurable guardrails that accelerate delivery while satisfying risk.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "AI Strategy",
    tags: ["AI Governance", "Policy", "Risk", "Compliance", "Scorecards"],
    featured: true,
    readTime: "9 min read",
    image: "/images/ai-governance-blueprint.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "genai-guardrails-realtime-2025",
    slug: "genai-guardrails-realtime-2025",
    title: "Real‑Time GenAI Guardrails: Inline Filters, Canaries, and Evals",
    description: "Run fast with live canaries, inline moderation, and KPI‑linked evals that prevent regressions.",
    excerpt: "A field guide to guardrails that actually work in production without blocking velocity.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "GenAI",
    tags: ["Guardrails", "Evals", "Safety", "Observability", "GenAI"],
    featured: false,
    readTime: "8 min read",
    image: "/images/genai-guardrails.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "cloud-finops-guardrails-2025",
    slug: "cloud-finops-guardrails-2025",
    title: "Cloud FinOps Guardrails Engineers Actually Use",
    description: "Budgets, alerts, and PR gates that cut waste 25–40% while preserving delivery speed.",
    excerpt: "A practical FinOps playbook: actionable guardrails, scorecards tied to product goals, and automated waste prevention.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Cloud",
    tags: ["FinOps", "Cloud", "Governance"],
    featured: true,
    readTime: "6 min read",
    image: "/images/cloud-finops-guardrails.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "practical-evals-scorecards-2025",
    slug: "practical-evals-scorecards-2025",
    title: "Practical AI Evals That Predict Business Outcomes",
    description: "Design scorecards that correlate with revenue, CSAT, and retention.",
    excerpt: "Move beyond BLEU: build evals that predict outcomes and prevent regressions in production.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "GenAI",
    tags: ["Evals", "Scorecards", "GenAI"],
    featured: true,
    readTime: "6 min read",
    image: "/images/practical-evals-2025.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-agent-observability-2025",
    slug: "ai-agent-observability-2025",
    title: "AI Agent Observability: Traces, Policy Tests, and Feedback Loops",
    description: "Keep quality high with traces, inline policy tests, and human-in-the-loop signals.",
    excerpt: "A field guide to observing multi-step AI agents without slowing them down.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "GenAI",
    tags: ["Observability", "Agents", "Safety"],
    featured: false,
    readTime: "7 min read",
    image: "/images/ai-agent-observability.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "serverless-inference-cost-playbook-2025",
    slug: "serverless-inference-cost-playbook-2025",
    title: "Serverless Inference Cost Playbook",
    description: "Adaptive batching, warm pools, and quality tiers without P95 pain.",
    excerpt: "Cut GenAI inference costs while preserving latency and quality with proven patterns.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "GenAI",
    tags: ["Inference", "Cost", "Optimization"],
    featured: false,
    readTime: "7 min read",
    image: "/images/serverless-inference-costs.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "ai-sales-copilot-playbook-2025",
    slug: "ai-sales-copilot-playbook-2025",
    title: "AI Sales Copilot: A 90‑Day Plan",
    description: "Workflows, guardrails, and KPIs to lift win‑rates with an AI copilot.",
    excerpt: "A pragmatic plan to deploy a sales copilot that sellers actually use.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Applied AI",
    tags: ["Sales", "Copilot", "Playbook"],
    featured: false,
    readTime: "8 min read",
    image: "/images/ai-sales-copilot.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "secure-rag-2025",
    slug: "secure-rag-2025",
    title: "Secure RAG 2025: Authorization‑Aware Retrieval and Prompt Firewalls",
    description: "Enterprise patterns for safe, compliant retrieval‑augmented generation.",
    excerpt: "Implement auth-aware retrieval, freshness windows, and prompt firewalls without blocking teams.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "AI Security",
    tags: ["RAG", "Security", "Governance"],
    featured: false,
    readTime: "8 min read",
    image: "/images/secure-rag-2025.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "agentic-workflows-blueprint-2026",
    slug: "agentic-workflows-blueprint-2026",
    title: "Agentic Workflows Blueprint 2026: Tools, Traces, and Safety Budgets",
    description: "Design reliable multi‑tool agents with deterministic tools, live traces, and risk budgets.",
    excerpt: "A production playbook for building agent workflows that teams can trust.",
    author: "Zion Tech Group Team",
    date: "2025-10-10",
    category: "GenAI",
    tags: ["Agents", "Tracing", "Guardrails"],
    featured: true,
    readTime: "9 min read",
    image: "/images/agentic-workflows-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "privacy-first-observability-2026",
    slug: "privacy-first-observability-2026",
    title: "Privacy‑First Observability: User‑Centric Traces Without PII Leaks",
    description: "Implement privacy filters, scoped IDs, and retention policies that keep signals rich and safe.",
    excerpt: "Observability patterns that balance insight with compliance across stacks.",
    author: "Zion Tech Group Team",
    date: "2025-10-10",
    category: "Observability",
    tags: ["Privacy", "Tracing", "Compliance"],
    featured: false,
    readTime: "7 min read",
    image: "/images/privacy-first-observability.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "on-device-agents-2026",
    slug: "on-device-agents-2026",
    title: "On‑Device Agents 2026: Private Tools That Work Offline",
    description: "Ship fast, privacy‑first assistants with on‑device tools, local caches, and fallback routes.",
    excerpt: "Design assistants that keep working with limited connectivity and strict privacy.",
    author: "Zion Tech Group Team",
    date: "2025-10-11",
    category: "Edge Computing",
    tags: ["Agents", "Edge", "Privacy"],
    featured: true,
    readTime: "7 min read",
    image: "/images/on-device-agents-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "genai-budgets-and-quality-tiers-2026",
    slug: "genai-budgets-and-quality-tiers-2026",
    title: "GenAI Budgets and Quality Tiers: Control Cost Without Hurting UX",
    description: "Tier models, cache prompts, and budget traffic by SLA to cut spend 30–60%.",
    excerpt: "Practical controls to keep GenAI bills predictable while preserving experience.",
    author: "Zion Tech Group Team",
    date: "2025-10-11",
    category: "AI Operations",
    tags: ["FinOps", "Quality Tiers", "Budgets"],
    featured: true,
    readTime: "6 min read",
    image: "/images/genai-budgets-quality-tiers.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "secure-tools-marketplace-2026",
    slug: "secure-tools-marketplace-2026",
    title: "Secure Tools Marketplace: Vetting, Sandboxes, and Attestations",
    description: "Bring third‑party tools safely with policy checks, sandboxes, and signed attestations.",
    excerpt: "A safe path to ecosystem extensibility without compromising security or velocity.",
    author: "Zion Tech Group Team",
    date: "2025-10-11",
    category: "Security",
    tags: ["Security", "Supply Chain", "Sandboxing"],
    featured: false,
    readTime: "8 min read",
    image: "/images/secure-tools-marketplace.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "ai-autonomous-incident-runbooks-2025",
    slug: "ai-autonomous-incident-runbooks-2025",
    title: "AI Autonomous Incident Runbooks: Budgeted Actions and Instant Rollback",
    description: "Design incident playbooks with explicit budgets, approvals, and safe automated rollback.",
    excerpt: "Close the loop from detection to safe action using budgets, approvals, and telemetry.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "AI Operations",
    tags: ["Runbooks", "Automation", "Risk Budgets"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-autonomous-incident-runbooks-2025.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "privacy-first-feature-flags-2025",
    slug: "privacy-first-feature-flags-2025",
    title: "Privacy‑First Feature Flags: Zero‑Regret Rollouts at the Edge",
    description: "Scoped IDs, on‑device filters, and geo budgets for safe global releases under 100ms.",
    excerpt: "Blueprint for privacy‑preserving progressive delivery using edge compute and KV.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Architecture",
    tags: ["Feature Flags", "Edge", "Privacy"],
    featured: true,
    readTime: "6 min read",
    image: "/images/privacy-first-feature-flags-2025.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "platform-roi-scorecards-quickstart-2025",
    slug: "platform-roi-scorecards-quickstart-2025",
    title: "Platform ROI Scorecards: A Practical Quickstart",
    description: "Link platform telemetry to adoption and revenue with scorecards engineers actually use.",
    excerpt: "Adoption, golden‑path TTFX, and SLOs as leading indicators of ROI.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "AI Strategy",
    tags: ["Scorecards", "Platform", "ROI"],
    featured: true,
    readTime: "7 min read",
    image: "/images/platform-roi-scorecards-quickstart-2025.jpg",
    newBadge: true,
    trending: true
  }
];
latestArticles.unshift(
  {
    id: "ai-threat-hunting-with-llms-2026",
    slug: "ai-threat-hunting-with-llms-2026",
    title: "AI Threat Hunting with LLMs 2026: Signals, Sandboxes, and Speed",
    description: "Augment analysts with safe LLM tooling, live traces, and budgeted actions for faster hunts.",
    excerpt: "Operational playbooks to make LLMs an accelerator for your SOC—without extra risk.",
    author: "Zion Tech Group Team",
    date: "2025-10-13",
    category: "Security",
    tags: ["Threat Hunting", "LLMs", "Security"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-threat-hunting-llms-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "llm-production-runbooks-2026",
    slug: "llm-production-runbooks-2026",
    title: "LLM Production Runbooks 2026: Rollbacks, Budgets, and Canary Evals",
    description: "Battle‑tested runbooks for safe LLM releases—risk budgets, rollback triggers, and KPI‑linked canaries.",
    excerpt: "Release LLM changes confidently with measurable guardrails and fast rollbacks.",
    author: "Zion Tech Group Team",
    date: "2025-10-13",
    category: "AI Operations",
    tags: ["Runbooks", "Evals", "Budgets"],
    featured: true,
    readTime: "8 min read",
    image: "/images/llm-production-runbooks-2026.jpg",
    newBadge: true,
    trending: true
  }
);

const LatestArticlesShowcase = () => {
  const displayArticles = latestArticles.filter((article) => article.featured).slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 text-sm font-medium mb-8 border border-blue-500/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-2" }),
        "📚 LATEST INSIGHTS & ARTICLES",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 ml-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: [
        "Fresh Content",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Just Published" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mb-8", children: "Stay ahead of the curve with our latest articles on AI automation, quantum computing, edge AI, and cutting-edge technology solutions. Written by our expert team." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-xl p-6 mb-8 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-purple-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-purple-700", children: "🔥 TRENDING NOW" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-purple-500" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-semibold mb-2", children: "🚀 Just Published: AI Governance 2026, Edge Privacy‑Preserving Personalization, and Agent Releases 2026" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "Discover cutting-edge insights on golden paths and SLOs, autonomic incident response, and private real-time edge intelligence." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16", children: displayArticles.map((article) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden", children: [
            article.image && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: article.image,
                alt: article.title,
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-4 flex gap-2", children: [
              article.newBadge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium", children: "NEW" }),
              article.trending && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium", children: "TRENDING" }),
              article.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium", children: "FEATURED" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-blue-600 font-medium", children: article.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400", children: "•" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-500 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
                article.readTime
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3 line-clamp-2", children: article.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4 line-clamp-3", children: article.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 mb-4", children: article.tags.slice(0, 3).map((tag, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full",
                children: tag
              },
              index
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(article.date).toLocaleDateString() })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "By ",
                article.author
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: `/blog/${article.slug}`,
                className: "text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group",
                children: [
                  "Read Article",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                ]
              }
            )
          ] })
        ]
      },
      article.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: "More Fresh Content Available" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Explore our complete library of articles, guides, and insights" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-3", children: "Latest Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: "AI Platform Engineering" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full", children: "3 new" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: "Quantum Computing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full", children: "2 new" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: "Edge AI" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full", children: "2 new" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: "Cybersecurity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded-full", children: "1 new" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-3", children: "Trending Topics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full", children: "AI Automation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full", children: "MLOps" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full", children: "Edge Computing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full", children: "Zero Trust" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full", children: "Platform Engineering" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-pink-100 text-pink-700 text-xs px-3 py-1 rounded-full", children: "Content AI" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "Stay Updated with Latest Insights" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100 mb-6 max-w-2xl mx-auto", children: "Get exclusive access to our latest articles, industry insights, and expert analysis delivered to your inbox weekly." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            className: "bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2",
            children: [
              "Read All Articles",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/insights",
            className: "border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105",
            children: "View Insights"
          }
        )
      ] })
    ] }) })
  ] }) });
};
var LatestArticlesShowcase_default = LatestArticlesShowcase;

const contentHighlights = [
  {
    id: 1,
    title: "🧠 Agentic Workflows Blueprint 2026",
    description: "Scoped tools, retries, and traces for reliable multi‑step agents",
    ctaText: "Read Blueprint",
    ctaLink: "/blog/agentic-workflows-blueprint-2026",
    badge: "New",
    stats: "8 min read",
    variant: "info"
  },
  {
    id: 2,
    title: "📈 Practical AI Evals That Predict Business Outcomes",
    description: "Design scorecards that correlate with revenue, CSAT, and retention",
    ctaText: "See Scorecards",
    ctaLink: "/blog/genai-evals-in-production-2025",
    badge: "Featured",
    stats: "6 min read",
    variant: "success"
  },
  {
    id: 3,
    title: "💸 Cloud FinOps Guardrails Engineers Actually Use",
    description: "Budgets, alerts, and PR gates that reduce waste 25–40%",
    ctaText: "Cut Spend",
    ctaLink: "/blog/real-time-data-pipelines-2025",
    badge: "Hot",
    stats: "8 min read",
    variant: "info"
  },
  {
    id: 4,
    title: "💸 Serverless Inference Cost Playbook 2026",
    description: "Adaptive batching, warm pools, and tiers without P95 pain",
    ctaText: "Cut Spend",
    ctaLink: "/blog/serverless-inference-cost-playbook-2026",
    badge: "New",
    stats: "9 min read",
    variant: "premium"
  },
  {
    id: 5,
    title: "🧾 ML Supply Chain SBOMs",
    description: "Provenance and attestations for datasets, models, and prompts",
    ctaText: "Read Guide",
    ctaLink: "/blog/ml-supply-chain-sbom-2026",
    badge: "Security",
    stats: "6 min read",
    variant: "warning"
  },
  {
    id: 5,
    title: "🧭 PLAYBOOK: AI Sales Copilot (90‑Day Plan)",
    description: "Workflows, guardrails, and KPIs to lift win‑rates with an AI copilot",
    ctaText: "Read Playbook",
    ctaLink: "/blog/ai-sales-copilot-playbook-2025",
    badge: "New",
    stats: "8 min read",
    variant: "info"
  },
  {
    id: 6,
    title: "🧭 NEW: AI Platform Engineering 2025",
    description: "Golden paths, eval systems, and governance for safe, fast AI delivery",
    ctaText: "Read Guide",
    ctaLink: "/blog/ai-platform-engineering-2025",
    badge: "Long‑Form",
    stats: "10 min read",
    variant: "info"
  },
  {
    id: 7,
    title: "🔍 AI Agent Observability",
    description: "Traces, policy tests, and human feedback that keep quality high",
    ctaText: "Learn How",
    ctaLink: "/blog/ai-agent-observability-2025",
    badge: "Featured",
    stats: "7 min read",
    variant: "success"
  },
  {
    id: 8,
    title: "🛡️ Secure RAG 2025",
    description: "Authorization-aware retrieval and prompt firewalls for enterprise RAG",
    ctaText: "See Patterns",
    ctaLink: "/blog/secure-rag-2025",
    badge: "Security",
    stats: "8 min read",
    variant: "warning"
  },
  {
    id: 8,
    title: "📚 New: Practical RAG in Production (2025)",
    description: "Freshness, hybrid search, and continuous evals for grounded responses.",
    ctaText: "Read Guide",
    ctaLink: "/blog/practical-rag-in-production-2025",
    badge: "New",
    stats: "8 min read",
    variant: "info"
  },
  {
    id: 9,
    title: "💸 Cloud FinOps Guardrails Engineers Use",
    description: "Budgets, alerts, and PR gates that cut waste 25–40%.",
    ctaText: "Cut Spend",
    ctaLink: "/blog/cloud-finops-guardrails-2025",
    badge: "New",
    stats: "7 min read",
    variant: "success"
  },
  {
    id: 10,
    title: "🧪 RAG That Works in Production",
    description: "Freshness, hybrid search, and evals that correlate with outcomes.",
    ctaText: "Read Guide",
    ctaLink: "/blog/practical-rag-in-production-2025",
    badge: "Trending",
    stats: "9 min read",
    variant: "premium"
  }
];
contentHighlights.push(
  {
    id: 19,
    title: "📊 Scorecards v2: Ship Fast, Stay Safe",
    description: "Lightweight platform scorecards + PR checks that predict outcomes.",
    ctaText: "Read Update",
    ctaLink: "/blog/ai-governance-scorecards-quickstart-2026-v2",
    badge: "Update",
    stats: "7 min read",
    variant: "info"
  },
  {
    id: 9,
    title: "🧠 Enterprise RAG Blueprint v2",
    description: "Hybrid search, freshness, and auth-aware retrieval with layered evals.",
    ctaText: "Read Guide",
    ctaLink: "/blog/enterprise-rag-blueprint-2025",
    badge: "New",
    stats: "9 min read",
    variant: "premium"
  },
  {
    id: 10,
    title: "💸 FinOps Scorecards Engineers Use",
    description: "Guardrails and PR checks that cut cloud waste 25–40%.",
    ctaText: "See Playbook",
    ctaLink: "/blog/finops-scorecards-2025",
    badge: "Featured",
    stats: "6 min read",
    variant: "success"
  },
  {
    id: 15,
    title: "✅ LLM Policy Tests in CI",
    description: "Policy tests on every PR keep you fast and safe.",
    ctaText: "Read How",
    ctaLink: "/blog/llm-policy-testing-2025",
    badge: "New",
    stats: "6 min read",
    variant: "warning"
  },
  {
    id: 11,
    title: "💸 Cloud FinOps Guardrails Engineers Actually Use",
    description: "Budgets, alerts, and PR gates that reduce waste 25–40%",
    ctaText: "Cut Spend",
    ctaLink: "/blog/cloud-finops-guardrails-2025",
    badge: "Hot",
    stats: "6 min read",
    variant: "info"
  },
  {
    id: 15,
    title: "✅ LLM Policy Tests in CI (New Article)",
    description: "Automate governance—policy tests on every PR keep you fast and safe.",
    ctaText: "Read How",
    ctaLink: "/blog/llm-policy-testing-2025",
    badge: "New",
    stats: "6 min read",
    variant: "warning"
  },
  {
    id: 16,
    title: "🧰 GenAI Evals CI Service",
    description: "Quality gates, canaries, and dashboards to ship LLM features weekly.",
    ctaText: "Enable Now",
    ctaLink: "/services/AIAutonomousOperations",
    badge: "New Service",
    stats: "$199/mo",
    variant: "success"
  },
  {
    id: 12,
    title: "📈 Practical AI Evals That Predict Business Outcomes",
    description: "Scorecards that correlate with revenue, CSAT, and retention",
    ctaText: "See Scorecards",
    ctaLink: "/blog/practical-evals-scorecards-2025",
    badge: "Featured",
    stats: "6 min read",
    variant: "success"
  },
  {
    id: 13,
    title: "🧰 Serverless Inference Cost Playbook",
    description: "Adaptive batching, warm pools, and quality tiers without P95 pain",
    ctaText: "Optimize",
    ctaLink: "/blog/serverless-inference-cost-playbook-2025",
    badge: "Guide",
    stats: "7 min read",
    variant: "success"
  },
  {
    id: 14,
    title: "🏗️ AI Platform Architecture",
    description: "Build enterprise-grade AI systems that scale from data pipelines to model serving",
    ctaText: "Explore",
    ctaLink: "/services/AI-Platform-Architecture",
    badge: "New Service",
    stats: "Production Ready",
    variant: "premium"
  },
  {
    id: 17,
    title: "🛠️ AI SRE Blueprints 2026",
    description: "Error budgets, rollback triggers, and live traces for reliable AI",
    ctaText: "Read Blueprint",
    ctaLink: "/blog/ai-sre-blueprints-2026",
    badge: "New",
    stats: "8 min read",
    variant: "info"
  },
  {
    id: 18,
    title: "🔒 Privacy‑First A/B Testing",
    description: "Insights without PII using scoped IDs and DP noise",
    ctaText: "Learn How",
    ctaLink: "/blog/privacy-first-ab-testing-2026",
    badge: "New",
    stats: "7 min read",
    variant: "success"
  }
);
contentHighlights.unshift(
  {
    id: 22,
    title: "🧠 Agentic Observability Scorecards 2026",
    description: "Traces linked to KPIs—scorecards that prevent regressions without slowing teams",
    ctaText: "Read Article",
    ctaLink: "/blog/agentic-observability-scorecards-2026",
    badge: "New",
    stats: "7 min read",
    variant: "info"
  }
);
const LatestContentBanner = ({
  className = "",
  variant = "default",
  autoRotate = true,
  rotationInterval = 8e3
}) => {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [isVisible, setIsVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!autoRotate) return;
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % contentHighlights.length
      );
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval]);
  const handleDismiss = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;
  const currentContent = contentHighlights[currentIndex];
  const variantStyles = {
    default: "bg-gradient-to-r from-blue-600 to-purple-600",
    success: "bg-gradient-to-r from-green-600 to-emerald-600",
    warning: "bg-gradient-to-r from-orange-600 to-red-600",
    info: "bg-gradient-to-r from-cyan-600 to-blue-600",
    premium: "bg-gradient-to-r from-purple-600 to-pink-600"
  };
  const getVariantStyle = (contentVariant) => {
    switch (contentVariant) {
      case "success":
        return "bg-gradient-to-r from-green-600 to-emerald-600";
      case "warning":
        return "bg-gradient-to-r from-orange-600 to-red-600";
      case "info":
        return "bg-gradient-to-r from-cyan-600 to-blue-600";
      case "premium":
        return "bg-gradient-to-r from-purple-600 to-pink-600";
      default:
        return variantStyles[variant];
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative overflow-hidden ${getVariantStyle(currentContent.variant)} ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-white animate-pulse" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-white animate-bounce" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-6 h-6 text-white animate-pulse" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white truncate", children: currentContent.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-white/20 text-white text-xs rounded-full font-medium backdrop-blur-sm", children: currentContent.badge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/90 mb-2", children: currentContent.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-white/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3" }),
                currentContent.stats
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                "Updated today"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 ml-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: currentContent.ctaLink,
              className: "bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 whitespace-nowrap flex items-center gap-2 shadow-lg",
              children: [
                currentContent.ctaText,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleDismiss,
              className: "text-white/80 hover:text-white transition-colors p-1",
              "aria-label": "Dismiss banner",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
            }
          )
        ] })
      ] }),
      autoRotate && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center space-x-2 mt-3", children: contentHighlights.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setCurrentIndex(index),
          className: `w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"}`,
          "aria-label": `Go to content ${index + 1}`
        },
        index
      )) })
    ] }) })
  ] });
};
var LatestContentBanner_default = LatestContentBanner;

function ModernFeatures() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-label": "Modern Features" });
}

const NewContentAnnouncement = () => {
  const [isVisible, setIsVisible] = reactExports.useState(true);
  if (!isVisible) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]` }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 py-8 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "FRESH CONTENT ALERT" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-green-500/20 px-2 py-1 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-green-400 rounded-full animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-green-200", children: "LIVE" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-2", children: "🚀 Just Published: 8 Revolutionary Articles + 6 New AI Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100 mb-4 max-w-3xl", children: "Discover cutting-edge insights on AI Platform Engineering, Enterprise RAG v2, Quantum Computing, Edge AI, Zero Trust Security, and our new AI Autonomous Operations platform." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Published Jan 17, 2025" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "15 min total read time" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Trending in AI & Tech" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium", children: "AI Platform Engineering" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium", children: "Quantum Computing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium", children: "Edge AI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium", children: "Zero Trust" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium", children: "AI Automation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blog",
              className: "bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2",
              children: [
                "Read Latest Articles",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/services",
              className: "border border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2",
              children: [
                "Explore New Services",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setIsVisible(false),
          className: "ml-4 p-2 hover:bg-white/20 rounded-full transition-colors",
          "aria-label": "Close announcement",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }) })
  ] });
};
var NewContentAnnouncement_default = NewContentAnnouncement;

const NewContentPromoBanner = ({
  variant = "premium",
  className = ""
}) => {
  const [isDismissed, setIsDismissed] = reactExports.useState(false);
  const variants = {
    info: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-blue-400/30",
    premium: "bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-400/30",
    success: "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-green-400/30",
    warning: "bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-400/30"
  };
  const featuredContent = [
    {
      title: "AI Safety Budgets 2026",
      description: "Guardrails wired to KPIs, approvals, rollbacks",
      icon: Shield,
      link: "/blog/ai-safety-budgets-2026",
      category: "AI Strategy"
    },
    {
      title: "Edge Privacy for ML 2026",
      description: "On‑device filters and scoped identifiers",
      icon: Cloud,
      link: "/blog/edge-privacy-ml-2026",
      category: "Edge"
    },
    {
      title: "Agent Evals in Prod 2026",
      description: "Online checks that predict outcomes",
      icon: TrendingUp,
      link: "/blog/agent-evals-in-prod-2026",
      category: "GenAI"
    },
    {
      title: "Cost‑Aware Inference 2026",
      description: "Warm pools and quality tiers under SLAs",
      icon: Zap,
      link: "/blog/ai-cost-aware-inference-2026",
      category: "GenAI"
    },
    {
      title: "Platform Golden Paths 2026",
      description: "Paved roads that move KPIs",
      icon: TrendingUp,
      link: "/blog/platform-golden-paths-kpis-2026",
      category: "Platform"
    },
    {
      title: "Golden Paths that Move KPIs",
      description: "Platform engineering that pays",
      icon: TrendingUp,
      link: "/blog/platform-golden-paths-kpis-2026",
      category: "Platform"
    },
    {
      title: "Quality‑Tiered GenAI Routing 2026",
      description: "Control cost with tiers, caches, and eval signals",
      icon: Zap,
      link: "/blog/genai-routing-under-budgets-2026",
      category: "GenAI"
    },
    {
      title: "On‑Device Agents 2026",
      description: "Offline‑capable tools, private caches, safe fallbacks",
      icon: Cloud,
      link: "/blog/on-device-agents-offline-tools-2026",
      category: "Edge"
    },
    {
      title: "Zero‑Trust Observability 2026",
      description: "Signed traces and least‑privilege telemetry",
      icon: Shield,
      link: "/blog/zero-trust-observability-2026",
      category: "Security"
    },
    {
      title: "AI Incident Response Playbooks",
      description: "Contain incidents in under 60 seconds",
      icon: TrendingUp,
      link: "/blog/ai-incident-response-playbooks-2025",
      category: "Security"
    },
    {
      title: "Edge Privacy Telemetry 2026",
      description: "Scoped IDs and on‑device redaction",
      icon: Brain,
      link: "/blog/edge-privacy-telemetry-2026",
      category: "Observability"
    }
  ];
  if (isDismissed) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${variants[variant]} ${className} relative overflow-hidden`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-32 h-32 bg-white rounded-full animate-pulse" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full animate-bounce" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full animate-ping" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-6 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold", children: "🚀 NEW CONTENT ALERT" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 animate-spin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2", children: "Just Published: New Guides for 2026" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 mb-4 text-sm", children: "Discover fresh insights on on‑device agents, GenAI cost controls, secure tool marketplaces, and privacy‑first observability." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3 mb-4", children: featuredContent.map((item, index) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: item.link,
              className: "bg-white/10 backdrop-blur-sm rounded-lg p-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 group",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-white/80" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-white/80", children: item.category })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-white text-sm group-hover:text-yellow-300 transition-colors", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-white/70 mt-1 line-clamp-2", children: item.description })
              ]
            },
            index
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blog",
              className: "bg-white text-purple-600 hover:bg-white/90 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 inline-flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
                "Read All Articles",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/case-studies",
              className: "border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 inline-flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4" }),
                "View Case Studies"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/services",
              className: "border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 inline-flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4" }),
                "Explore Services"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 mt-4 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "13" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Articles" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Case Studies" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "50+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Expert Insights" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setIsDismissed(true),
          className: "ml-4 p-2 hover:bg-white/10 rounded-full transition-colors",
          "aria-label": "Dismiss banner",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
        }
      )
    ] }) })
  ] });
};
var NewContentPromoBanner_default = NewContentPromoBanner;

const newBlogPosts = [
  {
    id: "platform-engineering-scorecards-2026",
    slug: "platform-engineering-scorecards-2026",
    title: "Platform Engineering Scorecards 2026: Golden Paths that Drive Outcomes",
    description: "Adoption, golden-path TTFX, and SLOs as leading indicators of platform ROI.",
    excerpt: "A pragmatic scorecard system engineers actually use—wired to shipped value.",
    author: "Zion Tech Group Team",
    date: "2025-10-13",
    category: "Platform Engineering",
    tags: ["Scorecards", "Golden Paths", "ROI", "Platform"],
    featured: true,
    readTime: "8 min read",
    image: "/images/platform-engineering-scorecards-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "genai-routing-under-budgets-2026",
    slug: "genai-routing-under-budgets-2026",
    title: "Quality‑Tiered GenAI Routing: SLAs Without Bill Shock",
    description: "Route prompts across model tiers with budgets, caches, and eval signals to control cost.",
    excerpt: "Keep experience high under tight budgets with deterministic routing and caches.",
    author: "Zion Tech Group Team",
    date: "2025-10-13",
    category: "AI Operations",
    tags: ["Budgets", "Quality Tiers", "Routing"],
    featured: true,
    readTime: "6 min read",
    image: "/images/genai-routing-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "secure-ml-supply-chain-2026",
    slug: "secure-ml-supply-chain-2026",
    title: "Secure ML Supply Chain 2026: SBOMs, Lineage, and Policy Gates",
    description: "Continuous SBOMs for models, datasets, and prompts with attestations and CI policy checks.",
    excerpt: "A practical guide to securing the ML supply chain with provenance and guardrails.",
    author: "Zion Tech Group Team",
    date: "2025-10-13",
    category: "AI Security",
    tags: ["SBOM", "Supply Chain", "Security"],
    featured: true,
    readTime: "7 min read",
    image: "/images/secure-ml-supply-chain-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-incident-response-playbooks-2025",
    slug: "ai-incident-response-playbooks-2025",
    title: "AI Incident Response Playbooks: Contain in <60s with Confidence",
    description: "From detections to safe actions: policy-tested playbooks and rollback-ready automations.",
    excerpt: "Design incident playbooks with budgeted actions, approvals, and telemetry that close the loop fast.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Cybersecurity",
    tags: ["IR", "Automation", "Guardrails"],
    featured: true,
    readTime: "7 min read",
    image: "/images/ai-incident-response-playbooks-2025.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "privacy-preserving-analytics-2025",
    slug: "privacy-preserving-analytics-2025",
    title: "Privacy‑Preserving Analytics: Ship Insights Without PII Risk",
    description: "On-device redaction, scoped IDs, and DP noise for compliant, decision-grade telemetry.",
    excerpt: "A practical blueprint for analytics that respect privacy while keeping signals rich.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Observability",
    tags: ["Privacy", "Telemetry", "Compliance"],
    featured: true,
    readTime: "8 min read",
    image: "/images/privacy-preserving-analytics-2025.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "on-device-agents-2026",
    slug: "on-device-agents-2026",
    title: "On‑Device Agents 2026: Private Tools That Work Offline",
    description: "Ship fast, privacy‑first assistants with on‑device tools, local caches, and deterministic fallbacks.",
    excerpt: "Design assistants that keep working with limited connectivity and strict privacy requirements.",
    author: "Zion Tech Group Team",
    date: "2025-10-11",
    category: "Edge Computing",
    tags: ["Agents", "Edge", "Privacy"],
    featured: true,
    readTime: "7 min read",
    image: "/images/on-device-agents-2026.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "genai-budgets-and-quality-tiers-2026",
    slug: "genai-budgets-and-quality-tiers-2026",
    title: "GenAI Budgets & Quality Tiers: Control Cost Without Hurting UX",
    description: "Tier models, cache prompts, and budget traffic by SLA to cut spend 30–60%.",
    excerpt: "Practical controls to keep GenAI bills predictable while preserving experience.",
    author: "Zion Tech Group Team",
    date: "2025-10-11",
    category: "AI Operations",
    tags: ["FinOps", "Quality Tiers", "Budgets"],
    featured: true,
    readTime: "6 min read",
    image: "/images/genai-budgets-quality-tiers.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "secure-tools-marketplace-2026",
    slug: "secure-tools-marketplace-2026",
    title: "Secure Tools Marketplace: Vetting, Sandboxes, and Attestations",
    description: "Bring third‑party tools safely with policy checks, sandboxes, and signed attestations.",
    excerpt: "A safe path to ecosystem extensibility without compromising security or velocity.",
    author: "Zion Tech Group Team",
    date: "2025-10-11",
    category: "Security",
    tags: ["Security", "Supply Chain", "Sandboxing"],
    featured: false,
    readTime: "8 min read",
    image: "/images/secure-tools-marketplace.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "privacy-first-observability-2026",
    slug: "privacy-first-observability-2026",
    title: "Privacy‑First Observability: User‑Centric Traces Without PII Leaks",
    description: "Implement privacy filters, scoped IDs, and retention policies that keep signals rich and safe.",
    excerpt: "Observability patterns that balance insight with compliance across stacks.",
    author: "Zion Tech Group Team",
    date: "2025-10-10",
    category: "Observability",
    tags: ["Privacy", "Tracing", "Compliance"],
    featured: false,
    readTime: "7 min read",
    image: "/images/privacy-first-observability.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-cost-aware-routing-2025",
    slug: "ai-cost-aware-routing-2025",
    title: "Cost-Aware Routing for AI: Cut Inference Spend 40–70%",
    description: "A practical playbook to reduce AI inference costs with adaptive batching, token budgeting, and smart model routing.",
    excerpt: "Reduce LLM costs 40–70% without hurting quality using adaptive batching, warm pools, and intent-based routing.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "AI Engineering",
    tags: ["Inference", "Cost Optimization", "Routing", "LLM", "Budgeting"],
    featured: true,
    readTime: "10 min read",
    image: "/images/ai-cost-aware-routing.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "privacy-first-telemetry-2025",
    slug: "privacy-first-telemetry-2025",
    title: "Privacy‑First Telemetry: Observability Without the Data Risk",
    description: "Blueprint for collecting actionable product telemetry with on-device redaction, differential privacy, and policy enforcement.",
    excerpt: "Ship rich analytics while protecting users with on-device redaction, DP noise, and policy‑as‑code.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Security & Privacy",
    tags: ["Privacy", "Telemetry", "Differential Privacy", "Security", "Compliance"],
    featured: true,
    readTime: "9 min read",
    image: "/images/privacy-first-telemetry.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "agent-safety-budgets-2025",
    slug: "agent-safety-budgets-2025",
    title: "Agent Safety Budgets: Guardrails That Actually Ship",
    description: "How to constrain multi‑step agents with budgets for tokens, tools, time and risk—wired to KPIs.",
    excerpt: "Budget tokens, tools and time per task; stop prompt runaways; ship agents with confidence.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Agent Systems",
    tags: ["Agents", "Safety", "Governance", "KPIs", "Prompting"],
    featured: true,
    readTime: "8 min read",
    image: "/images/agent-safety-budgets.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-autonomous-infrastructure-2025",
    slug: "ai-autonomous-infrastructure-2025",
    title: "AI Autonomous Infrastructure: Self-Healing Systems That Scale",
    description: "Revolutionary AI infrastructure that automatically heals, optimizes, and scales without human intervention. Learn how to build truly autonomous systems.",
    excerpt: "Discover the future of infrastructure management with AI-powered autonomous systems that can self-heal, self-optimize, and self-scale in real-time.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "AI Infrastructure",
    tags: ["Autonomous Systems", "Infrastructure", "AI", "Self-Healing", "Scalability"],
    featured: true,
    readTime: "12 min read",
    image: "/images/ai-autonomous-infrastructure.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "quantum-ai-hybrid-computing-2025",
    slug: "quantum-ai-hybrid-computing-2025",
    title: "Quantum-AI Hybrid Computing: The Next Frontier of Business Intelligence",
    description: "Explore how quantum computing combined with AI is revolutionizing business intelligence, optimization, and decision-making processes.",
    excerpt: "Quantum-AI hybrid systems are unlocking unprecedented computational power for business optimization, machine learning, and complex problem solving.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "Quantum Computing",
    tags: ["Quantum Computing", "AI", "Business Intelligence", "Optimization", "Hybrid Systems"],
    featured: true,
    readTime: "15 min read",
    image: "/images/quantum-ai-hybrid.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-cybersecurity-zero-trust-2025",
    slug: "ai-cybersecurity-zero-trust-2025",
    title: "AI-Powered Zero Trust Cybersecurity: Next-Generation Threat Protection",
    description: "Advanced AI-driven zero trust security architecture that provides comprehensive protection against evolving cyber threats with real-time adaptation.",
    excerpt: "Learn how AI-powered zero trust security creates dynamic, adaptive protection that evolves with threats and provides comprehensive enterprise security.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "Cybersecurity",
    tags: ["Zero Trust", "AI Security", "Threat Protection", "Enterprise Security", "Real-time Defense"],
    featured: true,
    readTime: "11 min read",
    image: "/images/ai-zero-trust-security.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-content-generation-automation-2025",
    slug: "ai-content-generation-automation-2025",
    title: "AI Content Generation Automation: Scaling Content Production 10x",
    description: "Revolutionary AI content automation platform that generates high-quality, brand-consistent content at scale while maintaining SEO optimization.",
    excerpt: "Discover how AI content generation automation can transform your content strategy, producing 10x more content while maintaining quality and brand consistency.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "Content AI",
    tags: ["Content Generation", "AI Automation", "SEO", "Brand Consistency", "Content Strategy"],
    featured: false,
    readTime: "9 min read",
    image: "/images/ai-content-automation.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "ai-customer-experience-transformation-2025",
    slug: "ai-customer-experience-transformation-2025",
    title: "AI Customer Experience Transformation: Personalization at Scale",
    description: "Transform customer experiences with AI-powered personalization, predictive analytics, and intelligent automation across all touchpoints.",
    excerpt: "Learn how AI is revolutionizing customer experience through intelligent personalization, predictive analytics, and seamless automation.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "Customer Experience",
    tags: ["Customer Experience", "AI Personalization", "Predictive Analytics", "Automation", "Customer Journey"],
    featured: false,
    readTime: "8 min read",
    image: "/images/ai-customer-experience.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-supply-chain-optimization-2025",
    slug: "ai-supply-chain-optimization-2025",
    title: "AI Supply Chain Optimization: Intelligent Logistics and Predictive Analytics",
    description: "Revolutionary AI solutions for supply chain optimization, featuring predictive analytics, intelligent routing, and automated inventory management.",
    excerpt: "Explore how AI is transforming supply chain management with predictive analytics, intelligent optimization, and automated logistics solutions.",
    author: "Zion Tech Group Team",
    date: "2025-01-17",
    category: "Supply Chain",
    tags: ["Supply Chain", "AI Optimization", "Predictive Analytics", "Logistics", "Inventory Management"],
    featured: false,
    readTime: "10 min read",
    image: "/images/ai-supply-chain.jpg",
    newBadge: true,
    trending: false
  }
];

const newCaseStudies = [
  {
    id: "privacy-first-observability-rollout",
    slug: "privacy-first-observability-rollout",
    title: "SaaS Leader: Privacy‑First Observability Without PII Leaks",
    description: "Rolled out user‑centric traces with scoped IDs, on‑device redaction, and strict retention—keeping signals rich and compliant.",
    excerpt: "From blind spots to insight: privacy‑safe observability lifted issue resolution by 58%.",
    company: "InsightCloud",
    industry: "SaaS",
    challenge: "PII risks blocked telemetry adoption and slowed incident response.",
    solution: "Scoped identifiers, inline redaction, policy‑as‑code retention, and least‑privilege access.",
    result: "58% faster RCA, 22% lower incident volume, 0 PII leaks",
    metrics: {
      primary: "58% Faster RCA",
      secondary: "22% Fewer Incidents",
      tertiary: "0 PII Leaks"
    },
    featured: true,
    date: "2025-10-10",
    tags: ["Observability", "Privacy", "Compliance", "Security"],
    testimonial: {
      quote: "We unlocked actionable signals without risk—the team ships faster and sleeps better.",
      author: "Nadine Brooks",
      position: "VP Engineering, InsightCloud"
    },
    image: "/images/case-privacy-first-observability.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "fintech-ondevice-agents",
    slug: "fintech-ondevice-agents",
    title: "Fintech Unicorn: On‑Device Agents Slash Latency to 90ms",
    description: "A consumer fintech moved sensitive workflows on‑device, achieving sub‑100ms prompts and 35% cost savings with edge LLM caching.",
    excerpt: "Edge inference and local tools delivered 90ms median prompts and reduced cloud spend by 35%.",
    company: "NovaWallet",
    industry: "Fintech",
    challenge: "High latency and privacy concerns for PII‑heavy assistant flows",
    solution: "On‑device agents with encrypted caches and intent‑aware tool routing",
    result: "90ms median latency, 35% cost reduction, 99.99% offline reliability",
    metrics: {
      primary: "90ms Median Latency",
      secondary: "35% Cost Reduction",
      tertiary: "99.99% Offline"
    },
    featured: true,
    date: "2025-09-29",
    tags: ["Edge AI", "Agents", "Privacy", "Latency", "Caching"],
    testimonial: {
      quote: "On‑device agents changed the game for us—fast, private, and reliable.",
      author: "Amira Patel",
      position: "VP Product, NovaWallet"
    },
    image: "/images/case-fintech-ondevice.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "retail-serverless-inference-playbook",
    slug: "retail-serverless-inference-playbook",
    title: "Global Retailer: Serverless Inference Cost Cut by 62%",
    description: "A top retailer implemented cost‑aware routing and warm pools, reducing inference spend by 62% while improving CSAT.",
    excerpt: "Cost‑aware routing + adaptive batching reduced LLM costs 62% with higher QoS.",
    company: "RetailMax",
    industry: "Retail & E‑commerce",
    challenge: "Exploding inference bills and erratic tail latencies",
    solution: "Adaptive batching, warm pools, intent‑based model routing, prompt compression",
    result: "62% cost reduction, P95 −48%, CSAT +12pts",
    metrics: {
      primary: "62% Cost Reduction",
      secondary: "−48% P95 Latency",
      tertiary: "+12 CSAT"
    },
    featured: true,
    date: "2025-09-29",
    tags: ["Serverless", "Inference", "Routing", "Cost", "SLA"],
    testimonial: {
      quote: "We saved millions while customers got faster answers—win‑win.",
      author: "Lena Ortiz",
      position: "Director, Platform Engineering"
    },
    image: "/images/case-retail-inference.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "global-retail-ai-transformation",
    slug: "global-retail-ai-transformation",
    title: "Global Retail Giant: AI-Powered Customer Experience Revolution",
    description: "How a Fortune 500 retail company transformed customer experience and increased revenue by 45% using AI-powered personalization and autonomous operations.",
    excerpt: "A major retail corporation achieved 45% revenue growth and 90% customer satisfaction through AI-powered personalization and autonomous infrastructure management.",
    company: "Global Retail Corp",
    industry: "Retail & E-commerce",
    challenge: "Declining customer satisfaction and stagnant revenue growth in competitive market",
    solution: "AI-powered customer experience platform with autonomous infrastructure management",
    result: "45% revenue increase, 90% customer satisfaction, 75% operational efficiency gain",
    metrics: {
      primary: "45% Revenue Increase",
      secondary: "90% Customer Satisfaction",
      tertiary: "75% Efficiency Gain"
    },
    featured: true,
    date: "2025-01-17",
    tags: ["AI Transformation", "Customer Experience", "Retail", "Personalization", "Revenue Growth"],
    testimonial: {
      quote: "Zion Tech Group's AI solutions transformed our entire customer experience. The results exceeded our wildest expectations.",
      author: "Jennifer Martinez",
      position: "Chief Digital Officer, Global Retail Corp"
    },
    image: "/images/global-retail-case-study.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "healthcare-ai-autonomous-operations",
    slug: "healthcare-ai-autonomous-operations",
    title: "Healthcare Provider: AI Autonomous Operations Success Story",
    description: "Leading healthcare provider achieved 99.9% system uptime and 60% cost reduction through AI autonomous infrastructure management.",
    excerpt: "A major healthcare provider implemented AI autonomous operations, achieving 99.9% uptime and 60% infrastructure cost reduction while improving patient care.",
    company: "MediCare Systems",
    industry: "Healthcare",
    challenge: "Frequent system outages and high infrastructure costs affecting patient care",
    solution: "AI autonomous operations platform with self-healing infrastructure",
    result: "99.9% uptime, 60% cost reduction, 40% faster patient processing",
    metrics: {
      primary: "99.9% System Uptime",
      secondary: "60% Cost Reduction",
      tertiary: "40% Faster Processing"
    },
    featured: true,
    date: "2025-01-17",
    tags: ["Healthcare", "Autonomous Operations", "Infrastructure", "Cost Optimization", "Patient Care"],
    testimonial: {
      quote: "The AI autonomous operations system has revolutionized our infrastructure reliability. We can now focus entirely on patient care.",
      author: "Dr. Robert Chen",
      position: "CTO, MediCare Systems"
    },
    image: "/images/healthcare-autonomous-case-study.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "financial-services-quantum-ai",
    slug: "financial-services-quantum-ai",
    title: "Investment Bank: Quantum-AI Hybrid Computing Breakthrough",
    description: "Major investment bank leveraged quantum-AI hybrid computing to achieve 300% faster risk analysis and 85% improvement in trading algorithms.",
    excerpt: "A leading investment bank implemented quantum-AI hybrid computing, achieving 300% faster risk analysis and 85% improvement in algorithmic trading performance.",
    company: "Quantum Capital Partners",
    industry: "Financial Services",
    challenge: "Complex risk analysis taking days and suboptimal trading algorithm performance",
    solution: "Quantum-AI hybrid computing platform for risk analysis and trading optimization",
    result: "300% faster risk analysis, 85% algorithm improvement, 200% ROI",
    metrics: {
      primary: "300% Faster Analysis",
      secondary: "85% Algorithm Improvement",
      tertiary: "200% ROI"
    },
    featured: true,
    date: "2025-01-17",
    tags: ["Financial Services", "Quantum Computing", "AI", "Risk Analysis", "Algorithmic Trading"],
    testimonial: {
      quote: "The quantum-AI hybrid system has given us an unprecedented competitive advantage in the financial markets.",
      author: "Michael Thompson",
      position: "Head of Quantitative Research, Quantum Capital Partners"
    },
    image: "/images/quantum-finance-case-study.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "manufacturing-ai-automation",
    slug: "manufacturing-ai-automation",
    title: "Manufacturing Leader: AI Content Generation and Process Automation",
    description: "Leading manufacturer achieved 80% reduction in content creation time and 50% improvement in process efficiency through AI automation.",
    excerpt: "A major manufacturer transformed operations with AI content generation and process automation, achieving 80% faster content creation and 50% efficiency gains.",
    company: "Precision Manufacturing Ltd",
    industry: "Manufacturing",
    challenge: "Slow content creation for training materials and inefficient manufacturing processes",
    solution: "AI content generation platform and intelligent process automation",
    result: "80% faster content creation, 50% process efficiency, 70% training time reduction",
    metrics: {
      primary: "80% Faster Content Creation",
      secondary: "50% Process Efficiency",
      tertiary: "70% Training Time Reduction"
    },
    featured: false,
    date: "2025-01-17",
    tags: ["Manufacturing", "Content Generation", "Process Automation", "Training", "Efficiency"],
    testimonial: {
      quote: "AI automation has revolutionized our manufacturing processes and training programs. The results are remarkable.",
      author: "Sarah Williams",
      position: "Operations Director, Precision Manufacturing Ltd"
    },
    image: "/images/manufacturing-ai-case-study.jpg",
    newBadge: true,
    trending: false
  },
  {
    id: "supply-chain-ai-optimization",
    slug: "supply-chain-ai-optimization",
    title: "Logistics Company: AI Supply Chain Optimization Success",
    description: "Major logistics provider achieved 65% reduction in delivery times and 40% cost savings through AI-powered supply chain optimization.",
    excerpt: "A leading logistics company implemented AI supply chain optimization, achieving 65% faster deliveries and 40% cost reduction while improving customer satisfaction.",
    company: "Global Logistics Solutions",
    industry: "Logistics & Supply Chain",
    challenge: "Inefficient routing and high operational costs affecting delivery performance",
    solution: "AI-powered supply chain optimization with predictive analytics",
    result: "65% faster deliveries, 40% cost reduction, 95% on-time delivery rate",
    metrics: {
      primary: "65% Faster Deliveries",
      secondary: "40% Cost Reduction",
      tertiary: "95% On-Time Delivery"
    },
    featured: false,
    date: "2025-01-17",
    tags: ["Logistics", "Supply Chain", "AI Optimization", "Predictive Analytics", "Cost Reduction"],
    testimonial: {
      quote: "The AI optimization system has transformed our logistics operations. We're now the fastest and most cost-effective in the industry.",
      author: "David Rodriguez",
      position: "CEO, Global Logistics Solutions"
    },
    image: "/images/logistics-ai-case-study.jpg",
    newBadge: true,
    trending: false
  }
];

const NewContentShowcase = () => {
  const latestPosts = newBlogPosts.slice(0, 3);
  const latestCaseStudies = newCaseStudies.slice(0, 3);
  const latestServices = newServices.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-40 left-1/2 w-60 h-60 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float", style: { animationDelay: "4s" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 animate-fade-in border border-zion-cyan/30 shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-2 animate-pulse" }),
          "Fresh Content & Revolutionary Services",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 ml-2 animate-pulse" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-zion-cyan to-zion-blue-light bg-clip-text text-transparent", children: "Latest Innovations" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto animate-fade-in", children: "Discover our newest AI solutions, breakthrough case studies, and cutting-edge content that's transforming businesses worldwide." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-white mb-2", children: "🚀 Revolutionary Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light", children: "Breakthrough AI solutions that are reshaping industries" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "text-zion-cyan hover:text-white transition-colors flex items-center gap-2", children: [
            "View All Services",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: latestServices.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card group hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl", children: service.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              service.newBadge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold", children: "NEW" }),
              service.trending && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3" }),
                "TRENDING"
              ] }),
              service.pricing.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold", children: "POPULAR" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-white mb-3", children: service.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-4 text-sm", children: service.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 mb-4", children: service.metrics.slice(0, 3).map((metric, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-zion-cyan", children: metric.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-zion-slate", children: metric.label })
          ] }, index)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: service.ctaLink || `/services/${service.slug}`,
                className: "flex-1 bg-zion-cyan text-zion-blue-dark hover:bg-zion-blue-light px-4 py-2 rounded-lg font-semibold text-center transition-colors text-sm",
                children: service.cta.primary
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: `/services/${service.slug}`,
                className: "border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-4 py-2 rounded-lg font-semibold text-center transition-colors text-sm",
                children: "Learn More"
              }
            )
          ] })
        ] }) }, service.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-white mb-2", children: "📚 Latest Articles" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light", children: "Fresh insights on AI, quantum computing, and cybersecurity" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "text-zion-cyan hover:text-white transition-colors flex items-center gap-2", children: [
            "View All Articles",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: latestPosts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "card group hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-zion-cyan bg-zion-cyan/20 px-2 py-1 rounded", children: post.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
              post.newBadge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold", children: "NEW" }),
              post.trending && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3" }),
                "HOT"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-white mb-3", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-4 text-sm", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm text-zion-slate mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              post.readTime
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(post.date).toLocaleDateString() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `/blog/${post.slug}`,
              className: "text-zion-cyan hover:text-white font-semibold flex items-center gap-2 transition-colors",
              children: [
                "Read Article",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] }) }, post.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-white mb-2", children: "🏆 Success Stories" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light", children: "Real results from companies using our AI solutions" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/case-studies", className: "text-zion-cyan hover:text-white transition-colors flex items-center gap-2", children: [
            "View All Case Studies",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: latestCaseStudies.map((study) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card group hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-zion-cyan bg-zion-cyan/20 px-2 py-1 rounded", children: study.industry }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
              study.newBadge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold", children: "NEW" }),
              study.trending && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3" }),
                "FEATURED"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold text-white mb-3", children: study.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-4 text-sm", children: study.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-zion-cyan", children: study.metrics.primary }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-zion-slate", children: "Primary Result" })
            ] }),
            study.metrics.secondary && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-zion-blue-light", children: study.metrics.secondary }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-zion-slate", children: "Secondary Result" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `/case-studies/${study.slug}`,
              className: "text-zion-cyan hover:text-white font-semibold flex items-center gap-2 transition-colors",
              children: [
                "View Case Study",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          )
        ] }) }, study.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Ready to Transform Your Business?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-6 max-w-2xl mx-auto", children: "Join the companies already achieving breakthrough results with our AI solutions. Start your transformation journey today." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "bg-zion-cyan text-zion-blue-dark hover:bg-zion-blue-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5" }),
                "Start Your Journey"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/services",
              className: "border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105",
              children: "Explore Services"
            }
          )
        ] })
      ] }) })
    ] })
  ] });
};
var NewContentShowcase_default = NewContentShowcase;

const newContent2025 = [
  {
    id: "ai-autonomous-infrastructure-2025",
    title: "AI Autonomous Infrastructure: The Future of Self-Managing Systems",
    description: "Discover how AI-powered autonomous infrastructure is revolutionizing enterprise operations with self-healing, self-optimizing, and self-scaling capabilities.",
    excerpt: "Transform your infrastructure management with AI that thinks, learns, and adapts. Zero-touch operations are no longer a dream—they're here.",
    type: "blog",
    category: "AI Operations",
    tags: ["Autonomous Infrastructure", "AI Operations", "Self-Healing", "Automation"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-20",
    readTime: "12 min read",
    author: "Dr. Sarah Chen",
    image: "/images/ai-autonomous-infrastructure.jpg",
    url: "/blog/ai-autonomous-infrastructure-2025",
    cta: {
      primary: "Read Full Article",
      secondary: "Download Whitepaper"
    },
    metrics: [
      {
        label: "Cost Reduction",
        value: "85%",
        description: "Average operational savings"
      },
      {
        label: "Uptime Improvement",
        value: "99.99%",
        description: "Achieved with autonomous systems"
      },
      {
        label: "Response Time",
        value: "< 15 seconds",
        description: "Issue detection and resolution"
      }
    ],
    testimonial: {
      quote: "AI Autonomous Infrastructure transformed our operations completely. We went from constant firefighting to zero-touch operations.",
      author: "Michael Rodriguez",
      company: "CloudScale Enterprises"
    }
  },
  {
    id: "serverless-ai-inference-cost-playbook-2025",
    title: "Serverless AI Inference Cost Playbook (2025)",
    description: "Cut model serving costs by 40–70% with adaptive batching, warm pools, and precision routing.",
    excerpt: "A hands-on guide to reduce inference costs while keeping p95 low and reliability high.",
    type: "blog",
    category: "Engineering",
    tags: ["FinOps", "Inference", "Serverless", "Latency"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-09-29",
    readTime: "11 min read",
    author: "Zion Tech Group",
    image: "/images/serverless-inference-cost-playbook.jpg",
    url: "/blog/serverless-ai-inference-cost-playbook-2025",
    cta: {
      primary: "Read Playbook",
      secondary: "Get Cost Review"
    },
    metrics: [
      { label: "Cost Reduction", value: "40–70%", description: "Observed savings range" },
      { label: "Latency Target", value: "< 250ms p95", description: "Interactive UX" },
      { label: "Reliability", value: "> 99.9%", description: "SLO adherence" }
    ]
  },
  {
    id: "agent-safety-budgets-2025",
    title: "Agent Safety Budgets (2025): Practical Guardrails That Ship",
    description: "Constrain autonomous agents with KPI-linked safety, privacy, and cost budgets.",
    excerpt: "Policy-as-code, runtime enforcement, and auditable telemetry to ship safe AI.",
    type: "blog",
    category: "AI Governance",
    tags: ["Safety", "Compliance", "Privacy", "Agents"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-09-29",
    readTime: "9 min read",
    author: "Zion Tech Group",
    image: "/images/agent-safety-budgets.jpg",
    url: "/blog/agent-safety-budgets-2025",
    cta: {
      primary: "Read Article",
      secondary: "Request Workshop"
    },
    metrics: [
      { label: "Risk Reduction", value: "70%", description: "Fewer incidents" },
      { label: "Auditability", value: "100%", description: "Traceable decisions" },
      { label: "Time to Ship", value: "< 2 weeks", description: "Guardrails live" }
    ]
  },
  {
    id: "quantum-machine-learning-guide",
    title: "Quantum Machine Learning: Breaking the Barriers of Classical Computing",
    description: "Explore how quantum machine learning is solving previously impossible problems and revolutionizing AI capabilities across industries.",
    excerpt: "Quantum computing meets machine learning to unlock unprecedented computational power and solve complex optimization problems.",
    type: "blog",
    category: "Quantum Computing",
    tags: ["Quantum ML", "Machine Learning", "Quantum Computing", "Optimization"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-19",
    readTime: "15 min read",
    author: "Prof. Alex Thompson",
    image: "/images/quantum-machine-learning.jpg",
    url: "/blog/quantum-machine-learning-guide",
    cta: {
      primary: "Read Guide",
      secondary: "Watch Demo"
    },
    metrics: [
      {
        label: "Speed Improvement",
        value: "1000x",
        description: "Faster than classical algorithms"
      },
      {
        label: "Problem Complexity",
        value: "Exponential",
        description: "Handle NP-hard problems"
      },
      {
        label: "Accuracy Gain",
        value: "40%",
        description: "Better optimization results"
      }
    ]
  },
  {
    id: "edge-ai-manufacturing-case-study",
    title: "Manufacturing Revolution: How Edge AI Transformed Production Lines",
    description: "Case study showing how a Fortune 500 manufacturer reduced defects by 95% and increased efficiency by 300% using edge AI.",
    excerpt: "Real-world success story of implementing edge AI in manufacturing with measurable ROI and operational improvements.",
    type: "case-study",
    category: "Manufacturing",
    tags: ["Edge AI", "Manufacturing", "IoT", "Predictive Maintenance"],
    featured: true,
    newBadge: true,
    trending: false,
    publishedDate: "2025-01-18",
    readTime: "8 min read",
    author: "Zion Tech Group",
    image: "/images/edge-ai-manufacturing.jpg",
    url: "/case-studies/edge-ai-manufacturing-transformation",
    cta: {
      primary: "View Case Study",
      secondary: "Schedule Consultation"
    },
    metrics: [
      {
        label: "Defect Reduction",
        value: "95%",
        description: "Quality improvement achieved"
      },
      {
        label: "Efficiency Gain",
        value: "300%",
        description: "Production line optimization"
      },
      {
        label: "Cost Savings",
        value: "$2.5M",
        description: "Annual operational savings"
      }
    ],
    testimonial: {
      quote: "Edge AI transformed our production lines completely. We've never seen such dramatic improvements in quality and efficiency.",
      author: "Jennifer Liu",
      company: "Precision Manufacturing Corp"
    }
  },
  {
    id: "zero-trust-implementation-playbook",
    title: "Zero Trust Security Implementation: A Complete Enterprise Playbook",
    description: "Comprehensive guide to implementing Zero Trust architecture with practical steps, tools, and real-world examples.",
    excerpt: "Step-by-step playbook for enterprise Zero Trust implementation with proven strategies and measurable outcomes.",
    type: "whitepaper",
    category: "Cybersecurity",
    tags: ["Zero Trust", "Security", "Enterprise", "Implementation"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-17",
    readTime: "20 min read",
    author: "Security Team",
    image: "/images/zero-trust-playbook.jpg",
    url: "/whitepapers/zero-trust-implementation-playbook",
    cta: {
      primary: "Download Playbook",
      secondary: "Get Security Assessment"
    },
    metrics: [
      {
        label: "Security Incidents",
        value: "90%",
        description: "Reduction in security breaches"
      },
      {
        label: "Implementation Time",
        value: "6 months",
        description: "Average deployment timeline"
      },
      {
        label: "Compliance Score",
        value: "100%",
        description: "Achieved regulatory compliance"
      }
    ]
  },
  {
    id: "ai-content-automation-webinar",
    title: "AI Content Automation: Scale Your Marketing 10x Faster",
    description: "Live webinar showing how to automate content creation, SEO optimization, and brand consistency using AI.",
    excerpt: "Join industry experts as they demonstrate AI-powered content automation strategies that deliver results.",
    type: "webinar",
    category: "Content Marketing",
    tags: ["Content Automation", "AI Marketing", "SEO", "Brand Consistency"],
    featured: false,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-21",
    readTime: "60 min webinar",
    author: "Marketing Team",
    image: "/images/ai-content-automation.jpg",
    url: "/webinars/ai-content-automation-scale-marketing",
    cta: {
      primary: "Register Now",
      secondary: "View Past Webinars"
    },
    metrics: [
      {
        label: "Content Speed",
        value: "10x",
        description: "Faster content production"
      },
      {
        label: "Cost Reduction",
        value: "70%",
        description: "Lower content creation costs"
      },
      {
        label: "SEO Improvement",
        value: "85%",
        description: "Better search rankings"
      }
    ]
  },
  {
    id: "finops-ai-cost-optimization",
    title: "FinOps with AI: Intelligent Cloud Cost Optimization",
    description: "Learn how AI-powered FinOps can reduce cloud costs by 40% while improving performance and reliability.",
    excerpt: "Advanced FinOps strategies powered by AI for intelligent resource allocation and cost optimization.",
    type: "blog",
    category: "Cloud Finance",
    tags: ["FinOps", "Cloud Optimization", "AI", "Cost Management"],
    featured: true,
    newBadge: true,
    trending: false,
    publishedDate: "2025-01-16",
    readTime: "10 min read",
    author: "Cloud Economics Team",
    image: "/images/finops-ai-optimization.jpg",
    url: "/blog/finops-ai-cost-optimization",
    cta: {
      primary: "Read Article",
      secondary: "Get Cost Analysis"
    },
    metrics: [
      {
        label: "Cost Reduction",
        value: "40%",
        description: "Average cloud cost savings"
      },
      {
        label: "Resource Efficiency",
        value: "60%",
        description: "Improved utilization rates"
      },
      {
        label: "ROI Timeline",
        value: "3 months",
        description: "Time to positive ROI"
      }
    ]
  },
  {
    id: "ai-governance-framework-2025",
    title: "AI Governance Framework 2025: Practical Implementation Guide",
    description: "Comprehensive framework for AI governance with policies, procedures, and compliance strategies for enterprise AI.",
    excerpt: "Build robust AI governance that enables innovation while ensuring compliance, ethics, and risk management.",
    type: "whitepaper",
    category: "AI Governance",
    tags: ["AI Governance", "Compliance", "Ethics", "Risk Management"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-15",
    readTime: "25 min read",
    author: "AI Governance Team",
    image: "/images/ai-governance-framework.jpg",
    url: "/whitepapers/ai-governance-framework-2025",
    cta: {
      primary: "Download Framework",
      secondary: "Schedule Workshop"
    },
    metrics: [
      {
        label: "Compliance Rate",
        value: "100%",
        description: "Regulatory compliance achieved"
      },
      {
        label: "Risk Reduction",
        value: "80%",
        description: "AI-related risk mitigation"
      },
      {
        label: "Implementation Time",
        value: "4 months",
        description: "Framework deployment timeline"
      }
    ]
  },
  {
    id: "blockchain-ai-integration-guide",
    title: "Blockchain + AI Integration: Building Trust in Decentralized Systems",
    description: "Explore how AI and blockchain technologies combine to create secure, transparent, and intelligent decentralized systems.",
    excerpt: "Discover the synergy between AI and blockchain for building next-generation decentralized applications.",
    type: "blog",
    category: "Blockchain",
    tags: ["Blockchain", "AI", "Decentralization", "Smart Contracts"],
    featured: false,
    newBadge: true,
    trending: false,
    publishedDate: "2025-01-14",
    readTime: "14 min read",
    author: "Blockchain Team",
    image: "/images/blockchain-ai-integration.jpg",
    url: "/blog/blockchain-ai-integration-guide",
    cta: {
      primary: "Read Guide",
      secondary: "View Demo"
    },
    metrics: [
      {
        label: "Security Enhancement",
        value: "95%",
        description: "Improved system security"
      },
      {
        label: "Transparency",
        value: "100%",
        description: "Complete audit trail"
      },
      {
        label: "Efficiency Gain",
        value: "50%",
        description: "Faster transaction processing"
      }
    ]
  },
  {
    id: "ai-enterprise-transformation-2025",
    title: "AI Enterprise Transformation 2025: Complete Implementation Guide",
    description: "Master AI enterprise transformation with proven strategies, frameworks, and real-world success stories. Transform your business with AI in 2025.",
    excerpt: "Enterprise AI transformation in 2025 requires a strategic approach that goes beyond technology adoption. This comprehensive guide provides proven frameworks, implementation strategies, and real-world case studies.",
    type: "blog",
    category: "AI Strategy",
    tags: ["AI Transformation", "Enterprise AI", "Digital Transformation", "Business Strategy"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-20",
    readTime: "18 min read",
    author: "Zion Tech Group Team",
    image: "/images/ai-enterprise-transformation-2025.jpg",
    url: "/blog/ai-enterprise-transformation-2025",
    cta: {
      primary: "Read Full Article",
      secondary: "Download Whitepaper"
    },
    metrics: [
      {
        label: "Average ROI",
        value: "300%",
        description: "Typical return on AI investments"
      },
      {
        label: "Process Efficiency",
        value: "85%",
        description: "Average efficiency improvement"
      },
      {
        label: "Annual Savings",
        value: "$2.5M",
        description: "Average cost savings achieved"
      }
    ]
  },
  {
    id: "ai-autonomous-operations-2025",
    title: "AI Autonomous Operations 2025: Building Self-Healing Infrastructure",
    description: "Learn how to implement AI-powered autonomous operations for self-healing, self-optimizing infrastructure. Reduce downtime by 90% with autonomous systems.",
    excerpt: "Autonomous operations represent the next evolution in infrastructure management. By leveraging AI to create self-healing, self-optimizing, and self-scaling systems, organizations can achieve unprecedented levels of reliability.",
    type: "blog",
    category: "AI Operations",
    tags: ["Autonomous Operations", "Self-Healing", "Infrastructure", "AI Operations"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-20",
    readTime: "15 min read",
    author: "Zion Tech Group Team",
    image: "/images/ai-autonomous-operations-2025.jpg",
    url: "/blog/ai-autonomous-operations-2025",
    cta: {
      primary: "Read Article",
      secondary: "Get Assessment"
    },
    metrics: [
      {
        label: "Downtime Reduction",
        value: "90%",
        description: "Average downtime improvement"
      },
      {
        label: "Uptime Achieved",
        value: "99.99%",
        description: "System availability"
      },
      {
        label: "Resolution Time",
        value: "< 15 seconds",
        description: "Mean time to resolution"
      }
    ]
  },
  {
    id: "ai-supply-chain-optimization-2025",
    title: "AI Supply Chain Optimization: 60% Cost Reduction Case Study",
    description: "See how a Fortune 500 manufacturer achieved 60% cost reduction and 95% efficiency improvement using AI-powered supply chain optimization.",
    excerpt: "A Fortune 500 manufacturer transformed their global supply chain operations using AI-powered optimization, achieving unprecedented cost savings and efficiency improvements.",
    type: "case-study",
    category: "Manufacturing",
    tags: ["Supply Chain", "AI Optimization", "Manufacturing", "Cost Reduction"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-01-20",
    readTime: "8 min read",
    author: "Zion Tech Group Team",
    image: "/images/ai-supply-chain-optimization-2025.jpg",
    url: "/case-studies/ai-supply-chain-optimization-2025",
    cta: {
      primary: "View Case Study",
      secondary: "Get Assessment"
    },
    metrics: [
      {
        label: "Cost Reduction",
        value: "60%",
        description: "Total operational cost savings"
      },
      {
        label: "Efficiency Gain",
        value: "95%",
        description: "Process efficiency improvement"
      },
      {
        label: "Annual Savings",
        value: "$12M",
        description: "Total cost savings achieved"
      }
    ]
  },
  {
    id: "genai-routing-blueprint-2026",
    title: "GenAI Routing Blueprint 2026: Fast, Cheap, and Grounded",
    description: "Design intent-aware routers, fallback tiers, and caches to hit quality SLOs at a fraction of the cost.",
    excerpt: "Route by intent, cache by value, and tier by SLO to cut spend 40–70% without hurting UX.",
    type: "blog",
    category: "GenAI Architecture",
    tags: ["Routing", "Caching", "SLOs", "Cost"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-09-29",
    readTime: "10 min read",
    author: "Zion Tech Group",
    image: "/images/genai-routing-blueprint-2026.jpg",
    url: "/blog/genai-routing-blueprint-2026",
    cta: {
      primary: "Read Article",
      secondary: "Get Routing Starter"
    },
    metrics: [
      { label: "P95 Latency", value: "< 300ms", description: "With warm pools + caches" },
      { label: "Cost", value: "-60%", description: "Savings from tiering + cache" },
      { label: "Groundedness", value: "+30%", description: "With citation policy tests" }
    ]
  },
  {
    id: "secure-ml-supply-chain-2026",
    title: "Secure ML Supply Chain 2026: Attestations, Policy Tests, SBOMs",
    description: "Ship verifiably secure models and tools with signed artifacts, provenance, and CI policy tests.",
    excerpt: "From data to deployment: secure each link with attestations, SBOMs, and automated policy checks.",
    type: "whitepaper",
    category: "Security",
    tags: ["Supply Chain", "Attestation", "SBOM", "Policy"],
    featured: true,
    newBadge: true,
    trending: true,
    publishedDate: "2025-09-28",
    readTime: "18 min read",
    author: "Security Team",
    image: "/images/secure-ml-supply-chain-2026.jpg",
    url: "/whitepapers/secure-ml-supply-chain-2026",
    cta: {
      primary: "Download Whitepaper",
      secondary: "View Checklists"
    },
    metrics: [
      { label: "Incident Risk", value: "-80%", description: "Post‑rollout reduction" },
      { label: "Auditability", value: "100%", description: "Signed builds + trace" },
      { label: "Lead Time", value: "-35%", description: "Fewer reworks via policy tests" }
    ]
  },
  {
    id: "golden-paths-roi-2026",
    title: "Golden Paths ROI 2026: Proving Platform Value Quarterly",
    description: "Build developer golden paths with scorecards that tie adoption to shipped business outcomes.",
    excerpt: "Instrument your platform with KPIs that teams adopt—show ROI without vanity metrics.",
    type: "blog",
    category: "Platform Engineering",
    tags: ["Golden Paths", "ROI", "KPIs", "Platform"],
    featured: true,
    newBadge: true,
    trending: false,
    publishedDate: "2025-09-27",
    readTime: "9 min read",
    author: "Zion Tech Group",
    image: "/images/golden-paths-roi-2026.jpg",
    url: "/blog/golden-paths-roi-2026",
    cta: {
      primary: "Read Article",
      secondary: "Get Scorecard Kit"
    },
    metrics: [
      { label: "Dev Adoption", value: "+45%", description: "Within two quarters" },
      { label: "Lead Time", value: "-30%", description: "Golden path pipelines" },
      { label: "Change Fail %", value: "-25%", description: "With guardrails + tests" }
    ]
  }
];
newContent2025.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()).slice(0, 6);

const newServices2025 = [
  {
    id: "ai-autonomous-infrastructure",
    title: "AI Autonomous Infrastructure Management",
    description: "Transform your infrastructure with self-healing, self-optimizing systems that automatically adapt to changing conditions and requirements.",
    category: "AI Operations",
    features: [
      "Self-healing infrastructure with automatic failure recovery",
      "Predictive maintenance and proactive issue resolution",
      "Dynamic resource scaling based on demand patterns",
      "Intelligent cost optimization and resource allocation",
      "Real-time performance monitoring and optimization",
      "Automated security updates and vulnerability patching"
    ],
    benefits: [
      "99.99% uptime through predictive maintenance",
      "65% reduction in operational costs",
      "90% elimination of manual interventions",
      "45% improvement in system performance",
      "24/7 autonomous monitoring and response",
      "Faster incident resolution and recovery"
    ],
    useCases: [
      "Enterprise cloud infrastructure management",
      "Microservices orchestration and scaling",
      "Database performance optimization",
      "Application deployment and monitoring",
      "Network infrastructure automation",
      "DevOps pipeline optimization"
    ],
    technologies: ["AI/ML", "Kubernetes", "Prometheus", "Grafana", "Python", "TensorFlow", "Docker"],
    pricing: [
      {
        tier: "Starter",
        price: "$5,000/month",
        features: ["Basic autonomous monitoring", "Standard self-healing", "Email alerts", "Basic reporting"]
      },
      {
        tier: "Professional",
        price: "$15,000/month",
        features: ["Advanced predictive analytics", "Full self-healing capabilities", "Real-time dashboards", "Priority support"]
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: ["Custom AI models", "Dedicated support team", "Advanced security features", "SLA guarantees"]
      }
    ],
    testimonial: {
      quote: "AI Autonomous Infrastructure transformed our operations completely. We went from constant firefighting to zero-touch operations.",
      author: "Michael Rodriguez",
      company: "CloudScale Enterprises",
      role: "CTO"
    },
    metrics: [
      {
        label: "Uptime Improvement",
        value: "99.99%",
        description: "Achieved through predictive maintenance"
      },
      {
        label: "Cost Reduction",
        value: "65%",
        description: "Average operational savings"
      },
      {
        label: "Manual Work Reduction",
        value: "90%",
        description: "Elimination of manual interventions"
      }
    ],
    image: "/images/services/ai-autonomous-infrastructure.jpg",
    icon: "🤖"
  },
  {
    id: "edge-ai-computing",
    title: "Edge AI Computing Solutions",
    description: "Deploy intelligent AI models at the edge for ultra-low latency processing, real-time decision making, and offline capabilities.",
    category: "Edge Computing",
    features: [
      "Ultra-low latency AI inference at the edge",
      "Real-time data processing and decision making",
      "Offline AI capabilities for critical operations",
      "Optimized models for edge device constraints",
      "Distributed AI model management and updates",
      "Edge-to-cloud data synchronization"
    ],
    benefits: [
      "Sub-millisecond response times",
      "Reduced bandwidth and cloud costs",
      "Enhanced data privacy and security",
      "Improved reliability with offline capabilities",
      "Real-time processing for critical applications",
      "Scalable edge deployment across locations"
    ],
    useCases: [
      "Manufacturing quality control and predictive maintenance",
      "Autonomous vehicle perception and decision making",
      "Smart city traffic optimization",
      "Healthcare real-time patient monitoring",
      "Retail personalized customer experiences",
      "Industrial IoT sensor data processing"
    ],
    technologies: ["TensorFlow Lite", "OpenVINO", "Edge Computing", "IoT", "5G", "Computer Vision", "Embedded Systems"],
    pricing: [
      {
        tier: "Development",
        price: "$2,500/month",
        features: ["Edge model development", "Basic deployment tools", "Testing environments", "Documentation"]
      },
      {
        tier: "Production",
        price: "$7,500/month",
        features: ["Production deployment", "Advanced monitoring", "Model optimization", "24/7 support"]
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: ["Custom hardware integration", "Dedicated edge infrastructure", "Advanced security", "SLA guarantees"]
      }
    ],
    testimonial: {
      quote: "Edge AI enabled us to process data in real-time at our manufacturing plants, reducing defects by 95% and improving efficiency dramatically.",
      author: "Jennifer Liu",
      company: "Precision Manufacturing Corp",
      role: "VP of Operations"
    },
    metrics: [
      {
        label: "Latency Reduction",
        value: "99%",
        description: "Compared to cloud processing"
      },
      {
        label: "Bandwidth Savings",
        value: "80%",
        description: "Reduced data transmission"
      },
      {
        label: "Processing Speed",
        value: "< 1ms",
        description: "Average inference time"
      }
    ],
    image: "/images/services/edge-ai-computing.jpg",
    icon: "⚡"
  },
  {
    id: "quantum-ai-optimization",
    title: "Quantum AI Optimization Services",
    description: "Leverage quantum computing power combined with AI to solve complex optimization problems that are intractable for classical computers.",
    category: "Quantum Computing",
    features: [
      "Quantum machine learning algorithms",
      "Complex optimization problem solving",
      "Quantum neural network implementations",
      "Hybrid classical-quantum workflows",
      "Quantum simulation and modeling",
      "Quantum-resistant security protocols"
    ],
    benefits: [
      "Exponential speedup for specific problems",
      "Solving NP-hard optimization challenges",
      "Enhanced machine learning capabilities",
      "Future-proof quantum-resistant security",
      "Breakthrough insights in complex domains",
      "Competitive advantage through quantum advantage"
    ],
    useCases: [
      "Financial portfolio optimization and risk analysis",
      "Drug discovery and molecular simulation",
      "Supply chain and logistics optimization",
      "Climate modeling and environmental analysis",
      "Materials science and discovery",
      "Cryptography and cybersecurity"
    ],
    technologies: ["IBM Qiskit", "Google Cirq", "Microsoft Q#", "Quantum Algorithms", "Python", "Quantum Hardware"],
    pricing: [
      {
        tier: "Research",
        price: "$10,000/month",
        features: ["Quantum algorithm development", "Simulation environments", "Research collaboration", "Basic quantum access"]
      },
      {
        tier: "Development",
        price: "$25,000/month",
        features: ["Quantum hardware access", "Advanced algorithms", "Hybrid workflows", "Technical support"]
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: ["Dedicated quantum resources", "Custom algorithm development", "Full integration support", "Quantum expertise team"]
      }
    ],
    testimonial: {
      quote: "Quantum AI optimization helped us solve portfolio optimization problems that were impossible with classical computing, delivering 18% better returns.",
      author: "David Kim",
      company: "Quantum Capital Management",
      role: "Chief Investment Officer"
    },
    metrics: [
      {
        label: "Speed Improvement",
        value: "1000x",
        description: "Faster than classical algorithms"
      },
      {
        label: "Problem Complexity",
        value: "Exponential",
        description: "Handle NP-hard problems"
      },
      {
        label: "Optimization Gain",
        value: "40%",
        description: "Better solution quality"
      }
    ],
    image: "/images/services/quantum-ai-optimization.jpg",
    icon: "🔬"
  },
  {
    id: "ai-sustainability-solutions",
    title: "AI for Sustainability and Climate Solutions",
    description: "Harness the power of AI to address climate change, optimize resource usage, and create sustainable solutions for a better future.",
    category: "Sustainability",
    features: [
      "Carbon footprint tracking and optimization",
      "Renewable energy system optimization",
      "Environmental monitoring and prediction",
      "Sustainable supply chain management",
      "Climate risk assessment and mitigation",
      "Green AI model development and deployment"
    ],
    benefits: [
      "Significant reduction in carbon emissions",
      "Optimized resource utilization",
      "Enhanced environmental monitoring",
      "Improved sustainability reporting",
      "Cost savings through efficiency gains",
      "Compliance with environmental regulations"
    ],
    useCases: [
      "Smart city energy management",
      "Manufacturing process optimization",
      "Agriculture precision farming",
      "Transportation route optimization",
      "Building energy efficiency",
      "Waste management optimization"
    ],
    technologies: ["Environmental AI", "IoT Sensors", "Satellite Data", "Climate Modeling", "Energy Analytics", "Sustainability Metrics"],
    pricing: [
      {
        tier: "Assessment",
        price: "$3,000/month",
        features: ["Carbon footprint analysis", "Sustainability audit", "Baseline measurement", "Improvement recommendations"]
      },
      {
        tier: "Optimization",
        price: "$8,000/month",
        features: ["AI-powered optimization", "Real-time monitoring", "Automated reporting", "Implementation support"]
      },
      {
        tier: "Transformation",
        price: "Custom",
        features: ["Full sustainability transformation", "Custom AI solutions", "Dedicated support team", "Long-term partnership"]
      }
    ],
    testimonial: {
      quote: "AI sustainability solutions helped us reduce our carbon footprint by 40% while improving operational efficiency and saving $2M annually.",
      author: "Sarah Chen",
      company: "GreenTech Industries",
      role: "Sustainability Director"
    },
    metrics: [
      {
        label: "Carbon Reduction",
        value: "40%",
        description: "Average emission reduction"
      },
      {
        label: "Energy Savings",
        value: "25%",
        description: "Improved energy efficiency"
      },
      {
        label: "Cost Savings",
        value: "$2M",
        description: "Annual operational savings"
      }
    ],
    image: "/images/services/ai-sustainability.jpg",
    icon: "🌱"
  },
  {
    id: "ai-ethics-governance",
    title: "AI Ethics and Governance Framework",
    description: "Implement comprehensive AI ethics and governance frameworks to ensure responsible AI development, deployment, and ongoing management.",
    category: "AI Governance",
    features: [
      "AI ethics policy development and implementation",
      "Bias detection and mitigation systems",
      "AI transparency and explainability tools",
      "Compliance monitoring and reporting",
      "AI risk assessment and management",
      "Responsible AI training and certification"
    ],
    benefits: [
      "Reduced AI-related risks and incidents",
      "Enhanced stakeholder trust and confidence",
      "Regulatory compliance and audit readiness",
      "Improved AI system fairness and transparency",
      "Better decision-making through explainable AI",
      "Competitive advantage through ethical AI leadership"
    ],
    useCases: [
      "Financial services AI compliance",
      "Healthcare AI ethics and safety",
      "Automated decision-making systems",
      "AI-powered hiring and HR systems",
      "Government AI policy implementation",
      "Enterprise AI governance and oversight"
    ],
    technologies: ["AI Ethics Tools", "Bias Detection", "Explainable AI", "Compliance Monitoring", "Risk Assessment", "Governance Platforms"],
    pricing: [
      {
        tier: "Foundation",
        price: "$4,000/month",
        features: ["Ethics policy development", "Basic bias detection", "Compliance framework", "Training materials"]
      },
      {
        tier: "Advanced",
        price: "$12,000/month",
        features: ["Advanced monitoring tools", "Automated compliance", "Risk assessment", "Expert consultation"]
      },
      {
        tier: "Enterprise",
        price: "Custom",
        features: ["Custom governance framework", "Dedicated ethics team", "Full audit support", "Ongoing monitoring"]
      }
    ],
    testimonial: {
      quote: "The AI ethics framework gave us confidence in our AI systems and helped us achieve 100% compliance with all regulations while building trust with our customers.",
      author: "Robert Martinez",
      company: "SecureBank International",
      role: "Chief Risk Officer"
    },
    metrics: [
      {
        label: "Compliance Rate",
        value: "100%",
        description: "Regulatory compliance achieved"
      },
      {
        label: "Risk Reduction",
        value: "80%",
        description: "AI-related risk mitigation"
      },
      {
        label: "Trust Score",
        value: "95%",
        description: "Stakeholder confidence rating"
      }
    ],
    image: "/images/services/ai-ethics-governance.jpg",
    icon: "⚖️"
  }
];
const featuredNewServices = newServices2025.filter(
  (service) => ["ai-autonomous-infrastructure", "edge-ai-computing", "quantum-ai-optimization"].includes(service.id)
);

const caseStudies = [
  {
    id: "ai-sustainability-transformation-2026",
    title: "AI Sustainability Transformation 2026: Carbon-Neutral Operations",
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Massive AI infrastructure consuming 45MW of power daily, generating 35,000 tons of CO2 annually, with energy costs exceeding $18M per year and mounting regulatory pressure for carbon neutrality.",
    solution: "Implemented comprehensive AI sustainability transformation including solar-powered data centers, optimized algorithms, carbon offset programs, and intelligent automation systems across 25 facilities.",
    results: [
      "Achieved 100% carbon neutral operations",
      "Reduced energy consumption by 80%",
      "Generated $10M total ROI",
      "Achieved 95% automation efficiency",
      "Eliminated 35,000 tons CO2 annually"
    ],
    technologies: ["Solar Energy", "AI Optimization", "Carbon Offsets", "Smart Manufacturing", "Predictive Analytics"],
    duration: "18 months",
    imageUrl: "/images/case-studies/ai-sustainability-transformation-2026.jpg"
  },
  {
    id: "ai-quantum-optimization-2026",
    title: "AI Quantum Optimization 2026: 1000x Speed Improvement",
    company: "FinanceCorp International",
    industry: "Financial Services",
    challenge: "Portfolio optimization for $50B in assets taking 8 hours on classical computers, limiting real-time trading opportunities and costing $2M annually in suboptimal allocations.",
    solution: "Implemented quantum-enhanced AI optimization system using variational quantum algorithms with hybrid quantum-classical processing for real-time portfolio optimization and decision making.",
    results: [
      "Achieved 1000x speed improvement (8 hours → 30 seconds)",
      "Generated $12M additional annual returns",
      "Improved optimization accuracy by 95%",
      "Enabled real-time portfolio rebalancing",
      "Reduced portfolio risk by 40%"
    ],
    technologies: ["Quantum Computing", "Variational Quantum Algorithms", "AI/ML", "Portfolio Optimization", "Real-time Analytics"],
    duration: "12 months",
    imageUrl: "/images/case-studies/ai-quantum-optimization-2026.jpg"
  },
  {
    id: "fintech-ai-platform",
    title: "AI-Powered Financial Analytics Platform",
    company: "FinTech Solutions Inc.",
    industry: "Financial Services",
    challenge: "Manual financial analysis processes were taking 40+ hours per week and prone to human error, limiting the company's ability to provide real-time insights to clients.",
    solution: "Developed a comprehensive AI analytics platform with machine learning models for predictive analysis, automated report generation, and real-time dashboard monitoring.",
    results: [
      "Reduced analysis time from 40 hours to 2 hours per week",
      "Improved prediction accuracy by 85%",
      "Increased client satisfaction scores by 40%",
      "Generated $2.3M in additional revenue through better insights"
    ],
    technologies: ["Python", "TensorFlow", "React", "AWS", "PostgreSQL", "Docker"],
    duration: "12 weeks",
    imageUrl: "/images/case-studies/fintech-platform.jpg"
  },
  {
    id: "healthcare-chatbot",
    title: "Healthcare AI Chatbot System",
    company: "MedCare Hospital Network",
    industry: "Healthcare",
    challenge: "High patient inquiry volume was overwhelming staff, leading to 30+ minute wait times for basic questions and decreased patient satisfaction.",
    solution: "Implemented an intelligent chatbot system with natural language processing, medical knowledge base integration, and seamless handoff to human specialists.",
    results: [
      "Reduced average response time from 30 minutes to 2 minutes",
      "Handled 70% of inquiries without human intervention",
      "Improved patient satisfaction scores by 60%",
      "Freed up 15 hours daily for staff to focus on critical cases"
    ],
    technologies: ["OpenAI GPT-4", "Node.js", "React", "MongoDB", "AWS Lambda"],
    duration: "8 weeks",
    imageUrl: "/images/case-studies/healthcare-chatbot.jpg"
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce AI Optimization Suite",
    company: "RetailMax Online",
    industry: "E-commerce",
    challenge: "Low conversion rates (2.1%) and high cart abandonment (78%) were significantly impacting revenue growth and customer experience.",
    solution: "Created an AI-driven optimization platform with personalized product recommendations, dynamic pricing, and automated email campaigns based on user behavior.",
    results: [
      "Increased conversion rates from 2.1% to 4.7%",
      "Reduced cart abandonment from 78% to 45%",
      "Boosted average order value by 35%",
      "Generated $1.8M in additional revenue in 6 months"
    ],
    technologies: ["Machine Learning", "Python", "Vue.js", "Redis", "Kubernetes"],
    duration: "10 weeks",
    imageUrl: "/images/case-studies/ecommerce-ai.jpg"
  },
  {
    id: "manufacturing-iot",
    title: "Smart Manufacturing IoT Platform",
    company: "Precision Manufacturing Co.",
    industry: "Manufacturing",
    challenge: "Equipment downtime was costing $50K per hour, with no predictive maintenance capabilities leading to unexpected failures.",
    solution: "Developed an IoT platform with real-time monitoring, predictive maintenance algorithms, and automated alert systems for equipment optimization.",
    results: [
      "Reduced unplanned downtime by 65%",
      "Improved equipment efficiency by 25%",
      "Saved $2.1M annually in maintenance costs",
      "Increased production output by 18%"
    ],
    technologies: ["IoT Sensors", "Edge Computing", "Python", "React", "Azure IoT Hub"],
    duration: "16 weeks",
    imageUrl: "/images/case-studies/manufacturing-iot.jpg"
  },
  {
    id: "saas-analytics",
    title: "SaaS Analytics Dashboard",
    company: "CloudTech Solutions",
    industry: "SaaS",
    challenge: "Lack of comprehensive analytics made it difficult to understand user behavior, leading to high churn rates and poor product decisions.",
    solution: "Built a real-time analytics platform with user journey tracking, cohort analysis, and predictive churn modeling to drive data-driven decisions.",
    results: [
      "Reduced churn rate from 15% to 8%",
      "Improved user engagement by 45%",
      "Increased MRR by $500K through better retention",
      "Enabled 90% faster product decision-making"
    ],
    technologies: ["Apache Kafka", "ClickHouse", "React", "D3.js", "AWS"],
    duration: "14 weeks",
    imageUrl: "/images/case-studies/saas-analytics.jpg"
  },
  {
    id: "cybersecurity-automation",
    title: "Automated Cybersecurity Platform",
    company: "SecureCorp Financial",
    industry: "Financial Services",
    challenge: "Manual security monitoring was missing 30% of threats and took 6+ hours to respond to incidents, creating significant risk exposure.",
    solution: "Implemented an AI-powered security platform with automated threat detection, incident response, and compliance monitoring.",
    results: [
      "Reduced threat detection time from 6 hours to 15 minutes",
      "Improved threat detection accuracy to 98%",
      "Achieved 100% compliance audit success rate",
      "Prevented $3.2M in potential security breaches"
    ],
    technologies: ["SIEM", "Machine Learning", "Python", "Elasticsearch", "Kubernetes"],
    duration: "20 weeks",
    imageUrl: "/images/case-studies/cybersecurity.jpg"
  },
  {
    id: "retail-genai-assistants",
    title: "GenAI Retail Assistants at Scale",
    company: "RetailMax Corporation",
    industry: "E-commerce",
    challenge: "High support volume and slow product discovery led to churn and high OpEx.",
    solution: "Deployed multilingual GenAI assistants with tools for search, recommendations, and order support across 22 regions.",
    results: [
      "Cut support tickets by 48%",
      "Increased conversion rate by 32%",
      "Reduced CAC payback from 9 to 5 months",
      "$6.1M annual cost savings"
    ],
    technologies: ["LLM Tools", "Retrieval", "React", "Kubernetes", "ClickHouse"],
    duration: "10 weeks",
    imageUrl: "/images/case-studies/retail-genai-assistants.jpg"
  },
  {
    id: "edge-vision-quality-inspection",
    title: "Edge Vision Quality Inspection",
    company: "Precision Manufacturing",
    industry: "Manufacturing",
    challenge: "Manual inspection missed defects and slowed throughput across 12 plants.",
    solution: "Implemented on‑device vision models with active learning, latency budgets, and automated divert flows.",
    results: [
      "70% defect reduction",
      "+22% line throughput",
      "$3.4M annual scrap savings",
      "P95 inference 38ms"
    ],
    technologies: ["Edge AI", "OpenVINO", "gRPC", "Rust", "Kafka"],
    duration: "12 weeks",
    imageUrl: "/images/case-studies/edge-vision-quality.jpg"
  },
  {
    id: "telco-edge-observability",
    title: "Telco Edge Observability Overhaul",
    company: "GlobalTel Communications",
    industry: "Telecommunications",
    challenge: "Edge outages and opaque client performance caused churn and SLA penalties.",
    solution: "Implemented end-to-end tracing from device to POP, latency budgets, and automated error budget alerts across 40 regions.",
    results: [
      "Cut P95 latency from 180ms to 85ms",
      "Reduced incident MTTR by 62%",
      "Decreased churn by 18% in 2 quarters",
      "$4.7M annual SLA penalty savings"
    ],
    technologies: ["OpenTelemetry", "ClickHouse", "Edge Workers", "TypeScript", "Kubernetes"],
    duration: "18 weeks",
    imageUrl: "/images/case-studies/telco-edge.jpg"
  },
  {
    id: "ai-autonomous-operations-success",
    title: "AI Autonomous Operations Platform Implementation",
    company: "GlobalTech Enterprises",
    industry: "Technology",
    challenge: "Manual infrastructure management was consuming 60% of IT resources, leading to high operational costs and frequent downtime incidents.",
    solution: "Deployed comprehensive AI autonomous operations platform with self-healing systems, predictive maintenance, and automated scaling capabilities.",
    results: [
      "Achieved 99.99% uptime through predictive maintenance",
      "Reduced operational costs by 65%",
      "Eliminated 90% of manual interventions",
      "Improved system performance by 45%",
      "Generated $12M annual savings"
    ],
    technologies: ["AI/ML", "Kubernetes", "Prometheus", "Grafana", "Python", "TensorFlow"],
    duration: "16 weeks",
    imageUrl: "/images/case-studies/ai-autonomous-ops.jpg"
  },
  {
    id: "enterprise-ai-transformation",
    title: "Enterprise AI Transformation Initiative",
    company: "Fortune 500 Manufacturing",
    industry: "Manufacturing",
    challenge: "Legacy systems and manual processes were hindering growth, with AI adoption limited to pilot projects that never scaled.",
    solution: "Implemented comprehensive enterprise AI roadmap with phased deployment, including AI strategy, infrastructure modernization, and cultural transformation.",
    results: [
      "Deployed 15 AI solutions across 8 departments",
      "Increased operational efficiency by 55%",
      "Reduced decision-making time by 70%",
      "Generated $25M in additional revenue",
      "Achieved 300% ROI within 18 months"
    ],
    technologies: ["Enterprise AI", "Cloud Platforms", "Data Analytics", "MLOps", "Change Management"],
    duration: "24 weeks",
    imageUrl: "/images/case-studies/enterprise-ai.jpg"
  },
  {
    id: "cloud-native-ai-platform",
    title: "Cloud-Native AI Platform Migration",
    company: "FinTech Innovations Inc.",
    industry: "Financial Services",
    challenge: "On-premises AI infrastructure was limiting scalability and innovation, with deployment times taking months instead of weeks.",
    solution: "Migrated to cloud-native AI platform with containerized AI workloads, automated scaling, and DevOps integration.",
    results: [
      "Reduced deployment time from 3 months to 2 weeks",
      "Achieved 99.9% availability across all regions",
      "Scaled AI workloads by 10x without infrastructure changes",
      "Reduced AI infrastructure costs by 40%",
      "Enabled rapid experimentation with new AI models"
    ],
    technologies: ["Kubernetes", "Docker", "AWS/Azure", "MLOps", "CI/CD", "Microservices"],
    duration: "12 weeks",
    imageUrl: "/images/case-studies/cloud-native-ai.jpg"
  },
  {
    id: "ai-cybersecurity-automation",
    title: "AI-Powered Cybersecurity Automation",
    company: "SecureBank International",
    industry: "Banking",
    challenge: "Traditional security tools were generating 10,000+ false positives daily, overwhelming security teams and missing real threats.",
    solution: "Implemented AI-powered security automation platform with advanced threat detection, automated response, and intelligent alert prioritization.",
    results: [
      "Reduced false positives by 95%",
      "Improved threat detection accuracy to 99.2%",
      "Reduced incident response time from 4 hours to 15 minutes",
      "Prevented $8M in potential security breaches",
      "Achieved 100% compliance with regulatory requirements"
    ],
    technologies: ["AI/ML", "SIEM", "SOAR", "Python", "TensorFlow", "Security Automation"],
    duration: "14 weeks",
    imageUrl: "/images/case-studies/ai-cybersecurity.jpg"
  },
  {
    id: "quantum-computing-optimization",
    title: "Quantum Computing for Portfolio Optimization",
    company: "Quantum Capital Management",
    industry: "Investment Management",
    challenge: "Traditional portfolio optimization was computationally limited, preventing analysis of complex multi-factor models with thousands of assets.",
    solution: "Implemented quantum computing solution for portfolio optimization, enabling analysis of exponentially more portfolio combinations.",
    results: [
      "Improved portfolio Sharpe ratios by 18%",
      "Reduced optimization time from 24 hours to 4 hours",
      "Enabled analysis of 10x more asset combinations",
      "Generated $15M in additional returns",
      "Achieved industry-leading risk-adjusted performance"
    ],
    technologies: ["Quantum Computing", "IBM Qiskit", "Python", "Portfolio Optimization", "Risk Management"],
    duration: "20 weeks",
    imageUrl: "/images/case-studies/quantum-portfolio.jpg"
  },
  {
    id: "ai-autonomous-vehicles-transformation",
    title: "Autonomous Vehicle AI Platform Implementation",
    company: "FutureMobility Corp",
    industry: "Automotive",
    challenge: "Traditional vehicle testing was expensive, time-consuming, and couldn't simulate all real-world scenarios, limiting autonomous vehicle development speed.",
    solution: "Implemented AI-powered autonomous vehicle platform with advanced perception systems, decision-making algorithms, and comprehensive simulation environments.",
    results: [
      "Reduced vehicle testing costs by 70% through virtual simulation",
      "Improved safety scores by 95% with advanced AI perception",
      "Accelerated development timeline from 5 years to 2 years",
      "Achieved Level 4 autonomy certification ahead of schedule",
      "Generated $50M in cost savings and faster time-to-market"
    ],
    technologies: ["Computer Vision", "Deep Learning", "Simulation", "Edge Computing", "Sensor Fusion"],
    duration: "18 months",
    imageUrl: "/images/case-studies/autonomous-vehicles-ai.jpg"
  },
  {
    id: "ai-healthcare-diagnostics-platform",
    title: "AI-Powered Healthcare Diagnostics Platform",
    company: "MedTech Innovations",
    industry: "Healthcare",
    challenge: "Manual medical diagnosis was slow and inconsistent, with radiologists struggling to keep up with increasing patient volumes and complex cases.",
    solution: "Deployed comprehensive AI diagnostics platform with medical imaging analysis, predictive diagnostics, and clinical decision support systems.",
    results: [
      "Improved diagnostic accuracy by 40% across all specialties",
      "Reduced diagnosis time from 48 hours to 4 hours",
      "Detected early-stage diseases with 98% accuracy",
      "Freed up 60% of radiologist time for complex cases",
      "Saved $15M annually in healthcare costs"
    ],
    technologies: ["Medical AI", "Computer Vision", "Deep Learning", "DICOM", "Clinical Workflows"],
    duration: "14 months",
    imageUrl: "/images/case-studies/healthcare-ai-diagnostics.jpg"
  },
  {
    id: "ai-smart-city-transformation",
    title: "Smart City AI Integration Platform",
    company: "UrbanTech Solutions",
    industry: "Smart Cities",
    challenge: "City operations were inefficient with manual processes, poor resource allocation, and limited data-driven decision making affecting citizen services.",
    solution: "Implemented comprehensive smart city AI platform with traffic optimization, resource management, citizen services automation, and predictive analytics.",
    results: [
      "Reduced traffic congestion by 35% through intelligent routing",
      "Improved emergency response times by 50%",
      "Optimized energy consumption by 25% across city infrastructure",
      "Enhanced citizen satisfaction scores by 60%",
      "Generated $100M in operational cost savings over 3 years"
    ],
    technologies: ["IoT", "Edge Computing", "Predictive Analytics", "Real-time Processing", "Citizen Portals"],
    duration: "20 months",
    imageUrl: "/images/case-studies/smart-city-ai.jpg"
  },
  {
    id: "ai-financial-fraud-detection",
    title: "Advanced AI Fraud Detection System",
    company: "SecureBank International",
    industry: "Banking",
    challenge: "Traditional fraud detection was generating 95% false positives, missing real threats, and causing customer friction with legitimate transactions.",
    solution: "Deployed advanced AI fraud detection system with machine learning models, behavioral analysis, and real-time risk scoring for all transactions.",
    results: [
      "Reduced false positives by 90% while maintaining detection accuracy",
      "Improved fraud detection rate to 99.5%",
      "Reduced customer friction by 75% for legitimate transactions",
      "Prevented $200M in fraudulent transactions annually",
      "Achieved 40% reduction in fraud investigation costs"
    ],
    technologies: ["Machine Learning", "Behavioral Analytics", "Real-time Processing", "Risk Scoring", "API Integration"],
    duration: "12 months",
    imageUrl: "/images/case-studies/financial-fraud-ai.jpg"
  },
  {
    id: "ai-supply-chain-optimization",
    title: "AI-Driven Supply Chain Optimization",
    company: "GlobalLogistics Corp",
    industry: "Logistics",
    challenge: "Supply chain disruptions and inefficiencies were costing $50M annually, with poor demand forecasting and suboptimal inventory management.",
    solution: "Implemented AI-powered supply chain optimization platform with demand forecasting, inventory optimization, route planning, and risk management.",
    results: [
      "Improved demand forecasting accuracy by 85%",
      "Reduced inventory costs by 30% through optimized stock levels",
      "Decreased supply chain disruptions by 70%",
      "Optimized delivery routes saving $12M in fuel costs",
      "Achieved 99.5% on-time delivery performance"
    ],
    technologies: ["Predictive Analytics", "Optimization Algorithms", "IoT", "Blockchain", "Real-time Tracking"],
    duration: "16 months",
    imageUrl: "/images/case-studies/supply-chain-ai.jpg"
  },
  {
    id: "ai-energy-grid-optimization",
    title: "Smart Energy Grid AI Management",
    company: "PowerGrid Solutions",
    industry: "Energy",
    challenge: "Energy grid inefficiencies and renewable energy integration challenges were causing power outages and suboptimal energy distribution.",
    solution: "Deployed AI-powered smart grid management system with renewable energy integration, demand forecasting, and automated grid optimization.",
    results: [
      "Improved grid efficiency by 40% through intelligent load balancing",
      "Integrated 60% more renewable energy sources",
      "Reduced power outages by 85%",
      "Optimized energy distribution saving $25M annually",
      "Achieved 99.9% grid reliability"
    ],
    technologies: ["Smart Grid", "Renewable Energy", "Predictive Analytics", "IoT Sensors", "Grid Automation"],
    duration: "22 months",
    imageUrl: "/images/case-studies/energy-grid-ai.jpg"
  }
];
caseStudies.slice(0, 4).map((study) => ({
  ...study,
  metrics: [
    { value: study.results[0]?.split(" ")[0] || "95%", label: "Improvement" },
    { value: study.results[1]?.split(" ")[0] || "$2M+", label: "Savings" },
    { value: study.results[2]?.split(" ")[0] || "99%", label: "Success Rate" },
    { value: study.duration, label: "Duration" }
  ],
  testimonial: {
    quote: "This transformation exceeded our expectations and delivered measurable results from day one.",
    author: "CTO",
    title: study.company
  }
}));

const promotionalBanners2025 = [
  {
    id: "ai-autonomous-infrastructure-launch",
    title: "🚀 AI Autonomous Infrastructure is Here",
    subtitle: "Self-Healing, Self-Optimizing Systems",
    description: "Transform your infrastructure with AI that thinks, learns, and adapts. Achieve 99.99% uptime and 65% cost reduction with zero-touch operations.",
    cta: {
      primary: "Explore AI Infrastructure",
      secondary: "View Case Study"
    },
    ctaUrls: {
      primary: "/services/ai-autonomous-infrastructure",
      secondary: "/case-studies/ai-autonomous-operations-success"
    },
    type: "hero",
    category: "AI Operations",
    featured: true,
    badge: "NEW",
    image: "/images/banners/ai-autonomous-infrastructure-hero.jpg",
    icon: "🤖",
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Cost Savings", value: "65%" },
      { label: "Manual Work", value: "90% ↓" }
    ],
    testimonial: {
      quote: "AI Autonomous Infrastructure transformed our operations completely. We went from constant firefighting to zero-touch operations.",
      author: "Michael Rodriguez",
      company: "CloudScale Enterprises"
    },
    tags: ["AI Operations", "Autonomous Systems", "Infrastructure", "Self-Healing"],
    publishedDate: "2025-01-25"
  },
  {
    id: "edge-ai-computing-spotlight",
    title: "⚡ Edge AI Computing Solutions",
    subtitle: "Ultra-Low Latency Intelligence",
    description: "Deploy AI at the edge for sub-millisecond response times. Process data locally, reduce bandwidth costs, and enable offline AI capabilities.",
    cta: {
      primary: "Discover Edge AI",
      secondary: "Read Guide"
    },
    ctaUrls: {
      primary: "/services/edge-ai-computing",
      secondary: "/blog/ai-edge-computing-2025"
    },
    type: "feature",
    category: "Edge Computing",
    featured: true,
    badge: "TRENDING",
    image: "/images/banners/edge-ai-computing.jpg",
    icon: "⚡",
    metrics: [
      { label: "Latency", value: "< 1ms" },
      { label: "Bandwidth", value: "80% ↓" },
      { label: "Offline Capable", value: "100%" }
    ],
    testimonial: {
      quote: "Edge AI enabled real-time processing at our manufacturing plants, reducing defects by 95%.",
      author: "Jennifer Liu",
      company: "Precision Manufacturing Corp"
    },
    tags: ["Edge Computing", "Real-time AI", "IoT", "Manufacturing"],
    publishedDate: "2025-01-24"
  },
  {
    id: "quantum-ai-breakthrough",
    title: "🔬 Quantum AI Breakthroughs",
    subtitle: "The Next Frontier of Computing",
    description: "Discover how quantum computing combined with AI is solving previously impossible problems. 1000x speedup for complex optimization challenges.",
    cta: {
      primary: "Explore Quantum AI",
      secondary: "View Results"
    },
    ctaUrls: {
      primary: "/services/quantum-ai-optimization",
      secondary: "/case-studies/quantum-computing-optimization"
    },
    type: "announcement",
    category: "Quantum Computing",
    featured: true,
    badge: "BREAKTHROUGH",
    image: "/images/banners/quantum-ai-breakthrough.jpg",
    icon: "🔬",
    metrics: [
      { label: "Speedup", value: "1000x" },
      { label: "Complexity", value: "NP-Hard" },
      { label: "Accuracy", value: "40% ↑" }
    ],
    testimonial: {
      quote: "Quantum AI optimization helped us solve portfolio problems impossible with classical computing, delivering 18% better returns.",
      author: "David Kim",
      company: "Quantum Capital Management"
    },
    tags: ["Quantum Computing", "Machine Learning", "Optimization", "Finance"],
    publishedDate: "2025-01-23"
  },
  {
    id: "ai-sustainability-mission",
    title: "🌱 AI for Sustainability",
    subtitle: "Tackling Climate Change with Intelligence",
    description: "Join the fight against climate change with AI solutions that reduce carbon emissions by 40%, optimize resource usage, and create sustainable futures.",
    cta: {
      primary: "Join the Mission",
      secondary: "Learn More"
    },
    ctaUrls: {
      primary: "/services/ai-sustainability-solutions",
      secondary: "/blog/ai-sustainability-climate-2025"
    },
    type: "announcement",
    category: "Sustainability",
    featured: true,
    badge: "MISSION",
    image: "/images/banners/ai-sustainability.jpg",
    icon: "🌱",
    metrics: [
      { label: "Carbon Reduction", value: "40%" },
      { label: "Energy Savings", value: "25%" },
      { label: "Cost Savings", value: "$2M" }
    ],
    testimonial: {
      quote: "AI sustainability solutions reduced our carbon footprint by 40% while saving $2M annually in operational costs.",
      author: "Sarah Chen",
      company: "GreenTech Industries"
    },
    tags: ["Sustainability", "Climate Change", "Green AI", "Environmental"],
    publishedDate: "2025-01-22"
  },
  {
    id: "ai-ethics-governance-framework",
    title: "⚖️ AI Ethics & Governance Framework",
    subtitle: "Building Responsible AI Systems",
    description: "Ensure your AI systems are fair, transparent, and compliant. Our comprehensive framework helps you build trust and achieve 100% regulatory compliance.",
    cta: {
      primary: "Get Framework",
      secondary: "Download Guide"
    },
    ctaUrls: {
      primary: "/services/ai-ethics-governance",
      secondary: "/blog/ai-ethics-governance-2025"
    },
    type: "feature",
    category: "AI Governance",
    featured: true,
    badge: "ESSENTIAL",
    image: "/images/banners/ai-ethics-governance.jpg",
    icon: "⚖️",
    metrics: [
      { label: "Compliance", value: "100%" },
      { label: "Risk Reduction", value: "80%" },
      { label: "Trust Score", value: "95%" }
    ],
    testimonial: {
      quote: "The AI ethics framework gave us confidence in our systems and achieved 100% compliance with all regulations.",
      author: "Robert Martinez",
      company: "SecureBank International"
    },
    tags: ["AI Ethics", "Governance", "Compliance", "Responsible AI"],
    publishedDate: "2025-01-21"
  },
  {
    id: "new-case-studies-2025",
    title: "📊 New Success Stories",
    subtitle: "Real Results from Real Companies",
    description: "Explore our latest case studies featuring autonomous vehicles, healthcare diagnostics, smart cities, and more. See how AI is transforming industries.",
    cta: {
      primary: "View Case Studies",
      secondary: "Get Consultation"
    },
    ctaUrls: {
      primary: "/case-studies",
      secondary: "/contact"
    },
    type: "new",
    category: "Case Studies",
    featured: false,
    badge: "NEW",
    image: "/images/banners/new-case-studies.jpg",
    icon: "📊",
    metrics: [
      { label: "New Studies", value: "6+" },
      { label: "Industries", value: "8" },
      { label: "Success Rate", value: "100%" }
    ],
    tags: ["Case Studies", "Success Stories", "Industry Solutions", "Results"],
    publishedDate: "2025-01-20"
  },
  {
    id: "ai-blog-series-2025",
    title: "📝 Latest AI Insights",
    subtitle: "Expert Analysis and Trends",
    description: "Stay ahead with our latest blog posts covering edge AI, quantum computing, sustainability, and ethics. Written by industry experts and thought leaders.",
    cta: {
      primary: "Read Latest Posts",
      secondary: "Subscribe"
    },
    ctaUrls: {
      primary: "/blog",
      secondary: "/newsletter"
    },
    type: "trending",
    category: "Blog",
    featured: false,
    badge: "TRENDING",
    image: "/images/banners/ai-blog-series.jpg",
    icon: "📝",
    metrics: [
      { label: "New Posts", value: "4+" },
      { label: "Expert Authors", value: "5" },
      { label: "Categories", value: "6" }
    ],
    tags: ["Blog", "AI Insights", "Expert Analysis", "Trends"],
    publishedDate: "2025-01-19"
  }
];

const NewContentShowcase2025 = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = reactExports.useState(0);
  const [isVisible, setIsVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % promotionalBanners2025.slice(0, 3).length);
    }, 8e3);
    return () => clearInterval(interval);
  }, []);
  const featuredBanners = promotionalBanners2025.slice(0, 3);
  const latestBlogPosts = newContent2025.filter((item) => item.type === "blog").slice(0, 4);
  const latestCaseStudies = caseStudies.slice(-3);
  const featuredServices = featuredNewServices.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float", style: { animationDelay: "2s" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium mb-4 border border-blue-500/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-2" }),
          "New in 2025",
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 ml-2" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-4", children: [
          "Latest ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Innovations" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "Discover our newest AI solutions, breakthrough case studies, and cutting-edge services that are transforming industries worldwide." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 overflow-hidden", children: featuredBanners.map((banner, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `transition-all duration-1000 ${index === currentBannerIndex ? "opacity-100 translate-x-0" : index < currentBannerIndex ? "opacity-0 -translate-x-full absolute inset-0" : "opacity-0 translate-x-full absolute inset-0"}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row items-center gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-full", children: banner.badge }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-300 text-sm", children: banner.category })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-white mb-4", children: banner.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-lg mb-6", children: banner.description }),
              banner.metrics && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-6 mb-6", children: banner.metrics.map((metric, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-400", children: metric.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400", children: metric.label })
              ] }, idx)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: banner.ctaUrls.primary,
                    className: "inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl",
                    children: [
                      banner.cta.primary,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                    ]
                  }
                ),
                banner.ctaUrls.secondary && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: banner.ctaUrls.secondary,
                    className: "inline-flex items-center px-6 py-3 border border-blue-500/50 text-blue-300 font-medium rounded-lg hover:bg-blue-500/10 transition-all duration-300",
                    children: banner.cta.secondary
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-8xl", children: banner.icon }) }) })
          ] })
        },
        banner.id
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5 text-blue-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white", children: "Latest Insights" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: latestBlogPosts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: post.url,
              className: "block p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded", children: post.category }),
                  post.newBadge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded", children: "NEW" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-medium mb-1 group-hover:text-blue-300 transition-colors", children: post.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mb-2 line-clamp-2", children: post.excerpt }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-gray-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    post.readTime
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
                    new Date(post.publishedDate).toLocaleDateString()
                  ] })
                ] })
              ] }) })
            },
            post.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blog",
              className: "inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium mt-4",
              children: [
                "View all insights",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-1" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-purple-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white", children: "Featured Services" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: featuredServices.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: `/services/${service.id}`,
              className: "block p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: service.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-medium mb-1 group-hover:text-purple-300 transition-colors", children: service.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mb-2 line-clamp-2", children: service.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: service.features.slice(0, 2).map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded", children: feature }, idx)) })
                ] })
              ] })
            },
            service.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/services",
              className: "inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium mt-4",
              children: [
                "Explore all services",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-1" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-500/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-green-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white", children: "Success Stories" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: latestCaseStudies.map((study) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: `/case-studies/${study.id}`,
              className: "block p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded", children: study.industry }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-medium mb-1 group-hover:text-green-300 transition-colors", children: study.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm mb-2", children: study.company }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-green-400 font-medium", children: study.results[0] })
              ] }) })
            },
            study.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/case-studies",
              className: "inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium mt-4",
              children: [
                "View all case studies",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-1" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-col sm:flex-row gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/contact",
            className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl",
            children: [
              "Get Started Today",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 ml-2" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/resources",
            className: "inline-flex items-center px-8 py-4 border border-blue-500/50 text-blue-300 font-medium rounded-lg hover:bg-blue-500/10 transition-all duration-300",
            children: "Explore Resources"
          }
        )
      ] }) })
    ] })
  ] });
};
var NewContentShowcase2025_default = NewContentShowcase2025;

const NewServicesShowcase = () => {
  const featuredServices = newServices.filter((service) => service.featured);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-40 left-1/2 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float", style: { animationDelay: "4s" } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 text-sm font-medium mb-8 border border-green-400/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-2 animate-pulse" }),
          "🚀 NEW SERVICES AVAILABLE",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 ml-2 animate-pulse" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: [
          "Revolutionary AI Solutions",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent", children: "Now Available" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto mb-8", children: "Discover our latest AI-powered services that are transforming industries worldwide. From autonomous operations to quantum computing, we're pushing the boundaries of what's possible." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl p-6 mb-8 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 text-green-400 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-green-400", children: "🔥 LIMITED TIME OFFER" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-6 h-6 text-green-400 animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-lg font-semibold mb-2", children: "Get 50% OFF Your First 3 Months + FREE AI Strategy Consultation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-sm", children: "Valid until March 31, 2025 • No setup fees • Cancel anytime" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16", children: featuredServices.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: service.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-blue-300", children: service.category }),
                  service.newBadge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium", children: "NEW" })
                ] })
              ] }),
              service.pricing.popular && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 fill-current" }),
                "POPULAR"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-4", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-6 text-sm leading-relaxed", children: service.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-2xl font-bold text-green-400", children: [
                  "$",
                  service.pricing.starting
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-400", children: "/month" })
              ] }),
              service.pricing.discount && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-green-400 font-medium", children: service.pricing.discount })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-6", children: service.benefits.slice(0, 3).map((benefit, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-300 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-3 text-green-400 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: benefit })
            ] }, index)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 mb-6", children: service.metrics.slice(0, 3).map((metric, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-white", children: metric.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-400", children: metric.label })
            ] }, index)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: `/services/${service.id}`,
                className: "flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-green-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2",
                children: [
                  service.cta.primary,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                ]
              }
            ) })
          ]
        },
        service.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-8 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Ready to Transform Your Business?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-6 max-w-2xl mx-auto", children: "Join 500+ companies already using our AI solutions to drive growth, reduce costs, and achieve unprecedented efficiency." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/services",
                className: "bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2",
                children: [
                  "Explore All Services",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105",
                children: "Get Free Consultation"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-green-400", children: "500+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400", children: "Happy Clients" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-blue-400", children: "99.9%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400", children: "Uptime SLA" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-purple-400", children: "24/7" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400", children: "Support" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-cyan-400", children: "5★" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-400", children: "Client Rating" })
          ] })
        ] })
      ] })
    ] })
  ] });
};
var NewServicesShowcase_default = NewServicesShowcase;

const SuccessStoriesShowcase = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gradient-to-br from-gray-50 to-blue-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 text-green-600 text-sm font-medium mb-8 border border-green-500/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 mr-2" }),
        "🏆 SUCCESS STORIES",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-4 h-4 ml-2" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: [
        "Real Results from",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent", children: "Real Companies" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mb-8", children: "See how leading companies across industries are transforming their operations with our AI solutions. These success stories showcase measurable results and real business impact." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8 max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-green-600", children: "500+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "Projects Delivered" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-blue-600", children: "$50M+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "Cost Savings Generated" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-purple-600", children: "99.9%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "Client Satisfaction" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-orange-600", children: "24/7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: "Support Available" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-2 gap-8 mb-16", children: caseStudies.map((study) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-gray-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-blue-600 font-medium mb-1", children: study.industry }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: study.company })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-yellow-400 fill-current" }, i)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: study.challenge })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-b border-gray-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-3", children: "Our Solution" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: study.solution })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-4", children: "Key Results" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 mb-4", children: study.results.slice(0, 4).map((result, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-green-500 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: result })
            ] }, index)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "text-sm font-medium text-gray-700 mb-2", children: "Technologies Used" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: study.technologies.map((tech, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full",
                  children: tech
                },
                index
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: `/case-studies/${study.id}`,
                className: "text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 group",
                children: [
                  "Read Full Case Study",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                ]
              }
            )
          ] })
        ]
      },
      study.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Impact Across Industries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Our AI solutions are transforming operations across diverse industries" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "E-commerce" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-3", children: "99% reduction in processing time, $2.3M annual savings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-600", children: "500+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-600", children: "Projects Delivered" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Banking & Finance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-3", children: "95% faster customer service, 80% automation rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: "150+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-600", children: "Financial Institutions" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Manufacturing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mb-3", children: "70% waste reduction, 85% less downtime" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-purple-600", children: "200+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-600", children: "Manufacturing Plants" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "Ready to Create Your Success Story?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-green-100 mb-6 max-w-2xl mx-auto", children: "Join hundreds of companies that have transformed their operations with our AI solutions. Let's discuss how we can help you achieve similar results." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/case-studies",
            className: "bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2",
            children: [
              "View All Case Studies",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/contact",
            className: "border border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105",
            children: "Start Your Project"
          }
        )
      ] })
    ] }) })
  ] }) });
};
var SuccessStoriesShowcase_default = SuccessStoriesShowcase;

const TrendingContentBanner = () => {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const trendingItems = [
    {
      title: "AI Autonomous Infrastructure 2026",
      description: "Self‑healing, self‑optimizing, self‑scaling platforms with budgets.",
      views: "12.4K",
      readTime: "9 min",
      category: "Platform Engineering",
      icon: TrendingUp,
      link: "/blog/ai-autonomous-infrastructure-2026",
      badge: "HOT"
    },
    {
      title: "AI Safety Budgets 2026",
      description: "Budgeted actions, approvals, and rollbacks that keep AI features safe.",
      views: "13.2K",
      readTime: "7 min",
      category: "AI Governance",
      icon: Shield,
      link: "/blog/ai-safety-budgets-2026",
      badge: "NEW"
    },
    {
      title: "Edge Personalization 2026",
      description: "Private, sub‑100ms personalization with signed configs and caches.",
      views: "9.7K",
      readTime: "8 min",
      category: "Edge Computing",
      icon: Zap,
      link: "/blog/edge-personalization-2026",
      badge: "HOT"
    },
    {
      title: "Zero‑Trust for GenAI 2026",
      description: "Prompt firewalls, egress, signed outputs for safe GenAI.",
      views: "11.8K",
      readTime: "8 min",
      category: "Security",
      icon: Shield,
      link: "/blog/zero-trust-for-genai-2026",
      badge: "NEW"
    },
    {
      title: "Zero‑Trust for GenAI 2026",
      description: "Prompt firewalls, egress controls, and signed outputs at scale.",
      views: "10.9K",
      readTime: "7 min",
      category: "Security",
      icon: Shield,
      link: "/blog/zero-trust-for-genai-2026",
      badge: "TRENDING"
    },
    {
      title: "Quantum‑AI Hybrid Blueprint 2026",
      description: "Near‑term wins by combining QC libs with AI orchestration.",
      views: "9.1K",
      readTime: "8 min",
      category: "Quantum",
      icon: Brain,
      link: "/blog/quantum-ai-hybrid-blueprint-2026",
      badge: "NEW"
    },
    {
      title: "Edge LLM Caching Blueprint 2026",
      description: "Sub‑100ms prompts via tiered caches and freshness windows.",
      views: "8.9K",
      readTime: "6 min",
      category: "Architecture",
      icon: Zap,
      link: "/blog/edge-llm-caching-blueprint-2026",
      badge: "POPULAR"
    },
    {
      title: "Production Agent Actions 2026",
      description: "Deterministic tools, budgets, and live traces for reliability.",
      views: "8.2K",
      readTime: "8 min",
      category: "GenAI",
      icon: Brain,
      link: "/blog/production-agent-actions-2026",
      badge: "NEW"
    },
    {
      title: "Platform Golden Paths 2026",
      description: "Paved roads that measurably move product KPIs and ROI.",
      views: "7.7K",
      readTime: "8 min",
      category: "Platform",
      icon: TrendingUp,
      link: "/blog/platform-golden-paths-kpis-2026",
      badge: "TRENDING"
    }
  ];
  trendingItems.push(
    {
      title: "AI Data Lineage for GenAI 2026",
      description: "Trace prompts, datasets, and outputs with signed SBOMs and lineage.",
      views: "7.4K",
      readTime: "7 min",
      category: "AI Governance",
      icon: Shield,
      link: "/blog/ai-data-lineage-for-genai-2026",
      badge: "NEW"
    },
    {
      title: "Edge Secure Feature Stores 2026",
      description: "Sub‑100ms private features with signed configs and on‑device caches.",
      views: "6.8K",
      readTime: "6 min",
      category: "Architecture",
      icon: Zap,
      link: "/blog/edge-secure-feature-stores-2026",
      badge: "HOT"
    },
    {
      title: "LLM Evaluation Playbooks 2026",
      description: "Online canaries and KPI‑linked scorecards that predict outcomes.",
      views: "8.1K",
      readTime: "8 min",
      category: "AI Strategy",
      icon: TrendingUp,
      link: "/blog/llm-evaluation-playbooks-2026",
      badge: "TRENDING"
    }
  );
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % trendingItems.length);
    }, 4e3);
    return () => clearInterval(interval);
  }, [trendingItems.length]);
  const currentItem = trendingItems[currentIndex];
  const getBadgeColor = (badge) => {
    switch (badge) {
      case "HOT":
        return "bg-red-500 text-white";
      case "NEW":
        return "bg-green-500 text-white";
      case "TRENDING":
        return "bg-blue-500 text-white";
      case "POPULAR":
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };
  const Icon = currentItem.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-zion-blue/20 to-zion-purple/20 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:shadow-2xl transition-all duration-500 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-zion-cyan animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-zion-cyan", children: "TRENDING NOW" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-2 py-1 rounded-full text-xs font-bold ${getBadgeColor(currentItem.badge)} animate-bounce`, children: currentItem.badge })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-zion-blue/20 p-3 rounded-lg group-hover:bg-zion-blue/30 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-zion-cyan group-hover:scale-110 transition-transform" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-zion-slate-light uppercase tracking-wider", children: currentItem.category }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors", children: currentItem.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light text-sm mb-3", children: currentItem.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-zion-slate-light", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  currentItem.views,
                  " views"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  currentItem.readTime,
                  " read"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 text-yellow-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "4.9/5" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: currentItem.link,
            className: "bg-zion-cyan text-white hover:bg-zion-blue-light px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group/btn",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
              "Read Now",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: trendingItems.map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setCurrentIndex(index),
            className: `w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-zion-cyan scale-125" : "bg-white/30 hover:bg-white/50"}`
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 w-full bg-white/10 rounded-full h-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-gradient-to-r from-zion-cyan to-zion-blue-light h-1 rounded-full transition-all duration-100 ease-linear",
        style: { width: `${(currentIndex + 1) / trendingItems.length * 100}%` }
      }
    ) })
  ] });
};
var TrendingContentBanner_default = TrendingContentBanner;

const featuredBlogPosts = [
  {
    id: 1,
    title: "AI Workflow Automation ROI Calculator",
    description: "Interactive tool to calculate your potential savings",
    category: "AI & Automation",
    readTime: "Interactive",
    views: "2.3k",
    rating: 4.9,
    badge: "Featured Tool",
    link: "/blog/ai-workflow-automation-roi-calculator",
    color: "green"
  },
  {
    id: 2,
    title: "Cloud FinOps Guardrails Engineers Use",
    description: "Budgets, alerts, and PR gates that reduce waste 25–40%.",
    category: "Cloud",
    readTime: "7 min read",
    views: "2.1k",
    rating: 4.8,
    badge: "New",
    link: "/blog/cloud-finops-guardrails-2025",
    color: "blue"
  },
  {
    id: 3,
    title: "RAG That Works in Production",
    description: "Hybrid search + freshness + evals you can trust.",
    category: "GenAI",
    readTime: "9 min read",
    views: "3.8k",
    rating: 4.9,
    badge: "Trending",
    link: "/blog/practical-rag-in-production-2025",
    color: "purple"
  }
];
const BlogPromotionBanner = ({
  className = ""
}) => {
  const getColorClasses = (color) => {
    const colorMap = {
      green: "from-green-500 to-emerald-600",
      blue: "from-blue-500 to-cyan-600",
      purple: "from-purple-500 to-pink-600"
    };
    return colorMap[color] || "from-gray-500 to-gray-600";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium mb-4 border border-blue-500/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-2 animate-pulse" }),
        "Latest & Most Popular Content"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Don't Miss These Trending Articles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 text-lg max-w-2xl mx-auto", children: "Our most-read articles this week, featuring interactive tools, comprehensive guides, and actionable insights." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mb-8", children: featuredBlogPosts.map((post) => {
      const colorGradient = getColorClasses(post.color);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          className: "bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${colorGradient} text-white`, children: post.badge }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-yellow-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-current" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: post.rating })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors", children: post.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-4 text-sm leading-relaxed", children: post.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-gray-400 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3 h-3" }),
                  post.views
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                  post.readTime
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-gray-700/50 px-2 py-1 rounded-full", children: post.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: post.link,
                className: `w-full bg-gradient-to-r ${colorGradient} text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn`,
                children: [
                  post.badge === "Featured Tool" ? "Try Tool" : "Read Article",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover/btn:translate-x-1 transition-transform" })
                ]
              }
            )
          ]
        },
        post.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-6 h-6 text-yellow-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-white", children: "Join 10,000+ Weekly Readers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-6", children: "Get our best content delivered to your inbox every week. No spam, just valuable insights." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            placeholder: "Enter your email",
            className: "flex-1 px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2", children: [
          "Subscribe",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] })
      ] })
    ] })
  ] });
};
var BlogPromotionBanner_default = BlogPromotionBanner;

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = reactExports.useState({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });
  reactExports.useEffect(() => {
    if (typeof window === "undefined" || false) {
      return;
    }
    const measureWebVitals = async () => {
      try {
        const fcpEntry = performance.getEntriesByName("first-contentful-paint")[0];
        if (fcpEntry) {
          setMetrics((prev) => ({ ...prev, fcp: fcpEntry.startTime }));
        }
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics((prev) => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setMetrics((prev) => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        });
        fidObserver.observe({ entryTypes: ["first-input"] });
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics((prev) => ({ ...prev, cls: clsValue }));
            }
          });
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });
        const navigationEntry = performance.getEntriesByType("navigation")[0];
        if (navigationEntry) {
          setMetrics((prev) => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
        }
        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      } catch (error) {
        console.warn("Performance monitoring failed:", error);
      }
    };
    const timer = setTimeout(measureWebVitals, 1e3);
    return () => clearTimeout(timer);
  }, []);
  reactExports.useEffect(() => {
    if (metrics.fcp && metrics.lcp && metrics.fid && metrics.cls && metrics.ttfb) {
      if (typeof window !== "undefined" && "gtag" in window) {
        window.gtag("event", "web_vitals", {
          event_category: "Performance",
          event_label: "Core Web Vitals",
          fcp: Math.round(metrics.fcp),
          lcp: Math.round(metrics.lcp),
          fid: Math.round(metrics.fid * 1e3),
          // Convert to milliseconds
          cls: Math.round(metrics.cls * 1e3),
          // Convert to milliseconds
          ttfb: Math.round(metrics.ttfb)
        });
      }
    }
  }, [metrics]);
  return null;
};
var PerformanceMonitor_default = PerformanceMonitor;

const SEOOptimizer = ({
  title = "Zion Tech Group — AI, Micro SaaS, and IT Services",
  description = "Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and automation.",
  keywords = "AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, automation",
  canonical,
  ogImage = "/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData
}) => {
  reactExports.useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = keywords;
      document.head.appendChild(meta);
    }
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", canonical);
      } else {
        const link = document.createElement("link");
        link.rel = "canonical";
        link.href = canonical;
        document.head.appendChild(link);
      }
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.content = title;
      document.head.appendChild(meta);
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      meta.content = description;
      document.head.appendChild(meta);
    }
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      ogImageMeta.setAttribute("content", ogImage);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:image");
      meta.content = ogImage;
      document.head.appendChild(meta);
    }
    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) {
      ogTypeMeta.setAttribute("content", ogType);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:type");
      meta.content = ogType;
      document.head.appendChild(meta);
    }
    const twitterCardMeta = document.querySelector('meta[name="twitter:card"]');
    if (twitterCardMeta) {
      twitterCardMeta.setAttribute("content", twitterCard);
    } else {
      const meta = document.createElement("meta");
      meta.name = "twitter:card";
      meta.content = twitterCard;
      document.head.appendChild(meta);
    }
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    } else {
      const meta = document.createElement("meta");
      meta.name = "twitter:title";
      meta.content = title;
      document.head.appendChild(meta);
    }
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "twitter:description";
      meta.content = description;
      document.head.appendChild(meta);
    }
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute("content", ogImage);
    } else {
      const meta = document.createElement("meta");
      meta.name = "twitter:image";
      meta.content = ogImage;
      document.head.appendChild(meta);
    }
    if (structuredData) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.textContent = JSON.stringify(structuredData);
      } else {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1.0";
      document.head.appendChild(meta);
    }
    const charset = document.querySelector("meta[charset]");
    if (!charset) {
      const meta = document.createElement("meta");
      meta.setAttribute("charset", "UTF-8");
      document.head.insertBefore(meta, document.head.firstChild);
    }
  }, [title, description, keywords, canonical, ogImage, ogType, twitterCard, structuredData]);
  return null;
};
var SEOOptimizer_default = SEOOptimizer;

const AccessibilityEnhancer = () => {
  reactExports.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Tab") {
        document.body.classList.add("using-keyboard");
      }
    };
    const handleMouseDown = () => {
      document.body.classList.remove("using-keyboard");
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);
    const skipLink = document.createElement("a");
    skipLink.href = "#main-content";
    skipLink.textContent = "Skip to main content";
    skipLink.className = "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
    skipLink.style.cssText = `
      position: absolute;
      left: -9999px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `;
    document.body.insertBefore(skipLink, document.body.firstChild);
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
      const inputs = form.querySelectorAll("input, textarea, select");
      inputs.forEach((input, index) => {
        const element = input;
        if (!element.id && !element.getAttribute("aria-label")) {
          element.id = `input-${index}`;
        }
        if (element.hasAttribute("required")) {
          element.setAttribute("aria-required", "true");
        }
        element.addEventListener("invalid", () => {
          element.setAttribute("aria-invalid", "true");
        });
        element.addEventListener("input", () => {
          if (element.checkValidity()) {
            element.setAttribute("aria-invalid", "false");
          }
        });
      });
    });
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      if (!button.getAttribute("aria-label") && !button.textContent?.trim()) {
        button.setAttribute("aria-label", "Button");
      }
    });
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (link.href && link.href.startsWith("http") && !link.href.includes(window.location.hostname)) {
        link.setAttribute("rel", "noopener noreferrer");
        if (!link.getAttribute("aria-label")) {
          link.setAttribute("aria-label", `${link.textContent} (opens in new tab)`);
        }
      }
    });
    const interactiveElements = document.querySelectorAll("button, a, input, textarea, select, [tabindex]");
    interactiveElements.forEach((element) => {
      element.addEventListener("focus", () => {
        element.classList.add("focus-visible");
      });
      element.addEventListener("blur", () => {
        element.classList.remove("focus-visible");
      });
    });
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.alt && img.getAttribute("role") !== "presentation") {
        img.alt = "Image";
      }
    });
    const prefersHighContrast = window.matchMedia("(prefers-contrast: high)");
    if (prefersHighContrast.matches) {
      document.body.classList.add("high-contrast");
    }
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) {
      document.body.classList.add("reduce-motion");
    }
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const handleDarkModeChange = (e) => {
      if (e.matches) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };
    if (prefersDarkMode.matches) {
      document.body.classList.add("dark");
    }
    prefersDarkMode.addEventListener("change", handleDarkModeChange);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
      prefersDarkMode.removeEventListener("change", handleDarkModeChange);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);
  return null;
};
var AccessibilityEnhancer_default = AccessibilityEnhancer;

const SecurityEnhancer = () => {
  reactExports.useEffect(() => {
    const addCSP = () => {
      const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!cspMeta) {
        const meta = document.createElement("meta");
        meta.setAttribute("http-equiv", "Content-Security-Policy");
        meta.content = `
          default-src 'self';
          script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
          font-src 'self' https://fonts.gstatic.com;
          img-src 'self' data: https: blob:;
          connect-src 'self' https://www.google-analytics.com https://analytics.google.com;
          frame-src 'none';
          object-src 'none';
          base-uri 'self';
          form-action 'self';
          upgrade-insecure-requests;
        `.replace(/\s+/g, " ").trim();
        document.head.appendChild(meta);
      }
    };
    const addSecurityHeaders = () => {
      const headers = [
        { name: "X-Content-Type-Options", value: "nosniff" },
        { name: "X-Frame-Options", value: "DENY" },
        { name: "X-XSS-Protection", value: "1; mode=block" },
        { name: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { name: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" }
      ];
      headers.forEach((header) => {
        const meta = document.createElement("meta");
        meta.setAttribute("http-equiv", header.name);
        meta.content = header.value;
        document.head.appendChild(meta);
      });
    };
    const sanitizeInputs = () => {
      const inputs = document.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        input.addEventListener("input", (e) => {
          const target = e.target;
          target.value = target.value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/<[^>]*>/g, "").replace(/javascript:/gi, "").replace(/on\w+\s*=/gi, "");
        });
      });
    };
    const addNonces = () => {
      const scripts = document.querySelectorAll("script:not([src])");
      scripts.forEach((script) => {
        if (!script.getAttribute("nonce")) {
          const nonce = Math.random().toString(36).substring(2, 15);
          script.setAttribute("nonce", nonce);
        }
      });
    };
    const preventClickjacking = () => {
      if (window !== window.top) {
        window.top.location = window.location;
      }
    };
    const addIntegrityChecks = () => {
      const externalScripts = document.querySelectorAll('script[src^="http"]');
      externalScripts.forEach((script) => {
        if (!script.getAttribute("crossorigin")) {
          script.setAttribute("crossorigin", "anonymous");
        }
      });
      const externalStyles = document.querySelectorAll('link[href^="http"]');
      externalStyles.forEach((link) => {
        if (!link.getAttribute("crossorigin")) {
          link.setAttribute("crossorigin", "anonymous");
        }
      });
    };
    const addSecurityMonitoring = () => {
      const originalError = console.error;
      console.error = function(...args) {
        const message = args.join(" ");
        if (message.includes("CSP") || message.includes("XSS") || message.includes("CSRF")) {
          if (typeof window !== "undefined" && "gtag" in window) {
            window.gtag("event", "security_error", {
              event_category: "Security",
              event_label: "Console Error",
              value: message
            });
          }
        }
        originalError.apply(console, args);
      };
      window.addEventListener("error", (e) => {
        if (e.message.includes("Script error") || e.message.includes("SecurityError")) {
          if (typeof window !== "undefined" && "gtag" in window) {
            window.gtag("event", "security_error", {
              event_category: "Security",
              event_label: "Script Error",
              value: e.message
            });
          }
        }
      });
    };
    const secureCookies = () => {
      if (location.protocol === "https:") {
        document.cookie = document.cookie.split(";").map((cookie) => cookie.trim()).filter((cookie) => cookie).map((cookie) => {
          if (!cookie.includes("Secure")) {
            return cookie + "; Secure";
          }
          return cookie;
        }).join("; ");
      }
    };
    addCSP();
    addSecurityHeaders();
    sanitizeInputs();
    addNonces();
    preventClickjacking();
    addIntegrityChecks();
    addSecurityMonitoring();
    secureCookies();
    const handleFormSubmit = (e) => {
      const form = e.target;
      const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
      if (csrfToken && !form.querySelector('input[name="_token"]')) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "_token";
        input.value = csrfToken;
        form.appendChild(input);
      }
      const formData = new FormData(form);
      for (const [key, value] of formData.entries()) {
        if (typeof value === "string" && value.includes("<script")) {
          e.preventDefault();
          alert("Invalid input detected. Please try again.");
          return false;
        }
      }
    };
    document.addEventListener("submit", handleFormSubmit);
    return () => {
      document.removeEventListener("submit", handleFormSubmit);
    };
  }, []);
  return null;
};
var SecurityEnhancer_default = SecurityEnhancer;

class EnhancedErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    if (typeof window !== "undefined" && "gtag" in window) {
      window.gtag("event", "exception", {
        description: error.message,
        fatal: false,
        custom_map: {
          error_boundary: "EnhancedErrorBoundary",
          component_stack: errorInfo.componentStack
        }
      });
    }
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    this.reportError(error, errorInfo);
  }
  reportError = (error, errorInfo) => {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId()
    };
    console.error("Error Report:", errorReport);
  };
  getUserId = () => {
    return localStorage.getItem("userId") || null;
  };
  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };
  handleReload = () => {
    window.location.reload();
  };
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-12 w-12 text-red-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                }
              )
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-3xl font-extrabold text-gray-900", children: "Oops! Something went wrong" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-gray-600", children: "We're sorry, but something unexpected happened. Our team has been notified." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white shadow rounded-lg p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-4", children: "What you can do:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 h-5 w-5 text-green-500 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3", children: "Try refreshing the page" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 h-5 w-5 text-green-500 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3", children: "Go back to the previous page" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 h-5 w-5 text-green-500 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3", children: "Contact support if the problem persists" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: this.handleRetry,
                className: "flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors",
                children: "Try Again"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: this.handleReload,
                className: "flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors",
                children: "Reload Page"
              }
            )
          ] }),
          false
        ] })
      ] }) });
    }
    return this.props.children;
  }
}
var EnhancedErrorBoundary_default = EnhancedErrorBoundary;

const AnalyticsMonitor = () => {
  const [metrics, setMetrics] = reactExports.useState(null);
  const [isInitialized, setIsInitialized] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const initializeAnalytics = () => {
      if (typeof window !== "undefined" && "gtag" in window) {
        const gtag = window.gtag;
        gtag("config", "GA_MEASUREMENT_ID", {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {
            custom_parameter_1: "user_type",
            custom_parameter_2: "session_duration"
          }
        });
        setIsInitialized(true);
      }
    };
    const trackPageView = () => {
      if (typeof window !== "undefined" && "gtag" in window) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
    };
    const trackEvent = (event) => {
      if (typeof window !== "undefined" && "gtag" in window) {
        window.gtag("event", event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value,
          ...event.custom_parameters
        });
      }
    };
    const trackPerformance = () => {
      if ("performance" in window) {
        const navigation = performance.getEntriesByType("navigation")[0];
        const paintEntries = performance.getEntriesByType("paint");
        const performanceMetrics = {
          pageLoadTime: navigation.loadEventEnd - navigation.navigationStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
          firstPaint: paintEntries.find((entry) => entry.name === "first-paint")?.startTime || 0,
          firstContentfulPaint: paintEntries.find((entry) => entry.name === "first-contentful-paint")?.startTime || 0,
          largestContentfulPaint: 0,
          // Will be updated by LCP observer
          firstInputDelay: 0,
          // Will be updated by FID observer
          cumulativeLayoutShift: 0
          // Will be updated by CLS observer
        };
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          performanceMetrics.largestContentfulPaint = lastEntry.startTime;
          trackEvent({
            category: "Web Vitals",
            action: "LCP",
            label: window.location.pathname,
            value: Math.round(lastEntry.startTime)
          });
        });
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            performanceMetrics.firstInputDelay = entry.processingStart - entry.startTime;
            trackEvent({
              category: "Web Vitals",
              action: "FID",
              label: window.location.pathname,
              value: Math.round((entry.processingStart - entry.startTime) * 1e3)
              // Convert to milliseconds
            });
          });
        });
        fidObserver.observe({ entryTypes: ["first-input"] });
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              performanceMetrics.cumulativeLayoutShift = clsValue;
            }
          });
          if (clsValue > 0) {
            trackEvent({
              category: "Web Vitals",
              action: "CLS",
              label: window.location.pathname,
              value: Math.round(clsValue * 1e3)
              // Convert to milliseconds
            });
          }
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });
        setMetrics(performanceMetrics);
        trackEvent({
          category: "Performance",
          action: "Page Load Time",
          label: window.location.pathname,
          value: Math.round(performanceMetrics.pageLoadTime)
        });
        trackEvent({
          category: "Performance",
          action: "DOM Content Loaded",
          label: window.location.pathname,
          value: Math.round(performanceMetrics.domContentLoaded)
        });
        trackEvent({
          category: "Performance",
          action: "First Paint",
          label: window.location.pathname,
          value: Math.round(performanceMetrics.firstPaint)
        });
        trackEvent({
          category: "Performance",
          action: "First Contentful Paint",
          label: window.location.pathname,
          value: Math.round(performanceMetrics.firstContentfulPaint)
        });
        return () => {
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    };
    const trackInteractions = () => {
      const trackButtonClicks = (e) => {
        const target = e.target;
        if (target.tagName === "BUTTON" || target.closest("button")) {
          const button = target.closest("button") || target;
          trackEvent({
            category: "User Interaction",
            action: "Button Click",
            label: button.textContent?.trim() || button.getAttribute("aria-label") || "Unknown Button"
          });
        }
      };
      const trackLinkClicks = (e) => {
        const target = e.target;
        if (target.tagName === "A" || target.closest("a")) {
          const link = target.closest("a") || target;
          trackEvent({
            category: "User Interaction",
            action: "Link Click",
            label: link.href,
            custom_parameters: {
              link_text: link.textContent?.trim(),
              is_external: !link.href.startsWith(window.location.origin)
            }
          });
        }
      };
      const trackFormSubmissions = (e) => {
        const form = e.target;
        if (form.tagName === "FORM") {
          trackEvent({
            category: "User Interaction",
            action: "Form Submit",
            label: form.action || window.location.pathname,
            custom_parameters: {
              form_id: form.id,
              form_class: form.className
            }
          });
        }
      };
      let maxScrollDepth = 0;
      const trackScrollDepth = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollDepth = Math.round(scrollTop / documentHeight * 100);
        if (scrollDepth > maxScrollDepth) {
          maxScrollDepth = scrollDepth;
          if (scrollDepth >= 25 && scrollDepth < 50 && maxScrollDepth >= 25) {
            trackEvent({
              category: "User Engagement",
              action: "Scroll Depth",
              label: "25%",
              value: 25
            });
          } else if (scrollDepth >= 50 && scrollDepth < 75 && maxScrollDepth >= 50) {
            trackEvent({
              category: "User Engagement",
              action: "Scroll Depth",
              label: "50%",
              value: 50
            });
          } else if (scrollDepth >= 75 && scrollDepth < 90 && maxScrollDepth >= 75) {
            trackEvent({
              category: "User Engagement",
              action: "Scroll Depth",
              label: "75%",
              value: 75
            });
          } else if (scrollDepth >= 90 && maxScrollDepth >= 90) {
            trackEvent({
              category: "User Engagement",
              action: "Scroll Depth",
              label: "90%",
              value: 90
            });
          }
        }
      };
      document.addEventListener("click", trackButtonClicks);
      document.addEventListener("click", trackLinkClicks);
      document.addEventListener("submit", trackFormSubmissions);
      window.addEventListener("scroll", trackScrollDepth, { passive: true });
      const sessionStart = Date.now();
      const trackSessionDuration = () => {
        const sessionDuration = Math.round((Date.now() - sessionStart) / 1e3);
        trackEvent({
          category: "User Engagement",
          action: "Session Duration",
          label: window.location.pathname,
          value: sessionDuration
        });
      };
      window.addEventListener("beforeunload", trackSessionDuration);
      return () => {
        document.removeEventListener("click", trackButtonClicks);
        document.removeEventListener("click", trackLinkClicks);
        document.removeEventListener("submit", trackFormSubmissions);
        window.removeEventListener("scroll", trackScrollDepth);
        window.removeEventListener("beforeunload", trackSessionDuration);
      };
    };
    initializeAnalytics();
    trackPageView();
    const cleanupPerformance = trackPerformance();
    const cleanupInteractions = trackInteractions();
    return () => {
      if (cleanupPerformance) cleanupPerformance();
      if (cleanupInteractions) cleanupInteractions();
    };
  }, []);
  reactExports.useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== "undefined" && "gtag" in window) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      window.trackEvent = (event) => {
        if (typeof window !== "undefined" && "gtag" in window) {
          window.gtag("event", event.action, {
            event_category: event.category,
            event_label: event.label,
            value: event.value,
            ...event.custom_parameters
          });
        }
      };
    }
  }, []);
  return null;
};
var AnalyticsMonitor_default = AnalyticsMonitor;

const LoadingSpinner = ({
  size = "md",
  color = "primary",
  className = ""
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };
  const colorClasses = {
    primary: "text-blue-600",
    secondary: "text-gray-600",
    white: "text-white"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex justify-center items-center ${className}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `animate-spin rounded-full border-2 border-gray-300 border-t-current ${sizeClasses[size]} ${colorClasses[color]}`,
      role: "status",
      "aria-label": "Loading",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Loading..." })
    }
  ) });
};

export { AccessibilityEnhancer_default as A, BlogPromotionBanner_default as B, ComprehensivePromoBanner as C, EnhancedPromotionalBanner_default as E, Header as H, LatestContentBanner_default as L, ModernFeatures as M, NewContentAnnouncement_default as N, PerformanceMonitor_default as P, SuccessStoriesShowcase_default as S, TrendingContentBanner_default as T, NewContentPromoBanner_default as a, NewArticlesPromoBanner as b, NewServicesPromoBanner as c, ContentPromotionBanner as d, NewContentShowcase_default as e, NewContentShowcase2025_default as f, NewServicesShowcase_default as g, LatestArticlesShowcase_default as h, EnhancedErrorBoundary_default as i, SEOOptimizer_default as j, SecurityEnhancer_default as k, latestArticles as l, AnalyticsMonitor_default as m, LoadingSpinner as n };
