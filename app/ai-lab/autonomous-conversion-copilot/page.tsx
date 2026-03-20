'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type FunnelSignal = {
  id: string;
  label: string;
  baseline: number;
  liftPotential: number;
  effort: number;
  confidence: number;
};

const SIGNALS: FunnelSignal[] = [
  { id: 'cta-clarity', label: 'CTA clarity upgrade', baseline: 62, liftPotential: 24, effort: 28, confidence: 81 },
  { id: 'proof-density', label: 'Proof density (logos/case snippets)', baseline: 49, liftPotential: 31, effort: 34, confidence: 73 },
  { id: 'form-friction', label: 'Form friction reduction', baseline: 56, liftPotential: 26, effort: 44, confidence: 76 },
  { id: 'speed-ux', label: 'Mobile speed and UX polish', baseline: 58, liftPotential: 21, effort: 52, confidence: 69 },
];

const clamp = (value: number) => Math.max(0, Math.min(100, value));

export default function AutonomousConversionCopilotPage() {
  const [impactWeight, setImpactWeight] = useState(45);
  const [confidenceWeight, setConfidenceWeight] = useState(30);
  const [effortWeight, setEffortWeight] = useState(25);

  const prioritized = useMemo(() => {
    const total = impactWeight + confidenceWeight + effortWeight;
    const impactFactor = impactWeight / total;
    const confidenceFactor = confidenceWeight / total;
    const effortFactor = effortWeight / total;

    return SIGNALS
      .map((signal) => {
        const projectedLift = clamp(signal.baseline + signal.liftPotential);
        const score =
          projectedLift * impactFactor +
          signal.confidence * confidenceFactor +
          (100 - signal.effort) * effortFactor;

        return { ...signal, projectedLift, score: Math.round(score) };
      })
      .sort((a, b) => b.score - a.score);
  }, [impactWeight, confidenceWeight, effortWeight]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <header className="mb-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-pink-300">
            Growth Intelligence · Autonomous AI Lab
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            Autonomous Conversion Copilot
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Evaluate conversion opportunities, model projected lift, and rank the safest high-impact experiments before rollout.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-200">Scoring weights</p>
            <Slider label="Impact potential" value={impactWeight} onChange={setImpactWeight} color="text-pink-300" />
            <Slider label="Execution confidence" value={confidenceWeight} onChange={setConfidenceWeight} color="text-cyan-300" />
            <Slider label="Low implementation effort" value={effortWeight} onChange={setEffortWeight} color="text-amber-300" />
          </section>

          <section className="rounded-2xl border border-pink-500/30 bg-pink-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-pink-100">Recommended next move</p>
            <p className="mt-2 text-sm text-slate-100">
              Start with <strong>{prioritized[0]?.label}</strong> to maximize near-term lift with manageable execution risk.
            </p>
            <p className="mt-3 text-xs text-slate-300">
              Pair with the Autonomous Backlog Prioritizer to merge funnel wins into the global implementation queue.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/ai-lab/autonomous-backlog-prioritizer"
                className="inline-flex items-center rounded-full border border-pink-400/60 bg-pink-500/20 px-3 py-1.5 text-xs font-semibold text-pink-100"
              >
                Open backlog prioritizer
              </Link>
              <Link
                href="/contact#engagement"
                className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-100"
              >
                Launch conversion sprint
              </Link>
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">Prioritized conversion queue</p>
          <div className="mt-4 space-y-3">
            {prioritized.map((signal, index) => (
              <article key={signal.id} className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-semibold text-slate-100">
                    #{index + 1} {signal.label}
                  </p>
                  <p className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                    Score {signal.score}
                  </p>
                </div>
                <p className="mt-2 text-xs text-slate-300">
                  Baseline {signal.baseline} · Lift potential {signal.liftPotential} · Projected {signal.projectedLift} · Effort {signal.effort} · Confidence {signal.confidence}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function Slider({
  label,
  value,
  onChange,
  color,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  color: string;
}) {
  return (
    <label className="mt-4 block">
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className={color}>{label}</span>
        <span className="font-mono text-slate-300">{value}</span>
      </div>
      <input
        type="range"
        min={10}
        max={70}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700"
      />
    </label>
  );
}
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Autonomous Conversion Copilot - Zion AI Lab',
  description:
    'Prioritize high-confidence conversion upgrades across CTA strategy, social proof, onboarding, and pricing presentation.',
};

const conversionIdeas = [
  {
    surface: 'Homepage hero CTA',
    action: 'Add context-aware CTA variants by visitor intent segment.',
    impact: 'High',
    confidence: 88,
    effort: 'Medium',
  },
  {
    surface: 'Product catalog modules',
    action: 'Inject proof chips (live status, performance metrics, readiness badges).',
    impact: 'High',
    confidence: 84,
    effort: 'Low',
  },
  {
    surface: 'AI Lab tool pages',
    action: 'Add guided next-action panels linking to strategy and contact routes.',
    impact: 'Medium',
    confidence: 80,
    effort: 'Low',
  },
  {
    surface: 'Pricing and bundles',
    action: 'Show plan-fit recommendations by team size and deployment urgency.',
    impact: 'High',
    confidence: 76,
    effort: 'Medium',
  },
];

export default function AutonomousConversionCopilotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <header className="mb-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-300">
            Conversion Intelligence · Autonomous AI Lab
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            Autonomous Conversion Copilot
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Simulate which conversion improvements to ship first. This in-browser planner scores
            upgrade ideas by estimated impact, execution effort, and confidence so teams can move
            faster without guessing.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {conversionIdeas.map((idea) => (
            <article
              key={idea.surface}
              className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5 shadow-lg shadow-slate-900/60"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-200">{idea.surface}</p>
              <p className="mt-2 text-sm text-slate-100">{idea.action}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2 py-1 text-emerald-200">
                  Impact: {idea.impact}
                </span>
                <span className="rounded-full border border-sky-400/50 bg-sky-500/10 px-2 py-1 text-sky-200">
                  Confidence: {idea.confidence}%
                </span>
                <span className="rounded-full border border-violet-400/50 bg-violet-500/10 px-2 py-1 text-violet-200">
                  Effort: {idea.effort}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-fuchsia-500/30 bg-fuchsia-500/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-fuchsia-200">
            Suggested autonomous sequence
          </p>
          <p className="mt-2 text-xs text-slate-200">
            Start with low-effort, high-impact ideas, then validate with guarded deployment checks
            before promoting changes site-wide.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/ai-lab/autonomous-deploy-optimizer"
              className="inline-flex items-center rounded-full border border-fuchsia-400/60 bg-fuchsia-500/20 px-3 py-1.5 text-xs font-semibold text-fuchsia-100"
            >
              Pair with deploy optimizer
            </Link>
            <Link
              href="/ai-lab"
              className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-100"
            >
              Back to AI Lab
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
