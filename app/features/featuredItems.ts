import { AI_LAB_TOOLS } from '../ai-lab/ai-lab-tools';

export interface WhatsNewItem {
  id: string;
  title: string;
  description: string;
  href: string;
  tag: string;
}

const aiLabWhatsNew: WhatsNewItem[] = AI_LAB_TOOLS.map((tool) => ({
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
    id: 'autonomous-ai-experience-studio',
    title: 'Autonomous AI Experience Studio',
    description: 'Design in-browser AI products with live launch safety and impact scoring.',
    href: '/ai-lab/autonomous-ai-experience-studio',
    tag: 'AI Lab',
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

export const whatsNewItems: WhatsNewItem[] = [...aiLabWhatsNew, ...appWhatsNew];