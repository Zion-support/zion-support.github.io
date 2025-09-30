// Content configuration for featured items and promotional content

export interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  link: string;
  type: 'article' | 'service' | 'case-study';
  featured: boolean;
}

export const featuredBlogPosts: FeaturedItem[] = [
  {
    id: "realtime-ai-decision-engines-2025",
    title: "Real-Time AI Decision Engines",
    description: "10M/sec under 1ms with tiered models and caches",
    link: "/blog/real-time-ai-decision-engines-2025",
    type: "article",
    featured: true
  },
  {
    id: "genai-consent-mode-edge-2026",
    title: "GenAI Consent Mode 2026",
    description: "On-device signals without PII using scoped IDs and consent-aware analytics",
    link: "/blog/genai-consent-mode-edge-2026",
    type: "article",
    featured: true
  },
  {
    id: "ai-data-lineage-2026",
    title: "AI Data Lineage 2026",
    description: "Signed SBOMs and audit-ready provenance for datasets, prompts, and models",
    link: "/blog/ai-data-lineage-2026",
    type: "article",
    featured: true
  },
  {
    id: "agent-policy-gates-blueprint-2026",
    title: "Agent Policy Gates 2026",
    description: "Approvals, budgets, and sandboxed tools for safe agent releases",
    link: "/blog/agent-policy-gates-blueprint-2026",
    type: "article",
    featured: true
  },
  {
    id: "ai-trustworthy-agents-2026",
    title: "Trustworthy Autonomous Agents 2026",
    description: "Guardrails, evals, and policy gates for reliable autonomy",
    link: "/blog/ai-trustworthy-agents-2026",
    type: "article",
    featured: true
  },
  {
    id: "ai-agent-security-blueprint-2026",
    title: "AI Agent Security Blueprint 2026",
    description: "Zero‑trust for agents: isolation, least privilege, auditability",
    link: "/blog/ai-agent-security-blueprint-2026",
    type: "article",
    featured: true
  },
  {
    id: "ai-2027-autonomous-governance-blueprint",
    title: "AI 2027 Autonomous Governance Blueprint",
    description: "Policy gates, budgets, and verifiable outcomes for safe autonomy",
    link: "/blog/ai-2027-autonomous-governance-blueprint",
    type: "article",
    featured: true
  },
  {
    id: "ai-2026-agent-ops-observability",
    title: "Agent Ops Observability 2026",
    description: "Metrics, traces, evals, and guardrails for reliable autonomy",
    link: "/blog/ai-2026-agent-ops-observability",
    type: "article",
    featured: true
  },
  {
    id: "privacy-first-telemetry-quickstart-2025",
    title: "Privacy‑First Telemetry Quickstart",
    description: "Signal‑rich analytics with scoped IDs and DP noise",
    link: "/blog/privacy-first-telemetry-quickstart-2025",
    type: "article",
    featured: true
  },
  {
    id: "agent-runbooks-2025",
    title: "Agent Runbooks: Budgets & Rollbacks",
    description: "Ship safe autonomy with budgeted actions and safety gates",
    link: "/blog/agent-runbooks-2025",
    type: "article",
    featured: true
  },
  {
    id: "multimodal-ai-2025",
    title: "Multimodal AI Revolution 2025",
    description: "Master unified vision-language-audio AI achieving 98% accuracy",
    link: "/blog/multimodal-ai-revolution-2025",
    type: "article",
    featured: true
  },
  {
    id: "blockchain-ai-2025",
    title: "Blockchain-AI Integration 2025",
    description: "Trustless intelligence with decentralized AI governance",
    link: "/blog/blockchain-ai-integration-2025",
    type: "article",
    featured: true
  },
  {
    id: "green-ai-2025",
    title: "Green AI & Sustainability 2025",
    description: "Carbon-neutral ML achieving 90% carbon reduction",
    link: "/blog/green-ai-sustainability-2025",
    type: "article",
    featured: true
  },
  {
    id: "ai-compliance-2025",
    title: "AI Regulatory Compliance 2025",
    description: "Navigate EU AI Act, GDPR, and global regulations",
    link: "/blog/ai-regulatory-compliance-2025",
    type: "article",
    featured: true
  },
  {
    id: "agentic-control-planes-2026",
    title: "Agentic Control Planes 2026",
    description: "Budgets, policy gates, and instant recovery for agent platforms",
    link: "/blog/agentic-control-planes-2026",
    type: "article",
    featured: true
  },
  {
    id: "edge-eval-canaries-2026",
    title: "Edge Evals & Canaries 2026",
    description: "KPI‑linked evals and live canaries at <100ms",
    link: "/blog/edge-eval-canaries-2026",
    type: "article",
    featured: true
  },
  {
    id: "ai-value-stream-maps-2026",
    title: "AI Value Stream Maps 2026",
    description: "Trace prompts and tools to business outcomes",
    link: "/blog/ai-value-stream-maps-2026",
    type: "article",
    featured: true
  }
];

// Newly featured items to advertise on the homepage
featuredBlogPosts.unshift(
  {
    id: "ai-risk-budgets-blueprint-2026",
    title: "AI Risk Budgets Blueprint 2026",
    description: "Budgets + KPI canaries + rollback for safe autonomy",
    link: "/blog/ai-risk-budgets-blueprint-2026",
    type: "article",
    featured: true
  },
  {
    id: "edge-consent-mode-2026",
    title: "Edge Consent Mode 2026",
    description: "Private analytics without PII at <100ms with scoped IDs & DP",
    link: "/blog/edge-consent-mode-2026",
    type: "article",
    featured: true
  },
  {
    id: "genai-quality-tiers-blueprint-2026",
    title: "GenAI Quality Tiers Blueprint 2026",
    description: "Predictable cost and stable UX using quality tiers + caches",
    link: "/blog/genai-quality-tiers-blueprint-2026",
    type: "article",
    featured: true
  },
  {
    id: "ai-governance-scorecards-q1-2026",
    title: "AI Governance Scorecards Q1 2026",
    description: "Scorecards + CI policy tests wired to outcomes",
    link: "/blog/ai-governance-scorecards-q1-2026",
    type: "article",
    featured: true
  },
  {
    id: "edge-experiments-quickstart-2026",
    title: "Edge Experiments Quickstart 2026",
    description: "Private A/B at <100ms with scoped IDs and DP noise",
    link: "/blog/edge-experiments-quickstart-2026",
    type: "article",
    featured: true
  },
  {
    id: "agent-release-guardrails-checklist-2026",
    title: "Agent Release Guardrails 2026",
    description: "Budgets, approvals, rollback—battle‑tested checklist",
    link: "/blog/agent-release-guardrails-checklist-2026",
    type: "article",
    featured: true
  },
  {
    id: "ai-governance-real-time-2026",
    title: "AI Governance in Real Time 2026",
    description: "Live canaries + CI policy tests to prevent regressions.",
    link: "/blog/ai-governance-real-time-2026",
    type: "article",
    featured: true
  },
  {
    id: "edge-inference-warm-pools-2026",
    title: "Edge Inference Warm Pools 2026",
    description: "Sub‑100ms global with warm pools, prefetch, tiered caches.",
    link: "/blog/edge-inference-warm-pools-2026",
    type: "article",
    featured: true
  },
  {
    id: "agent-release-guardrails-2026",
    title: "Agent Release Guardrails 2026",
    description: "Budgets, approvals, and instant rollback for safe releases.",
    link: "/blog/agent-release-guardrails-2026",
    type: "article",
    featured: true
  },
  {
    id: "operational-evals-2026",
    title: "Operational Evals 2026",
    description: "KPIs, canaries, and rollback playbooks that keep velocity high",
    link: "/blog/ai-operational-evals-2026",
    type: "article",
    featured: true
  },
  {
    id: "edge-ab-testing-2026",
    title: "Edge A/B Testing 2026",
    description: "Private experiments at <100ms with scoped IDs and DP noise",
    link: "/blog/edge-ab-testing-2026",
    type: "article",
    featured: true
  },
  {
    id: "sovereign-rag-platforms-2026",
    title: "Sovereign RAG Platforms 2026",
    description: "Residency, guardrails, and speed without hurting UX",
    link: "/blog/sovereign-rag-platforms-2026",
    type: "article",
    featured: true
  }
);

// Promote brand-new content on homepage showcases (added Sept 30, 2025)
featuredBlogPosts.unshift(
  {
    id: "ai-sla-scorecards-2026-q1",
    title: "AI SLA Scorecards 2026 Q1",
    description: "SLIs, budgets, and instant rollback wired to product KPIs",
    link: "/blog/ai-sla-scorecards-2026-q1",
    type: "article",
    featured: true
  },
  {
    id: "edge-private-insights-v2-2026",
    title: "Edge Private Insights v2 (2026)",
    description: "Scoped IDs, DP noise, and on‑device aggregation at <100ms",
    link: "/blog/edge-private-insights-v2-2026",
    type: "article",
    featured: true
  },
  {
    id: "agent-release-runbooks-v2-2026",
    title: "Agent Release Runbooks v2 (2026)",
    description: "Budgets, KPI‑linked canaries, and one‑click recovery",
    link: "/blog/agent-release-runbooks-v2-2026",
    type: "article",
    featured: true
  },
  {
    id: "ai-operational-resilience-2026",
    title: "AI Operational Resilience 2026",
    description: "Error budgets, blast radius limits, rollback playbooks for 99.99% uptime",
    link: "/blog/ai-operational-resilience-2026",
    type: "article",
    featured: true
  },
  {
    id: "privacy-first-experimentation-2026",
    title: "Privacy‑First Experimentation 2026",
    description: "Scoped IDs, edge aggregation, DP noise for compliant A/B tests",
    link: "/blog/privacy-first-experimentation-2026",
    type: "article",
    featured: true
  },
  {
    id: "genai-routing-blueprints-2026",
    title: "GenAI Routing Blueprints 2026",
    description: "Quality tiers, caches, and eval signals under budget",
    link: "/blog/genai-routing-blueprints-2026",
    type: "article",
    featured: true
  }
);

export const featuredServices: FeaturedItem[] = [
  {
    id: "ai-predictive-maintenance",
    title: "AI Predictive Maintenance",
    description: "85% reduction in downtime with 98% prediction accuracy",
    link: "/services/ai-predictive-maintenance",
    type: "service",
    featured: true
  },
  {
    id: "ai-talent-acquisition",
    title: "AI Talent Acquisition Suite",
    description: "10x faster hiring with 95% match accuracy",
    link: "/services/ai-talent-acquisition",
    type: "service",
    featured: true
  },
  {
    id: "ai-fraud-prevention",
    title: "AI Fraud Prevention System",
    description: "99.95% detection accuracy in sub-100ms",
    link: "/services/ai-fraud-prevention",
    type: "service",
    featured: true
  },
  {
    id: "ai-creative-studio",
    title: "AI Creative Studio",
    description: "100x faster content creation at 90% lower cost",
    link: "/services/ai-creative-studio",
    type: "service",
    featured: true
  }
];

export const getLatestContent = (count: number = 5): FeaturedItem[] => {
  return [...featuredBlogPosts, ...featuredServices]
    .filter(item => item.featured)
    .slice(0, count);
};

// Surface brand-new articles at the very top of featured content
featuredBlogPosts.unshift(
  {
    id: "ai-governance-live-scorecards-2026",
    title: "AI Governance Live Scorecards 2026",
    description: "CI policy tests + live scorecards preventing regressions before they ship",
    link: "/blog/ai-governance-live-scorecards-2026",
    type: "article",
    featured: true
  },
  {
    id: "edge-real-time-personalization-2026",
    title: "Edge Real‑Time Personalization 2026",
    description: "Private <100ms personalization with scoped IDs and on‑device metrics",
    link: "/blog/edge-real-time-personalization-2026",
    type: "article",
    featured: true
  },
  {
    id: "agent-release-runbooks-2026",
    title: "Agent Release Runbooks 2026",
    description: "Approvals, budgets, and instant rollback for safe autonomous releases",
    link: "/blog/agent-release-runbooks-2026",
    type: "article",
    featured: true
  }
);

// Advertise new content on homepage showcases
featuredBlogPosts.unshift(
  {
    id: "ai-executive-playbook-2027",
    title: "AI Executive Playbook 2027",
    description: "Plan, fund, and govern reliable AI with measurable outcomes",
    link: "/blog/ai-executive-playbook-2027",
    type: "article",
    featured: true
  },
  {
    id: "ai-2027-cost-optimization-playbook",
    title: "AI 2027 Cost Optimization Playbook",
    description: "Quality tiers, caches, and budgets to cut spend 30–70%",
    link: "/blog/ai-2027-cost-optimization-playbook",
    type: "article",
    featured: true
  }
);

// Sept 30, 2025 – Feature newly added and runtime guardrail posts (merged)
featuredBlogPosts.unshift(
  {
    id: "ai-exec-trust-scorecards-2026",
    title: "Executive Trust Scorecards 2026",
    description: "SLIs linked to KPIs with rollback triggers",
    link: "/blog/ai-exec-trust-scorecards-2026",
    type: "article",
    featured: true
  },
  {
    id: "ai-governance-runtime-guardrails-2026",
    title: "AI Governance Runtime Guardrails 2026",
    description: "Inline policy checks and live canaries without slowing teams",
    link: "/blog/ai-governance-runtime-guardrails-2026",
    type: "article",
    featured: true
  },
  {
    id: "edge-model-warm-pools-2026",
    title: "Edge Model Warm Pools 2026",
    description: "Predictive warmups and tiered caches for <100ms starts",
    link: "/blog/edge-model-warm-pools-2026",
    type: "article",
    featured: true
  },
  {
    id: "edge-privacy-insights-2026",
    title: "Edge Privacy Insights 2026",
    description: "Scoped IDs, edge aggregation, and DP noise for actionable metrics",
    link: "/blog/edge-privacy-insights-2026",
    type: "article",
    featured: true
  },
  {
    id: "agentic-runtime-safety-2026",
    title: "Agentic Runtime Safety 2026",
    description: "Budgets, sandboxes, and instant rollback for safe autonomy",
    link: "/blog/agentic-runtime-safety-2026",
    type: "article",
    featured: true
  }
);

// Mar 2026 – Surface newest posts at the very top for homepage ads
featuredBlogPosts.unshift(
  {
    id: "ai-governance-pr-policy-tests-2026",
    title: "PR Policy Tests 2026",
    description: "Lightweight CI policy tests wired to product KPIs—fast and safe delivery.",
    link: "/blog/ai-governance-pr-policy-tests-2026",
    type: "article",
    featured: true
  },
  {
    id: "edge-zero-pii-analytics-2026",
    title: "Zero‑PII Edge Analytics 2026",
    description: "Scoped IDs, on‑device aggregation, and DP noise for actionable insights.",
    link: "/blog/edge-zero-pii-analytics-2026",
    type: "article",
    featured: true
  },
  {
    id: "agent-release-zero-regret-2026",
    title: "Zero‑Regret Agent Releases 2026",
    description: "Budgeted actions, KPI‑linked canaries, and instant rollback for safe automation.",
    link: "/blog/agent-release-zero-regret-2026",
    type: "article",
    featured: true
  }
);