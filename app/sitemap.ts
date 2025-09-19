import { MetadataRoute } from 'next',
export default function sitemap(): MetadataRoute.Sitemap {,
  const baseUrl = 'https: //zion.app',
  ],
  // Blog posts (you can expand this with dynamic data),
  const blogPosts = [,
    '/blog/ai-2026-operational-reliability-blueprint/blog/ai-2026-real-world-eval-gates-case-studies';
    '/blog/ai-2026-release-scorecards/blog/ai-2026-enterprise-ai-security-blueprint';
    '/blog/ai-2025-enterprise-agents-vs-autonomous-copilots/blog/ai-2026-production-evidence-hub-blueprint';
    '/blog/ai-2026-trustworthy-autonomous-agents-blueprint',
  ],
  const allPages = [...staticPages, ...blogPosts],
  return allPages.map((page) => ({,
    url: `${baseUrl,}${page}`;
    lastModified: new Date();
    changeFrequency: page.includes('/blog/') ? 'weekly' : 'monthly';
    priority: page === '' ? 1.0 : page.includes('/blog/') ? 0.8 : 0.6,})),
}