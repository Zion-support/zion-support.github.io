'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type RetentionLever = {
  id: string;
  name: string;
  baselineImpact: number;
  confidence: number;
  implementationEffort: number;
};

const LEVERS: RetentionLever[] = [
  { id: 'onboarding', name: 'Onboarding milestone nudges', baselineImpact: 26, confidence: 82, implementationEffort: 34 },
  { id: 'activation', name: 'Activation checklist assistant', baselineImpact: 31, confidence: 76, implementationEffort: 41 },
  { id: 'expansion', name: 'Expansion signal scoring', baselineImpact: 24, confidence: 71, implementationEffort: 49 },
  { id: 'save-playbook', name: 'At-risk rescue playbook', baselineImpact: 33, confidence: 68, implementationEffort: 56 },
];

export default function AutonomousRetentionPlaybookPage() {
  const [impactWeight, setImpactWeight] = useState(45);
  const [confidenceWeight, setConfidenceWeight] = useState(35);
  const [effortWeight, setEffortWeight] = useState(20);

  const prioritizedLevers = useMemo(() => {
    const total = impactWeight + confidenceWeight + effortWeight;
    const impact = impactWeight / total;
    const confidence = confidenceWeight / total;
    const effort = effortWeight / total;

    return LEVERS.map((lever) => {
      const score = Math.round(
        lever.baselineImpact * impact + lever.confidence * confidence + (100 - lever.implementationEffort) * effort,
      );
      return { ...lever, score };
    }).sort((a, b) => b.score - a.score);
  }, [impactWeight, confidenceWeight, effortWeight]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16">
        <header className="mb-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
            Retention Intelligence · Autonomous AI Lab
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            Autonomous Retention Playbook
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-300">
            Prioritize retention and expansion actions with weighted scoring across projected impact, confidence, and implementation effort.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">Scoring weights</p>
            <Slider label="Projected impact" value={impactWeight} onChange={setImpactWeight} />
            <Slider label="Execution confidence" value={confidenceWeight} onChange={setConfidenceWeight} />
            <Slider label="Lower implementation effort" value={effortWeight} onChange={setEffortWeight} />
          </section>

          <section className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-100">Top recommendation</p>
            <p className="mt-2 text-sm text-slate-100">
              Start with <strong>{prioritizedLevers[0]?.name}</strong> to maximize near-term retention lift with practical execution risk.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/ai-lab/autonomous-conversion-copilot"
                className="inline-flex items-center rounded-full border border-cyan-400/60 bg-cyan-500/20 px-3 py-1.5 text-xs font-semibold text-cyan-100"
              >
                Open conversion copilot
              </Link>
              <Link
                href="/contact#engagement"
                className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-100"
               data-cta-event="cta_contact" data-cta-label="page">
                Launch retention sprint
              </Link>
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-200">Prioritized retention queue</p>
          <div className="mt-4 space-y-3">
            {prioritizedLevers.map((lever, index) => (
              <article key={lever.id} className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-semibold text-slate-100">
                    #{index + 1} {lever.name}
                  </p>
                  <p className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-200">
                    Score {lever.score}
                  </p>
                </div>
                <p className="mt-2 text-xs text-slate-300">
                  Impact {lever.baselineImpact} · Confidence {lever.confidence} · Effort {lever.implementationEffort}
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
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="mt-4 block">
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-cyan-300">{label}</span>
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
