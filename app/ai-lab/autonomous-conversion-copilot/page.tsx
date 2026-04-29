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
              <a
                href="/ai-lab/autonomous-backlog-prioritizer"
                className="inline-flex items-center rounded-full border border-pink-400/60 bg-pink-500/20 px-3 py-1.5 text-xs font-semibold text-pink-100"
              >
                Open backlog prioritizer
              </a>
              <a
                href="/contact#engagement"
                className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-100"
               data-cta-event="cta_contact" data-cta-label="page">
                Launch conversion sprint
              </a>
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
