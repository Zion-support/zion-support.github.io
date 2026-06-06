export interface NavigationLink {
  name: string;
  href: string;
}

export const PRIMARY_NAV_LINKS: NavigationLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: '⚡ AI Agents', href: '/dashboard' },
  { name: 'Agent Monitoring', href: '/agents-monitoring' },
  { name: 'Contact', href: '/contact' },
];

export const SOLUTION_LINKS: NavigationLink[] = [
  { name: 'AI Solutions', href: '/services' },
  { name: 'Cloud Migration', href: '/services' },
  { name: 'Cybersecurity', href: '/services' },
  { name: 'Data Analytics', href: '/services' },
  { name: 'IT Services', href: '/services' },
  { name: 'Automation', href: '/services' },
];

export const RESOURCE_LINKS: NavigationLink[] = [
  { name: 'AI Agent Dashboard', href: '/dashboard' },
  { name: 'Agent Monitoring', href: '/agents-monitoring' },
  { name: 'About Us', href: '/about' },
  { name: 'Partners', href: '/partners' },
];

export const FEATURED_AI_SERVICE_LINKS: NavigationLink[] = [
  { name: 'AI Fraud Detection', href: '/services' },
  { name: 'AI Document Understanding', href: '/services' },
  { name: 'AI Governance', href: '/services' },
  { name: 'AI Computer Vision', href: '/services' },
  { name: 'AI Conversational Analytics', href: '/services' },
  { name: 'Speech Recognition', href: '/services' },
  { name: 'Data Observability', href: '/services' },
  { name: 'Test Automation', href: '/services' },
];
