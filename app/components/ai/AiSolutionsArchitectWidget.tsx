'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type Role = 'cto' | 'founder' | 'ops' | 'data' | 'security';
type Objective = 'revenue' | 'operations' | 'engineering' | 'compliance';
type Timeline = '30' | '60' | '90';

type Recommendation = {
  title: string;
  summary: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  supportingLinks: { label: string; href: string }[];
};

const timelineLabels: Record<Timeline, string> = {
  '30': '0-30 days',
  '60': '31-60 days',
  '90': '61-90 days',
};

function buildRecommendation(role: Role, objective: Objective, timeline: Timeline, regulated: boolean): Recommendation {
  if (regulated) {
    return {
      title: 'Compliance-Ready AI Delivery Pod',
      summary:
        'Pair secure infrastructure with policy-aware checks for high-trust rollouts in regulated environments. Ideal for healthcare, finance, legal, and public sector teams.',
      primaryCtaLabel: 'Plan a secure rollout',
      primaryCtaHref: '/ai-services/ai-regulated-industries',
      supportingLinks: [
        { label: 'AI Security & Responsible AI', href: '/ai-services/ai-security-responsible-ai' },
        { label: 'AI Governance & Trust', href: '/ai-services/ai-governance-trust' },
        { label: 'AI Strategy & Roadmap', href: '/ai-services/ai-strategy-roadmap' },
      ],
    };
  }

  if (objective === 'revenue') {
    return {
      title: 'Revenue Command Center',
      summary:
        'Unify lead qualification, outbound sequences, and handoffs into a measurable revenue command center that your sales and growth teams can launch quickly.',
      primaryCtaLabel: 'Launch revenue workflow',
      primaryCtaHref: '/zion-smart-crm-automation',
      supportingLinks: [
        { label: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring' },
        { label: 'Zion AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
        { label: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation' },
      ],
    };
  }

  if (objective === 'operations') {
    return {
      title: 'Autonomous Operations Desk',
      summary:
        'Automate document intake, meeting capture, ticket routing, and notifications so your operations teams can focus on the work that actually moves the business.',
      primaryCtaLabel: 'Automate operations',
      primaryCtaHref: '/zion-workflow-automation',
      supportingLinks: [
        { label: 'Zion AI Document Processor', href: '/zion-ai-document-processor' },
        { label: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
        { label: 'Zion AI Notification Hub', href: '/zion-ai-notification-hub' },
      ],
    };
  }

  if (objective === 'engineering') {
    return {
      title: 'Engineering Velocity Sprint',
      summary:
        'Use AI-assisted coding, code review, and release checks to accelerate delivery while keeping reliability high. Ship faster without skipping safety.',
      primaryCtaLabel: 'Boost engineering delivery',
      primaryCtaHref: '/zion-devops-automation',
      supportingLinks: [
        { label: 'Zion AI Code Assistant', href: '/zion-ai-code-assistant' },
        { label: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer' },
        { label: 'Zion AI API Tester', href: '/zion-ai-api-tester' },
      ],
    };
  }

  return {
    title: 'AI Strategy Fast Track',
    summary:
      'Clarify your first AI initiatives, align stakeholders, and build a practical execution roadmap that matches your risk profile and internal capabilities.',
    primaryCtaLabel: 'Design my AI roadmap',
    primaryCtaHref: '/ai-services/ai-strategy-roadmap',
    supportingLinks: [
      { label: 'Advanced AI Enterprise Intelligence Hub', href: '/ai-services/advanced-ai-enterprise-intelligence-hub' },
      { label: 'AI Integration & APIs', href: '/ai-services/ai-integration-apis' },
      { label: 'AI Copilot & Enterprise Assistants', href: '/ai-services/ai-copilot-enterprise/' },
    ],
  };
}

export default function AiSolutionsArchitectWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState<Role>('cto');
  const [objective, setObjective] = useState<Objective>('revenue');
  const [timeline, setTimeline] = useState<Timeline>('60');
  const [regulated, setRegulated] = useState(false);

  const recommendation = useMemo(
    () => buildRecommendation(role, objective, timeline, regulated),
    [role, objective, timeline, regulated],
  );

  const kickoffWindow =
    timeline === '30' ? '2-4 week pilot sprint' : timeline === '60' ? '4-8 week phased rollout' : '8-12 week rollout';

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-purple-400/50 bg-slate-950/90 px-4 py-2 text-xs font-medium text-purple-100 shadow-lg shadow-purple-900/40 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-purple-300 hover:bg-slate-900/90"
        aria-expanded={isOpen}
        aria-label="Open AI Solutions Architect"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-sm">
          ✨
        </span>
        <span className="hidden sm:inline">Design my AI rollout</span>
        <span className="inline sm:hidden">AI rollout</span>
      </button>

      {isOpen ? (
        <div className="w-[min(100vw-1.5rem,26rem)] overflow-hidden rounded-2xl border border-purple-500/40 bg-slate-950/95 text-slate-100 shadow-2xl shadow-purple-900/40 backdrop-blur-xl">
          <div className="border-b border-purple-500/30 bg-gradient-to-r from-purple-600/40 via-fuchsia-600/30 to-pink-600/30 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-50">AI Solutions Architect</p>
            <p className="mt-1 text-xs text-purple-50/90">
              Answer a few quick questions and get a tailored Zion AI rollout plan.
            </p>
          </div>

          <div className="max-h-[26rem] space-y-4 overflow-y-auto px-4 py-4 text-xs sm:text-[13px]">
            <div className="space-y-2">
              <label className="block">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                  Your role / seat at the table
                </span>
                <select
                  value={role}
                  onChange={(event) => setRole(event.target.value as Role)}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/80 px-2.5 py-1.5 text-xs text-slate-100 outline-none transition focus:border-purple-400"
                >
                  <option value="cto">CTO / VP Engineering</option>
                  <option value="founder">Founder / CEO</option>
                  <option value="ops">Head of Operations</option>
                  <option value="data">Head of Data / Analytics</option>
                  <option value="security">Security / Compliance Lead</option>
                </select>
              </label>

              <label className="block">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                  Primary objective
                </span>
                <select
                  value={objective}
                  onChange={(event) => setObjective(event.target.value as Objective)}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/80 px-2.5 py-1.5 text-xs text-slate-100 outline-none transition focus:border-purple-400"
                >
                  <option value="revenue">Increase revenue and conversion</option>
                  <option value="operations">Reduce manual operations load</option>
                  <option value="engineering">Improve engineering delivery speed</option>
                  <option value="compliance">Strengthen security and compliance</option>
                </select>
              </label>

              <label className="block">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                  Target launch window
                </span>
                <select
                  value={timeline}
                  onChange={(event) => setTimeline(event.target.value as Timeline)}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950/80 px-2.5 py-1.5 text-xs text-slate-100 outline-none transition focus:border-purple-400"
                >
                  <option value="30">{timelineLabels['30']}</option>
                  <option value="60">{timelineLabels['60']}</option>
                  <option value="90">{timelineLabels['90']}</option>
                </select>
              </label>

              <label className="mt-1 flex items-start gap-2 rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2">
                <input
                  type="checkbox"
                  checked={regulated}
                  onChange={(event) => setRegulated(event.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 rounded border-slate-500 bg-slate-900 text-purple-500 focus:ring-purple-400"
                />
                <span className="text-[11px] leading-5 text-slate-200">
                  This initiative has strict governance or regulatory requirements (e.g. HIPAA, SOC 2, EU AI Act).
                </span>
              </label>
            </div>

            <div className="space-y-2 rounded-xl border border-purple-500/40 bg-slate-950/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-purple-200">
                Recommended launch plan
              </p>
              <h3 className="text-sm font-semibold text-white">{recommendation.title}</h3>
              <p className="mt-1 text-xs leading-5 text-slate-200">{recommendation.summary}</p>
              <p className="mt-2 text-[11px] text-slate-300">
                Suggested kickoff window:{' '}
                <span className="font-medium text-purple-200">{kickoffWindow} based on your inputs.</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href={recommendation.primaryCtaHref}
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:from-purple-500 hover:to-pink-500"
                >
                  {recommendation.primaryCtaLabel}
                </Link>
                <Link
                  href="/contact#engagement"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-100 transition hover:border-purple-300 hover:text-white"
                >
                  Talk with a human architect
                </Link>
              </div>
            </div>

            <div className="space-y-2 rounded-xl border border-slate-700 bg-slate-950/80 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-300">
                Key Zion building blocks
              </p>
              <ul className="mt-1 space-y-1.5">
                {recommendation.supportingLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-200 underline-offset-2 hover:text-purple-300 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

