import React from 'react';
import Link from 'next/link';
import { ChartBar, ExternalLink } from 'lucide-react';

const analyticsTools = [
  {
    name: 'Google Analytics',
    href: 'https://analytics.google.com/?ref=ziontech',
    desc: 'Free web traffic analytics with real-time data.',
    category: 'Analytics'
  },
  {
    name: 'Plausible',
    href: 'https://plausible.io/?ref=ziontech',
    desc: 'Privacy-focused web analytics with open-source core.',
    category: 'Analytics'
  },
  {
    name: 'Matomo',
    href: 'https://matomo.org/?ref=ziontech',
    desc: 'Self-hosted analytics with full data ownership.',
    category: 'Analytics'
  },
  {
    name: 'Heap',
    href: 'https://heap.com/pricing/start-free?ref=ziontech',
    desc: 'Free tier for behavioral analytics with deferrable data storage.',
    category: 'Analytics'
  },
  {
    name: 'Fathom',
    href: 'https://us.fathom.com/?ref=ziontech',
    desc: 'Simple, privacy-first analytics dashboard.',
    category: 'Analytics'
  },
  {
    name: 'Open Web Analytics',
    href: 'https://www.openwebanalytics.com/?ref=ziontech',
    desc: 'Open-source analytics with GDPR compliance tools.',
    category: 'Analytics'
  },
];

// Group by category
const grouped = analyticsTools.reduce((acc, tool) => {
  if (!acc[tool.category]) acc[tool.category] = [];
  acc[tool.category].push(tool);
  return acc;
}, {} as Record<string, typeof analyticsTools>);

export const metadata = {
  title: 'Free Analytics Tools | Zion Tech Group',
  description: 'Curated free web analytics platforms. Referral links support our open-source initiatives.',
};

export default function FreeAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-6 shadow-lg">
            <ChartBar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Free Analytics Tools</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Discover privacy-friendly analytics solutions. Referral links help sustain our open-source work.
          </p>
        </div>

        {/* Grouped Analytics Tools */}
        <div className="space-y-16">
          {Object.entries(grouped).map(([category, tools]) => (
            <section key={category}>
              <h2 className="text-2xl font-bold text-white mb-8">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-purple-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      {tool.desc}
                    </p>
                    <div className="mt-4 flex items-center text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit <ExternalLink className="ml-1 h-3 w-3" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 bg-slate-800/30 border border-slate-700 rounded-3xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Need Custom Analytics Solutions?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Schedule a free consultation to optimize your analytics stack.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Free Consultation
          </Link>
        </div>

        {/* Back to Support */}
        <div className="mt-12 text-center">
          <Link 
            href="/support"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            ← Back to Support Page
          </Link>
        </div>
      </div>
    </div>
  );
}
