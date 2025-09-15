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
];

