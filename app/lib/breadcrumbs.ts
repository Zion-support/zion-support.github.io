const SEGMENT_LABELS: Record<string, string> = {
  ai: 'AI Lab',
  kb: 'Knowledge Base',
  sla: 'SLA',
  faq: 'FAQ',
  'free-tools': 'Free Tools',
  'agents-monitoring': 'Agent Monitoring',
  'solutions-configurator': 'Solutions Configurator',
  'ai-readiness-assessment': 'AI Readiness Assessment',
  'url-audit-assistant': 'URL Audit Assistant',
  'it-vendors': 'IT Vendors',
  'business-customers': 'Business Customers',
};

export function buildBreadcrumbItems(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return [];

  const items = [{ label: 'Home', href: '/' }];
  segments.forEach((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}/`;
    const isLast = index === segments.length - 1;
    items.push({
      label: labelForSegment(segment),
      href: isLast ? undefined : href,
    });
  });
  return items;
}

function labelForSegment(segment: string): string {
  const known = SEGMENT_LABELS[segment.toLowerCase()];
  if (known) return known;
  const cleaned = segment.replace(/-[a-f0-9]{6,}$/i, '');
  return cleaned
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
