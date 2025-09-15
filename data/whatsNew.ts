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
];

