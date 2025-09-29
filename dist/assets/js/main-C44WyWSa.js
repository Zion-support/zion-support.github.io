import { j as jsxRuntimeExports, H as Helmet, S as Sparkles, R as Rocket, L as Link, Z as Zap, e as CircleCheckBig, A as ArrowRight, c as Shield, U as Users, G as Globe, b as Star, T as TrendingUp, g as Target, f as Award, r as reactExports, i as Search, k as User, a as Calendar, C as Clock, l as Bot, m as Code, n as ChartColumn, F as FileText, d as BookOpen, o as Cloud, p as Smartphone, D as Database, P as Play, q as Download, s as Lightbulb, M as Monitor, t as ExternalLink, B as Brain, u as Settings, v as Routes, w as Route, x as ReactDOM, y as React, z as HelmetProvider, I as BrowserRouter } from './chunk-CxfzcOjV.js';
import { H as Header_default, N as NewContentAnnouncement_default, L as LatestContentBanner_default, a as NewContentPromoBanner_default, T as TrendingContentBanner_default, C as ContentPromotionBanner_default, M as ModernFeatures_default, b as NewServicesShowcase_default, c as LatestArticlesShowcase_default, S as SuccessStoriesShowcase_default, F as Footer_default, B as BlogPromotionBanner_default, d as SEOOptimizer_default } from './chunk-FW3YqZzn.js';
import { s as securityManager, a as accessibilityEnhancer } from './chunk-DX-FpWyO.js';
import './chunk-DAl6g_1b.js';

true              &&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

const latestInsights = [
  {
    id: "ai-risk-register-checklist",
    title: "AI Risk Register Checklist",
    summary: "Owners, policy tests, and dashboards that make risk programs real.",
    category: "GenAI",
    date: "2025-09-30",
    readMinutes: 6
  },
  {
    id: "eval-systems-online-canaries",
    title: "Eval Systems That Scale: Online Canaries and Policy Gates",
    summary: "Move from ad-hoc checks to layered evals with CI gates and production canaries tied to KPIs.",
    category: "GenAI",
    date: "2025-09-30",
    readMinutes: 6
  },
  {
    id: "edge-flags-validation-blueprints",
    title: "Blueprints: Validating Edge Flags Before They Break Prod",
    summary: "Versioned keys, negative caching, and health probes that prevent bad flag rolls globally.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 5
  },
  {
    id: "genai-policy-tests-canaries",
    title: "GenAI Policy Tests: From Offline Suites to Online Canaries",
    summary: "How to combine offline evals with live canaries to catch regressions before customers do.",
    category: "GenAI",
    date: "2025-09-29",
    readMinutes: 6
  },
  {
    id: "edge-flags-validation",
    title: "Edge Flags: Validation Circuits That Prevent Bad Rolls",
    summary: "Design health checks, signed payloads, and roll-forward playbooks to keep flags safe.",
    category: "Architecture",
    date: "2025-09-29",
    readMinutes: 5
  },
  {
    id: "north-star-metrics-pitfalls",
    title: "North‑Star Metrics Pitfalls: Fixing Vanity and Ambiguity",
    summary: "Replace vanity KPIs with leading indicators and consistent instrumentation.",
    category: "Product Analytics",
    date: "2025-09-29",
    readMinutes: 5
  },
  {
    id: "ai-governance-rubric",
    title: "A Lightweight Rubric for AI Governance Decisions",
    summary: "When to require human‑in‑the‑loop, what to log, and how to audit outputs across teams.",
    category: "AI Governance",
    date: "2025-10-04",
    readMinutes: 4
  },
  {
    id: "platform-blueprints-golden-paths",
    title: "Golden Paths That Actually Get Used",
    summary: "When to require human‑in‑the‑loop, what to log, and how to audit outputs across teams.",
    category: "AI Governance",
    date: "2025-10-04",
    readMinutes: 4
  },
  {
    id: "ai-platform-roi-scorecards",
    title: "AI Platform ROI Scorecards: Ship Value Every Quarter",
    summary: "Tie platform work to adoption, golden paths, and business KPIs with simple scorecards.",
    category: "AI Strategy",
    date: "2025-10-06",
    readMinutes: 5
  },
  {
    id: "secure-ml-supply-chain",
    title: "Secure ML Supply Chain: SBOMs, Lineage, Egress Controls",
    summary: "Proven controls for datasets, models, and inference—track provenance and lock egress.",
    category: "Security",
    date: "2025-10-06",
    readMinutes: 6
  },
  {
    id: "enterprise-rag-blueprint-v2",
    title: "Enterprise RAG v2: Freshness, Hybrid Search, Reliable Evals",
    summary: "Blueprint for stable quality: versioned chunks, hybrid retrievers, KPI‑linked evals.",
    category: "GenAI",
    date: "2025-10-06",
    readMinutes: 7
  },
  {
    id: "rag-freshness-strategies",
    title: "RAG Freshness Strategies",
    summary: "Invalidate staleness with versioned chunks, TTLs, and async warmups.",
    category: "Risk & Compliance",
    date: "2025-09-29",
    readMinutes: 6
  },
  {
    id: "ai-governance-rubric",
    title: "A Lightweight Rubric for AI Governance Decisions",
    summary: "Decision criteria for when to add controls, how to validate, and who owns risk.",
    category: "Risk & Compliance",
    date: "2025-09-29",
    readMinutes: 6
  },
  {
    id: "reliable-real-time-pipelines",
    title: "Building Reliable Real‑Time Data Pipelines",
    summary: "Exactly‑once semantics, schema evolution, and backpressure handling in streaming systems.",
    category: "Data Engineering",
    date: "2025-09-29",
    readMinutes: 7
  },
  {
    id: "llm-guardrails-prod",
    title: "Shipping LLM Guardrails Without Killing Velocity",
    summary: "Policy-as-code, prompt hygiene, and eval gates that scale from POC to prod.",
    category: "GenAI",
    date: "2025-10-04",
    readMinutes: 5
  },
  {
    id: "serverless-warm-pools-playbook",
    title: "Serverless Warm Pools: Cut Cold Starts, Not Corners",
    summary: "Adaptive warmers, concurrency hints, and budgets to keep P95 low without overspend.",
    category: "Architecture",
    date: "2025-09-30",
    readMinutes: 4
  },
  {
    id: "crm-grounded-prompts",
    title: "Grounded Prompts with CRM Context: Sales Copilots That Convert",
    summary: "Reference opportunities, stakeholders, and last touches to improve reply quality and close rates.",
    category: "Sales AI",
    date: "2025-09-30",
    readMinutes: 6
  },
  {
    id: "genai-telemetry-metrics",
    title: "GenAI Telemetry: The 8 Metrics That Predict Drift",
    summary: "Capture inputs, policies, and human feedback signals to detect regressions before users do.",
    category: "GenAI",
    date: "2025-09-27",
    readMinutes: 7
  },
  {
    id: "observability-otel-traces-that-matter",
    title: "OpenTelemetry in Production: Traces That Engineers Actually Use",
    summary: "Sampling strategies, semantic conventions, and dashboards that shrink MTTR for complex stacks.",
    category: "Observability",
    date: "2025-09-29",
    readMinutes: 6
  },
  {
    id: "feature-flags-edge-realtime",
    title: "Real‑Time Feature Flags at the Edge",
    summary: "Architect, cache, and validate flags globally for instant rollouts and safe rollbacks.",
    category: "Architecture",
    date: "2025-09-28",
    readMinutes: 6
  },
  {
    id: "north-star-metrics-insight",
    title: "North‑Star Metrics: A Field Guide",
    summary: "A practical approach to defining leading indicators that align teams to outcomes.",
    category: "Product Analytics",
    date: "2025-09-28",
    readMinutes: 7
  },
  {
    id: "kubernetes-cost-guardrails",
    title: "Kubernetes Cost Guardrails That Engineers Don’t Hate",
    summary: "Limit waste with sensible defaults: requests/limits, QoS, autoscaling, and cost-aware CI policies.",
    category: "Cloud",
    date: "2025-09-28",
    readMinutes: 7
  },
  {
    id: "ciso-zero-trust-scorecard",
    title: "A CISO’s Zero‑Trust Scorecard",
    summary: "Measure progress with identity controls, least privilege, continuous verification, and blast‑radius limits.",
    category: "Security",
    date: "2025-09-28",
    readMinutes: 8
  },
  {
    id: "zero-trust-sdls",
    title: "Zero-Trust SDLC: Shipping Secure Software Without Slowing Down",
    summary: "Embed policy-as-code, automated threat modeling, and continuous verification into delivery workflows.",
    category: "Security",
    date: "2025-09-28",
    readMinutes: 8
  },
  {
    id: "analytics-ltv-playbook",
    title: "An Operator’s Playbook for LTV:CPA Ratio",
    summary: "Instrumentation, cohorting, and experimentation tactics to consistently improve unit economics.",
    category: "Product Analytics",
    date: "2025-09-29",
    readMinutes: 7
  },
  {
    id: "data-contracts-in-practice",
    title: "Data Contracts in Practice: Stop Breaking Your Dashboards",
    summary: "Contract-first schemas, change management, and lineage that make analytics reliable again.",
    category: "Data Engineering",
    date: "2025-09-28",
    readMinutes: 7
  },
  {
    id: "secure-ml-pipelines",
    title: "Securing Machine Learning Pipelines in Production",
    summary: "Practical steps to harden data flows, model registries, and deployment targets for ML systems.",
    category: "Security",
    date: "2025-08-20",
    readMinutes: 7
  },
  {
    id: "cloud-cost-optimization",
    title: "Cloud Cost Optimization: 9 Wins in 90 Days",
    summary: "How we helped teams reduce cloud spend by 32% on average without hurting performance.",
    category: "Cloud",
    date: "2025-08-05",
    readMinutes: 5
  },
  {
    id: "data-governance-starter",
    title: "Data Governance Starter Guide for Mid‑Market Teams",
    summary: "A no‑nonsense playbook for data quality, lineage, and access controls.",
    category: "Data",
    date: "2025-07-18",
    readMinutes: 8
  },
  {
    id: "ai-workflow-automation-2025-trends",
    title: "AI Workflow Automation: 2025 Trends That Will Transform Business",
    summary: "Discover the latest trends in AI workflow automation that are reshaping how businesses operate and compete in 2025.",
    category: "AI & Automation",
    date: "2025-01-17",
    readMinutes: 6
  },
  {
    id: "quantum-computing-business-ready",
    title: "Quantum Computing: When Will It Be Business-Ready?",
    summary: "An honest assessment of quantum computing's current capabilities and realistic timeline for business applications.",
    category: "Quantum Computing",
    date: "2025-01-17",
    readMinutes: 7
  },
  {
    id: "edge-ai-real-world-deployments",
    title: "Edge AI: Real-World Deployments That Are Working Today",
    summary: "Case studies from manufacturing, healthcare, and retail showing how edge AI is delivering measurable results.",
    category: "Edge Computing",
    date: "2025-01-16",
    readMinutes: 8
  },
  {
    id: "zero-trust-implementation-guide",
    title: "Zero Trust Implementation: A Practical Guide for 2025",
    summary: "Step-by-step guide to implementing Zero Trust security architecture without breaking your existing workflows.",
    category: "Security",
    date: "2025-01-15",
    readMinutes: 9
  },
  {
    id: "ai-virtual-assistant-roi",
    title: "AI Virtual Assistants: Measuring ROI and Business Impact",
    summary: "How to quantify the business value of AI virtual assistants and ensure your investment delivers real results.",
    category: "AI & Automation",
    date: "2025-01-14",
    readMinutes: 5
  },
  {
    id: "micro-saas-platform-selection",
    title: "Choosing the Right Micro SAAS Platforms for Your Business",
    summary: "A framework for evaluating and selecting micro SAAS platforms that align with your business goals and budget.",
    category: "Technology",
    date: "2025-01-13",
    readMinutes: 6
  },
  {
    id: "data-analytics-ai-transformation",
    title: "Data Analytics Transformation: From Static Reports to AI Insights",
    summary: "How AI is transforming traditional data analytics into dynamic, predictive, and actionable business intelligence.",
    category: "Data Analytics",
    date: "2025-01-12",
    readMinutes: 7
  },
  {
    id: "cybersecurity-threat-landscape-2025",
    title: "2025 Cybersecurity Threat Landscape: What Businesses Need to Know",
    summary: "The evolving threat landscape and emerging security challenges that businesses must prepare for in 2025.",
    category: "Security",
    date: "2025-01-11",
    readMinutes: 8
  },
  {
    id: "cloud-edge-hybrid-architecture",
    title: "Cloud-Edge Hybrid Architecture: Best Practices for 2025",
    summary: "Designing and implementing hybrid cloud-edge architectures that optimize performance, cost, and security.",
    category: "Cloud Computing",
    date: "2025-01-10",
    readMinutes: 6
  },
  {
    id: "ai-ethics-business-implementation",
    title: "AI Ethics in Business: Practical Implementation Guidelines",
    summary: "How to implement ethical AI practices in your business operations while maintaining competitive advantage.",
    category: "AI Ethics",
    date: "2025-01-09",
    readMinutes: 7
  },
  {
    id: "iot-security-best-practices",
    title: "IoT Security: Best Practices for Connected Device Protection",
    summary: "Comprehensive security strategies for protecting IoT devices and networks from emerging threats.",
    category: "IoT Security",
    date: "2025-01-08",
    readMinutes: 6
  },
  {
    id: "blockchain-business-applications",
    title: "Blockchain Beyond Cryptocurrency: Real Business Applications",
    summary: "Exploring practical blockchain applications in supply chain, finance, and digital identity management.",
    category: "Blockchain",
    date: "2025-01-07",
    readMinutes: 8
  },
  {
    id: "5g-business-transformation",
    title: "5G and Business Transformation: Opportunities and Challenges",
    summary: "How 5G technology is enabling new business models and transforming industries across the globe.",
    category: "5G Technology",
    date: "2025-01-06",
    readMinutes: 7
  },
  {
    id: "digital-transformation-2025",
    title: "Digital Transformation in 2025: Trends and Strategies",
    summary: "The latest trends in digital transformation and how businesses can adapt to stay competitive.",
    category: "Digital Transformation",
    date: "2025-01-05",
    readMinutes: 6
  },
  {
    id: "genai-guardrails-in-production",
    title: "GenAI Guardrails in Production: Policy Tests That Scale",
    summary: "From offline eval suites to online canaries: patterns that keep quality and safety high as usage grows.",
    category: "GenAI",
    date: "2025-09-29",
    readMinutes: 8
  },
  {
    id: "ai-automation-roi-calculator",
    title: "AI Automation ROI Calculator: Measure Your Business Impact",
    summary: "A practical framework for calculating the return on investment from AI automation initiatives, with real-world case studies and templates.",
    category: "AI Strategy",
    date: "2025-09-30",
    readMinutes: 5
  },
  {
    id: "zero-downtime-cutover-checklist",
    title: "Zero‑Downtime Cutover Checklist",
    summary: "Dual‑write, read‑shadowing, backfills, and safe cutovers with rollback checkpoints.",
    category: "Platform Engineering",
    date: "2025-09-30",
    readMinutes: 4
  },
  {
    id: "ai-sales-copilot-insights",
    title: "AI Sales Copilot: Grounded Prompts, CRM Context, Reliable Evals",
    summary: "How to wire CRMs, build prompt libraries, and add evals that boost win‑rates without risk.",
    category: "AI Strategy",
    date: "2025-09-30",
    readMinutes: 5
  },
  {
    id: "ai-governance-at-scale-2025",
    title: "AI Governance at Scale: Policies That Enable Speed",
    summary: "A pragmatic model for approvals, policy tests, and observability that unlocks faster AI delivery.",
    category: "AI Governance",
    date: "2025-09-30",
    readMinutes: 6
  },
  {
    id: "ai-scorecards-that-ship",
    title: "AI Scorecards That Ship",
    summary: "Tie initiatives to KPIs with lightweight scorecards and weekly operating rhythms.",
    category: "AI Strategy",
    date: "2025-10-05",
    readMinutes: 4
  },
  {
    id: "edge-feature-flags",
    title: "Edge Feature Flags: Zero‑Regret Rollouts",
    summary: "Canary by segment and geography with instant rollback and budget caps at the edge.",
    category: "Architecture",
    date: "2025-10-05",
    readMinutes: 5
  },
  {
    id: "cloud-governance-scorecards",
    title: "Cloud Governance with Scorecards",
    summary: "Turn policies into dashboards and PR checks—spend less time arguing, more shipping.",
    category: "Platform Engineering",
    date: "2025-10-05",
    readMinutes: 4
  },
  {
    id: "ai-security-essentials",
    title: "AI Security Essentials",
    summary: "Essential security practices for AI systems, covering model protection, data privacy, and adversarial defense strategies.",
    category: "Security",
    date: "2025-01-21",
    readMinutes: 11
  }
];

const newInsights = [
  {
    id: "ai-platform-roi-scorecards",
    title: "AI Platform ROI: Simple Scorecards That Drive Adoption",
    summary: "Connect platform capabilities to adoption, golden paths, and SLO outcomes. Make quarterly cut/scale decisions with evidence.",
    category: "AI Strategy",
    date: "2025-10-03",
    readMinutes: 7,
    featured: true,
    tags: ["Platform", "ROI", "Scorecards"],
    content: `
      <h2>Why Scorecards Win</h2>
      <p>Adoption, TTFX on golden paths, and reliability SLOs are the leading signals that predict platform ROI.</p>
      <h3>Operating Rhythm</h3>
      <ul>
        <li>Monthly reviews with owners</li>
        <li>Red/amber flags with remediation</li>
        <li>Cut/scale based on evidence deltas</li>
      </ul>
    `
  },
  {
    id: "guardrails-scorecards-evals-2025",
    title: "Guardrails Engineers Adopt: Scorecards, PR Gates, Online Canaries",
    summary: "Lightweight, outcome‑linked guardrails that speed delivery while managing risk.",
    category: "AI Strategy",
    date: "2025-09-29",
    readMinutes: 7,
    featured: true,
    tags: ["Guardrails", "Scorecards", "Evals"],
    content: `
      <h2>Ship Faster, Safer</h2>
      <p>Connect scorecards to product KPIs. Use PR gates for risky changes and run online canaries tied to outcomes.</p>
      <h3>Playbook</h3>
      <ul>
        <li>Adoption‑friendly scorecards</li>
        <li>Small, meaningful PR checks</li>
        <li>Budgeted online evals</li>
      </ul>
    `
  },
  {
    id: "edge-flags-blueprint-2025",
    title: "Edge Flags Blueprint: Zero‑Regret Rollouts",
    summary: "<100ms global flags with segmented canaries, budgets, and instant rollback.",
    category: "Architecture",
    date: "2025-09-29",
    readMinutes: 6,
    featured: false,
    tags: ["Edge", "Flags", "Delivery"],
    content: `
      <h2>Progressive Delivery</h2>
      <p>Segment by geo and account, cap risk with budgets, and stream telemetry for evidence‑based releases.</p>
    `
  },
  {
    id: "rag-freshness-ttl-2025",
    title: "RAG Freshness: TTL Budgets and Versioned Corpora",
    summary: "Prevent stale answers with freshness windows and warm caches.",
    category: "GenAI",
    date: "2025-09-29",
    readMinutes: 8,
    featured: true,
    tags: ["RAG", "Freshness", "Search"],
    content: `
      <h2>Operate with Freshness</h2>
      <p>Use TTL windows, async warmups, and versioned corpora to keep retrieval accurate at scale.</p>
    `
  },
  {
    id: "secure-ml-supply-chain",
    title: "Secure ML Supply Chain: Lineage, SBOMs, and Egress Controls",
    summary: "Lock down datasets, models, and inference routes with provenance, signed artifacts, and policy checks in CI/CD.",
    category: "Security",
    date: "2025-10-03",
    readMinutes: 6,
    featured: true,
    tags: ["Security", "ML", "Supply Chain"],
    content: `
      <h2>End-to-End Controls</h2>
      <p>Track lineage from datasets to deployed models. Enforce policy tests and signed artifacts across the pipeline.</p>
    `
  },
  {
    id: "ai-automation-2025",
    title: "The Future of AI Automation in Enterprise",
    summary: "Discover how AI automation is transforming enterprise operations in 2025, with real-world case studies and implementation strategies.",
    category: "AI & Automation",
    date: "2025-01-20",
    readMinutes: 8,
    featured: true,
    tags: ["AI", "Automation", "Enterprise", "2025"],
    content: `
      <h2>Revolutionizing Enterprise Operations</h2>
      <p>Artificial Intelligence automation is no longer a future concept—it's the present reality for forward-thinking enterprises. In 2025, we're seeing unprecedented adoption rates and ROI from AI automation initiatives.</p>
      
      <h3>Key Trends Driving Adoption</h3>
      <ul>
        <li><strong>Process Mining Integration:</strong> AI now automatically identifies optimization opportunities</li>
        <li><strong>Intelligent Document Processing:</strong> 90% accuracy in data extraction and classification</li>
        <li><strong>Predictive Maintenance:</strong> Reducing downtime by up to 40% in manufacturing</li>
        <li><strong>Customer Service Automation:</strong> 24/7 intelligent support with human-like interactions</li>
      </ul>
      
      <h3>Implementation Best Practices</h3>
      <p>Success in AI automation requires a strategic approach. Start with high-impact, low-risk processes and gradually expand your automation portfolio.</p>
      
      <h3>ROI Metrics to Track</h3>
      <ul>
        <li>Time savings: Average 60% reduction in manual processing time</li>
        <li>Cost reduction: 35% decrease in operational costs</li>
        <li>Error reduction: 95% improvement in accuracy</li>
        <li>Employee satisfaction: 40% increase in job satisfaction scores</li>
      </ul>
    `
  },
  {
    id: "cybersecurity-ai-2025",
    title: "AI-Powered Cybersecurity: The Next Generation of Protection",
    summary: "Explore how AI is revolutionizing cybersecurity with advanced threat detection, automated response, and predictive security analytics.",
    category: "Cybersecurity",
    date: "2025-01-18",
    readMinutes: 10,
    featured: true,
    tags: ["Cybersecurity", "AI", "Threat Detection", "Security"],
    content: `
      <h2>The Evolution of Cyber Threats</h2>
      <p>As cyber threats become more sophisticated, traditional security measures are no longer sufficient. AI-powered cybersecurity represents the next frontier in digital protection.</p>
      
      <h3>AI Security Capabilities</h3>
      <ul>
        <li><strong>Behavioral Analysis:</strong> Detecting anomalies in user and system behavior</li>
        <li><strong>Threat Intelligence:</strong> Real-time analysis of global threat landscapes</li>
        <li><strong>Automated Response:</strong> Instant containment of security incidents</li>
        <li><strong>Predictive Analytics:</strong> Forecasting potential attack vectors</li>
      </ul>
      
      <h3>Zero-Trust Architecture</h3>
      <p>AI enables true zero-trust security models, continuously verifying every access request and adapting security policies in real-time.</p>
      
      <h3>Implementation Roadmap</h3>
      <p>Organizations should start with AI-enhanced endpoint detection and gradually expand to network-level and cloud security automation.</p>
    `
  },
  {
    id: "cloud-native-2025",
    title: "Building Resilient Cloud-Native Applications",
    summary: "Learn the latest strategies for developing and deploying cloud-native applications that scale automatically and handle failures gracefully.",
    category: "Cloud Computing",
    date: "2025-01-15",
    readMinutes: 12,
    featured: false,
    tags: ["Cloud", "Microservices", "DevOps", "Scalability"],
    content: `
      <h2>The Cloud-Native Advantage</h2>
      <p>Cloud-native applications are designed from the ground up to leverage cloud infrastructure, providing unprecedented scalability and resilience.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li><strong>Containerization:</strong> Consistent deployment across environments</li>
        <li><strong>Microservices Architecture:</strong> Independent, scalable service components</li>
        <li><strong>API-First Design:</strong> Seamless integration and interoperability</li>
        <li><strong>Infrastructure as Code:</strong> Automated, version-controlled infrastructure</li>
      </ul>
      
      <h3>Best Practices for 2025</h3>
      <p>Focus on observability, implement chaos engineering, and adopt GitOps workflows for reliable deployments.</p>
    `
  },
  {
    id: "data-analytics-ai",
    title: "AI-Driven Data Analytics: From Insights to Action",
    summary: "Transform your data into actionable business intelligence with advanced AI analytics, machine learning models, and real-time dashboards.",
    category: "Data Analytics",
    date: "2025-01-12",
    readMinutes: 9,
    featured: true,
    tags: ["Data Analytics", "AI", "Machine Learning", "Business Intelligence"],
    content: `
      <h2>The Data-Driven Transformation</h2>
      <p>Modern businesses generate vast amounts of data, but the real value lies in extracting meaningful insights and taking action based on those insights.</p>
      
      <h3>AI Analytics Capabilities</h3>
      <ul>
        <li><strong>Automated Insights:</strong> AI identifies patterns and anomalies automatically</li>
        <li><strong>Predictive Modeling:</strong> Forecast future trends and behaviors</li>
        <li><strong>Natural Language Queries:</strong> Ask questions in plain English</li>
        <li><strong>Real-time Processing:</strong> Instant analysis of streaming data</li>
      </ul>
      
      <h3>Implementation Strategy</h3>
      <p>Start with data quality initiatives, then implement self-service analytics platforms that empower business users to explore data independently.</p>
    `
  },
  {
    id: "devops-automation-2025",
    title: "DevOps Automation: Accelerating Software Delivery",
    summary: "Master the art of DevOps automation with CI/CD pipelines, infrastructure as code, and automated testing strategies that reduce deployment times by 80%.",
    category: "DevOps",
    date: "2025-01-10",
    readMinutes: 11,
    featured: false,
    tags: ["DevOps", "CI/CD", "Automation", "Infrastructure"],
    content: `
      <h2>Accelerating Software Delivery</h2>
      <p>DevOps automation is essential for modern software development, enabling teams to deliver features faster while maintaining quality and reliability.</p>
      
      <h3>Automation Pillars</h3>
      <ul>
        <li><strong>Continuous Integration:</strong> Automated testing and validation</li>
        <li><strong>Continuous Deployment:</strong> Automated release pipelines</li>
        <li><strong>Infrastructure as Code:</strong> Programmable infrastructure management</li>
        <li><strong>Monitoring & Observability:</strong> Automated performance tracking</li>
      </ul>
      
      <h3>Tools and Technologies</h3>
      <p>Leverage modern tools like Kubernetes, Terraform, and GitLab CI for comprehensive automation workflows.</p>
    `
  },
  {
    id: "micro-saas-trends",
    title: "The Rise of Micro-SaaS: Building Profitable Niche Solutions",
    summary: "Discover how micro-SaaS businesses are disrupting traditional software markets with focused, profitable solutions for specific niches.",
    category: "Micro-SaaS",
    date: "2025-01-08",
    readMinutes: 7,
    featured: true,
    tags: ["Micro-SaaS", "Entrepreneurship", "Software", "Business"],
    content: `
      <h2>The Micro-SaaS Revolution</h2>
      <p>Micro-SaaS businesses are proving that you don't need massive scale to build profitable software companies. Focus and specialization are the keys to success.</p>
      
      <h3>Characteristics of Successful Micro-SaaS</h3>
      <ul>
        <li><strong>Niche Focus:</strong> Solving specific problems for specific audiences</li>
        <li><strong>Low Overhead:</strong> Minimal team size and infrastructure costs</li>
        <li><strong>High Margins:</strong> Premium pricing for specialized solutions</li>
        <li><strong>Customer Intimacy:</strong> Deep understanding of user needs</li>
      </ul>
      
      <h3>Building Your Micro-SaaS</h3>
      <p>Start with customer discovery, validate your problem-solution fit, and iterate rapidly based on user feedback.</p>
    `
  },
  {
    id: "enterprise-rag-blueprint-2025",
    title: "Enterprise RAG Blueprint v2: Freshness, Security, and Evals",
    summary: "Production-ready RAG patterns: hybrid search, auth-aware retrieval, freshness controls, and layered evaluation.",
    category: "GenAI",
    date: "2025-10-04",
    readMinutes: 9,
    featured: true,
    tags: ["RAG", "GenAI", "Search", "Security"],
    content: `
      <h2>Why RAG v2</h2>
      <p>Move beyond naive vector search with hybrid retrieval, freshness windows, and authorization-aware filters.</p>
      <h3>Operate with Confidence</h3>
      <ul>
        <li>Offline evals aligned to business KPIs</li>
        <li>Online canaries with rollback triggers</li>
        <li>Prompt firewalls and red-teaming</li>
      </ul>
    `
  },
  {
    id: "finops-scorecards-2025",
    title: "Cloud FinOps Scorecards Engineers Actually Use",
    summary: "Guardrails, PR checks, and budgets that cut waste 25–40% while preserving delivery speed.",
    category: "Cloud",
    date: "2025-10-04",
    readMinutes: 6,
    featured: true,
    tags: ["FinOps", "Cloud", "Governance"],
    content: `
      <h2>Scorecards That Matter</h2>
      <p>Connect spend to product goals, set guardrails engineers respect, and automate waste prevention.</p>
      <h3>Playbook</h3>
      <ul>
        <li>PR gates for risky resources</li>
        <li>Budgets + alerts by environment</li>
        <li>Continuous right-sizing</li>
      </ul>
    `
  }
];
newInsights.unshift({
  id: "ai-governance-scorecards-2026",
  title: "AI Governance 2026: Scorecards Engineers Actually Use",
  summary: "Outcome‑linked guardrails with PR checks and online canaries that accelerate delivery.",
  category: "AI Strategy",
  date: "2025-10-07",
  readMinutes: 7,
  featured: true,
  tags: ["Governance", "Policy", "Scorecards"],
  content: `
    <h2>Guardrails That Ship</h2>
    <p>Adopt scorecards tied to KPIs, small PR checks for risky changes, and budgeted online canaries.</p>
    <h3>What to Implement</h3>
    <ul>
      <li>Scorecards with owners and review cadence</li>
      <li>Policy tests in CI for high‑risk areas</li>
      <li>Live canaries with rollback triggers</li>
    </ul>
  `
});
const featuredInsights = newInsights.filter((insight) => insight.featured);
newInsights.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const posts = [
  {
    slug: "ai-incident-response-2026",
    title: "AI Incident Response 2026: Playbooks, Canaries, and SLAs",
    description: "Practical incident response for AI features with on-call playbooks and KPI-linked canaries.",
    category: "AI Operations",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "agentops-slo-handbook-2025",
    title: "AgentOps SLO Handbook: Keeping Autonomous Systems Reliable",
    description: "Define SLOs, budgets, and rollback-ready canaries for agent workflows in production.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "platform-observability-scorecards-2026",
    title: "Platform Observability Scorecards: Tie Telemetry to Business Outcomes",
    description: "Connect traces, errors, and latency to adoption, retention, and revenue with actionable scorecards.",
    category: "Platform Engineering",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "ai-platform-engineering-2025",
    title: "AI Platform Engineering 2025: Scorecards, Trains, and Golden Paths",
    description: "Practical platform patterns that link capabilities to adoption, SLOs, and ROI.",
    category: "Platform Engineering",
    publishedAt: "2025-10-08",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "serverless-inference-cost-playbook-2025",
    title: "Serverless Inference Cost Playbook: Latency Budgets Without Bill Shock",
    description: "Concurrency shaping, tiered models, and result caching to cut spend 35–60%.",
    category: "GenAI",
    publishedAt: "2025-10-08",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "privacy-preserving-rag-2026",
    title: "Privacy‑Preserving RAG: Redaction, Scoping, and Audit Trails",
    description: "Protect sensitive data in RAG with redaction, auth‑scoped corpora, and audit trails.",
    category: "AI Architecture",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "ai-cost-controllers-2026",
    title: "AI Cost Controllers: Budgets, Tiered Quality, and Guardrails",
    description: "Keep GenAI spend predictable with dynamic budgets, tiered models, and policy‑backed routes.",
    category: "Cloud",
    publishedAt: "2025-10-09",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "zero-trust-ai-pipelines-2025",
    title: "Zero‑Trust for AI Pipelines: Auth, Policy Tests, and Attestations",
    description: "Harden datasets, prompts, and tools with signed artifacts and CI policy gates.",
    category: "Security",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "edge-rag-cdn-2025",
    title: "Edge RAG + CDN: Fresh Answers with Sub‑100ms Latency",
    description: "Hybrid retrieval at the edge with freshness windows, signed configs, and tiered caches.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "genai-evals-bluebook-2025",
    title: "GenAI Evals Bluebook: KPIs, Canaries, and Policy Tests",
    description: "Build eval suites that predict outcomes and prevent regressions across teams.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "llm-policy-testing-2025",
    title: "LLM Policy Testing in CI: Ship Fast, Stay Safe",
    description: "Automate governance with lightweight policy tests on every PR and release train.",
    category: "GenAI",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "6 min read"
  },
  {
    slug: "ai-ml-observability-2025",
    title: "AI/ML Observability: Traces, Metrics, and Business Impact",
    description: "Monitor model performance, data drift, and business KPIs with unified telemetry.",
    category: "AI Operations",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "rag-architecture-patterns-2025",
    title: "RAG Architecture Patterns: Hybrid Retrieval and Multi‑Agent Orchestration",
    description: "Build production RAG with hybrid retrieval, reranking, and multi‑agent workflows.",
    category: "Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "10 min read"
  },
  {
    slug: "ai-security-compliance-2025",
    title: "AI Security & Compliance: SOC2, ISO27001, and Custom Frameworks",
    description: "Audit AI systems for compliance with enterprise security frameworks and regulations.",
    category: "Security",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "7 min read"
  },
  {
    slug: "vector-database-optimization-2025",
    title: "Vector Database Optimization: Indexing, Caching, and Query Performance",
    description: "Optimize vector search performance with proper indexing, caching, and query strategies.",
    category: "Infrastructure",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "9 min read"
  },
  {
    slug: "ai-workflow-automation-2025",
    title: "AI Workflow Automation: Orchestration, Monitoring, and Error Handling",
    description: "Build robust AI workflows with proper orchestration, monitoring, and error recovery.",
    category: "AI Operations",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "8 min read"
  },
  {
    slug: "multi-modal-ai-systems-2025",
    title: "Multi‑Modal AI Systems: Vision, Language, and Audio Integration",
    description: "Design and implement multi‑modal AI systems that handle text, images, and audio seamlessly.",
    category: "AI Architecture",
    publishedAt: "2025-09-29",
    featured: true,
    readTime: "11 min read"
  }
];

const Home = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Zion Tech Group - Leading AI & IT Solutions | Transform Your Business" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Zion Tech Group delivers cutting-edge AI and IT solutions that transform businesses. NEW 2025: AI Workflow Automation, Quantum Computing, Edge AI, Zero Trust Security. Expert consulting services with proven results."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "keywords",
          content: "AI solutions, IT consulting, cybersecurity, machine learning, cloud infrastructure, digital transformation, AI workflow automation, quantum computing, edge AI, zero trust security, micro SAAS platforms, AI virtual assistant, data analytics"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:title",
          content: "Zion Tech Group - Leading AI & IT Solutions"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:description",
          content: "Transform your business with cutting-edge AI and IT solutions. NEW 2025: AI Workflow Automation, Quantum Computing, Edge AI, Zero Trust Security. Expert consulting with proven results."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://ziontechgroup.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "twitter:title",
          content: "Zion Tech Group - Leading AI & IT Solutions"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Transform your business with cutting-edge AI and IT solutions. NEW 2025: AI Workflow Automation, Quantum Computing, Edge AI, Zero Trust Security."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://ziontechgroup.com" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zion Tech Group",
        "description": "Leading AI and IT solutions provider specializing in AI workflow automation, quantum computing, edge AI, and zero trust security.",
        "url": "https://ziontechgroup.com",
        "logo": "https://ziontechgroup.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-ZION-TECH",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://linkedin.com/company/zion-tech-group",
          "https://twitter.com/ziontechgroup"
        ],
        "foundingDate": "2020",
        "numberOfEmployees": "50-100",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "services": [
          "AI Workflow Automation",
          "AI Virtual Assistant",
          "AI Data Analytics",
          "Quantum Computing Consulting",
          "Edge AI Solutions",
          "Zero Trust Security",
          "Cybersecurity",
          "Cloud Infrastructure"
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header_default, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewContentAnnouncement_default, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        LatestContentBanner_default,
        {
          className: "border-b border-white/10",
          variant: "info",
          title: "New: AI Platform Engineering, Serverless Cost Playbook, FinOps Guardrails",
          description: "Fresh articles on platform ROI, cutting serverless costs, and practical FinOps guardrails.",
          ctaText: "Read now",
          ctaLink: "/blog"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        NewContentPromoBanner_default,
        {
          className: "border-b border-white/10",
          variant: "premium",
          title: "Fresh: AI Platform Engineering, Serverless Inference, AgentOps SLOs, Zero‑Trust AI",
          description: "Latest: Platform engineering patterns, cost‑efficient inference, SLOs with budgets, and zero‑trust AI supply chains.",
          ctaText: "Explore new content",
          ctaLink: "/blog",
          featuredItems: [
            { title: "AI Platform Engineering 2025", category: "Platform", link: "/blog/ai-platform-engineering-2025" },
            { title: "Serverless Cost Playbook", category: "GenAI", link: "/blog/serverless-inference-cost-playbook-2025" },
            { title: "AgentOps SLO Handbook", category: "GenAI", link: "/blog/agentops-slo-handbook-2025" },
            { title: "Zero‑Trust for AI Pipelines", category: "Security", link: "/blog/zero-trust-ai-pipelines-2025" },
            { title: "Cloud FinOps Guardrails", category: "Cloud", link: "/blog/cloud-finops-guardrails-2025" }
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingContentBanner_default, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ContentPromotionBanner_default,
        {
          variant: "info",
          title: "🚀 Fresh: GenAI Platform Blueprint + Hybrid Vector Search",
          description: "Ship weekly with guardrails. Cut retrieval cost 40%+ with hybrid and freshness.",
          ctaText: "Read the latest",
          ctaLink: "/blog/genai-platform-blueprint-2025",
          dismissible: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-zion-blue rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float",
            style: { animationDelay: "2s" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-40 left-1/2 w-60 h-60 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float",
            style: { animationDelay: "4s" }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 py-20 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 animate-fade-in border border-zion-cyan/30 shadow-lg hover:shadow-xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-2 animate-pulse" }),
          "Trusted by 500+ companies worldwide",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "w-4 h-4 ml-2 animate-bounce" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent animate-gradient bg-300%", children: "Zion Tech Group" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in", children: [
          "🚀 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "NEW IN 2025:" }),
          " Revolutionary AI-Powered Micro SAAS Platform! Transform your business with our cutting-edge AI solutions, enterprise-grade security, and next-generation cloud infrastructure. Join 500+ companies already scaling with us!"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl p-6 mb-8 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-green-400 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-green-400", children: "🔥 NEW: AI AUTONOMOUS OPERATIONS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-green-400 animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-lg font-semibold mb-2", children: "🚀 Revolutionary AI that manages your entire infrastructure autonomously - Self-healing, self-optimizing, self-scaling!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light text-sm mb-4", children: "Get 50% OFF Your First 3 Months + FREE AI Strategy Consultation • Valid until March 31, 2025" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/services/ai-autonomous-operations",
                className: "bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center",
                children: "Explore AI Autonomous Operations"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "border border-green-400 text-green-400 px-6 py-2 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-colors text-center",
                children: "Start Free Trial"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl p-6 mb-8 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-purple-400 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-purple-400", children: "📚 FRESH CONTENT ALERT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 text-purple-400 animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white text-lg font-semibold mb-2", children: "🎯 Just Published: New guides on Autonomous Ops, AI Cybersecurity, Cloud Scorecards, GenAI Evals, and Edge Flags" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light text-sm mb-4", children: "Discover cutting-edge insights on SLO-driven controllers, behavioral detections, scalable cloud governance, live eval canaries, and zero‑regret rollouts." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/blog",
                className: "bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 transition-colors text-center",
                children: "Read Latest Articles"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/insights",
                className: "border border-purple-400 text-purple-400 px-6 py-2 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-colors text-center",
                children: "View Insights"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-purple-100/20 text-purple-200 px-3 py-1 rounded-full text-xs font-medium border border-purple-300/20", children: "Autonomous Ops" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-rose-100/20 text-rose-200 px-3 py-1 rounded-full text-xs font-medium border border-rose-300/20", children: "AI Security" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-100/20 text-blue-200 px-3 py-1 rounded-full text-xs font-medium border border-blue-300/20", children: "Cloud Scorecards" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-emerald-100/20 text-emerald-200 px-3 py-1 rounded-full text-xs font-medium border border-emerald-300/20", children: "GenAI Evals" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-cyan-100/20 text-cyan-200 px-3 py-1 rounded-full text-xs font-medium border border-cyan-300/20", children: "Edge Flags" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-6 py-3 text-emerald-200 text-sm inline-flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" }),
        "New: Platform Engineering 2025, Serverless Cost Playbook, FinOps Guardrails — read now",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights", className: "text-emerald-300 underline underline-offset-4 hover:text-white", children: "View" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-2" }),
              "New Services Available"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Latest AI & Security Solutions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Discover our newest services designed to accelerate your digital transformation and protect your business from evolving threats." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 max-w-6xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-12 h-12 text-blue-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-white/20 px-3 py-1 rounded-full text-sm font-medium", children: "NEW" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "AI Automation Platform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100 mb-6", children: "Transform your business processes with intelligent automation. Reduce costs by 75% and increase efficiency by 10x." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-blue-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 mr-3 text-blue-300" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Process Mining & Discovery" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-blue-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 mr-3 text-blue-300" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Smart Automation Bots" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-blue-100", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 mr-3 text-blue-300" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Low-Code Workflow Builder" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/services/ai-automation-platform",
                  className: "bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors",
                  children: [
                    "Learn More",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-12 h-12 text-blue-400" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-red-500/20 px-3 py-1 rounded-full text-sm font-medium border border-red-500/30", children: "SECURE" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold mb-4", children: "AI Cybersecurity Suite" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-6", children: "Advanced AI-powered security that detects and prevents threats with 99.9% accuracy and sub-minute response times." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 mr-3 text-green-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Real-time Threat Detection" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 mr-3 text-green-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Automated Incident Response" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-300", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 mr-3 text-green-400" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Zero-Trust Architecture" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/services/ai-cybersecurity-suite",
                  className: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors",
                  children: [
                    "Explore Security",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-20 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-white mb-4 animate-slide-up", children: "Why Choose Zion Tech Group?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-zion-slate-light max-w-2xl mx-auto", children: "We deliver exceptional technology solutions that drive business growth and innovation." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card group hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-zion-blue/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-blue/30 transition-colors border border-zion-blue/30 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-8 h-8 text-zion-blue-light group-hover:scale-110 transition-transform duration-300" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Enterprise Security" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-4", children: "Advanced cybersecurity solutions protecting your business from evolving threats." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-zion-slate", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2 text-zion-cyan" }),
                "SOC 2 Compliance"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2 text-zion-cyan" }),
                "Penetration Testing"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2 text-zion-cyan" }),
                "24/7 Monitoring"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card group hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-zion-purple/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-purple/30 transition-colors border border-zion-purple/30 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-8 h-8 text-zion-purple-light group-hover:scale-110 transition-transform duration-300" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "AI Innovation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-4", children: "Cutting-edge artificial intelligence solutions that transform your operations." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-zion-slate", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2 text-zion-cyan" }),
                "Machine Learning"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2 text-zion-cyan" }),
                "Natural Language Processing"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2 text-zion-cyan" }),
                "Computer Vision"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card group hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-zion-cyan/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-cyan/30 transition-colors border border-zion-cyan/30 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-zion-cyan group-hover:scale-110 transition-transform duration-300" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Expert Team" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-4", children: "World-class engineers and consultants dedicated to your success." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-zion-slate", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2 text-zion-cyan" }),
                "10+ Years Experience"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2 text-zion-cyan" }),
                "Certified Professionals"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2 text-zion-cyan" }),
                "Dedicated Support"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card group hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-zion-blue-light/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-zion-blue-light/30 transition-colors border border-zion-blue-light/30 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-8 h-8 text-zion-blue-light group-hover:scale-110 transition-transform duration-300" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Global Reach" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-4", children: "Serving clients worldwide with localized expertise and support." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-zion-slate", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2 text-zion-cyan" }),
                "50+ Countries"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2 text-zion-cyan" }),
                "Local Support"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 mr-2 text-zion-cyan" }),
                "24/7 Availability"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-16 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-white", children: "Latest Insights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights", className: "text-zion-cyan hover:underline", children: "View all" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [...latestInsights.slice(0, 2), ...featuredInsights.slice(0, 1)].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "card hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-zion-cyan", children: item.category }),
            "featured" in item && item.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-medium", children: "FEATURED" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-semibold text-white mb-2", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-4", children: item.summary }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm text-zion-slate", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(item.date).toLocaleDateString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              item.readMinutes,
              " min read"
            ] })
          ] })
        ] }) }, item.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black opacity-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 border border-white/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-2" }),
              "Fresh: Agentic Workflows, Edge LLM Caching, Operational Scorecards"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-4", children: "Latest Articles & Insights" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-indigo-100 max-w-3xl mx-auto", children: "Stay ahead of the curve with our latest articles on AI automation, cybersecurity, and emerging technologies." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: newInsights.slice(0, 3).map((insight) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-indigo-300", children: insight.category }),
              insight.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-medium", children: "FEATURED" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-3", children: insight.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-indigo-100 mb-4 text-sm", children: insight.summary }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm text-indigo-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: new Date(insight.date).toLocaleDateString() }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                insight.readMinutes,
                " min read"
              ] })
            ] })
          ] }, insight.id)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blog",
              className: "bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105",
              children: [
                "Read All Articles",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-zion-slate-dark py-20 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-zion-blue/10 to-zion-purple/10 opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-white mb-4 animate-slide-up", children: "What Our Clients Say" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-zion-slate-light max-w-2xl mx-auto animate-fade-in", children: "Don't just take our word for it. Here's what our clients have to say about working with us." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  className: "w-5 h-5 text-yellow-400 fill-current animate-pulse",
                  style: { animationDelay: `${i * 0.1}s` }
                },
                i
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-6 italic", children: "“Zion Tech Group transformed our entire digital infrastructure. Their AI solutions increased our efficiency by 300%.”" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white", children: "Sarah Johnson" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-zion-slate", children: "CEO, TechCorp" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  className: "w-5 h-5 text-yellow-400 fill-current animate-pulse",
                  style: { animationDelay: `${i * 0.1}s` }
                },
                i
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-6 italic", children: "“Outstanding team and exceptional results. They delivered our mobile app ahead of schedule and under budget.”" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white", children: "Michael Chen" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-zion-slate", children: "CTO, InnovateLab" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  className: "w-5 h-5 text-yellow-400 fill-current animate-pulse",
                  style: { animationDelay: `${i * 0.1}s` }
                },
                i
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-6 italic", children: "“The security solutions they implemented gave us complete peace of mind. Highly recommended!”" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white", children: "Emily Rodriguez" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-zion-slate", children: "Security Director, FinanceFirst" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ModernFeatures_default, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-xl p-6 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-purple-500 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-purple-700", children: "📚 NEW CONTENT ALERT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-purple-500 animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-semibold mb-2", children: "🚀 Just Published: 5 Revolutionary Articles on AI Automation, Cloud Infrastructure, and Enterprise AI Implementation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm mb-4", children: "Discover the latest insights on AI-powered business automation, next-gen cloud infrastructure, and strategic AI roadmaps for 2025." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium", children: "AI Automation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium", children: "Cloud Strategy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium", children: "AI Governance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium", children: "Platform Engineering" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex items-end justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Latest Articles" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "New: Platform ROI, Secure ML Supply Chain, and Enterprise RAG v2." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "text-indigo-700 font-semibold hover:text-indigo-800", children: "View all →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 md:grid-cols-3", children: [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 3).map((post) => /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-indigo-600 font-medium mb-2", children: post.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-900 mb-2", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: post.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: `/blog/${post.slug}`, className: "text-indigo-700 font-medium hover:text-indigo-800", children: "Read more →" })
        ] }) }, post.slug)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/blog",
            className: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" }),
              "Explore All Articles"
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Success Stories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "See how companies like yours are transforming their operations with our AI solutions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-6 h-6 text-green-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-900", children: "RetailMax Corporation" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "E-commerce" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: "Reduced order processing time from 24 hours to 2 minutes with AI workflow automation." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-green-600", children: "99% Time Reduction" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-6 h-6 text-blue-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-900", children: "First National Bank" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Banking" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: "Reduced customer wait times from 45 minutes to 2 minutes with AI virtual assistant." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-blue-600", children: "95% Faster Response" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-6 h-6 text-purple-600" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-900", children: "Precision Manufacturing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600", children: "Manufacturing" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: "Reduced production waste by 70% with AI data analytics and predictive maintenance." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-purple-600", children: "70% Waste Reduction" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/case-studies",
            className: "bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5" }),
              "View All Success Stories"
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-2", children: "Latest from Zion Insights" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90", children: "New: AI Platform ROI scorecards, securing the ML supply chain, and Enterprise RAG v2." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 self-start md:self-auto", children: [
            "Read the latest",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-6 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-purple-200 mb-1", children: "GenAI" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white", children: "Agentic Workflows Blueprint" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-blue-200 mb-1", children: "Architecture" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white", children: "Edge LLM Caching" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 rounded-xl p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-rose-200 mb-1", children: "Security" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white", children: "Secure ML Supply Chain" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NewServicesShowcase_default, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LatestArticlesShowcase_default, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SuccessStoriesShowcase_default, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-gradient-to-r from-zion-blue to-zion-purple relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black opacity-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-white mb-6 animate-slide-up", children: "Ready to Transform Your Business?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto animate-fade-in", children: "Join thousands of companies that trust Zion Tech Group for their technology needs. Let's build something amazing together." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                className: "bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 group-hover:rotate-12 transition-transform duration-300" }),
                  "Start Your Journey Today"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl",
                children: "Schedule a Call"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
};
var Home_default = Home;

function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Contact - Zion Tech Group" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Get in touch with Zion Tech Group for AI and IT solutions. Contact our expert team for consultation and support."
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header_default, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "container mx-auto px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl font-bold text-white mb-6", children: [
          "Contact ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "Us" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-300 mb-12", children: "Ready to transform your business with cutting-edge AI and IT solutions? Get in touch with our expert team." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-white mb-4", children: "Get Started" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mb-6", children: "Ready to revolutionize your business with AI? Contact us for a free consultation." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-3", children: "📧" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "contact@ziontechgroup.com" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-3", children: "📞" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+1 (555) 123-4567" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-3", children: "🌍" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Global Services Available" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "Quick Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Your Name",
                  className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  placeholder: "Your Email",
                  className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  placeholder: "Your Message",
                  rows: 4,
                  className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  className: "w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300",
                  children: "Send Message"
                }
              )
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer_default, {})
    ] })
  ] });
}

function Blog() {
  const [selectedCategory, setSelectedCategory] = reactExports.useState("All");
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const categories = [
    "All",
    "AI Strategy",
    "Security",
    "Edge Computing",
    "GenAI",
    "Data Engineering",
    "Technology",
    "AI Solutions",
    "Case Studies",
    "Industry Insights",
    "Tutorials"
  ];
  const staticPosts = [
    {
      id: 1,
      title: "How AI Workflow Automation Transformed a Fortune 500 Company",
      excerpt: "Discover how our AI workflow automation solution reduced manual processes by 80% and increased operational efficiency by 300% for a leading financial services company.",
      content: "Full case study content here...",
      author: "Sarah Johnson",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Case Studies",
      tags: ["AI", "Automation", "Case Study", "Financial Services"],
      image: "/api/placeholder/400/250",
      featured: true,
      views: 1250
    },
    {
      id: 7,
      title: "Serverless AI Inference: The Cost Optimization Playbook",
      excerpt: "Cut inference spend 40–70% with adaptive batching, warm pools, and tiered quality without hurting P95.",
      content: "Full article content here...",
      author: "Zion Tech Group Team",
      date: "2025-09-29",
      readTime: "9 min read",
      category: "AI Solutions",
      tags: ["Serverless", "Inference", "Cost"],
      image: "/api/placeholder/400/250",
      featured: true,
      views: 421
    },
    {
      id: 8,
      title: "RAG Architectures That Actually Work in Production",
      excerpt: "Proven patterns for chunking, freshness, hybrid search, and evals that keep quality high.",
      content: "Full article content here...",
      author: "Zion Tech Group Team",
      date: "2025-09-28",
      readTime: "12 min read",
      category: "AI Solutions",
      tags: ["RAG", "Vector Search", "Evals"],
      image: "/api/placeholder/400/250",
      featured: true,
      views: 368
    },
    {
      id: 9,
      title: "Secure GenAI: Policy‑First Guardrails That Scale",
      excerpt: "Prompt isolation, PII redaction, and network egress controls—ship safely without slowing teams.",
      content: "Full article content here...",
      author: "Zion Tech Group Team",
      date: "2025-09-27",
      readTime: "8 min read",
      category: "Technology",
      tags: ["GenAI", "Security", "Compliance"],
      image: "/api/placeholder/400/250",
      featured: false,
      views: 297
    },
    {
      id: 2,
      title: "The Future of AI-Powered Customer Support: A Complete Guide",
      excerpt: "Explore the latest trends in AI customer support and learn how virtual assistants are revolutionizing customer service across industries.",
      content: "Full article content here...",
      author: "Michael Chen",
      date: "2025-01-12",
      readTime: "12 min read",
      category: "AI Solutions",
      tags: ["AI", "Customer Support", "Virtual Assistant", "Trends"],
      image: "/api/placeholder/400/250",
      featured: true,
      views: 980
    },
    {
      id: 3,
      title: "Building Scalable Cloud Infrastructure: Best Practices 2025",
      excerpt: "Learn the essential strategies for building robust, scalable cloud infrastructure that can handle modern business demands.",
      content: "Full article content here...",
      author: "Emily Rodriguez",
      date: "2025-01-10",
      readTime: "15 min read",
      category: "Technology",
      tags: ["Cloud", "Infrastructure", "Scalability", "DevOps"],
      image: "/api/placeholder/400/250",
      featured: false,
      views: 756
    },
    {
      id: 4,
      title: "AI Data Analytics: Transforming Raw Data into Business Gold",
      excerpt: "See how machine learning and predictive analytics are helping businesses make data-driven decisions that drive real results.",
      content: "Full article content here...",
      author: "David Kim",
      date: "2025-01-08",
      readTime: "10 min read",
      category: "AI Solutions",
      tags: ["AI", "Data Analytics", "Machine Learning", "Business Intelligence"],
      image: "/api/placeholder/400/250",
      featured: false,
      views: 892
    },
    {
      id: 5,
      title: "Cybersecurity in the Age of AI: Protecting Your Digital Assets",
      excerpt: "Understand the evolving threat landscape and learn how AI-powered security solutions can protect your business from modern cyber threats.",
      content: "Full article content here...",
      author: "Lisa Wang",
      date: "2025-01-05",
      readTime: "14 min read",
      category: "Technology",
      tags: ["Cybersecurity", "AI", "Security", "Threat Detection"],
      image: "/api/placeholder/400/250",
      featured: false,
      views: 634
    },
    {
      id: 6,
      title: "Healthcare Industry Transformation: AI-Powered Patient Care",
      excerpt: "Explore how AI is revolutionizing healthcare delivery, from diagnostic assistance to personalized treatment plans.",
      content: "Full article content here...",
      author: "Dr. James Wilson",
      date: "2025-01-03",
      readTime: "11 min read",
      category: "Industry Insights",
      tags: ["AI", "Healthcare", "Patient Care", "Medical Technology"],
      image: "/api/placeholder/400/250",
      featured: false,
      views: 445
    }
  ];
  const mappedFromContent = reactExports.useMemo(() => {
    return contentPosts.map((p, index) => ({
      id: 1e4 + index,
      title: p.title,
      excerpt: p.description,
      content: "Read more on dedicated article page",
      author: "Zion Tech Group Team",
      date: p.publishedAt,
      readTime: p.readTime ?? "6 min read",
      category: p.category,
      tags: [p.category.replace(/\s+/g, " ")],
      image: "/api/placeholder/400/250",
      featured: !!p.featured,
      views: 0
    }));
  }, []);
  const blogPosts = [...mappedFromContent, ...staticPosts];
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);
  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI Solutions":
        return Zap;
      case "Case Studies":
        return ChartColumn;
      case "Technology":
        return Code;
      case "Industry Insights":
        return TrendingUp;
      case "Tutorials":
        return Bot;
      default:
        return Shield;
    }
  };
  const getCategoryColor = (category) => {
    switch (category) {
      case "AI Solutions":
        return "text-blue-400 bg-blue-500/10 border-blue-500/30";
      case "Case Studies":
        return "text-green-400 bg-green-500/10 border-green-500/30";
      case "Technology":
        return "text-purple-400 bg-purple-500/10 border-purple-500/30";
      case "Industry Insights":
        return "text-orange-400 bg-orange-500/10 border-orange-500/30";
      case "Tutorials":
        return "text-cyan-400 bg-cyan-500/10 border-cyan-500/30";
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/30";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Blog & Insights - Zion Tech Group | AI & Technology Expertise" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Stay updated with the latest insights on AI, technology trends, case studies, and industry best practices from Zion Tech Group experts."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "Blog & Insights - Zion Tech Group" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:description",
          content: "Latest insights on AI and technology trends"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://ziontechgroup.com/blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:title", content: "Blog & Insights - Zion Tech Group" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "twitter:description",
          content: "Latest insights on AI and technology trends"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "canonical", href: "https://ziontechgroup.com/blog" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 mb-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 p-4 text-white flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mr-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "🚀 Fresh: Serverless Inference Cost Playbook + Production RAG" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/90", children: "Practical strategies to cut inference costs and ship RAG that meets SLAs." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/blog/serverless-ai-inference-cost-playbook-2025", className: "bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap", children: "Read the latest" })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-6xl font-bold text-white mb-6", children: [
            "Insights &",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-zion-blue-light to-zion-purple-light bg-clip-text text-transparent", children: "Expertise" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Stay ahead with the latest insights on AI, technology trends, case studies, and industry best practices from our team of experts." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search articles...",
                value: searchTerm,
                onChange: (e) => setSearchTerm(e.target.value),
                className: "w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setSelectedCategory(category),
              className: `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === category ? "bg-zion-cyan text-white" : "bg-white/10 text-zion-slate-light hover:bg-white/20"}`,
              children: category
            },
            category
          )) })
        ] }) }),
        selectedCategory === "All" && searchTerm === "" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-white mb-8", children: "Featured Articles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: featuredPosts.map((post) => {
            const CategoryIcon = getCategoryIcon(post.category);
            const categoryColor = getCategoryColor(post.category);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "article",
              {
                className: "bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColor}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryIcon, { className: "w-3 h-3 mr-1" }),
                      post.category
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-zion-slate-light text-sm", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 mr-1" }),
                      post.views,
                      " views"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors", children: post.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-6 leading-relaxed", children: post.excerpt }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: post.tags.map((tag, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full",
                      children: tag
                    },
                    index
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 text-sm text-zion-slate-light", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 mr-1" }),
                        post.author
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 mr-1" }),
                        new Date(post.date).toLocaleDateString()
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 mr-1" }),
                        post.readTime
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-zion-cyan hover:text-zion-blue-light transition-colors flex items-center group", children: [
                      "Read More",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" })
                    ] })
                  ] })
                ]
              },
              post.id
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-white mb-8", children: selectedCategory !== "All" || searchTerm ? "Search Results" : "Latest Articles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: regularPosts.map((post) => {
            const CategoryIcon = getCategoryIcon(post.category);
            const categoryColor = getCategoryColor(post.category);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "article",
              {
                className: "bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${categoryColor}`, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryIcon, { className: "w-3 h-3 mr-1" }),
                      post.category
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-zion-slate-light text-xs", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3 h-3 mr-1" }),
                      post.views
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors line-clamp-2", children: post.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-zion-slate-light mb-4 text-sm leading-relaxed line-clamp-3", children: post.excerpt }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 mb-4", children: [
                    post.tags.slice(0, 2).map((tag, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full",
                        children: tag
                      },
                      index
                    )),
                    post.tags.length > 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-1 bg-zion-slate/20 text-zion-slate text-xs rounded-full", children: [
                      "+",
                      post.tags.length - 2
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-zion-slate-light", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3 h-3 mr-1" }),
                      post.author
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 mr-1" }),
                      post.readTime
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full mt-4 text-zion-cyan hover:text-zion-blue-light transition-colors flex items-center justify-center group/btn text-sm", children: [
                    "Read Article",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" })
                  ] })
                ]
              },
              post.id
            );
          }) }),
          regularPosts.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-zion-slate-light mb-4", children: "No articles found matching your criteria." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  setSelectedCategory("All");
                  setSearchTerm("");
                },
                className: "text-zion-cyan hover:text-zion-blue-light transition-colors",
                children: "Clear filters"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BlogPromotionBanner_default, {}) })
      ] })
    ] })
  ] });
}

const Resources = () => {
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [selectedCategory, setSelectedCategory] = reactExports.useState("all");
  const resources = [
    {
      id: 1,
      title: "The Complete Guide to AI Implementation in Enterprise",
      type: "Whitepaper",
      icon: FileText,
      description: "A comprehensive 50-page guide covering AI strategy, implementation, and best practices for enterprise organizations.",
      downloadCount: "2.5k",
      rating: 4.9,
      pages: 50,
      category: "AI & Machine Learning",
      tags: ["AI", "Enterprise", "Strategy", "Implementation"],
      featured: true,
      downloadUrl: "/resources/ai-implementation-guide.pdf"
    },
    {
      id: 2,
      title: "Cybersecurity Framework for Remote Work",
      type: "Guide",
      icon: BookOpen,
      description: "Essential security measures and protocols for protecting distributed teams and remote work environments.",
      downloadCount: "1.8k",
      rating: 4.8,
      pages: 25,
      category: "Cybersecurity",
      tags: ["Security", "Remote Work", "Best Practices"],
      featured: true,
      downloadUrl: "/resources/cybersecurity-remote-work.pdf"
    },
    {
      id: 3,
      title: "Cloud Migration Strategy Playbook",
      type: "Playbook",
      icon: Cloud,
      description: "Step-by-step methodology for successful cloud migration with real-world case studies and templates.",
      downloadCount: "3.2k",
      rating: 4.9,
      pages: 40,
      category: "Cloud & DevOps",
      tags: ["Cloud", "Migration", "Strategy", "Templates"],
      featured: true,
      downloadUrl: "/resources/cloud-migration-playbook.pdf"
    },
    {
      id: 4,
      title: "Digital Transformation: A CEO's Guide",
      type: "Executive Brief",
      icon: TrendingUp,
      description: "Strategic insights for C-level executives on leading digital transformation initiatives.",
      downloadCount: "1.2k",
      rating: 4.7,
      pages: 20,
      category: "Digital Transformation",
      tags: ["Strategy", "Leadership", "Transformation"],
      featured: false,
      downloadUrl: "/resources/digital-transformation-ceo-guide.pdf"
    },
    {
      id: 5,
      title: "Mobile App Development Best Practices",
      type: "Technical Guide",
      icon: Smartphone,
      description: "Comprehensive guide covering mobile development methodologies, tools, and optimization techniques.",
      downloadCount: "2.1k",
      rating: 4.8,
      pages: 35,
      category: "Mobile Development",
      tags: ["Mobile", "Development", "Best Practices"],
      featured: false,
      downloadUrl: "/resources/mobile-development-guide.pdf"
    },
    {
      id: 6,
      title: "Data Analytics ROI Calculator",
      type: "Tool",
      icon: Database,
      description: "Interactive Excel tool to calculate ROI for data analytics and business intelligence initiatives.",
      downloadCount: "950",
      rating: 4.6,
      pages: "Interactive",
      category: "Data Analytics",
      tags: ["ROI", "Calculator", "Analytics"],
      featured: false,
      downloadUrl: "/resources/data-analytics-roi-calculator.xlsx"
    },
    {
      id: 7,
      title: "Webinar: AI Trends for 2024",
      type: "Webinar",
      icon: Play,
      description: "Expert panel discussion on emerging AI trends, technologies, and their business implications.",
      downloadCount: "5.8k",
      rating: 4.9,
      duration: "45 min",
      category: "AI & Machine Learning",
      tags: ["AI", "Trends", "2024", "Webinar"],
      featured: true,
      downloadUrl: "/resources/ai-trends-2024-webinar.mp4"
    },
    {
      id: 8,
      title: "DevOps Implementation Checklist",
      type: "Checklist",
      icon: CircleCheckBig,
      description: "Comprehensive checklist for implementing DevOps practices in your organization.",
      downloadCount: "1.5k",
      rating: 4.7,
      pages: 15,
      category: "Cloud & DevOps",
      tags: ["DevOps", "Checklist", "Implementation"],
      featured: false,
      downloadUrl: "/resources/devops-implementation-checklist.pdf"
    },
    {
      id: 9,
      title: "AI ROI Calculator 2025",
      type: "Tool",
      icon: TrendingUp,
      description: "Interactive calculator to estimate ROI for AI implementations including automation, analytics, and virtual assistants.",
      downloadCount: "3.2k",
      rating: 4.9,
      pages: "Interactive",
      category: "AI & Machine Learning",
      tags: ["AI", "ROI", "Calculator", "Business Case"],
      featured: true,
      downloadUrl: "/resources/ai-roi-calculator-2025.xlsx"
    },
    {
      id: 10,
      title: "Zero Trust Security Implementation Guide",
      type: "Whitepaper",
      icon: Shield,
      description: "Complete guide to implementing Zero Trust security architecture with step-by-step instructions and best practices.",
      downloadCount: "2.8k",
      rating: 4.8,
      pages: 45,
      category: "Cybersecurity",
      tags: ["Zero Trust", "Security", "Architecture", "Implementation"],
      featured: true,
      downloadUrl: "/resources/zero-trust-implementation-guide.pdf"
    },
    {
      id: 11,
      title: "Enterprise AI Strategy Template",
      type: "Template",
      icon: FileText,
      description: "Comprehensive template for developing AI strategy including assessment frameworks, roadmaps, and success metrics.",
      downloadCount: "1.9k",
      rating: 4.7,
      pages: 30,
      category: "AI & Machine Learning",
      tags: ["AI Strategy", "Template", "Planning", "Framework"],
      featured: false,
      downloadUrl: "/resources/enterprise-ai-strategy-template.docx"
    },
    {
      id: 12,
      title: "Webinar: Future of AI in Business",
      type: "Webinar",
      icon: Play,
      description: "Expert discussion on AI trends, challenges, and opportunities for businesses in 2025 and beyond.",
      downloadCount: "4.1k",
      rating: 4.9,
      duration: "60 min",
      category: "AI & Machine Learning",
      tags: ["AI", "Future", "Business", "Trends", "Webinar"],
      featured: true,
      downloadUrl: "/resources/future-ai-business-webinar.mp4"
    },
    {
      id: 13,
      title: "Cloud Cost Optimization Playbook",
      type: "Playbook",
      icon: Cloud,
      description: "Proven strategies and tactics for reducing cloud costs while maintaining performance and reliability.",
      downloadCount: "2.3k",
      rating: 4.8,
      pages: 35,
      category: "Cloud & DevOps",
      tags: ["Cloud", "Cost Optimization", "Strategy", "Best Practices"],
      featured: false,
      downloadUrl: "/resources/cloud-cost-optimization-playbook.pdf"
    },
    {
      id: 14,
      title: "AI Ethics Assessment Tool",
      type: "Tool",
      icon: Shield,
      description: "Interactive assessment tool to evaluate AI systems for bias, fairness, and ethical considerations.",
      downloadCount: "1.7k",
      rating: 4.6,
      pages: "Interactive",
      category: "AI & Machine Learning",
      tags: ["AI Ethics", "Assessment", "Bias", "Fairness"],
      featured: false,
      downloadUrl: "/resources/ai-ethics-assessment-tool.xlsx"
    },
    {
      id: 15,
      title: "Digital Transformation Readiness Assessment",
      type: "Assessment",
      icon: TrendingUp,
      description: "Comprehensive assessment tool to evaluate your organization's readiness for digital transformation.",
      downloadCount: "2.6k",
      rating: 4.8,
      pages: "Interactive",
      category: "Digital Transformation",
      tags: ["Assessment", "Readiness", "Digital Transformation", "Strategy"],
      featured: true,
      downloadUrl: "/resources/digital-transformation-assessment.xlsx"
    },
    {
      id: 16,
      title: "Microservices Architecture Patterns",
      type: "Technical Guide",
      icon: Database,
      description: "Essential patterns and anti-patterns for designing scalable microservices architectures.",
      downloadCount: "1.8k",
      rating: 4.7,
      pages: 28,
      category: "Web Development",
      tags: ["Microservices", "Architecture", "Patterns", "Scalability"],
      featured: false,
      downloadUrl: "/resources/microservices-architecture-patterns.pdf"
    },
    {
      id: 17,
      title: "Executive Brief: AI Investment Priorities",
      type: "Executive Brief",
      icon: TrendingUp,
      description: "Strategic insights for executives on prioritizing AI investments and maximizing business value.",
      downloadCount: "1.4k",
      rating: 4.8,
      pages: 12,
      category: "AI & Machine Learning",
      tags: ["AI Investment", "Strategy", "Executive", "Business Value"],
      featured: false,
      downloadUrl: "/resources/ai-investment-priorities-executive-brief.pdf"
    },
    {
      id: 18,
      title: "Cybersecurity Incident Response Playbook",
      type: "Playbook",
      icon: Shield,
      description: "Step-by-step guide for responding to cybersecurity incidents with templates and best practices.",
      downloadCount: "2.1k",
      rating: 4.9,
      pages: 40,
      category: "Cybersecurity",
      tags: ["Incident Response", "Security", "Playbook", "Emergency"],
      featured: true,
      downloadUrl: "/resources/cybersecurity-incident-response-playbook.pdf"
    }
  ];
  const categories = [
    { id: "all", name: "All", icon: Lightbulb, count: resources.length },
    { id: "AI & Machine Learning", name: "AI & Machine Learning", icon: Lightbulb, count: resources.filter((r) => r.category === "AI & Machine Learning").length },
    { id: "Cybersecurity", name: "Cybersecurity", icon: Shield, count: resources.filter((r) => r.category === "Cybersecurity").length },
    { id: "Cloud & DevOps", name: "Cloud & DevOps", icon: Cloud, count: resources.filter((r) => r.category === "Cloud & DevOps").length },
    { id: "Digital Transformation", name: "Digital Transformation", icon: TrendingUp, count: resources.filter((r) => r.category === "Digital Transformation").length },
    { id: "Mobile Development", name: "Mobile Development", icon: Smartphone, count: resources.filter((r) => r.category === "Mobile Development").length },
    { id: "Data Analytics", name: "Data Analytics", icon: Database, count: resources.filter((r) => r.category === "Data Analytics").length },
    { id: "Web Development", name: "Web Development", icon: Monitor, count: resources.filter((r) => r.category === "Web Development").length }
  ];
  const featuredResources = reactExports.useMemo(() => resources.filter((resource) => resource.featured), [resources]);
  reactExports.useMemo(() => resources.filter((resource) => !resource.featured), [resources]);
  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || resource.description.toLowerCase().includes(searchTerm.toLowerCase()) || resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "Resources - Zion Tech Group | Whitepapers, Guides, Tools & More" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Access comprehensive resources including whitepapers, implementation guides, assessment tools, and templates to accelerate your AI and IT transformation."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "keywords",
          content: "AI resources, IT guides, whitepapers, tools, templates, implementation guides, ROI calculator, cybersecurity assessment"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "Resources - Zion Tech Group" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: "Comprehensive resources to accelerate your AI and IT transformation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://ziontechgroup.com/resources" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 mr-2" }),
          "Free Resources • Expert Insights • Proven Frameworks"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-6xl font-bold mb-6", children: [
          "Accelerate Your",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block bg-gradient-to-r from-zion-cyan to-zion-blue-light bg-clip-text text-transparent", children: "Transformation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-zion-slate-light mb-8 leading-relaxed", children: "Access our comprehensive library of whitepapers, implementation guides, assessment tools, and templates designed to help you succeed with AI and IT transformation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-zion-cyan", children: "50+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-zion-slate-light", children: "Resources" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-zion-cyan", children: "100K+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-zion-slate-light", children: "Downloads" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-zion-cyan", children: "4.8★" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-zion-slate-light", children: "Average Rating" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-zion-cyan", children: "100%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-zion-slate-light", children: "Free" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Featured Resources" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600", children: "Most downloaded and highly rated resources" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: featuredResources.slice(0, 3).map((resource) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full", children: resource.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-yellow-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-current" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-sm font-medium", children: resource.rating })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-3", children: resource.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: resource.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-500 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-1" }),
              resource.downloadCount,
              " downloads"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-gray-500 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 mr-1" }),
              typeof resource.duration === "string" ? resource.duration : `${resource.pages || 0} pages`
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: resource.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded", children: tag }, tag)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full bg-gradient-to-r from-zion-blue to-zion-purple text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
            "Download Free"
          ] })
        ] }) }, resource.id)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Search resources...",
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-zion-blue focus:border-transparent"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto", children: categories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setSelectedCategory(category.id),
            className: `px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === category.id ? "bg-zion-blue text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
            children: [
              category.name,
              " (",
              category.count,
              ")"
            ]
          },
          category.id
        )) })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900", children: selectedCategory === "all" ? "All Resources" : categories.find((c) => c.id === selectedCategory)?.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-600", children: [
            filteredResources.length,
            " resources"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredResources.map((resource) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-3 py-1 text-sm rounded-full ${resource.category === "whitepapers" ? "bg-purple-100 text-purple-800" : resource.category === "guides" ? "bg-blue-100 text-blue-800" : resource.category === "tools" ? "bg-green-100 text-green-800" : resource.category === "webinars" ? "bg-red-100 text-red-800" : resource.category === "templates" ? "bg-orange-100 text-orange-800" : "bg-gray-100 text-gray-800"}`, children: resource.type }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center text-yellow-500", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-current" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-sm font-medium", children: resource.rating })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-gray-900 mb-3 line-clamp-2", children: resource.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4 line-clamp-3", children: resource.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4 text-sm text-gray-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 mr-1" }),
              resource.downloadCount
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 mr-1" }),
              typeof resource.duration === "string" ? resource.duration : `${resource.pages || 0} pages`
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 mb-4", children: [
            resource.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded", children: tag }, tag)),
            resource.tags.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded", children: [
              "+",
              resource.tags.length - 3
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full bg-gradient-to-r from-zion-blue to-zion-purple text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
            "Download Free"
          ] })
        ] }) }, resource.id)) }),
        filteredResources.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-12 h-12 text-gray-400 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "No resources found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Try adjusting your search terms or filters" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-6", children: "Need Custom Resources for Your Project?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Our experts can create customized whitepapers, implementation guides, and assessment tools tailored to your specific industry and requirements." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "/contact",
              className: "bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-5 h-5" }),
                "Request Custom Resources"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/services",
              className: "border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105",
              children: "Explore Our Services"
            }
          )
        ] })
      ] }) })
    ] })
  ] });
};
var Resources_default = Resources;

const AIAutonomousOperations = () => {
  const features = [
    {
      icon: Brain,
      title: "Self-Healing Systems",
      description: "Automatically detect and resolve infrastructure issues without human intervention",
      benefits: ["99.9% uptime", "Instant problem resolution", "Zero manual intervention"]
    },
    {
      icon: Zap,
      title: "Predictive Maintenance",
      description: "Prevent failures before they occur using advanced AI algorithms",
      benefits: ["90% fewer outages", "50% cost reduction", "Proactive maintenance"]
    },
    {
      icon: TrendingUp,
      title: "Auto-Scaling",
      description: "Dynamically adjust resources based on real-time demand patterns",
      benefits: ["Optimal performance", "Cost efficiency", "Seamless scaling"]
    },
    {
      icon: Shield,
      title: "Intelligent Security",
      description: "AI-powered threat detection and automated response systems",
      benefits: ["Real-time protection", "Automated responses", "Advanced threat detection"]
    }
  ];
  const useCases = [
    {
      title: "Infrastructure Management",
      description: "Automated monitoring and optimization of servers, networks, and applications",
      icon: Settings,
      results: ["65% cost reduction", "99.99% uptime", "90% fewer incidents"]
    },
    {
      title: "Application Performance",
      description: "Continuous optimization of application performance and user experience",
      icon: ChartColumn,
      results: ["45% faster response", "30% better performance", "Real-time optimization"]
    },
    {
      title: "Security Operations",
      description: "Automated threat detection, incident response, and compliance monitoring",
      icon: Shield,
      results: ["95% faster response", "99.2% accuracy", "Zero false positives"]
    },
    {
      title: "Cloud Optimization",
      description: "Intelligent resource allocation and cost optimization across cloud platforms",
      icon: Globe,
      results: ["40% cost savings", "Optimal resource usage", "Auto-scaling efficiency"]
    }
  ];
  const testimonials = [
    {
      quote: "AI Autonomous Operations transformed our infrastructure management. We achieved 99.99% uptime and reduced operational costs by 65%.",
      author: "Sarah Johnson",
      position: "CTO, GlobalTech Enterprises",
      company: "Technology",
      rating: 5,
      results: ["99.99% uptime", "65% cost reduction", "$12M savings"]
    },
    {
      quote: "The self-healing capabilities eliminated 90% of our manual interventions. Our team can now focus on innovation instead of maintenance.",
      author: "Michael Chen",
      position: "VP Engineering, CloudScale Inc.",
      company: "Cloud Services",
      rating: 5,
      results: ["90% fewer interventions", "45% performance gain", "24/7 automation"]
    },
    {
      quote: "Predictive maintenance prevented $8M in potential downtime costs. The ROI was incredible within the first quarter.",
      author: "Emily Rodriguez",
      position: "Operations Director, SecureBank",
      company: "Financial Services",
      rating: 5,
      results: ["$8M prevented losses", "Zero downtime", "300% ROI"]
    }
  ];
  const pricingTiers = [
    {
      name: "Starter",
      price: "$5,000",
      period: "month",
      description: "Perfect for small to medium businesses",
      features: [
        "Basic self-healing systems",
        "Predictive maintenance alerts",
        "Auto-scaling capabilities",
        "24/7 monitoring",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$15,000",
      period: "month",
      description: "Ideal for growing enterprises",
      features: [
        "Advanced AI algorithms",
        "Full autonomous operations",
        "Intelligent security automation",
        "Custom integrations",
        "Priority support",
        "Dedicated success manager"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored for large organizations",
      features: [
        "Custom AI model development",
        "Multi-cloud orchestration",
        "Advanced analytics & reporting",
        "White-label solutions",
        "24/7 dedicated support",
        "SLA guarantees"
      ],
      popular: false
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Helmet, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("title", { children: "AI Autonomous Operations - Zion Tech Group | Self-Managing Infrastructure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "description",
          content: "Revolutionize your infrastructure with AI Autonomous Operations. Self-healing systems, predictive maintenance, and automated scaling. Achieve 99.99% uptime and reduce costs by 65%."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          name: "keywords",
          content: "AI autonomous operations, self-healing systems, predictive maintenance, automated scaling, infrastructure management, AI automation"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: "AI Autonomous Operations - Zion Tech Group" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "meta",
        {
          property: "og:description",
          content: "Self-managing infrastructure with AI. Achieve 99.99% uptime and reduce costs by 65%."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: "https://ziontechgroup.com/services/ai-autonomous-operations" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 mr-2" }),
          "Revolutionary AI Technology"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl md:text-6xl font-bold mb-6", children: [
          "AI Autonomous Operations",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block bg-gradient-to-r from-zion-cyan to-zion-blue-light bg-clip-text text-transparent", children: "Self-Managing Infrastructure" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-zion-slate-light mb-8 leading-relaxed", children: "Transform your infrastructure with AI that thinks, learns, and acts autonomously. Achieve 99.99% uptime, reduce costs by 65%, and eliminate manual interventions with our revolutionary AI Autonomous Operations platform." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-zion-cyan", children: "99.99%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-zion-slate-light", children: "Uptime" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-zion-cyan", children: "65%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-zion-slate-light", children: "Cost Reduction" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-zion-cyan", children: "90%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-zion-slate-light", children: "Fewer Incidents" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-zion-cyan", children: "24/7" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-zion-slate-light", children: "Autonomous" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5" }),
                "Start Free Trial"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105",
              children: "Schedule Demo"
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Revolutionary AI Capabilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Our AI Autonomous Operations platform combines cutting-edge artificial intelligence with infrastructure management to create truly autonomous systems." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-12", children: features.map((feature, index) => {
          const Icon = feature.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-zion-blue/10 p-3 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-8 h-8 text-zion-blue" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900", children: feature.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6 leading-relaxed", children: feature.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: feature.benefits.map((benefit, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-500 flex-shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700 font-medium", children: benefit })
            ] }, idx)) })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Real-World Applications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "See how AI Autonomous Operations transforms different aspects of your infrastructure and operations." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: useCases.map((useCase, index) => {
          const Icon = useCase.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-zion-blue/5 to-zion-purple/5 rounded-2xl p-8 border border-zion-blue/10 hover:shadow-lg transition-all duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-zion-blue/20 p-3 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-8 h-8 text-zion-blue" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900", children: useCase.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-6", children: useCase.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4", children: useCase.results.map((result, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center p-3 bg-white rounded-lg shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-zion-blue", children: result }) }, idx)) })
          ] }, index);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "What Our Clients Say" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Real results from real clients who have transformed their operations with AI Autonomous Operations." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center mb-4", children: [...Array(testimonial.rating)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-yellow-400 fill-current" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 mb-6 italic", children: [
            '"',
            testimonial.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-zion-blue to-zion-purple rounded-full flex items-center justify-center text-white font-bold", children: testimonial.author.split(" ").map((n) => n[0]).join("") }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-gray-900", children: testimonial.author }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-600", children: testimonial.position }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-zion-blue", children: testimonial.company })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: testimonial.results.map((result, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center p-2 bg-green-50 rounded text-sm font-medium text-green-700", children: result }, idx)) })
          ] })
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Choose Your Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Flexible pricing options designed to scale with your business needs. Start with a free trial and upgrade as you grow." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: pricingTiers.map((tier, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${tier.popular ? "ring-2 ring-zion-blue scale-105" : ""}`, children: [
          tier.popular && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-zion-blue text-white text-sm font-bold px-4 py-2 rounded-full text-center mb-6", children: "Most Popular" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: tier.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 mb-4", children: tier.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold text-zion-blue", children: [
              tier.price,
              tier.period && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg text-gray-600", children: [
                "/",
                tier.period
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 mb-8", children: tier.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-5 h-5 text-green-500 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-700", children: feature })
          ] }, idx)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: `w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${tier.popular ? "bg-zion-blue text-white hover:bg-zion-blue-dark" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`,
              children: tier.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"
            }
          )
        ] }, index)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl font-bold mb-6", children: "Ready to Transform Your Infrastructure?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Join the companies that have achieved 99.99% uptime and reduced costs by 65% with AI Autonomous Operations. Start your free trial today." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "bg-white text-zion-blue hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5" }),
                "Start Free Trial"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "border-2 border-white text-white hover:bg-white hover:text-zion-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105",
              children: "Schedule Demo"
            }
          )
        ] })
      ] }) })
    ] })
  ] });
};
var AIAutonomousOperations_default = AIAutonomousOperations;

const AIPlatformArchitecture = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-5xl font-bold text-gray-900 mb-6", children: "AI Platform Architecture" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mb-8", children: "Build enterprise-grade AI platforms that scale. From data pipelines to model serving, we architect AI systems that deliver consistent value across your organization." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg px-6 py-3 shadow-sm border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-blue-600", children: "✓ Production Ready" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg px-6 py-3 shadow-sm border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-green-600", children: "✓ Scalable" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-lg px-6 py-3 shadow-sm border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-purple-600", children: "✓ Secure" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-8 shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-6 h-6 text-blue-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "Data Pipeline Architecture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Design robust data pipelines that handle real-time streaming, batch processing, and feature engineering at scale." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-8 shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-6 h-6 text-green-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "Model Serving Infrastructure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Deploy and serve ML models with high availability, auto-scaling, and performance monitoring built-in." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-8 shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-6 h-6 text-purple-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "Security & Governance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Implement comprehensive security controls, model governance, and compliance frameworks for enterprise AI." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl p-8 shadow-lg mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-center mb-8", children: "Platform Architecture" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-blue-100 rounded-lg p-6 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Data Layer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-2", children: "Real-time & Batch Processing" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-green-100 rounded-lg p-6 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Feature Store" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-2", children: "Centralized Feature Management" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-purple-100 rounded-lg p-6 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Model Registry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-2", children: "Version Control & Deployment" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-100 rounded-lg p-6 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Serving Layer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 mt-2", children: "API Gateway & Load Balancing" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Why Choose Our AI Platform Architecture?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "🚀 Rapid Deployment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: "Get your AI platform up and running in weeks, not months. Our proven architecture patterns accelerate time-to-value." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "📈 Enterprise Scale" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: "Handle millions of requests per day with auto-scaling infrastructure and distributed processing capabilities." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "🔒 Production Ready" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: "Built-in monitoring, logging, and alerting ensure your AI platform runs reliably in production environments." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold mb-4", children: "💰 Cost Optimized" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-100", children: "Optimize compute costs with intelligent resource allocation and right-sizing recommendations." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center bg-white rounded-xl p-12 shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Ready to Build Your AI Platform?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-600 mb-8", children: "Let's discuss your requirements and design a platform that scales with your business." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors", children: "Schedule Consultation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors", children: "View Case Studies" })
      ] })
    ] })
  ] }) });
};
var AI_Platform_Architecture_default = AIPlatformArchitecture;

const About = () => null;
const Services = () => null;
const AIMicroSAAS = () => null;
const Tools = () => null;
const EnterpriseAISolutions = () => null;
const Post = () => null;
const CaseStudies = () => null;
const AIWorkflowAutomation = () => null;
const AIVirtualAssistant = () => null;
const AIDataAnalytics = () => null;
const AppRouter = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Routes, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Home_default, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/about", element: /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/services", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/services/ai-workflow-automation", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AIWorkflowAutomation, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/services/ai-virtual-assistant", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AIVirtualAssistant, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/services/ai-data-analytics", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AIDataAnalytics, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/services/ai-autonomous-operations", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AIAutonomousOperations_default, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/services/AI-Platform-Architecture", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AI_Platform_Architecture_default, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/case-studies", element: /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudies, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/ai-micro-saas", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AIMicroSAAS, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Blog, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/blog/:slug", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Post, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/resources", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Resources_default, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/tools", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Tools, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/enterprise-ai-solutions", element: /* @__PURE__ */ jsxRuntimeExports.jsx(EnterpriseAISolutions, {}) })
  ] });
};

const AdvancedAnalytics = () => null;
const PerformanceOptimizer = () => null;
const PerformanceMonitor = () => null;
const EnhancedErrorBoundary = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
const NotificationSystem = () => null;
function App() {
  const [showPerformanceOptimizer, setShowPerformanceOptimizer] = reactExports.useState(false);
  const [showPerformanceMonitor, setShowPerformanceMonitor] = reactExports.useState(false);
  const [notifications, setNotifications] = reactExports.useState([]);
  const seoDataForOptimizer = reactExports.useMemo(() => ({
    title: "Zion Tech Group - Leading AI & Technology Solutions",
    description: "Cutting-edge AI, cloud, and digital transformation solutions for modern enterprises.",
    canonicalUrl: typeof window !== "undefined" ? window.location.pathname : "/"
  }), []);
  reactExports.useEffect(() => {
    const onKeyDown = (e) => {
      if (!e.ctrlKey || !e.shiftKey) return;
      switch (e.key.toLowerCase()) {
        case "p":
          e.preventDefault();
          setShowPerformanceOptimizer((v) => !v);
          break;
        case "m":
          e.preventDefault();
          setShowPerformanceMonitor((v) => !v);
          break;
      }
      try {
        if (securityManager && typeof securityManager.initialize === "function") {
          securityManager.initialize();
        }
        accessibilityEnhancer.initialize();
        const advancedPerformanceOptimizer = window.advancedPerformanceOptimizer;
        const advancedSEOOptimizer = window.advancedSEOOptimizer;
        const advancedSecurityManager = window.advancedSecurityManager;
        const advancedAnalytics = window.advancedAnalytics;
        const advancedErrorHandler = window.advancedErrorHandler;
        const advancedCachingSystem = window.advancedCachingSystem;
        const advancedUXOptimizer = window.advancedUXOptimizer;
        const advancedTestingFramework = window.advancedTestingFramework;
        const advancedI18n = window.advancedI18n;
        advancedPerformanceOptimizer?.initialize?.();
        advancedSEOOptimizer?.initialize?.();
        accessibilityEnhancer.initialize();
        advancedSecurityManager?.initialize?.();
        advancedAnalytics?.initialize?.();
        advancedCachingSystem?.initialize?.();
        advancedUXOptimizer?.initialize?.();
        advancedTestingFramework?.initialize?.();
        advancedI18n?.initialize?.();
        window.enhancements = {
          performanceOptimizer: advancedPerformanceOptimizer,
          seoOptimizer: advancedSEOOptimizer,
          accessibilityEnhancer,
          securityManager: advancedSecurityManager,
          analytics: advancedAnalytics,
          errorHandler: advancedErrorHandler,
          cachingSystem: advancedCachingSystem,
          uxOptimizer: advancedUXOptimizer
        };
        window.performanceOptimizer = advancedPerformanceOptimizer;
        window.seoOptimizer = advancedSEOOptimizer;
        window.accessibilityEnhancer = accessibilityEnhancer;
        window.securityManager = advancedSecurityManager;
        window.analytics = advancedAnalytics;
        window.errorHandler = advancedErrorHandler;
        window.cachingSystem = advancedCachingSystem;
        window.uxOptimizer = advancedUXOptimizer;
        window.testingFramework = advancedTestingFramework;
        window.i18n = advancedI18n;
      } catch (error) {
        console.error("Error initializing enhancements:", error);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  const handleRemoveNotification = reactExports.useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(EnhancedErrorBoundary, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SEOOptimizer_default,
      {
        title: seoDataForOptimizer.title,
        description: seoDataForOptimizer.description,
        canonicalUrl: new URL(seoDataForOptimizer.canonical).pathname
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AdvancedAnalytics, { enableConversionTracking: true, enablePerformanceTracking: true, enableErrorTracking: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AppRouter, {}),
      showPerformanceOptimizer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center", role: "dialog", "aria-modal": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Performance Optimizer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowPerformanceOptimizer(false), className: "text-gray-500 hover:text-gray-700 text-2xl", children: "✕" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PerformanceOptimizer, { isVisible: true, onClose: () => setShowPerformanceOptimizer(false) })
      ] }) }),
      showPerformanceMonitor && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 bg-black/50 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Performance Monitor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShowPerformanceMonitor(false), className: "text-gray-500 hover:text-gray-700 text-2xl", children: "✕" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PerformanceMonitor, { showDashboard: true })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationSystem, { notifications, onRemove: handleRemoveNotification })
    ] })
  ] });
}

const ThemeProvider = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw-enhanced.js").then((registration) => {
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              window.location.reload();
            }
          });
        }
      });
    }).catch((error) => {
    });
  });
}
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HelmetProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) }) }) }) })
);
