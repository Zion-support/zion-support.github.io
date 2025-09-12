export const blogPosts = [
    {
        slug: 'ai-support-24-7',
        title: 'How AI-Powered 24/7 IT Support Transforms SLAs',
        excerpt: 'Learn how always-on, AI-augmented support can reduce MTTR and elevate customer satisfaction.',
        content: 'Around-the-clock IT support used to require follow-the-sun staffing. With modern AI assistants and automation, teams can triage incidents, auto-remediate common issues, and escalate with rich context... ',
        publishedAt: '2025-09-10',
        tags: ['AI', 'Support', 'SLA']
    },
    {
        slug: 'green-it-roadmap',
        title: 'A Practical Roadmap to Green IT for SMEs',
        excerpt: 'Cut costs and carbon with quick wins across infra, devices, and operations.',
        content: 'Sustainability initiatives do not have to be expensive or slow. Start with measuring your baseline, right-size compute, adopt power-aware policies, and choose efficient frameworks... ',
        publishedAt: '2025-09-08',
        tags: ['Sustainability', 'Green IT']
    },
    {
        slug: 'micro-saas-playbook',
        title: 'The 30-Day Micro‑SaaS Launch Playbook',
        excerpt: 'From idea validation to first revenue: a focused execution checklist.',
        content: 'Launching a Micro‑SaaS does not require a large team. Validate the problem, define success metrics, prototype the core workflow, and ship a paid MVP with feedback loops... ',
        publishedAt: '2025-09-05',
        tags: ['MicroSaaS', 'Product']
    }
];
export function getLatestPosts(limit = 3) {
    return [...blogPosts]
        .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
        .slice(0, limit);
}
