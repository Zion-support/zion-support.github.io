import { j as jsxRuntimeExports, S as Sparkles, T as TrendingUp, C as Clock, a as Calendar, L as Link, A as ArrowRight, r as reactExports, b as Star, X, c as Shield, B as Brain, Z as Zap, d as BookOpen, e as CircleCheckBig, f as Award, U as Users, g as Target, E as Eye, H as Helmet } from './chunk-CxfzcOjV.js';

const ContentPromotionBanner = ({ className }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: className || "py-6", "aria-label": "Content promotion banner" });
};
var ContentPromotionBanner_default = ContentPromotionBanner;

const Header = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "w-full py-4 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "text-xl font-semibold", children: "Zion Tech Group" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-6", "aria-label": "Main", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "hover:underline", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/services", className: "hover:underline", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/blog", className: "hover:underline", children: "Blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact", className: "hover:underline", children: "Contact" })
    ] })
  ] }) });
};
var Header_default = Header;

const latestArticles = [
  {
    id: "secure-agents-runtime-2026",
    slug: "secure-agents-runtime-2026",
    title: "Secure AI Agents Runtime: Sandboxes, Egress Policies, and Traces",
    description: "Run multi‑tool agents safely with isolation, policy tests in CI, and live traces.",
    excerpt: "A production checklist for secure, observable AI agents without slowing teams.",
    author: "Zion Tech Group Team",
    date: "2025-10-09",
    category: "AI Security",
    tags: ["Agents", "Security", "Policy", "Tracing"],
    featured: true,
    readTime: "8 min read",
    image: "/images/secure-agents-runtime.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "agentops-slo-handbook-2025",
    slug: "agentops-slo-handbook-2025",
    title: "AgentOps SLO Handbook: Keeping Autonomous Systems Reliable",
    description: "Define SLOs, budgets, and rollback-ready canaries for agent workflows in production.",
    excerpt: "SLOs and risk budgets that keep autonomous systems fast, reliable, and safe.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "GenAI",
    tags: ["Agents", "SLOs", "Canaries", "Reliability"],
    featured: true,
    readTime: "7 min read",
    image: "/images/agentops-slo.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "zero-trust-ai-pipelines-2025",
    slug: "zero-trust-ai-pipelines-2025",
    title: "Zero‑Trust for AI Pipelines: Auth, Policy Tests, and Attestations",
    description: "Harden datasets, prompts, and tools with signed artifacts and CI policy gates.",
    excerpt: "End-to-end provenance and zero-trust controls for AI supply chains.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Security",
    tags: ["Zero Trust", "Supply Chain", "Policy"],
    featured: true,
    readTime: "8 min read",
    image: "/images/zero-trust-ai-pipelines.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "policy-tests-in-ci-2025",
    slug: "policy-tests-in-ci-2025",
    title: "Policy Tests in CI: Fast Guardrails Engineers Adopt",
    description: "Lightweight checks for risky changes that prevent regressions without blocking teams.",
    excerpt: "Adopt small, meaningful CI policy tests tied to product KPIs for real impact.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Engineering Excellence",
    tags: ["Policy", "CI", "Guardrails"],
    featured: true,
    readTime: "6 min read",
    image: "/images/policy-tests-in-ci.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "edge-e2e-observability-2026",
    slug: "edge-e2e-observability-2026",
    title: "Edge E2E Observability: User‑Centric Tracing and <100ms Telemetry",
    description: "Capture user‑centric traces across edge, CDN, and app layers without latency tax.",
    excerpt: "Blueprint for end‑to‑end observability with privacy and performance in mind.",
    author: "Zion Tech Group Team",
    date: "2025-10-09",
    category: "Architecture",
    tags: ["Observability", "Edge", "Tracing", "Telemetry"],
    featured: false,
    readTime: "7 min read",
    image: "/images/edge-observability.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "risk-budgets-edge-rollouts-2025",
    slug: "risk-budgets-edge-rollouts-2025",
    title: "Risk Budgets for Edge Rollouts: Ship Fast With Confidence",
    description: "Define budgets, wire telemetry, and enable instant rollback for zero‑regret deploys.",
    excerpt: "A pragmatic pattern for progressive delivery under strict risk envelopes.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Architecture",
    tags: ["Edge", "Feature Flags", "Budgets"],
    featured: false,
    readTime: "7 min read",
    image: "/images/risk-budgets-edge.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "ai-cost-controllers-2026",
    slug: "ai-cost-controllers-2026",
    title: "AI Cost Controllers: Budgets, Tiered Quality, and Guardrails",
    description: "Keep GenAI spend predictable with dynamic budgets, tiered models, and policy‑backed routes.",
    excerpt: "A practical guide to cost control that protects velocity and quality.",
    author: "Zion Tech Group Team",
    date: "2025-10-09",
    category: "Cloud",
    tags: ["FinOps", "GenAI", "Budgets", "Governance"],
    featured: true,
    readTime: "6 min read",
    image: "/images/ai-cost-controllers.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "edge-rag-cdn-2025",
    slug: "edge-rag-cdn-2025",
    title: "Edge RAG + CDN: Fresh Answers with Sub‑100ms Latency",
    description: "Hybrid retrieval at the edge with freshness windows, signed configs, and tiered caches.",
    excerpt: "Keep answers fresh and fast with edge retrieval and cache budgets.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "Architecture",
    tags: ["Edge", "RAG", "Caching"],
    featured: true,
    readTime: "7 min read",
    image: "/images/edge-rag-cdn.jpg",
    newBadge: true,
    trending: true
  },
  {
    id: "genai-evals-bluebook-2025",
    slug: "genai-evals-bluebook-2025",
    title: "GenAI Evals Bluebook: KPIs, Canaries, and Policy Tests",
    description: "Build eval suites that predict outcomes and prevent regressions across teams.",
    excerpt: "A practical playbook to wire evals to business KPIs and delivery.",
    author: "Zion Tech Group Team",
    date: "2025-09-29",
    category: "GenAI",
    tags: ["Evals", "KPIs", "Guardrails"],
    featured: true,
    readTime: "9 min read",
    image: "/images/genai-evals-bluebook.jpg",
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
  }
];
const featuredArticles = latestArticles.filter((article) => article.featured);
const trendingArticles = latestArticles.filter((article) => article.trending);

const LatestArticlesShowcase = () => {
  const displayArticles = [...featuredArticles.slice(0, 2), ...trendingArticles.slice(0, 1)];
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-semibold mb-2", children: "🚀 Just Published: 8 Revolutionary Articles on AI Platform Engineering, Enterprise RAG, and Quantum Computing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm", children: "Discover cutting-edge insights on autonomous operations, edge AI implementation, and zero-trust security architectures." })
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
    title: "🛡️ NEW: AI Risk Register That Actually Drives Action",
    description: "Turn AI risks into tracked mitigations with owners and policy tests",
    ctaText: "Read Playbook",
    ctaLink: "/blog/ai-platform-roi-2025",
    badge: "New",
    stats: "7 min read",
    variant: "warning"
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
    title: "🧪 RAG Architectures That Work in Production",
    description: "Freshness, hybrid search, and evals that scale",
    ctaText: "Read Guide",
    ctaLink: "/blog/edge-cdn-ml-personalization-2025",
    badge: "Popular",
    stats: "8 min read",
    variant: "premium"
  },
  {
    id: 5,
    title: "🧰 Serverless Inference Cost Playbook",
    description: "Adaptive batching, warm pools, and quality tiers without P95 pain",
    ctaText: "Optimize",
    ctaLink: "/blog/serverless-inference-cost-playbook-2025",
    badge: "Guide",
    stats: "7 min read",
    variant: "success"
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

const ModernFeatures = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "aria-label": "Modern features" });
};
var ModernFeatures_default = ModernFeatures;

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
      title: "Policy Tests in CI",
      description: "Lightweight checks that prevent regressions and speed delivery",
      icon: TrendingUp,
      link: "/blog/policy-tests-in-ci-2025",
      category: "Engineering"
    },
    {
      title: "Secure ML Supply Chain",
      description: "SBOMs, attestations, and policy gates that scale",
      icon: Shield,
      link: "/blog/secure-ml-supply-chain-attestations-2025",
      category: "Security"
    },
    {
      title: "Enterprise RAG Blueprint v2",
      description: "Freshness, hybrid search, and evaluation at scale",
      icon: Brain,
      link: "/blog/enterprise-rag-blueprint-v2-2025",
      category: "GenAI"
    },
    {
      title: "Risk Budgets for Edge Rollouts",
      description: "Zero‑regret deploys with budgets and instant rollback",
      icon: Zap,
      link: "/blog/risk-budgets-edge-rollouts-2025",
      category: "Architecture"
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold mb-2", children: "Just Published: Revolutionary AI & Technology Guides for 2025" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 mb-4 text-sm", children: "Discover fresh insights on platform ROI, secure ML supply chains, updated RAG blueprints, and cost‑efficient serverless inference." }),
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Articles" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "0" }),
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

const newServices = [
  {
    id: "ai-autonomous-operations",
    title: "AI Autonomous Operations",
    description: "Revolutionary AI system that manages your entire infrastructure autonomously - self-healing, self-optimizing, and self-scaling with zero human intervention required.",
    icon: "🤖",
    category: "AI Operations",
    pricing: {
      starting: "$299/mo",
      popular: true,
      discount: "50% OFF First 3 Months"
    },
    features: [
      "Self-Healing Infrastructure",
      "Autonomous Scaling",
      "Predictive Maintenance",
      "Real-time Optimization",
      "Zero-Downtime Deployments",
      "Intelligent Resource Management"
    ],
    benefits: [
      "Reduce operational costs by 80%",
      "Eliminate manual interventions",
      "Achieve 99.99% uptime",
      "Scale automatically with demand",
      "Prevent issues before they occur"
    ],
    technologies: ["AI/ML", "Kubernetes", "Terraform", "Prometheus", "Grafana", "Python"],
    useCases: [
      "Infrastructure Management",
      "Auto-scaling Applications",
      "Predictive Maintenance",
      "Resource Optimization",
      "Disaster Recovery"
    ],
    cta: {
      primary: "Start Free Trial",
      secondary: "View Demo"
    },
    metrics: [
      {
        label: "Cost Reduction",
        value: "80%",
        description: "Average operational savings"
      },
      {
        label: "Uptime Improvement",
        value: "99.99%",
        description: "Achieved with autonomous ops"
      },
      {
        label: "Response Time",
        value: "< 30 seconds",
        description: "Issue detection and resolution"
      }
    ],
    testimonial: {
      quote: "AI Autonomous Operations transformed our infrastructure management. We went from constant firefighting to zero-touch operations with 99.99% uptime.",
      author: "Jennifer Martinez",
      company: "CloudScale Technologies"
    },
    newBadge: true,
    featured: true
  },
  {
    id: "quantum-optimization-engine",
    title: "Quantum Optimization Engine",
    description: "Leverage quantum computing power to solve complex optimization problems in logistics, finance, and resource allocation with unprecedented speed and accuracy.",
    icon: "⚛️",
    category: "Quantum Computing",
    pricing: {
      starting: "$999/mo",
      popular: false
    },
    features: [
      "Quantum Algorithm Implementation",
      "Hybrid Classical-Quantum Processing",
      "Real-time Optimization",
      "Multi-objective Optimization",
      "Quantum Machine Learning",
      "Cloud Quantum Access"
    ],
    benefits: [
      "Solve problems 1000x faster",
      "Handle exponentially complex scenarios",
      "Achieve optimal solutions",
      "Reduce computational costs",
      "Future-proof your operations"
    ],
    technologies: ["Qiskit", "Cirq", "Quantum Hardware", "Python", "Cloud Quantum", "TensorFlow Quantum"],
    useCases: [
      "Portfolio Optimization",
      "Supply Chain Optimization",
      "Route Planning",
      "Resource Allocation",
      "Drug Discovery"
    ],
    cta: {
      primary: "Request Demo",
      secondary: "Learn More"
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
        label: "Solution Quality",
        value: "99.9%",
        description: "Optimal solution accuracy"
      }
    ],
    newBadge: true,
    featured: true
  },
  {
    id: "ai-cybersecurity-suite",
    title: "AI Cybersecurity Suite",
    description: "Advanced AI-powered security platform that provides real-time threat detection, automated incident response, and zero-trust architecture implementation.",
    icon: "🛡️",
    category: "Cybersecurity",
    pricing: {
      starting: "$199/mo",
      popular: false
    },
    features: [
      "AI Threat Detection",
      "Automated Incident Response",
      "Zero-Trust Implementation",
      "Behavioral Analytics",
      "Threat Intelligence",
      "Compliance Automation"
    ],
    benefits: [
      "Detect threats in real-time",
      "Reduce response time by 95%",
      "Achieve 99.9% threat detection",
      "Automate security workflows",
      "Ensure compliance standards"
    ],
    technologies: ["Machine Learning", "SIEM", "SOAR", "Zero Trust", "Blockchain", "AI/ML"],
    useCases: [
      "Threat Detection",
      "Incident Response",
      "Compliance Monitoring",
      "Security Analytics",
      "Risk Assessment"
    ],
    cta: {
      primary: "Get Security Assessment",
      secondary: "View Demo"
    },
    metrics: [
      {
        label: "Threat Detection",
        value: "99.9%",
        description: "Detection accuracy rate"
      },
      {
        label: "Response Time",
        value: "< 1 minute",
        description: "Automated incident response"
      },
      {
        label: "False Positives",
        value: "0.1%",
        description: "Minimal false positive rate"
      }
    ],
    newBadge: true,
    featured: true
  },
  {
    id: "edge-ai-platform",
    title: "Edge AI Platform",
    description: "Deploy AI models at the edge for real-time processing, reduced latency, and enhanced privacy. Perfect for IoT, autonomous vehicles, and smart cities.",
    icon: "🌐",
    category: "Edge Computing",
    pricing: {
      starting: "$149/mo",
      popular: false
    },
    features: [
      "Edge Model Deployment",
      "Real-time Inference",
      "Federated Learning",
      "Edge-to-Cloud Sync",
      "Low-latency Processing",
      "Offline Capabilities"
    ],
    benefits: [
      "Reduce latency to < 10ms",
      "Process data locally",
      "Enhance privacy and security",
      "Reduce bandwidth costs",
      "Enable offline AI"
    ],
    technologies: ["TensorFlow Lite", "ONNX", "Edge TPU", "NVIDIA Jetson", "Raspberry Pi", "Edge Computing"],
    useCases: [
      "Autonomous Vehicles",
      "Industrial IoT",
      "Smart Cities",
      "Retail Analytics",
      "Healthcare Monitoring"
    ],
    cta: {
      primary: "Start Edge Deployment",
      secondary: "View Use Cases"
    },
    metrics: [
      {
        label: "Latency Reduction",
        value: "95%",
        description: "Sub-10ms response times"
      },
      {
        label: "Bandwidth Savings",
        value: "80%",
        description: "Reduced data transmission"
      },
      {
        label: "Privacy Enhancement",
        value: "100%",
        description: "Local data processing"
      }
    ],
    newBadge: true,
    featured: false
  },
  {
    id: "ai-content-generation",
    title: "AI Content Generation Platform",
    description: "Generate high-quality, SEO-optimized content at scale using advanced AI. Perfect for marketing teams, content creators, and digital agencies.",
    icon: "✍️",
    category: "Content AI",
    pricing: {
      starting: "$79/mo",
      popular: true,
      discount: "30% OFF First Month"
    },
    features: [
      "Multi-format Content Creation",
      "SEO Optimization",
      "Brand Voice Consistency",
      "Content Planning",
      "Multi-language Support",
      "Plagiarism Detection"
    ],
    benefits: [
      "Generate content 10x faster",
      "Maintain brand consistency",
      "Improve SEO rankings",
      "Reduce content costs by 70%",
      "Scale content production"
    ],
    technologies: ["GPT-4", "BERT", "Natural Language Processing", "SEO Tools", "Content Management", "AI/ML"],
    useCases: [
      "Blog Writing",
      "Social Media Content",
      "Product Descriptions",
      "Email Marketing",
      "Technical Documentation"
    ],
    cta: {
      primary: "Start Writing",
      secondary: "View Samples"
    },
    metrics: [
      {
        label: "Content Speed",
        value: "10x",
        description: "Faster than manual writing"
      },
      {
        label: "Cost Reduction",
        value: "70%",
        description: "Lower content production costs"
      },
      {
        label: "SEO Improvement",
        value: "85%",
        description: "Better search rankings"
      }
    ],
    testimonial: {
      quote: "The AI Content Generation Platform revolutionized our marketing efforts. We now produce 10x more content while maintaining quality and brand voice.",
      author: "David Kim",
      company: "Digital Marketing Pro"
    },
    newBadge: true,
    featured: true
  },
  {
    id: "ai-customer-insights",
    title: "AI Customer Insights Engine",
    description: "Transform customer data into actionable insights with advanced AI analytics. Understand customer behavior, predict churn, and optimize experiences.",
    icon: "📊",
    category: "Customer Analytics",
    pricing: {
      starting: "$129/mo",
      popular: false
    },
    features: [
      "Customer Segmentation",
      "Churn Prediction",
      "Behavioral Analytics",
      "Sentiment Analysis",
      "Recommendation Engine",
      "Real-time Dashboards"
    ],
    benefits: [
      "Increase retention by 40%",
      "Predict customer churn",
      "Personalize experiences",
      "Improve customer satisfaction",
      "Optimize marketing campaigns"
    ],
    technologies: ["Machine Learning", "Python", "TensorFlow", "Apache Spark", "BigQuery", "Tableau"],
    useCases: [
      "Customer Segmentation",
      "Churn Prevention",
      "Personalization",
      "Marketing Optimization",
      "Product Recommendations"
    ],
    cta: {
      primary: "Get Insights Demo",
      secondary: "View Case Studies"
    },
    metrics: [
      {
        label: "Retention Improvement",
        value: "40%",
        description: "Increase in customer retention"
      },
      {
        label: "Churn Prediction",
        value: "95%",
        description: "Accuracy in churn prediction"
      },
      {
        label: "Revenue Impact",
        value: "25%",
        description: "Increase in customer lifetime value"
      }
    ],
    newBadge: true,
    featured: false
  },
  {
    id: "genai-evals-ci-service",
    title: "GenAI Evals CI Service",
    description: "Run policy and quality tests for LLM features on every PR with dashboards and budget guardrails.",
    icon: "✅",
    category: "AI Quality",
    pricing: {
      starting: "$199/mo",
      popular: true,
      discount: "20% Launch Promo"
    },
    features: [
      "CI Policy Tests",
      "Online Canaries",
      "Guardrail Libraries",
      "Eval Dashboards",
      "Budgeted Routing",
      "Slack/Webhook Alerts"
    ],
    benefits: [
      "Ship GenAI changes weekly",
      "Prevent regressions automatically",
      "Make risk reviews measurable",
      "Increase developer confidence"
    ],
    technologies: ["TypeScript", "Python", "OpenAI", "Weights & Biases", "Grafana"],
    useCases: [
      "PR quality gates",
      "Release canaries",
      "Policy compliance checks"
    ],
    cta: {
      primary: "Enable in CI",
      secondary: "View Demo"
    },
    metrics: [
      { label: "Regression Reduction", value: "70%", description: "Fewer incidents post‑release" },
      { label: "Time Saved", value: "12h/week", description: "Per team on manual reviews" },
      { label: "Coverage", value: "90%", description: "Of critical LLM paths" }
    ],
    testimonial: {
      quote: "We ship LLM features every week now. The CI evals caught three issues before users did.",
      author: "Leah Patel",
      company: "Acme SaaS"
    },
    newBadge: true,
    featured: true
  }
];

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

const caseStudies = [
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
      title: "Policy Tests in CI",
      description: "Lightweight guardrails in PRs that engineers adopt",
      views: "11.2K",
      readTime: "6 min",
      category: "Engineering",
      icon: TrendingUp,
      link: "/blog/policy-tests-in-ci-2025",
      badge: "NEW"
    },
    {
      title: "Secure ML Supply Chain",
      description: "SBOMs, attestations, and policy gates",
      views: "10.4K",
      readTime: "8 min",
      category: "Security",
      icon: Shield,
      link: "/blog/secure-ml-supply-chain-attestations-2025",
      badge: "TRENDING"
    },
    {
      title: "Enterprise RAG Blueprint v2",
      description: "Freshness, hybrid search, and evals",
      views: "7.9K",
      readTime: "9 min",
      category: "GenAI",
      icon: Brain,
      link: "/blog/enterprise-rag-blueprint-v2-2025",
      badge: "HOT"
    },
    {
      title: "Risk Budgets for Edge Rollouts",
      description: "Zero‑regret deploys with budgets and instant rollback",
      views: "8.7K",
      readTime: "7 min",
      category: "Architecture",
      icon: Zap,
      link: "/blog/risk-budgets-edge-rollouts-2025",
      badge: "TRENDING"
    }
  ];
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

const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "w-full py-8 px-6 border-t border-white/10 mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto text-sm text-gray-400", children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    " Zion Tech Group. All rights reserved."
  ] }) });
};
var Footer_default = Footer;

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

const SEOOptimizer = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/api/placeholder/1200/630",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noindex = false,
  seoData
}) => {
  if (seoData) {
    title = seoData.title;
    description = seoData.description;
    canonicalUrl = seoData.canonical;
  }
  title = title ?? "Zion Tech Group";
  description = description ?? "Advanced AI and IT solutions.";
  const siteName = "Zion Tech Group";
  const siteUrl = "https://ziontechgroup.com";
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const defaultKeywords = "AI solutions, IT consulting, cybersecurity, machine learning, cloud infrastructure, digital transformation, business automation, data analytics";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("title", { children: [
      title,
      " | ",
      siteName
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: finalKeywords }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: fullCanonicalUrl }),
    noindex && /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "robots", content: "noindex, nofollow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: fullCanonicalUrl }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:image", content: ogImage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:image:width", content: "1200" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:image:height", content: "630" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:site_name", content: siteName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:locale", content: "en_US" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:card", content: twitterCard }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:image", content: ogImage }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "author", content: "Zion Tech Group" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "publisher", content: "Zion Tech Group" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "copyright", content: "Zion Tech Group" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "language", content: "en" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "revisit-after", content: "7 days" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "rating", content: "general" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "theme-color", content: "#1e40af" }),
    structuredData && /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify(structuredData) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" })
  ] });
};
var SEOOptimizer_default = SEOOptimizer;

export { BlogPromotionBanner_default as B, ContentPromotionBanner_default as C, Footer_default as F, Header_default as H, LatestContentBanner_default as L, ModernFeatures_default as M, NewContentAnnouncement_default as N, SuccessStoriesShowcase_default as S, TrendingContentBanner_default as T, NewContentPromoBanner_default as a, NewServicesShowcase_default as b, LatestArticlesShowcase_default as c, SEOOptimizer_default as d };
