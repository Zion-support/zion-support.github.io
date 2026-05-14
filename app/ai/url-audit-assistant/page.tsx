'use client';

import React, { useState } from 'react';
import { AILabToolLayout } from '../../components/ai-lab/AILabToolLayout';

type AuditCategory = 'experience' | 'performance' | 'clarity' | 'conversion';

type AuditInsight = {
  category: AuditCategory;
  label: string;
  severity: 'info' | 'tip' | 'warning';
  message: string;
};

type AuditSummary = {
  domain: string | null;
  isZionSite: boolean;
  insights: AuditInsight[];
};

function safeParseDomain(raw: string): string | null {
  try {
    const value = raw.trim();
    if (!value) return null;
    const hasProtocol = /^https?:\/\//i.test(value);
    const url = new URL(hasProtocol ? value : `https://${value}`);
    return url.hostname;
  } catch {
    return null;
  }
}

function computeInsights(urlInput: string): AuditSummary | null {
  const domain = safeParseDomain(urlInput);
  if (!domain) return null;

  const isZionSite =
    domain === 'ziontechgroup.com' ||
    domain.endsWith('.ziontechgroup.com') ||
    domain === 'www.ziontechgroup.com';

  const insights: AuditInsight[] = [];

  insights.push({
    category: 'experience',
    label: 'First impression',
    severity: 'info',
    message:
      'Ensure the hero section clearly explains who you serve, what problem you solve, and the primary next step for visitors.',
  });

  insights.push({
    category: 'performance',
    label: 'Speed & responsiveness',
    severity: 'tip',
    message:
      'Audit Core Web Vitals and image sizes. Consider lazy-loading non-critical content and deferring heavy scripts.',
  });

  insights.push({
    category: 'clarity',
    label: 'Offer clarity',
    severity: 'tip',
    message:
      'Check that product names, plans, and outcomes are easy to understand without prior context or internal jargon.',
  });

  insights.push({
    category: 'conversion',
    label: 'Conversion paths',
    severity: 'warning',
    message:
      'Map the top 1–2 conversion paths (e.g. book a call, start a trial) and ensure they are visible above the fold and repeated contextually.',
  });

  if (!isZionSite) {
    insights.push({
      category: 'experience',
      label: 'Zion deployment fit',
      severity: 'info',
      message:
        'This domain is not part of ziontechgroup.com. In a production engagement, we would connect this site to Zion’s autonomous agents for live audits and continuous improvement.',
    });
  } else {
    insights.push({
      category: 'experience',
      label: 'Live Zion improvements',
      severity: 'info',
      message:
        'This site is already wired into Zion’s autonomous agents. Use the AI Site Evolution Advisor to see recent improvements across UX, performance, SEO, and navigation.',
    });
  }

  return { domain, isZionSite, insights };
}

export default function AIURLAuditAssistantPage() {
  const [urlInput, setUrlInput] = useState('');
  const [submittedUrl, setSubmittedUrl] = useState('');
  const [summary, setSummary] = useState<AuditSummary | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextSummary = computeInsights(urlInput);
    setSubmittedUrl(urlInput.trim());
    setSummary(nextSummary);
  };

  const domainLabel = summary?.domain ?? 'your site';

  return (
    <div className="bg-slate-950/90">
      <AILabToolLayout
        title="AI URL Audit Assistant"
        subtitle="Paste a URL from your site or product. Get an AI-inspired checklist of improvements Zion would prioritize across UX, performance, messaging, and conversion flows."
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 border-b border-slate-800/80 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6"
          >
            <div>
              <label
                htmlFor="url"
                className="block text-xs font-semibold uppercase tracking-wide text-slate-200"
              >
                URL to audit
              </label>
              <p className="mt-1 text-[11px] text-slate-400">
                You can paste a full URL or just a domain (e.g. ziontechgroup.com). The assistant
                does not fetch or store page content — it generates a deterministic checklist in your
                browser.
              </p>
              <input
                id="url"
                type="url"
                value={urlInput}
                onChange={(event) => setUrlInput(event.target.value)}
                placeholder="https://ziontechgroup.com or yoursite.com"
                className="mt-2 w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none ring-sky-500/60 focus:border-sky-500 focus:ring"
              />
              <p className="mt-1 text-[10px] text-slate-500">
                No network requests are made to the URL itself from this page. For live audits, Zion’s
                backend agents crawl pages from secure infrastructure.
              </p>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full border border-emerald-500/70 bg-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-50 shadow-lg shadow-emerald-900/40 hover:bg-emerald-500/30"
             data-cta-event="cta_generate_checklist" data-cta-label="page">
              Generate checklist
            </button>

            {submittedUrl && !summary && (
              <p className="text-[11px] text-rose-300">
                That doesn&apos;t look like a valid URL or domain yet. Try including at least a
                domain like <span className="font-mono">example.com</span>.
              </p>
            )}

            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 text-[11px] text-slate-300">
              <p className="font-semibold text-slate-100">How this differs from a full AI crawl</p>
              <p className="mt-2">
                This assistant gives you a deterministic, in-browser preview of the kinds of
                recommendations Zion&apos;s live agents would surface. In production, those agents run
                Lighthouse-style checks, accessibility audits, and navigation analysis against real
                HTML and telemetry.
              </p>
            </div>
          </form>

          <div className="space-y-6">
            {!summary ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 px-6 py-10 text-center text-sm text-slate-400">
                <p className="max-w-md">
                  Paste a URL on the left to see a structured, AI-inspired checklist of opportunities.
                  You can start with{' '}
                  <span className="font-mono text-slate-200">https://ziontechgroup.com</span> to get a
                  sense for how Zion audits its own site.
                </p>
              </div>
            ) : (
              <>
                <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 text-sm text-slate-100">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                    Snapshot
                  </p>
                  <p className="mt-2 text-[11px] text-slate-300">
                    Checklist for <span className="font-mono text-slate-100">{summary.domain}</span>{' '}
                    grouped by the levers Zion typically optimizes first.
                  </p>
                  <p className="mt-2 text-[11px] text-slate-400">
                    This is a static recommendation pattern — it does not look at your page content or
                    traffic data directly.
                  </p>
                </section>

                <section className="grid gap-4 text-xs sm:grid-cols-2">
                  {summary.insights.map((insight, index) => {
                    const badgeClasses =
                      insight.severity === 'warning'
                        ? 'border-amber-500/60 bg-amber-500/10 text-amber-100'
                        : insight.severity === 'tip'
                        ? 'border-sky-500/60 bg-sky-500/10 text-sky-100'
                        : 'border-slate-500/60 bg-slate-500/10 text-slate-100';

                    const label =
                      insight.category === 'experience'
                        ? 'Experience'
                        : insight.category === 'performance'
                        ? 'Performance'
                        : insight.category === 'clarity'
                        ? 'Clarity'
                        : 'Conversion';

                    return (
                      <div
                        key={`${insight.label}-${index}`}
                        className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
                      >
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-200">
                            {label}
                          </p>
                          <span
                            className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${badgeClasses}`}
                          >
                            {insight.severity === 'warning'
                              ? 'High leverage'
                              : insight.severity === 'tip'
                              ? 'Tactical tip'
                              : 'Context'}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-slate-50">{insight.label}</p>
                        <p className="mt-1 text-[11px] text-slate-300">{insight.message}</p>
                      </div>
                    );
                  })}
                </section>

                <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-5 text-[11px] text-slate-300">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                    Next steps with Zion
                  </p>
                  <p className="mt-2">
                    For {domainLabel}, the next step is typically a focused pilot where Zion&apos;s
                    autonomous agents run full audits against live traffic and real HTML, then propose
                    safe, incremental changes that can be auto-deployed once CI is green.
                  </p>
                  <p className="mt-2">
                    You can combine this with the AI Site Evolution Advisor and AI Experiments hub to
                    see how the platform keeps experiences improving over time.
                  </p>
                </section>
              </>
            )}
          </div>
        </div>
      </AILabToolLayout>
    </div>
  );
}

