'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Sparkles, TrendingUp, Code, BarChart3, Shield } from 'lucide-react';

const trendingTools = [
  {
    slug: 'productivity-score-calculator',
    name: 'AI Productivity Score Calculator',
    icon: BarChart3,
    category: 'Business',
    description: 'Measure your team\'s AI productivity potential and get improvement recommendations.',
    href: '/tools/productivity-score-calculator',
  },
  {
    slug: 'roi-calculator',
    name: 'ROI Calculator',
    icon: TrendingUp,
    category: 'Business',
    description: 'Calculate the return on investment for implementing AI tools in your organization.',
    href: '/tools/roi-calculator',
  },
  {
    slug: 'password-generator',
    name: 'Password Generator',
    icon: Shield,
    category: 'Security',
    description: 'Generate strong, customizable passwords instantly with entropy analysis.',
    href: '/tools/password-generator',
  },
  {
    slug: 'qr-code-generator',
    name: 'QR Code Generator',
    icon: Zap,
    category: 'Developer',
    description: 'Generate QR codes for text, URLs, WiFi, or contact cards instantly.',
    href: '/tools/qr-code-generator',
  },
  {
    slug: 'json-to-typescript-converter',
    name: 'JSON to TypeScript Converter',
    icon: Code,
    category: 'Developer',
    description: 'Convert JSON to TypeScript interfaces instantly with AI type inference.',
    href: '/tools/json-to-typescript-converter',
  },
  {
    slug: 'meeting-cost-calculator',
    name: 'Meeting Cost Calculator',
    icon: Sparkles,
    category: 'Business',
    description: 'See the real cost of meetings and potential savings with AI improvements.',
    href: '/tools/meeting-cost-calculator',
  },
];

export default function TrendingTools() {
  return (
    <section className="w-full py-12 sm:py-16">
      <div className="container-page">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-300">
              Free Tools
            </p>
            <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              Trending AI Tools & Calculators
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Explore our most popular free tools — calculators, converters, generators, and analyzers.
            </p>
          </div>
          <Link
            href="/tools"
            className="hidden items-center gap-2 rounded-lg border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 transition hover:bg-purple-500/20 sm:flex"
          >
            View All Tools
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trendingTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={tool.href}
                className="group rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-400/50 hover:bg-slate-900/70 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                    <Icon className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-400">
                    {tool.category}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-white group-hover:text-purple-200 transition-colors">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2">{tool.description}</p>
              </Link>
            );
          })}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-lg border border-purple-400/40 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-200 transition hover:bg-purple-500/20"
          >
            View All Tools
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
