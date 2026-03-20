import { AI_LAB_TOOLS } from '../ai-lab/ai-lab-tools';

export type HomepageCatalogItem = {
  badge: string;
  title: string;
  description: string;
  href: string;
};

export type HomepageLiveNowItem = {
  href: string;
  badge: string;
  title: string;
  description: string;
};

const STATIC_CATALOG_ITEMS: HomepageCatalogItem[] = [
  {
    badge: 'AI services',
    title: 'Advanced AI Services',
    description: 'Enterprise-grade delivery for agents, RAG, multimodal, and AI governance.',
    href: '/ai-services',
  },
  {
    badge: 'Automation',
    title: 'Autonomous Improvement Engine',
    description: 'Continuous quality and app evolution pipelines with deployment-safe checks.',
    href: '/automation',
  },
  {
    badge: 'Deployment',
    title: 'App Evolution Cycles',
    description: 'Automated audits and implementation loops for fast, measurable improvements.',
    href: '/automation#app-improvement',
  },
];

export function getHomepageAICatalogItems(): HomepageCatalogItem[] {
  const liveLabItems = AI_LAB_TOOLS.filter((tool) => tool.status === 'live')
    .slice(0, 6)
    .map((tool) => ({
      badge: `${tool.category}`,
      title: tool.title,
      description: tool.shortDescription,
      href: tool.href,
    }));

  return [...liveLabItems, ...STATIC_CATALOG_ITEMS];
}

const LIVE_NOW_IDS = [
  'autonomous-ai-experience-studio',
  'autonomous-growth-loop-designer',
  'autonomous-backlog-prioritizer',
  'autonomous-funnel-orchestrator',
  'autonomous-incident-commander',
] as const;

export function getHomepageLiveNowItems(): HomepageLiveNowItem[] {
  const liveById = new Map(AI_LAB_TOOLS.filter((tool) => tool.status === 'live').map((tool) => [tool.id, tool]));
  return LIVE_NOW_IDS.map((id) => liveById.get(id))
    .filter((tool): tool is NonNullable<typeof tool> => Boolean(tool))
    .map((tool) => ({
      href: tool.href,
      badge: tool.badge ?? 'Live',
      title: tool.title,
      description: tool.shortDescription,
    }));
}

