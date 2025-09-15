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
    id: "ai-2026-quantum-breakthrough",
    title: "AI 2026: Quantum Computing Breakthrough",
    description:
      "Revolutionary quantum computing breakthroughs that will transform AI and enterprise computing in 2026.",
    ctaLabel: "Read Revolution",
    href: "/blog/ai-2026-quantum-computing-breakthrough",
    emoji: "⚡",
    highlight: true,
    date: "2025-12-15",
  },
  {
    id: "ai-2026-enterprise-automation",
    title: "AI 2026: Enterprise Automation Revolution",
    description:
      "Complete guide to transforming enterprises with next-generation AI automation and autonomous operations.",
    ctaLabel: "Explore Guide",
    href: "/blog/ai-2026-enterprise-automation-revolution",
    emoji: "🤖",
    highlight: true,
    date: "2025-12-14",
  },
  {
    id: "ai-content-studio",
    title: "AI Content Studio v2",
    description:
      "Generate long-form articles, social posts, and marketing assets with workflow automation.",
    ctaLabel: "Explore Studio",
    href: "/ai-content-studio",
    emoji: "🧠",
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
];

