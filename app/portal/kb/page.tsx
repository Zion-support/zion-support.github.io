// app/portal/kb/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Knowledge Base',
  description:
    'Documentation, guides, how-tos, and technical resources for Zion Tech Group solutions.',
};

const categories = [
  {
    name: 'Getting Started',
    emoji: '\u{1F680}',
    articles: [
      {
        title: 'Platform Overview',
        desc: 'Introduction to the Zion Tech ecosystem and your dashboard.',
        updated: '2 days ago',
      },
      {
        title: 'Setting Up Your Account',
        desc: 'Configure integrations, invite team members, and set permissions.',
        updated: '1 week ago',
      },
      {
        title: 'Your First AI Workflow',
        desc: 'Step-by-step guide to building and deploying your first workflow.',
        updated: '3 days ago',
      },
    ],
  },
  {
    name: 'API & Integration',
    emoji: '\u{1F4D6}',
    articles: [
      {
        title: 'API Reference',
        desc: 'Complete API documentation with endpoints, auth, and examples.',
        updated: '5 days ago',
      },
      {
        title: 'Webhook Setup',
        desc: 'Configure webhooks for real-time event notifications.',
        updated: '2 weeks ago',
      },
      {
        title: 'Salesforce Integration',
        desc: 'Connect your Salesforce CRM with Zion Tech services.',
        updated: '1 month ago',
      },
    ],
  },
  {
    name: 'Best Practices',
    emoji: '\u{2705}',
    articles: [
      {
        title: 'Security Hardening',
        desc: 'Recommended security configurations and access controls.',
        updated: '1 week ago',
      },
      {
        title: 'Cost Optimization',
        desc: 'Strategies to optimize your usage and reduce costs.',
        updated: '2 weeks ago',
      },
      {
        title: 'Performance Tuning',
        desc: 'Optimize workflow performance and reduce latency.',
        updated: '3 weeks ago',
      },
    ],
  },
  {
    name: 'Troubleshooting',
    emoji: '\u{1F527}',
    articles: [
      {
        title: 'Common Error Codes',
        desc: 'Diagnose and resolve frequently encountered API and workflow errors.',
        updated: '4 days ago',
      },
      {
        title: 'Log Analysis Guide',
        desc: 'How to read and interpret system and workflow logs.',
        updated: '1 week ago',
      },
      {
        title: 'Escalation Paths',
        desc: 'When and how to escalate issues to our support engineers.',
        updated: '2 weeks ago',
      },
    ],
  },
  {
    name: 'Release Notes',
    emoji: '\u{1F4CB}',
    articles: [
      {
        title: 'v2.4.0 — May 2026',
        desc: 'New dashboard analytics, improved error handling, and performance improvements.',
        updated: '1 week ago',
      },
      {
        title: 'v2.3.0 — April 2026',
        desc: 'Webhook V2, enhanced API rate limits, and new integration templates.',
        updated: '1 month ago',
      },
      {
        title: 'v2.2.0 — March 2026',
        desc: 'Multi-region deployments, audit logs, and role-based access controls.',
        updated: '2 months ago',
      },
    ],
  },
];

export default function KnowledgeBasePage() {
  const totalArticles = categories.reduce((sum, cat) => sum + cat.articles.length, 0);

  return (
    <div className="container-page py-16">
      <Link
        href="/portal/"
        className="text-purple-400 hover:text-purple-300 text-sm mb-6 inline-block"
      >
        &larr; Back to Client Portal
      </Link>

      {/* Header */}
      <div className="glass-card max-w-4xl mb-8">
        <div className="text-5xl mb-4">&#x1F4DA;</div>
        <h1 className="text-4xl font-bold text-white mb-4">Knowledge Base</h1>
        <p className="text-slate-400 mb-6">
          Documentation, guides, how-tos, and technical resources to get the most from
          your Zion Tech solutions.
        </p>

        {/* KB Stats Bar */}
        <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-slate-700/60">
          <div className="bg-slate-800/50 rounded-lg px-4 py-3 border border-slate-700">
            <p className="text-xs text-slate-500 uppercase tracking-wider">Categories</p>
            <p className="text-xl font-bold text-white">{categories.length}</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg px-4 py-3 border border-slate-700">
            <p className="text-xs text-slate-500 uppercase tracking-wider">Articles</p>
            <p className="text-xl font-bold text-white">{totalArticles}</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg px-4 py-3 border border-slate-700">
            <p className="text-xs text-slate-500 uppercase tracking-wider">Updated</p>
            <p className="text-xl font-bold text-green-400">2 days ago</p>
          </div>
        </div>

        {/* Search Placeholder */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span className="text-slate-500 text-lg">&#x1F50D;</span>
          </div>
          <input
            type="text"
            placeholder="Search the knowledge base..."
            className="w-full bg-slate-800/70 border border-slate-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition"
            readOnly
          />
        </div>

        {/* Category Accordion / Cards */}
        <div className="space-y-6">
          {categories.map((cat, i) => (
            <div key={i} className="bg-slate-800/30 rounded-xl border border-slate-700 overflow-hidden">
              <div className="flex items-center gap-3 p-5 border-b border-slate-700/60">
                <span className="text-2xl">{cat.emoji}</span>
                <h2 className="text-lg font-semibold text-white">{cat.name}</h2>
                <span className="ml-auto text-xs text-slate-500">
                  {cat.articles.length} articles
                </span>
              </div>
              <div className="divide-y divide-slate-700/40">
                {cat.articles.map((art, j) => (
                  <div
                    key={j}
                    className="px-5 py-4 hover:bg-slate-700/20 transition cursor-pointer"
                  >
                    <h3 className="text-white font-medium mb-0.5">{art.title}</h3>
                    <p className="text-slate-400 text-sm">{art.desc}</p>
                    <p className="text-xs text-slate-600 mt-1">
                      Updated {art.updated}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto p-4 bg-blue-950/30 rounded-xl border border-blue-500/20">
        <p className="text-blue-300 text-sm">
          Can&apos;t find what you need?{' '}
          <a href="/contact/" className="underline hover:text-blue-200">
            Submit a support ticket
          </a>{' '}
          or{' '}
          <a href="/contact/" className="underline hover:text-blue-200">
            ask our team
          </a>{' '}
          directly.
        </p>
      </div>
    </div>
  );
}
