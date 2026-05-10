'use client';

import Link from 'next/link';
import { Search, Home, Mail, FileText, LayoutGrid } from 'lucide-react';

export const metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Page services and solutions from Zion Tech Group.',
  canonical: 'https://ziontechgroup.com/page',
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col bg-slate-950 px-6 py-16">
      <div className="mx-auto w-full max-w-2xl flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">Error 404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
          Sorry, we couldn't find the page you were looking for. It may have been moved, renamed, or no longer exists.
          Use the links below to get back on track or reach out if you need help.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-95 focus:outline-none"
          >
            <Home className="h-4 w-4" />
            Go back home
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-purple-400/50 hover:bg-slate-800/60 hover:text-white focus:outline-none"
          >
            <Mail className="h-4 w-4" />
            Contact support
          </a>
        </div>

        <div className="mt-16 w-full rounded-2xl border border-slate-700/70 bg-slate-900/50 p-6 text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Popular destinations
          </p>
          <p className="mt-1 text-slate-400 text-sm">
            Jump to the page you need.
          </p>
          <nav className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2" aria-label="Quick links">
            <a
              href="/solutions"
              className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/40 hover:text-white"
            >
              <LayoutGrid className="h-4 w-4 flex-shrink-0 text-purple-400" />
              Solutions by industry
            </a>
            <a
              href="/services"
              className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/40 hover:text-white"
            >
              <FileText className="h-4 w-4 flex-shrink-0 text-purple-400" />
              Services &amp; delivery
            </a>
            <a
              href="/pricing"
              className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/40 hover:text-white"
            >
              <Search className="h-4 w-4 flex-shrink-0 text-purple-400" />
              Pricing &amp; plans
            </a>
            <a
              href="/blog"
              className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-slate-950/70 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-purple-400/40 hover:text-white"
            >
              <FileText className="h-4 w-4 flex-shrink-0 text-purple-400" />
              Blog &amp; insights
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}