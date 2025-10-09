import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  const mainPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/team`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${baseUrl}/case-studies`, priority: 0.6, changeFrequency: 'weekly' },
    { url: `${baseUrl}/enterprise`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/sitemap`, priority: 0.3, changeFrequency: 'monthly' },
  ];

  const servicePages = [
    { url: `${baseUrl}/ai-services`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/it-services`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/micro-saas`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/ai-marketing`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/ai-automation`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/ai-healthcare`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/ai-fintech`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/quantum-computing`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/autonomous-systems`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/business-intelligence`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/blockchain-web3`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/iot-edge-computing`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/cybersecurity`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/cloud-migration`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/it-consulting`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/marketing-tools`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/productivity`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/security`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/support`, priority: 0.6, changeFrequency: 'monthly' },
  ];

  const resourcePages = [
    { url: `${baseUrl}/blog`, priority: 0.7, changeFrequency: 'daily' },
    { url: `${baseUrl}/news`, priority: 0.6, changeFrequency: 'weekly' },
    { url: `${baseUrl}/docs`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/api-docs`, priority: 0.5, changeFrequency: 'monthly' },
    { url: `${baseUrl}/status`, priority: 0.4, changeFrequency: 'daily' },
    { url: `${baseUrl}/system-status`, priority: 0.4, changeFrequency: 'daily' },
  ];

  const guidePages = [
    { url: `${baseUrl}/guides/ai-2026-implementation-roadmap`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/guides/ai-2027-implementation-roadmap`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/guides/autonomous-business-processes-implementation-guide-2026`, priority: 0.8, changeFrequency: 'monthly' },
  ];

  const legalPages = [
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/gdpr`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/sla`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/compliance`, priority: 0.3, changeFrequency: 'yearly' },
    { url: `${baseUrl}/cookies`, priority: 0.3, changeFrequency: 'yearly' },
  ];

  const allPages = [
    ...mainPages,
    ...servicePages,
    ...resourcePages,
    ...guidePages,
    ...legalPages,
  ];

  return allPages.map(page => ({
    url: page.url,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency as any,
    priority: page.priority,
  }));
}
