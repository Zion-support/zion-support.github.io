import { AI_LAB_TOOLS } from '../ai-lab/ai-lab-tools';

export interface WhatsNewItem {
  id: string;
  title: string;
  description: string;
  href: string;
  tag: string;
}

const aiLabWhatsNew: WhatsNewItem[] = AI_LAB_TOOLS.filter((tool) => tool.status === 'live').map((tool) => ({
  id: tool.id,
  title: tool.title,
  description: tool.shortDescription,
  href: tool.href,
  tag:
    tool.badge ??
    (tool.status === 'live' ? 'AI Lab' : tool.status === 'experimental' ? 'Experimental' : 'Planned'),
}));

const appWhatsNew: WhatsNewItem[] = [
  {
    id: 'meeting-cost-calculator',
    title: 'Meeting Cost Calculator',
    description: 'Understand the true cost of meetings and see potential savings with AI improvements.',
    href: '/tools/meeting-cost-calculator',
    tag: 'New tool',
  },
  {
    id: 'roi-calculator',
    title: 'AI ROI Calculator',
    description: 'Calculate the return on investment for implementing AI tools in your organization.',
    href: '/tools/roi-calculator',
    tag: 'New tool',
  },
  {
    id: 'zion-ai-chatbot-playground',
    title: 'Zion AI Chatbot Playground',
    description: 'In-browser conversational prototype and UX testing playground.',
    href: '/zion-ai-chatbot-playground',
    tag: 'New app',
  },
  {
    id: 'zion-ai-code-sandbox',
    title: 'Zion AI Code Sandbox',
    description: 'Interactive code analysis and prompt-to-code experimentation space.',
    href: '/zion-ai-code-sandbox',
    tag: 'New app',
  },
  {
    id: 'ai-system-health-monitor',
    title: 'AI System Health Monitor',
    description: 'Real-time system monitoring with autonomous optimization insights.',
    href: '/ai-system-health-monitor',
    tag: 'New feature',
  },
  {
    id: 'smart-analytics-dashboard',
    title: 'Smart Analytics Dashboard',
    description: 'Predictive analytics and business intelligence command center.',
    href: '/smart-analytics',
    tag: 'Analytics',
  },
  {
    id: 'ai-live-ux-auto-fix',
    title: 'AI Live Site UX Auto-Fix Agent',
    description: 'Autonomous UX issue discovery and safe implementation pipeline.',
    href: '/automation',
    tag: 'Automation',
  },
];

const dedupeById = (items: WhatsNewItem[]) => {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
};

export const whatsNewItems: WhatsNewItem[] = dedupeById([...aiLabWhatsNew, ...appWhatsNew]);