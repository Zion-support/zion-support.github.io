export type WhatsNewItem = {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  emoji?: string;
  highlight?: boolean;
  date?: string;
};

export const WHATS_NEW_ITEMS: WhatsNewItem[] = [
  {
    id: "ai-2026-operational-excellence-blueprint",
    title: "AI 2026: Operational Excellence Blueprint",
    description:
      "Practical patterns to run reliable, efficient, and governed AI operations at scale.",
    ctaLabel: "Read Blueprint",
    href: "/content/ai-2026-operational-excellence-blueprint",
    emoji: "🏗️",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "ai-2026-agent-posture-hardening-guide",
    title: "AI 2026: Agent Posture Hardening Guide",
    description:
      "Baseline controls, continuous posture checks, and remediation flows for agent systems.",
    ctaLabel: "Read Guide",
    href: "/blog/ai-2026-agent-posture-management",
    emoji: "🧰",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "agents-oncall-automation-2026",
    title: "AI 2026: Agents-On-Call Automation",
    description:
      "Autonomous incident triage, mitigation, and escalation with eval-gated playbooks and observability.",
    ctaLabel: "Read Guide",
    href: "/blog/ai-2026-agents-oncall-automation",
    emoji: "🛠️",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "llm-evals-maturity-model-2026-content",
    title: "AI 2026: LLM Evals Maturity Model",
    description:
      "Evaluation-first framework with metrics, harnesses, and governance to ship reliable AI.",
    ctaLabel: "Read Framework",
    href: "/content/ai-2026-evals-maturity-model",
    emoji: "📈",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "real-time-rag-2026",
    title: "AI 2026: Real-Time Retrieval Architectures",
    description:
      "Sub-100ms RAG with hybrid search, semantic caching, and streaming for production.",
    ctaLabel: "Read Guide",
    href: "/blog/ai-2026-real-time-retrieval-architectures",
    emoji: "⚡",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "evaluation-harness-blueprint-2026",
    title: "AI 2026: Evaluation Harness Blueprint",
    description:
      "Build scenario suites, metrics, and policy gates to ship reliable autonomous agents.",
    ctaLabel: "Read Blueprint",
    href: "/content/ai-2026-evaluation-harness-blueprint",
    emoji: "📊",
    date: "2025-09-15",
  },
  {
    id: "autonomous-ops-playbook-2026",
    title: "AI 2026: Autonomous Ops Playbook",
    description:
      "A practical playbook to deploy autonomous, outcome-driven operations with guardrails.",
    ctaLabel: "Explore Playbook",
    href: "/content/ai-2026-autonomous-ops-playbook",
    emoji: "🛠️",
    date: "2025-09-15",
  },
  {
    id: "agent-observability-guide-2026",
    title: "AI 2026: Enterprise Agent Observability Guide",
    description:
      "Traces, evals, and safety telemetry to operate autonomous agents in production.",
    ctaLabel: "Read Guide",
    href: "/blog/ai-2026-enterprise-agent-observability-guide",
    emoji: "👀",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "ai-content-studio",
    title: "AI Content Studio v2",
    description:
      "Generate long-form articles, social posts, and marketing assets with workflow automation.",
    ctaLabel: "Explore Studio",
    href: "/ai-content-studio",
    emoji: "🧠",
    highlight: true,
    date: "2025-09-10",
  },
  {
    id: "blockchain-audit",
    title: "Blockchain Audit Toolkit",
    description:
      "End-to-end smart contract review with automated threat modeling and gas optimization.",
    ctaLabel: "See Toolkit",
    href: "/blockchain/audit",
    emoji: "🔍",
    date: "2025-09-05",
  },
  {
    id: "cloud-savings",
    title: "Cloud Cost Optimizer",
    description:
      "Cut cloud spend with intelligent rightsizing, autoscheduling, and FinOps dashboards.",
    ctaLabel: "Start Saving",
    href: "/cloud/optimizer",
    emoji: "☁️",
    date: "2025-09-01",
  },
  {
    id: "secure-agent-architecture-2026",
    title: "AI 2026: Secure Agent Architecture",
    description:
      "Blueprint for zero-trust agents with policy-as-code, isolation domains, and runtime guards.",
    ctaLabel: "Read Architecture",
    href: "/blog/ai-2026-secure-agent-architecture",
    emoji: "🔐",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "llm-evals-maturity-model-2026",
    title: "AI 2026: LLM Evals Maturity Model",
    description:
      "Evaluation-first framework with metrics, harnesses, and governance to ship reliable AI.",
    ctaLabel: "Read Framework",
    href: "/blog/ai-2026-llm-evals-maturity-model",
    emoji: "🧪",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "autonomous-compliance-2026",
    title: "AI 2026: Autonomous Compliance Operating Model",
    description:
      "Automate controls, evidence, and tests for audit-ready AI operations with policy-as-code.",
    ctaLabel: "Explore Model",
    href: "/content/ai-2026-autonomous-compliance",
    emoji: "✅",
    date: "2025-09-15",
  },
  {
    id: "autonomous-finance-os",
    title: "AI 2026: Autonomous Finance OS",
    description:
      "Real-time treasury, autonomous close, and compliance automation for CFO organizations.",
    ctaLabel: "Explore Finance OS",
    href: "/blog/ai-2026-autonomous-finance-operating-system",
    emoji: "💹",
    date: "2025-09-14",
  },
  {
    id: "real-time-rag-2026",
    title: "AI 2026: Real-Time Retrieval Architectures",
    description:
      "Design sub-200ms RAG with hybrid search, streaming generation, and eval-gated upgrades.",
    ctaLabel: "Read Article",
    href: "/blog/ai-2026-real-time-retrieval-architectures",
    emoji: "⚡",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "autonomous-ops-playbook-2026",
    title: "AI 2026: Autonomous Ops Playbook",
    description:
      "SLOs, incident response, eval-driven releases, and policy-as-code for AI operations.",
    ctaLabel: "Explore Playbook",
    href: "/content/ai-2026-autonomous-ops-playbook",
    emoji: "🛠️",
    date: "2025-09-15",
  },
  {
    id: "agent-safety-certification-2026",
    title: "AI 2026: Agent Safety Certification",
    description:
      "Structured certification to validate agent safety with scenario test suites and governance.",
    ctaLabel: "Read Framework",
    href: "/blog/ai-2026-agent-safety-certification",
    emoji: "🛡️",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "edge-agents-on-device-2026",
    title: "AI 2026: Edge Agents On-Device",
    description:
      "Private, low-latency agents with hybrid offload, secure updates, and telemetry.",
    ctaLabel: "Explore",
    href: "/blog/ai-2026-edge-agents-on-device",
    emoji: "📱",
    date: "2025-09-15",
  },
  {
    id: "autonomous-agents-red-team-2026",
    title: "AI 2026: Autonomous Agents Red-Team Scenarios",
    description:
      "Catalog of adversarial scenarios, pass criteria, and CI/CD integration to harden agents.",
    ctaLabel: "Read Guide",
    href: "/blog/ai-2026-autonomous-agents-red-team-scenarios",
    emoji: "🧨",
    highlight: true,
    date: "2025-09-15",
  },
  {
    id: "production-guardrails-playbook-2026",
    title: "AI 2026: Production Guardrails Playbook",
    description:
      "Operational guardrails, policy-as-code, and runtime protections for safe AI scale.",
    ctaLabel: "Explore Playbook",
    href: "/blog/ai-2026-production-guardrails-playbook",
    emoji: "🛡️",
    highlight: true,
    date: "2025-09-15",
  },
];

