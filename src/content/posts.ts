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
];

